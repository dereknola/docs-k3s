"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[834],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4741:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"Quick-Start Guide",weight:10},s=void 0,c={unversionedId:"quick-start/quick-start",id:"quick-start/quick-start",title:"Quick-Start Guide",description:"This guide will help you quickly launch a cluster with default options. The installation section covers in greater detail how K3s can be set up.",source:"@site/docs/quick-start/quick-start.md",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/quick-start/quick-start.md",tags:[],version:"current",lastUpdatedAt:1663781524,formattedLastUpdatedAt:"Sep 21, 2022",frontMatter:{title:"Quick-Start Guide",weight:10},sidebar:"mySidebar",previous:{title:"Architecture",permalink:"/docs/architecture/"},next:{title:"Installation",permalink:"/docs/installation/"}},u={},p=[{value:"Install Script",id:"install-script",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide will help you quickly launch a cluster with default options. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/"},"installation section")," covers in greater detail how K3s can be set up."),(0,a.kt)("p",null,"For information on how K3s components work together, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/architecture/#high-availability-with-an-external-db"},"architecture section.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"New to Kubernetes? The official Kubernetes docs already have some great tutorials outlining the basics ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"here"),".")),(0,a.kt)("h2",{id:"install-script"},"Install Script"),(0,a.kt)("p",null,"K3s provides an installation script that is a convenient way to install it as a service on systemd or openrc based systems. This script is available at ",(0,a.kt)("a",{parentName:"p",href:"https://get.k3s.io."},"https://get.k3s.io.")," To install K3s using this method, just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh -\n")),(0,a.kt)("p",null,"After running this installation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The K3s service will be configured to automatically restart after node reboots or if the process crashes or is killed"),(0,a.kt)("li",{parentName:"ul"},"Additional utilities will be installed, including ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"crictl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ctr"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s-killall.sh"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s-uninstall.sh")),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," file will be written to ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," and the kubectl installed by K3s will automatically use it")),(0,a.kt)("p",null,"To install on worker nodes and add them to the cluster, run the installation script with the ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_URL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," environment variables. Here is an example showing how to join a worker node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n")),(0,a.kt)("p",null,"Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_URL")," parameter causes K3s to run in worker mode. The K3s agent will register with the K3s server listening at the supplied URL. The value to use for ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," is stored at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/node-token")," on your server node."),(0,a.kt)("p",null,"Note: Each machine must have a unique hostname. If your machines do not have unique hostnames, pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," environment variable and provide a value with a valid and unique hostname for each node."))}h.isMDXComponent=!0}}]);