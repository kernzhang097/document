(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(t,s,a){t.exports=a.p+"assets/img/iconfont.e3ca33a0.png"},351:function(t,s,a){t.exports=a.p+"assets/img/iconfont2.ad356bc9.png"},401:function(t,s,a){t.exports=a.p+"assets/img/api.0ba27fee.png"},402:function(t,s,a){t.exports=a.p+"assets/img/debugger.da7818fc.png"},419:function(t,s,a){"use strict";a.r(s);var r=a(57),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"独立部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#独立部署"}},[t._v("#")]),t._v(" 独立部署")]),t._v(" "),r("h2",{attrs:{id:"指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#指南"}},[t._v("#")]),t._v(" 指南")]),t._v(" "),r("h4",{attrs:{id:"_1-本地运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地运行"}},[t._v("#")]),t._v(" 1. 本地运行")]),t._v(" "),r("ul",[r("li",[t._v("下载项目 -> 进入项目文件夹 -> 终端执行 "),r("code",[t._v("npm install")])]),t._v(" "),r("li",[t._v("打开 "),r("code",[t._v("vue.config.js")]),t._v(" 文件，将 "),r("code",[t._v("proxy")]),t._v(" 中 "),r("code",[t._v("target")]),t._v(" 修改为对应服务地址")])]),t._v(" "),r("div",{staticClass:"language-JS line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxy")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口服务")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/mapi'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://zyx.movitech.cn:8443'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ws")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//// 是否启用websockets")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pathRewrite")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里重写路径")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录验证码服务")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/captchaapi'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://saasdev.movitech.cn'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ws")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pathRewrite")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'^/captchaapi'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/captchaapi'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报表服务")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/rptapi'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://zyx.movitech.cn:8443'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ws")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pathRewrite")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'^/rptapi'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/rptapi'")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br"),r("span",{staticClass:"line-number"},[t._v("14")]),r("br"),r("span",{staticClass:"line-number"},[t._v("15")]),r("br"),r("span",{staticClass:"line-number"},[t._v("16")]),r("br"),r("span",{staticClass:"line-number"},[t._v("17")]),r("br"),r("span",{staticClass:"line-number"},[t._v("18")]),r("br"),r("span",{staticClass:"line-number"},[t._v("19")]),r("br"),r("span",{staticClass:"line-number"},[t._v("20")]),r("br"),r("span",{staticClass:"line-number"},[t._v("21")]),r("br"),r("span",{staticClass:"line-number"},[t._v("22")]),r("br"),r("span",{staticClass:"line-number"},[t._v("23")]),r("br"),r("span",{staticClass:"line-number"},[t._v("24")]),r("br"),r("span",{staticClass:"line-number"},[t._v("25")]),r("br")])]),r("ul",[r("li",[t._v("终端执行： "),r("code",[t._v("npm run local")])]),t._v(" "),r("li",[t._v("浏览器访问："),r("a",{attrs:{href:"http://localhost:8089/#/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8089/#/login"),r("OutboundLink")],1),t._v("（注意下端口号，可能有变化 ，默认"),r("code",[t._v("8089")]),t._v("）")])]),t._v(" "),r("h4",{attrs:{id:"_2-部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署"}},[t._v("#")]),t._v(" 2. 部署")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("DEV环境：")]),r("code",[t._v("npm run build:dev")])]),t._v(" "),r("li",[r("strong",[t._v("QA环境：")]),r("code",[t._v("npm run build:qa")])]),t._v(" "),r("li",[r("strong",[t._v("UAT环境：")]),r("code",[t._v("npm run build:uat")])]),t._v(" "),r("li",[r("strong",[t._v("生产环境：")]),r("code",[t._v("npm run build:prod")])])]),t._v(" "),r("h4",{attrs:{id:"_3-首次部署注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-首次部署注意"}},[t._v("#")]),t._v(" 3. 首次部署注意")]),t._v(" "),r("p",[t._v("修改环境文件中图片服务器地址 "),r("code",[t._v("VUE_APP_IMG_URL")]),t._v(" 为项目图片服务器地址（app-h5 整个图片文件夹迁移到项目图片服务器中）")]),t._v(" "),r("ul",[r("li",[r("code",[t._v(".env.dev")])]),t._v(" "),r("li",[r("code",[t._v(".env.qa")])]),t._v(" "),r("li",[r("code",[t._v(".env.uat")])]),t._v(" "),r("li",[r("code",[t._v(".env.prod")])]),t._v(" "),r("li",[r("code",[t._v(".env.local")])])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("NODE_ENV = 'production'\n\nVUE_APP_TYPE = 'signle'\n\nVUE_APP_BASE_API = ''\n\nVUE_APP_MODE = 'uat'\n\n#图片路径\nVUE_APP_IMG_URL = 'https://zyx-local.obs.myhuaweicloud.com/MP-GWZX/app-h5'\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br")])]),r("h4",{attrs:{id:"_4-文件目录划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件目录划分"}},[t._v("#")]),t._v(" 4. 文件目录划分")]),t._v(" "),r("ul",[r("li",[t._v("主要分为三大模块：案场、自渠、管理 "),r("br")]),t._v(" "),r("li",[t._v("公共页面、api文件放到 "),r("code",[t._v("common")]),t._v(" 中"),r("br")]),t._v(" "),r("li",[t._v("用户每次登录后使用时只会看到一个模块，有多个时需要在 "),r("code",[t._v("我的")]),t._v(" 里面进行切换"),r("br")]),t._v(" "),r("li",[t._v("新增页面时在对应模块下新增")])]),t._v(" "),r("h2",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),r("h3",{attrs:{id:"如何新增一个页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何新增一个页面"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何新增一个页面")])]),t._v(" "),r("ul",[r("li",[t._v("在 "),r("code",[t._v("views")]),t._v(" 目录下新增一个 "),r("code",[t._v("xxx.vue")]),t._v(" 文件")]),t._v(" "),r("li",[t._v("在 "),r("code",[t._v("src/router/menu.js")]),t._v(" 文件 "),r("code",[t._v("menuData")]),t._v(" 中添加对象")])]),t._v(" "),r("div",{staticClass:"language-JS line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面访问路由'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("viewPath")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面基于views/下的相对路径'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'路由名称'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("ul",[r("li",[t._v("此时 已经可以访问上面添加的路由了")])]),t._v(" "),r("h3",{attrs:{id:"如何新增权限控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何新增权限控制"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何新增权限控制")])]),t._v(" "),r("ul",[r("li",[t._v("后台运营中心：\n"),r("ul",[r("li",[t._v("配置中心 -> 基础信息管理 -> 基础功能维护中新增要控制权限的功能")]),t._v(" "),r("li",[t._v("配置中心 -> 移动用户管理 -> 角色权限设置中给角色配置功能")])]),t._v(" "),r("blockquote",[r("p",[t._v("（注意：新增的权限code可以维护到菜单脚本中，方便生产环境部署）")])])]),t._v(" "),r("li",[t._v("app-h5 使用全局自定义指令 "),r("code",[t._v("v-code")]),t._v(" "),r("ul",[r("li",[t._v("第一个参数：一级功能code")]),t._v(" "),r("li",[t._v("第二个参数：二级功能code")])]),t._v(" "),r("div",{staticClass:"language-HTML line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-code")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("ST.HOME.BUTTON"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("ST.HOME.BUTTON.COMPLETE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("完成接待"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])])])]),t._v(" "),r("h3",{attrs:{id:"如何新增图片资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何新增图片资源"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何新增图片资源")])]),t._v(" "),r("ul",[r("li",[t._v("将图片直接上传到图片服务器（由于 "),r("code",[t._v("app-h5")]),t._v(" 图片较多，打包后太占用体积，图片资源统一放在图片服务器上）")])]),t._v(" "),r("h3",{attrs:{id:"如何新增字体图标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何新增字体图标"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何新增字体图标")])]),t._v(" "),r("ul",[r("li",[t._v("使用阿里矢量图标库，上传后，点击下图中复制代码，替换 "),r("code",[t._v("index.html")]),t._v(" 文件中 "),r("code",[t._v("href")]),t._v("（如何没有权限，可联系产品3.0前端开发）"),r("a",{attrs:{href:"https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2278694&keyword=&project_type=&page=",target:"_blank",rel:"noopener noreferrer"}},[t._v("iconfont"),r("OutboundLink")],1),t._v(" "),r("img",{attrs:{src:a(350),alt:""}}),t._v(" "),r("img",{attrs:{src:a(351),alt:""}})])]),t._v(" "),r("h3",{attrs:{id:"部署后验证码服务无法调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署后验证码服务无法调用"}},[t._v("#")]),t._v(" "),r("strong",[t._v("部署后验证码服务无法调用")])]),t._v(" "),r("ul",[r("li",[t._v("验证码服务是单独的，修改 "),r("code",[t._v("src\\components\\verifition\\utils\\axios.js")]),t._v(" 文件中 "),r("code",[t._v("baseURL")])])]),t._v(" "),r("h3",{attrs:{id:"如何新增与原生交互方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何新增与原生交互方法"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何新增与原生交互方法")])]),t._v(" "),r("ul",[r("li",[t._v("原生交互方法统一维护在下面 "),r("code",[t._v("git")]),t._v(" 项目 "),r("a",{attrs:{href:"https://git.movit-tech.com/mobile_product/movit-utils",target:"_blank",rel:"noopener noreferrer"}},[t._v("movit-utils"),r("OutboundLink")],1),t._v(" 中 "),r("a",{attrs:{href:"https://git.movit-tech.com/mobile_product/movit-utils/blob/master/appMethods.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("appMethods.js"),r("OutboundLink")],1),t._v(" 文件中")]),t._v(" "),r("li",[t._v("代码中调用示例")])]),t._v(" "),r("div",{staticClass:"language-JS line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$appMethods"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScanCode")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h3",{attrs:{id:"如何加载图片服务器图片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何加载图片服务器图片"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何加载图片服务器图片")])]),t._v(" "),r("ul",[r("li",[t._v("js和dom中使用")])]),t._v(" "),r("div",{staticClass:"language-JS line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片前缀已定义全局变量")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$baseImgUrl "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_IMG_URL")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("div",{staticClass:"language-HTML line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-html"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$baseImgUrl + /case/customer/icon-collect-on.png"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("ul",[r("li",[t._v("css中使用")])]),t._v(" "),r("div",{staticClass:"language-CSS line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义全局less变量 */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token atrule"}},[r("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@baseImgUrl")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token atrule"}},[r("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@imgUrl")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token url"}},[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'@{baseImgUrl}/takelook-bg.png'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("h3",{attrs:{id:"页面高度计算问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面高度计算问题"}},[t._v("#")]),t._v(" "),r("strong",[t._v("页面高度计算问题")])]),t._v(" "),r("ul",[r("li",[t._v("调用原生方法 "),r("code",[t._v("this.$appMethods.getSafeArea()")]),t._v(" 获取上下左右的安全距离")]),t._v(" "),r("li",[r("code",[t._v("src\\views\\mixin\\mixin.js")]),t._v(" 文件中维护了各场景的内容高度，根据需要使用")]),t._v(" "),r("li",[t._v("一般页面内容高度不对可能是使用的计算属性不对")])]),t._v(" "),r("h3",{attrs:{id:"页面权限问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面权限问题"}},[t._v("#")]),t._v(" "),r("strong",[t._v("页面权限问题")])]),t._v(" "),r("ul",[r("li",[t._v("App权限统一在后台管理系统中维护")]),t._v(" "),r("li",[t._v("选择角色：只有用户有多个模块权限登录时，才会出现选择角色的页面")]),t._v(" "),r("li",[t._v("后台管理系统：\n"),r("ul",[r("li",[t._v("可配置一个角色有多个模块功能，比如渠道专员可配置行销自拓和移动案场功能")]),t._v(" "),r("li",[t._v("一个用户只能属于一个团队，自渠团队或销售团队")])])])]),t._v(" "),r("h3",{attrs:{id:"如何查找用户账号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何查找用户账号"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何查找用户账号")])]),t._v(" "),r("p",[r("strong",[t._v("后台管理系统")]),t._v("："),r("code",[t._v("配置中心")]),t._v(" -> "),r("code",[t._v("移动用户管理")]),t._v(" -> "),r("code",[t._v("项目团队管理")]),t._v(" 查找项目下团队的人员，（如果没有，可自行添加），可根据姓名在用户中心下行销自拓用户或案场销售用户中搜索账号，可对该用户进行修改密码、重置密码等操作，能登录的账号必须有已发布项目的权限、菜单权限")]),t._v(" "),r("h3",{attrs:{id:"接口调用说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口调用说明"}},[t._v("#")]),t._v(" "),r("strong",[t._v("接口调用说明")])]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Axios请求封装")]),t._v("："),r("code",[t._v("src\\request\\http.js")])]),t._v(" "),r("li",[r("strong",[t._v("接口请求api")]),t._v("："),r("code",[t._v("src\\request\\api")])]),t._v(" "),r("li",[r("strong",[t._v("需要拼接的接口")]),t._v("：例如app上传图片 在 "),r("code",[t._v("commonApi.js")]),t._v(" 中获取路径")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(401),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"config下配置文件说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#config下配置文件说明"}},[t._v("#")]),t._v(" "),r("strong",[t._v("Config下配置文件说明")])]),t._v(" "),r("ul",[r("li",[t._v("案场客户列表字段配置 "),r("code",[t._v("src\\config\\caseCustomerConfig.js")]),t._v(" "),r("ul",[r("li",[t._v("使用配置可快速实现一个列表页面")]),t._v(" "),r("li",[t._v("可灵活配置tab、排序字段、筛选字段、显示字段、操作（切换、完成接待、设置标签、收藏等）")])])]),t._v(" "),r("li",[t._v("行销自拓客户列表字段配置 "),r("code",[t._v("src\\config\\extensionCustomerConfig.js")]),t._v(" "),r("ul",[r("li",[t._v("使用配置可快速实现一个列表页面")]),t._v(" "),r("li",[t._v("可灵活配置排序字段、筛选字段、显示字段、操作（设置标签、左滑删除）")])])]),t._v(" "),r("li",[t._v("公共字段配置 "),r("code",[t._v("src\\config\\commonData.js")]),t._v(" "),r("ul",[r("li",[t._v("用于配置静态字段，页面显示从该文件中获取，便于后续维护")])])])]),t._v(" "),r("h3",{attrs:{id:"如何打开调试工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何打开调试工具"}},[t._v("#")]),t._v(" "),r("strong",[t._v("如何打开调试工具")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("src\\utils\\initApp.js")])])]),t._v(" "),r("p",[r("img",{attrs:{src:a(402),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"git提交规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git提交规范"}},[t._v("#")]),t._v(" "),r("strong",[t._v("Git提交规范")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("feat(版本号)")]),t._v("：jira编号 描述")]),t._v(" "),r("li",[r("code",[t._v("fix(版本号)")]),t._v("：jira编号 描述")])]),t._v(" "),r("p",[t._v("例如："),r("code",[t._v("feat(v4.0.3): ZYX-4028 新增案场首页")])]),t._v(" "),r("h3",{attrs:{id:"px-rem转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px-rem转换"}},[t._v("#")]),t._v(" "),r("strong",[t._v("px->rem转换")])]),t._v(" "),r("ul",[r("li",[t._v("使用 "),r("code",[t._v("postcss-pxtorem")]),t._v(" 插件进行转换，不需要自己计算 "),r("code",[t._v("rem")])]),t._v(" "),r("li",[t._v("页面开发时单位使用 "),r("code",[t._v("px")]),t._v("（设计图宽度基于 "),r("code",[t._v("375px")]),t._v("）")]),t._v(" "),r("li",[t._v("如设计图宽度是按照 "),r("code",[t._v("750px")]),t._v(" 设计的，使用时宽度除以 "),r("code",[t._v("2")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);