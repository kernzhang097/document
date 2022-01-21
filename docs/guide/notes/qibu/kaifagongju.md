# 开发工具

## 安装
前往官网进行下载安装 [Visual Studio Code](https://code.visualstudio.com/)

## 配置
#### 1. 安装常用插件
   - Vetur (必须)
   - Prettier-Code formatter (必须)
   - ESLint (必须)
   - Git Graph (可选)
   - Git History (可选)

#### 2. 格式化配置
- `格式化配置选择Prettier-Code formatter`
- `打开文件->首选项->设置（直接设置用户区）`
- `打开setting.json`
- `复制以下代码到文件中`

```JSON
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "javascriptreact", "vue"],
    "eslint.migration.2_x": "off",
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```
#### 3. 语法检查
配置文件`.editorconfig`、`.eslintrc.js` 文件均以提交到git 直接拉取就好
- .editorconfig
```JSON
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
insert_final_newline = true
```
- .eslintrc.js
```JSON
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    /**
    * "off" 或 0 - 关闭规则
    * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
    * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    */
    rules: {
    //语句结束需要写分号 ；
        semi: [2, 'never'],
        //缩紧为4个空格
        indent: ['error', 4],
        // js 的引号必须是单引号
        quotes: [2, 'single'],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'vue/html-indent': [
            0,
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/max-attributes-per-line': ['off',{
            singleline: 10,
            multiline: {
                max: 1,
                allowFirstline: false
            }
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off'
    }
}
```
#### 4. 消除警告
新增或修改文件时需要解决文件中的警告