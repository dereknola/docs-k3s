"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[98],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),s=(n(7294),n(3905)),i=["components"],o={title:"FAQ",weight:60},l=void 0,u={unversionedId:"faq/faq",id:"faq/faq",title:"FAQ",description:"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s.",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/",permalink:"/faq/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/faq/faq.md",tags:[],version:"current",lastUpdatedAt:1664308840,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"FAQ",weight:60},sidebar:"mySidebar",previous:{title:"Advanced Options and Configuration",permalink:"/advanced/"},next:{title:"K3s Server Configuration",permalink:"/reference/server-config"}},c={},p=[{value:"Is K3s a suitable replacement for Kubernetes?",id:"is-k3s-a-suitable-replacement-for-kubernetes",level:3},{value:"How can I use my own Ingress instead of Traefik?",id:"how-can-i-use-my-own-ingress-instead-of-traefik",level:3},{value:"Does K3s support Windows?",id:"does-k3s-support-windows",level:3},{value:"How can I build from source?",id:"how-can-i-build-from-source",level:3},{value:"Where are the K3s logs?",id:"where-are-the-k3s-logs",level:3},{value:"Can I run K3s in Docker?",id:"can-i-run-k3s-in-docker",level:3},{value:"What is the difference between K3s Server and Agent Tokens?",id:"what-is-the-difference-between-k3s-server-and-agent-tokens",level:3},{value:"I&#39;m having an issue, where can I get help?",id:"im-having-an-issue-where-can-i-get-help",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s."),(0,s.kt)("h3",{id:"is-k3s-a-suitable-replacement-for-kubernetes"},"Is K3s a suitable replacement for Kubernetes?"),(0,s.kt)("p",null,"K3s is capable of nearly everything Kubernetes can do. It is just a more lightweight version. See the ",(0,s.kt)("a",{parentName:"p",href:"/"},"main")," docs page for more details."),(0,s.kt)("h3",{id:"how-can-i-use-my-own-ingress-instead-of-traefik"},"How can I use my own Ingress instead of Traefik?"),(0,s.kt)("p",null,"Simply start K3s server with ",(0,s.kt)("inlineCode",{parentName:"p"},"--disable traefik")," and deploy your ingress."),(0,s.kt)("h3",{id:"does-k3s-support-windows"},"Does K3s support Windows?"),(0,s.kt)("p",null,"At this time K3s does not natively support Windows, however we are open to the idea in the future."),(0,s.kt)("h3",{id:"how-can-i-build-from-source"},"How can I build from source?"),(0,s.kt)("p",null,"Please reference the K3s ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/BUILDING.md"},"BUILDING.md")," with instructions."),(0,s.kt)("h3",{id:"where-are-the-k3s-logs"},"Where are the K3s logs?"),(0,s.kt)("p",null,"The installation script will auto-detect if your OS is using systemd or openrc and start the service."),(0,s.kt)("p",null,"When running with openrc, logs will be created at ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/log/k3s.log"),"."),(0,s.kt)("p",null,"When running with systemd, logs will be created in ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," and viewed using ",(0,s.kt)("inlineCode",{parentName:"p"},"journalctl -u k3s"),"."),(0,s.kt)("h3",{id:"can-i-run-k3s-in-docker"},"Can I run K3s in Docker?"),(0,s.kt)("p",null,"Yes, there are multiple ways to run K3s in Docker. See ",(0,s.kt)("a",{parentName:"p",href:"/advanced/#running-k3s-in-docker"},"Advanced Options")," for more details."),(0,s.kt)("h3",{id:"what-is-the-difference-between-k3s-server-and-agent-tokens"},"What is the difference between K3s Server and Agent Tokens?"),(0,s.kt)("p",null,"In K3s, there are two types of tokens: K3S_TOKEN and K3S_AGENT_TOKEN."),(0,s.kt)("p",null,"K3S_TOKEN: Defines the key required by the server to offer the HTTP config resources. These resources are requested by the other servers before joining the K3s HA cluster. If the K3S_AGENT_TOKEN is not defined, the agents use this token as well to access the required HTTP resources to join the cluster. Note that this token is also used to generate the encryption key for important content in the database (e.g., bootstrap data)."),(0,s.kt)("p",null,"K3S_AGENT_TOKEN: Optional. Defines the key required by the server to offer HTTP config resources to the agents. If not defined, agents will require K3S_TOKEN. Defining K3S_AGENT_TOKEN is encouraged to avoid agents having to know K3S_TOKEN, which is also used to encrypt data."),(0,s.kt)("p",null,"If no K3S_TOKEN is defined, the first K3s server will generate a random one. The result is part of the content in ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),". For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"K1070878408e06a827960208f84ed18b65fa10f27864e71a57d9e053c4caff8504b::server:df54383b5659b9280aa1e73e60ef78fc"),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"df54383b5659b9280aa1e73e60ef78fc")," is the K3S_TOKEN."),(0,s.kt)("h3",{id:"im-having-an-issue-where-can-i-get-help"},"I'm having an issue, where can I get help?"),(0,s.kt)("p",null,"If you are having an issue with deploying K3s, you should:"),(0,s.kt)("p",null,"1) Check the ",(0,s.kt)("a",{parentName:"p",href:"/known-issues/"},"Known Issues")," page."),(0,s.kt)("p",null,"2) Check that you have resolved any ",(0,s.kt)("a",{parentName:"p",href:"/advanced/#additional-os-preparations"},"Additional OS Preparation"),". Run ",(0,s.kt)("inlineCode",{parentName:"p"},"k3s check-config")," and ensure that it passes."),(0,s.kt)("p",null,"3) Search the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues"},"K3s GitHub existing issues")," for one that matches your problem."),(0,s.kt)("p",null,"4) Join the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher-users.slack.com/archives/CGGQEHPPW"},"Rancher K3s Slack")," channel to get help. "),(0,s.kt)("p",null,"5) Submit a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues/new/choose"},"New Issue")," on the K3s Github describing your setup and the issue you are experiencing."))}f.isMDXComponent=!0}}]);