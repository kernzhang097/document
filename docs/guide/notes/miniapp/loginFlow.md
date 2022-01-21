# 登录流程

![](@img/daimajieshao/miniapp-login.png)

## 进入首页
1. 调用 `app.js` 里面的 `wx_Login` 方法，通过该方法里面的 `wx.login` 方法获取 `code` 值
2. 再次调用 `wx.getSystemInfo` 获取系统信息存储到本地
3. 设备信息获取成功之后调用 `cstLogin` 方法
```JS
wx_Login: function(fn) {
    var that = this;
    wx.login({
        success: res => {
            if (res.code) {
            // 1.接受返回的code
            const code = res.code;

            // 2.获取设备信息
            wx.getSystemInfo({
                success(res) {
                    // 存储设备信息
                    wx.setStorageSync("model", res.model);
                    wx.setStorageSync('sysInfo', {
                        brand: res.brand,
                        model: res.model,
                        system: res.system,
                        sdkVersion: res.SDKVersion
                    })

                    // 3.调用cstLogin
                    that.cstLogin(code, res.brand, res.model, res.system, res.SDKVersion, fn);
                }
            })

            } else {
                this.message('登录失败！' + res.errMsg)
            }
        },
        fail: res => {}
    })
  },
```
## 调用登录方法
1. `csLogin` 方法参数说明及内部逻辑调用说明
```JS
/**
 * @param code  调用wx.login获取的code值
 * @param brand 调用wx.getSystemInfo返回的brand
 * @param model 调用wx.getSystemInfo返回的model
 * @param system 调用wx.getSystemInfo返回的system
 * @param sdkVersion 调用wx.getSystemInfo返回的sdkVersion
 * @param fn    回调函数
 */
cstLogin: function(code, brand, model, system, sdkVersion, fn) {
    var that = this;
    try {
        const params = {
            code,
            brand,
            model,
            system,
            sdkVersion
        }
        if (that.globalData.parentKey) params.parentKey = that.globalData.parentKey
        // 调用接口获取wxSessionKey, openId
        this.ajaxFunSwaggerBase('/uc/code2Session', {
            code
        }, res => {
            if (res.data.code == 200) {
                const {
                    wxSessionKey,
                    openId
                } = res.data.data
                // 存储到本地
                wx.setStorageSync('wxSessionKey', wxSessionKey)
                wx.setStorageSync('openId', openId)

                // 判断当前接口返回的openid是否和之前存储的openId一致
                if (that.globalData.openId === openId) {
                    fn && fn()
                } else {
                    that.globalData.wxSessionKey = wxSessionKey
                    that.globalData.openId = openId
                    params.openId = openId
                    params.sessionKey = wxSessionKey
                    that.ajaxLogin(params, fn)
                }
            }
        })
    } catch (e) {
        that.message(e)
    }

  },
```
2. 当前接口返回的 `openid` 是和之前存储的 `openId` 一致就执行回调函数，如果不一致就执行 `ajaxLogin` 方法
3. `ajaxLogin` 方法逻辑说明
```JS
ajaxLogin(params, fn) {
    const that = this
    // 1.调用接口获取wxSessionKey, token, 用户id
    this.ajaxFunSwaggerBase('/uc/xcxlogin', params, res => {
        const {
            isNew,
            token,
            userInfo,
            wxSessionKey
        } = res.data.data
        wx.setStorageSync('wxSessionKey', that.globalData.wxSessionKey);
        wx.setStorageSync('token', token);
        that.globalData.token = token
        wx.setStorageSync('id', userInfo.id);

        // 2.判定是否为老用户
        if (!that.globalData.hasTipOld && !isNew && that.globalData.parentKey) {
            wx.showToast({
                title: '该用户已经是老用户了！',
                icon: 'none',
                duration: 5000
            })
        }
        that.globalData.hasTipOld = true

        // 3.获取用户信息
        that.getInfo(fn);
    }, res => {
        console.log(res)
    }, "POST")
  },
```
## 判断是否新用户
1. 点击我的按钮判断 `userInfo.nickname` 存在则直接进入我的页面，否则调用 `bindGetUserInfo` 方法获取用户头像及昵称
2. 用户点击授权成功则调用 `wx.checkSession` 判断 `session_key` 有无失效，没有失效调用 `/uc/xcxCreateUser` 接口绑定用户
```JS
// 获取用户昵称及头像
bindGetUserInfo(e, fn, notDo,fn1) {
    var that = this;
    wx.getUserProfile({
        desc: '用于完善个人信息',
        success: (res) => {
            if (res.userInfo) {
                this.globalData.userInfo = res.userInfo
                // 保存查看操作日志
                that.saveUserOPtLog({
                    actionCode: 'EmpowerPersonData',
                    actionInfo: {
                    WxName: res.userInfo.nickName
                }
            })
            判断session_key是否有效
            wx.checkSession({
                success() {
                    // 1.session_key没有失效，更新用户信息
                    var info = {}
                    var info = that.globalData.userInfo;
                    delete info.rawData;
                    info.encryptedData = res.encryptedData
                    info.iv = res.iv
                    info.openId = wx.getStorageSync('openId')
                    info.systemInfo = wx.getStorageSync('sysInfo')
                    info.wxSessionKey = wx.getStorageSync('wxSessionKey')
                    if (that.globalData.parentUserId) info.parentUserId = that.globalData.parentUserId
                    if (that.globalData.parentKey) info.parentKey = that.globalData.parentKey
                    // 2.绑定用户
                    that.ajaxFunSwaggerBase('/uc/xcxCreateUser', info, res => {
                        if (res.data.code == 200) {
                            that.getInfo(() => {
                                if (notDo) {
                                    if (fn) fn();
                                    return
                                }
                                let url = e.currentTarget.dataset.str || e.target.dataset.str
                                // 根据获取的页面路径做其他逻辑判断
                                if (url) {
                                    if (url == "/pages/myAccount/myAccount" || url.indexOf('recommend') > -1 || url.indexOf('certification') > -1) {
                                        if (wx.getStorageSync('userInfo').tel != null) {
                                        that.urlByState(url);
                                    } else {
                                        that.urlByState('/pages/auth?url=' + url);
                                    }
                                } else {
                                    wx.navigateTo({
                                        url:url,
                                    })
                                }

                                } else if (e.target.dataset.backpage) {
                                //需要回退几个页面且刷新第几个页面的数据
                                let pages = getCurrentPages();

                                var page = pages.length - e.target.dataset.backpage;
                                pages[page - 1].initData();
                                wx.navigateBack({
                                    delta: e.target.dataset.backpage
                                })
                                } else {
                                let pages = getCurrentPages();
                                pages[pages.length - 1].initData();
                                }

                            });
                            if (!notDo) fn && fn();
                        } else {
                        //that.message(res.data.message);
                        }
                    }, res => {
                        //that.message(res.data.message)
                    }, "POST")
                },
                fail() {
                    //that.message('未授权，无法获取信息');

                }
            })
            }
        },
        fail() {
            fn1&&fn1()
            //that.message('未授权，无法获取信息');

        }
        })
    },
```
## 新用户授权手机号
1. 新用户点击我的按钮授权头像昵称之后进入授权服务页进行授权手机号操作
2. 通过其他方式（分享进入等等）首先在授权服务页面进行头像及昵称的授权用户获取用户信息后执行下一步授权获取手机号