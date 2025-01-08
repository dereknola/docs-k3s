"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6906],{3619:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"datastore/datastore","title":"\u30af\u30e9\u30b9\u30bf\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2","description":"K3s\u304c\u4ed6\u306eKubernetes\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u7570\u306a\u308b\u70b9\u306f\u3001etcd\u4ee5\u5916\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3057\u3066Kubernetes\u3092\u5b9f\u884c\u3067\u304d\u308b\u80fd\u529b\u3067\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306fKubernetes\u30aa\u30da\u30ec\u30fc\u30bf\u30fc\u306b\u67d4\u8edf\u6027\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u6700\u9069\u306a\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/datastore/datastore.md","sourceDirName":"datastore","slug":"/datastore/","permalink":"/docs-k3s/ja/datastore/","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/datastore/datastore.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"\u30af\u30e9\u30b9\u30bf\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"},"sidebar":"mySidebar","previous":{"title":"K3s\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","permalink":"/docs-k3s/ja/installation/uninstall"},"next":{"title":"\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3068\u30ea\u30b9\u30c8\u30a2","permalink":"/docs-k3s/ja/datastore/backup-restore"}}');var d=t(4848),r=t(8453);const c={title:"\u30af\u30e9\u30b9\u30bf\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"},i=void 0,l={},o=[{value:"\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf",level:3},{value:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u5f0f\u3068\u6a5f\u80fd",id:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u5f0f\u3068\u6a5f\u80fd",level:3}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{TabItem:t,Tabs:n}=s;return t||j("TabItem",!0),n||j("Tabs",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"K3s\u304c\u4ed6\u306eKubernetes\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u3068\u7570\u306a\u308b\u70b9\u306f\u3001etcd\u4ee5\u5916\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3057\u3066Kubernetes\u3092\u5b9f\u884c\u3067\u304d\u308b\u80fd\u529b\u3067\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306fKubernetes\u30aa\u30da\u30ec\u30fc\u30bf\u30fc\u306b\u67d4\u8edf\u6027\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u6700\u9069\u306a\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"\u30c1\u30fc\u30e0\u306betcd\u306e\u904b\u7528\u7d4c\u9a13\u304c\u306a\u3044\u5834\u5408\u3001MySQL\u3084PostgreSQL\u306e\u3088\u3046\u306a\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b0\u30ec\u30fc\u30c9\u306eSQL\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.li,{children:"CI/CD\u74b0\u5883\u3067\u30b7\u30f3\u30d7\u30eb\u3067\u77ed\u671f\u9593\u306e\u30af\u30e9\u30b9\u30bf\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u7d44\u307f\u8fbc\u307f\u306eSQLite\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.li,{children:"\u30a8\u30c3\u30b8\u3067Kubernetes\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3001\u9ad8\u53ef\u7528\u6027\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3060\u304c\u3001\u30a8\u30c3\u30b8\u3067\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u7ba1\u7406\u3059\u308b\u904b\u7528\u8ca0\u8377\u3092\u8ca0\u3048\u306a\u3044\u5834\u5408\u3001\u7d44\u307f\u8fbc\u307f\u306eetcd\u3092\u30d9\u30fc\u30b9\u306b\u3057\u305fK3s\u306e\u7d44\u307f\u8fbc\u307fHA\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"K3s\u306f\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsxs)(s.strong,{children:["\u7d44\u307f\u8fbc\u307f ",(0,d.jsx)(s.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})]}),(0,d.jsx)(s.br,{}),"\n","SQLite\u306f\u8907\u6570\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u6301\u3064\u30af\u30e9\u30b9\u30bf\u3067\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002",(0,d.jsx)(s.br,{}),"\n","SQLite\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3067\u3042\u308a\u3001\u4ed6\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a\u304c\u5b58\u5728\u305b\u305a\u3001\u30c7\u30a3\u30b9\u30af\u4e0a\u306b\u7d44\u307f\u8fbc\u307fetcd\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"\u7d44\u307f\u8fbc\u307fetcd"}),(0,d.jsx)(s.br,{}),"\n","\u8907\u6570\u306e\u30b5\u30fc\u30d0\u30fc\u3067\u7d44\u307f\u8fbc\u307fetcd\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/datastore/ha-embedded",children:"\u9ad8\u53ef\u7528\u6027\u7d44\u307f\u8fbc\u307fetcd"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,d.jsx)(s.br,{}),"\n","K3s\u304c\u65b0\u3057\u3044etcd\u30af\u30e9\u30b9\u30bf\u3092\u521d\u671f\u5316\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u65e2\u5b58\u306eetcd\u30af\u30e9\u30b9\u30bf\u306b\u53c2\u52a0\u3059\u308b\u5834\u5408\u3001\u307e\u305f\u306f\u8d77\u52d5\u6642\u306b\u30c7\u30a3\u30b9\u30af\u4e0a\u306betcd\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u7d44\u307f\u8fbc\u307fetcd\u304c\u81ea\u52d5\u7684\u306b\u9078\u629e\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"}),(0,d.jsx)(s.br,{}),"\n","\u8907\u6570\u306e\u30b5\u30fc\u30d0\u30fc\u3067\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"/docs-k3s/ja/datastore/ha",children:"\u9ad8\u53ef\u7528\u6027\u5916\u90e8DB"}),"\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,d.jsx)(s.br,{}),"\n","\u4ee5\u4e0b\u306e\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\uff1a","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"https://etcd.io/",children:"etcd"})," (\u30d0\u30fc\u30b8\u30e7\u30f33.5.4\u306b\u5bfe\u3057\u3066\u8a8d\u5b9a)"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"https://www.mysql.com",children:"MySQL"})," (\u30d0\u30fc\u30b8\u30e7\u30f35.7\u304a\u3088\u30738.0\u306b\u5bfe\u3057\u3066\u8a8d\u5b9a)"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"https://mariadb.org/",children:"MariaDB"})," (\u30d0\u30fc\u30b8\u30e7\u30f310.6.8\u306b\u5bfe\u3057\u3066\u8a8d\u5b9a)"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," (\u30d0\u30fc\u30b8\u30e7\u30f312.16\u300113.12\u300114.9\u304a\u3088\u307315.4\u306b\u5bfe\u3057\u3066\u8a8d\u5b9a)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.admonition,{title:"\u30d7\u30ea\u30da\u30a2\u30c9\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u30b5\u30dd\u30fc\u30c8",type:"warning",children:(0,d.jsxs)(s.p,{children:["K3s\u306fDB\u304b\u3089\u306e\u30d7\u30ea\u30da\u30a2\u30c9\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u30b5\u30dd\u30fc\u30c8\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001",(0,d.jsx)(s.a,{href:"https://www.pgbouncer.org/faq.html#how-to-use-prepared-statements-with-transaction-pooling",children:"PgBouncer"}),"\u306e\u3088\u3046\u306a\u63a5\u7d9a\u30d7\u30fc\u30e9\u30fc\u304cK3s\u3068\u9023\u643a\u3059\u308b\u305f\u3081\u306b\u8ffd\u52a0\u306e\u8a2d\u5b9a\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u304c\u3042\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"]})}),"\n",(0,d.jsx)(s.h3,{id:"\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf",children:"\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,d.jsxs)(s.p,{children:["PostgreSQL\u3001MySQL\u3001\u307e\u305f\u306fetcd\u306a\u3069\u306e\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001",(0,d.jsx)(s.code,{children:"datastore-endpoint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3057\u3066K3s\u304c\u63a5\u7d9a\u65b9\u6cd5\u3092\u8a8d\u8b58\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u63a5\u7d9a\u306e\u8a8d\u8a3c\u3068\u6697\u53f7\u5316\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u8868\u306f\u3001CLI\u30d5\u30e9\u30b0\u307e\u305f\u306f\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3053\u308c\u3089\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"CLI\u30d5\u30e9\u30b0"}),(0,d.jsx)(s.th,{children:"\u74b0\u5883\u5909\u6570"}),(0,d.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"--datastore-endpoint"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"K3S_DATASTORE_ENDPOINT"})}),(0,d.jsx)(s.td,{children:"PostgreSQL\u3001MySQL\u3001\u307e\u305f\u306fetcd\u306e\u63a5\u7d9a\u6587\u5b57\u5217\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3078\u306e\u63a5\u7d9a\u3092\u8a18\u8ff0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u6587\u5b57\u5217\u3067\u3059\u3002\u3053\u306e\u6587\u5b57\u5217\u306e\u69cb\u9020\u306f\u5404\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u7279\u6709\u3067\u3042\u308a\u3001\u4ee5\u4e0b\u306b\u8a73\u7d30\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"--datastore-cafile"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"K3S_DATASTORE_CAFILE"})}),(0,d.jsx)(s.td,{children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3068\u306e\u901a\u4fe1\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308bTLS\u8a3c\u660e\u66f8\u8a8d\u8a3c\u5c40\uff08CA\uff09\u30d5\u30a1\u30a4\u30eb\u3002\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u304c\u30ab\u30b9\u30bf\u30e0\u8a3c\u660e\u66f8\u8a8d\u8a3c\u5c40\u306b\u3088\u3063\u3066\u7f72\u540d\u3055\u308c\u305f\u8a3c\u660e\u66f8\u3092\u4f7f\u7528\u3057\u3066TLS\u7d4c\u7531\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u305d\u306eCA\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001K3s\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u8a3c\u660e\u66f8\u3092\u9069\u5207\u306b\u691c\u8a3c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"--datastore-certfile"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"K3S_DATASTORE_CERTFILE"})}),(0,d.jsxs)(s.td,{children:["\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3078\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u308bTLS\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u3002\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001",(0,d.jsx)(s.code,{children:"datastore-keyfile"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"--datastore-keyfile"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"K3S_DATASTORE_KEYFILE"})}),(0,d.jsxs)(s.td,{children:["\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3078\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u30d9\u30fc\u30b9\u306e\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u308bTLS\u30ad\u30fc \u30d5\u30a1\u30a4\u30eb\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u524d\u8ff0\u306e",(0,d.jsx)(s.code,{children:"datastore-certfile"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3068\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u306f\u306a\u304f\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u8cc7\u683c\u60c5\u5831\u3084\u305d\u306e\u4ed6\u306e\u6a5f\u5bc6\u60c5\u5831\u304c\u30d7\u30ed\u30bb\u30b9\u60c5\u5831\u306e\u4e00\u90e8\u3068\u3057\u3066\u9732\u51fa\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(s.h3,{id:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u5f0f\u3068\u6a5f\u80fd",children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u5f0f\u3068\u6a5f\u80fd"}),"\n",(0,d.jsxs)(s.p,{children:["\u524d\u8ff0\u306e\u3088\u3046\u306b\u3001",(0,d.jsx)(s.code,{children:"datastore-endpoint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u6e21\u3055\u308c\u308b\u5024\u306e\u5f62\u5f0f\u306f\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u3001\u5404\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u5916\u90e8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u5f62\u5f0f\u3068\u6a5f\u80fd\u3092\u8a73\u7d30\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n,{children:[(0,d.jsxs)(t,{value:"PostgreSQL",children:[(0,d.jsxs)(s.p,{children:["PostgreSQL\u306e\u6700\u3082\u4e00\u822c\u7684\u306a\u5f62\u5f0f\u3067\u306f\u3001",(0,d.jsx)(s.code,{children:"datastore-endpoint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3092\u6301\u3061\u307e\u3059\uff1a"]}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"postgres://username:password@hostname:port/database-name"})}),(0,d.jsxs)(s.p,{children:["\u3088\u308a\u9ad8\u5ea6\u306a\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"https://godoc.org/github.com/lib/pq",children:"https://godoc.org/github.com/lib/pq"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,d.jsx)(s.p,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u540d\u3092\u6307\u5b9a\u3057\u3001\u305d\u308c\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u305d\u308c\u3092\u4f5c\u6210\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002"}),(0,d.jsxs)(s.p,{children:["\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u3057\u3066",(0,d.jsx)(s.code,{children:"postgres://"}),"\u306e\u307f\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001K3s\u306f\u4ee5\u4e0b\u3092\u8a66\u307f\u307e\u3059\uff1a"]}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"postgres"}),"\u3092\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066localhost\u306b\u63a5\u7d9a"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"kubernetes"}),"\u3068\u3044\u3046\u540d\u524d\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210"]}),"\n"]})]}),(0,d.jsxs)(t,{value:"MySQL / MariaDB",children:[(0,d.jsxs)(s.p,{children:["MySQL\u304a\u3088\u3073MariaDB\u306e\u6700\u3082\u4e00\u822c\u7684\u306a\u5f62\u5f0f\u3067\u306f\u3001",(0,d.jsx)(s.code,{children:"datastore-endpoint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3092\u6301\u3061\u307e\u3059\uff1a"]}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"mysql://username:password@tcp(hostname:3306)/database-name"})}),(0,d.jsxs)(s.p,{children:["\u3088\u308a\u9ad8\u5ea6\u306a\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,d.jsxs)(s.p,{children:["K3s\u306e",(0,d.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/issues/1093",children:"\u65e2\u77e5\u306e\u554f\u984c"}),"\u306b\u3088\u308a\u3001",(0,d.jsx)(s.code,{children:"tls"}),'\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3067\u304d\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002TLS\u901a\u4fe1\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u4f8b\u3048\u3070\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092"skip-verify"\u306b\u8a2d\u5b9a\u3057\u3066K3s\u304c\u8a3c\u660e\u66f8\u306e\u691c\u8a3c\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002']}),(0,d.jsx)(s.p,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u540d\u3092\u6307\u5b9a\u3057\u3001\u305d\u308c\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u305d\u308c\u3092\u4f5c\u6210\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002"}),(0,d.jsxs)(s.p,{children:["\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u3057\u3066",(0,d.jsx)(s.code,{children:"mysql://"}),"\u306e\u307f\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001K3s\u306f\u4ee5\u4e0b\u3092\u8a66\u307f\u307e\u3059\uff1a"]}),(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"root"}),"\u30e6\u30fc\u30b6\u30fc\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u306a\u3057\u3067",(0,d.jsx)(s.code,{children:"/var/run/mysqld/mysqld.sock"}),"\u306eMySQL\u30bd\u30b1\u30c3\u30c8\u306b\u63a5\u7d9a"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"kubernetes"}),"\u3068\u3044\u3046\u540d\u524d\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210"]}),"\n"]})]}),(0,d.jsxs)(t,{value:"etcd",children:[(0,d.jsxs)(s.p,{children:["etcd\u306e\u6700\u3082\u4e00\u822c\u7684\u306a\u5f62\u5f0f\u3067\u306f\u3001",(0,d.jsx)(s.code,{children:"datastore-endpoint"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3092\u6301\u3061\u307e\u3059\uff1a"]}),(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"https://etcd-host-1:2379,https://etcd-host-2:2379,https://etcd-host-3:2379"})}),(0,d.jsx)(s.p,{children:"\u4e0a\u8a18\u306f\u5178\u578b\u7684\u306a3\u30ce\u30fc\u30c9\u306eetcd\u30af\u30e9\u30b9\u30bf\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u3001\u30ab\u30f3\u30de\u3067\u533a\u5207\u3089\u308c\u305f1\u3064\u4ee5\u4e0a\u306eetcd URL\u3092\u53d7\u3051\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}function j(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var n=t(6540);const d={},r=n.createContext(d);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);