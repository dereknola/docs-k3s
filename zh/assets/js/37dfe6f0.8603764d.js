"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[332],{5092:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"cli/etcd-snapshot","title":"etcd-snapshot","description":"\u4ece v1.19.1+k3s1 \u8d77\u53ef\u7528","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/etcd-snapshot.md","sourceDirName":"cli","slug":"/cli/etcd-snapshot","permalink":"/docs-k3s/zh/cli/etcd-snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/cli/etcd-snapshot.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"etcd-snapshot"},"sidebar":"mySidebar","previous":{"title":"certificate","permalink":"/docs-k3s/zh/cli/certificate"},"next":{"title":"secrets-encrypt","permalink":"/docs-k3s/zh/cli/secrets-encrypt"}}');var c=d(4848),r=d(8453);const t={title:"etcd-snapshot"},l="k3s etcd-snapshot",i={},h=[{value:"\u521b\u5efa\u5feb\u7167",id:"\u521b\u5efa\u5feb\u7167",level:4},{value:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",level:4},{value:"\u9009\u9879",id:"\u9009\u9879",level:4},{value:"S3 \u517c\u5bb9 API \u652f\u6301",id:"s3-\u517c\u5bb9-api-\u652f\u6301",level:4},{value:"Etcd \u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4",id:"etcd-\u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4",level:4}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{TabItem:d,Tabs:n}=s;return d||o("TabItem",!0),n||o("Tabs",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"k3s-etcd-snapshot",children:"k3s etcd-snapshot"})}),"\n",(0,c.jsx)(s.admonition,{title:"\u7248\u672c",type:"info",children:(0,c.jsxs)(s.p,{children:["\u4ece ",(0,c.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1",children:"v1.19.1+k3s1"})," \u8d77\u53ef\u7528"]})}),"\n",(0,c.jsx)(s.p,{children:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa K3s \u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u7684\u5907\u4efd\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\u3002"}),"\n",(0,c.jsx)(s.h4,{id:"\u521b\u5efa\u5feb\u7167",children:"\u521b\u5efa\u5feb\u7167"}),"\n",(0,c.jsxs)(s.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5feb\u7167\u5728\u7cfb\u7edf\u65f6\u95f4 00:00 \u548c 12:00 \u542f\u7528\uff0c\u4f1a\u4fdd\u7559 5 \u4e2a\u5feb\u7167\u3002\u8981\u914d\u7f6e\u5feb\u7167\u95f4\u9694\u6216\u4fdd\u7559\u5feb\u7167\u7684\u6570\u91cf\uff0c\u8bf7\u53c2\u9605",(0,c.jsx)(s.a,{href:"#%E9%80%89%E9%A1%B9",children:"\u9009\u9879"}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5feb\u7167\u76ee\u5f55\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(s.code,{children:"${data-dir}/server/db/snapshots"}),"\u3002data-dir \u7684\u9ed8\u8ba4\u503c\u4e3a ",(0,c.jsx)(s.code,{children:"/var/lib/rancher/k3s"}),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,c.jsx)(s.code,{children:"--data-dir"})," \u6807\u5fd7\u6765\u66f4\u6539\u5b83\u3002"]}),"\n",(0,c.jsx)(s.h4,{id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4",children:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4"}),"\n",(0,c.jsxs)(s.p,{children:["\u4f7f\u7528\u5907\u4efd\u6062\u590d K3s \u65f6\uff0c\u65e7\u7684\u6570\u636e\u76ee\u5f55\u5c06\u88ab\u79fb\u52a8\u5230 ",(0,c.jsx)(s.code,{children:"${data-dir}/server/db/etcd-old/"}),"\u3002\u7136\u540e K3s \u5c06\u5c1d\u8bd5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u76ee\u5f55\u6765\u6062\u590d\u5feb\u7167\uff0c\u7136\u540e\u4f7f\u7528\u5177\u6709\u4e00\u4e2a etcd \u6210\u5458\u7684\u65b0 K3s \u96c6\u7fa4\u542f\u52a8 etcd\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\uff1a"}),"\n",(0,c.jsxs)(n,{children:[(0,c.jsxs)(d,{value:"\u5355\u670d\u52a1\u5668",children:[(0,c.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"--cluster-reset"})," \u9009\u9879\u8fd0\u884c K3s\uff0c\u540c\u65f6\u6307\u5b9a ",(0,c.jsx)(s.code,{children:"--cluster-reset-restore-path"}),"\uff1a"]}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n"})}),(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"\u7ed3\u679c"}),"\uff1a\u65e5\u5fd7\u4e2d\u7684\u4e00\u6761\u6d88\u606f\u8868\u793a K3s \u53ef\u4ee5\u5728\u6ca1\u6709\u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u65b0\u542f\u52a8\u3002\u518d\u6b21\u542f\u52a8 K3s\uff0cK3s \u5e94\u8be5\u4f1a\u6210\u529f\u8fd0\u884c\u5e76\u901a\u8fc7\u6307\u5b9a\u7684\u5feb\u7167\u6062\u590d\u3002"]})]}),(0,c.jsxs)(d,{value:"\u9ad8\u53ef\u7528",children:[(0,c.jsxs)(s.p,{children:["\u5728\u6b64\u793a\u4f8b\u4e2d\u6709 3 \u4e2a Server\uff0c\u5206\u522b\u662f ",(0,c.jsx)(s.code,{children:"S1"}),"\u3001",(0,c.jsx)(s.code,{children:"S2"}),"\u548c ",(0,c.jsx)(s.code,{children:"S3"}),"\u3002\u5feb\u7167\u4f4d\u4e8e ",(0,c.jsx)(s.code,{children:"S1"})," \u4e0a\u3002"]}),(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["\u5728 S1 \u4e0a\uff0c\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"--cluster-reset"})," \u9009\u9879\u8fd0\u884c K3s\uff0c\u540c\u65f6\u6307\u5b9a ",(0,c.jsx)(s.code,{children:"--cluster-reset-restore-path"}),"\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"\u7ed3\u679c"}),"\uff1a\u65e5\u5fd7\u4e2d\u7684\u4e00\u6761\u6d88\u606f\u8868\u793a K3s \u53ef\u4ee5\u5728\u6ca1\u6709\u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u65b0\u542f\u52a8\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["\u5728 S2 \u548c S3 \u4e0a\uff0c\u505c\u6b62 K3s\u3002\u7136\u540e\u5220\u9664\u6570\u636e\u76ee\u5f55 ",(0,c.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/db/"}),"\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"systemctl stop k3s\nrm -rf /var/lib/rancher/k3s/server/db/\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5728 S1 \u4e0a\uff0c\u518d\u6b21\u542f\u52a8 K3s\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"\u5728 S2 \u548c S3 \u4e0a\uff0c\u518d\u6b21\u542f\u52a8 K3s \u4ee5\u52a0\u5165\u6062\u590d\u540e\u7684\u96c6\u7fa4\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,c.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6216\u8005",(0,c.jsx)(s.a,{href:"/docs-k3s/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\uff08\u53ef\u80fd\u66f4\u5bb9\u6613\u4f7f\u7528\uff09\u4f20\u5165\u8fd9\u4e9b\u9009\u9879\u3002"]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u9009\u9879"}),(0,c.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-disable-snapshots"})}),(0,c.jsx)(s.td,{children:"\u7981\u7528\u81ea\u52a8 etcd \u5feb\u7167"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"--etcd-snapshot-schedule-cron"})," value"]}),(0,c.jsxs)(s.td,{children:["cron \u89c4\u8303\u4e2d\u7684\u5feb\u7167\u95f4\u9694\u65f6\u95f4\u3002eg. \u6bcf 5 \u5c0f\u65f6 ",(0,c.jsx)(s.code,{children:"0 */5 * * *"}),"\uff08\u9ed8\u8ba4\u503c\uff1a",(0,c.jsx)(s.code,{children:"0 */12 * * *"}),"\uff09"]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"--etcd-snapshot-retention"})," value"]}),(0,c.jsx)(s.td,{children:"\u8981\u4fdd\u7559\u7684\u5feb\u7167\u6570\u91cf\uff08\u9ed8\u8ba4\u503c\uff1a5\uff09"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"--etcd-snapshot-dir"})," value"]}),(0,c.jsxs)(s.td,{children:["\u4fdd\u5b58\u6570\u636e\u5e93\u5feb\u7167\u7684\u76ee\u5f55\u3002\uff08\u9ed8\u8ba4\u4f4d\u7f6e\uff1a",(0,c.jsx)(s.code,{children:"${data-dir}/db/snapshots"}),"\uff09"]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--cluster-reset"})}),(0,c.jsxs)(s.td,{children:["\u5fd8\u8bb0\u6240\u6709\u5bf9\u7b49\u70b9\uff0c\u6210\u4e3a\u65b0\u96c6\u7fa4\u7684\u552f\u4e00\u6210\u5458\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf ",(0,c.jsx)(s.code,{children:"[$K3S_CLUSTER_RESET]"})," \u8fdb\u884c\u8bbe\u7f6e\u3002"]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"--cluster-reset-restore-path"})," value"]}),(0,c.jsx)(s.td,{children:"\u8981\u6062\u590d\u7684\u5feb\u7167\u6587\u4ef6\u8def\u5f84"})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"s3-\u517c\u5bb9-api-\u652f\u6301",children:"S3 \u517c\u5bb9 API \u652f\u6301"}),"\n",(0,c.jsx)(s.p,{children:"K3s \u652f\u6301\u5411\u5177\u6709 S3 \u517c\u5bb9 API \u7684\u7cfb\u7edf\u5199\u5165 etcd \u5feb\u7167\u548c\u4ece\u7cfb\u7edf\u4e2d\u6062\u590d etcd \u5feb\u7167\u3002S3 \u652f\u6301\u6309\u9700\u548c\u8ba1\u5212\u5feb\u7167\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u4ee5\u4e0b\u53c2\u6570\u5df2\u6dfb\u52a0\u5230 ",(0,c.jsx)(s.code,{children:"server"})," \u5b50\u547d\u4ee4\u4e2d\u3002",(0,c.jsx)(s.code,{children:"etcd-snapshot"})," \u5b50\u547d\u4ee4\u4e5f\u5b58\u5728\u8fd9\u4e9b\u6807\u5fd7\uff0c\u4f46\u662f\u5220\u9664\u4e86 ",(0,c.jsx)(s.code,{children:"--etcd-s3"})," \u90e8\u5206\u4ee5\u907f\u514d\u5197\u4f59\u3002"]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u9009\u9879"}),(0,c.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3"})}),(0,c.jsx)(s.td,{children:"\u542f\u7528\u5907\u4efd\u5230 S3"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-endpoint"})}),(0,c.jsx)(s.td,{children:"S3 \u7aef\u70b9\u7f51\u5740"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-endpoint-ca"})}),(0,c.jsx)(s.td,{children:"S3 \u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\uff0c\u7528\u4e8e\u8fde\u63a5\u5230 S3 \u7aef\u70b9"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-skip-ssl-verify"})}),(0,c.jsx)(s.td,{children:"\u7981\u7528 S3 SSL \u8bc1\u4e66\u9a8c\u8bc1"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-access-key"})}),(0,c.jsx)(s.td,{children:"S3 access key"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-secret-key"})}),(0,c.jsx)(s.td,{children:"S3 secret key"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-bucket"})}),(0,c.jsx)(s.td,{children:"S3 \u5b58\u50a8\u6876\u540d\u79f0"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-region"})}),(0,c.jsx)(s.td,{children:"S3 \u533a\u57df/\u5b58\u50a8\u6876\u4f4d\u7f6e\uff08\u53ef\u9009\uff09\u3002\u9ed8\u8ba4\u4e3a us-east-1"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"--etcd-s3-folder"})}),(0,c.jsx)(s.td,{children:"S3 \u6587\u4ef6\u5939"})]})]})]}),"\n",(0,c.jsx)(s.p,{children:"\u6267\u884c\u6309\u9700\u7684 etcd \u5feb\u7167\u5e76\u5c06\u5176\u4fdd\u5b58\u5230 S3\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u8981\u4ece S3 \u4e2d\u6267\u884c\u6309\u9700\u7684 etcd \u5feb\u7167\u8fd8\u539f\uff0c\u9996\u5148\u786e\u4fdd K3s \u6ca1\u6709\u8fd0\u884c\u3002\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n"})}),"\n",(0,c.jsx)(s.h4,{id:"etcd-\u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4",children:"Etcd \u5feb\u7167\u548c\u6062\u590d\u5b50\u547d\u4ee4"}),"\n",(0,c.jsx)(s.p,{children:"K3s \u652f\u6301\u7528\u4e8e\u5904\u7406 etcd \u5feb\u7167\u7684\u4e00\u7ec4\u5b50\u547d\u4ee4\u3002"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u5b50\u547d\u4ee4"}),(0,c.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"delete"}),(0,c.jsx)(s.td,{children:"\u5220\u9664\u7ed9\u5b9a\u7684\u5feb\u7167"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"ls, list, l"}),(0,c.jsx)(s.td,{children:"\u5217\u51fa\u5feb\u7167"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"prune"}),(0,c.jsx)(s.td,{children:"\u5220\u9664\u8d85\u8fc7\u914d\u7f6e\u7684\u4fdd\u7559\u6570\u91cf\u7684\u5feb\u7167"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"save"}),(0,c.jsx)(s.td,{children:"\u89e6\u53d1\u5373\u65f6 etcd \u5feb\u7167"})]})]})]}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"save"})," \u5b50\u547d\u4ee4\u4e0e ",(0,c.jsx)(s.code,{children:"k3s etcd-snapshot"})," \u76f8\u540c\u3002\u540e\u8005\u6700\u7ec8\u5c06\u88ab\u524d\u8005\u53d6\u4ee3\u3002"]})}),"\n",(0,c.jsx)(s.p,{children:"\u65e0\u8bba etcd \u5feb\u7167\u662f\u5b58\u50a8\u5728\u672c\u5730\u8fd8\u662f\u5b58\u50a8\u5728 S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u4e2d\uff0c\u8fd9\u4e9b\u547d\u4ee4\u90fd\u5c06\u6309\u9884\u671f\u6267\u884c\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u6709\u5173 etcd \u5feb\u7167\u5b50\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8fd0\u884c ",(0,c.jsx)(s.code,{children:"k3s etcd-snapshot"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u4ece S3 \u4e2d\u5220\u9664\u5feb\u7167\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4f7f\u7528\u9ed8\u8ba4\u4fdd\u7559\u7b56\u7565 (5) \u4fee\u526a\u672c\u5730\u5feb\u7167\u3002",(0,c.jsx)(s.code,{children:"prune"})," \u5b50\u547d\u4ee4\u63a5\u53d7\u989d\u5916\u7684\u6807\u5fd7 ",(0,c.jsx)(s.code,{children:"--snapshot-retention"}),"\uff0c\u5141\u8bb8\u8986\u76d6\u9ed8\u8ba4\u4fdd\u7559\u7b56\u7565\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot prune\n"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot prune --snapshot-retention 10\n"})})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,s,d)=>{d.d(s,{R:()=>t,x:()=>l});var n=d(6540);const c={},r=n.createContext(c);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);