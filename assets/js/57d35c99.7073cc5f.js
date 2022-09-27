"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(3117),a=n(7294),i=n(4334),s=n(2389),l=n(7392),o=n(7094),p=n(2466),c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,k=e.defaultValue,d=e.values,y=e.groupId,h=e.className,N=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===k?k:null!=(t=null!=k?k:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.U)(),S=v.tabGroupChoices,w=v.setTabGroupChoices,E=(0,a.useState)(b),C=E[0],T=E[1],x=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var K=S[y];null!=K&&K!==C&&f.some((function(e){return e.value===K}))&&T(K)}var A=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;r!==C&&(O(t),T(r),null!=y&&w(y,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var i,s=x.indexOf(e.currentTarget)-1;n=null!=(i=x[s])?i:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},f.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:A,onClick:A},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(N.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function k(e){var t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},5001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),s=n(5488),l=n(5162),o=["components"],p={title:"Secrets Encryption",weight:26},c="Secrets Encryption Config",u={unversionedId:"security/secrets-encryption",id:"security/secrets-encryption",title:"Secrets Encryption",description:"K3s supports enabling secrets encryption at rest. When first starting the server, passing the flag --secrets-encryption will do the following automatically:",source:"@site/docs/security/secrets-encryption.md",sourceDirName:"security",slug:"/security/secrets-encryption",permalink:"/security/secrets-encryption",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/security/secrets-encryption.md",tags:[],version:"current",lastUpdatedAt:1664308840,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"Secrets Encryption",weight:26},sidebar:"mySidebar",previous:{title:"Security",permalink:"/security/"},next:{title:"CIS Hardening Guide",permalink:"/security/hardening-guide"}},m={},k=[{value:"Secrets Encryption Tool",id:"secrets-encryption-tool",level:2},{value:"Encryption Key Rotation",id:"encryption-key-rotation",level:3},{value:"Secrets Encryption Disable/Enable",id:"secrets-encryption-disableenable",level:3},{value:"Secrets Encryption Status",id:"secrets-encryption-status",level:3}],d={toc:k};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secrets-encryption-config"},"Secrets Encryption Config"),(0,i.kt)("p",null,"K3s supports enabling secrets encryption at rest. When first starting the server, passing the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," will do the following automatically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate an AES-CBC key"),(0,i.kt)("li",{parentName:"ul"},"Generate an encryption config file with the generated key"),(0,i.kt)("li",{parentName:"ul"},"Pass the config to the KubeAPI as encryption-provider-config")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Secrets-encryption cannot be enabled on an existing server without restarting it.",(0,i.kt)("br",{parentName:"p"}),"\n","Use ",(0,i.kt)("inlineCode",{parentName:"p"},"curl -sfL https://get.k3s.io | sh -s - server --secrets-encryption")," if installing from script, or other methods described in ",(0,i.kt)("a",{parentName:"p",href:"/installation/configuration#configuration-with-install-script"},"Configuration Options"),".")),(0,i.kt)("p",null,"Example of the encryption config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "kind": "EncryptionConfiguration",\n  "apiVersion": "apiserver.config.k8s.io/v1",\n  "resources": [\n    {\n      "resources": [\n        "secrets"\n      ],\n      "providers": [\n        {\n          "aescbc": {\n            "keys": [\n              {\n                "name": "aescbckey",\n                "secret": "xxxxxxxxxxxxxxxxxxx"\n              }\n            ]\n          }\n        },\n        {\n          "identity": {}\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"secrets-encryption-tool"},"Secrets Encryption Tool"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1"},"v1.21.8+k3s1"))),(0,i.kt)("p",null,"K3s contains a utility tool ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),", which enables automatic control over the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Disabling/Enabling secrets encryption"),(0,i.kt)("li",{parentName:"ul"},"Adding new encryption keys"),(0,i.kt)("li",{parentName:"ul"},"Rotating and deleting encryption keys"),(0,i.kt)("li",{parentName:"ul"},"Reencrypting secrets")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Failure to follow proper procedure for rotating encryption keys can leave your cluster permanently corrupted. Proceed with caution.")),(0,i.kt)("h3",{id:"encryption-key-rotation"},"Encryption Key Rotation"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Single-Server",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"To rotate secrets encryption keys on a single-server cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the K3s server with the flag ",(0,i.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Starting K3s without encryption and enabling it at a later time is currently ",(0,i.kt)("em",{parentName:"p"},"not")," supported.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments. If running K3s as a service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rotate"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reencrypt"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"K3s will reencrypt ~5 secrets per second.",(0,i.kt)("br",{parentName:"p"}),"\n","Clusters with large # of secrets can take several minutes to reencrypt.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))))),(0,i.kt)(l.Z,{value:"High-Availability",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The steps are the same for both embedded DB and external DB clusters."),(0,i.kt)("p",null,"To rotate secrets encryption keys on HA setups:"),(0,i.kt)("admonition",{title:"Notes",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Starting K3s without encryption and enabling it at a later time is currently ",(0,i.kt)("em",{parentName:"li"},"not")," supported."),(0,i.kt)("li",{parentName:"ul"},"While not required, it is recommended that you pick one server node from which to run the ",(0,i.kt)("inlineCode",{parentName:"li"},"secrets-encrypt")," commands."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start up all three K3s servers with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flag. For brevity, the servers will be referred to as S1, S2, S3.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Prepare on S1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments. If running K3s as a service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rotate on S1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reencrypt on S1"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"K3s will reencrypt ~5 secrets per second.",(0,i.kt)("br",{parentName:"p"}),"\n","Clusters with large # of secrets can take several minutes to reencrypt.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3"))))),(0,i.kt)("h3",{id:"secrets-encryption-disableenable"},"Secrets Encryption Disable/Enable"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Single-Server",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"After launching a server with ",(0,i.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flag, secrets encryption can be disabled."),(0,i.kt)("p",null,"To disable secrets encryption on a single-node cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Disable"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments. If running K3s as a service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reencrypt with flags"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,i.kt)("p",null,"To re-enable secrets encryption on a single node cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reencrypt with flags"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n"))))),(0,i.kt)(l.Z,{value:"High-Availability",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"After launching a HA cluster with ",(0,i.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flags, secrets encryption can be disabled."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"While not required, it is recommended that you pick one server node from which to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," commands.")),(0,i.kt)("p",null,"For brevity, the three servers used in this guide will be referred to as S1, S2, S3."),(0,i.kt)("p",null,"To disable secrets encryption on a HA cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Disable on S1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments. If running K3s as a service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reencrypt with flags on S1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,i.kt)("p",null,"To re-enable secrets encryption on a HA cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable on S1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reencrypt with flags on S1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))))),(0,i.kt)("h3",{id:"secrets-encryption-status"},"Secrets Encryption Status"),(0,i.kt)("p",null,"The secrets-encrypt tool includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," command that displays information about the current status of secrets encryption on the node."),(0,i.kt)("p",null,"An example of the command on a single-server node:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,i.kt)("p",null,"Another example on HA cluster, after rotating the keys, but before restarting the servers:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,i.kt)("p",null,"Details on each section are as follows:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encryption Status"),": Displayed whether secrets encryption is disabled or enabled on the node  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Current Rotation Stage"),": Indicates the current rotation stage on the node.",(0,i.kt)("br",{parentName:"li"}),"Stages are: ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"prepare"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rotate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"reencrypt_finished"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),": Useful for HA clusters, this indicates whether all servers are on the same stage with their local files. This can be used to identify whether a restart of servers is required before proceeding to the next stage. In the HA example above, node-1 and node-2 have different hashes, indicating that they currently do not have the same encryption configuration. Restarting the servers will sync up their configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Table"),": Summarizes information about the secrets encryption keys found on the node.  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active"),': The "*" indicates which, if any, of the keys are currently used for secrets encryption. An active key is used by Kubernetes to encrypt any new secrets.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Type"),": All keys using this tool are ",(0,i.kt)("inlineCode",{parentName:"li"},"AES-CBC")," type. See more info ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"here.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": Name of the encryption key.")))))}y.isMDXComponent=!0}}]);