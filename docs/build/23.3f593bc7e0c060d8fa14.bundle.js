webpackJsonp([23],{493:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function s(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),c=t(1),d=function(e){return e&&e.__esModule?e:{default:e}}(c),m=t(237),u=function(e){function a(e){l(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={show:!1},t}return s(a,e),r(a,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"handleModalStatic",value:function(){m.Modal.render({children:"我是内容",title:"我是标题",onHide:m.Modal.hide})}},{key:"handleModalRemove",value:function(){m.Modal.render({children:"我是内容",title:"我是标题",onHide:m.Modal.hide}),setTimeout(function(){m.Modal.hide()},2e3)}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("button",{className:"btn btn-default gm-marginRight10",onClick:this.handleModal.bind(this)},"component 形式"),d.default.createElement("button",{className:"btn btn-primary",onClick:this.handleModalStatic.bind(this)},"静态方法形式 + title"),d.default.createElement("button",{className:"btn btn-default",onClick:this.handleModalRemove.bind(this)},"静态方法形式 + 2s关闭"),d.default.createElement(m.Modal,{show:this.state.show,onHide:this.handleModal.bind(this)},"我是内容"))}}]),a}(d.default.Component),f=function(e){function a(e){l(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={show:!1},t}return s(a,e),r(a,[{key:"handleModal",value:function(e){m.Modal.render({children:"我是内容",title:"我是标题",size:e,onHide:m.Modal.hide})}},{key:"handleBigModal",value:function(){m.Modal.render({children:d.default.createElement("div",{style:{height:"1000px",background:"red"}},"我是内容"),title:"我是标题",onHide:m.Modal.hide})}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal.bind(this,"lg")},"lg"),d.default.createElement("button",{className:"btn btn-primary",onClick:this.handleModal.bind(this,"md")},"默认 md"),d.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal.bind(this,"sm")},"sm"),d.default.createElement("button",{className:"btn btn-default",onClick:this.handleBigModal},"内容很大"))}}]),a}(d.default.Component),o=function(e){function a(e){l(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return s(a,e),r(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return d.default.createElement("div",{className:"doc"},d.default.createElement("h2",{id:"modal"},d.default.createElement("a",{className:"header-anchor",href:"#modal","aria-hidden":"true"},"¶")," Modal"),d.default.createElement("p",null,"模态框，出Modal浮层"),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(u,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"ModalWrap")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"show"),": ",d.default.createElement("span",{className:"hljs-literal"},"false"),d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleModal()","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"show"),": !",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state.show",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleModalStatic()","{",d.default.createElement("br",null),"        Modal.render(","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"children"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是内容'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"title"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleModalRemove()","{",d.default.createElement("br",null),"        Modal.render(","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"children"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是内容'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"title"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"        setTimeout(",d.default.createElement("span",{className:"hljs-function"},d.default.createElement("span",{className:"hljs-params"},"()")," =>")," ","{","Modal.hide()","}",", ",d.default.createElement("span",{className:"hljs-number"},"2000"),");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-default gm-marginRight10"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleModal","}"),d.default.createElement("br",null),"                >"),"component 形式",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-primary"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleModalStatic","}"),d.default.createElement("br",null),"                >"),"静态方法形式 + title",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-default"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleModalRemove","}"),d.default.createElement("br",null),"                >"),"静态方法形式 + 2s关闭",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Modal"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"show"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.show","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onHide"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleModal","}"),d.default.createElement("br",null),"                >"),d.default.createElement("br",null),"                    我是内容",d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"Modal"),">"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">")),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<ModalWrap/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(f,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"各种尺寸")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"ModalWrap2")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"show"),": ",d.default.createElement("span",{className:"hljs-literal"},"false"),d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleModal(size)","{",d.default.createElement("br",null),"        Modal.render(","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"children"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是内容'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"title"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",d.default.createElement("br",null),"            size,",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleBigModal()","{",d.default.createElement("br",null),"        Modal.render(","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"children"),": ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","height:")," '",d.default.createElement("span",{className:"hljs-attr"},"1000px"),"', ",d.default.createElement("span",{className:"hljs-attr"},"background:")," '",d.default.createElement("span",{className:"hljs-attr"},"red"),"'","}","}",">"),"我是内容",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">")),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"title"),": ",d.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-default"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.handleModal.bind(this,")," '",d.default.createElement("span",{className:"hljs-attr"},"lg"),"')","}",d.default.createElement("br",null),"                >"),"lg",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-primary"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.handleModal.bind(this,")," '",d.default.createElement("span",{className:"hljs-attr"},"md"),"')","}",d.default.createElement("br",null),"                >"),"默认 md",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-default"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.handleModal.bind(this,")," '",d.default.createElement("span",{className:"hljs-attr"},"sm"),"')","}",d.default.createElement("br",null),"                >"),"sm",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-default"')," ",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.handleBigModal","}"),d.default.createElement("br",null),"                >"),"内容很大",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">")),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<ModalWrap2/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},d.default.createElement("i",null)))))}}]),a}(d.default.Component);a.default=o}});