"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6651],{274:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"cli/cli","title":"CLI Tools","description":"The K3s binary contains a number of additional tools the help you manage your cluster.","source":"@site/docs/cli/cli.md","sourceDirName":"cli","slug":"/cli/","permalink":"/docs-k3s/cli/","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/cli/cli.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"CLI Tools"},"sidebar":"mySidebar","previous":{"title":"CIS 1.24 Self Assessment Guide","permalink":"/docs-k3s/security/self-assessment-1.24"},"next":{"title":"server","permalink":"/docs-k3s/cli/server"}}');var c=t(4848),r=t(8453);const d={title:"CLI Tools"},o=void 0,i={},l=[];function h(e){const s={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"The K3s binary contains a number of additional tools the help you manage your cluster."}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Command"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s server"})}),(0,c.jsxs)(s.td,{children:["Run a K3s server node, which launches the Kubernetes ",(0,c.jsx)(s.code,{children:"apiserver"}),", ",(0,c.jsx)(s.code,{children:"scheduler"}),", ",(0,c.jsx)(s.code,{children:"controller-manager"}),", and ",(0,c.jsx)(s.code,{children:"cloud-controller-manager"})," components, in addition a datastore and the agent components. See the ",(0,c.jsxs)(s.a,{href:"/docs-k3s/cli/server",children:[(0,c.jsx)(s.code,{children:"k3s server"})," command documentation"]})," for more information."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s agent"})}),(0,c.jsxs)(s.td,{children:["Run the K3s agent node, which launches ",(0,c.jsx)(s.code,{children:"containerd"}),", ",(0,c.jsx)(s.code,{children:"flannel"}),", ",(0,c.jsx)(s.code,{children:"kube-router"})," network policy controller, and the Kubernetes ",(0,c.jsx)(s.code,{children:"kubelet"})," and ",(0,c.jsx)(s.code,{children:"kube-proxy"})," components. See the ",(0,c.jsxs)(s.a,{href:"/docs-k3s/cli/agent",children:[(0,c.jsx)(s.code,{children:"k3s agent"})," command documentation"]})," for more information."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s kubectl"})}),(0,c.jsxs)(s.td,{children:["Run the embedded ",(0,c.jsxs)(s.a,{href:"https://kubernetes.io/docs/reference/kubectl",children:[(0,c.jsx)(s.code,{children:"kubectl"})," command"]}),". This is a CLI for interacting with the Kubernetes apiserver.  If the ",(0,c.jsx)(s.code,{children:"KUBECONFIG"})," environment variable is not set, this will automatically attempt to use the kubeconfig at ",(0,c.jsx)(s.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s crictl"})}),(0,c.jsxs)(s.td,{children:["Run the embedded ",(0,c.jsxs)(s.a,{href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md",children:[(0,c.jsx)(s.code,{children:"crictl"})," command"]}),". This is a CLI for interacting with Kubernetes's container runtime interface (CRI). Useful for debugging."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s ctr"})}),(0,c.jsxs)(s.td,{children:["Run the embedded ",(0,c.jsxs)(s.a,{href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md",children:[(0,c.jsx)(s.code,{children:"ctr"})," command"]}),". This is a CLI for containerd, the container daemon used by K3s. Useful for debugging."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s token"})}),(0,c.jsxs)(s.td,{children:["Manage bootstrap tokens. See the ",(0,c.jsxs)(s.a,{href:"/docs-k3s/cli/token",children:[(0,c.jsx)(s.code,{children:"k3s token"})," command documentation"]})," for more information."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s etcd-snapshot"})}),(0,c.jsxs)(s.td,{children:["Perform on demand backups of the K3s cluster data and upload to S3. See the ",(0,c.jsxs)(s.a,{href:"/docs-k3s/cli/etcd-snapshot",children:[(0,c.jsx)(s.code,{children:"k3s etcd-snapshot"})," command documentation"]})," for more information."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s secrets-encrypt"})}),(0,c.jsxs)(s.td,{children:["Configure K3s to encrypt secrets when storing them in the cluster. See the ",(0,c.jsxs)(s.a,{href:"/docs-k3s/cli/secrets-encrypt",children:[(0,c.jsx)(s.code,{children:"k3s secrets-encrypt"})," command documentation"]})," for more information."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s certificate"})}),(0,c.jsxs)(s.td,{children:["Manage K3s certificates. See the ",(0,c.jsxs)(s.a,{href:"/docs-k3s/cli/certificate",children:[(0,c.jsx)(s.code,{children:"k3s certificate"})," command documentation"]})," for more information."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s completion"})}),(0,c.jsx)(s.td,{children:"Generate shell completion scripts for k3s"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"k3s help"})}),(0,c.jsx)(s.td,{children:"Shows a list of commands or help for one command"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var n=t(6540);const c={},r=n.createContext(c);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);