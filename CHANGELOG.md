## react-gm

- 升级到react16
- 文档 props 增加 `…rest`。有些组件支持 rest ，有些组件不支持，通过文档告知调用者。

### less

className。 增加 gm-font-18

### breaking change

- Menu 改版，随新UI变动
- Dropper => Uploader  
 * 只保留 onUpload 事件，
 * 默认UI变更
- ImportLead onDrop -> onUpload
- Tip 静态方法返回 id

## framework

breaking change

### props 变动

### less

废弃
@gm-framework-top-header-default-height
@gm-framework-top-content-default-height

新增 gm-framework-top-right-default-height