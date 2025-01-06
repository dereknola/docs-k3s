"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2175],{9804:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"cluster-access","title":"Cluster Access","description":"The kubeconfig file stored at /etc/rancher/k3s/k3s.yaml is used to configure access to the Kubernetes cluster. If you have installed upstream Kubernetes command line tools such as kubectl or helm you will need to configure them with the correct kubeconfig path. This can be done by either exporting the KUBECONFIG environment variable or by invoking the --kubeconfig command line flag. Refer to the examples below for details.","source":"@site/docs/cluster-access.md","sourceDirName":".","slug":"/cluster-access","permalink":"/docs-k3s/cluster-access","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/cluster-access.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"Cluster Access"},"sidebar":"mySidebar","previous":{"title":"Architecture","permalink":"/docs-k3s/architecture"},"next":{"title":"Volumes and Storage","permalink":"/docs-k3s/storage"}}');var n=s(4848),r=s(8453);const o={title:"Cluster Access"},l=void 0,i={},a=[{value:"Accessing the Cluster from Outside with kubectl",id:"accessing-the-cluster-from-outside-with-kubectl",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The kubeconfig file stored at ",(0,n.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"})," is used to configure access to the Kubernetes cluster. If you have installed upstream Kubernetes command line tools such as kubectl or helm you will need to configure them with the correct kubeconfig path. This can be done by either exporting the ",(0,n.jsx)(t.code,{children:"KUBECONFIG"})," environment variable or by invoking the ",(0,n.jsx)(t.code,{children:"--kubeconfig"})," command line flag. Refer to the examples below for details."]}),"\n",(0,n.jsx)(t.p,{children:"Leverage the KUBECONFIG environment variable:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n"})}),"\n",(0,n.jsx)(t.p,{children:"Or specify the location of the kubeconfig file in the command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/k3s/k3s.yaml ls --all-namespaces\n"})}),"\n",(0,n.jsx)(t.h3,{id:"accessing-the-cluster-from-outside-with-kubectl",children:"Accessing the Cluster from Outside with kubectl"}),"\n",(0,n.jsxs)(t.p,{children:["Copy ",(0,n.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"})," on your machine located outside the cluster as ",(0,n.jsx)(t.code,{children:"~/.kube/config"}),". Then replace the value of the ",(0,n.jsx)(t.code,{children:"server"})," field with the IP or name of your K3s server. ",(0,n.jsx)(t.code,{children:"kubectl"})," can now manage your K3s cluster."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var c=s(6540);const n={},r=c.createContext(n);function o(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);