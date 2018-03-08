---
imports:
    import {Uploader} from '../../src/index';
---
## Uploader

上传文件

::: demo
```jsx
<div>
    <Uploader onUpload={() => console.log(arguments)} accept="image/*"/>

    <br>

    <Uploader className="gm-uploader-wrap" onUpload={() => console.log(arguments)} accept=".xlsx">
        <button className="btn btn-default">upload</button>
    </Uploader>
</div>
```
:::

### Props
- `multiple (bool)` 是否多选，默认false。 **Android微信**不支持多选，内部已经判断是微信就不开放多选功能
- `accept (string)` 选择的类型，比如图片 `image/*`，excel `.xlsx`，具体见HTML5规范
- `onUpload (func)` 选择图片后触发函数
- `children` 提供自定义选择图片的触发区域，如果不传则默认UI
- `...rest`