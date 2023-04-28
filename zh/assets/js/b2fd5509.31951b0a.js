"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",weight:40},i=void 0,l={unversionedId:"datastore/ha-embedded",id:"datastore/ha-embedded",title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",description:"\u5b8c\u5168\u652f\u6301 v1.19.5+k3s1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/ha-embedded.md",sourceDirName:"datastore",slug:"/datastore/ha-embedded",permalink:"/docs-k3s/zh/datastore/ha-embedded",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha-embedded.md",tags:[],version:"current",lastUpdatedAt:1682707376,formattedLastUpdatedAt:"2023\u5e744\u670828\u65e5",frontMatter:{title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",weight:40},sidebar:"mySidebar",previous:{title:"\u5907\u4efd\u548c\u6062\u590d",permalink:"/docs-k3s/zh/datastore/backup-restore"},next:{title:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93",permalink:"/docs-k3s/zh/datastore/ha"}},s={},p=[{value:"\u65b0\u96c6\u7fa4",id:"\u65b0\u96c6\u7fa4",level:2},{value:"\u73b0\u6709\u96c6\u7fa4",id:"\u73b0\u6709\u96c6\u7fa4",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5b8c\u5168\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.5%2Bk3s1"},"v1.19.5+k3s1"),(0,a.kt)("br",{parentName:"p"}),"\n","\u5b9e\u9a8c\u6027\u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f\uff1a\u5df2\u5f03\u7528 Dqlite",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 K3s v1.19.1 \u4e2d\uff0c\u5d4c\u5165\u5f0f etcd \u53d6\u4ee3\u4e86\u5b9e\u9a8c\u6027\u7684 Dqlite\u3002\u8fd9\u662f\u4e00\u4e2a\u7a81\u7834\u6027\u7684\u53d8\u5316\u3002\u8bf7\u6ce8\u610f\uff0c\u4e0d\u652f\u6301\u4ece\u5b9e\u9a8c\u6027 Dqlite \u5347\u7ea7\u5230\u5d4c\u5165\u5f0f etcd\u3002\u5982\u679c\u4f60\u5c1d\u8bd5\u5347\u7ea7\uff0c\u5347\u7ea7\u5c06\u4e0d\u4f1a\u6210\u529f\uff0c\u5e76\u4e14\u6570\u636e\u5c06\u4f1a\u4e22\u5931\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5d4c\u5165\u5f0f etcd (HA) \u5728\u901f\u5ea6\u8f83\u6162\u7684\u78c1\u76d8\uff08\u4f8b\u5982\u4f7f\u7528 SD \u5361\u8fd0\u884c\u7684 Raspberry Pi\uff09\u4e0a\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u95ee\u9898\u3002")),(0,a.kt)("h2",{id:"\u65b0\u96c6\u7fa4"},"\u65b0\u96c6\u7fa4"),(0,a.kt)("p",null,"\u8981\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u8fd0\u884c K3s\uff0c\u4f60\u5fc5\u987b\u62e5\u6709\u5947\u6570\u4e2a Server \u8282\u70b9\u3002\u6211\u4eec\u5efa\u8bae\u4ece\u4e09\u4e2a\u8282\u70b9\u5f00\u59cb\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u542f\u52a8\u4e00\u4e2a\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-init")," \u6807\u5fd7\u7684 Server \u8282\u70b9\u6765\u542f\u7528\u96c6\u7fa4\u548c\u4e00\u4e2a\u4ee4\u724c\uff0c\u8be5\u4ee4\u724c\u5c06\u4f5c\u4e3a\u5171\u4eab secret\uff0c\u7528\u4e8e\u5c06\u5176\u4ed6 Server \u52a0\u5165\u96c6\u7fa4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server --cluster-init\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_TOKEN=SECRET sh -s - server --cluster-init\n"))),(0,a.kt)("p",null,"\u542f\u52a8\u7b2c\u4e00\u53f0\u670d\u52a1\u5668\u540e\uff0c\u4f7f\u7528\u5171\u4eab secret  \u5c06\u7b2c\u4e8c\u53f0\u548c\u7b2c\u4e09\u53f0\u670d\u52a1\u5668\u52a0\u5165\u96c6\u7fa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server --server https://<ip or hostname of server1>:6443\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_TOKEN=SECRET sh -s - server --server https://<ip or hostname of server1>:6443\n"))),(0,a.kt)("p",null,"\u68c0\u67e5\u7b2c\u4e8c\u4e2a\u548c\u7b2c\u4e09\u4e2a\u670d\u52a1\u5668\u662f\u5426\u5df2\u52a0\u5165\u96c6\u7fa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME        STATUS   ROLES                       AGE   VERSION\nserver1     Ready    control-plane,etcd,master   28m   vX.Y.Z\nserver2     Ready    control-plane,etcd,master   13m   vX.Y.Z\n")),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u6709\u4e86\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684 control plane\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"--server")," \u53c2\u6570\u4e2d\u4f7f\u7528\u4efb\u4f55\u96c6\u7fa4 server\uff0c\u4ece\u800c\u52a0\u5165\u989d\u5916\u7684 server \u548c worker \u8282\u70b9\u3002\u5c06\u5176\u4ed6 worker \u8282\u70b9\u52a0\u5165\u5230\u96c6\u7fa4\u4e2d\uff0c\u6b65\u9aa4\u4e0e\u5355\u4e2a server \u96c6\u7fa4\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u6709\u51e0\u4e2a\u914d\u7f6e\u6807\u5fd7\u5728\u6240\u6709 Server \u8282\u70b9\u4e2d\u5fc5\u987b\u662f\u76f8\u540c\u7684:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u76f8\u5173\u6807\u5fd7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-dns"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-domain"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-cidr"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"--service- cidr")),(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u67d0\u4e9b\u7ec4\u4ef6\u90e8\u7f72\u7684\u6807\u5fd7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"--disable-helm-controller"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"--disable-kube-proxy"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"--disable-network-policy")," \u548c\u4efb\u4f55\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"--disable")," \u7684\u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u76f8\u5173\u6807\u5fd7\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,a.kt)("h2",{id:"\u73b0\u6709\u96c6\u7fa4"},"\u73b0\u6709\u96c6\u7fa4"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u4f7f\u7528\u9ed8\u8ba4\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5e93\u7684\u73b0\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init")," \u6807\u5fd7\u91cd\u65b0\u542f\u52a8\u4f60\u7684 K3s server\uff0c\u4ece\u800c\u5c06\u5176\u8f6c\u6362\u4e3a etcd\u3002\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u5982\u4e0a\u6240\u8ff0\u6dfb\u52a0\u5176\u4ed6\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7531\u4e8e\u8282\u70b9\u5df2\u7ecf\u521d\u59cb\u5316\u6216\u52a0\u5165\u4e86\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5bfc\u81f4\u5728\u78c1\u76d8\u4e0a\u53d1\u73b0\u4e00\u4e2a etcd \u6570\u636e\u5b58\u50a8\uff0c\u90a3\u4e48\u6570\u636e\u5b58\u50a8\u53c2\u6570\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"--server"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"--datastore-endpoint")," \u7b49\uff09\u5c06\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1aK3s v1.22.2 \u53ca\u66f4\u9ad8\u7248\u672c\u652f\u6301\u5c06 SQLite \u8fc1\u79fb\u5230 etcd\u3002\u5982\u679c\u4f60\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init")," \u6dfb\u52a0\u5230\u73b0\u6709 server\uff0c\u65e7\u7248\u672c\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7a7a\u6570\u636e\u5b58\u50a8\u3002")))}d.isMDXComponent=!0}}]);