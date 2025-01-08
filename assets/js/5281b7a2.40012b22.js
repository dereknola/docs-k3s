"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2443],{5874:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"architecture","title":"Architecture","description":"Servers and Agents","source":"@site/docs/architecture.md","sourceDirName":".","slug":"/architecture","permalink":"/docs-k3s/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/architecture.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"Architecture"},"sidebar":"mySidebar","previous":{"title":"token","permalink":"/docs-k3s/cli/token"},"next":{"title":"Cluster Access","permalink":"/docs-k3s/cluster-access"}}');var r=t(4848),i=t(8453),a=t(9324),o=t(9030);const d={title:"Architecture"},c=void 0,l={},h=[{value:"Servers and Agents",id:"servers-and-agents",level:3},{value:"Single-server Setup with an Embedded DB",id:"single-server-setup-with-an-embedded-db",level:3},{value:"High-Availability K3s",id:"high-availability-k3s",level:3},{value:"Fixed Registration Address for Agent Nodes",id:"fixed-registration-address-for-agent-nodes",level:3},{value:"How Agent Node Registration Works",id:"how-agent-node-registration-works",level:3}];function u(e){const s={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{TabItem:n,Tabs:d}=s;return n||p("TabItem",!0),d||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"servers-and-agents",children:"Servers and Agents"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A server node is defined as a host running the ",(0,r.jsx)(s.code,{children:"k3s server"})," command, with control-plane and datastore components managed by K3s."]}),"\n",(0,r.jsxs)(s.li,{children:["An agent node is defined as a host running the ",(0,r.jsx)(s.code,{children:"k3s agent"})," command, without any datastore or control-plane components."]}),"\n",(0,r.jsxs)(s.li,{children:["Both servers and agents run the kubelet, container runtime, and CNI. See the ",(0,r.jsx)(s.a,{href:"/docs-k3s/advanced#running-agentless-servers-experimental",children:"Advanced Options"})," documentation for more information on running agentless servers."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(9258).A+"",width:"1562",height:"898"})}),"\n",(0,r.jsx)(s.h3,{id:"single-server-setup-with-an-embedded-db",children:"Single-server Setup with an Embedded DB"}),"\n",(0,r.jsx)(s.p,{children:"The following diagram shows an example of a cluster that has a single-node K3s server with an embedded SQLite database."}),"\n",(0,r.jsx)(s.p,{children:"In this configuration, each agent node is registered to the same server node. A K3s user can manipulate Kubernetes resources by calling the K3s API on the server node."}),"\n",(0,r.jsx)(a.A,{alt:"K3s Architecture with a Single Server",sources:{light:(0,o.Ay)("/img/k3s-architecture-single-server.svg"),dark:(0,o.Ay)("/img/k3s-architecture-single-server-dark.svg")}}),"\n",(0,r.jsx)(s.h3,{id:"high-availability-k3s",children:"High-Availability K3s"}),"\n",(0,r.jsx)(s.p,{children:"Single server clusters can meet a variety of use cases, but for environments where uptime of the Kubernetes control plane is critical, you can run K3s in an HA configuration. An HA K3s cluster comprises:"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(n,{value:"Embedded DB",children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Three or more ",(0,r.jsx)(s.strong,{children:"server nodes"})," that will serve the Kubernetes API and run other control plane services"]}),"\n",(0,r.jsxs)(s.li,{children:["An ",(0,r.jsx)(s.strong,{children:"embedded etcd datastore"})," (as opposed to the embedded SQLite datastore used in single-server setups)"]}),"\n"]}),(0,r.jsx)(a.A,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,o.Ay)("/img/k3s-architecture-ha-embedded.svg"),dark:(0,o.Ay)("/img/k3s-architecture-ha-embedded-dark.svg")}})]}),(0,r.jsxs)(n,{value:"External DB",children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Two or more ",(0,r.jsx)(s.strong,{children:"server nodes"})," that will serve the Kubernetes API and run other control plane services"]}),"\n",(0,r.jsxs)(s.li,{children:["An ",(0,r.jsx)(s.strong,{children:"external datastore"})," (such as MySQL, PostgreSQL, or etcd)"]}),"\n"]}),(0,r.jsx)(a.A,{alt:"K3s Architecture with High-availability Servers and an External DB",sources:{light:(0,o.Ay)("/img/k3s-architecture-ha-external.svg"),dark:(0,o.Ay)("/img/k3s-architecture-ha-external-dark.svg")}})]})]}),"\n",(0,r.jsx)(s.h3,{id:"fixed-registration-address-for-agent-nodes",children:"Fixed Registration Address for Agent Nodes"}),"\n",(0,r.jsx)(s.p,{children:"In the high-availability server configuration, each node can also register with the Kubernetes API by using a fixed registration address, as shown in the diagram below."}),"\n",(0,r.jsx)(s.p,{children:"After registration, the agent nodes establish a connection directly to one of the server nodes."}),"\n",(0,r.jsx)(a.A,{alt:"Agent Registration HA",sources:{light:(0,o.Ay)("/img/k3s-production-setup.svg"),dark:(0,o.Ay)("/img/k3s-production-setup-dark.svg")}}),"\n",(0,r.jsx)(s.h3,{id:"how-agent-node-registration-works",children:"How Agent Node Registration Works"}),"\n",(0,r.jsxs)(s.p,{children:["Agent nodes are registered with a websocket connection initiated by the ",(0,r.jsx)(s.code,{children:"k3s agent"})," process, and the connection is maintained by a client-side load balancer running as part of the agent process. Initially, the agent connects to the supervisor (and kube-apiserver) via the local load-balancer on port 6443. The load-balancer maintains a list of available endpoints to connect to. The default (and initially only) endpoint is seeded by the hostname from the ",(0,r.jsx)(s.code,{children:"--server"})," address. Once it connects to the cluster, the agent retrieves a list of kube-apiserver addresses from the Kubernetes service endpoint list in the default namespace. Those endpoints are added to the load balancer, which then maintains stable connections to all servers in the cluster, providing a connection to the kube-apiserver that tolerates outages of individual servers."]}),"\n",(0,r.jsxs)(s.p,{children:["Agents will register with the server using the node cluster secret along with a randomly generated password for the node, stored at ",(0,r.jsx)(s.code,{children:"/etc/rancher/node/password"}),". The server will store the passwords for individual nodes as Kubernetes secrets, and any subsequent attempts must use the same password. Node password secrets are stored in the ",(0,r.jsx)(s.code,{children:"kube-system"})," namespace with names using the template ",(0,r.jsx)(s.code,{children:"<host>.node-password.k3s"}),". This is done to protect the integrity of node IDs."]}),"\n",(0,r.jsxs)(s.p,{children:["If the ",(0,r.jsx)(s.code,{children:"/etc/rancher/node"})," directory of an agent is removed, or you wish to rejoin a node using an existing name, the node should be deleted from the cluster. This will clean up both the old node entry, and the node password secret, and allow the node to (re)join the cluster."]}),"\n",(0,r.jsxs)(s.p,{children:["If you frequently reuse hostnames, but are unable to remove the node password secrets, a unique node ID can be automatically appended to the hostname by launching K3s servers or agents using the ",(0,r.jsx)(s.code,{children:"--with-node-id"})," flag. When enabled, the node ID is also stored in ",(0,r.jsx)(s.code,{children:"/etc/rancher/node/"}),"."]})]})}function g(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9258:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/how-it-works-k3s-revised-9c025ef482404bca2e53a89a0ba7a3c5.svg"},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(6540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);