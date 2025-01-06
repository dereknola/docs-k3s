"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2600],{7079:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"introduction","title":"K3s - \u8f7b\u91cf\u7ea7 Kubernetes","description":"K3s \u662f\u8f7b\u91cf\u7ea7\u7684 Kubernetes\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/introduction.md","sourceDirName":".","slug":"/","permalink":"/docs-k3s/zh/","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/introduction.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"slug":"/","title":"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},"sidebar":"mySidebar","next":{"title":"\u5feb\u901f\u5165\u95e8\u6307\u5357","permalink":"/docs-k3s/zh/quick-start"}}');var r=s(4848),l=s(8453);const t={slug:"/",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},c="\u4ec0\u4e48\u662f K3s\uff1f",d={},o=[];function u(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"K3s \u662f\u8f7b\u91cf\u7ea7\u7684 Kubernetes\u3002K3s \u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5b83\u9002\u7528\u4e8e\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Edge"}),"\n",(0,r.jsx)(n.li,{children:"IoT"}),"\n",(0,r.jsx)(n.li,{children:"CI"}),"\n",(0,r.jsx)(n.li,{children:"Development"}),"\n",(0,r.jsx)(n.li,{children:"ARM"}),"\n",(0,r.jsx)(n.li,{children:"\u5d4c\u5165 K8s"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u53bb\u5b66\u4e60\u90a3\u4e48\u591a\u7684 Kubernetes \u9ad8\u6df1\u77e5\u8bc6\u4e5f\u80fd\u4e0a\u624b\u4f7f\u7528"}),"\n"]}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4ec0\u4e48\u662f-k3s",children:"\u4ec0\u4e48\u662f K3s\uff1f"})}),"\n",(0,r.jsx)(n.p,{children:"K3s \u662f\u4e00\u4e2a\u5b8c\u5168\u517c\u5bb9\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5177\u6709\u4ee5\u4e0b\u589e\u5f3a\u529f\u80fd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6253\u5305\u4e3a\u5355\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u57fa\u4e8e sqlite3 \u4f5c\u4e3a\u9ed8\u8ba4\u5b58\u50a8\u673a\u5236\u7684\u8f7b\u91cf\u7ea7\u5b58\u50a8\u540e\u7aef\u3002\u540c\u65f6\u652f\u6301\u4f7f\u7528 etcd3\u3001MySQL \u548c Postgres\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5c01\u88c5\u5728\u7b80\u5355\u7684\u542f\u52a8\u7a0b\u5e8f\u4e2d\uff0c\u53ef\u4ee5\u5904\u7406\u5f88\u591a\u590d\u6742\u7684 TLS \u548c\u9009\u9879\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5b89\u5168\u7684\uff0c\u5bf9\u8f7b\u91cf\u7ea7\u73af\u5883\u6709\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6dfb\u52a0\u4e86\u7b80\u5355\u4f46\u5f3a\u5927\u7684 ",(0,r.jsx)(n.code,{children:"batteries-included"})," \u529f\u80fd\uff0c\u4f8b\u5982\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f"}),"\n",(0,r.jsx)(n.li,{children:"service load balancer"}),"\n",(0,r.jsx)(n.li,{children:"Helm controller"}),"\n",(0,r.jsx)(n.li,{children:"Traefik ingress controller"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u6240\u6709 Kubernetes control plane \u7ec4\u4ef6\u7684\u64cd\u4f5c\u90fd\u5c01\u88c5\u5728\u5355\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u8fdb\u7a0b\u4e2d\u3002\u56e0\u6b64\uff0cK3s \u652f\u6301\u81ea\u52a8\u5316\u548c\u7ba1\u7406\u590d\u6742\u7684\u96c6\u7fa4\u64cd\u4f5c\uff08\u4f8b\u5982\u8bc1\u4e66\u5206\u53d1\u7b49\uff09\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6700\u5927\u7a0b\u5ea6\u51cf\u8f7b\u4e86\u5916\u90e8\u4f9d\u8d56\u6027\uff0cK3s \u4ec5\u9700\u8981\u73b0\u4ee3\u5185\u6838\u548c cgroup \u6302\u8f7d\u3002K3s \u6253\u5305\u4e86\u6240\u9700\u7684\u4f9d\u8d56\uff0c\u5305\u62ec\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"containerd"}),"\n",(0,r.jsx)(n.li,{children:"Flannel (CNI)"}),"\n",(0,r.jsx)(n.li,{children:"CoreDNS"}),"\n",(0,r.jsx)(n.li,{children:"Traefik (Ingress)"}),"\n",(0,r.jsx)(n.li,{children:"Klipper-lb (Service LB)"}),"\n",(0,r.jsx)(n.li,{children:"\u5d4c\u5165\u5f0f\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668"}),"\n",(0,r.jsx)(n.li,{children:"\u5d4c\u5165\u5f0f local-path-provisioner"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3b\u673a\u5b9e\u7528\u7a0b\u5e8f\uff08iptables\u3001socat \u7b49\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u4e3a\u4ec0\u4e48\u53eb-k3s",children:"\u4e3a\u4ec0\u4e48\u53eb K3s?"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u5e0c\u671b\u5b89\u88c5\u7684 Kubernetes \u53ea\u5360\u7528\u4e00\u534a\u7684\u5185\u5b58\u3002Kubernetes \u662f\u4e00\u4e2a 10 \u4e2a\u5b57\u6bcd\u7684\u5355\u8bcd\uff0c\u7b80\u5199\u4e3a K8s\u3002Kubernetes \u7684\u4e00\u534a\u5c31\u662f\u4e00\u4e2a 5 \u4e2a\u5b57\u6bcd\u7684\u5355\u8bcd\uff0c\u56e0\u6b64\u7b80\u5199\u4e3a K3s\u3002K3s \u6ca1\u6709\u5168\u79f0\uff0c\u4e5f\u6ca1\u6709\u5b98\u65b9\u7684\u53d1\u97f3\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);