"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[511],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return b}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,h=p["".concat(i,".").concat(b)]||p[b]||c[b]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3117),r=a(7294),o=a(4334),l=a(2389),s=a(7392),i=a(7094),u=a(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a,l=e.lazy,p=e.block,b=e.defaultValue,h=e.values,m=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===b?b:null!=(t=null!=b?b:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),D=N.tabGroupChoices,w=N.setTabGroupChoices,O=(0,r.useState)(y),T=O[0],E=O[1],_=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=D[m];null!=A&&A!==T&&v.some((function(e){return e.value===A}))&&E(A)}var I=function(e){var t=e.currentTarget,a=_.indexOf(t),n=v[a].value;n!==T&&(C(t),E(n),null!=m&&w(m,String(n)))},R=function(e){var t,a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var n,r=_.indexOf(e.currentTarget)+1;a=null!=(n=_[r])?n:_[0];break;case"ArrowLeft":var o,l=_.indexOf(e.currentTarget)-1;a=null!=(o=_[l])?o:_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:R,onClick:I},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function b(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},5145:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return b}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=a(5488),s=a(5162),i=["components"],u={title:"Kubernetes Dashboard",weight:60},d=void 0,c={unversionedId:"installation/kube-dashboard",id:"installation/kube-dashboard",title:"Kubernetes Dashboard",description:"This installation guide will help you to deploy and configure the Kubernetes Dashboard on K3s.",source:"@site/docs/installation/kube-dashboard.md",sourceDirName:"installation",slug:"/installation/kube-dashboard",permalink:"/installation/kube-dashboard",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/kube-dashboard.md",tags:[],version:"current",lastUpdatedAt:1672781197,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{title:"Kubernetes Dashboard",weight:60},sidebar:"mySidebar",previous:{title:"Disable Components Flags",permalink:"/installation/disable-flags"},next:{title:"Uninstalling K3s",permalink:"/installation/uninstall"}},p={},b=[{value:"Deploying the Kubernetes Dashboard",id:"deploying-the-kubernetes-dashboard",level:3},{value:"Dashboard RBAC Configuration",id:"dashboard-rbac-configuration",level:3},{value:"Obtain the Bearer Token",id:"obtain-the-bearer-token",level:3},{value:"Local Access to the Dashboard",id:"local-access-to-the-dashboard",level:3},{value:"Advanced: Remote Access to the Dashboard",id:"advanced-remote-access-to-the-dashboard",level:4},{value:"Upgrading the Dashboard",id:"upgrading-the-dashboard",level:3},{value:"Deleting the Dashboard and admin-user configuration",id:"deleting-the-dashboard-and-admin-user-configuration",level:3}],h={toc:b};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This installation guide will help you to deploy and configure the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes Dashboard")," on K3s."),(0,o.kt)("h3",{id:"deploying-the-kubernetes-dashboard"},"Deploying the Kubernetes Dashboard"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml\n")),(0,o.kt)("h3",{id:"dashboard-rbac-configuration"},"Dashboard RBAC Configuration"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-user")," created in this guide will have administrative privileges in the Dashboard.")),(0,o.kt)("p",null,"Create the following resource manifest files:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.admin-user-role.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\n")),(0,o.kt)("p",null,"Deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-user")," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl create -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,o.kt)("h3",{id:"obtain-the-bearer-token"},"Obtain the Bearer Token"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"v1.24 and newer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard create token admin-user\n"))),(0,o.kt)(s.Z,{value:"v1.23 and older",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl -n kubernetes-dashboard describe secret admin-user-token | grep '^token'\n")))),(0,o.kt)("h3",{id:"local-access-to-the-dashboard"},"Local Access to the Dashboard"),(0,o.kt)("p",null,"To access the Dashboard you must create a secure channel to your K3s cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl proxy\n")),(0,o.kt)("p",null,"The Dashboard is now accessible at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sign In")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"admin-user")," Bearer Token")),(0,o.kt)("h4",{id:"advanced-remote-access-to-the-dashboard"},"Advanced: Remote Access to the Dashboard"),(0,o.kt)("p",null,"Please see the Dashboard documentation: Using ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"Port Forwarding")," to Access Applications in a Cluster."),(0,o.kt)("h3",{id:"upgrading-the-dashboard"},"Upgrading the Dashboard"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nGITHUB_URL=https://github.com/kubernetes/dashboard/releases\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\nsudo k3s kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml -f dashboard.admin-user.yml -f dashboard.admin-user-role.yml\n")),(0,o.kt)("h3",{id:"deleting-the-dashboard-and-admin-user-configuration"},"Deleting the Dashboard and admin-user configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo k3s kubectl delete ns kubernetes-dashboard\nsudo k3s kubectl delete clusterrolebinding kubernetes-dashboard\nsudo k3s kubectl delete clusterrole kubernetes-dashboard\n")))}m.isMDXComponent=!0}}]);