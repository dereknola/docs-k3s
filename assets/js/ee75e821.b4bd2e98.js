"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[893],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={title:"Networking",weight:35},s=void 0,c={unversionedId:"networking/networking",id:"networking/networking",title:"Networking",description:"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s.",source:"@site/docs/networking/networking.md",sourceDirName:"networking",slug:"/networking/",permalink:"/networking/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking.md",tags:[],version:"current",lastUpdatedAt:1662588184,formattedLastUpdatedAt:"Sep 7, 2022",frontMatter:{title:"Networking",weight:35},sidebar:"mySidebar",previous:{title:"Volumes and Storage",permalink:"/storage/"},next:{title:"Helm",permalink:"/helm/"}},p={},d=[{value:"How the Service LB Works",id:"how-the-service-lb-works",level:3},{value:"Usage",id:"usage",level:3},{value:"Excluding the Service LB from Nodes",id:"excluding-the-service-lb-from-nodes",level:3},{value:"Disabling the Service LB",id:"disabling-the-service-lb",level:3}],u={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/installation/network-options"},"Installation Network Options")," page for details on Flannel configuration options and backend selection, or how to set up your own CNI."),(0,o.kt)("p",null,"For information on which ports need to be opened for K3s, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/installation/requirements#networking"}," Requirements.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#coredns"},"CoreDNS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#traefik-ingress-controller"},"Traefik Ingress Controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#service-load-balancer"},"Service Load Balancer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-the-service-lb-works"},"How the Service LB Works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#excluding-the-service-lb-from-nodes"},"Excluding the Service LB from Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#disabling-the-service-lb"},"Disabling the Service LB")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nodes-without-a-hostname"},"Nodes Without a Hostname"))),(0,o.kt)("h1",{id:"coredns"},"CoreDNS"),(0,o.kt)("p",null,"CoreDNS is deployed on start of the agent. To disable, run each server with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable coredns")," option."),(0,o.kt)("p",null,"If you don't install CoreDNS, you will need to install a cluster DNS provider yourself."),(0,o.kt)("h1",{id:"traefik-ingress-controller"},"Traefik Ingress Controller"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It simplifies networking complexity while designing, deploying, and running applications."),(0,o.kt)("p",null,"Traefik is deployed by default when starting the server. For more information see ",(0,o.kt)("a",{parentName:"p",href:"/advanced/#auto-deploying-manifests"},"Auto Deploying Manifests"),". The default config file is found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik.yaml"),"."),(0,o.kt)("p",null,"The Traefik ingress controller will use ports 80 and 443 on the host (i.e. these will not be usable for HostPort or NodePort)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," file should not be edited manually, because k3s would overwrite it again once it is restarted. Instead you can customize Traefik by creating an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," manifest in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests"),". For more details and an example see ",(0,o.kt)("a",{parentName:"p",href:"/helm/#customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"),". For more information on the possible configuration values, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik"},"Traefik Helm Configuration Parameters."),"."),(0,o.kt)("p",null,"To disable it, start each server with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable traefik")," option."),(0,o.kt)("p",null,"If Traefik is not disabled K3s versions 1.20 and earlier will install Traefik v1, while K3s versions 1.21 and later will install Traefik v2 if v1 is not already present."),(0,o.kt)("p",null,"To migrate from an older Traefik v1 instance please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"migration tool"),"."),(0,o.kt)("h1",{id:"service-load-balancer"},"Service Load Balancer"),(0,o.kt)("p",null,"Any service load balancer (LB) can be leveraged in your Kubernetes cluster. K3s provides a load balancer known as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"Klipper Load Balancer")," that uses available host ports."),(0,o.kt)("p",null,"Upstream Kubernetes allows a Service of type LoadBalancer to be created, but doesn't include the implementation of the LB. Some LB services require a cloud provider such as Amazon EC2 or Microsoft Azure. By contrast, the K3s service LB makes it possible to use an LB service without a cloud provider."),(0,o.kt)("h3",{id:"how-the-service-lb-works"},"How the Service LB Works"),(0,o.kt)("p",null,"K3s creates a controller that creates a Pod for the service load balancer, which is a Kubernetes object of kind ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service.")),(0,o.kt)("p",null,"For each service load balancer, a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," is created. The DaemonSet creates a pod with the ",(0,o.kt)("inlineCode",{parentName:"p"},"svc")," prefix on each node."),(0,o.kt)("p",null,"The Service LB controller listens for other Kubernetes Services. After it finds a Service, it creates a proxy Pod for the service using a DaemonSet on all of the nodes. This Pod becomes a proxy to the other Service, so that for example, requests coming to port 8000 on a node could be routed to your workload on port 8888."),(0,o.kt)("p",null,"If the Service LB runs on a node that has an external IP, it uses the external IP."),(0,o.kt)("p",null,"If multiple Services are created, a separate DaemonSet is created for each Service."),(0,o.kt)("p",null,"It is possible to run multiple Services on the same node, as long as they use different ports."),(0,o.kt)("p",null,"If you try to create a Service LB that listens on port 80, the Service LB will try to find a free host in the cluster for port 80. If no host with that port is available, the LB will stay in Pending."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"Service of type LoadBalancer")," in K3s."),(0,o.kt)("h3",{id:"excluding-the-service-lb-from-nodes"},"Excluding the Service LB from Nodes"),(0,o.kt)("p",null,"To exclude nodes from using the Service LB, add the following label to the nodes that should not be excluded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"svccontroller.k3s.cattle.io/enablelb\n")),(0,o.kt)("p",null,"If the label is used, the service load balancer only runs on the labeled nodes."),(0,o.kt)("h3",{id:"disabling-the-service-lb"},"Disabling the Service LB"),(0,o.kt)("p",null,"To disable the embedded LB, run the server with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable servicelb")," option."),(0,o.kt)("p",null,"This is necessary if you wish to run a different LB, such as MetalLB."),(0,o.kt)("h1",{id:"nodes-without-a-hostname"},"Nodes Without a Hostname"),(0,o.kt)("p",null,'Some cloud providers, such as Linode, will create machines with "localhost" as the hostname and others may not have a hostname set at all. This can cause problems with domain name resolution. You can run K3s with the ',(0,o.kt)("inlineCode",{parentName:"p"},"--node-name")," flag or ",(0,o.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," environment variable and this will pass the node name to resolve this issue."))}h.isMDXComponent=!0}}]);