"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(3117),i=(r(7294),r(3905));const a={title:"Private Registry Configuration",weight:55},o=void 0,l={unversionedId:"installation/private-registry",id:"installation/private-registry",title:"Private Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull private images on the node.",source:"@site/docs/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/docs-k3s/installation/private-registry",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:1693248667,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{title:"Private Registry Configuration",weight:55},sidebar:"mySidebar",previous:{title:"Network Options",permalink:"/docs-k3s/installation/network-options"},next:{title:"Air-Gap Install",permalink:"/docs-k3s/installation/airgap"}},s={},p=[{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Redirects",id:"redirects",level:4},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3},{value:"Adding Images to the Private Registry",id:"adding-images-to-the-private-registry",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:p};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Containerd can be configured to connect to private registries and use them to pull private images on the node."),(0,i.kt)("p",null,"Upon startup, K3s will check to see if a ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file exists at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/")," and instruct containerd to use any registries defined in the file. If you wish to use a private registry, then you will need to create this file as root on each node that will be using the registry."),(0,i.kt)("p",null,"Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them, please ensure you also create the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file on each server as well."),(0,i.kt)("p",null,"Configuration in containerd can be used to connect to a private registry with a TLS connection and with registries that enable authentication as well. The following section will explain the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file and give different examples of using private registry configuration in K3s."),(0,i.kt)("h2",{id:"registries-configuration-file"},"Registries Configuration File"),(0,i.kt)("p",null,"The file consists of two main sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mirrors"),(0,i.kt)("li",{parentName:"ul"},"configs")),(0,i.kt)("h3",{id:"mirrors"},"Mirrors"),(0,i.kt)("p",null,"Mirrors is a directive that defines the names and endpoints of the private registries, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mirrors:\n  mycustomreg.com:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n')),(0,i.kt)("p",null,"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs one by one, and use the first working one."),(0,i.kt)("h4",{id:"redirects"},"Redirects"),(0,i.kt)("p",null,"If a public registry is used as a mirror, such as when configuring a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/recipes/mirror/"},"pull through cache"),", images pulls are transparently redirected."),(0,i.kt)("p",null,"For example, if you have a mirror configured for ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n')),(0,i.kt)("p",null,"Then pulling ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," will transparently pull the image from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://mycustomreg.com:5000/rancher/coredns-coredns:1.6.3"),"."),(0,i.kt)("h4",{id:"rewrites"},"Rewrites"),(0,i.kt)("p",null,"Each mirror can have a set of rewrites. Rewrites can change the tag of an image based on a regular expression. This is useful if the organization/project structure in the mirror registry is different to the upstream one."),(0,i.kt)("p",null,"For example, the following configuration would transparently pull the image ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.example.com:5000/mirrorproject/rancher-images/coredns-coredns:1.6.3"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n')),(0,i.kt)("p",null,"The image will still be stored under the original name so that a ",(0,i.kt)("inlineCode",{parentName:"p"},"crictl image ls")," will show ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io/rancher/coredns-coredns:1.6.3")," as available on the node, even though the image was pulled from the mirrored registry with a different name."),(0,i.kt)("h3",{id:"configs"},"Configs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"configs")," section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"tls"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," part consists of:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Directive"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cert_file")),(0,i.kt)("td",{parentName:"tr",align:null},"The client certificate path that will be used to authenticate with the registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key_file")),(0,i.kt)("td",{parentName:"tr",align:null},"The client key path that will be used to authenticate with the registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ca_file")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the CA certificate path to be used to verify the registry's server cert file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"insecure_skip_verify")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean that defines if TLS verification should be skipped for the registry")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," part consists of either username/password or authentication token:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Directive"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"user name of the private registry basic auth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"user password of the private registry basic auth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auth")),(0,i.kt)("td",{parentName:"tr",align:null},"authentication token of the private registry basic auth")))),(0,i.kt)("p",null,"Below are basic examples of using private registries in different modes:"),(0,i.kt)("h3",{id:"with-tls"},"With TLS"),(0,i.kt)("p",null,"Below are examples showing how you may configure ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," on each node when using TLS."),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(u,{value:"With Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'))),(0,i.kt)(u,{value:"Without Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n')))),(0,i.kt)("h3",{id:"without-tls"},"Without TLS"),(0,i.kt)("p",null,"Below are examples showing how you may configure ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml")," on each node when ",(0,i.kt)("em",{parentName:"p"},"not")," using TLS."),(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(u,{value:"With Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'))),(0,i.kt)(u,{value:"Without Authentication",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\n')))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In case of no TLS communication, you need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," for the endpoints, otherwise it will default to https.")),(0,i.kt)("p",null,"In order for the registry changes to take effect, you need to restart K3s on each node."),(0,i.kt)("h2",{id:"adding-images-to-the-private-registry"},"Adding Images to the Private Registry"),(0,i.kt)("p",null,"First, obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"k3s-images.txt")," file from GitHub for the release you are working with.\nPull the K3s images listed on the k3s-images.txt file from docker.io"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker pull docker.io/rancher/coredns-coredns:1.6.3")),(0,i.kt)("p",null,"Then, retag the images to the private registry."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker tag rancher/coredns-coredns:1.6.3 mycustomreg.com:5000/coredns-coredns")),(0,i.kt)("p",null,"Last, push the images to the private registry."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker push mycustomreg.com:5000/coredns-coredns")))}h.isMDXComponent=!0}}]);