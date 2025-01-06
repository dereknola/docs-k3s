"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1546],{1516:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"datastore/ha","title":"\u9ad8\u53ef\u7528\u6027\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9","description":"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u305f\u9ad8\u53ef\u7528\u6027K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/datastore/ha.md","sourceDirName":"datastore","slug":"/datastore/ha","permalink":"/docs-k3s/ja/datastore/ha","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"\u9ad8\u53ef\u7528\u6027\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"},"sidebar":"mySidebar","previous":{"title":"\u9ad8\u53ef\u7528\u6027\u7d44\u307f\u8fbc\u307fetcd","permalink":"/docs-k3s/ja/datastore/ha-embedded"},"next":{"title":"\u30af\u30e9\u30b9\u30bf\u30fc\u30fb\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc","permalink":"/docs-k3s/ja/datastore/cluster-loadbalancer"}}');var d=n(4848),c=n(8453);const i={title:"\u9ad8\u53ef\u7528\u6027\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"},t=void 0,l={},a=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6982\u8981",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6982\u8981",level:2},{value:"1. \u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4f5c\u6210",id:"1-\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4f5c\u6210",level:3},{value:"2. \u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u8d77\u52d5",id:"2-\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u8d77\u52d5",level:3},{value:"3. \u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u53c2\u52a0",id:"3-\u30aa\u30d7\u30b7\u30e7\u30f3\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u53c2\u52a0",level:3},{value:"4. \u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\u306e\u8a2d\u5b9a",id:"4-\u30aa\u30d7\u30b7\u30e7\u30f3\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\u306e\u8a2d\u5b9a",level:3},{value:"5. \u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u53c2\u52a0",id:"5-\u30aa\u30d7\u30b7\u30e7\u30f3\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u53c2\u52a0",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u305f\u9ad8\u53ef\u7528\u6027K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsxs)(s.p,{children:["\u5927\u898f\u6a21\u306aHA\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u8fc5\u901f\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u306b\u306f\u3001",(0,d.jsx)(s.a,{href:"/related-projects",children:"\u95a2\u9023\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,d.jsx)(s.p,{children:"\u5358\u4e00\u30b5\u30fc\u30d0\u30fc\u30af\u30e9\u30b9\u30bf\u30fc\u306f\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u304c\u3001Kubernetes\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306e\u7a3c\u50cd\u6642\u9593\u304c\u91cd\u8981\u306a\u74b0\u5883\u3067\u306f\u3001K3s\u3092HA\u69cb\u6210\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002HA K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306f\u4ee5\u4e0b\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Kubernetes API\u3092\u63d0\u4f9b\u3057\u3001\u4ed6\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b",(0,d.jsx)(s.strong,{children:"\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9"}),"\u304c2\u3064\u4ee5\u4e0a"]}),"\n",(0,d.jsxs)(s.li,{children:["\uff08\u5358\u4e00\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067\u4f7f\u7528\u3055\u308c\u308b\u57cb\u3081\u8fbc\u307fSQLite\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3068\u306f\u5bfe\u7167\u7684\u306b\uff09",(0,d.jsx)(s.strong,{children:"\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"})]}),"\n",(0,d.jsxs)(s.li,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u6307\u5b9a\u3055\u308c\u305f",(0,d.jsx)(s.strong,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9"}),"\u304c0\u500b\u4ee5\u4e0a"]}),"\n",(0,d.jsxs)(s.li,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u767b\u9332\u3059\u308b\u305f\u3081\u306e",(0,d.jsx)(s.strong,{children:"\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9"})]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3069\u306e\u3088\u3046\u306b\u9023\u643a\u3059\u308b\u304b\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/architecture#high-availability-k3s",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6982\u8981",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6982\u8981"}),"\n",(0,d.jsx)(s.p,{children:"HA\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u306f\u4ee5\u4e0b\u306e\u624b\u9806\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),"\n",(0,d.jsx)(s.h3,{id:"1-\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4f5c\u6210",children:"1. \u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4f5c\u6210"}),"\n",(0,d.jsxs)(s.p,{children:["\u307e\u305a\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u7528\u306e\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/datastore/",children:"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(s.h3,{id:"2-\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u8d77\u52d5",children:"2. \u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u8d77\u52d5"}),"\n",(0,d.jsxs)(s.p,{children:["K3s\u306eHA\u69cb\u6210\u306b\u306f2\u3064\u4ee5\u4e0a\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059\u3002\u6700\u5c0f\u30de\u30b7\u30f3\u8981\u4ef6\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/installation/requirements",children:"\u8981\u4ef6"}),"\u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u308c\u3089\u306e\u30ce\u30fc\u30c9\u3067",(0,d.jsx)(s.code,{children:"k3s server"}),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u969b\u3001K3s\u304c\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5\u3092\u77e5\u308b\u305f\u3081\u306b",(0,d.jsx)(s.code,{children:"datastore-endpoint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ce\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u969b\u306b\u6c7a\u5b9a\u7684\u306a\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b",(0,d.jsx)(s.code,{children:"token"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u7a7a\u306e\u5834\u5408\u3001\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u3001\u5f8c\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4f8b\u3048\u3070\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001MySQL\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3068\u3057\u3066K3s\u30b5\u30fc\u30d0\u30fc\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/cli/server#cluster-options",children:"\u30c8\u30fc\u30af\u30f3\u3092\u8a2d\u5b9a"}),"\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n  --tls-san=<FIXED_IP> # \u30aa\u30d7\u30b7\u30e7\u30f3\u3001\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u5fc5\u8981\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u5f0f\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u7a2e\u985e\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/datastore/#datastore-endpoint-format-and-functionality",children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u5f0f"}),"\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3092\u8d77\u52d5\u3059\u308b\u969b\u306eTLS\u8a3c\u660e\u66f8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/datastore/#external-datastore-configuration-parameters",children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u8a2d\u5b9a\u30ac\u30a4\u30c9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsxs)(s.p,{children:["\u5358\u4e00\u30b5\u30fc\u30d0\u30fc\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u5229\u7528\u53ef\u80fd\u306a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u9ad8\u53ef\u7528\u6027\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u3082\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/installation/configuration",children:"\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,d.jsxs)(s.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306f\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u53ef\u80fd\u3067\u3042\u308a\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u8d77\u52d5\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u5b9f\u884c\u3055\u308c\u306a\u3044\u5c02\u7528\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u3092\u6301\u3061\u305f\u3044\u5834\u5408\u306f\u3001\u30c6\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,d.jsx)(s.code,{children:"node-taint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30ce\u30fc\u30c9\u306b\u30c6\u30a4\u30f3\u30c8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,d.jsx)(s.code,{children:"--node-taint CriticalAddonsOnly=true:NoExecute"}),"\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3067",(0,d.jsx)(s.code,{children:"k3s server"}),"\u30d7\u30ed\u30bb\u30b9\u3092\u8d77\u52d5\u3057\u305f\u3089\u3001",(0,d.jsx)(s.code,{children:"k3s kubectl get nodes"}),"\u3092\u4f7f\u7528\u3057\u3066\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u6b63\u5e38\u306b\u8d77\u52d5\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u304cReady\u72b6\u614b\u3067\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(s.h3,{id:"3-\u30aa\u30d7\u30b7\u30e7\u30f3\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u53c2\u52a0",children:"3. \u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u53c2\u52a0"}),"\n",(0,d.jsx)(s.p,{children:"\u30b9\u30c6\u30c3\u30d72\u306e\u540c\u3058\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3092\u53c2\u52a0\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u6700\u521d\u306e\u30ce\u30fc\u30c9\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(s.p,{children:["\u6700\u521d\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u304c",(0,d.jsx)(s.code,{children:"--token"})," CLI\u30d5\u30e9\u30b0\u307e\u305f\u306f",(0,d.jsx)(s.code,{children:"K3S_TOKEN"}),"\u5909\u6570\u306a\u3057\u3067\u8d77\u52d5\u3055\u308c\u305f\u5834\u5408\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u65e2\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u4efb\u610f\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30c8\u30fc\u30af\u30f3\u5024\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306f",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/cli/server#cluster-options",children:"\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066"}),"\u8ffd\u52a0\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})}),"\n",(0,d.jsx)(s.p,{children:"\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3067\u540c\u3058\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3044\u304f\u3064\u304b\u306e\u8a2d\u5b9a\u30d5\u30e9\u30b0\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u95a2\u9023\u306e\u30d5\u30e9\u30b0\uff1a",(0,d.jsx)(s.code,{children:"--cluster-dns"}),"\u3001",(0,d.jsx)(s.code,{children:"--cluster-domain"}),"\u3001",(0,d.jsx)(s.code,{children:"--cluster-cidr"}),"\u3001",(0,d.jsx)(s.code,{children:"--service-cidr"})]}),"\n",(0,d.jsxs)(s.li,{children:["\u7279\u5b9a\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u5236\u5fa1\u3059\u308b\u30d5\u30e9\u30b0\uff1a",(0,d.jsx)(s.code,{children:"--disable-helm-controller"}),"\u3001",(0,d.jsx)(s.code,{children:"--disable-kube-proxy"}),"\u3001",(0,d.jsx)(s.code,{children:"--disable-network-policy"}),"\u304a\u3088\u3073",(0,d.jsx)(s.code,{children:"--disable"}),"\u306b\u6e21\u3055\u308c\u308b\u4efb\u610f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"]}),"\n",(0,d.jsxs)(s.li,{children:["\u6a5f\u80fd\u95a2\u9023\u306e\u30d5\u30e9\u30b0\uff1a",(0,d.jsx)(s.code,{children:"--secrets-encryption"})]}),"\n"]}),"\n",(0,d.jsx)(s.admonition,{type:"note",children:(0,d.jsx)(s.p,{children:"\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306e\u30b3\u30d4\u30fc\u3092\u4fdd\u6301\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u304b\u3089\u306e\u5fa9\u5143\u3084\u30ce\u30fc\u30c9\u306e\u8ffd\u52a0\u6642\u306b\u5fc5\u8981\u3067\u3059\u3002\u4ee5\u524d\u306f\u3001\u5916\u90e8SQL\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u30c8\u30fc\u30af\u30f3\u306e\u4f7f\u7528\u304c\u5f37\u5236\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002"})}),"\n",(0,d.jsx)(s.h3,{id:"4-\u30aa\u30d7\u30b7\u30e7\u30f3\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\u306e\u8a2d\u5b9a",children:"4. \u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\u306e\u8a2d\u5b9a"}),"\n",(0,d.jsx)(s.p,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u767b\u9332\u3059\u308b\u305f\u3081\u306eURL\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306f\u4efb\u610f\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306eIP\u307e\u305f\u306f\u30db\u30b9\u30c8\u540d\u3067\u69cb\u3044\u307e\u305b\u3093\u304c\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u305d\u308c\u3089\u306f\u6642\u9593\u3068\u3068\u3082\u306b\u5909\u308f\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30af\u30e9\u30a6\u30c9\u3067\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30ce\u30fc\u30c9\u306f\u6642\u9593\u3068\u3068\u3082\u306b\u4f5c\u6210\u304a\u3088\u3073\u7834\u68c4\u3055\u308c\u3001\u6700\u521d\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u30bb\u30c3\u30c8\u304b\u3089\u7570\u306a\u308bIP\u306b\u5909\u66f4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u6642\u9593\u3068\u3068\u3082\u306b\u5909\u308f\u3089\u306a\u3044\u5b89\u5b9a\u3057\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e\u524d\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u304c\u6700\u5584\u3067\u3059\u3002\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u65b9\u6cd5\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\u30ec\u30a4\u30e4\u30fc4\uff08TCP\uff09\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc"}),"\n",(0,d.jsx)(s.li,{children:"\u30e9\u30a6\u30f3\u30c9\u30ed\u30d3\u30f3DNS"}),"\n",(0,d.jsx)(s.li,{children:"\u4eee\u60f3\u307e\u305f\u306f\u30a8\u30e9\u30b9\u30c6\u30a3\u30c3\u30afIP\u30a2\u30c9\u30ec\u30b9"}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4f8b\u3068\u3057\u3066\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/datastore/cluster-loadbalancer",children:"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306fKubernetes API\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,d.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u7279\u5b9a\u306e\u30ce\u30fc\u30c9\u3067\u306f\u306a\u304f\u3053\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u6307\u3059\u3088\u3046\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u3053\u306e\u3088\u3046\u306a\u69cb\u6210\u3067\u8a3c\u660e\u66f8\u30a8\u30e9\u30fc\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u3092",(0,d.jsx)(s.code,{children:"--tls-san YOUR_IP_OR_HOSTNAME_HERE"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306fTLS\u8a3c\u660e\u66f8\u306eSubject Alternative Name\u306b\u8ffd\u52a0\u306e\u30db\u30b9\u30c8\u540d\u307e\u305f\u306fIP\u3092\u8ffd\u52a0\u3057\u3001IP\u3068\u30db\u30b9\u30c8\u540d\u306e\u4e21\u65b9\u3067\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3044\u5834\u5408\u306f\u8907\u6570\u56de\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(s.h3,{id:"5-\u30aa\u30d7\u30b7\u30e7\u30f3\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u53c2\u52a0",children:"5. \u30aa\u30d7\u30b7\u30e7\u30f3\uff1a\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u53c2\u52a0"}),"\n",(0,d.jsx)(s.p,{children:"K3s\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u53ef\u80fd\u3067\u3042\u308b\u305f\u3081\u3001HA K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u306f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u5c02\u7528\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u6301\u3061\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.p,{children:"HA\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u53c2\u52a0\u3055\u305b\u308b\u65b9\u6cd5\u306f\u3001\u5358\u4e00\u30b5\u30fc\u30d0\u30fc\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u53c2\u52a0\u3055\u305b\u308b\u65b9\u6cd5\u3068\u540c\u3058\u3067\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u767b\u9332\u3059\u308bURL\uff08\u30b5\u30fc\u30d0\u30fcIP\u306e\u3044\u305a\u308c\u304b\u307e\u305f\u306f\u56fa\u5b9a\u767b\u9332\u30a2\u30c9\u30ec\u30b9\uff09\u3068\u4f7f\u7528\u3059\u308b\u30c8\u30fc\u30af\u30f3\u3092\u6307\u5b9a\u3059\u308b\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-bash",children:"K3S_TOKEN=SECRET k3s agent --server https://server-or-fixed-registration-address:6443\n"})})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(6540);const d={},c=r.createContext(d);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);