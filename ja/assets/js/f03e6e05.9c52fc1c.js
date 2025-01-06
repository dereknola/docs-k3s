"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6347],{2499:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"upgrades/upgrades","title":"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","description":"K3s \u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/upgrades/upgrades.md","sourceDirName":"upgrades","slug":"/upgrades/","permalink":"/docs-k3s/ja/upgrades/","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/upgrades/upgrades.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},"sidebar":"mySidebar","previous":{"title":"\u30af\u30e9\u30b9\u30bf\u30fc\u30fb\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc","permalink":"/docs-k3s/ja/datastore/cluster-loadbalancer"},"next":{"title":"K3s\u306e\u505c\u6b62","permalink":"/docs-k3s/ja/upgrades/killall"}}');var t=r(4848),a=r(8453);const i={title:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},c=void 0,o={},d=[{value:"K3s \u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",id:"k3s-\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",level:3},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u56fa\u6709\u306e\u6ce8\u610f\u70b9",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u56fa\u6709\u306e\u6ce8\u610f\u70b9",level:3}];function l(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"k3s-\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",children:"K3s \u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs-k3s/ja/upgrades/manual",children:"\u624b\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u3067\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u624b\u52d5\u3067\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e\u3044\u304f\u3064\u304b\u306e\u6280\u8853\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001",(0,t.jsx)(s.a,{href:"https://www.terraform.io/",children:"Terraform"}),"\u306e\u3088\u3046\u306a\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306eInfrastructure-as-Code\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e\u57fa\u790e\u3068\u3057\u3066\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs-k3s/ja/upgrades/automated",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u3067\u306f\u3001Rancher\u306e",(0,t.jsx)(s.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"}),"\u3092\u4f7f\u7528\u3057\u3066Kubernetes\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h3,{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u56fa\u6709\u306e\u6ce8\u610f\u70b9",children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u56fa\u6709\u306e\u6ce8\u610f\u70b9"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Traefik:"})," Traefik\u304c\u7121\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001K3s\u30d0\u30fc\u30b8\u30e7\u30f31.20\u4ee5\u524d\u3067\u306fTraefik v1\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001K3s\u30d0\u30fc\u30b8\u30e7\u30f31.21\u4ee5\u964d\u3067\u306fv1\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306bTraefik v2\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002\u53e4\u3044Traefik v1\u304b\u3089Traefik v2\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(s.a,{href:"https://doc.traefik.io/traefik/migration/v1-to-v2/",children:"Traefik\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3001",(0,t.jsx)(s.a,{href:"https://github.com/traefik/traefik-migration-tool",children:"\u79fb\u884c\u30c4\u30fc\u30eb"}),"\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"K3s\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u30c7\u30fc\u30bf:"})," \u5916\u90e8SQL\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3057\u305fHA\u69cb\u6210\u3067K3s\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30fc\uff08\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\uff09\u30ce\u30fc\u30c9\u304c",(0,t.jsx)(s.code,{children:"--token"})," CLI\u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3057\u3066\u8d77\u52d5\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u3001\u30c8\u30fc\u30af\u30f3\u3092\u6307\u5b9a\u305b\u305a\u306b\u8ffd\u52a0\u306eK3s\u30b5\u30fc\u30d0\u30fc\u3092\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306e\u30b3\u30d4\u30fc\u3092\u4fdd\u6301\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u304b\u3089\u5fa9\u5143\u3059\u308b\u969b\u306b\u5fc5\u8981\u3067\u3059\u3002\u4ee5\u524d\u306f\u3001\u5916\u90e8SQL\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001K3s\u306f\u30c8\u30fc\u30af\u30f3\u306e\u4f7f\u7528\u3092\u5f37\u5236\u3057\u3066\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u5f71\u97ff\u3092\u53d7\u3051\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306f <= v1.19.12+k3s1, v1.20.8+k3s1, v1.21.2+k3s1; \u4fee\u6b63\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v1.19.13+k3s1, v1.20.9+k3s1, v1.21.3+k3s1 \u3067\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u65e2\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u4efb\u610f\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30c8\u30fc\u30af\u30f3\u5024\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059:"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /var/lib/rancher/k3s/server/token\n"})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var n=r(6540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);