"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(3117),r=(a(7294),a(3905));const l={title:"Helm",weight:42},i=void 0,o={unversionedId:"helm/helm",id:"helm/helm",title:"Helm",description:"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm, developers or cluster administrators can create configurable templates known as Charts, instead of just using static manifests. For more information about creating your own Chart catalog, check out the docs at https://helm.sh/docs/intro/quickstart/.",source:"@site/docs/helm/helm.md",sourceDirName:"helm",slug:"/helm/",permalink:"/docs-k3s/helm/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/helm/helm.md",tags:[],version:"current",lastUpdatedAt:1682707376,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Helm",weight:42},sidebar:"mySidebar",previous:{title:"Networking",permalink:"/docs-k3s/networking/"},next:{title:"Advanced Options / Configuration",permalink:"/docs-k3s/advanced/"}},s={},m=[{value:"Using the Helm Controller",id:"using-the-helm-controller",level:3},{value:"HelmChart Field Definitions",id:"helmchart-field-definitions",level:4},{value:"Customizing Packaged Components with HelmChartConfig",id:"customizing-packaged-components-with-helmchartconfig",level:3},{value:"Migrating from Helm v2",id:"migrating-from-helm-v2",level:3}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm, developers or cluster administrators can create configurable templates known as Charts, instead of just using static manifests. For more information about creating your own Chart catalog, check out the docs at ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/quickstart/"},"https://helm.sh/docs/intro/quickstart/"),"."),(0,r.kt)("p",null,"K3s does not require any special configuration to support Helm. Just be sure you have properly set the kubeconfig path as per the ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/cluster-access/"},"cluster access")," documentation. "),(0,r.kt)("p",null,"K3s includes a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller/"},"Helm Controller")," that manages installing, upgrading/reconfiguring, and uninstalling Helm charts using a HelmChart Custom Resource Definition (CRD). Paired with ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/installation/packaged-components"},"auto-deploying AddOn manifests"),", installing a Helm chart on your cluster can be automated by creating a single file on disk."),(0,r.kt)("h3",{id:"using-the-helm-controller"},"Using the Helm Controller"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/helm-controller#helm-controller"},"HelmChart Custom Resource")," captures most of the options you would normally pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," command-line tool. Here's an example of how you might deploy Apache from the Bitnami chart repository, overriding some of the default chart values. Note that the HelmChart resource itself is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace, but the chart's resources will be deployed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," namespace, which is created in the same manifest. This can be useful if you want to keep your HelmChart resources separated from the the resources they deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: web\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: apache\n  namespace: kube-system\nspec:\n  repo: https://charts.bitnami.com/bitnami\n  chart: apache\n  targetNamespace: web\n  valuesContent: |-\n    service:\n      type: ClusterIP\n    ingress:\n      enabled: true\n      hostname: www.example.com\n    metrics:\n      enabled: true\n")),(0,r.kt)("h4",{id:"helmchart-field-definitions"},"HelmChart Field Definitions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Helm Argument / Flag Equivalent"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Helm Chart name"),(0,r.kt)("td",{parentName:"tr",align:null},"NAME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.chart"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Helm Chart name in repository, or complete HTTPS URL to chart archive (.tgz)"),(0,r.kt)("td",{parentName:"tr",align:null},"CHART")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.targetNamespace"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"Helm Chart target namespace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--namespace"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.version"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Helm Chart version (when installing from repository)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--version"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.repo"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Helm Chart repository URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--repo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.repoCA"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the certificates of HTTPS-enabled servers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ca-file"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.helmVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"v3"),(0,r.kt)("td",{parentName:"tr",align:null},"Helm version to use (",(0,r.kt)("inlineCode",{parentName:"td"},"v2")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"v3"),")"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.bootstrap"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to True if this chart is needed to bootstrap the cluster (Cloud Controller Manager, etc)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Override simple default Chart values. These take precedence over options set via valuesContent."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--set")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"--set-string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.jobImage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the image to use when installing the helm chart. E.g. rancher/klipper-helm:v0.3.0 ."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout in seconds for Helm operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--timeout"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.failurePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"reinstall"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"abort")," which case the Helm operation is aborted, pending manual intervention by the operator."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.valuesContent"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Override complex default Chart values via YAML file content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--values"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.chartContent"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Base64-encoded chart archive .tgz - overrides spec.chart"),(0,r.kt)("td",{parentName:"tr",align:null},"CHART")))),(0,r.kt)("p",null,"Content placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/static/")," can be accessed anonymously via the Kubernetes APIServer from within the cluster. This URL can be templated using the special variable ",(0,r.kt)("inlineCode",{parentName:"p"},"%{KUBERNETES_API}%")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.chart")," field. For example, the packaged Traefik component loads its chart from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://%{KUBERNETES_API}%/static/charts/traefik-12.0.000.tgz"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field should follow the Helm chart naming conventions. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_best_practices/conventions/#chart-names"},"Helm Best Practicies documentation")," to learn more.")),(0,r.kt)("h3",{id:"customizing-packaged-components-with-helmchartconfig"},"Customizing Packaged Components with HelmChartConfig"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Available as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,r.kt)("p",null,"To allow overriding values for packaged components that are deployed as HelmCharts (such as Traefik), K3s supports customizing deployments via a HelmChartConfig resources. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart, and it supports providing additional ",(0,r.kt)("inlineCode",{parentName:"p"},"valuesContent"),", which is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," command as an additional value file."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"HelmChart ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.set")," values override HelmChart and HelmChartConfig ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.valuesContent")," settings.")),(0,r.kt)("p",null,"For example, to customize the packaged Traefik ingress configuration, you can create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/traefik-config.yaml")," and populate it with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: traefik\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    image:\n      name: traefik\n      tag: v2.8.5\n    forwardedHeaders:\n      enabled: true\n      trustedIPs:\n        - 10.0.0.0/8\n    ssl:\n      enabled: true\n      permanentRedirect: false\n")),(0,r.kt)("h3",{id:"migrating-from-helm-v2"},"Migrating from Helm v2"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.17.0%2Bk3s.1"},"v1.17.0+k3s.1")," Helm v3 is supported and used by default.")),(0,r.kt)("p",null,"K3s can handle either Helm v2 or Helm v3. If you wish to migrate to Helm v3, ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"this")," blog post by Helm explains how to use a plugin to successfully migrate. Refer to the official Helm 3 documentation ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"here")," for more information. Just be sure you have properly set your kubeconfig as per the section about ",(0,r.kt)("a",{parentName:"p",href:"/docs-k3s/cluster-access/"},"cluster access.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Helm 3 no longer requires Tiller and the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm init")," command. Refer to the official documentation for details.")))}c.isMDXComponent=!0}}]);