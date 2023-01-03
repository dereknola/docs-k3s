"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[292],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={title:"\u5378\u8f7d K3s",weight:61},s=void 0,u={unversionedId:"installation/uninstall",id:"installation/uninstall",title:"\u5378\u8f7d K3s",description:"\u5982\u679c\u4f60\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5b89\u88c5\u4e86 K3s\uff0c\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f1a\u751f\u6210\u4e00\u4e2a\u5378\u8f7d K3s \u7684\u811a\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/zh/installation/uninstall",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/uninstall.md",tags:[],version:"current",lastUpdatedAt:1672781197,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u5378\u8f7d K3s",weight:61},sidebar:"mySidebar",previous:{title:"Kubernetes \u4eea\u8868\u677f",permalink:"/zh/installation/kube-dashboard"},next:{title:"\u96c6\u7fa4\u8bbf\u95ee",permalink:"/zh/cluster-access/"}},c={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5b89\u88c5\u4e86 K3s\uff0c\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f1a\u751f\u6210\u4e00\u4e2a\u5378\u8f7d K3s \u7684\u811a\u672c\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5378\u8f7d K3s \u4f1a\u5220\u9664\u96c6\u7fa4\u6570\u636e\u548c\u6240\u6709\u811a\u672c\u3002\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u5b89\u88c5\u9009\u9879\u91cd\u65b0\u542f\u52a8\u96c6\u7fa4\uff0c\u8bf7\u4f7f\u7528\u4e0d\u540c\u7684\u6807\u5fd7\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u3002")),(0,o.kt)("p",null,"\u8981\u4ece Server \u8282\u70b9\u5378\u8f7d K3s\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-uninstall.sh\n")),(0,o.kt)("p",null,"\u8981\u4ece Agent \u8282\u70b9\u5378\u8f7d K3s\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-agent-uninstall.sh\n")))}d.isMDXComponent=!0}}]);