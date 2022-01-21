# 搜索

## 预览
<br>
<div align=center style="background-color:#ccc;padding: 10px 0;">
    <img src="@img/zujian/search.png">
</div>

## 引用组件

```JS
import SearchBar from '@/components/SearchBar'
```
```HTML
<search-bar placeholder="请输入客户姓名/手机号/客户描述查询" readonly @focus="goUrl" />
```

## 参数说明

参数|说明|类型|是否必填|可选值|默认值
-|-|-|-|-|-
data|输入框内容|string|false|-|-
back|输入框左侧返回按钮|boolean|false|true / false|false
filter|是否显示输入框右侧内容(外)(通过slot插入)|boolean|false|true / false|false
placeholder|占位提示文字|string|false|-|-
readonly|是否将输入框设为只读|boolean|false|true / false|false
disabled|是否禁用输入框|boolean|false|true / false|false
autofocus|是否自动聚焦，iOS 系统不支持该属性|boolean|false|true / false|false

## 事件说明

事件名|说明|回调参数
-|-|-
returnSearch|确定搜索时触发|value: string (当前输入的值)
focus|输入框获得焦点时触发|event: Event
blur|输入框失去焦点时触发|event: Event
changeInput|输入框内容变化时触发|value: string (当前输入的值)

## slot
名称|说明
-|-
filter-append|自定义右侧内容（搜索框外）
## 示例
```HTML
<template>
    <search-bar placeholder="请输入客户姓名/手机号/客户描述查询" readonly @focus="goUrl">
        <div slot="filter-append"><span @click="search">搜索</span></div>
    </search-bar>
</template>
```
```JS
<script>
import SearchBar from '@/components/SearchBar'
export default {
    methods: {
        goUrl() {}
        search() {}
    }
}
</script>
```
