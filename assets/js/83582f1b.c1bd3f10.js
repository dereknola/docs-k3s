"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[966],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(r),p=a,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),s=r(941),o=r(4996),l=["components"],d={title:"Architecture",weight:1},c=void 0,u={unversionedId:"architecture/architecture",id:"architecture/architecture",title:"Architecture",description:"This page describes the architecture of a high-availability K3s server cluster and how it differs from a single-node server cluster.",source:"@site/docs/architecture/architecture.md",sourceDirName:"architecture",slug:"/architecture/",permalink:"/docs/architecture/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/architecture/architecture.md",tags:[],version:"current",lastUpdatedAt:1663781524,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{title:"Architecture",weight:1},sidebar:"mySidebar",previous:{title:"K3s - Lightweight Kubernetes",permalink:"/docs/"},next:{title:"Quick-Start Guide",permalink:"/docs/quick-start/"}},h={},p=[{value:"Single-server Setup with an Embedded DB",id:"single-server-setup-with-an-embedded-db",level:3},{value:"High-Availability K3s Server with an External DB",id:"high-availability-k3s-server-with-an-external-db",level:3},{value:"Fixed Registration Address for Agent Nodes",id:"fixed-registration-address-for-agent-nodes",level:3},{value:"How Agent Node Registration Works",id:"how-agent-node-registration-works",level:3},{value:"Automatically Deployed Manifests",id:"automatically-deployed-manifests",level:3}],m={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes the architecture of a high-availability K3s server cluster and how it differs from a single-node server cluster."),(0,i.kt)("p",null,"It also describes how agent nodes are registered with K3s servers."),(0,i.kt)("p",null,"A server node is defined as a machine (bare-metal or virtual) running the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s server")," command. A worker node is defined as a machine running the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s agent")," command."),(0,i.kt)("p",null,"This page covers the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#single-server-setup-with-an-embedded-db"},"Single-server setup with an embedded database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#high-availability-k3s-server-with-an-external-db"},"High-availability K3s server with an external database"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fixed-registration-address-for-agent-nodes"},"Fixed registration address for agent nodes")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-agent-node-registration-works"},"How agent node registration works")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#automatically-deployed-manifests"},"Automatically deployed manifests"))),(0,i.kt)("h3",{id:"single-server-setup-with-an-embedded-db"},"Single-server Setup with an Embedded DB"),(0,i.kt)("p",null,"The following diagram shows an example of a cluster that has a single-node K3s server with an embedded SQLite database."),(0,i.kt)("p",null,"In this configuration, each agent node is registered to the same server node. A K3s user can manipulate Kubernetes resources by calling the K3s API on the server node."),(0,i.kt)(s.Z,{alt:"K3s Architecture with a Single Server",sources:{light:(0,o.Z)("/img/k3s-architecture-single-server.svg"),dark:(0,o.Z)("/img/k3s-architecture-single-server-dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"high-availability-k3s-server-with-an-external-db"},"High-Availability K3s Server with an External DB"),(0,i.kt)("p",null,"Single server clusters can meet a variety of use cases, but for environments where uptime of the Kubernetes control plane is critical, you can run K3s in an HA configuration. An HA K3s cluster is comprised of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Two or more ",(0,i.kt)("strong",{parentName:"li"},"server nodes")," that will serve the Kubernetes API and run other control plane services"),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("strong",{parentName:"li"},"external datastore")," (as opposed to the embedded SQLite datastore used in single-server setups)")),(0,i.kt)(s.Z,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,o.Z)("/img/k3s-architecture-ha-server.svg"),dark:(0,o.Z)("/img/k3s-architecture-ha-server-dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"fixed-registration-address-for-agent-nodes"},"Fixed Registration Address for Agent Nodes"),(0,i.kt)("p",null,"In the high-availability server configuration, each node must also register with the Kubernetes API by using a fixed registration address, as shown in the diagram below."),(0,i.kt)("p",null,"After registration, the agent nodes establish a connection directly to one of the server nodes."),(0,i.kt)(s.Z,{alt:"Agent Registration HA",sources:{light:(0,o.Z)("/img/k3s-production-setup.svg"),dark:(0,o.Z)("/img/k3s-production-setup-dark.svg")},mdxType:"ThemedImage"}),(0,i.kt)("h3",{id:"how-agent-node-registration-works"},"How Agent Node Registration Works"),(0,i.kt)("p",null,"Agent nodes are registered with a websocket connection initiated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s agent")," process, and the connection is maintained by a client-side load balancer running as part of the agent process."),(0,i.kt)("p",null,"Agents will register with the server using the node cluster secret along with a randomly generated password for the node, stored at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node/password"),". The server will store the passwords for individual nodes as Kubernetes secrets, and any subsequent attempts must use the same password. Node password secrets are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace with names using the template ",(0,i.kt)("inlineCode",{parentName:"p"},"<host>.node-password.k3s"),"."),(0,i.kt)("p",null,"Note: Prior to K3s v1.20.2 servers stored passwords on disk at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/cred/node-passwd"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node")," directory of an agent is removed, the password file should be recreated for the agent, or the entry removed from the server."),(0,i.kt)("p",null,"A unique node ID can be appended to the hostname by launching K3s servers or agents using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-node-id")," flag."),(0,i.kt)("h3",{id:"automatically-deployed-manifests"},"Automatically Deployed Manifests"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/tree/master/manifests"},"manifests")," located at the directory path ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," are bundled into the K3s binary at build time.  These will be installed at runtime by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/helm-controller#helm-controller"},"rancher/helm-controller.")))}g.isMDXComponent=!0}}]);