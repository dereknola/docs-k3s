"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1968],{6528:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"reference/env-variables","title":"Environment Variables","description":"As mentioned in the Quick-Start Guide, you can use the installation script available at https://get.k3s.io to install K3s as a service on systemd and openrc based systems.","source":"@site/docs/reference/env-variables.md","sourceDirName":"reference","slug":"/reference/env-variables","permalink":"/docs-k3s/reference/env-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/reference/env-variables.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"Environment Variables"},"sidebar":"mySidebar","previous":{"title":"Advanced Options / Configuration","permalink":"/docs-k3s/advanced"},"next":{"title":"Flag Deprecation","permalink":"/docs-k3s/reference/flag-deprecation"}}');var i=t(4848),r=t(8453);const d={title:"Environment Variables"},l=void 0,c={},o=[];function a(e){const s={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["As mentioned in the ",(0,i.jsx)(s.a,{href:"/docs-k3s/quick-start",children:"Quick-Start Guide"}),", you can use the installation script available at ",(0,i.jsx)(s.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," to install K3s as a service on systemd and openrc based systems."]}),"\n",(0,i.jsx)(s.p,{children:"The simplest form of this command is as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,i.jsx)(s.p,{children:"When using this method to install K3s, the following environment variables can be used to configure the installation:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Environment Variable"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"})}),(0,i.jsx)(s.td,{children:"If set to true will not download K3s hash or binary."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SYMLINK"})}),(0,i.jsx)(s.td,{children:"By default will create symlinks for the kubectl, crictl, and ctr binaries if the commands do not already exist in path. If set to 'skip' will not create symlinks and 'force' will overwrite."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SKIP_ENABLE"})}),(0,i.jsx)(s.td,{children:"If set to true will not enable or start K3s service."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SKIP_START"})}),(0,i.jsx)(s.td,{children:"If set to true will not start K3s service."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_VERSION"})}),(0,i.jsx)(s.td,{children:"Version of K3s to download from Github. Will attempt to download from the stable channel if not specified."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_BIN_DIR"})}),(0,i.jsxs)(s.td,{children:["Directory to install K3s binary, links, and uninstall script to, or use ",(0,i.jsx)(s.code,{children:"/usr/local/bin"})," as the default."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_BIN_DIR_READ_ONLY"})}),(0,i.jsxs)(s.td,{children:["If set to true will not write files to ",(0,i.jsx)(s.code,{children:"INSTALL_K3S_BIN_DIR"}),", forces setting ",(0,i.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD=true"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SYSTEMD_DIR"})}),(0,i.jsxs)(s.td,{children:["Directory to install systemd service and environment files to, or use ",(0,i.jsx)(s.code,{children:"/etc/systemd/system"})," as the default."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_EXEC"})}),(0,i.jsxs)(s.td,{children:["Command with flags to use for launching K3s in the service. If the command is not specified, and the ",(0,i.jsx)(s.code,{children:"K3S_URL"}),' is set, it will default to "agent." If ',(0,i.jsx)(s.code,{children:"K3S_URL"}),' not set, it will default to "server." For help, refer to ',(0,i.jsx)(s.a,{href:"/docs-k3s/installation/configuration#configuration-with-install-script",children:"this example."})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_NAME"})}),(0,i.jsx)(s.td,{children:"Name of systemd service to create, will default to 'k3s' if running k3s as a server and 'k3s-agent' if running k3s as an agent. If specified the name will be prefixed with 'k3s-'."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_TYPE"})}),(0,i.jsx)(s.td,{children:"Type of systemd service to create, will default from the K3s exec command if not specified."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SELINUX_WARN"})}),(0,i.jsx)(s.td,{children:"If set to true will continue if k3s-selinux policy is not found."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_SKIP_SELINUX_RPM"})}),(0,i.jsx)(s.td,{children:"If set to true will skip automatic installation of the k3s RPM."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_CHANNEL_URL"})}),(0,i.jsxs)(s.td,{children:["Channel URL for fetching K3s download URL. Defaults to ",(0,i.jsx)(s.a,{href:"https://update.k3s.io/v1-release/channels",children:"https://update.k3s.io/v1-release/channels"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"INSTALL_K3S_CHANNEL"})}),(0,i.jsxs)(s.td,{children:['Channel to use for fetching K3s download URL. Defaults to "stable". Options include: ',(0,i.jsx)(s.code,{children:"stable"}),", ",(0,i.jsx)(s.code,{children:"latest"}),", ",(0,i.jsx)(s.code,{children:"testing"}),"."]})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"This example shows where to place aforementioned environment variables as options (after the pipe):"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Environment variables which begin with ",(0,i.jsx)(s.code,{children:"K3S_"})," will be preserved for the systemd and openrc services to use."]}),"\n",(0,i.jsxs)(s.p,{children:["Setting ",(0,i.jsx)(s.code,{children:"K3S_URL"}),' without explicitly setting an exec command will default the command to "agent".']}),"\n",(0,i.jsxs)(s.p,{children:["When running the agent, ",(0,i.jsx)(s.code,{children:"K3S_TOKEN"})," must also be set."]}),"\n",(0,i.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,i.jsx)(s.p,{children:"Available as of October 2024 releases: v1.28.15+k3s1, v1.29.10+k3s1, v1.30.6+k3s1, v1.31.2+k3s1."})}),"\n",(0,i.jsxs)(s.p,{children:["K3s will now use ",(0,i.jsx)(s.code,{children:"PATH"})," to find alternative container runtimes, in addition to checking the default paths used by the container runtime packages. In order to use this feature, you must modify the K3s service's PATH environment variable to add the directories containing the container runtime binaries."]}),"\n",(0,i.jsx)(s.p,{children:"It's recommended that you modify one of this two environment files:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"/etc/default/k3s # or k3s-agent"}),"\n",(0,i.jsx)(s.li,{children:"/etc/sysconfig/k3s # or k3s-agent"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["This example will add the ",(0,i.jsx)(s.code,{children:"PATH"})," in ",(0,i.jsx)(s.code,{children:"/etc/default/k3s"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"echo PATH=$PATH >> /etc/default/k3s\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"PATH"})," changes should be done with care to avoid placing untrusted binaries in the path of services that run as root."]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var n=t(6540);const i={},r=n.createContext(i);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);