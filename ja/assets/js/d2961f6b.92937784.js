"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4585],{985:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"upgrades/automated","title":"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","description":"\u6982\u8981","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/upgrades/automated.md","sourceDirName":"upgrades","slug":"/upgrades/automated","permalink":"/docs-k3s/ja/upgrades/automated","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/upgrades/automated.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},"sidebar":"mySidebar","previous":{"title":"\u624b\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","permalink":"/docs-k3s/ja/upgrades/manual"},"next":{"title":"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3","permalink":"/docs-k3s/ja/security/"}}');var l=s(4848),c=s(8453);const t={title:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"},a=void 0,d={},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"system-upgrade-controller\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"system-upgrade-controller\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"\u30d7\u30e9\u30f3\u306e\u8a2d\u5b9a",id:"\u30d7\u30e9\u30f3\u306e\u8a2d\u5b9a",level:3},{value:"\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u9632\u6b62",id:"\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u9632\u6b62",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,l.jsxs)(n.p,{children:["Rancher\u306esystem-upgrade-controller\u3092\u4f7f\u7528\u3057\u3066K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306fKubernetes\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u3059\u3002\u3053\u308c\u306b\u306f\u3001",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources",children:"\u30ab\u30b9\u30bf\u30e0\u30ea\u30bd\u30fc\u30b9\u5b9a\u7fa9\uff08CRD\uff09"}),"\u3001",(0,l.jsx)(n.code,{children:"plan"}),"\u3001\u304a\u3088\u3073",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/architecture/controller/",children:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc"}),"\u304c\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30d7\u30e9\u30f3\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30dd\u30ea\u30b7\u30fc\u3068\u8981\u4ef6\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u307e\u305f\u3001",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"\u30e9\u30d9\u30eb\u30bb\u30ec\u30af\u30bf\u30fc"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u3069\u306e\u30ce\u30fc\u30c9\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u304b\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002K3s\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306b\u9069\u3057\u305f\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u306e\u30d7\u30e9\u30f3\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3088\u308a\u9ad8\u5ea6\u306a\u30d7\u30e9\u30f3\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go",children:"CRD"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306f\u30d7\u30e9\u30f3\u3092\u76e3\u8996\u3057\u3001\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",children:"\u30b8\u30e7\u30d6"}),"\u3092\u5b9f\u884c\u3059\u308b\u30ce\u30fc\u30c9\u3092\u9078\u629e\u3057\u3066\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3057\u307e\u3059\u3002\u30b8\u30e7\u30d6\u304c\u6b63\u5e38\u306b\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306f\u5b9f\u884c\u3055\u308c\u305f\u30ce\u30fc\u30c9\u306b\u30e9\u30d9\u30eb\u3092\u4ed8\u3051\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.mdxAdmonitionTitle,{}),(0,l.jsx)(n.p,{children:"\u8d77\u52d5\u3055\u308c\u308b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30b8\u30e7\u30d6\u306f\u9ad8\u3044\u7279\u6a29\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30db\u30b9\u30c8\u306e",(0,l.jsx)(n.code,{children:"IPC"}),"\u3001",(0,l.jsx)(n.code,{children:"NET"}),"\u3001\u304a\u3088\u3073",(0,l.jsx)(n.code,{children:"PID"}),"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CAP_SYS_BOOT"}),"\u30ad\u30e3\u30d1\u30d3\u30ea\u30c6\u30a3"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8aad\u307f\u66f8\u304d\u6a29\u9650\u3092\u6301\u3064\u30db\u30b9\u30c8\u30eb\u30fc\u30c8\u304c",(0,l.jsx)(n.code,{children:"/host"}),"\u306b\u30de\u30a6\u30f3\u30c8\u3055\u308c\u3066\u3044\u308b\u3053\u3068"]}),"\n"]})]}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306e\u65b9\u6cd5\u3067\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u81ea\u52d5\u5316\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u30af\u30e9\u30b9\u30bf\u30fc\u306bsystem-upgrade-controller\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,l.jsx)(n.li,{children:"\u30d7\u30e9\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"K3s\u30af\u30e9\u30b9\u30bf\u30fc\u304cRancher\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306e\u7ba1\u7406\u306b\u306fRancher UI\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"K3s\u30af\u30e9\u30b9\u30bf\u30fc\u304cRancher\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5834\u5408\u3001Rancher\u306fsystem-upgrade-controller\u306e\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u3068\u30d7\u30e9\u30f3\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u306e\u624b\u9806\u306b\u5f93\u308f\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"K3s\u30af\u30e9\u30b9\u30bf\u30fc\u304cRancher\u306b\u3088\u3063\u3066\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3055\u308c\u305f\u5834\u5408\u3001Rancher\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u30b7\u30b9\u30c6\u30e0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u306e\u624b\u9806\u306b\u5f93\u308f\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"K3s\u30af\u30e9\u30b9\u30bf\u30fc\u304cRancher\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]})]}),"\n",(0,l.jsx)(n.p,{children:"system-upgrade-controller\u306e\u8a2d\u8a08\u3068\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3001\u307e\u305f\u306fK3s\u3068\u306e\u7d71\u5408\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306eGit\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade",children:"k3s-upgrade"})}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["K3s\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u969b\u306b\u306f\u3001",(0,l.jsx)(n.a,{href:"https://kubernetes.io/releases/version-skew-policy/",children:"Kubernetes\u30d0\u30fc\u30b8\u30e7\u30f3\u30b9\u30ad\u30e5\u30fc\u30dd\u30ea\u30b7\u30fc"}),"\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u6642\u306b\u4e2d\u9593\u306e\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u306a\u3044\u3088\u3046\u306b\u30d7\u30e9\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002system-upgrade-controller\u81ea\u4f53\u306f\u3001Kubernetes\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5909\u66f4\u3092\u9632\u304e\u307e\u305b\u3093\u3002"]})}),"\n",(0,l.jsx)(n.h3,{id:"system-upgrade-controller\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"system-upgrade-controller\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,l.jsx)(n.p,{children:"system-upgrade-controller\u306f\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306b\u306f\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u3001clusterRoleBinding\u3001\u304a\u3088\u3073configmap\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/system-upgrade-controller.yaml\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306f\u524d\u8ff0\u306econfigmap\u3092\u4ecb\u3057\u3066\u8a2d\u5b9a\u304a\u3088\u3073\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u304c\u3001\u5909\u66f4\u3092\u9069\u7528\u3059\u308b\u306b\u306f\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u3092\u518d\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30d7\u30e9\u30f3\u3092\u9069\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u306f\u3001system-upgrade-controller CRD\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/crd.yaml\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u30d7\u30e9\u30f3\u306e\u8a2d\u5b9a",children:"\u30d7\u30e9\u30f3\u306e\u8a2d\u5b9a"}),"\n",(0,l.jsx)(n.p,{children:"\u5c11\u306a\u304f\u3068\u30822\u3064\u306e\u30d7\u30e9\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\uff1a\u30b5\u30fc\u30d0\u30fc\uff08\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\uff09\u30ce\u30fc\u30c9\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u30d7\u30e9\u30f3\u3068\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u30d7\u30e9\u30f3\u3067\u3059\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u8ffd\u52a0\u306e\u30d7\u30e9\u30f3\u3092\u4f5c\u6210\u3057\u3001\u30ce\u30fc\u30c9\u5168\u4f53\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306e\u5c55\u958b\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002\u30d7\u30e9\u30f3\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306f\u305d\u308c\u3092\u691c\u51fa\u3057\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e2\u3064\u306e\u4f8b\u30d7\u30e9\u30f3\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u3092K3s v1.24.6+k3s1\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u307e\u3059\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'# \u30b5\u30fc\u30d0\u30fc\u30d7\u30e9\u30f3\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: In\n      values:\n      - "true"\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n---\n# \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30d7\u30e9\u30f3\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: DoesNotExist\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/k3s-upgrade\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u30d7\u30e9\u30f3\u306b\u95a2\u3057\u3066\u91cd\u8981\u306a\u70b9\u3092\u3044\u304f\u3064\u304b\u6319\u3052\u307e\u3059\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u30d7\u30e9\u30f3\u306f\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u306e\u3068\u540c\u3058\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306b\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"concurrency"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u540c\u6642\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3067\u304d\u308b\u30ce\u30fc\u30c9\u306e\u6570\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["server-plan\u306f",(0,l.jsx)(n.code,{children:"node-role.kubernetes.io/control-plane"}),"\u30e9\u30d9\u30eb\u3092\u6301\u3064\u30ce\u30fc\u30c9\u3092\u9078\u629e\u3059\u308b\u30e9\u30d9\u30eb\u30bb\u30ec\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u307e\u3059\u3002agent-plan\u306f\u305d\u306e\u30e9\u30d9\u30eb\u3092\u6301\u305f\u306a\u3044\u30ce\u30fc\u30c9\u3092\u9078\u629e\u3059\u308b\u30e9\u30d9\u30eb\u30bb\u30ec\u30af\u30bf\u30fc\u3092\u6307\u5b9a\u3057\u3066\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["agent-plan\u306e",(0,l.jsx)(n.code,{children:"prepare"}),"\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u305d\u306e\u30d7\u30e9\u30f3\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30b8\u30e7\u30d6\u304cserver-plan\u306e\u5b8c\u4e86\u3092\u5f85\u3063\u3066\u304b\u3089\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4e21\u65b9\u306e\u30d7\u30e9\u30f3\u306b\u306f",(0,l.jsx)(n.code,{children:"version"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u304cv1.24.6+k3s1\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee3\u308f\u308a\u306b",(0,l.jsx)(n.code,{children:"version"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7701\u7565\u3057\u3001",(0,l.jsx)(n.code,{children:"channel"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092K3s\u306e\u30ea\u30ea\u30fc\u30b9\u306b\u89e3\u6c7a\u3055\u308c\u308bURL\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306f\u305d\u306eURL\u3092\u76e3\u8996\u3057\u3001\u65b0\u3057\u3044\u30ea\u30ea\u30fc\u30b9\u306b\u89e3\u6c7a\u3055\u308c\u308b\u305f\u3073\u306b\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u308c\u306f",(0,l.jsx)(n.a,{href:"/docs-k3s/ja/upgrades/manual#release-channels",children:"\u30ea\u30ea\u30fc\u30b9\u30c1\u30e3\u30f3\u30cd\u30eb"}),"\u3068\u3088\u304f\u9023\u643a\u3057\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u6b21\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u30d7\u30e9\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u5e38\u306b\u6700\u65b0\u306e\u5b89\u5b9a\u7248K3s\u30ea\u30ea\u30fc\u30b9\u306b\u81ea\u52d5\u7684\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.k3s.io/v1-release/channels/stable\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8ff0\u3079\u305f\u3088\u3046\u306b\u3001\u30d7\u30e9\u30f3\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u304c\u305d\u308c\u3092\u691c\u51fa\u3057\u3001\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002\u30d7\u30e9\u30f3\u3092\u66f4\u65b0\u3059\u308b\u3068\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u306f\u30d7\u30e9\u30f3\u3092\u518d\u8a55\u4fa1\u3057\u3001\u5225\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u304c\u5fc5\u8981\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"kubectl\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30f3\u3068\u30b8\u30e7\u30d6\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306e\u9032\u884c\u72b6\u6cc1\u3092\u76e3\u8996\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u9632\u6b62",children:"\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u9632\u6b62"}),"\n",(0,l.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,l.jsxs)(n.p,{children:["2023\u5e747\u6708\u306e\u30ea\u30ea\u30fc\u30b9\uff08",(0,l.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.27.4%2Bk3s1",children:"v1.27.4+k3s1"}),"\u3001",(0,l.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.26.7%2Bk3s1",children:"v1.26.7+k3s1"}),"\u3001",(0,l.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.25.12%2Bk3s1",children:"v1.25.12+k3s1"}),"\u3001",(0,l.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.24.16%2Bk3s1",children:"v1.24.16+k3s1"}),"\uff09\u304b\u3089\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,l.jsx)(n.p,{children:"Kubernetes\u306f\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30d7\u30e9\u30f3\u3067\u4f7f\u7528\u3055\u308c\u308bk3s-upgrade\u30a4\u30e1\u30fc\u30b8\u306fK3s\u306e\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u3092\u62d2\u5426\u3057\u3001\u30d7\u30e9\u30f3\u304c\u5931\u6557\u3057\u3001\u30ce\u30fc\u30c9\u304c\u30b3\u30fc\u30c9\u30f3\u3055\u308c\u305f\u307e\u307e\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001\u5931\u6557\u3057\u305f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30dd\u30c3\u30c9\u3068\u30b3\u30fc\u30c9\u30f3\u3055\u308c\u305f\u30ce\u30fc\u30c9\u3092\u793a\u3059\u4f8b\u3067\u3059\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-console",children:"ubuntu@user:~$ kubectl get pods -n system-upgrade\nNAME                                                              READY   STATUS    RESTARTS   AGE\napply-k3s-server-on-ip-172-31-0-16-with-7af95590a5af8e8c3-2cdc6   0/1     Error     0          9m25s\napply-k3s-server-on-ip-172-31-10-23-with-7af95590a5af8e8c-9xvwg   0/1     Error     0          14m\napply-k3s-server-on-ip-172-31-13-213-with-7af95590a5af8e8-8j72v   0/1     Error     0          18m\nsystem-upgrade-controller-7c4b84d5d9-kkzr6                        1/1     Running   0          20m\nubuntu@user:~$ kubectl get nodes\nNAME               STATUS                     ROLES                       AGE   VERSION\nip-172-31-0-16     Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-10-23    Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-13-213   Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-2-13     Ready                      <none>                      19h   v1.27.4+k3s1\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u30f3\u3055\u308c\u305f\u30ce\u30fc\u30c9\u3092\u30b5\u30fc\u30d3\u30b9\u306b\u623b\u3059\u306b\u306f\u3001\u6b21\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30d7\u30e9\u30f3\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u307e\u305f\u306f\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u5909\u66f4\u3057\u3066\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u3067\u73fe\u5728\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3068\u540c\u3058\u304b\u305d\u308c\u4ee5\u4e0a\u306e\u30ea\u30ea\u30fc\u30b9\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u3057\u3001\u30d7\u30e9\u30f3\u304c\u6210\u529f\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30d7\u30e9\u30f3\u3092\u524a\u9664\u3057\u3001\u30ce\u30fc\u30c9\u3092\u624b\u52d5\u3067\u30a2\u30f3\u30b3\u30fc\u30c9\u30f3\u3057\u307e\u3059\u3002\n",(0,l.jsx)(n.code,{children:"kubectl get plan -n system-upgrade"}),"\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30f3\u540d\u3092\u898b\u3064\u3051\u3001",(0,l.jsx)(n.code,{children:"kubectl delete plan -n system-upgrade PLAN_NAME"}),"\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30e9\u30f3\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u30d7\u30e9\u30f3\u304c\u524a\u9664\u3055\u308c\u305f\u3089\u3001",(0,l.jsx)(n.code,{children:"kubectl uncordon NODE_NAME"}),"\u3092\u4f7f\u7528\u3057\u3066\u5404\u30ce\u30fc\u30c9\u3092\u30a2\u30f3\u30b3\u30fc\u30c9\u30f3\u3057\u307e\u3059\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(6540);const l={},c=r.createContext(l);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);