"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||i[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const l={title:"\u5377\u548c\u5b58\u50a8",weight:30},o=void 0,s={unversionedId:"storage/storage",id:"storage/storage",title:"\u5377\u548c\u5b58\u50a8",description:"\u5728\u90e8\u7f72\u9700\u8981\u4fdd\u200b\u200b\u7559\u6570\u636e\u7684\u5e94\u7528\u65f6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u6301\u4e45\u5b58\u50a8\u3002\u6301\u4e45\u5b58\u50a8\u5141\u8bb8\u4f60\u5728\u8fd0\u884c\u5e94\u7528\u7684 pod \u4e4b\u5916\u5b58\u50a8\u5e94\u7528\u6570\u636e\u3002\u5373\u4f7f\u8fd0\u884c\u5e94\u7528\u7684 pod \u53d1\u751f\u6545\u969c\uff0c\u8fd9\u79cd\u5b58\u50a8\u65b9\u5f0f\u4e5f\u80fd\u8ba9\u4f60\u4fdd\u7559\u5e94\u7528\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/storage/storage.md",sourceDirName:"storage",slug:"/storage/",permalink:"/docs-k3s/zh/storage/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/storage/storage.md",tags:[],version:"current",lastUpdatedAt:1693248667,formattedLastUpdatedAt:"2023\u5e748\u670828\u65e5",frontMatter:{title:"\u5377\u548c\u5b58\u50a8",weight:30},sidebar:"mySidebar",previous:{title:"\u81ea\u52a8\u5347\u7ea7",permalink:"/docs-k3s/zh/upgrades/automated"},next:{title:"\u7f51\u7edc",permalink:"/docs-k3s/zh/networking/"}},p={},c=[{value:"K3s \u5b58\u50a8\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f",id:"k3s-\u5b58\u50a8\u6709\u4ec0\u4e48\u4e0d\u540c",level:2},{value:"\u8bbe\u7f6e\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f",id:"\u8bbe\u7f6e\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f",level:2},{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3},{value:"\u8bbe\u7f6e Longhorn",id:"\u8bbe\u7f6e-longhorn",level:2},{value:"pvc.yaml",id:"pvcyaml-1",level:3},{value:"pod.yaml",id:"podyaml-1",level:3}],u={toc:c};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u90e8\u7f72\u9700\u8981\u4fdd\u200b\u200b\u7559\u6570\u636e\u7684\u5e94\u7528\u65f6\uff0c\u4f60\u9700\u8981\u521b\u5efa\u6301\u4e45\u5b58\u50a8\u3002\u6301\u4e45\u5b58\u50a8\u5141\u8bb8\u4f60\u5728\u8fd0\u884c\u5e94\u7528\u7684 pod \u4e4b\u5916\u5b58\u50a8\u5e94\u7528\u6570\u636e\u3002\u5373\u4f7f\u8fd0\u884c\u5e94\u7528\u7684 pod \u53d1\u751f\u6545\u969c\uff0c\u8fd9\u79cd\u5b58\u50a8\u65b9\u5f0f\u4e5f\u80fd\u8ba9\u4f60\u4fdd\u7559\u5e94\u7528\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u6301\u4e45\u5377 (PV) \u662f Kubernetes \u96c6\u7fa4\u4e2d\u7684\u4e00\u5757\u5b58\u50a8\uff0c\u800c\u6301\u4e45\u5377\u58f0\u660e (PVC) \u662f\u5bf9\u5b58\u50a8\u7684\u8bf7\u6c42\u3002\u6709\u5173 PV \u548c PVC \u5de5\u4f5c\u539f\u7406\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"Kubernetes \u5b58\u50a8\u76f8\u5173\u7684\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f\u6216 ",(0,r.kt)("a",{parentName:"p",href:"#%E8%AE%BE%E7%BD%AE-longhorn"},"Longhorn")," \u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8\u3002"),(0,r.kt)("h2",{id:"k3s-\u5b58\u50a8\u6709\u4ec0\u4e48\u4e0d\u540c"},"K3s \u5b58\u50a8\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f"),(0,r.kt)("p",null,"K3s \u5220\u9664\u4e86\u51e0\u4e2a\u53ef\u9009\u7684\u5377\u63d2\u4ef6\u548c\u6240\u6709\u5185\u7f6e\u7684\uff08\u6709\u65f6\u79f0\u4e3a\u201cin-tree\u201d\uff09\u4e91\u63d0\u4f9b\u5546\u3002\u6211\u4eec\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u8ba9\u4e8c\u8fdb\u5236\u6587\u4ef6\u66f4\u5c0f\uff0c\u5e76\u907f\u514d\u5bf9\u7b2c\u4e09\u65b9\u4e91\u6216\u6570\u636e\u4e2d\u5fc3\u6280\u672f\u548c\u670d\u52a1\u7684\u4f9d\u8d56\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u4f9d\u8d56\u5728\u8bb8\u591a K3s \u7528\u4f8b\u4e2d\u53ef\u80fd\u4e0d\u53ef\u7528\u3002\u6211\u4eec\u4e4b\u6240\u4ee5\u80fd\u591f\u8fd9\u6837\u505a\uff0c\u662f\u56e0\u4e3a\u5b83\u4eec\u7684\u79fb\u9664\u65e2\u4e0d\u4f1a\u5f71\u54cd\u6838\u5fc3 Kubernetes \u529f\u80fd\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5377\u63d2\u4ef6\u5df2\u4ece K3s \u4e2d\u5220\u9664\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cephfs"),(0,r.kt)("li",{parentName:"ul"},"fc"),(0,r.kt)("li",{parentName:"ul"},"flocker"),(0,r.kt)("li",{parentName:"ul"},"git_repo"),(0,r.kt)("li",{parentName:"ul"},"glusterfs"),(0,r.kt)("li",{parentName:"ul"},"portworx"),(0,r.kt)("li",{parentName:"ul"},"quobyte"),(0,r.kt)("li",{parentName:"ul"},"rbd"),(0,r.kt)("li",{parentName:"ul"},"storageos")),(0,r.kt)("p",null,"\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u6709\u53ef\u4ee5\u4e0e K3s \u4e00\u8d77\u4f7f\u7528\u7684\u6811\u5916\u66ff\u4ee3\u65b9\u6848\uff1aKubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"Container Storage Interface (CSI)")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/"},"Cloud Provider Interface (CPI)"),"\u3002"),(0,r.kt)("p",null,"Kubernetes \u7ef4\u62a4\u4eba\u5458\u6b63\u5728\u79ef\u6781\u5730\u5c06\u6811\u5185\u5377\u63d2\u4ef6\u8fc1\u79fb\u5230 CSI \u9a71\u52a8\u7a0b\u5e8f\u3002\u6709\u5173\u6b64\u8fc1\u79fb\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/"},"\u6b64\u5904"),"\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f"},"\u8bbe\u7f6e\u672c\u5730\u5b58\u50a8\u63d0\u4f9b\u7a0b\u5e8f"),(0,r.kt)("p",null,"K3s \u81ea\u5e26 Rancher \u7684 Local Path Provisioner\uff0c\u8fd9\u4f7f\u5f97\u80fd\u591f\u4f7f\u7528\u5404\u81ea\u8282\u70b9\u4e0a\u7684\u672c\u5730\u5b58\u50a8\u6765\u5f00\u7bb1\u5373\u7528\u5730\u521b\u5efa\u6301\u4e45\u5377\u58f0\u660e\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a hostPath \u652f\u6301\u7684\u6301\u4e45\u5377\u58f0\u660e\u548c\u4e00\u4e2a\u4f7f\u7528\u5b83\u7684 Pod\uff1a"),(0,r.kt)("h3",{id:"pvcyaml"},"pvc.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,r.kt)("h3",{id:"podyaml"},"pod.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: local-path-pvc\n")),(0,r.kt)("p",null,"\u5e94\u7528 yaml\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,r.kt)("p",null,"\u786e\u8ba4\u521b\u5efa\u4e86 PV \u548c PVC\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,r.kt)("p",null,"\u72b6\u6001\u90fd\u5e94\u8be5\u662f Bound\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e-longhorn"},"\u8bbe\u7f6e Longhorn"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Longhorn \u4e0d\u652f\u6301 ARM32\u3002")),(0,r.kt)("p",null,"K3s \u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn"},"Longhorn"),"\uff0c\u8fd9\u662f\u7528\u4e8e Kubernetes \u7684\u5f00\u6e90\u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/latest/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u5e94\u7528 longhorn.yaml \u6765\u5b89\u88c5 Longhorn\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.5.1/deploy/longhorn.yaml\n")),(0,r.kt)("p",null,"Longhorn \u5c06\u5b89\u88c5\u5728\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"longhorn-system")," \u4e2d\u3002"),(0,r.kt)("p",null,"\u5e94\u7528 yaml \u6765\u521b\u5efa PVC \u548c Pod\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n")),(0,r.kt)("h3",{id:"pvcyaml-1"},"pvc.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n")),(0,r.kt)("h3",{id:"podyaml-1"},"pod.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n  - name: volume-test\n    image: nginx:stable-alpine\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: volv\n      mountPath: /data\n    ports:\n    - containerPort: 80\n  volumes:\n  - name: volv\n    persistentVolumeClaim:\n      claimName: longhorn-volv-pvc\n")),(0,r.kt)("p",null,"\u786e\u8ba4\u521b\u5efa\u4e86 PV \u548c PVC\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\nkubectl get pvc\n")),(0,r.kt)("p",null,"\u72b6\u6001\u90fd\u5e94\u8be5\u662f Bound\u3002"))}i.isMDXComponent=!0}}]);