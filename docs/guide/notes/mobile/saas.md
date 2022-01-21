# SAAS部署

## 指南
#### 1. 本地运行
**需要分别启动主应用和微应用的服务**
- **主应用：** 
    - 修改 `/src/views/login.vue` 文件下如图所示地址为微应用本地启动地址
    ![](@img/daimajieshao/app-login.png)
    - 执行 `npm run local`
    - 浏览器访问：`http://localhost:8080/#/login`
- **微应用：**
    - 执行 `npm run saas:local`
    - 在主应用登录后会自动跳转至微应用，无需主动访问微应用地址
#### 2. 部署
**主应用和微应用需分别部署**

- **主应用：**
    - **DEV环境：**`npm run build:dev`
    - **QA环境：**`npm run build:qa`
    - **UAT环境：**`npm run build:uat`
    - **生产环境：**`npm run build:prod`

- **微应用：**
    - **DEV环境：**`npm run build:saasdev`
    - **QA环境：**`npm run build:saasqa`
    - **UAT环境：**`npm run build:saasuat`
    - **生产环境：**`npm run build:saasprod`
#### 3. 开发注意
功能正常在微应用中开发，主应用目前只提供了一个统一登录入口

## 常见问题
### **如何在微应用中区分saas环境**
全局变量 `isSAAS` 或 `process.env.VUE_APP_TYPE === 'saas'`
### **如何使用租户号**
微应用中所有接口请求头中需添加租户号 `Company-No`