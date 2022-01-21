# 独立部署

## 指南
#### 1. 本地运行
- 下载项目 -> 进入项目文件夹 -> 终端执行 `npm install`
- 打开 `vue.config.js` 文件，将 `proxy` 中 `target` 修改为对应服务地址
```JS
proxy: {
    // 接口服务
    '/mapi': {
        target: 'https://zyx.movitech.cn:8443',
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {} //这里重写路径
    },
    // 登录验证码服务
    '/captchaapi': {
        target: 'https://saasdev.movitech.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/captchaapi': '/captchaapi' }
    },
    // 报表服务
    '/rptapi': {
        target: 'https://zyx.movitech.cn:8443',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/rptapi': '/rptapi'
        }
    }
}
```
- 终端执行： `npm run local`
- 浏览器访问：[http://localhost:8089/#/login](http://localhost:8089/#/login)（注意下端口号，可能有变化 ，默认`8089`）
#### 2. 部署
- **DEV环境：**`npm run build:dev`
- **QA环境：**`npm run build:qa`
- **UAT环境：**`npm run build:uat`
- **生产环境：**`npm run build:prod`
#### 3. 首次部署注意
修改环境文件中图片服务器地址 `VUE_APP_IMG_URL` 为项目图片服务器地址（app-h5 整个图片文件夹迁移到项目图片服务器中）
- `.env.dev`
- `.env.qa`
- `.env.uat`
- `.env.prod`
- `.env.local`
```
NODE_ENV = 'production'

VUE_APP_TYPE = 'signle'

VUE_APP_BASE_API = ''

VUE_APP_MODE = 'uat'

#图片路径
VUE_APP_IMG_URL = 'https://zyx-local.obs.myhuaweicloud.com/MP-GWZX/app-h5'
```
#### 4. 文件目录划分
- 主要分为三大模块：案场、自渠、管理 <br>
- 公共页面、api文件放到 `common` 中<br>
- 用户每次登录后使用时只会看到一个模块，有多个时需要在 `我的` 里面进行切换<br>
- 新增页面时在对应模块下新增
## 常见问题
### **如何新增一个页面**
- 在 `views` 目录下新增一个 `xxx.vue` 文件
- 在 `src/router/menu.js` 文件 `menuData` 中添加对象
```JS
{
	path: '页面访问路由',
	viewPath: '页面基于views/下的相对路径',
	name: '路由名称',
}
```
- 此时 已经可以访问上面添加的路由了
### **如何新增权限控制**
- 后台运营中心：
    - 配置中心 -> 基础信息管理 -> 基础功能维护中新增要控制权限的功能
    - 配置中心 -> 移动用户管理 -> 角色权限设置中给角色配置功能
    >（注意：新增的权限code可以维护到菜单脚本中，方便生产环境部署）
- app-h5 使用全局自定义指令 `v-code`
    - 第一个参数：一级功能code
    - 第二个参数：二级功能code
    ```HTML
    <div class="btn" v-code="['ST.HOME.BUTTON', 'ST.HOME.BUTTON.COMPLETE']">完成接待</div>
    ```
### **如何新增图片资源**
- 将图片直接上传到图片服务器（由于 `app-h5` 图片较多，打包后太占用体积，图片资源统一放在图片服务器上）
### **如何新增字体图标**
- 使用阿里矢量图标库，上传后，点击下图中复制代码，替换 `index.html` 文件中 `href`（如何没有权限，可联系产品3.0前端开发）[iconfont](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2278694&keyword=&project_type=&page=)
![](@img/daimajieshao/iconfont.png)
![](@img/daimajieshao/iconfont2.png)
### **部署后验证码服务无法调用**
- 验证码服务是单独的，修改 `src\components\verifition\utils\axios.js` 文件中 `baseURL`
### **如何新增与原生交互方法**
- 原生交互方法统一维护在下面 `git` 项目 [movit-utils](https://git.movit-tech.com/mobile_product/movit-utils) 中 [appMethods.js](https://git.movit-tech.com/mobile_product/movit-utils/blob/master/appMethods.js) 文件中
- 代码中调用示例
```JS
this.$appMethods.ScanCode()
```
### **如何加载图片服务器图片**
- js和dom中使用
```JS
// 图片前缀已定义全局变量
Vue.prototype.$baseImgUrl = process.env.VUE_APP_IMG_URL
```
```HTML
<img :src="$baseImgUrl + /case/customer/icon-collect-on.png" />
```
- css中使用
```CSS
/* 定义全局less变量 */
@baseImgUrl: replace(@imgUrl, '~', '');

background: url('@{baseImgUrl}/takelook-bg.png');
```
### **页面高度计算问题**
- 调用原生方法 `this.$appMethods.getSafeArea()` 获取上下左右的安全距离
- `src\views\mixin\mixin.js` 文件中维护了各场景的内容高度，根据需要使用
- 一般页面内容高度不对可能是使用的计算属性不对
### **页面权限问题**
- App权限统一在后台管理系统中维护
- 选择角色：只有用户有多个模块权限登录时，才会出现选择角色的页面
- 后台管理系统：
    - 可配置一个角色有多个模块功能，比如渠道专员可配置行销自拓和移动案场功能
    - 一个用户只能属于一个团队，自渠团队或销售团队
### **如何查找用户账号**
**后台管理系统**：`配置中心` -> `移动用户管理` -> `项目团队管理` 查找项目下团队的人员，（如果没有，可自行添加），可根据姓名在用户中心下行销自拓用户或案场销售用户中搜索账号，可对该用户进行修改密码、重置密码等操作，能登录的账号必须有已发布项目的权限、菜单权限
### **接口调用说明**
- **Axios请求封装**：`src\request\http.js`
- **接口请求api**：`src\request\api`
- **需要拼接的接口**：例如app上传图片 在 `commonApi.js` 中获取路径

![](@img/daimajieshao/api.png)

### **Config下配置文件说明**
- 案场客户列表字段配置 `src\config\caseCustomerConfig.js`
    - 使用配置可快速实现一个列表页面
    - 可灵活配置tab、排序字段、筛选字段、显示字段、操作（切换、完成接待、设置标签、收藏等）
- 行销自拓客户列表字段配置 `src\config\extensionCustomerConfig.js`
    - 使用配置可快速实现一个列表页面
    - 可灵活配置排序字段、筛选字段、显示字段、操作（设置标签、左滑删除）
- 公共字段配置 `src\config\commonData.js`
    - 用于配置静态字段，页面显示从该文件中获取，便于后续维护
### **如何打开调试工具**
- `src\utils\initApp.js`

![](@img/daimajieshao/debugger.png)


### **Git提交规范**
- `feat(版本号)`：jira编号 描述
- `fix(版本号)`：jira编号 描述

例如：`feat(v4.0.3): ZYX-4028 新增案场首页`
### **px->rem转换**
- 使用 `postcss-pxtorem` 插件进行转换，不需要自己计算 `rem`
- 页面开发时单位使用 `px`（设计图宽度基于 `375px`）
- 如设计图宽度是按照 `750px` 设计的，使用时宽度除以 `2`