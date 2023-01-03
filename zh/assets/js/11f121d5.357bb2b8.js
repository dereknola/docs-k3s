"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[155],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||k[d]||i;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1083:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return k}});var n=t(3117),a=t(102),i=(t(7294),t(3905)),l=["components"],o={title:"\u7f51\u7edc",weight:35},c=void 0,s={unversionedId:"networking/networking",id:"networking/networking",title:"\u7f51\u7edc",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 CoreDNS\u3001Traefik Ingress controller \u548c Klipper service load balancer \u662f\u5982\u4f55\u5728 K3s \u4e2d\u5de5\u4f5c\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/networking/networking.md",sourceDirName:"networking",slug:"/networking/",permalink:"/docs-k3s/zh/networking/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking.md",tags:[],version:"current",lastUpdatedAt:1672779848,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u7f51\u7edc",weight:35},sidebar:"mySidebar",previous:{title:"\u5377\u548c\u5b58\u50a8",permalink:"/docs-k3s/zh/storage/"},next:{title:"Helm",permalink:"/docs-k3s/zh/helm/"}},p={},k=[{value:"CoreDNS",id:"coredns",level:2},{value:"Traefik Ingress Controller",id:"traefik-ingress-controller",level:2},{value:"Service Load Balancer",id:"service-load-balancer",level:2},{value:"Service LB \u7684\u5de5\u4f5c\u539f\u7406",id:"service-lb-\u7684\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:3},{value:"\u4ece\u8282\u70b9\u4e2d\u6392\u9664 Service LB",id:"\u4ece\u8282\u70b9\u4e2d\u6392\u9664-service-lb",level:3},{value:"\u7981\u7528 Service LB",id:"\u7981\u7528-service-lb",level:3},{value:"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9",id:"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9",level:2}],u={toc:k};function d(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86 CoreDNS\u3001Traefik Ingress controller \u548c Klipper service load balancer \u662f\u5982\u4f55\u5728 K3s \u4e2d\u5de5\u4f5c\u7684\u3002"),(0,i.kt)("p",null,"\u6709\u5173 Flannel \u914d\u7f6e\u9009\u9879\u548c\u540e\u7aef\u9009\u62e9\uff0c\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u81ea\u5df1\u7684 CNI\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs-k3s/zh/installation/network-options"},"\u5b89\u88c5\u7f51\u7edc\u9009\u9879"),"\u9875\u9762\u3002"),(0,i.kt)("p",null,"\u6709\u5173 K3s \u9700\u8981\u5f00\u653e\u54ea\u4e9b\u7aef\u53e3\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs-k3s/zh/installation/requirements#%E7%BD%91%E7%BB%9C"},"\u8981\u6c42"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#coredns"},"CoreDNS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#traefik-ingress-controller"},"Traefik Ingress Controller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service-load-balancer"},"Service Load Balancer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service-lb-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},"Service LB \u5de5\u4f5c\u539f\u7406")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E7%94%A8%E6%B3%95"},"\u7528\u6cd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E4%BB%8E%E8%8A%82%E7%82%B9%E4%B8%AD%E6%8E%92%E9%99%A4-service-lb"},"\u4ece\u8282\u70b9\u4e2d\u6392\u9664 Service LB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8-service-lb"},"\u7981\u7528 Service LB")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E6%B2%A1%E6%9C%89%E4%B8%BB%E6%9C%BA%E5%90%8D%E7%9A%84%E8%8A%82%E7%82%B9"},"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9"))),(0,i.kt)("h2",{id:"coredns"},"CoreDNS"),(0,i.kt)("p",null,"CoreDNS \u5728 agent \u542f\u52a8\u65f6\u90e8\u7f72\u3002\u8981\u7981\u7528\u5b83\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable coredns")," \u9009\u9879\u6765\u8fd0\u884c\u6bcf\u4e2a server\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u5b89\u88c5 CoreDNS\uff0c\u5219\u9700\u8981\u81ea\u5df1\u5b89\u88c5\u96c6\u7fa4 DNS \u63d0\u4f9b\u7a0b\u5e8f\u3002"),(0,i.kt)("h2",{id:"traefik-ingress-controller"},"Traefik Ingress Controller"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," \u662f\u4e00\u79cd\u73b0\u4ee3\u7684 HTTP \u53cd\u5411\u4ee3\u7406\u548c\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u53ef\u4ee5\u8f7b\u677e\u90e8\u7f72\u5fae\u670d\u52a1\u3002\u5b83\u5728\u8bbe\u8ba1\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65b9\u9762\u7b80\u5316\u4e86\u7f51\u7edc\u590d\u6742\u6027\u3002"),(0,i.kt)("p",null,"Traefik \u5728\u542f\u52a8\u670d\u52a1\u5668\u65f6\u9ed8\u8ba4\u90e8\u7f72\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs-k3s/zh/advanced/#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E6%B8%85%E5%8D%95"},"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355"),"\u3002\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik.yaml"),"\u3002"),(0,i.kt)("p",null,"Traefik Ingress Controller \u5c06\u4f7f\u7528\u4e3b\u673a\u4e0a\u7684\u7aef\u53e3 80 \u548c 443\uff08\u5373\u8fd9\u4e9b\u7aef\u53e3\u4e0d\u53ef\u7528\u4e8e HostPort \u6216 NodePort\uff09\u3002"),(0,i.kt)("p",null,"\u4e0d\u8981\u624b\u52a8\u7f16\u8f91 ",(0,i.kt)("inlineCode",{parentName:"p"},"traefik.yaml")," \u6587\u4ef6\uff0c\u56e0\u4e3a K3s \u91cd\u65b0\u542f\u52a8\u540e\u4f1a\u518d\u6b21\u8986\u76d6\u5b83\u3002\u76f8\u53cd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," \u4e2d\u521b\u5efa\u5176\u4ed6 ",(0,i.kt)("inlineCode",{parentName:"p"},"HelmChartConfig")," \u6e05\u5355\u6765\u81ea\u5b9a\u4e49 Traefik\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs-k3s/zh/helm/#%E4%BD%BF%E7%94%A8-helmchartconfig-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%93%E5%8C%85%E7%BB%84%E4%BB%B6"},"\u4f7f\u7528 HelmChartConfig \u81ea\u5b9a\u4e49\u6253\u5305\u7ec4\u4ef6"),"\u3002\u6709\u5173\u914d\u7f6e\u503c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik"},"\u5b98\u65b9 Traefik Helm \u914d\u7f6e\u53c2\u6570"),"\u3002"),(0,i.kt)("p",null,"\u8981\u7981\u7528\u5b83\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable traefik")," \u9009\u9879\u6765\u542f\u52a8\u6bcf\u4e2a server\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u7981\u7528 Traefik\uff0cK3s 1.20 \u53ca\u4ee5\u524d\u7684\u7248\u672c\u5c06\u5b89\u88c5 Traefik v1\uff0c\u800c K3s 1.21 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u5c06\u5b89\u88c5 Traefik v2\u3002"),(0,i.kt)("p",null,"\u8981\u4ece\u8f83\u65e7\u7684 Traefik v1 \u5b9e\u4f8b\u8fc1\u79fb\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/migration/v1-to-v2/"},"Traefik \u6587\u6863"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik-migration-tool"},"\u8fc1\u79fb\u5de5\u5177"),"\u3002"),(0,i.kt)("h2",{id:"service-load-balancer"},"Service Load Balancer"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u4f7f\u7528\u4efb\u4f55 service load balancer (LB)\u3002K3s \u63d0\u4f9b\u4e86\u4e00\u4e2a Load Balancer\uff0c\u79f0\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"Klipper Load Balancer"),"\uff0c\u5b83\u4f7f\u7528\u53ef\u7528\u7684\u4e3b\u673a\u7aef\u53e3\u3002"),(0,i.kt)("p",null,"\u4e0a\u6e38 Kubernetes \u5141\u8bb8\u521b\u5efa LoadBalancer \u7c7b\u578b\u7684 Service\uff0c\u4f46\u4e0d\u5305\u62ec LB \u7684\u5b9e\u73b0\u3002\u67d0\u4e9b LB Service \u9700\u8981\u4e91\u63d0\u4f9b\u5546\uff0c\u4f8b\u5982 Amazon EC2 \u6216 Microsoft Azure\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cK3s service LB \u4f7f\u4f60\u53ef\u4ee5\u5728\u6ca1\u6709\u4e91\u63d0\u4f9b\u5546\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 LB service\u3002"),(0,i.kt)("h3",{id:"service-lb-\u7684\u5de5\u4f5c\u539f\u7406"},"Service LB \u7684\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"K3s \u521b\u5efa\u4e00\u4e2a\u63a7\u5236\u5668\uff0c\u8be5\u63a7\u5236\u5668\u4e3a Service Load Balancer \u521b\u5efa\u4e00\u4e2a Pod\uff0c\u662f\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service")," \u7c7b\u578b\u7684 Kubernetes \u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a Service Load Balancer\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),"\u3002DaemonSet \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u521b\u5efa\u4e00\u4e2a\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"svc")," \u524d\u7f00\u7684 Pod\u3002"),(0,i.kt)("p",null,"Service LB \u63a7\u5236\u5668\u4f1a\u76d1\u542c\u5176\u4ed6 Kubernetes \u670d\u52a1\u3002\u627e\u5230 Service \u540e\uff0c\u5b83\u4f1a\u5728\u6240\u6709\u8282\u70b9\u4e0a\u4f7f\u7528 DaemonSet \u4e3a\u8be5 Service \u521b\u5efa\u4e00\u4e2a\u4ee3\u7406 Pod\u3002\u8fd9\u4e2a Pod \u6210\u4e3a\u53e6\u4e00\u4e2a Service \u7684\u4ee3\u7406\uff0c\u56e0\u6b64\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5230\u8fbe\u8282\u70b9\u7aef\u53e3 8000 \u7684\u8bf7\u6c42\u53ef\u4ee5\u8def\u7531\u5230\u7aef\u53e3 8888 \u4e0a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,i.kt)("p",null,"\u5982\u679c Service LB \u8fd0\u884c\u5728\u5177\u6709\u5916\u90e8 IP \u7684\u8282\u70b9\u4e0a\uff0c\u5219\u4f7f\u7528\u5916\u90e8 IP\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u521b\u5efa\u4e86\u591a\u4e2a Service\uff0c\u5219\u4f1a\u4e3a\u6bcf\u4e2a Service \u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684 DaemonSet\u3002"),(0,i.kt)("p",null,"\u53ea\u8981\u5b83\u4eec\u4f7f\u7528\u4e0d\u540c\u7684\u7aef\u53e3\uff0c\u5c31\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u591a\u4e2a Service\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a\u76d1\u542c 80 \u7aef\u53e3\u7684 Service LB\uff0cService LB \u5c06\u5c1d\u8bd5\u5728\u96c6\u7fa4\u4e2d\u4e3a 80 \u7aef\u53e3\u5bfb\u627e\u7a7a\u95f2\u4e3b\u673a\u3002\u5982\u679c\u6ca1\u6709\u8be5\u7aef\u53e3\u53ef\u7528\u7684\u4e3b\u673a\uff0c\u5219 LB \u5c06\u505c\u7559\u5728 Pending \u72b6\u6001\u3002"),(0,i.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,i.kt)("p",null,"\u5728 K3s \u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer"},"LoadBalancer \u7c7b\u578b\u7684 Service"),"\u3002"),(0,i.kt)("h3",{id:"\u4ece\u8282\u70b9\u4e2d\u6392\u9664-service-lb"},"\u4ece\u8282\u70b9\u4e2d\u6392\u9664 Service LB"),(0,i.kt)("p",null,"\u8981\u6392\u9664\u8282\u70b9\u4f7f\u7528 Service LB\uff0c\u8bf7\u5728\u4e0d\u5e94\u6392\u9664\u7684\u8282\u70b9\u4e0a\u6dfb\u52a0\u4ee5\u4e0b\u6807\u7b7e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"svccontroller.k3s.cattle.io/enablelb\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86\u6807\u7b7e\uff0c\u5219 Service Load Balancer \u4ec5\u5728\u6709\u6807\u7b7e\u7684\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,i.kt)("h3",{id:"\u7981\u7528-service-lb"},"\u7981\u7528 Service LB"),(0,i.kt)("p",null,"\u8981\u7981\u7528\u5d4c\u5165\u5f0f LB\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable servicelb")," \u9009\u9879\u8fd0\u884c Server\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u8fd0\u884c\u4e0d\u540c\u7684 LB\uff0c\u4f8b\u5982 MetalLB\uff0c\u8fd9\u662f\u5fc5\u8981\u7684\u3002"),(0,i.kt)("h2",{id:"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9"},"\u6ca1\u6709\u4e3b\u673a\u540d\u7684\u8282\u70b9"),(0,i.kt)("p",null,"\u4e00\u4e9b\u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 Linode\uff09\u5c06\u521b\u5efa\u4ee5 \u201clocalhost\u201d \u4f5c\u4e3a\u4e3b\u673a\u540d\u7684\u4e3b\u673a\uff0c\u800c\u5176\u4ed6\u4e91\u63d0\u4f9b\u5546\u53ef\u80fd\u6839\u672c\u6ca1\u6709\u8bbe\u7f6e\u4e3b\u673a\u540d\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u57df\u540d\u89e3\u6790\u51fa\u73b0\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-name")," \u6807\u5fd7\u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_NODE_NAME")," \u73af\u5883\u53d8\u91cf\u8fd0\u884c K3s\uff0c\u8fd9\u4f1a\u901a\u8fc7\u4f20\u9012\u8282\u70b9\u540d\u79f0\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002"))}d.isMDXComponent=!0}}]);