"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[519],{857:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"release-notes/v1.30.X","title":"v1.30.X","description":"\u4ee5\u524d\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u524d\u306b\u3001Kubernetes\u306e\u7dca\u6025\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30ce\u30fc\u30c8\u3092\u5fc5\u305a\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/v1.30.X.md","sourceDirName":"release-notes","slug":"/release-notes/v1.30.X","permalink":"/docs-k3s/ja/release-notes/v1.30.X","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/release-notes/v1.30.X.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"sidebarPosition":1,"frontMatter":{"hide_table_of_contents":true,"sidebar_position":1},"sidebar":"mySidebar","previous":{"title":"\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0","permalink":"/docs-k3s/ja/reference/resource-profiling"},"next":{"title":"v1.31.X","permalink":"/docs-k3s/ja/release-notes/v1.31.X"}}');var r=i(4848),h=i(8453);const t={hide_table_of_contents:!0,sidebar_position:1},n="v1.30.X",c={},d=[{value:"\u30ea\u30ea\u30fc\u30b9 v1.30.2+k3s1",id:"\u30ea\u30ea\u30fc\u30b9-v1302k3s1",level:2},{value:"v1.30.1+k3s1\u304b\u3089\u306e\u5909\u66f4\u70b9:",id:"v1301k3s1\u304b\u3089\u306e\u5909\u66f4\u70b9",level:3},{value:"\u30ea\u30ea\u30fc\u30b9 v1.30.1+k3s1",id:"\u30ea\u30ea\u30fc\u30b9-v1301k3s1",level:2},{value:"v1.30.0+k3s1 \u4ee5\u964d\u306e\u5909\u66f4\u70b9:",id:"v1300k3s1-\u4ee5\u964d\u306e\u5909\u66f4\u70b9",level:3},{value:"\u30ea\u30ea\u30fc\u30b9 v1.30.0+k3s1",id:"\u30ea\u30ea\u30fc\u30b9-v1300k3s1",level:2},{value:"v1.29.4+k3s1 \u4ee5\u964d\u306e\u5909\u66f4\u70b9:",id:"v1294k3s1-\u4ee5\u964d\u306e\u5909\u66f4\u70b9",level:3}];function o(s){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"v130x",children:"v1.30.X"})}),"\n",(0,r.jsx)(e.admonition,{title:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u901a\u77e5",type:"warning",children:(0,r.jsxs)(e.p,{children:["\u4ee5\u524d\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u524d\u306b\u3001Kubernetes\u306e",(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#urgent-upgrade-notes",children:"\u7dca\u6025\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30ce\u30fc\u30c8"}),"\u3092\u5fc5\u305a\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30d0\u30fc\u30b8\u30e7\u30f3"}),(0,r.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9\u65e5"}),(0,r.jsx)(e.th,{children:"Kubernetes"}),(0,r.jsx)(e.th,{children:"Kine"}),(0,r.jsx)(e.th,{children:"SQLite"}),(0,r.jsx)(e.th,{children:"Etcd"}),(0,r.jsx)(e.th,{children:"Containerd"}),(0,r.jsx)(e.th,{children:"Runc"}),(0,r.jsx)(e.th,{children:"Flannel"}),(0,r.jsx)(e.th,{children:"Metrics-server"}),(0,r.jsx)(e.th,{children:"Traefik"}),(0,r.jsx)(e.th,{children:"CoreDNS"}),(0,r.jsx)(e.th,{children:"Helm-controller"}),(0,r.jsx)(e.th,{children:"Local-path-provisioner"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs-k3s/ja/release-notes/v1.30.X#release-v1302k3s1",children:"v1.30.2+k3s1"})}),(0,r.jsx)(e.td,{children:"2024\u5e746\u670825\u65e5"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1302",children:"v1.30.2"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.9",children:"v0.11.9"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.13-k3s1",children:"v3.5.13-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.17-k3s1",children:"v1.7.17-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.25.2",children:"v0.25.2"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1",children:"v0.16.1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.27",children:"v0.0.27"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs-k3s/ja/release-notes/v1.30.X#release-v1301k3s1",children:"v1.30.1+k3s1"})}),(0,r.jsx)(e.td,{children:"2024\u5e745\u670822\u65e5"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1301",children:"v1.30.1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.8-0.20240430184817-f9ce6f8da97b",children:"v0.11.8-0.20240430184817-f9ce6f8da97b"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.15-k3s1",children:"v1.7.15-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12-k3s1",children:"v1.1.12-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.2",children:"v0.24.2"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.16.1-0.20240502205943-2f32059d43e6",children:"v0.16.1-0.20240502205943-2f32059d43e6"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.26",children:"v0.0.26"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs-k3s/ja/release-notes/v1.30.X#release-v1300k3s1",children:"v1.30.0+k3s1"})}),(0,r.jsx)(e.td,{children:"2024\u5e745\u670810\u65e5"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v1300",children:"v1.30.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/kine/releases/tag/v0.11.7",children:"v0.11.8"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://sqlite.org/releaselog/3_44_0.html",children:"3.44.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/etcd/releases/tag/v3.5.9-k3s1",children:"v3.5.9-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/containerd/releases/tag/v1.7.15-k3s1",children:"v1.7.15-k3s1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/opencontainers/runc/releases/tag/v1.1.12",children:"v1.1.12"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/flannel-io/flannel/releases/tag/v0.24.2",children:"v0.24.2"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.0",children:"v0.7.0"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/traefik/traefik/releases/tag/v2.10.7",children:"v2.10.7"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/coredns/coredns/releases/tag/v1.10.1",children:"v1.10.1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/helm-controller/releases/tag/v0.15.9",children:"v0.16.1"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.26",children:"v0.0.26"})})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(e.h2,{id:"\u30ea\u30ea\u30fc\u30b9-v1302k3s1",children:["\u30ea\u30ea\u30fc\u30b9 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.2+k3s1",children:"v1.30.2+k3s1"})]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3001Kubernetes\u3092v1.30.2\u306b\u66f4\u65b0\u3057\u3001\u591a\u304f\u306e\u554f\u984c\u3092\u4fee\u6b63\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u65b0\u6a5f\u80fd\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1301",children:"Kubernetes\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"v1301k3s1\u304b\u3089\u306e\u5909\u66f4\u70b9",children:"v1.30.1+k3s1\u304b\u3089\u306e\u5909\u66f4\u70b9:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u30d5\u30a1\u30a4\u30eb\u306b\u3088\u308btailscale\u8a2d\u5b9a\u4f7f\u7528\u6642\u306e\u30d0\u30b0\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10074",children:"(#10074)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3067",(0,r.jsx)(e.code,{children:"vpn-auth-file"}),"\u4f7f\u7528\u6642\u306e\u30d0\u30b0\u4fee\u6b63"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6b20\u843d\u3057\u305f\u30d6\u30ed\u30d6\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u5931\u6557\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306eWithSkipMissing\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10136",children:"(#10136)"})]}),"\n",(0,r.jsxs)(e.li,{children:["cri-dockerd\u306e\u56fa\u5b9a\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d0\u30fc\u30d0\u30a4\u30f3\u30c9\u30a2\u30c9\u30ec\u30b9\u4f7f\u7528 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9975",children:"(#9975)"})]}),"\n",(0,r.jsxs)(e.li,{children:["stargz\u3092cri\u30ec\u30b8\u30b9\u30c8\u30eaconfig_path\u306b\u5207\u308a\u66ff\u3048 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9977",children:"(#9977)"})]}),"\n",(0,r.jsxs)(e.li,{children:["containerd v1.7.17\u3001etcd v3.5.13\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10123",children:"(#10123)"})]}),"\n",(0,r.jsxs)(e.li,{children:["spegel\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10118",children:"(#10118)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u8907\u6570\u306e\u5b9f\u884c\u304c\u3042\u308bPR\u30d3\u30eb\u30c9\u304b\u3089\u306e\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u554f\u984c\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10122",children:"(#10122)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30c7\u30e5\u30a2\u30eb\u30b9\u30bf\u30c3\u30af\u30ce\u30fc\u30c9\u4e0a\u306e\u30b7\u30f3\u30b0\u30eb\u30b9\u30bf\u30c3\u30af\u30b5\u30fc\u30d3\u30b9\u306e",(0,r.jsx)(e.code,{children:"externalTrafficPolicy: Local"}),"\u306e\u554f\u984c\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9963",children:"(#9963)"})]}),"\n",(0,r.jsxs)(e.li,{children:["local-path-provisioner\u30d8\u30eb\u30d1\u30fc\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9964",children:"(#9964)"})]}),"\n",(0,r.jsxs)(e.li,{children:["svclb\u30dd\u30c3\u30c9\u306ePriorityClassName\u30b5\u30dd\u30fc\u30c8\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10045",children:"(#10045)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["ServiceLB\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067svclb\u30dd\u30c3\u30c9\u306epriorityClassName\u3092",(0,r.jsx)(e.code,{children:"system-node-critical"}),"\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f",(0,r.jsx)(e.code,{children:"svccontroller.k3s.cattle.io/priorityclassname"}),"\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30fc\u30d3\u30b9\u3054\u3068\u306b\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u30ec\u30ac\u30b7\u30fctraefik v1\u30c1\u30e3\u30fc\u30c8\u306e\u30c1\u30a7\u30c3\u30af\u524a\u9664 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9593",children:"(#9593)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"K3s\u306ftraefik v1\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306b\u81ea\u52d5\u7684\u306btraefik v2\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u306f\u904e\u53bb3\u5e74\u9593\u306e\u3044\u305a\u308c\u304b\u306e\u6642\u70b9\u3067v2\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["kube-router\u30d0\u30fc\u30b8\u30e7\u30f3\u3092v2.1.2\u306b\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10177",children:"(#10177)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30d6\u30e9\u30f3\u30c1\u6226\u7565\u306eADR\u4f5c\u6210 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10147",children:"(#10147)"})]}),"\n",(0,r.jsxs)(e.li,{children:["minio-go\u3092v7.0.70\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10081",children:"(#10081)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u3092\u4fee\u6b63\u3059\u308b\u305f\u3081\u306bkine\u3092v0.11.9\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10082",children:"(#10082)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u6709\u52b9\u306aresolv conf\u306e\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9948",children:"(#9948)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u6b20\u843d\u3057\u3066\u3044\u308b\u30ab\u30fc\u30cd\u30eb\u8a2d\u5b9a\u30c1\u30a7\u30c3\u30af\u306e\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10100",children:"(#10100)"})]}),"\n",(0,r.jsxs)(e.li,{children:["Git\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10131",children:"(#10131)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u306a\u3057"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u306e\u30b9\u30ad\u30e3\u30f3\u6642\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u30d5\u30a9\u30ed\u30fc (#9288) ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10049",children:"(#10049)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3055\u308c\u305f\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306f\u3001Auto-Deploying Manifests\uff08AddOns\uff09\u306e\u30b9\u30ad\u30e3\u30f3\u6642\u306b\u5c0a\u91cd\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["helm\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u304c\u30aa\u30fc\u30ca\u30fc\u53c2\u7167\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30d0\u30b0\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10048",children:"(#10048)"})]}),"\n",(0,r.jsxs)(e.li,{children:["go.mod\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10192",children:"(#10192)"})]}),"\n",(0,r.jsxs)(e.li,{children:["flannel\u30d0\u30fc\u30b8\u30e7\u30f3\u3092v0.25.2\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10146",children:"(#10146)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u8a8d\u8a3c\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u8ffd\u52a0\u30c6\u30b9\u30c8 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10119",children:"(#10119)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3067",(0,r.jsx)(e.code,{children:"vpn-auth-file"}),"\u4f7f\u7528\u6642\u306e\u30d0\u30b0\u4fee\u6b63"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["e2e\u30c6\u30b9\u30c8\u306b\u8ffd\u52a0\u30ed\u30b0\u3092\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10145",children:"(#10145)"})]}),"\n",(0,r.jsxs)(e.li,{children:["2024\u5e745\u6708\u306e\u30c1\u30e3\u30cd\u30eb\u30b5\u30fc\u30d0\u30fc\u306e\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10137",children:"(#10137)"})]}),"\n",(0,r.jsxs)(e.li,{children:["tls\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30b5\u30dd\u30fc\u30c8\u306e\u305f\u3081\u306bklipper-helm\u30a4\u30e1\u30fc\u30b8\u3092\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10187",children:"(#10187)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30b3\u30de\u30f3\u30c9\u540d\u3092\u5b8c\u5168\u306b\u3059\u308b\u305f\u3081\u306e\u30b9\u30af\u30ea\u30d7\u30c8binary_size_check\u306e\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9992",children:"(#9992)"})]}),"\n",(0,r.jsxs)(e.li,{children:["k3s-etcd\u30a4\u30f3\u30d5\u30a9\u30fc\u30de\u30fc\u304c\u8d77\u52d5\u3057\u306a\u3044\u554f\u984c\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10047",children:"(#10047)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u63d0\u4f9b\u3092\u6709\u52b9\u306b\u3059\u308b ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10019",children:"(#10019)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"--Enable-pprof"}),"\u306f\u3001\u30c7\u30d0\u30c3\u30b0/pprof\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3067\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\u30dd\u30fc\u30c8\u3067\u30ea\u30c3\u30b9\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"--Supervisor-metrics"}),"\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u3067\u5185\u90e8\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067\u63d0\u4f9b\u3059\u308b\u305f\u3081\u306b\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\u30dd\u30fc\u30c8\u3067\u30ea\u30c3\u30b9\u30f3\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["/conformance\u3067alpine\u30923.18\u304b\u30893.20\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10210",children:"(#10210)"})]}),"\n",(0,r.jsxs)(e.li,{children:["/package\u3067alpine\u30923.18\u304b\u30893.20\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10211",children:"(#10211)"})]}),"\n",(0,r.jsxs)(e.li,{children:["/tests/e2e/scripts\u3067ubuntu\u309222.04\u304b\u308924.04\u306b\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10040",children:"(#10040)"})]}),"\n",(0,r.jsxs)(e.li,{children:["Trivy\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10039",children:"(#10039)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30ce\u30fc\u30c9\u304c\u521d\u671f\u5316\u3055\u308c\u305a\u306b\u6b8b\u308b\u3068\u304d\u306enetpol\u30af\u30e9\u30c3\u30b7\u30e5\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10073",children:"(#10073)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u8ca0\u8377\u4e0b\u3067\u552f\u4e00\u306e\u30b5\u30fc\u30d0\u30fc\u304c\u5931\u6557\u3068\u3057\u3066\u30de\u30fc\u30af\u3055\u308c\u308b\u554f\u984c\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10241",children:"(#10241)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u57cb\u3081\u8fbc\u307f\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u306f\u3001\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u304c\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u306e\u5931\u6557\u306b\u3088\u308a\u5229\u7528\u4e0d\u53ef\u3068\u30de\u30fc\u30af\u3055\u308c\u305f\u5834\u5408\u3001\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u3092\u7121\u8996\u3057\u3066\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u8a66\u3059\u3088\u3046\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u30b5\u30fc\u30d0\u30fc\u306bwrite-kubeconfig-group\u30d5\u30e9\u30b0\u3092\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9233",children:"(#9233)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"k3s\u30b5\u30fc\u30d0\u30fc\u306e\u65b0\u3057\u3044\u30d5\u30e9\u30b0: --write-kubeconfig-group"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["SAR RBAC\u306b\u3088\u3063\u3066\u30d6\u30ed\u30c3\u30af\u3055\u308c\u305f\u57cb\u3081\u8fbc\u307f\u30df\u30e9\u30fc\u3092\u4fee\u6b63\u3057\u3001\u30c6\u30b9\u30c8\u3092\u518d\u6709\u52b9\u5316 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10257",children:"(#10257)"})]}),"\n",(0,r.jsxs)(e.li,{children:["Local Path Provisioner\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d0\u30f3\u30d7 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10268",children:"(#10268)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u5b9f\u969b\u306ewarningPeriod\u3092certmonitor\u3067\u4f7f\u7528\u3059\u308b\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10271",children:"(#10271)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u30ed\u30fc\u30ab\u30eb\u30ed\u30fc\u30c9\u30d0\u30e9\u30f3\u30b5\u30fc\u3092\u30d0\u30a4\u30d1\u30b9\u3059\u308b\u30d0\u30b0\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10280",children:"(#10280)"})]}),"\n",(0,r.jsxs)(e.li,{children:["etcd s3\u8a2d\u5b9a\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u306e\u305f\u3081\u306eADR\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9364",children:"(#9364)"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"isValidResolvConf"}),"\u306e\u30c6\u30b9\u30c8\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10302",children:"(#10302)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u4fdd\u6301etcd-s3\u30d5\u30a9\u30eb\u30c0\u4fee\u6b63\u306e\u8ffd\u52a0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10293",children:"(#10293)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u6700\u65b0\u306e\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u3092\u542b\u3080\u3088\u3046\u306bGHA golang\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u62e1\u5f35 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10307",children:"(#10307)"})]}),"\n",(0,r.jsxs)(e.li,{children:["loadbalancer.nextServer\u3067\u306e\u30ec\u30fc\u30b9\u30b3\u30f3\u30c7\u30a3\u30b7\u30e7\u30f3\u30d1\u30cb\u30c3\u30af\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10318",children:"(#10318)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30bf\u30a4\u30dd\u4fee\u6b63\u3001",(0,r.jsx)(e.code,{children:"rancher/permissions"}),"\u3092\u4f7f\u7528 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10296",children:"(#10296)"})]}),"\n",(0,r.jsxs)(e.li,{children:["Kubernetes\u3092v1.30.2\u306b\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10349",children:"(#10349)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\u30dd\u30fc\u30c8\u304capiserver\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u554f\u984c\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10352",children:"(#10352)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u8907\u6570\u306e\u540c\u6642\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u304c\u8a31\u53ef\u3055\u308c\u308b\u554f\u984c\u306e\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10372",children:"(#10372)"})]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.h2,{id:"\u30ea\u30ea\u30fc\u30b9-v1301k3s1",children:["\u30ea\u30ea\u30fc\u30b9 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.1+k3s1",children:"v1.30.1+k3s1"})]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3001Kubernetes\u3092v1.30.1\u306b\u66f4\u65b0\u3057\u3001\u591a\u304f\u306e\u554f\u984c\u3092\u4fee\u6b63\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1300",children:"Kubernetes \u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"v1300k3s1-\u4ee5\u964d\u306e\u5909\u66f4\u70b9",children:"v1.30.0+k3s1 \u4ee5\u964d\u306e\u5909\u66f4\u70b9:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["e2e \u30c6\u30b9\u30c8\u3067\u975e\u63a8\u5968\u306e ruby \u95a2\u6570\u3092\u7f6e\u304d\u63db\u3048 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10084",children:"(#10084)"})]}),"\n",(0,r.jsxs)(e.li,{children:["1.30 \u306b\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10097",children:"(#10097)"})]}),"\n",(0,r.jsxs)(e.li,{children:["461 \u306b\u5bfe\u51e6 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10112",children:"(#10112)"})]}),"\n",(0,r.jsxs)(e.li,{children:["v1.30.1-k3s1 \u3068 Go 1.22.2 \u306b\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10105",children:"(#10105)"})]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.h2,{id:"\u30ea\u30ea\u30fc\u30b9-v1300k3s1",children:["\u30ea\u30ea\u30fc\u30b9 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.30.0+k3s1",children:"v1.30.0+k3s1"})]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u30ea\u30ea\u30fc\u30b9\u306f\u3001v1.30 \u7cfb\u5217\u306e K3S \u306e\u6700\u521d\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u3059\u3002\u3053\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u306f Kubernetes \u3092 v1.30.0 \u306b\u66f4\u65b0\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1290",children:"Kubernetes \u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"v1294k3s1-\u4ee5\u964d\u306e\u5909\u66f4\u70b9",children:"v1.29.4+k3s1 \u4ee5\u964d\u306e\u5909\u66f4\u70b9:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Kubernetes V1.30.0-k3s1 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10063",children:"(#10063)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u5b89\u5b9a\u30c1\u30e3\u30f3\u30cd\u30eb\u3092 v1.29.4+k3s1 \u306b\u66f4\u65b0 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10031",children:"(#10031)"})]}),"\n",(0,r.jsxs)(e.li,{children:["E2E Split Server \u3092 Drone \u306b\u8ffd\u52a0\u3057\u3001Drone \u3067\u306e\u4e26\u5217\u30c6\u30b9\u30c8\u3092\u30b5\u30dd\u30fc\u30c8 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/9940",children:"(#9940)"})]}),"\n",(0,r.jsxs)(e.li,{children:["E2E opensuse leap \u3092 15.6 \u306b\u30d0\u30f3\u30d7\u3057\u3001btrfs \u30c6\u30b9\u30c8\u3092\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10057",children:"(#10057)"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u975e\u63a8\u5968\u306e ",(0,r.jsx)(e.code,{children:"pod-infra-container-image"})," kubelet \u30d5\u30e9\u30b0\u3092\u524a\u9664 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/7409",children:"(#7409)"})]}),"\n",(0,r.jsxs)(e.li,{children:["e2e \u30c6\u30b9\u30c8\u3092\u4fee\u6b63 ",(0,r.jsx)(e.a,{href:"https://github.com/k3s-io/k3s/pull/10061",children:"(#10061)"})]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{})]})}function a(s={}){const{wrapper:e}={...(0,h.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(o,{...s})}):o(s)}},8453:(s,e,i)=>{i.d(e,{R:()=>t,x:()=>n});var l=i(6540);const r={},h=l.createContext(r);function t(s){const e=l.useContext(h);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function n(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:t(s.components),l.createElement(h.Provider,{value:e},s.children)}}}]);