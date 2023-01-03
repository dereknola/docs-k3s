"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[622],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=l,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4827:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(3117),l=r(102),a=(r(7294),r(3905)),o=["components"],i={title:"\u505c\u6b62 K3s",weight:4},c=void 0,u={unversionedId:"upgrades/killall",id:"upgrades/killall",title:"\u505c\u6b62 K3s",description:"\u4e3a\u4e86\u5728\u5347\u7ea7\u671f\u95f4\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\uff0cK3s \u5bb9\u5668\u5728 K3s \u670d\u52a1\u505c\u6b62\u65f6\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrades/killall.md",sourceDirName:"upgrades",slug:"/upgrades/killall",permalink:"/docs-k3s/zh/upgrades/killall",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/killall.md",tags:[],version:"current",lastUpdatedAt:1672779848,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u505c\u6b62 K3s",weight:4},sidebar:"mySidebar",previous:{title:"\u5347\u7ea7",permalink:"/docs-k3s/zh/upgrades/"},next:{title:"\u624b\u52a8\u5347\u7ea7",permalink:"/docs-k3s/zh/upgrades/manual"}},s={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a\u4e86\u5728\u5347\u7ea7\u671f\u95f4\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\uff0cK3s \u5bb9\u5668\u5728 K3s \u670d\u52a1\u505c\u6b62\u65f6\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u8981\u505c\u6b62\u6240\u6709 K3s \u5bb9\u5668\u5e76\u91cd\u7f6e\u5bb9\u5668\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-killall.sh")," \u811a\u672c\u3002"),(0,a.kt)("p",null,"killall \u811a\u672c\u80fd\u6e05\u7406\u5bb9\u5668\u3001K3s \u76ee\u5f55\u548c\u7f51\u7edc\u7ec4\u4ef6\uff0c\u540c\u65f6\u8fd8\u80fd\u5220\u9664 iptables \u94fe\u4ee5\u53ca\u6240\u6709\u76f8\u5173\u89c4\u5219\u3002\u96c6\u7fa4\u6570\u636e\u4e0d\u4f1a\u88ab\u5220\u9664\u3002"),(0,a.kt)("p",null,"\u8981\u5728 Server \u8282\u70b9\u4e2d\u8fd0\u884c killall \u811a\u672c\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-killall.sh\n")))}f.isMDXComponent=!0}}]);