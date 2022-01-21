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
- 浏览器访问：[http://localhost:8080/#/login](http://localhost:8080/#/login)（注意下端口号，可能有变化 ，默认`8080`）
#### 2. 部署
- **DEV环境：**`npm run build:dev`
- **QA环境：** `npm run build:qa`
- **UAT环境：**`npm run build:uat`
- **生产环境：**`npm run build:prod`
## 常见问题
### **如何新增一个页面**
- 在 `views` 目录下新增一个 `xxx.vue` 文件
- 在 `src/router/menu.js` 文件 `MENU_INFO` 中添加对象
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
    - 第二个参数：其他控制条件
    ```HTML
    <div class="btn" v-haspms="['YW.YJ.BC', show===true]">保存</div>
    ```
### **如何新增字体图标**
- 使用阿里矢量图标库，上传后，点击下图中复制代码，替换 `index.html` 文件中 `href`（如何没有权限，可联系产品3.0前端开发）[iconfont](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2278694&keyword=&project_type=&page=)
![](@img/daimajieshao/iconfont.png)
![](@img/daimajieshao/iconfont2.png)
### **部署后验证码服务无法调用**
- 验证码服务是单独的，修改 `src\components\verifition\utils\axios.js` 文件中 `baseURL`
### **如何查找用户账号**
**后台管理系统**：`配置中心` -> `移动用户管理` -> `项目团队管理` 查找项目下团队的人员，（如果没有，可自行添加），可根据姓名在用户中心下行销自拓用户或案场销售用户中搜索账号，可对该用户进行修改密码、重置密码等操作，能登录的账号必须有已发布项目的权限、菜单权限
### **Git提交规范**
- `feat(版本号)`：jira编号 描述
- `fix(版本号)`：jira编号 描述

例如：`feat(v4.0.3): ZYX-4028 新增案场首页`