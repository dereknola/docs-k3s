"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[422],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||s;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=p;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8220:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=t(3117),o=t(102),s=(t(7294),t(3905)),i=["components"],a={title:"Known Issues",weight:70},u=void 0,l={unversionedId:"known-issues/known-issues",id:"known-issues/known-issues",title:"Known Issues",description:"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release.",source:"@site/docs/known-issues/known-issues.md",sourceDirName:"known-issues",slug:"/known-issues/",permalink:"/known-issues/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/known-issues/known-issues.md",tags:[],version:"current",lastUpdatedAt:1662588184,formattedLastUpdatedAt:"Sep 7, 2022",frontMatter:{title:"Known Issues",weight:70},sidebar:"mySidebar",previous:{title:"K3s Resource Profiling",permalink:"/reference/resource-profiling"},next:{title:"Security",permalink:"/security/"}},c={},d=[{value:"Snap Docker",id:"snap-docker",level:3},{value:"Iptables",id:"iptables",level:3},{value:"Rootless Mode",id:"rootless-mode",level:3}],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release."),(0,s.kt)("h3",{id:"snap-docker"},"Snap Docker"),(0,s.kt)("p",null,"If you plan to use K3s with docker, Docker installed via a snap package is not recommended as it has been known to cause issues running K3s."),(0,s.kt)("h3",{id:"iptables"},"Iptables"),(0,s.kt)("p",null,"If you are running iptables in nftables mode instead of legacy you might encounter issues. We recommend utilizing newer iptables (such as 1.6.1+) to avoid issues. "),(0,s.kt)("p",null,"Additionally, versions 1.8.0-1.8.4 have known issues that can cause K3s to fail. See ",(0,s.kt)("a",{parentName:"p",href:"/advanced/#additional-preparation-for-debian-buster-based-distributions"},"Additional OS Preparation")," for workarounds. "),(0,s.kt)("h3",{id:"rootless-mode"},"Rootless Mode"),(0,s.kt)("p",null,"Running K3s with Rootless mode is experimental and has several ",(0,s.kt)("a",{parentName:"p",href:"/advanced/#known-issues-with-rootless-mode"},"known issues.")))}f.isMDXComponent=!0}}]);