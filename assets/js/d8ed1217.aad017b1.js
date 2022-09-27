"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),s=["components"],o={title:"Manual Upgrades",weight:10},i=void 0,u={unversionedId:"upgrades/manual",id:"upgrades/manual",title:"Manual Upgrades",description:"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version.",source:"@site/docs/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/upgrades/manual",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1664308840,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"Manual Upgrades",weight:10},sidebar:"mySidebar",previous:{title:"Stopping K3s",permalink:"/upgrades/killall"},next:{title:"Automated Upgrades",permalink:"/upgrades/automated"}},p={},c=[{value:"Release Channels",id:"release-channels",level:3},{value:"Upgrade K3s Using the Installation Script",id:"upgrade-k3s-using-the-installation-script",level:3},{value:"Manually Upgrade K3s Using the Binary",id:"manually-upgrade-k3s-using-the-binary",level:3},{value:"Restarting K3s",id:"restarting-k3s",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," When upgrading, upgrade server nodes first one at a time, then any worker nodes.")),(0,l.kt)("h3",{id:"release-channels"},"Release Channels"),(0,l.kt)("p",null,"Upgrades performed via the installation script or using our ",(0,l.kt)("a",{parentName:"p",href:"/upgrades/automated"},"automated upgrades")," feature can be tied to different release channels. The following channels are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Channel"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stable"),(0,l.kt)("td",{parentName:"tr",align:null},"(Default) Stable is recommended for production environments. These releases have been through a period of community hardening.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"latest"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest is recommended for trying out the latest features.  These releases have not yet been through a period of community hardening.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1.22 (example)"),(0,l.kt)("td",{parentName:"tr",align:null},"There is a release channel tied to each supported Kubernetes minor version. At the time of this writing, they are ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.22"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.23"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.24"),". These channels will select the latest patch available, not necessarily a stable release.")))),(0,l.kt)("p",null,"For an exhaustive and up-to-date list of channels, you can visit the ",(0,l.kt)("a",{parentName:"p",href:"https://update.k3s.io/v1-release/channels"},"k3s channel service API"),". For more technical details on how channels work, you see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/channelserver"},"channelserver project"),"."),(0,l.kt)("h3",{id:"upgrade-k3s-using-the-installation-script"},"Upgrade K3s Using the Installation Script"),(0,l.kt)("p",null,"To upgrade K3s from an older version you can re-run the installation script using the same flags, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | sh -\n")),(0,l.kt)("p",null,"This will upgrade to a newer version in the stable channel by default."),(0,l.kt)("p",null,"If you want to upgrade to a newer version in a specific channel (such as latest) you can specify the channel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n")),(0,l.kt)("p",null,"If you want to upgrade to a specific version you can run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z-rc1 sh -\n")),(0,l.kt)("h3",{id:"manually-upgrade-k3s-using-the-binary"},"Manually Upgrade K3s Using the Binary"),(0,l.kt)("p",null,"Or to manually upgrade K3s:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the desired version of the K3s binary from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/releases"},"releases")),(0,l.kt)("li",{parentName:"ol"},"Copy the downloaded binary to ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s")," (or your desired location)"),(0,l.kt)("li",{parentName:"ol"},"Stop the old k3s binary"),(0,l.kt)("li",{parentName:"ol"},"Launch the new k3s binary")),(0,l.kt)("h3",{id:"restarting-k3s"},"Restarting K3s"),(0,l.kt)("p",null,"Restarting K3s is supported by the installation script for systemd and OpenRC."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"systemd")),(0,l.kt)("p",null,"To restart servers manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s\n")),(0,l.kt)("p",null,"To restart agents manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s-agent\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OpenRC")),(0,l.kt)("p",null,"To restart servers manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s restart\n")),(0,l.kt)("p",null,"To restart agents manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s-agent restart\n")))}m.isMDXComponent=!0}}]);