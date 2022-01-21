# 底部导航栏

## 预览
<br>
<div align=center style="background-color:#ccc;padding: 10px 0;">
    <img src="@img/zujian/tabbar.png">
</div>

## 引用组件

```JS
import TopBar from '@/components/TopBar'
```
```HTML
<TopBar title="客户">
    <span slot="append-suffix" class="iconfont iconsousuo"></span>
</TopBar>
```

## 参数说明

参数|说明|类型|是否必填|可选值|默认值
-|-|-|-|-|-
title|导航栏标题|string|false|-|-
back|是否显示返回按钮|boolean|false|true / false|true
backPath|指定返回路径(需back值为true)|string|false|-|-
needWhite|是否需要底色|boolean|false|true / false|false

## 事件说明

事件名|说明|回调参数
-|-|-
back|点击返回按钮时触发|-
## 示例
```HTML
<template>
    <TopBar title="客户" back-path="-" @back="back">
        <span slot="append-suffix" class="iconfont iconsousuo"></span>
    </TopBar>
</template>
```
```JS
<script>
import TopBar from '@/components/TopBar'
export default {
    methods: {
        back() {}
    }
}
</script>
```

:::tip
使用 `back` 事件时，需将 `backPath` 设置为 `'-'`
:::
