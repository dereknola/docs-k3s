"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3583],{7348:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>i});const l=JSON.parse('{"id":"storage","title":"\ubcfc\ub968\uacfc \uc800\uc7a5\uc18c","description":"\ub370\uc774\ud130\ub97c \uc720\uc9c0\ud574\uc57c \ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud560 \ub54c\ub294 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud37c\uc2dc\uc2a4\ud134\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ud30c\ub4dc \uc678\ubd80\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc2a4\ud1a0\ub9ac\uc9c0 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud30c\ub4dc\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub370\uc774\ud130\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","source":"@site/i18n/kr/docusaurus-plugin-content-docs/current/storage.md","sourceDirName":".","slug":"/storage","permalink":"/docs-k3s/kr/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/storage.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"\ubcfc\ub968\uacfc \uc800\uc7a5\uc18c"},"sidebar":"mySidebar","previous":{"title":"\ud074\ub7ec\uc2a4\ud130 \uc811\uadfc","permalink":"/docs-k3s/kr/cluster-access"},"next":{"title":"Networking","permalink":"/docs-k3s/kr/networking/"}}');var r=s(4848),a=s(8453);const t={title:"\ubcfc\ub968\uacfc \uc800\uc7a5\uc18c"},o=void 0,c={},i=[{value:"K3s \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",id:"k3s-\uc2a4\ud1a0\ub9ac\uc9c0\uc758-\ucc28\uc774\uc810\uc740-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"\ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uae09\uc790 \uc124\uc815\ud558\uae30",id:"\ub85c\uceec-\uc2a4\ud1a0\ub9ac\uc9c0-\uacf5\uae09\uc790-\uc124\uc815\ud558\uae30",level:2},{value:"pvc.yaml",id:"pvcyaml",level:3},{value:"pod.yaml",id:"podyaml",level:3},{value:"Longhorn \uad6c\uc131\ud558\uae30",id:"longhorn-\uad6c\uc131\ud558\uae30",level:2},{value:"pvc.yaml",id:"pvcyaml-1",level:3},{value:"pod.yaml",id:"podyaml-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\ub370\uc774\ud130\ub97c \uc720\uc9c0\ud574\uc57c \ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud560 \ub54c\ub294 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ud37c\uc2dc\uc2a4\ud134\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ud30c\ub4dc \uc678\ubd80\uc5d0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc2a4\ud1a0\ub9ac\uc9c0 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud30c\ub4dc\uc5d0 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub370\uc774\ud130\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968(PV: persistent volume)\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc870\uac01\uc774\uba70, \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968 \ud074\ub808\uc784(PVC: persistent volume claim)\uc740 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud55c \uc694\uccad\uc785\ub2c8\ub2e4. PV\uc640 PVC\uc758 \uc791\ub3d9 \ubc29\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/ko/docs/concepts/storage/volumes/",children:"\uc2a4\ud1a0\ub9ac\uc9c0"})," \uacf5\uc2dd \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \ud398\uc774\uc9c0\ub294 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \uc81c\uacf5\uc790 \ub610\ub294 [\ub871\ud63c(#setting-up-longhorn)]\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud37c\uc2dc\uc2a4\ud134\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"k3s-\uc2a4\ud1a0\ub9ac\uc9c0\uc758-\ucc28\uc774\uc810\uc740-\ubb34\uc5c7\uc778\uac00\uc694",children:"K3s \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,r.jsx)(n.p,{children:'K3s\ub294 \uba87 \uac00\uc9c0 \uc120\ud0dd\uc801 \ubcfc\ub968 \ud50c\ub7ec\uadf8\uc778\uacfc \ubaa8\ub4e0 \ub0b4\uc7a5("in-tree"\ub77c\uace0\ub3c4 \ud568) \ud074\ub77c\uc6b0\ub4dc \uc81c\uacf5\uc5c5\uccb4\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4. \uc774\ub294 \ub354 \uc791\uc740 \ubc14\uc774\ub108\ub9ac \ud06c\uae30\ub97c \ub2ec\uc131\ud558\uace0 \ub9ce\uc740 K3s \uc0ac\uc6a9 \uc0ac\ub840\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ud0c0\uc0ac \ud074\ub77c\uc6b0\ub4dc \ub610\ub294 \ub370\uc774\ud130\uc13c\ud130 \uae30\uc220 \ubc0f \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \uc758\uc874\uc744 \ud53c\ud558\uae30 \uc704\ud55c \uac83\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud50c\ub7ec\uadf8\uc778\uc744 \uc81c\uac70\ud574\ub3c4 \ud575\uc2ec Kubernetes \uae30\ub2a5\uc774\ub098 \uc801\ud569\uc131\uc5d0\ub294 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc774\ub807\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c \ubcfc\ub968 \ud50c\ub7ec\uadf8\uc778\uc740 K3s\uc5d0\uc11c \uc81c\uac70\ub418\uc5c8\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"cephfs"}),"\n",(0,r.jsx)(n.li,{children:"fc"}),"\n",(0,r.jsx)(n.li,{children:"flocker"}),"\n",(0,r.jsx)(n.li,{children:"git_repo"}),"\n",(0,r.jsx)(n.li,{children:"glusterfs"}),"\n",(0,r.jsx)(n.li,{children:"portworx"}),"\n",(0,r.jsx)(n.li,{children:"quobyte"}),"\n",(0,r.jsx)(n.li,{children:"rbd"}),"\n",(0,r.jsx)(n.li,{children:"storageos"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["K3s\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud2b8\ub9ac \uc678 \ub300\uc548\uc778 \ub450 \uad6c\uc131 \uc694\uc18c\uac00 \uc788\uc2b5\ub2c8\ub2e4:\n\ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,r.jsx)(n.a,{href:"https://github.com/container-storage-interface/spec/blob/master/spec.md",children:"\ucee8\ud14c\uc774\ub108 \uc2a4\ud1a0\ub9ac\uc9c0 \uc778\ud130\ud398\uc774\uc2a4(CSI)"})," \ubc0f ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/running-cloud-controller/",children:"\ud074\ub77c\uc6b0\ub4dc \ud504\ub85c\ubc14\uc774\ub354 \uc778\ud130\ud398\uc774\uc2a4(CPI)"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc720\uc9c0 \uad00\ub9ac\uc790\ub294 \uc778-\ud2b8\ub9ac \ubcfc\ub968 \ud50c\ub7ec\uadf8\uc778\uc744 CSI \ub4dc\ub77c\uc774\ubc84\ub85c \uc801\uadf9\uc801\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/blog/2021/12/10/storage-in-tree-to-csi-migration-status-update/",children:"\uc5ec\uae30"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(n.h2,{id:"\ub85c\uceec-\uc2a4\ud1a0\ub9ac\uc9c0-\uacf5\uae09\uc790-\uc124\uc815\ud558\uae30",children:"\ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0 \uacf5\uae09\uc790 \uc124\uc815\ud558\uae30"}),"\n",(0,r.jsxs)(n.p,{children:["K3s\ub294 \ub79c\ucc98\uc758 \ub85c\uceec \uacbd\ub85c \ud504\ub85c\ube44\uc800\ub108\uc640 \ud568\uaed8 \uc81c\uacf5\ub418\uba70, \uc774\ub97c \ud1b5\ud574 \uac01 \ub178\ub4dc\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc601\uad6c \ubcfc\ub968 \ud074\ub808\uc784(persistent volume claims)\uc744 \uc989\uc2dc \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c\ub294 \uac04\ub2e8\ud55c \uc608\uc81c\ub97c \ub2e4\ub8e8\uaca0\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uc2dd \ubb38\uc11c ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/local-path-provisioner/blob/master/README.md#usage",children:"\uc5ec\uae30"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(n.p,{children:"\ud638\uc2a4\ud2b8 \uacbd\ub85c \uc9c0\uc6d0 \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968 \ud074\ub808\uc784\uacfc \uc774\ub97c \ud65c\uc6a9\ud560 \ud30c\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.h3,{id:"pvcyaml",children:"pvc.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: local-path-pvc\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 2Gi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"podyaml",children:"pod.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n    - name: volume-test\n      image: nginx:stable-alpine\n      imagePullPolicy: IfNotPresent\n      volumeMounts:\n        - name: volv\n          mountPath: /data\n      ports:\n        - containerPort: 80\n  volumes:\n    - name: volv\n      persistentVolumeClaim:\n        claimName: local-path-pvc\n"})}),"\n",(0,r.jsx)(n.p,{children:"yaml\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"PV \ubc0f PVC\uac00 \uc0dd\uc131\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pv\nkubectl get pvc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc0c1\ud0dc\ub294 \uac01\uac01 ",(0,r.jsx)(n.code,{children:"Bound"}),"\uc5ec\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h2,{id:"longhorn-\uad6c\uc131\ud558\uae30",children:"Longhorn \uad6c\uc131\ud558\uae30"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Longhorn\uc740 ARM32\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})}),"\n",(0,r.jsxs)(n.p,{children:["K3s\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc6a9 \uc624\ud508\uc18c\uc2a4 \ubd84\uc0b0\ud615 \ube14\ub85d \uc2a4\ud1a0\ub9ac\uc9c0 \uc2dc\uc2a4\ud15c\uc778 ",(0,r.jsx)(n.a,{href:"https://github.com/longhorn/longhorn",children:"Longhorn"}),"\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["\uc544\ub798\ub294 \uac04\ub2e8\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.jsx)(n.a,{href:"https://longhorn.io/docs/latest/",children:"\uacf5\uc2dd \ubb38\uc11c"}),"\ub97c \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"longhorn.yaml\uc744 \uc801\uc6a9\ud558\uc5ec Longhorn\uc744 \uc124\uce58\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/v1.5.1/deploy/longhorn.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Longhorn\uc740 \ub124\uc784\uc2a4\ud398\uc774\uc2a4 ",(0,r.jsx)(n.code,{children:"longhorn-system"}),"\uc5d0 \uc124\uce58\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"yaml\uc744 \uc801\uc6a9\ud558\uc5ec PVC\uc640 \ud30c\ub4dc\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create -f pvc.yaml\nkubectl create -f pod.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pvcyaml-1",children:"pvc.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-volv-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n"})}),"\n",(0,r.jsx)(n.h3,{id:"podyaml-1",children:"pod.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: volume-test\n  namespace: default\nspec:\n  containers:\n    - name: volume-test\n      image: nginx:stable-alpine\n      imagePullPolicy: IfNotPresent\n      volumeMounts:\n        - name: volv\n          mountPath: /data\n      ports:\n        - containerPort: 80\n  volumes:\n    - name: volv\n      persistentVolumeClaim:\n        claimName: longhorn-volv-pvc\n"})}),"\n",(0,r.jsx)(n.p,{children:"PV \ubc0f PVC\uac00 \uc0dd\uc131\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pv\nkubectl get pvc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc0c1\ud0dc\ub294 \uac01\uac01 ",(0,r.jsx)(n.code,{children:"Bound"}),"\uc5ec\uc57c \ud569\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var l=s(6540);const r={},a=l.createContext(r);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);