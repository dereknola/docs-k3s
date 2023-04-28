"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6328],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(3117),a=(r(7294),r(3905));const l={title:"Stopping K3s",weight:4},o=void 0,i={unversionedId:"upgrades/killall",id:"upgrades/killall",title:"Stopping K3s",description:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/upgrades/killall.md",sourceDirName:"upgrades",slug:"/upgrades/killall",permalink:"/docs-k3s/kr/upgrades/killall",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/killall.md",tags:[],version:"current",lastUpdatedAt:1682707376,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Stopping K3s",weight:4},sidebar:"mySidebar",previous:{title:"\uc5c5\uadf8\ub808\uc774\ub4dc",permalink:"/docs-k3s/kr/upgrades/"},next:{title:"Manual Upgrades",permalink:"/docs-k3s/kr/upgrades/manual"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped."),(0,a.kt)("p",null,"To stop all of the K3s containers and reset the containerd state, the ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-killall.sh")," script can be used."),(0,a.kt)("p",null,"The killall script cleans up containers, K3s directories, and networking components while also removing the iptables chain with all the associated rules. The cluster data will not be deleted."),(0,a.kt)("p",null,"To run the killall script from a server node, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/k3s-killall.sh\n")))}u.isMDXComponent=!0}}]);