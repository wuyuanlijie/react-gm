webpackJsonp([46],{550:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),u=l(1),c=function(e){return e&&e.__esModule?e:{default:e}}(u),o=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return r(t,e),d(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return c.default.createElement("div",{className:"doc"},c.default.createElement("p",null,"类名"),c.default.createElement("h2",{id:"bootstrap"},c.default.createElement("a",{className:"header-anchor",href:"#bootstrap","aria-hidden":"true"},"¶")," BootStrap"),c.default.createElement("p",null,c.default.createElement("a",{href:"https://v3.bootcss.com/css/"},"BootStrap")),c.default.createElement("h2",{id:"variables"},c.default.createElement("a",{className:"header-anchor",href:"#variables","aria-hidden":"true"},"¶")," Variables"),c.default.createElement("h2",{id:"ifont"},c.default.createElement("a",{className:"header-anchor",href:"#ifont","aria-hidden":"true"},"¶")," ifont"),c.default.createElement("p",null,c.default.createElement("code",null,".ifont-spin")),c.default.createElement("p",null,c.default.createElement("code",null,"ifont-stack")," ",c.default.createElement("code",null,"ifont-stack-1x")," ",c.default.createElement("code",null,"ifont-stack-2x")),c.default.createElement("p",null,c.default.createElement("code",null,"ifont-inverse")),c.default.createElement("h2",{id:"text"},c.default.createElement("a",{className:"header-anchor",href:"#text","aria-hidden":"true"},"¶")," text"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-text")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-text-red")," ",c.default.createElement("code",null,"gm-text-black")," ",c.default.createElement("code",null,"gm-text-white")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-text-helper")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-font-20")," ",c.default.createElement("code",null,"gm-font-16")," ",c.default.createElement("code",null,"gm-font-14")," ",c.default.createElement("code",null,"gm-font-12")),c.default.createElement("h2",{id:"distance"},c.default.createElement("a",{className:"header-anchor",href:"#distance","aria-hidden":"true"},"¶")," distance"),c.default.createElement("p",null,"0 5 10 15 20"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-gap-5")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-padding-0")," ",c.default.createElement("code",null,"gm-padding-top-0")," ",c.default.createElement("code",null,"gm-padding-bottom-0")," ",c.default.createElement("code",null,"gm-padding-left-0")," ",c.default.createElement("code",null,"gm-padding-right-0")," ",c.default.createElement("code",null,"gm-padding-tb-0")," ",c.default.createElement("code",null,"gm-padding-lr-0")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-margin-0")," ",c.default.createElement("code",null,"gm-margin-top-0")," ",c.default.createElement("code",null,"gm-margin-bottom-0")," ",c.default.createElement("code",null,"gm-margin-left-0")," ",c.default.createElement("code",null,"gm-margin-right-0")," ",c.default.createElement("code",null,"gm-margin-tb-0")," ",c.default.createElement("code",null,"gm-margin-lr-0")),c.default.createElement("h2",{id:"bg"},c.default.createElement("a",{className:"header-anchor",href:"#bg","aria-hidden":"true"},"¶")," bg"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-back-bg")," ",c.default.createElement("code",null,"gm-bg")," ",c.default.createElement("code",null,"gm-hover-bg")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-bg-info")," ",c.default.createElement("code",null,"gm-bg-invalid")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-bg-hover-primary")," ",c.default.createElement("code",null,"gm-bg-focus-primary")," ",c.default.createElement("code",null,"gm-bg-hover-focus-primary")),c.default.createElement("h2",{id:"border"},c.default.createElement("a",{className:"header-anchor",href:"#border","aria-hidden":"true"},"¶")," border"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-border")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-border-top")," ",c.default.createElement("code",null,"gm-border-right")," ",c.default.createElement("code",null,"gm-border-bottom")," ",c.default.createElement("code",null,"gm-border-left")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-border-top-0")," ",c.default.createElement("code",null,"gm-border-right-0")," ",c.default.createElement("code",null,"gm-border-bottom-0")," ",c.default.createElement("code",null,"gm-border-left-0")),c.default.createElement("h2",{id:"display"},c.default.createElement("a",{className:"header-anchor",href:"#display","aria-hidden":"true"},"¶")," display"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-block")," ",c.default.createElement("code",null,"gm-inline-block")," ",c.default.createElement("code",null,"gm-inlne")),c.default.createElement("h2",{id:"cursor"},c.default.createElement("a",{className:"header-anchor",href:"#cursor","aria-hidden":"true"},"¶")," cursor"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-cursor")," ",c.default.createElement("code",null,"gm-not-allowed")),c.default.createElement("h2",{id:"overflow"},c.default.createElement("a",{className:"header-anchor",href:"#overflow","aria-hidden":"true"},"¶")," overflow"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-overflow")," ",c.default.createElement("code",null,"gm-overflow-x")," ",c.default.createElement("code",null,"gm-overflow-y")),c.default.createElement("h2",{id:"shadow"},c.default.createElement("a",{className:"header-anchor",href:"#shadow","aria-hidden":"true"},"¶")," shadow"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-box-shadow-none")," ",c.default.createElement("code",null,"gm-box-shadow-bottom")," ",c.default.createElement("code",null,"gm-box-shadow-top")),c.default.createElement("h2",{id:"animation"},c.default.createElement("a",{className:"header-anchor",href:"#animation","aria-hidden":"true"},"¶")," animation"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-animated")," ",c.default.createElement("code",null,"gm-animated-fade-in-right")),c.default.createElement("h2",{id:"arrow"},c.default.createElement("a",{className:"header-anchor",href:"#arrow","aria-hidden":"true"},"¶")," arrow"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-arrow-down")," ",c.default.createElement("code",null,"gm-arrow-up")," ",c.default.createElement("code",null,"gm-arrow-right")),c.default.createElement("h2",{id:"other"},c.default.createElement("a",{className:"header-anchor",href:"#other","aria-hidden":"true"},"¶")," other"),c.default.createElement("p",null,c.default.createElement("code",null,"gm-invalid")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-filter-blur")," ",c.default.createElement("code",null,"gm-filter-blur-transition")),c.default.createElement("p",null,c.default.createElement("code",null,"gm-position-fixed")," ",c.default.createElement("code",null,"gm-position-absolute")," ",c.default.createElement("code",null,"gm-position-relative")))}}]),t}(c.default.Component);t.default=o}});