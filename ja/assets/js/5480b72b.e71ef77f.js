"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1597],{4273:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var r=s(8547),t=s(4848),a=s(8453);const l={title:"The Basic HA Cluster",description:"Creating the simplest High Availability cluster with LB and upgrading",authors:"dereknola",hide_table_of_contents:!0},i=void 0,d={authorsImageUrls:[void 0]},c=[{value:"Baseline HA Cluster \ud83d\udcbb\ud83d\udda5\ufe0f\ud83d\udcbb",id:"baseline-ha-cluster-\ufe0f",level:2},{value:"Cluster Setup \ud83c\udf10\ud83d\udd27",id:"cluster-setup-",level:2},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Install K3s on first server",id:"install-k3s-on-first-server",level:3},{value:"Join the other servers",id:"join-the-other-servers",level:3},{value:"Grab the kubeconfig",id:"grab-the-kubeconfig",level:3},{value:"Upgrade Plan \ud83c\udfd7\ufe0f\ud83d\udcdd\ud83d\udcd0",id:"upgrade-plan-\ufe0f",level:2},{value:"Install the system-upgrade-controller",id:"install-the-system-upgrade-controller",level:3},{value:"Create the upgrade plan",id:"create-the-upgrade-plan",level:3},{value:"Conclusion \ud83d\ude80",id:"conclusion-",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["While we have more ",(0,t.jsx)(n.a,{href:"/datastore/ha-embedded/",children:"detailed docs"})," on setting up a High Availability (HA) cluster, this post will cover the simplest HA cluster you can create."]}),"\n",(0,t.jsx)(n.h2,{id:"baseline-ha-cluster-\ufe0f",children:"Baseline HA Cluster \ud83d\udcbb\ud83d\udda5\ufe0f\ud83d\udcbb"}),"\n",(0,t.jsx)(n.p,{children:"Whenever we get a question around HA, this is the cluster configuration I start with. It provides a solid foundation when deploying beyond a single server."}),"\n",(0,t.jsx)(n.p,{children:"Our cluster will have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["4 nodes or VMs:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1 load balancer"}),"\n",(0,t.jsx)(n.li,{children:"3 servers"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"A k3s-upgrade plan that will automatically update the cluster to the latest patch version of a given minor."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cluster-setup-",children:"Cluster Setup \ud83c\udf10\ud83d\udd27"}),"\n",(0,t.jsxs)(n.p,{children:["I'm using ",(0,t.jsx)(n.code,{children:"vagrant"})," to provision 4 Ubuntu 24.04 VMs for this setup, all on a flat network. Setup of nodes is left as an exercise for the reader \ud83d\ude05."]}),"\n",(0,t.jsx)(n.p,{children:"My nodes are configured with the following names and IPs:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"IP"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lb-0"}),(0,t.jsx)(n.td,{children:"10.10.10.100"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server-0"}),(0,t.jsx)(n.td,{children:"10.10.10.50"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server-1"}),(0,t.jsx)(n.td,{children:"10.10.10.51"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server-2"}),(0,t.jsx)(n.td,{children:"10.10.10.52"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"load-balancer",children:"Load Balancer"}),"\n",(0,t.jsxs)(n.p,{children:["I'm using ",(0,t.jsx)(n.a,{href:"https://www.haproxy.org/",children:"haproxy"})," as it supports later expansion to multiple LB nodes (via keepalived)."]}),"\n",(0,t.jsx)(n.p,{children:"SSH into the load balancer and install haproxy:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install haproxy\n"})}),"\n",(0,t.jsx)(n.p,{children:"The haproxy config is simple, just forward traffic to the servers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#/etc/haproxy/haproxy.cfg\nfrontend k3s\n    bind *:6443\n    mode tcp\n    default_backend k3s\n\nbackend k3s\n    mode tcp\n    option tcp-check\n    balance roundrobin\n    server server-1 10.10.10.50:6443 check\n    server server-2 10.10.10.51:6443 check\n    server server-3 10.10.10.52:6443 check\n"})}),"\n",(0,t.jsx)(n.p,{children:"Restart haproxy to apply the config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl restart haproxy\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-k3s-on-first-server",children:"Install K3s on first server"}),"\n",(0,t.jsx)(n.p,{children:"On the first server, install K3s with embedded etcd and a known token:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=v1.31 sh -s - \\\n--cluster-init --token k3sblog --tls-san 10.10.10.100\n"})}),"\n",(0,t.jsx)(n.h3,{id:"join-the-other-servers",children:"Join the other servers"}),"\n",(0,t.jsx)(n.p,{children:"On the other servers, join the cluster via the load balancer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=v1.31 sh -s - \\\n--server https://10.10.10.100:6443 --token k3sblog\n"})}),"\n",(0,t.jsx)(n.h3,{id:"grab-the-kubeconfig",children:"Grab the kubeconfig"}),"\n",(0,t.jsx)(n.p,{children:"Now that the cluster is up, we can grab the kubeconfig from the first server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"scp server-0:/etc/rancher/k3s/k3s.yaml k3s.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Modify it to access the cluster via the load balancer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sed -i 's/127.0.0.1/10.10.10.100/' k3s.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"No we can manage the cluster from our local machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export KUBECONFIG=$(pwd)/k3s.yaml\nkubectl get nodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-plan-\ufe0f",children:"Upgrade Plan \ud83c\udfd7\ufe0f\ud83d\udcdd\ud83d\udcd0"}),"\n",(0,t.jsxs)(n.p,{children:["The plan I'm using will keep k3s updated to the latest patch version of the channel we give. In this case I'm using the ",(0,t.jsx)(n.code,{children:"v1.31"})," channel, the same channel used above. Kubernetes v1.31.4 just released at time of writing this post, so with this plan we have stable upgrades handled for the next 10-12 months (depending on how many patch releases this minor gets)."]}),"\n",(0,t.jsx)(n.h3,{id:"install-the-system-upgrade-controller",children:"Install the system-upgrade-controller"}),"\n",(0,t.jsx)(n.p,{children:"The upgrade plan is managed by the system-upgrade-controller. Install it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/system-upgrade-controller.yaml\nkubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/latest/download/crd.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-the-upgrade-plan",children:"Create the upgrade plan"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'#server-plan.yaml\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\nspec:\n  concurrency: 1\n  cordon: true\n  nodeSelector:\n    matchExpressions:\n    - key: node-role.kubernetes.io/control-plane\n      operator: In\n      values:\n      - "true"\n  serviceAccountName: system-upgrade\n  upgrade:\n    image: rancher/k3s-upgrade\n  channel: https://update.k3s.io/v1-release/channels/v1.31\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f server-plan.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/upgrades/automated",children:"automated upgrade docs"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion-",children:"Conclusion \ud83d\ude80"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kubectl summary",src:s(1025).A+"",width:"1089",height:"424"})}),"\n",(0,t.jsx)(n.p,{children:"We now have a high-availability cluster, accessible via a single IP. Upgrades are handled for the next year. This is a great starting point to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add agent nodes to expand our workload capacity"}),"\n",(0,t.jsx)(n.li,{children:"Add another load-balancer for additional redundancy"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1025:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/kubectl-e58868310be82a01e6ad9e0fbc4a0e32.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(6540);const t={},a=r.createContext(t);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}},8547:e=>{e.exports=JSON.parse('{"permalink":"/docs-k3s/ja/blog/2025/01/06/simple-ha","source":"@site/blog/2025-01-06-simple-ha.md","title":"The Basic HA Cluster","description":"Creating the simplest High Availability cluster with LB and upgrading","date":"2025-01-06T00:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[{"title":"K3s maintainer","url":"https://github.com/dereknola","name":"Derek Nola","imageURL":"https://github.com/dereknola.png","key":"dereknola","page":null}],"frontMatter":{"title":"The Basic HA Cluster","description":"Creating the simplest High Availability cluster with LB and upgrading","authors":"dereknola","hide_table_of_contents":true},"unlisted":false,"nextItem":{"title":"Hello Blog","permalink":"/docs-k3s/ja/blog/2024/12/27/hello-blog"}}')}}]);