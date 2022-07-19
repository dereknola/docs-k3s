"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[750],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),o=a(7392),s=a(7094),u=a(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,g=e.groupId,y=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,T=(0,r.useState)(b),D=T[0],I=T[1],K=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=w[g];null!=A&&A!==D&&v.some((function(e){return e.value===A}))&&I(A)}var S=function(e){var t=e.currentTarget,a=K.indexOf(t),n=v[a].value;n!==D&&(C(t),I(n),null!=g&&O(g,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=K.indexOf(e.currentTarget)+1;a=null!=(n=K[r])?n:K[0];break;case"ArrowLeft":var i,l=K.indexOf(e.currentTarget)-1;a=null!=(i=K[l])?i:K[K.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},y)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return K.push(e)},onKeyDown:_,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},6875:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=a(5488),o=a(5162),s=["components"],u={title:"Air-Gap Install",weight:60},p=void 0,d={unversionedId:"installation/airgap",id:"installation/airgap",title:"Air-Gap Install",description:"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters.",source:"@site/docs/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/docs/installation/airgap",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1658255153,formattedLastUpdatedAt:"7/19/2022",frontMatter:{title:"Air-Gap Install",weight:60},sidebar:"mySidebar",previous:{title:"Private Registry Configuration",permalink:"/docs/installation/private-registry"},next:{title:"Disable Components Flags",permalink:"/docs/installation/disable-flags"}},c={},m=[{value:"Create the Registry YAML",id:"create-the-registry-yaml",level:3},{value:"Prepare the Images Directory and K3s Binary",id:"prepare-the-images-directory-and-k3s-binary",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing K3s in an Air-Gapped Environment",id:"installing-k3s-in-an-air-gapped-environment",level:3},{value:"Install Script Method",id:"install-script-method",level:3},{value:"Automated Upgrades Method",id:"automated-upgrades-method",level:3}],h={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters."),(0,i.kt)("h1",{id:"private-registry-method"},"Private Registry Method"),(0,i.kt)("p",null,"This document assumes you have already created your nodes in your air-gap environment and have a Docker private registry on your bastion host."),(0,i.kt)("p",null,"If you have not yet set up a private Docker registry, refer to the official documentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"here"),"."),(0,i.kt)("h3",{id:"create-the-registry-yaml"},"Create the Registry YAML"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"/installation/private-registry"},"Private Registry Configuration")," guide to create and configure the registry.yaml file."),(0,i.kt)("p",null,"Once you have completed this, you may now go to the ",(0,i.kt)("a",{parentName:"p",href:"#install-k3s"},"Install K3s")," section below."),(0,i.kt)("h1",{id:"manually-deploy-images-method"},"Manually Deploy Images Method"),(0,i.kt)("p",null,"We are assuming you have created your nodes in your air-gap environment.\nThis method requires you to manually deploy the necessary images to each node and is appropriate for edge deployments where running a private registry is not practical."),(0,i.kt)("h3",{id:"prepare-the-images-directory-and-k3s-binary"},"Prepare the Images Directory and K3s Binary"),(0,i.kt)("p",null,"Obtain the images tar file for your architecture from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases"},"releases")," page for the version of K3s you will be running."),(0,i.kt)("p",null,"Place the tar file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"images")," directory, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,i.kt)("p",null,"Place the k3s binary at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/k3s")," and ensure it is executable."),(0,i.kt)("p",null,"Follow the steps in the next section to install K3s."),(0,i.kt)("h1",{id:"install-k3s"},"Install K3s"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before installing K3s, complete the the ",(0,i.kt)("a",{parentName:"li",href:"#private-registry-method"},"Private Registry Method")," or the ",(0,i.kt)("a",{parentName:"li",href:"#manually-deploy-images-method"},"Manually Deploy Images Method")," above to prepopulate the images that K3s needs to install."),(0,i.kt)("li",{parentName:"ul"},"Download the K3s binary from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/releases"},"releases")," page, matching the same version used to get the airgap images. Place the binary in ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each air-gapped node and ensure it is executable."),(0,i.kt)("li",{parentName:"ul"},"Download the K3s install script at ",(0,i.kt)("a",{parentName:"li",href:"https://get.k3s.io."},"https://get.k3s.io.")," Place the install script anywhere on each air-gapped node, and name it ",(0,i.kt)("inlineCode",{parentName:"li"},"install.sh"),".")),(0,i.kt)("p",null,"When running the K3s script with the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD")," environment variable, K3s will use the local version of the script and binary."),(0,i.kt)("h3",{id:"installing-k3s-in-an-air-gapped-environment"},"Installing K3s in an Air-Gapped Environment"),(0,i.kt)("p",null,"You can install K3s on one or more servers as described below."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Single Server Configuration",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"To install K3s on a single server, simply do the following on the server node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,i.kt)("p",null,"Then, to optionally add additional agents do the following on each agent node. Take care to ensure you replace ",(0,i.kt)("inlineCode",{parentName:"p"},"myserver")," with the IP or valid DNS of the server and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"mynodetoken")," with the node token from the server typically at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/node-token")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh\n"))),(0,i.kt)(o.Z,{value:"High Availability Configuration",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Reference the ",(0,i.kt)("a",{parentName:"p",href:"/installation/ha"},"High Availability with an External DB")," or ",(0,i.kt)("a",{parentName:"p",href:"/installation/ha-embedded"},"High Availability with Embedded DB")," guides. You will be tweaking install commands so you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD=true")," and run your install script locally instead of via curl. You will also utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC='args'")," to supply any arguments to k3s."),(0,i.kt)("p",null,"For example, step two of the High Availability with an External DB guide mentions the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh -s - server \\\n  --datastore-endpoint='mysql://username:password@tcp(hostname:3306)/database-name'\n")),(0,i.kt)("p",null,"Instead, you would modify such examples like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server' K3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' ./install.sh\n")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," K3s additionally provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," flag for kubelets, which may help with configuring DNS in air-gap networks.")),(0,i.kt)("h1",{id:"upgrading"},"Upgrading"),(0,i.kt)("h3",{id:"install-script-method"},"Install Script Method"),(0,i.kt)("p",null,"Upgrading an air-gap environment can be accomplished in the following manner:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the new air-gap images (tar file) from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/releases"},"releases")," page for the version of K3s you will be upgrading to. Place the tar in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," directory on each\nnode. Delete the old tar file."),(0,i.kt)("li",{parentName:"ol"},"Copy and replace the old K3s binary in ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each node. Copy over the install script at ",(0,i.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"https://get.k3s.io")," (as it is possible it has changed since the last release). Run the script again just as you had done in the past\nwith the same environment variables."),(0,i.kt)("li",{parentName:"ol"},"Restart the K3s service (if not restarted automatically by installer).")),(0,i.kt)("h3",{id:"automated-upgrades-method"},"Automated Upgrades Method"),(0,i.kt)("p",null,"As of v1.17.4+k3s1 K3s supports ",(0,i.kt)("a",{parentName:"p",href:"/upgrades/automated/"},"automated upgrades"),". To enable this in air-gapped environments, you must ensure the required images are available in your private registry."),(0,i.kt)("p",null,"You will need the version of rancher/k3s-upgrade that corresponds to the version of K3s you intend to upgrade to. Note, the image tag replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," in the K3s release with a ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," because Docker images do not support ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,i.kt)("p",null,"You will also need the versions of system-upgrade-controller and kubectl that are specified in the system-upgrade-controller manifest YAML that you will deploy. Check for the latest release of the system-upgrade-controller ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/releases/latest"},"here")," and download the system-upgrade-controller.yaml to determine the versions you need to push to your private registry. For example, in release v0.4.0 of the system-upgrade-controller, these images are specified in the manifest YAML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n")),(0,i.kt)("p",null,"Once you have added the necessary rancher/k3s-upgrade, rancher/system-upgrade-controller, and rancher/kubectl images to your private registry, follow the ",(0,i.kt)("a",{parentName:"p",href:"/upgrades/automated/"},"automated upgrades")," guide."))}g.isMDXComponent=!0}}]);