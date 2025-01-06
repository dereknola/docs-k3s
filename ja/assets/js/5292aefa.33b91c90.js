"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1454],{6313:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"cli/token","title":"token","description":"K3s \u306f\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ce\u30fc\u30c9\u306e\u53c2\u52a0\u30d7\u30ed\u30bb\u30b9\u3092\u4fdd\u8b77\u3057\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u53c2\u52a0\u30ce\u30fc\u30c9\u306b\u8a8d\u8a3c\u3057\u3001\u30ce\u30fc\u30c9\u3092\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u8a8d\u8a3c\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/token.md","sourceDirName":"cli","slug":"/cli/token","permalink":"/docs-k3s/ja/cli/token","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/cli/token.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"token"},"sidebar":"mySidebar","previous":{"title":"secrets-encrypt","permalink":"/docs-k3s/ja/cli/secrets-encrypt"},"next":{"title":"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3","permalink":"/docs-k3s/ja/architecture"}}');var r=s(4848),c=s(8453);const i={title:"token"},t="k3s \u30c8\u30fc\u30af\u30f3",l={},h=[{value:"\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f",id:"\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f",level:2},{value:"\u30bb\u30ad\u30e5\u30a2",id:"\u30bb\u30ad\u30e5\u30a2",level:3},{value:"TLS \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d4\u30f3\u30b0",id:"tls-\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d4\u30f3\u30b0",level:4},{value:"\u30b7\u30e7\u30fc\u30c8",id:"\u30b7\u30e7\u30fc\u30c8",level:3},{value:"\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",id:"\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",level:2},{value:"\u30b5\u30fc\u30d0\u30fc",id:"\u30b5\u30fc\u30d0\u30fc",level:3},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",level:3},{value:"\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7",id:"\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7",level:3},{value:"k3s \u30c8\u30fc\u30af\u30f3",id:"k3s-\u30c8\u30fc\u30af\u30f3-1",level:2},{value:"<code>k3s token create [token]</code>",id:"k3s-token-create-token",level:4},{value:"<code>k3s token delete</code>",id:"k3s-token-delete",level:4},{value:"<code>k3s token generate</code>",id:"k3s-token-generate",level:4},{value:"<code>k3s token list</code>",id:"k3s-token-list",level:4},{value:"<code>k3s token rotate</code>",id:"k3s-token-rotate",level:4}];function x(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"k3s-\u30c8\u30fc\u30af\u30f3",children:"k3s \u30c8\u30fc\u30af\u30f3"})}),"\n",(0,r.jsx)(n.p,{children:"K3s \u306f\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ce\u30fc\u30c9\u306e\u53c2\u52a0\u30d7\u30ed\u30bb\u30b9\u3092\u4fdd\u8b77\u3057\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u53c2\u52a0\u30ce\u30fc\u30c9\u306b\u8a8d\u8a3c\u3057\u3001\u30ce\u30fc\u30c9\u3092\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u8a8d\u8a3c\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f",children:"\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"K3s \u30c8\u30fc\u30af\u30f3\u306f\u30bb\u30ad\u30e5\u30a2\u5f62\u5f0f\u307e\u305f\u306f\u30b7\u30e7\u30fc\u30c8\u5f62\u5f0f\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u30bb\u30ad\u30e5\u30a2\u5f62\u5f0f\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u8cc7\u683c\u60c5\u5831\u3092\u9001\u4fe1\u3059\u308b\u524d\u306b\u53c2\u52a0\u3059\u308b\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8a8d\u8a3c\u3067\u304d\u308b\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30bb\u30ad\u30e5\u30a2",children:"\u30bb\u30ad\u30e5\u30a2"}),"\n",(0,r.jsx)(n.p,{children:"\u30bb\u30ad\u30e5\u30a2\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f\uff08\u300c\u30d5\u30eb\u300d\u30c8\u30fc\u30af\u30f3\u3068\u3082\u547c\u3070\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\uff09\u306f\u3001\u4ee5\u4e0b\u306e\u90e8\u5206\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<prefix><cluster CA hash>::<credentials>"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prefix"}),": \u30c8\u30fc\u30af\u30f3\u5f62\u5f0f\u3092\u8b58\u5225\u3059\u308b\u56fa\u5b9a\u306e ",(0,r.jsx)(n.code,{children:"K10"})," \u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cluster CA hash"}),": \u53c2\u52a0\u30ce\u30fc\u30c9\u306b\u30b5\u30fc\u30d0\u30fc\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30b5\u30fc\u30d0\u30fc CA \u8a3c\u660e\u66f8\u306e\u30cf\u30c3\u30b7\u30e5\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u81ea\u5df1\u7f72\u540d CA \u8a3c\u660e\u66f8\u306e\u5834\u5408\u3001\u3053\u308c\u306f\u30c7\u30a3\u30b9\u30af\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b PEM \u5f62\u5f0f\u306e\u8a3c\u660e\u66f8\u306e SHA256 \u30b5\u30e0\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30ab\u30b9\u30bf\u30e0 CA \u8a3c\u660e\u66f8\u306e\u5834\u5408\u3001\u3053\u308c\u306f\u30eb\u30fc\u30c8\u8a3c\u660e\u66f8\u306e DER \u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e SHA256 \u30b5\u30e0\u3067\u3059\u3002\u4e00\u822c\u306b\u8a3c\u660e\u66f8\u306e\u30d5\u30a3\u30f3\u30ac\u30fc\u30d7\u30ea\u30f3\u30c8\u3068\u3057\u3066\u77e5\u3089\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"credentials"}),": \u30af\u30e9\u30b9\u30bf\u30fc\u306b\u53c2\u52a0\u3059\u308b\u30ce\u30fc\u30c9\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u307e\u305f\u306f\u30d9\u30a2\u30e9\u30fc\u30c8\u30fc\u30af\u30f3\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"tls-\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d4\u30f3\u30b0",children:"TLS \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d4\u30f3\u30b0"}),"\n",(0,r.jsx)(n.p,{children:"\u30bb\u30ad\u30e5\u30a2\u30c8\u30fc\u30af\u30f3\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u53c2\u52a0\u30ce\u30fc\u30c9\u306f\u8cc7\u683c\u60c5\u5831\u3092\u9001\u4fe1\u3059\u308b\u524d\u306b\u63a5\u7d9a\u3057\u305f\u30b5\u30fc\u30d0\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306b\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["TLS \u691c\u8a3c\u3092\u7121\u52b9\u306b\u3057\u3066\u3001\u53c2\u52a0\u3059\u308b\u30b5\u30fc\u30d0\u30fc\u306e ",(0,r.jsx)(n.code,{children:"/cacerts"})," \u304b\u3089 CA \u30d0\u30f3\u30c9\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u4e0a\u8a18\u306e\u8aac\u660e\u306b\u5f93\u3063\u3066 CA \u8a3c\u660e\u66f8\u306e SHA256 \u30cf\u30c3\u30b7\u30e5\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8a08\u7b97\u3055\u308c\u305f SHA256 \u30cf\u30c3\u30b7\u30e5\u3092\u30c8\u30fc\u30af\u30f3\u306e\u30cf\u30c3\u30b7\u30e5\u3068\u6bd4\u8f03\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30cf\u30c3\u30b7\u30e5\u304c\u4e00\u81f4\u3059\u308b\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u63d0\u793a\u3059\u308b\u8a3c\u660e\u66f8\u304c\u30b5\u30fc\u30d0\u30fc\u306e CA \u30d0\u30f3\u30c9\u30eb\u306b\u3088\u3063\u3066\u691c\u8a3c\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30b5\u30fc\u30d0\u30fc\u8a3c\u660e\u66f8\u304c\u6709\u52b9\u3067\u3042\u308b\u5834\u5408\u3001\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e\u306b\u5fdc\u3058\u3066\u57fa\u672c\u8a8d\u8a3c\u307e\u305f\u306f\u30d9\u30a2\u30e9\u30fc\u30c8\u30fc\u30af\u30f3\u8a8d\u8a3c\u3092\u4f7f\u7528\u3057\u3066\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u53c2\u52a0\u3059\u308b\u305f\u3081\u306e\u8cc7\u683c\u60c5\u5831\u3092\u63d0\u793a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30b7\u30e7\u30fc\u30c8",children:"\u30b7\u30e7\u30fc\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u30b7\u30e7\u30fc\u30c8\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f\u306b\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u53c2\u52a0\u3059\u308b\u30ce\u30fc\u30c9\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d1\u30b9\u30ef\u30fc\u30c9\u307e\u305f\u306f\u30d9\u30a2\u30e9\u30fc\u30c8\u30fc\u30af\u30f3\u306e\u307f\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b7\u30e7\u30fc\u30c8\u30c8\u30fc\u30af\u30f3\u304c\u4f7f\u7528\u3055\u308c\u308b\u5834\u5408\u3001\u53c2\u52a0\u30ce\u30fc\u30c9\u306f\u30b5\u30fc\u30d0\u30fc\u304c\u63d0\u793a\u3059\u308b CA \u30d0\u30f3\u30c9\u30eb\u3092\u6697\u9ed9\u7684\u306b\u4fe1\u983c\u3057\u307e\u3059\u3002TLS \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d4\u30f3\u30b0\u30d7\u30ed\u30bb\u30b9\u306e\u30b9\u30c6\u30c3\u30d7 2-4 \u306f\u30b9\u30ad\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002\u521d\u56de\u63a5\u7d9a\u306f",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",children:"\u4e2d\u9593\u8005\u653b\u6483"}),"\u306b\u5bfe\u3057\u3066\u8106\u5f31\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e",children:"\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"}),"\n",(0,r.jsx)(n.p,{children:"K3s \u306f 3 \u7a2e\u985e\u306e\u30c8\u30fc\u30af\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u306e\u307f\u304c\u5229\u7528\u53ef\u80fd\u3067\u3001\u8ffd\u52a0\u306e\u30c8\u30fc\u30af\u30f3\u30bf\u30a4\u30d7\u306f\u7ba1\u7406\u8005\u306b\u3088\u3063\u3066\u8a2d\u5b9a\u307e\u305f\u306f\u4f5c\u6210\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7a2e\u985e"}),(0,r.jsx)(n.th,{children:"CLI \u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,r.jsx)(n.th,{children:"\u74b0\u5883\u5909\u6570"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30b5\u30fc\u30d0\u30fc"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--token"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_TOKEN"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--agent-token"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_AGENT_TOKEN"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"n/a"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"n/a"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u30b5\u30fc\u30d0\u30fc",children:"\u30b5\u30fc\u30d0\u30fc"}),"\n",(0,r.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u6700\u521d\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u969b\u306b\u30c8\u30fc\u30af\u30f3\u304c\u63d0\u4f9b\u3055\u308c\u306a\u3044\u5834\u5408\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u30c8\u30fc\u30af\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u306f\u5e38\u306b\u30bb\u30ad\u30e5\u30a2\u5f62\u5f0f\u3067 ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/token"})," \u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u306e\u4e21\u65b9\u3092\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u53c2\u52a0\u3055\u305b\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u4e00\u5ea6\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u5909\u66f4\u3067\u304d\u305a\u3001\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u4eba\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u5bfe\u3057\u3066\u5b8c\u5168\u306a\u7ba1\u7406\u8005\u30a2\u30af\u30bb\u30b9\u3092\u6301\u3064\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u614e\u91cd\u306b\u4fdd\u8b77\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u306f\u3001\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306b\u6c38\u7d9a\u5316\u3055\u308c\u308b\u6a5f\u5bc6\u60c5\u5831\uff08\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u6697\u53f7\u5316\u8a2d\u5b9a\u3001\u30ef\u30a4\u30e4\u30fc\u30ac\u30fc\u30c9\u30ad\u30fc\u3001\u30af\u30e9\u30b9\u30bf\u30fc CA \u8a3c\u660e\u66f8\u304a\u3088\u3073\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30c8\u30fc\u30af\u30f3\u306e\u79d8\u5bc6\u9375\u306a\u3069\uff09\u3092\u6697\u53f7\u5316\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30ad\u30fc\u306e ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/PBKDF2",children:"PBKDF2"})," \u30d1\u30b9\u30d5\u30ec\u30fc\u30ba\u3068\u3057\u3066\u3082\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u3001\u30c8\u30fc\u30af\u30f3\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3068\u4e00\u7dd2\u306b\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u30ab\u30b9\u30bf\u30e0 CA \u8a3c\u660e\u66f8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u6700\u521d\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u969b\u306b\u306f\u30b7\u30e7\u30fc\u30c8\uff08\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u307f\uff09\u30c8\u30fc\u30af\u30f3\u5f62\u5f0f\u306e\u307f\u304c\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u81ea\u5df1\u7f72\u540d\u306e\u30af\u30e9\u30b9\u30bf\u30fc CA \u8a3c\u660e\u66f8\u3092\u751f\u6210\u3059\u308b\u307e\u3067\u30af\u30e9\u30b9\u30bf\u30fc CA \u30cf\u30c3\u30b7\u30e5\u304c\u308f\u304b\u3089\u306a\u3044\u305f\u3081\u3067\u3059\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30ab\u30b9\u30bf\u30e0 CA \u8a3c\u660e\u66f8\u306e\u4f7f\u7528\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f\u3001",(0,r.jsxs)(n.a,{href:"/docs-k3s/ja/cli/certificate",children:[(0,r.jsx)(n.code,{children:"k3s certificate"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"]}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(n.br,{}),"\n","\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f\u3001",(0,r.jsx)(n.a,{href:"/docs-k3s/ja/datastore/backup-restore",children:"\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3068\u30ea\u30b9\u30c8\u30a2"}),"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30fc\u30af\u30f3\u306f\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u3068\u540c\u3058\u3067\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30fc\u30af\u30f3\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u958b\u59cb\u3055\u308c\u305f\u5f8c\u3067\u3082\u3001\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u306e CLI \u30aa\u30d7\u30b7\u30e7\u30f3\u307e\u305f\u306f\u74b0\u5883\u5909\u6570\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30fc\u30af\u30f3\u306f\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u3068\u540c\u69d8\u306b\u9759\u7684\u306b\u69cb\u6210\u3055\u308c\u3001\u671f\u9650\u5207\u308c\u306b\u306f\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30fc\u30af\u30f3\u306f\u30bb\u30ad\u30e5\u30a2\u5f62\u5f0f\u3067 ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/agent-token"})," \u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30c8\u30fc\u30af\u30f3\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u3078\u306e\u30ea\u30f3\u30af\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7",children:"\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7"}),"\n",(0,r.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"k3s token"})," \u30b3\u30de\u30f3\u30c9\u306e\u30b5\u30dd\u30fc\u30c8\u3068\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ce\u30fc\u30c9\u306b\u53c2\u52a0\u3059\u308b\u6a5f\u80fd\u306f\u30012023-02 \u30ea\u30ea\u30fc\u30b9\uff08v1.26.2+k3s1\u3001v1.25.7+k3s1\u3001v1.24.11+k3s1\u3001v1.23.17+k3s1\uff09\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:"K3s \u306f\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u3001\u81ea\u52d5\u7684\u306b\u671f\u9650\u5207\u308c\u306b\u306a\u308b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u306f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u53c2\u52a0\u306b\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"k3s-\u30c8\u30fc\u30af\u30f3-1",children:"k3s \u30c8\u30fc\u30af\u30f3"}),"\n",(0,r.jsxs)(n.p,{children:["K3s \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u306f ",(0,r.jsx)(n.code,{children:"kubeadm token"})," \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3068\u540c\u3058\u751f\u6210\u304a\u3088\u3073\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3001",(0,r.jsx)(n.code,{children:"k3s token"})," CLI \u3082\u985e\u4f3c\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NAME:\n   k3s token - \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u7ba1\u7406\u3059\u308b\n\nUSAGE:\n   k3s token command [command options] [arguments...]\n\nCOMMANDS:\n   create    \u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\n   delete    \u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u524a\u9664\u3059\u308b\n   generate  \u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u3066\u8868\u793a\u3059\u308b\u304c\u3001\u30b5\u30fc\u30d0\u30fc\u4e0a\u306b\u306f\u4f5c\u6210\u3057\u306a\u3044\n   list      \u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u4e00\u89a7\u8868\u793a\u3059\u308b\n   rotate    \u5143\u306e\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u3092\u65b0\u3057\u3044\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u306b\u30ed\u30fc\u30c6\u30fc\u30c8\u3059\u308b\n\nOPTIONS:\n   --help, -h  \u30d8\u30eb\u30d7\u3092\u8868\u793a\u3059\u308b\n"})}),"\n",(0,r.jsx)(n.h4,{id:"k3s-token-create-token",children:(0,r.jsx)(n.code,{children:"k3s token create [token]"})}),"\n",(0,r.jsxs)(n.p,{children:["\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,r.jsx)(n.code,{children:"[token]"})," \u306f ",(0,r.jsx)(n.code,{children:"k3s token generate"})," \u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u305f\u5b9f\u969b\u306e\u30c8\u30fc\u30af\u30f3\u3067\u3059\u3002\u30c8\u30fc\u30af\u30f3\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u30c8\u30fc\u30af\u30f3\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30af\u30e9\u30b9\u30bf\u30fc CA \u30cf\u30c3\u30b7\u30e5\u3092\u542b\u3080\u30bb\u30ad\u30e5\u30a2\u5f62\u5f0f\u306e\u30c8\u30fc\u30af\u30f3\u304c\u6a19\u6e96\u51fa\u529b\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306e\u51fa\u529b\u306f\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u306e\u79d8\u5bc6\u90e8\u5206\u306f\u518d\u5ea6\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d5\u30e9\u30b0"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: /var/lib/rancher/k3s \u307e\u305f\u306f root \u3067\u306a\u3044\u5834\u5408\u306f ${HOME}/.rancher/k3s\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubeconfig"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u63a5\u7d9a\u3059\u308b\u30b5\u30fc\u30d0\u30fc [$KUBECONFIG]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--description"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u95a2\u3059\u308b\u4eba\u9593\u306b\u512a\u3057\u3044\u8aac\u660e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--groups"})," \u5024"]}),(0,r.jsxs)(n.td,{children:['\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u308b\u3068\u304d\u306b\u3053\u306e\u30c8\u30fc\u30af\u30f3\u304c\u8a8d\u8a3c\u3059\u308b\u8ffd\u52a0\u306e\u30b0\u30eb\u30fc\u30d7\u3002\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: "system:bootstrappers:k3s',":default-node-token",'"\uff09']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--ttl"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u304c\u81ea\u52d5\u7684\u306b\u524a\u9664\u3055\u308c\u308b\u307e\u3067\u306e\u671f\u9593\uff08\u4f8b: 1s, 2m, 3h\uff09\u3002'0' \u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30c8\u30fc\u30af\u30f3\u306f\u671f\u9650\u5207\u308c\u306b\u306a\u308a\u307e\u305b\u3093\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: 24h0m0s\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--usages"})," \u5024"]}),(0,r.jsx)(n.td,{children:'\u3053\u306e\u30c8\u30fc\u30af\u30f3\u304c\u4f7f\u7528\u3067\u304d\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: "signing,authentication"\uff09'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"k3s-token-delete",children:(0,r.jsx)(n.code,{children:"k3s token delete"})}),"\n",(0,r.jsx)(n.p,{children:"1 \u3064\u4ee5\u4e0a\u306e\u30c8\u30fc\u30af\u30f3\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u5b8c\u5168\u306a\u30c8\u30fc\u30af\u30f3\u307e\u305f\u306f\u30c8\u30fc\u30af\u30f3 ID \u306e\u307f\u3092\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d5\u30e9\u30b0"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: /var/lib/rancher/k3s \u307e\u305f\u306f root \u3067\u306a\u3044\u5834\u5408\u306f ${HOME}/.rancher/k3s\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubeconfig"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u63a5\u7d9a\u3059\u308b\u30b5\u30fc\u30d0\u30fc [$KUBECONFIG]"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"k3s-token-generate",children:(0,r.jsx)(n.code,{children:"k3s token generate"})}),"\n",(0,r.jsx)(n.p,{children:"\u30e9\u30f3\u30c0\u30e0\u306b\u751f\u6210\u3055\u308c\u305f\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:['\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30c8\u30fc\u30af\u30f3 ID \u304c "[a-z0-9]',6,".[a-z0-9]",16,'" \u306e\u5f62\u5f0f\u3067\u3042\u308a\u3001\u6700\u521d\u306e\u90e8\u5206\u304c\u30c8\u30fc\u30af\u30f3 ID\u30012 \u756a\u76ee\u306e\u90e8\u5206\u304c\u79d8\u5bc6\u3067\u3042\u308b\u9650\u308a\u3001\u81ea\u5206\u3067\u751f\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002']}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d5\u30e9\u30b0"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: /var/lib/rancher/k3s \u307e\u305f\u306f root \u3067\u306a\u3044\u5834\u5408\u306f ${HOME}/.rancher/k3s\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubeconfig"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u63a5\u7d9a\u3059\u308b\u30b5\u30fc\u30d0\u30fc [$KUBECONFIG]"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"k3s-token-list",children:(0,r.jsx)(n.code,{children:"k3s token list"})}),"\n",(0,r.jsx)(n.p,{children:"\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u3092\u4e00\u89a7\u8868\u793a\u3057\u3001\u305d\u306e ID\u3001\u8aac\u660e\u3001\u304a\u3088\u3073\u6b8b\u308a\u306e\u6709\u52b9\u671f\u9593\u3092\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d5\u30e9\u30b0"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: /var/lib/rancher/k3s \u307e\u305f\u306f root \u3067\u306a\u3044\u5834\u5408\u306f ${HOME}/.rancher/k3s\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubeconfig"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u63a5\u7d9a\u3059\u308b\u30b5\u30fc\u30d0\u30fc [$KUBECONFIG]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--output"})," \u5024"]}),(0,r.jsx)(n.td,{children:'\u51fa\u529b\u5f62\u5f0f\u3002 \u6709\u52b9\u306a\u30aa\u30d7\u30b7\u30e7\u30f3: text, json\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: "text"\uff09'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"k3s-token-rotate",children:(0,r.jsx)(n.code,{children:"k3s token rotate"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,r.jsx)(n.p,{children:"2023-10 \u30ea\u30ea\u30fc\u30b9\uff08v1.28.2+k3s1\u3001v1.27.7+k3s1\u3001v1.26.10+k3s1\u3001v1.25.15+k3s1\uff09\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u5143\u306e\u30b5\u30fc\u30d0\u30fc\u30c8\u30fc\u30af\u30f3\u3092\u65b0\u3057\u3044\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c8\u30fc\u30af\u30f3\u306b\u30ed\u30fc\u30c6\u30fc\u30c8\u3057\u307e\u3059\u3002\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u5f8c\u3001\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u304a\u3088\u3073\u5143\u306e\u30c8\u30fc\u30af\u30f3\u3067\u53c2\u52a0\u3057\u305f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3067\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u30011 \u3064\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30d5\u30e9\u30b0"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: /var/lib/rancher/k3s \u307e\u305f\u306f root \u3067\u306a\u3044\u5834\u5408\u306f ${HOME}/.rancher/k3s\uff09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubeconfig"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u63a5\u7d9a\u3059\u308b\u30b5\u30fc\u30d0\u30fc [$KUBECONFIG]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--server"})," \u5024"]}),(0,r.jsxs)(n.td,{children:['\u63a5\u7d9a\u3059\u308b\u30b5\u30fc\u30d0\u30fc(\u30c7\u30d5\u30a9\u30eb\u30c8: "',(0,r.jsx)(n.a,{href:"https://127.0.0.1:6443",children:"https://127.0.0.1:6443"}),'") [$K3S_URL]']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--token"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u30b5\u30fc\u30d0\u30fc\u307e\u305f\u306f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u53c2\u52a0\u3055\u305b\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u65e2\u5b58\u306e\u30c8\u30fc\u30af\u30f3 [$K3S_TOKEN]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--new-token"})," \u5024"]}),(0,r.jsx)(n.td,{children:"\u65e2\u5b58\u306e\u30c8\u30fc\u30af\u30f3\u3092\u7f6e\u304d\u63db\u3048\u308b\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var d=s(6540);const r={},c=d.createContext(r);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);