"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(3117),r=(n(7294),n(3905));const a={title:"Networking",weight:35},i=void 0,l={unversionedId:"networking/networking",id:"networking/networking",title:"Networking",description:"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s.",source:"@site/docs/networking/networking.md",sourceDirName:"networking",slug:"/networking/",permalink:"/docs-k3s/networking/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking.md",tags:[],version:"current",lastUpdatedAt:1693248667,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{title:"Networking",weight:35},sidebar:"mySidebar",previous:{title:"Volumes and Storage",permalink:"/docs-k3s/storage/"},next:{title:"Helm",permalink:"/docs-k3s/helm/"}},s={},d=[{value:"CoreDNS",id:"coredns",level:2},{value:"Traefik Ingress Controller",id:"traefik-ingress-controller",level:2},{value:"Network Policy Controller",id:"network-policy-controller",level:2},{value:"Service Load Balancer",id:"service-load-balancer",level:2},{value:"How ServiceLB Works",id:"how-servicelb-works",level:3},{value:"Usage",id:"usage",level:3},{value:"Controlling ServiceLB Node Selection",id:"controlling-servicelb-node-selection",level:3},{value:"Creating ServiceLB Node Pools",id:"creating-servicelb-node-pools",level:3},{value:"Disabling ServiceLB",id:"disabling-servicelb",level:3},{value:"Deploying an External Cloud Controller Manager",id:"deploying-an-external-cloud-controller-manager",level:2},{value:"Nodes Without a Hostname",id:"nodes-without-a-hostname",level:2},{value:"Multicluster CIDR (Experimental)",id:"multicluster-cidr-experimental",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/installation/network-options"},"Installation Network Options")," page for details on Flannel configuration options and backend selection, or how to set up your own CNI."),(0,r.kt)("p",null,"For information on which ports need to be opened for K3s, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/installation/requirements#networking"},"Networking Requirements"),"."),(0,r.kt)("h2",{id:"coredns"},"CoreDNS"),(0,r.kt)("p",null,"CoreDNS is deployed automatically on server startup. To disable it, configure all servers in the cluster with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable=coredns")," option."),(0,r.kt)("p",null,"If you don't install CoreDNS, you will need to install a cluster DNS provider yourself."),(0,r.kt)("h2",{id:"traefik-ingress-controller"},"Traefik Ingress Controller"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It simplifies networking complexity while designing, deploying, and running applications."),(0,r.kt)("p",null,"The Traefik ingress controller deploys a LoadBalancer Service that uses ports 80 and 443. By default, ServiceLB will expose these ports on all cluster members, meaning these ports will not be usable for other HostPort or NodePort pods."),(0,r.kt)("p",null,"Traefik is deployed by default when starting the server. For more information see ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/installation/packaged-components"},"Managing Packaged Components"),". The default config file is found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik.yaml"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," file should not be edited manually, as K3s will replace the file with defaults at startup. Instead, you should customize Traefik by creating an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," manifest in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests"),". For more details and an example see ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/helm/#customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"),". For more information on the possible configuration values, refer to the official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik"},"Traefik Helm Configuration Parameters."),"."),(0,r.kt)("p",null,"To remove Traefik from your cluster, start all servers with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable=traefik")," flag."),(0,r.kt)("p",null,"K3s versions 1.20 and earlier include Traefik v1. K3s versions 1.21 and later install Traefik v2, unless an existing installation of Traefik v1 is found, in which case Traefik is not upgraded to v2. For more information on the specific version of Traefik included with K3s, consult the Release Notes for your version."),(0,r.kt)("p",null,"To migrate from an older Traefik v1 instance please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik documentation")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"migration tool"),"."),(0,r.kt)("h2",{id:"network-policy-controller"},"Network Policy Controller"),(0,r.kt)("p",null,"K3s includes an embedded network policy controller. The underlying implementation is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudnativelabs/kube-router"},"kube-router's")," netpol controller library (no other kube-router functionality is present) and can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/tree/master/pkg/agent/netpol"},"here"),". "),(0,r.kt)("p",null,"To disable it, start each server with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," flag."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Network policy iptables rules are not removed if the K3s configuration is changed to disable the network policy controller. To clean up the configured kube-router network policy rules after disabling the network policy controller, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s-killall.sh")," script, or clean them using ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables-save")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables-restore"),". These steps must be ryn manually on all nodes in the cluster."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"iptables-save | grep -v KUBE-ROUTER | iptables-restore\nip6tables-save | grep -v KUBE-ROUTER | ip6tables-restore\n"))),(0,r.kt)("h2",{id:"service-load-balancer"},"Service Load Balancer"),(0,r.kt)("p",null,"Any LoadBalancer controller can be deployed to your K3s cluster. By default, K3s provides a load balancer known as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"ServiceLB")," (formerly Klipper LoadBalancer) that uses available host ports."),(0,r.kt)("p",null,"Upstream Kubernetes allows Services of type LoadBalancer to be created, but doesn't include a default load balancer implementation, so these services will remain ",(0,r.kt)("inlineCode",{parentName:"p"},"pending")," until one is installed. Many hosted services require a cloud provider such as Amazon EC2 or Microsoft Azure to offer an external load balancer implementation. By contrast, the K3s ServiceLB makes it possible to use LoadBalancer Services without a cloud provider or any additional configuration."),(0,r.kt)("h3",{id:"how-servicelb-works"},"How ServiceLB Works"),(0,r.kt)("p",null,"The ServiceLB controller watches Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Services")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.type")," field set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"."),(0,r.kt)("p",null,"For each LoadBalancer Service, a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," is created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. This DaemonSet in turn creates Pods with a ",(0,r.kt)("inlineCode",{parentName:"p"},"svc-")," prefix, on each node. These Pods use iptables to forward traffic from the Pod's NodePort, to the Service's ClusterIP address and port."),(0,r.kt)("p",null,"If the ServiceLB Pod runs on a node that has an external IP configured, the node's external IP is populated into the Service's ",(0,r.kt)("inlineCode",{parentName:"p"},"status.loadBalancer.ingress")," address list. Otherwise, the node's internal IP is used."),(0,r.kt)("p",null,"If multiple LoadBalancer Services are created, a separate DaemonSet is created for each Service."),(0,r.kt)("p",null,"It is possible to expose multiple Services on the same node, as long as they use different ports."),(0,r.kt)("p",null,"If you try to create a LoadBalancer Service that listens on port 80, the ServiceLB will try to find a free host in the cluster for port 80. If no host with that port is available, the LB will remain Pending."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"Service of type LoadBalancer")," in K3s."),(0,r.kt)("h3",{id:"controlling-servicelb-node-selection"},"Controlling ServiceLB Node Selection"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"svccontroller.k3s.cattle.io/enablelb=true")," label to one or more nodes switches the ServiceLB controller into allow-list mode, where only nodes with the label are eligible to host LoadBalancer pods. Nodes that remain unlabeled will be excluded from use by ServiceLB."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, nodes are not labeled. As long as all nodes remain unlabeled, all nodes with ports available will be used by ServiceLB.")),(0,r.kt)("h3",{id:"creating-servicelb-node-pools"},"Creating ServiceLB Node Pools"),(0,r.kt)("p",null,"To select a particular subset of nodes to host pods for a LoadBalancer, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"enablelb")," label to the desired nodes, and set matching ",(0,r.kt)("inlineCode",{parentName:"p"},"lbpool")," label values on the Nodes and Services. For example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Label Node A and Node B with ",(0,r.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/enablelb=true")),(0,r.kt)("li",{parentName:"ol"},"Label Node C and Node D with ",(0,r.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/enablelb=true")),(0,r.kt)("li",{parentName:"ol"},"Create one LoadBalancer Service on port 443 with label ",(0,r.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool1"),". The DaemonSet for this service only deploy Pods to Node A and Node B."),(0,r.kt)("li",{parentName:"ol"},"Create another LoadBalancer Service on port 443 with label ",(0,r.kt)("inlineCode",{parentName:"li"},"svccontroller.k3s.cattle.io/lbpool=pool2"),". The DaemonSet will only deploy Pods to Node C and Node D.")),(0,r.kt)("h3",{id:"disabling-servicelb"},"Disabling ServiceLB"),(0,r.kt)("p",null,"To disable ServiceLB, configure all servers in the cluster with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable=servicelb")," flag."),(0,r.kt)("p",null,"This is necessary if you wish to run a different LB, such as MetalLB."),(0,r.kt)("h2",{id:"deploying-an-external-cloud-controller-manager"},"Deploying an External Cloud Controller Manager"),(0,r.kt)("p",null,'In order to reduce binary size, K3s removes all "in-tree" (built-in) cloud providers. Instead, K3s provides an embedded Cloud Controller Manager (CCM) stub that does the following:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sets node InternalIP and ExternalIP address fields based on the ",(0,r.kt)("inlineCode",{parentName:"li"},"--node-ip")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"--node-external-ip")," flags."),(0,r.kt)("li",{parentName:"ul"},"Hosts the ServiceLB LoadBalancer controller."),(0,r.kt)("li",{parentName:"ul"},"Clears the ",(0,r.kt)("inlineCode",{parentName:"li"},"node.cloudprovider.kubernetes.io/uninitialized")," taint that is present when the cloud-provider is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"external")," ")),(0,r.kt)("p",null,"Before deploying an external CCM, you must start all K3s servers with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-cloud-controller")," flag to disable to embedded CCM. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you disable the built-in CCM and do not deploy and properly configure an external substitute, nodes will remain tainted and unschedulable.")),(0,r.kt)("h2",{id:"nodes-without-a-hostname"},"Nodes Without a Hostname"),(0,r.kt)("p",null,'Some cloud providers, such as Linode, will create machines with "localhost" as the hostname and others may not have a hostname set at all. This can cause problems with domain name resolution. You can run K3s with the ',(0,r.kt)("inlineCode",{parentName:"p"},"--node-name")," flag or ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," environment variable and this will pass the node name to resolve this issue."),(0,r.kt)("h2",{id:"multicluster-cidr-experimental"},"Multicluster CIDR (Experimental)"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Experimental as of v1.26.3+k3s1")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The network policy controller could not work properly when this flag is enabled.")),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.26")," Kubernetes introduced Multicluster CIDR as an alpha feature. (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/2593-multiple-cluster-cidrs"},"https://github.com/kubernetes/enhancements/tree/master/keps/sig-network/2593-multiple-cluster-cidrs"),")"),(0,r.kt)("p",null,"This feature can be enabled on K3s server with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--multi-cluster-cidr")," flag and it gives the possibility to define multiple cluster CIDR used to allocate the podCIDR for each node with also the possibility to extend it on an already running cluster.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"clustercidr")," resources will be visible through the API and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," (the CIDR configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," is defined as the default one)."),(0,r.kt)("p",null,"A new ",(0,r.kt)("inlineCode",{parentName:"p"},"clustercidr")," can be defined as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: networking.k8s.io/v1alpha1\nkind: ClusterCIDR\nmetadata:\n  name: new-cidr\nspec:\n  nodeSelector:\n    nodeSelectorTerms:\n      - matchExpressions:\n        - key: kubernetes.io/hostname\n          operator: In\n          values:\n          -  "worker2"\n  perNodeHostBits: 8\n  ipv4: 10.247.0.0/16\n')),(0,r.kt)("p",null,"The nodes that match the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," will use a podCIDR from the new defined resource."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A node that already has a CIDR cannot get a new one. It has to be removed and restarted.")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A dualstack CIDR could be defined with both ",(0,r.kt)("inlineCode",{parentName:"p"},"ipv4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ipv6")," configuration but the ",(0,r.kt)("inlineCode",{parentName:"p"},"perNodeHostBits")," will be the same. When a dualstack configuration is defined with ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-cidr-mask-size-ipv6")," flag on the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-controller")," should be defined to have the same size of IPv4.")))}c.isMDXComponent=!0}}]);