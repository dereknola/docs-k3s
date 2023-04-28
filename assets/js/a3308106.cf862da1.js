"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(a),b=r,h=p["".concat(u,".").concat(b)]||p[b]||c[b]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(3117),r=a(7294),o=a(6010),s=a(2466),l=a(6775),u=a(1980),i=a(7392),d=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,i]=h({queryString:a,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=u??c;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),m(e)}),[i,m,o]),tabValues:o}}var k=a(2389);const f="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=i[a].value;n!==l&&(c(t),u(n))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:p},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},5145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(3117),r=(a(7294),a(3905)),o=a(4866),s=a(5162);const l={title:"Kubernetes Dashboard",weight:60},u=void 0,i={unversionedId:"installation/kube-dashboard",id:"installation/kube-dashboard",title:"Kubernetes Dashboard",description:"This installation guide will help you to deploy and configure the Kubernetes Dashboard on K3s.",source:"@site/docs/installation/kube-dashboard.md",sourceDirName:"installation",slug:"/installation/kube-dashboard",permalink:"/docs-k3s/installation/kube-dashboard",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/kube-dashboard.md",tags:[],version:"current",lastUpdatedAt:1682707376,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Kubernetes Dashboard",weight:60},sidebar:"mySidebar",previous:{title:"Managing Packaged Components",permalink:"/docs-k3s/installation/packaged-components"},next:{title:"Uninstalling K3s",permalink:"/docs-k3s/installation/uninstall"}},d={},c=[{value:"Deploying the Kubernetes Dashboard",id:"deploying-the-kubernetes-dashboard",level:3},{value:"Dashboard RBAC Configuration",id:"dashboard-rbac-configuration",level:3},{value:"Obtain the Bearer Token",id:"obtain-the-bearer-token",level:3},{value:"Local Access to the Dashboard",id:"local-access-to-the-dashboard",level:3},{value:"Advanced: Remote Access to the Dashboard",id:"advanced-remote-access-to-the-dashboard",level:4},{value:"Upgrading the Dashboard",id:"upgrading-the-dashboard",level:3},{value:"Deleting the Dashboard and admin-user configuration",id:"deleting-the-dashboard-and-admin-user-configuration",level:3}],p={toc:c};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This installation guide will help you to deploy and configure the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes Dashboard")," on K3s."),(0,r.kt)("h3",{id:"deploying-the-kubernetes-dashboard"},"Deploying the Kubernetes Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml\n")),(0,r.kt)("h3",{id:"dashboard-rbac-configuration"},"Dashboard RBAC Configuration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-user")," created in this guide will have administrative privileges in the Dashboard.")),(0,r.kt)("p",null,"Create the following resource manifest files:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user-role.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,r.kt)("p",null,"Deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin-user")," configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl create -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,r.kt)("h3",{id:"obtain-the-bearer-token"},"Obtain the Bearer Token"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"v1.24 and newer",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard create token admin-user\n"))),(0,r.kt)(s.Z,{value:"v1.23 and older",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard describe secret admin-user-token | grep '^token'\n")))),(0,r.kt)("h3",{id:"local-access-to-the-dashboard"},"Local Access to the Dashboard"),(0,r.kt)("p",null,"To access the Dashboard you must create a secure channel to your K3s cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl proxy\n")),(0,r.kt)("p",null,"The Dashboard is now accessible at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sign In")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"admin-user")," Bearer Token")),(0,r.kt)("h4",{id:"advanced-remote-access-to-the-dashboard"},"Advanced: Remote Access to the Dashboard"),(0,r.kt)("p",null,"Please see the Dashboard documentation: Using ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"Port Forwarding")," to Access Applications in a Cluster."),(0,r.kt)("h3",{id:"upgrading-the-dashboard"},"Upgrading the Dashboard"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nGITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,r.kt)("h3",{id:"deleting-the-dashboard-and-admin-user-configuration"},"Deleting the Dashboard and admin-user configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nsudo k3s kubectl delete clusterrolebinding kubernetes-dashboard\nsudo k3s kubectl delete clusterrole kubernetes-dashboard\n")))}b.isMDXComponent=!0}}]);