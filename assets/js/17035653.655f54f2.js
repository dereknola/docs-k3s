"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2433],{218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"networking/multus-ipams","title":"Multus and IPAM plugins","description":"Multus CNI is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV.","source":"@site/docs/networking/multus-ipams.md","sourceDirName":"networking","slug":"/networking/multus-ipams","permalink":"/docs-k3s/networking/multus-ipams","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/networking/multus-ipams.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"Multus and IPAM plugins"},"sidebar":"mySidebar","previous":{"title":"Distributed hybrid or multicloud cluster","permalink":"/docs-k3s/networking/distributed-multicloud"},"next":{"title":"Networking Services","permalink":"/docs-k3s/networking/networking-services"}}');var a=t(4848),i=t(8453);const r={title:"Multus and IPAM plugins"},l=void 0,o={},c=[{value:"Deploy with an IPAM plugin",id:"deploy-with-an-ipam-plugin",level:3},{value:"Using Multus",id:"using-multus",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components},{TabItem:t,Tabs:s}=n;return t||h("TabItem",!0),s||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni",children:"Multus CNI"})," is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about Multus, refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/tree/master/docs",children:"multus-cni"})," documentation."]}),"\n",(0,a.jsx)(n.p,{children:"Multus can not be deployed standalone. It always requires at least one conventional CNI plugin that fulfills the Kubernetes cluster network requirements. That CNI plugin becomes the default for Multus, and will be used to provide the primary interface for all pods. When deploying K3s with default options, that CNI plugin is Flannel."}),"\n",(0,a.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,a.jsx)(n.p,{children:"K3s uses a fixed CNI binary path as of the October 2024 releases: v1.28.15+k3s1, v1.29.10+k3s1, v1.30.6+k3s1, v1.31.2+k3s1."})}),"\n",(0,a.jsxs)(n.p,{children:["K3s looks at ",(0,a.jsx)(n.code,{children:"$DATA_DIR/data/cni"})," for CNI plugin binaries. By default this is ",(0,a.jsx)(n.code,{children:"/var/lib/rancher/k3s/data/cni"}),". Additional CNI plugins should be installed to this location."]}),"\n",(0,a.jsxs)(n.p,{children:["Prior to the October 2024 releases, CNI binaries were part of the K3s userspace bundle at ",(0,a.jsx)(n.code,{children:"$DATA_DIR/data/$HASH/bin"}),", where the hash is unique to each release of K3s.\nThis made it difficult to deploy additional CNI plugins, as the path would change every time K3s was upgraded.\nIf deploying Multus to an older release of K3s, you should use ",(0,a.jsx)(n.code,{children:"/var/lib/rancher/k3s/data/current/bin/"})," as the CNI bin dir, but expect that the plugins will need to be re-deployed whenever K3s is upgraded."]}),"\n",(0,a.jsx)(n.h3,{id:"deploy-with-an-ipam-plugin",children:"Deploy with an IPAM plugin"}),"\n",(0,a.jsx)(n.p,{children:"An IP Address Manager (IPAM) plugin is required to assign IP addresses on the extra interfaces created by Multus. One or more IPAMs can be installed; the examples below each show use of a single IPAM plugin but they may be combined as needed."}),"\n",(0,a.jsxs)(n.p,{children:["The helm deployment examples below will deploy a DaemonSet to create Multus pods to install the required CNI binaries in ",(0,a.jsx)(n.code,{children:"/var/lib/rancher/k3s/data/cni/"})," and Multus CNI config in ",(0,a.jsx)(n.code,{children:"/var/lib/rancher/k3s/agent/etc/cni/net.d"}),"."]}),"\n",(0,a.jsxs)(s,{groupId:"MultusIPAMplugins",children:[(0,a.jsxs)(t,{value:"host-local",default:!0,children:[(0,a.jsxs)(n.p,{children:["The host-local IPAM plugin allocates ip addresses out of a set of address ranges. It stores the state locally on the host filesystem, hence ensuring uniqueness of IP addresses on a single host. Therefore, we don't recommend it for multi-node clusters. This IPAM plugin does not require any extra deployment. For more information: ",(0,a.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/host-local/",children:"https://www.cni.dev/plugins/current/ipam/host-local/"}),"."]}),(0,a.jsx)(n.p,{children:"To use the host-local plugin, deploy Multus with the following configuration:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: multus\n  namespace: kube-system\nspec:\n  repo: https://rke2-charts.rancher.io\n  chart: rke2-multus\n  targetNamespace: kube-system\n  valuesContent: |-\n    config:\n      fullnameOverride: multus\n      cni_conf:\n        confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n        binDir: /var/lib/rancher/k3s/data/cni/\n        kubeconfig: /var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig\n"})})]}),(0,a.jsxs)(t,{value:"Whereabouts",default:!0,children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/whereabouts",children:"Whereabouts"})," is an IP Address Management (IPAM) CNI plugin that assigns IP addresses cluster-wide."]}),(0,a.jsx)(n.p,{children:"To use the Whereabouts IPAM plugin, deploy Multus with the following configuration:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: multus\n  namespace: kube-system\nspec:\n  repo: https://rke2-charts.rancher.io\n  chart: rke2-multus\n  targetNamespace: kube-system\n  valuesContent: |-\n    config:\n      fullnameOverride: multus\n      cni_conf:\n        confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n        binDir: /var/lib/rancher/k3s/data/cni/\n        kubeconfig: /var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig\n    rke2-whereabouts:\n      fullnameOverride: whereabouts\n      enabled: true\n      cniConf:\n        confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n        binDir: /var/lib/rancher/k3s/data/cni/\n"})}),(0,a.jsxs)(n.p,{children:["When using whereabouts on K3s, ",(0,a.jsx)(n.code,{children:"configuration_path"})," must be set to ",(0,a.jsx)(n.code,{children:"/var/lib/rancher/k3s/agent/etc/cni/net.d/whereabouts.d/whereabouts.conf"})," in the NetworkAttachmentDefinition's ",(0,a.jsx)(n.code,{children:"ipam"})," configuration.\nFor example, when using whereabouts as the IPAM with the macvlan plugin:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: k8s.cni.cncf.io/v1\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: macvlan-whereabouts\nspec:\n  config: |-\n    {\n      "cniVersion": "1.0.0",\n      "type": "macvlan",\n      "master": "eth0",\n      "mode": "bridge",\n      "ipam": {\n        "type": "whereabouts",\n        "range": "172.17.0.0/24",\n        "gateway": "172.17.0.1",\n        "configuration_path": "/var/lib/rancher/k3s/agent/etc/cni/net.d/whereabouts.d/whereabouts.conf"\n      }\n    }\n'})})]}),(0,a.jsxs)(t,{value:"Multus DHCP daemon",default:!0,children:[(0,a.jsxs)(n.p,{children:["The dhcp IPAM plugin can be deployed when there is already a DHCP server running on the network. This daemonset takes care of periodically renewing the DHCP lease. For more information please check the official docs of ",(0,a.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/dhcp/",children:"DHCP IPAM plugin"}),"."]}),(0,a.jsx)(n.p,{children:"To use the DHCP plugin, deploy Multus with the following configuration:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: multus\n  namespace: kube-system\nspec:\n  repo: https://rke2-charts.rancher.io\n  chart: rke2-multus\n  targetNamespace: kube-system\n  valuesContent: |-\n    config:\n      fullnameOverride: multus\n      cni_conf:\n        confDir: /var/lib/rancher/k3s/agent/etc/cni/net.d\n        binDir: /var/lib/rancher/k3s/data/cni/\n        kubeconfig: /var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig\n    manifests:\n      dhcpDaemonSet: true\n"})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"using-multus",children:"Using Multus"}),"\n",(0,a.jsxs)(n.p,{children:["Once Multus has been deployed, you can create NetworkAttachmentDefinition resources, and reference these in Pod specs to attach additional interfaces.\nFor example, using the whereabouts example above, you can create an ",(0,a.jsx)(n.code,{children:"eth1"})," interface on a Pod using the ",(0,a.jsx)(n.code,{children:"k8s.v1.cni.cncf.io/networks"})," annotation:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: multus-demo\n  labels:\n    app: multus-demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: multus-demo\n  template:\n    metadata:\n      annotations:\n        k8s.v1.cni.cncf.io/networks: macvlan-whereabouts@eth1\n      labels:\n        app: multus-demo\n    spec:\n      containers:\n      - name: shell\n        image: docker.io/rancher/mirrored-library-busybox:1.36.1\n        imagePullPolicy: IfNotPresent\n        command:\n          - sleep\n          - "3600"\n'})}),"\n",(0,a.jsx)(n.p,{children:"See the upstream documentation for additional information and examples."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);