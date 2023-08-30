"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3573],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),i=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=i(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),b=r,h=p["".concat(d,".").concat(b)]||p[b]||c[b]||o;return t?n.createElement(h,s(s({ref:a},u),{},{components:t})):n.createElement(h,s({ref:a},u))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8567:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(3117),r=(t(7294),t(3905));const o={title:"Kubernetes Dashboard",weight:60},s=void 0,l={unversionedId:"installation/kube-dashboard",id:"installation/kube-dashboard",title:"Kubernetes Dashboard",description:"This installation guide will help you to deploy and configure the Kubernetes Dashboard on K3s.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/kube-dashboard.md",sourceDirName:"installation",slug:"/installation/kube-dashboard",permalink:"/docs-k3s/kr/installation/kube-dashboard",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/kube-dashboard.md",tags:[],version:"current",lastUpdatedAt:1693248667,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{title:"Kubernetes Dashboard",weight:60},sidebar:"mySidebar",previous:{title:"Managing Packaged Components",permalink:"/docs-k3s/kr/installation/packaged-components"},next:{title:"Uninstalling K3s",permalink:"/docs-k3s/kr/installation/uninstall"}},d={},i=[{value:"Deploying the Kubernetes Dashboard",id:"deploying-the-kubernetes-dashboard",level:3},{value:"Dashboard RBAC Configuration",id:"dashboard-rbac-configuration",level:3},{value:"Obtain the Bearer Token",id:"obtain-the-bearer-token",level:3},{value:"Local Access to the Dashboard",id:"local-access-to-the-dashboard",level:3},{value:"Advanced: Remote Access to the Dashboard",id:"advanced-remote-access-to-the-dashboard",level:4},{value:"Upgrading the Dashboard",id:"upgrading-the-dashboard",level:3},{value:"Deleting the Dashboard and admin-user configuration",id:"deleting-the-dashboard-and-admin-user-configuration",level:3}],u=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=u("Tabs"),p=u("TabItem"),b={toc:i};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This installation guide will help you to deploy and configure the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes Dashboard")," on K3s."),(0,r.kt)("h3",{id:"deploying-the-kubernetes-dashboard"},"Deploying the Kubernetes Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml\n")),(0,r.kt)("h3",{id:"dashboard-rbac-configuration"},"Dashboard RBAC Configuration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-user")," created in this guide will have administrative privileges in the Dashboard.")),(0,r.kt)("p",null,"Create the following resource manifest files:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user-role.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,r.kt)("p",null,"Deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-user")," configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl create -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,r.kt)("h3",{id:"obtain-the-bearer-token"},"Obtain the Bearer Token"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(p,{value:"v1.24 and newer",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard create token admin-user\n"))),(0,r.kt)(p,{value:"v1.23 and older",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard describe secret admin-user-token | grep '^token'\n")))),(0,r.kt)("h3",{id:"local-access-to-the-dashboard"},"Local Access to the Dashboard"),(0,r.kt)("p",null,"To access the Dashboard you must create a secure channel to your K3s cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl proxy\n")),(0,r.kt)("p",null,"The Dashboard is now accessible at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sign In")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"admin-user")," Bearer Token")),(0,r.kt)("h4",{id:"advanced-remote-access-to-the-dashboard"},"Advanced: Remote Access to the Dashboard"),(0,r.kt)("p",null,"Please see the Dashboard documentation: Using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"Port Forwarding")," to Access Applications in a Cluster."),(0,r.kt)("h3",{id:"upgrading-the-dashboard"},"Upgrading the Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nGITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,r.kt)("h3",{id:"deleting-the-dashboard-and-admin-user-configuration"},"Deleting the Dashboard and admin-user configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nsudo k3s kubectl delete clusterrolebinding kubernetes-dashboard\nsudo k3s kubectl delete clusterrole kubernetes-dashboard\n")))}h.isMDXComponent=!0}}]);