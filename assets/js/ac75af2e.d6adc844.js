"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[199],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={title:"Requirements",weight:1},s=void 0,d={unversionedId:"installation/requirements",id:"installation/requirements",title:"Requirements",description:"K3s is very lightweight, but has some minimum requirements as outlined below.",source:"@site/docs/installation/requirements.md",sourceDirName:"installation",slug:"/installation/requirements",permalink:"/docs/installation/requirements",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/requirements.md",tags:[],version:"current",lastUpdatedAt:1663781524,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{title:"Requirements",weight:1},sidebar:"mySidebar",previous:{title:"Installation",permalink:"/docs/installation/"},next:{title:"Configuration Options",permalink:"/docs/installation/configuration"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Operating Systems",id:"operating-systems",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Disks",id:"disks",level:4},{value:"Networking",id:"networking",level:2},{value:"Large Clusters",id:"large-clusters",level:2},{value:"CPU and Memory",id:"cpu-and-memory",level:3},{value:"Disks",id:"disks-1",level:3},{value:"Network",id:"network",level:3},{value:"Database",id:"database",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"K3s is very lightweight, but has some minimum requirements as outlined below."),(0,o.kt)("p",null,"Whether you're configuring a K3s cluster to run in a Docker or Kubernetes setup, each node running K3s should meet the following minimum requirements. You may need more resources to fit your needs."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Two nodes cannot have the same hostname."),(0,o.kt)("p",null,"If all your nodes have the same hostname, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--with-node-id")," option to append a random suffix for each node, or otherwise devise a unique name to pass with ",(0,o.kt)("inlineCode",{parentName:"p"},"--node-name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$K3S_NODE_NAME")," for each node you add to the cluster."),(0,o.kt)("h2",{id:"operating-systems"},"Operating Systems"),(0,o.kt)("p",null,"K3s is expected to work on most modern Linux systems."),(0,o.kt)("p",null,"Some OSs have specific requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are using ",(0,o.kt)("strong",{parentName:"li"},"(Red Hat/CentOS) Enterprise Linux"),", follow ",(0,o.kt)("a",{parentName:"li",href:"/docs/advanced/#additional-preparation-for-red-hatcentos-enterprise-linux"},"these steps")," for additional setup."),(0,o.kt)("li",{parentName:"ul"},"If you are using ",(0,o.kt)("strong",{parentName:"li"},"Raspberry Pi OS"),", follow ",(0,o.kt)("a",{parentName:"li",href:"/docs/advanced/#additional-preparation-for-raspberry-pi-os"},"these steps")," to switch to legacy iptables.")),(0,o.kt)("p",null,"For more information on which OSs were tested with Rancher managed K3s clusters, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Rancher support and maintenance terms.")),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,"Hardware requirements scale based on the size of your deployments. Minimum recommendations are outlined here."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RAM: 512MB Minimum (we recommend at least 1GB)"),(0,o.kt)("li",{parentName:"ul"},"CPU: 1 Minimum")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/resource-profiling"},"K3s Resource Profiling")," captures the results of tests to determine minimum resource requirements for the K3s agent, the K3s server with a workload, and the K3s server with one agent. It also contains analysis about what has the biggest impact on K3s server and agent utilization, and how the cluster datastore can be protected from interference from agents and workloads."),(0,o.kt)("h4",{id:"disks"},"Disks"),(0,o.kt)("p",null,"K3s performance depends on the performance of the database. To ensure optimal speed, we recommend using an SSD when possible. Disk performance will vary on ARM devices utilizing an SD card or eMMC."),(0,o.kt)("h2",{id:"networking"},"Networking"),(0,o.kt)("p",null,"The K3s server needs port 6443 to be accessible by all nodes."),(0,o.kt)("p",null,"The nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used or over UDP ports 51820 and 51821 (when using IPv6) when Flannel Wireguard backend is used. The node should not listen on any other port. K3s uses reverse tunneling such that the nodes make outbound connections to the server and all kubelet traffic runs through that tunnel. However, if you do not use Flannel and provide your own custom CNI, then the ports needed by Flannel are not needed by K3s."),(0,o.kt)("p",null,"If you wish to utilize the metrics server, you will need to open port 10250 on each node."),(0,o.kt)("p",null,"If you plan on achieving high availability with embedded etcd, server nodes must be accessible to each other on ports 2379 and 2380."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472.\n",(0,o.kt)("strong",{parentName:"p"},"Warning:")," Flannel relies on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"Bridge CNI plugin")," to create a L2 network that switches traffic. Rogue pods with NET_RAW capabilities can abuse that L2 network to launch attacks such as ",(0,o.kt)("a",{parentName:"p",href:"https://static.sched.com/hosted_files/kccncna19/72/ARP%20DNS%20spoof.pdf"},"ARP spoofing"),". Therefore, as documented in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"kubernetes docs"),", please set a restricted profile that disables NET_RAW on non-trustable pods.")),(0,o.kt)("figcaption",null,"Inbound Rules for K3s Server Nodes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Source"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"6443"),(0,o.kt)("td",{parentName:"tr",align:null},"K3s agent nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes API Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UDP"),(0,o.kt)("td",{parentName:"tr",align:null},"8472"),(0,o.kt)("td",{parentName:"tr",align:null},"K3s server and agent nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Required only for Flannel VXLAN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UDP"),(0,o.kt)("td",{parentName:"tr",align:null},"51820"),(0,o.kt)("td",{parentName:"tr",align:null},"K3s server and agent nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Required only for Flannel Wireguard backend")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UDP"),(0,o.kt)("td",{parentName:"tr",align:null},"51821"),(0,o.kt)("td",{parentName:"tr",align:null},"K3s server and agent nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Required only for Flannel Wireguard backend with IPv6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"10250"),(0,o.kt)("td",{parentName:"tr",align:null},"K3s server and agent nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubelet metrics")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TCP"),(0,o.kt)("td",{parentName:"tr",align:null},"2379-2380"),(0,o.kt)("td",{parentName:"tr",align:null},"K3s server nodes"),(0,o.kt)("td",{parentName:"tr",align:null},"Required only for HA with embedded etcd")))),(0,o.kt)("p",null,"Typically all outbound traffic is allowed."),(0,o.kt)("h2",{id:"large-clusters"},"Large Clusters"),(0,o.kt)("p",null,"Hardware requirements are based on the size of your K3s cluster. For production and large clusters, we recommend using a high-availability setup with an external database. The following options are recommended for the external database in production:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MySQL"),(0,o.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,o.kt)("li",{parentName:"ul"},"etcd")),(0,o.kt)("h3",{id:"cpu-and-memory"},"CPU and Memory"),(0,o.kt)("p",null,"The following are the minimum CPU and memory requirements for nodes in a high-availability K3s server:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Deployment Size"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Nodes"),(0,o.kt)("th",{parentName:"tr",align:"center"},"VCPUS"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RAM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Small"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 10"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 100"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Large"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 250"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"X-Large"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 500"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16"),(0,o.kt)("td",{parentName:"tr",align:"center"},"32 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"XX-Large"),(0,o.kt)("td",{parentName:"tr",align:"center"},"500+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"32"),(0,o.kt)("td",{parentName:"tr",align:"center"},"64 GB")))),(0,o.kt)("h3",{id:"disks-1"},"Disks"),(0,o.kt)("p",null,"The cluster performance depends on database performance. To ensure optimal speed, we recommend always using SSD disks to back your K3s cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS."),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,"You should consider increasing the subnet size for the cluster CIDR so that you don't run out of IPs for the pods. You can do that by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," option to K3s server upon starting."),(0,o.kt)("h3",{id:"database"},"Database"),(0,o.kt)("p",null,"K3s supports different databases including MySQL, PostgreSQL, MariaDB, and etcd, the following is a sizing guide for the database resources you need to run large clusters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Deployment Size"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Nodes"),(0,o.kt)("th",{parentName:"tr",align:"center"},"VCPUS"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RAM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Small"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 10"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 100"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Large"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 250"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"X-Large"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Up to 500"),(0,o.kt)("td",{parentName:"tr",align:"center"},"8"),(0,o.kt)("td",{parentName:"tr",align:"center"},"32 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"XX-Large"),(0,o.kt)("td",{parentName:"tr",align:"center"},"500+"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16"),(0,o.kt)("td",{parentName:"tr",align:"center"},"64 GB")))))}c.isMDXComponent=!0}}]);