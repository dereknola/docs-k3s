"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9762],{4237:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"upgrades/automated","title":"\u81ea\u52a8\u5347\u7ea7","description":"Overview","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrades/automated.md","sourceDirName":"upgrades","slug":"/upgrades/automated","permalink":"/docs-k3s/zh/upgrades/automated","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/upgrades/automated.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"\u81ea\u52a8\u5347\u7ea7"},"sidebar":"mySidebar","previous":{"title":"\u624b\u52a8\u5347\u7ea7","permalink":"/docs-k3s/zh/upgrades/manual"},"next":{"title":"\u5b89\u5168","permalink":"/docs-k3s/zh/security/"}}');var c=s(4848),l=s(8453);const t={title:"\u81ea\u52a8\u5347\u7ea7"},a=void 0,o={},d=[{value:"Overview",id:"overview",level:3},{value:"\u5b89\u88c5 system-upgrade-controller",id:"\u5b89\u88c5-system-upgrade-controller",level:3},{value:"\u914d\u7f6e\u8ba1\u5212",id:"\u914d\u7f6e\u8ba1\u5212",level:3},{value:"\u964d\u7ea7\u9884\u9632",id:"\u964d\u7ea7\u9884\u9632",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u7684 system-upgrade-controller \u7ba1\u7406 K3s \u96c6\u7fa4\u5347\u7ea7\u3002\u8fd9\u662f\u4e00\u79cd Kubernetes \u539f\u751f\u7684\u96c6\u7fa4\u5347\u7ea7\u65b9\u6cd5\u3002\u5b83\u4f7f\u7528\u4e86",(0,c.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources",children:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD)"}),"\u3001",(0,c.jsx)(n.code,{children:"\u8ba1\u5212"}),"\u548c",(0,c.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/architecture/controller/",children:"\u63a7\u5236\u5668"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8ba1\u5212\u5b9a\u4e49\u4e86\u5347\u7ea7\u7684\u7b56\u7565\u548c\u8981\u6c42\u3002\u5b83\u8fd8\u901a\u8fc7",(0,c.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"\u6807\u7b7e\u9009\u62e9\u5668"}),"\u6765\u5b9a\u4e49\u5e94\u8be5\u5347\u7ea7\u7684\u8282\u70b9\u3002\u8bf7\u53c2\u9605\u4e0b\u6587\uff0c\u4e86\u89e3\u9002\u7528\u4e8e\u5347\u7ea7 K3s \u96c6\u7fa4\u7684\u9ed8\u8ba4\u8ba1\u5212\u3002\u6709\u5173\u66f4\u9ad8\u7ea7\u7684\u8ba1\u5212\u914d\u7f6e\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,c.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go",children:"CRD"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u63a7\u5236\u5668\u901a\u8fc7\u76d1\u63a7\u8ba1\u5212\u548c\u9009\u62e9\u8981\u8fd0\u884c\u5347\u7ea7 ",(0,c.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",children:"job"})," \u7684\u8282\u70b9\u6765\u5b89\u6392\u5347\u7ea7\u3002job \u6210\u529f\u8fd0\u884c\u5b8c\u6210\u65f6\uff0c\u63a7\u5236\u5668\u5c06\u76f8\u5e94\u5730\u6807\u8bb0\u5b83\u8fd0\u884c\u7684\u8282\u70b9\u3002"]}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsx)(n.p,{children:"\u542f\u52a8\u7684\u5347\u7ea7 job \u5fc5\u987b\u5177\u6709\u9ad8\u6743\u9650\u3002\u5b83\u914d\u7f6e\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4e3b\u673a ",(0,c.jsx)(n.code,{children:"IPC"}),"\u3001",(0,c.jsx)(n.code,{children:"NET"})," \u548c ",(0,c.jsx)(n.code,{children:"PID"})," \u547d\u540d\u7a7a\u95f4"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"CAP_SYS_BOOT"})," \u80fd\u529b"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6302\u8f7d\u5728 ",(0,c.jsx)(n.code,{children:"/host"})," \u7684\u4e3b\u673a\u6839\u76ee\u5f55\uff0c\u5177\u6709\u8bfb\u5199\u6743\u9650"]}),"\n"]})]}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u81ea\u52a8\u5347\u7ea7\uff0c\u4f60\u5fc5\u987b\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5c06 system-upgrade-controller \u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d"}),"\n",(0,c.jsx)(n.li,{children:"\u914d\u7f6e\u8ba1\u5212"}),"\n"]}),"\n",(0,c.jsxs)(n.admonition,{type:"warning",children:[(0,c.jsx)(n.p,{children:"\u5982\u679c K3s \u96c6\u7fa4\u7531 Rancher \u7ba1\u7406\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Rancher UI \u6765\u7ba1\u7406\u5347\u7ea7\u3002"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5982\u679c K3s \u96c6\u7fa4\u662f\u5bfc\u5165\u5230 Rancher \u7684\uff0cRancher \u5c06\u7ba1\u7406 system-upgrade-controller \u90e8\u7f72\u548c\u8ba1\u5212\u3002\u4e0d\u8981\u6309\u7167\u6b64\u9875\u9762\u4e0a\u7684\u6b65\u9aa4\u64cd\u4f5c\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c K3s \u96c6\u7fa4\u662f\u7531 Rancher \u9884\u914d\u7684\uff0cRancher \u5c06\u4f7f\u7528\u7cfb\u7edf Agent \u6765\u7ba1\u7406\u7248\u672c\u5347\u7ea7\u3002\u4e0d\u8981\u6309\u7167\u6b64\u9875\u9762\u4e0a\u7684\u6b65\u9aa4\u64cd\u4f5c\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c K3s \u96c6\u7fa4",(0,c.jsx)(n.em,{children:"\u4e0d\u662f"}),"\u7531 Rancher \u7ba1\u7406\u7684\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u3002"]}),"\n"]})]}),"\n",(0,c.jsx)(n.p,{children:"\u6709\u5173 system-upgrade-controller \u7684\u8bbe\u8ba1\u548c\u67b6\u6784\uff0c\u4ee5\u53ca\u5b83\u4e0e K3s \u96c6\u6210\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b Git \u4ed3\u5e93\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade",children:"k3s-upgrade"})}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:["\u5c1d\u8bd5\u5347\u7ea7\u5230 K3s \u65b0\u7248\u672c\u65f6\uff0c",(0,c.jsx)(n.a,{href:"https://kubernetes.io/releases/version-skew-policy/",children:"Kubernetes \u7248\u672c\u503e\u659c\u7b56\u7565"}),"\u9002\u7528\u3002\u786e\u4fdd\u4f60\u7684\u8ba1\u5212\u5728\u5347\u7ea7\u65f6\u4e0d\u4f1a\u8df3\u8fc7\u4e2d\u95f4\u6b21\u8981\u7248\u672c\u3002system-upgrade-controller \u672c\u8eab\u4e0d\u4f1a\u9632\u6b62\u66f4\u6539\u5230\u4e0d\u652f\u6301\u7684 Kubernetes \u7248\u672c\u3002"]})}),"\n",(0,c.jsx)(n.h3,{id:"\u5b89\u88c5-system-upgrade-controller",children:"\u5b89\u88c5 system-upgrade-controller"}),"\n",(0,c.jsx)(n.p,{children:"system-upgrade-controller \u53ef\u4ee5\u4f5c\u4e3a Deployment \u5b89\u88c5\u5230\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002Deployment \u9700\u8981 ServiceAccount\u3001clusterRoleBinding \u548c configmap\u3002\u8981\u5b89\u88c5\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/system-upgrade-controller.yaml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u63a7\u5236\u5668\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u63d0\u5230\u7684 configmap \u8fdb\u884c\u914d\u7f6e\u548c\u81ea\u5b9a\u4e49\uff0c\u4f46\u63a7\u5236\u5668\u5fc5\u987b\u91cd\u65b0\u90e8\u7f72\u624d\u80fd\u5e94\u7528\u66f4\u6539\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u914d\u7f6e\u8ba1\u5212",children:"\u914d\u7f6e\u8ba1\u5212"}),"\n",(0,c.jsx)(n.p,{children:"\u5efa\u8bae\u4f60\u81f3\u5c11\u521b\u5efa\u4e24\u4e2a\u8ba1\u5212\uff1a\u5347\u7ea7 server\uff08control-plane\uff09\u8282\u70b9\u7684\u8ba1\u5212\u548c\u5347\u7ea7 agent \u8282\u70b9\u7684\u8ba1\u5212\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u521b\u5efa\u5176\u4ed6\u8ba1\u5212\u6765\u63a7\u5236\u8de8\u8282\u70b9\u7684\u5347\u7ea7\u3002\u521b\u5efa\u8ba1\u5212\u540e\uff0c\u63a7\u5236\u5668\u5c06\u9009\u62e9\u5b83\u4eec\u5e76\u5f00\u59cb\u5347\u7ea7\u4f60\u7684\u96c6\u7fa4\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e24\u4e2a\u793a\u4f8b\u8ba1\u5212\u4f1a\u5c06\u4f60\u7684\u96c6\u7fa4\u5347\u7ea7\u5230 K3s v1.24.6+k3s1\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: In\n      values:\n      - "true"\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: DoesNotExist\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/k3s-upgrade\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  version: v1.24.6+k3s1\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5173\u4e8e\u8fd9\u4e9b\u8ba1\u5212\uff0c\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u4e8b\u60c5\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u8ba1\u5212\u5fc5\u987b\u5728\u90e8\u7f72\u63a7\u5236\u5668\u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"concurrency"})," \u5b57\u6bb5\u8868\u793a\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u591a\u5c11\u4e2a\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"server-plan"})," \u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u6765\u9009\u62e9\u5e26\u6709 ",(0,c.jsx)(n.code,{children:"node-role.kubernetes.io/control-plane"})," \u6807\u7b7e\u7684\u8282\u70b9\uff0c\u4ece\u800c\u9501\u5b9a server \u8282\u70b9\u3002",(0,c.jsx)(n.code,{children:"agent-plan"})," \u901a\u8fc7\u6307\u5b9a\u4e00\u4e2a\u6807\u7b7e\u9009\u62e9\u5668\u6765\u9009\u62e9\u6ca1\u6709\u8be5\u6807\u7b7e\u7684\u8282\u70b9\uff0c\u4ece\u800c\u9501\u5b9a agent \u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"agent-plan"})," \u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"prepare"})," \u6b65\u9aa4\u4f1a\u4f7f\u8be5\u8ba1\u5212\u7b49\u5f85 ",(0,c.jsx)(n.code,{children:"server-plan"})," \u5b8c\u6210\u540e\u518d\u6267\u884c\u5347\u7ea7 job\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4e24\u4e2a\u8ba1\u5212\u90fd\u5c06 ",(0,c.jsx)(n.code,{children:"version"})," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a v1.24.6+k3s1\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u7701\u7565 ",(0,c.jsx)(n.code,{children:"version"})," \u5b57\u6bb5\u5e76\u5c06 ",(0,c.jsx)(n.code,{children:"channel"})," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u89e3\u6790\u5230 K3s \u7248\u672c\u7684 URL\u3002\u8fd9\u5c06\u5bfc\u81f4\u63a7\u5236\u5668\u76d1\u63a7\u8be5 URL\uff0c\u5e76\u5728\u5b83\u89e3\u6790\u5230\u65b0\u7248\u672c\u65f6\u968f\u65f6\u5347\u7ea7\u96c6\u7fa4\u3002\u8fd9\u9002\u7528\u4e8e",(0,c.jsx)(n.a,{href:"/docs-k3s/zh/upgrades/manual#%E7%89%88%E6%9C%AC-channels",children:"\u7248\u672c channels"}),"\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684 channel \u914d\u7f6e\u8ba1\u5212\uff0c\u4ece\u800c\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u603b\u662f\u81ea\u52a8\u5347\u7ea7\u5230 K3s \u7684\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.k3s.io/v1-release/channels/stable\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u524d\u6240\u8ff0\uff0c\u4e00\u65e6\u63a7\u5236\u5668\u68c0\u6d4b\u5230\u5df2\u521b\u5efa\u8ba1\u5212\uff0c\u5347\u7ea7\u5c31\u4f1a\u7acb\u5373\u5f00\u59cb\u3002\u66f4\u65b0\u8ba1\u5212\u5c06\u5bfc\u81f4\u63a7\u5236\u5668\u91cd\u65b0\u8bc4\u4f30\u8ba1\u5212\u5e76\u786e\u5b9a\u662f\u5426\u9700\u8981\u518d\u6b21\u5347\u7ea7\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u76d1\u63a7\u5347\u7ea7\u8fdb\u5ea6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 kubectl \u6765\u67e5\u770b plan \u548c job\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u964d\u7ea7\u9884\u9632",children:"\u964d\u7ea7\u9884\u9632"}),"\n",(0,c.jsx)(n.admonition,{title:"\u7248\u672c",type:"info",children:(0,c.jsxs)(n.p,{children:["\u4ece 2023-07 \u7248\u672c\uff08",(0,c.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.27.4%2Bk3s1",children:"v1.27.4+k3s1"}),"\u3001",(0,c.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.26.7%2Bk3s1",children:"v1.26.7+k3s1"}),"\u3001",(0,c.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.25.12%2Bk3s1",children:"v1.25.12+k3s1"}),"\u3001",(0,c.jsx)(n.a,{href:"https://github.com/k3s-io/k3s-upgrade/releases/tag/v1.24.16%2Bk3s1",children:"v1.24.16+k3s1"}),"\uff09\u5f00\u59cb\u3002"]})}),"\n",(0,c.jsx)(n.p,{children:"Kubernetes \u4e0d\u652f\u6301 Control Plane \u7ec4\u4ef6\u7684\u964d\u7ea7\u3002\u5347\u7ea7\u8ba1\u5212\u4f7f\u7528\u7684 k3s-upgrade \u955c\u50cf\u5c06\u62d2\u7edd\u964d\u7ea7 K3s\uff0c\u4ece\u800c\u5bfc\u81f4\u8ba1\u5212\u5931\u8d25\u5e76\u8ba9\u4f60\u7684\u8282\u70b9\u5904\u4e8e\u5c01\u9501\u72b6\u6001\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\u96c6\u7fa4\uff0c\u663e\u793a\u4e86\u5931\u8d25\u7684\u5347\u7ea7 Pod \u548c\u5c01\u9501\u7684\u8282\u70b9\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-console",children:"ubuntu@user:~$ kubectl get pods -n system-upgrade\nNAME                                                              READY   STATUS    RESTARTS   AGE\napply-k3s-server-on-ip-172-31-0-16-with-7af95590a5af8e8c3-2cdc6   0/1     Error     0          9m25s\napply-k3s-server-on-ip-172-31-10-23-with-7af95590a5af8e8c-9xvwg   0/1     Error     0          14m\napply-k3s-server-on-ip-172-31-13-213-with-7af95590a5af8e8-8j72v   0/1     Error     0          18m\nsystem-upgrade-controller-7c4b84d5d9-kkzr6                        1/1     Running   0          20m\nubuntu@user:~$ kubectl get nodes\nNAME               STATUS                     ROLES                       AGE   VERSION\nip-172-31-0-16     Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-10-23    Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-13-213   Ready,SchedulingDisabled   control-plane,etcd,master   19h   v1.27.4+k3s1\nip-172-31-2-13     Ready                      <none>                      19h   v1.27.4+k3s1\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4efb\u4e00\u65b9\u6cd5\u8ba9\u5c01\u9501\u7684\u8282\u70b9\u6062\u590d\u670d\u52a1\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u66f4\u6539\u8ba1\u5212\u4e2d\u7684\u7248\u672c\u6216\u901a\u9053\u6765\u5b9a\u4f4d\u4e0e\u96c6\u7fa4\u4e0a\u5f53\u524d\u8fd0\u884c\u7684\u7248\u672c\u76f8\u540c\u6216\u66f4\u65b0\u7684\u7248\u672c\uff0c\u4ee5\u4fbf\u8ba1\u5212\u6210\u529f\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u5220\u9664\u8ba1\u5212\u5e76\u624b\u52a8\u53d6\u6d88\u8282\u70b9\u5c01\u9501\u3002\n\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"kubectl get plan -n system-upgrade"})," \u67e5\u627e\u8ba1\u5212\u540d\u79f0\uff0c\u7136\u540e\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"kubectl delete plan -n system-upgrade PLAN_NAME"})," \u5c06\u5176\u5220\u9664\u3002\u5220\u9664\u8ba1\u5212\u540e\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"kubectl uncordon NODE_NAME"})," \u53d6\u6d88\u5bf9\u6bcf\u4e2a\u8282\u70b9\u7684\u5c01\u9501\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(6540);const c={},l=r.createContext(c);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);