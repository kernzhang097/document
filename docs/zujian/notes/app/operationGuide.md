# 操作指引

## 预览
<br>
<div align=center>
    <img src="@img/zujian/operationGuide.gif" height="600">
</div>

## 引用组件

```JS
import OperationGuide from '@/components/OperationGuide'
```
```HTML
<OperationGuide v-model="showGuide" :steps="steps" />
```

## 参数说明
#### v-model
控制操作指引显隐
- **类型**：`Boolean`
- **默认值**：`false`

#### steps
- **类型**：`Array`
- **默认值**: `[]`
- **用法**：
```JS
steps: [
    {
        target: 'step1',
        content: '点击删除统计维度',
        position: 'bottom'
    },
    {
        target: 'step2',
        content: '拖动统计维度排序',
        position: 'bottom'
    },
    {
        target: 'step3',
        content: '点击前往添加统计维度',
        position: 'top'
    }
]
```
**steps参数说明**：
参数|说明|类型|是否必填|可选值|默认值
-|-|-|-|-|-
target|操作指引指示的节点ref值|string|true|-|-
content|操作指引显示的内容|string|true|-|-
poistion|操作指引相对于目标节点的位置|string|true|top / bottom|-

## 示例
```HTML
<template>
    <el-button ref="step1">保存</el-button>
    <OperationGuide v-model="show" :steps="steps" />
</template>
```
```JS
<script>
import OperationGuide from '@/components/OperationGuide'
export default {
    data() {
        return {
            show: false,
            steps: [
                {
                    target: 'step1',
                    content: '点击保存',
                    position: 'top'
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.showGuide = this.$utils.showGuide('demo')
        })
    }
}
</script>
```

:::tip
通常操作指引只在第一次进入页面时展示，可以用缓存来记录是否需要展示，所以在全局utils中封装了showGuide方法来判断是否展示。
<br>
`this.$utils.showGuide(name)`
<br>
name为当前页面的标记名，不可重复，返回值为`boolean`，`true`为展示，`false`为不展示
:::
