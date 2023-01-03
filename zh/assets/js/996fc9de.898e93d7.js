"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[874],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,d=c["".concat(p,".").concat(m)]||c[m]||k[m]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9905:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return k}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528",weight:30},p=void 0,s={unversionedId:"installation/ha",id:"installation/ha",title:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528",description:"\u6ce8\u610f\uff1a\u6211\u4eec\u5728 v1.0.0 \u7248\u672c\u4e2d\u5f15\u5165\u4e86\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u5b98\u65b9\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/ha.md",sourceDirName:"installation",slug:"/installation/ha",permalink:"/zh/installation/ha",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/ha.md",tags:[],version:"current",lastUpdatedAt:1672781197,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528",weight:30},sidebar:"mySidebar",previous:{title:"\u7f51\u7edc\u9009\u9879",permalink:"/zh/installation/network-options"},next:{title:"\u5177\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528",permalink:"/zh/installation/ha-embedded"}},u={},k=[{value:"\u5b89\u88c5\u6982\u8981",id:"\u5b89\u88c5\u6982\u8981",level:2},{value:"1. \u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8",id:"1-\u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8",level:3},{value:"2. \u542f\u52a8 Server \u8282\u70b9",id:"2-\u542f\u52a8-server-\u8282\u70b9",level:3},{value:"3. \u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",id:"3-\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740",level:3},{value:"4. \u53ef\u9009\uff1a\u52a0\u5165\u5176\u5b83 Server \u8282\u70b9",id:"4-\u53ef\u9009\u52a0\u5165\u5176\u5b83-server-\u8282\u70b9",level:3},{value:"5. \u53ef\u9009\uff1a\u52a0\u5165 Agent \u8282\u70b9",id:"5-\u53ef\u9009\u52a0\u5165-agent-\u8282\u70b9",level:3}],c={toc:k};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6211\u4eec\u5728 v1.0.0 \u7248\u672c\u4e2d\u5f15\u5165\u4e86\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u5b98\u65b9\u652f\u6301\u3002")),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b89\u88c5\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528 K3s \u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u5355\u670d\u52a1\u5668\u96c6\u7fa4\u53ef\u4ee5\u6ee1\u8db3\u5404\u79cd\u7528\u4f8b\uff0c\u4f46\u5982\u679c\u4f60\u7684\u73af\u5883\u5bf9 Kubernetes control plane \u7684\u6b63\u5e38\u8fd0\u884c\u65f6\u95f4\u6709\u8981\u6c42\uff0c\u4f60\u53ef\u4ee5\u5728 HA \u914d\u7f6e\u4e2d\u8fd0\u884c K3s\u3002\u4e00\u4e2a HA K3s \u96c6\u7fa4\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6216\u591a\u4e2a ",(0,l.kt)("strong",{parentName:"li"},"Server \u8282\u70b9"),"\u4e3a Kubernetes API \u63d0\u4f9b\u670d\u52a1\u5e76\u8fd0\u884c\u5176\u4ed6 control plane \u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u96f6\u4e2a\u6216\u591a\u4e2a ",(0,l.kt)("strong",{parentName:"li"},"Agent \u8282\u70b9"),"\uff0c\u7528\u4e8e\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5916\u90e8\u6570\u636e\u5b58\u50a8"),"\uff08\u4e0e\u5355\u8282\u70b9\u8bbe\u7f6e\u4e2d\u4f7f\u7528\u7684\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5b58\u50a8\u76f8\u53cd\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5728 Server \u8282\u70b9\u524d\u9762\u7684",(0,l.kt)("strong",{parentName:"li"},"\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"),"\uff0c\u7528\u4e8e\u8ba9 Agent \u8282\u70b9\u6ce8\u518c\u5230\u96c6\u7fa4")),(0,l.kt)("p",null,"\u6709\u5173\u8fd9\u4e9b\u7ec4\u4ef6\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/architecture/#%E5%85%B7%E6%9C%89%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E9%AB%98%E5%8F%AF%E7%94%A8-k3s-server"},"\u67b6\u6784"),"\u3002"),(0,l.kt)("p",null,"Agent \u901a\u8fc7\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740\u8fdb\u884c\u6ce8\u518c\uff0c\u4f46\u6ce8\u518c\u540e\u76f4\u63a5\u4e0e\u5176\u4e2d\u4e00\u4e2a Server \u8282\u70b9\u5efa\u7acb\u8fde\u63a5\u3002\u8fd9\u662f\u4e00\u4e2a\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s agent")," \u8fdb\u7a0b\u53d1\u8d77\u7684 WebSocket \u8fde\u63a5\uff0c\u5e76\u7531\u4f5c\u4e3a agent \u8fdb\u7a0b\u4e00\u90e8\u5206\u8fd0\u884c\u7684\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u7ef4\u62a4\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u6982\u8981"},"\u5b89\u88c5\u6982\u8981"),(0,l.kt)("p",null,"\u8bbe\u7f6e HA \u96c6\u7fa4\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8"},"\u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-%E5%90%AF%E5%8A%A8-server-%E8%8A%82%E7%82%B9"},"\u542f\u52a8 Server \u8282\u70b9")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-%E9%85%8D%E7%BD%AE%E5%9B%BA%E5%AE%9A%E7%9A%84%E6%B3%A8%E5%86%8C%E5%9C%B0%E5%9D%80"},"\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-%E5%8F%AF%E9%80%89-%E5%8A%A0%E5%85%A5-agent-%E8%8A%82%E7%82%B9"},"\u52a0\u5165 Agent \u8282\u70b9"))),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8"},"1. \u521b\u5efa\u5916\u90e8\u6570\u636e\u5b58\u50a8"),(0,l.kt)("p",null,"\u4f60\u9996\u5148\u9700\u8981\u4e3a\u96c6\u7fa4\u521b\u5efa\u4e00\u4e2a\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/datastore"},"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8\u9009\u9879"),"\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"2-\u542f\u52a8-server-\u8282\u70b9"},"2. \u542f\u52a8 Server \u8282\u70b9"),(0,l.kt)("p",null,"K3s \u9700\u8981\u4e24\u4e2a\u6216\u66f4\u591a\u7684 Server \u8282\u70b9\u6765\u5b9e\u73b0 HA \u914d\u7f6e\u3002\u6709\u5173\u6700\u4f4e\u4e3b\u673a\u8981\u6c42\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/requirements"},"\u5b89\u88c5\u8981\u6c42"),"\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u4e9b\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s server")," \u547d\u4ee4\u65f6\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," \u53c2\u6570\uff0c\u4ee5\u4fbf K3s \u77e5\u9053\u5982\u4f55\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"token")," \u53c2\u6570\u4e5f\u53ef\u4ee5\u7528\u6765\u5728\u6dfb\u52a0\u8282\u70b9\u65f6\u8bbe\u7f6e\u4e00\u4e2a\u56fa\u5b9a\u7684 token\u3002\u5f53\u4e3a\u7a7a\u65f6\uff0c\u5c06\u81ea\u52a8\u751f\u6210 token\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 K3s Server\uff0c\u5e76\u4f7f\u7528 MySQL \u6570\u636e\u5e93\u4f5c\u4e3a\u5916\u90e8\u6570\u636e\u5b58\u50a8\u548c",(0,l.kt)("a",{parentName:"p",href:"/zh/reference/server-config#%E9%9B%86%E7%BE%A4%E9%80%89%E9%A1%B9"},"\u8bbe\u7f6e token"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,l.kt)("p",null,"\u6839\u636e\u6570\u636e\u5e93\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u7684\u683c\u5f0f\u4e5f\u4e0d\u540c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/datastore#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E7%AB%AF%E7%82%B9%E6%A0%BC%E5%BC%8F%E5%92%8C%E5%8A%9F%E8%83%BD"},"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f"),"\u3002"),(0,l.kt)("p",null,"\u8981\u5728\u542f\u52a8 server \u8282\u70b9\u65f6\u914d\u7f6e TLS \u8bc1\u4e66\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/datastore#%E5%A4%96%E9%83%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"},"\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u6307\u5357"),"\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5355\u53f0 Server \u5b89\u88c5\u65f6\u53ef\u7528\u7684\u5b89\u88c5\u9009\u9879\u4e5f\u9002\u7528\u4e8e\u9ad8\u53ef\u7528\u5b89\u88c5\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/configuration"},"\u914d\u7f6e\u9009\u9879"),"\u6587\u6863\u3002")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cServer \u8282\u70b9\u662f\u53ef\u8c03\u5ea6\u7684\uff0c\u56e0\u6b64\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u53ef\u4ee5\u5728\u5b83\u4eec\u4e0a\u542f\u52a8\u3002\u5982\u679c\u4f60\u5e0c\u671b\u62e5\u6709\u4e00\u4e2a\u4e0d\u4f1a\u8fd0\u884c\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u7684\u4e13\u7528 control plane\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6c61\u70b9\uff08taint\uff09\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"node-taint")," \u53c2\u6570\u5c06\u5141\u8bb8\u4f60\u914d\u7f6e\u5e26\u6709\u6c61\u70b9\u7684\u8282\u70b9\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"--node-taint CriticalAddonsOnly=true:NoExecute"),"\u3002"),(0,l.kt)("p",null,"\u5728\u6240\u6709 server \u8282\u70b9\u4e0a\u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s server")," \u8fdb\u7a0b\u540e\uff0c\u8bf7\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"k3s kubectl get nodes")," \u786e\u4fdd\u96c6\u7fa4\u5df2\u6b63\u786e\u542f\u52a8\u3002\u4f60\u5e94\u8be5\u770b\u5230 server \u8282\u70b9\u5904\u4e8e Ready \u72b6\u6001\u3002"),(0,l.kt)("h3",{id:"3-\u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"},"3. \u914d\u7f6e\u56fa\u5b9a\u7684\u6ce8\u518c\u5730\u5740"),(0,l.kt)("p",null,"Agent \u8282\u70b9\u9700\u8981\u4e00\u4e2a URL \u6765\u6ce8\u518c\u3002\u8fd9\u53ef\u4ee5\u662f\u4efb\u4f55 server \u8282\u70b9\u7684 IP \u6216\u4e3b\u673a\u540d\uff0c\u4f46\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u8282\u70b9\u53ef\u80fd\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u6539\u53d8\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5728\u652f\u6301\u7f29\u653e\u7ec4\u7684\u4e91\u4e2d\u8fd0\u884c\u96c6\u7fa4\uff0c\u4f60\u53ef\u80fd\u4f1a\u7eb5\u5411\u7f29\u653e Server \u8282\u70b9\u7ec4\uff0c\u5bfc\u81f4\u8282\u70b9\u88ab\u521b\u5efa\u548c\u9500\u6bc1\uff0c\u4ece\u800c\u5bfc\u81f4 Server \u8282\u70b9\u96c6\u7684 IP \u53d1\u751f\u6539\u53d8\u3002\u56e0\u6b64\uff0c\u4f60\u5e94\u8be5\u5728 Server \u8282\u70b9\u524d\u9762\u6709\u4e00\u4e2a\u7a33\u5b9a\u7684\u7aef\u70b9\uff0c\u800c\u4e14\u5b83\u4e0d\u4f1a\u968f\u65f6\u95f4\u63a8\u79fb\u800c\u6539\u53d8\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u65b9\u6cd5\u6765\u8bbe\u7f6e\u6b64\u7aef\u70b9\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"4 \u5c42 (TCP) \u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u8f6e\u8be2 DNS"),(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u6216\u5f39\u6027 IP \u5730\u5740")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7aef\u70b9\u4e5f\u53ef\u4ee5\u7528\u6765\u8bbf\u95ee Kubernetes API\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," \u6587\u4ef6\u6765\u6307\u5411\u5b83\uff0c\u800c\u4e0d\u662f\u7279\u5b9a\u7684\u8282\u70b9\u3002\u4e3a\u4e86\u907f\u514d\u5728\u8fd9\u6837\u7684\u914d\u7f6e\u4e2d\u51fa\u73b0\u8bc1\u4e66\u9519\u8bef\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--tls-san YOUR_IP_OR_HOSTNAME_HERE")," \u9009\u9879\u6765\u5b89\u88c5 server\u3002\u8fd9\u4e2a\u9009\u9879\u5728 TLS \u8bc1\u4e66\u4e2d\u589e\u52a0\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u4e3b\u673a\u540d\u6216 IP \u4f5c\u4e3a Subject Alternative Name\uff0c\u5982\u679c\u4f60\u60f3\u901a\u8fc7 IP \u548c\u4e3b\u673a\u540d\u8bbf\u95ee\uff0c\u53ef\u4ee5\u591a\u6b21\u6307\u5b9a\u3002"),(0,l.kt)("h3",{id:"4-\u53ef\u9009\u52a0\u5165\u5176\u5b83-server-\u8282\u70b9"},"4. \u53ef\u9009\uff1a\u52a0\u5165\u5176\u5b83 Server \u8282\u70b9"),(0,l.kt)("p",null,"\u6b65\u9aa4 2 \u4e2d\u7684\u76f8\u540c\u793a\u4f8b\u547d\u4ee4\u53ef\u7528\u4e8e\u52a0\u5165\u5176\u4ed6 Server \u8282\u70b9\uff0c\u5176\u4e2d\u9700\u8981\u4f7f\u7528\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684 Token\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u662f\u5728\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"--token")," CLI \u6807\u5fd7\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," \u53d8\u91cf\u7684\u60c5\u51b5\u4e0b\u542f\u52a8\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u4ece\u4efb\u4f55\u5df2\u7ecf\u52a0\u5165\u96c6\u7fa4\u7684 Server \u8282\u70b9\u4e2d\u68c0\u7d22\u5230 Token\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/lib/rancher/k3s/server/token\n")),(0,l.kt)("p",null,"\u7136\u540e\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"/zh/reference/server-config#%E9%9B%86%E7%BE%A4%E9%80%89%E9%A1%B9"},"\u4f7f\u7528 Token")," \u6dfb\u52a0\u5176\u4ed6 Server \u8282\u70b9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,l.kt)("p",null,"\u6709\u51e0\u4e2a\u914d\u7f6e\u6807\u5fd7\u5728\u6240\u6709 Server \u8282\u70b9\u4e2d\u5fc5\u987b\u662f\u76f8\u540c\u7684:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u76f8\u5173\u6807\u5fd7\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"--cluster-dns"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"--cluster-domain"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"--cluster-cidr"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"--service- cidr")),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236\u67d0\u4e9b\u7ec4\u4ef6\u90e8\u7f72\u7684\u6807\u5fd7\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-helm-controller"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-kube-proxy"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-network-policy")," \u548c\u4efb\u4f55\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable")," \u7684\u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u76f8\u5173\u6807\u5fd7\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4f60\u9700\u8981\u5907\u4efd token \u7684\u503c\uff0c\u56e0\u4e3a\u6062\u590d\u5907\u4efd\u548c\u6dfb\u52a0\u8282\u70b9\u65f6\u90fd\u9700\u8981\u8be5 token\u3002\u4ee5\u524d\uff0cK3s \u5728\u4f7f\u7528\u5916\u90e8 SQL \u6570\u636e\u5b58\u50a8\u65f6\u4e0d\u5f3a\u5236\u4f7f\u7528 token\u3002")),(0,l.kt)("h3",{id:"5-\u53ef\u9009\u52a0\u5165-agent-\u8282\u70b9"},"5. \u53ef\u9009\uff1a\u52a0\u5165 Agent \u8282\u70b9"),(0,l.kt)("p",null,"\u56e0\u4e3a K3s Server \u8282\u70b9\u9ed8\u8ba4\u662f\u53ef\u8c03\u5ea6\u7684\uff0c\u6240\u4ee5 HA K3s Server \u96c6\u7fa4\u7684\u6700\u5c0f\u8282\u70b9\u6570\u662f\u4e24\u4e2a Server \u8282\u70b9\u548c\u96f6\u4e2a Agent \u8282\u70b9\u3002\u8981\u6dfb\u52a0\u7528\u4e8e\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u7684\u8282\u70b9\uff0c\u8bf7\u5c06 Agent \u8282\u70b9\u52a0\u5165\u5230\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728 HA \u96c6\u7fa4\u4e2d\u52a0\u5165 Agent \u8282\u70b9\u4e0e\u5728\u5355\u4e2a Server \u96c6\u7fa4\u4e2d\u52a0\u5165 Agent \u8282\u70b9\u662f\u4e00\u6837\u7684\u3002\u4f60\u53ea\u9700\u8981\u6307\u5b9a Agent \u5e94\u8be5\u6ce8\u518c\u7684 URL \u548c\u8981\u4f7f\u7528\u7684 Token \u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"K3S_TOKEN=SECRET k3s agent --server https://fixed-registration-address:6443\n")))}m.isMDXComponent=!0}}]);