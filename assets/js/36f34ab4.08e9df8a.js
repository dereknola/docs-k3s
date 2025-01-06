"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7402],{7984:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"cli/etcd-snapshot","title":"etcd-snapshot","description":"This page documents the management of etcd snapshots using the k3s etcd-snapshot CLI, as well as configuration of etcd scheduled snapshots for the k3s server process, and use of the k3s server --cluster-reset command to reset etcd cluster membership and optionally restore etcd snapshots.","source":"@site/docs/cli/etcd-snapshot.md","sourceDirName":"cli","slug":"/cli/etcd-snapshot","permalink":"/docs-k3s/cli/etcd-snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/cli/etcd-snapshot.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"etcd-snapshot"},"sidebar":"mySidebar","previous":{"title":"certificate","permalink":"/docs-k3s/cli/certificate"},"next":{"title":"secrets-encrypt","permalink":"/docs-k3s/cli/secrets-encrypt"}}');var r=n(4848),d=n(8453);const c={title:"etcd-snapshot"},o="k3s etcd-snapshot",a={},i=[{value:"Creating Snapshots",id:"creating-snapshots",level:2},{value:"Scheduled Snapshots",id:"scheduled-snapshots",level:3},{value:"On-demand Snapshots",id:"on-demand-snapshots",level:3},{value:"Snapshot Configuration Options",id:"snapshot-configuration-options",level:3},{value:"S3 Compatible Object Store Support",id:"s3-compatible-object-store-support",level:3},{value:"S3 Configuration Secret Support",id:"s3-configuration-secret-support",level:3},{value:"Managing Snapshots",id:"managing-snapshots",level:2},{value:"ETCDSnapshotFile Custom Resources",id:"etcdsnapshotfile-custom-resources",level:3},{value:"Restoring Snapshots",id:"restoring-snapshots",level:2},{value:"Snapshot Restore Steps",id:"snapshot-restore-steps",level:3}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{TabItem:n,Tabs:t}=s;return n||p("TabItem",!0),t||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"k3s-etcd-snapshot",children:"k3s etcd-snapshot"})}),"\n",(0,r.jsxs)(s.p,{children:["This page documents the management of etcd snapshots using the ",(0,r.jsx)(s.code,{children:"k3s etcd-snapshot"})," CLI, as well as configuration of etcd scheduled snapshots for the ",(0,r.jsx)(s.code,{children:"k3s server"})," process, and use of the ",(0,r.jsx)(s.code,{children:"k3s server --cluster-reset"})," command to reset etcd cluster membership and optionally restore etcd snapshots."]}),"\n",(0,r.jsx)(s.h2,{id:"creating-snapshots",children:"Creating Snapshots"}),"\n",(0,r.jsxs)(s.p,{children:["Snapshots are saved to the path set by the server's ",(0,r.jsx)(s.code,{children:"--etcd-snapshot-dir"})," value, which defaults to ",(0,r.jsx)(s.code,{children:"${data-dir}/server/db/snapshots"}),". The data-dir value defaults to ",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s"})," and can be changed independently by setting the ",(0,r.jsx)(s.code,{children:"--data-dir"})," flag."]}),"\n",(0,r.jsx)(s.h3,{id:"scheduled-snapshots",children:"Scheduled Snapshots"}),"\n",(0,r.jsxs)(s.p,{children:["Scheduled snapshots are enabled by default, at 00:00 and 12:00 system time, with 5 snapshots retained. To configure the snapshot interval or the number of retained snapshots, refer to the ",(0,r.jsx)(s.a,{href:"#snapshot-configuration-options",children:"snapshot configuration options"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Scheduled snapshots have a name that starts with ",(0,r.jsx)(s.code,{children:"etcd-snapshot"}),", followed by the node name and timestamp. The base name can be changed with the ",(0,r.jsx)(s.code,{children:"--etcd-snapshot-name"})," flag in the server configuration."]}),"\n",(0,r.jsx)(s.h3,{id:"on-demand-snapshots",children:"On-demand Snapshots"}),"\n",(0,r.jsxs)(s.p,{children:["Snapshots can be saved manually by running the ",(0,r.jsx)(s.code,{children:"k3s etcd-snapshot save"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["On-demand snapshots have a name that starts with ",(0,r.jsx)(s.code,{children:"on-demand"}),", followed by the node name and timestamp. The base name can be changed with the ",(0,r.jsx)(s.code,{children:"--name"})," flag when saving the snapshot."]}),"\n",(0,r.jsx)(s.h3,{id:"snapshot-configuration-options",children:"Snapshot Configuration Options"}),"\n",(0,r.jsxs)(s.p,{children:["These flags can be passed to the ",(0,r.jsx)(s.code,{children:"k3s server"})," command to reset the etcd cluster, and optionally restore from a snapshot."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--cluster-reset"})}),(0,r.jsxs)(s.td,{children:["Forget all peers and become sole member of a new cluster. This can also be set with the environment variable ",(0,r.jsx)(s.code,{children:"[$K3S_CLUSTER_RESET]"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--cluster-reset-restore-path"})}),(0,r.jsx)(s.td,{children:"Path to snapshot file to be restored"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["These flags are valid for both ",(0,r.jsx)(s.code,{children:"k3s server"})," and ",(0,r.jsx)(s.code,{children:"k3s etcd-snapshot"}),", however when passed to ",(0,r.jsx)(s.code,{children:"k3s etcd-snapshot"})," the ",(0,r.jsx)(s.code,{children:"--etcd-"})," prefix can be omitted to avoid redundancy.\nFlags can be passed in with the command line, or in the ",(0,r.jsx)(s.a,{href:"/docs-k3s/installation/configuration#configuration-file",children:"configuration file,"})," which may be easier to use."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-disable-snapshots"})}),(0,r.jsx)(s.td,{children:"Disable scheduled snapshots"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-snapshot-compress"})}),(0,r.jsx)(s.td,{children:"Compress etcd snapshots"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-snapshot-dir"})}),(0,r.jsxs)(s.td,{children:["Directory to save db snapshots. (Default location: ",(0,r.jsx)(s.code,{children:"${data-dir}/db/snapshots"}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-snapshot-retention"})}),(0,r.jsx)(s.td,{children:"Number of snapshots to retain (default: 5)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-snapshot-schedule-cron"})}),(0,r.jsxs)(s.td,{children:["Snapshot interval time in cron spec. eg. every 5 hours ",(0,r.jsx)(s.code,{children:"0 */5 * * *"})," (default: ",(0,r.jsx)(s.code,{children:"0 */12 * * *"}),")"]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"s3-compatible-object-store-support",children:"S3 Compatible Object Store Support"}),"\n",(0,r.jsx)(s.p,{children:"K3s supports writing etcd snapshots to and restoring etcd snapshots from S3-compatible object stores. S3 support is available for both on-demand and scheduled snapshots."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3"})}),(0,r.jsx)(s.td,{children:"Enable backup to S3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-endpoint"})}),(0,r.jsx)(s.td,{children:"S3 endpoint url"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-endpoint-ca"})}),(0,r.jsx)(s.td,{children:"S3 custom CA cert to connect to S3 endpoint"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-skip-ssl-verify"})}),(0,r.jsx)(s.td,{children:"Disables S3 SSL certificate validation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-access-key"})}),(0,r.jsx)(s.td,{children:"S3 access key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-secret-key"})}),(0,r.jsx)(s.td,{children:"S3 secret key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-bucket"})}),(0,r.jsx)(s.td,{children:"S3 bucket name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-region"})}),(0,r.jsx)(s.td,{children:"S3 region / bucket location (optional). defaults to us-east-1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-folder"})}),(0,r.jsx)(s.td,{children:"S3 folder"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-proxy"})}),(0,r.jsx)(s.td,{children:"Proxy server to use when connecting to S3, overriding any proxy-releated environment variables"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-insecure"})}),(0,r.jsx)(s.td,{children:"Disables S3 over HTTPS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-timeout"})}),(0,r.jsxs)(s.td,{children:["S3 timeout (default: ",(0,r.jsx)(s.code,{children:"5m0s"}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-config-secret"})}),(0,r.jsx)(s.td,{children:"Name of secret in the kube-system namespace used to configure S3, if etcd-s3 is enabled and no other etcd-s3 options are set"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"To perform an on-demand etcd snapshot and save it to S3:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot save \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n"})}),"\n",(0,r.jsx)(s.p,{children:"To perform an on-demand etcd snapshot restore from S3, first make sure that K3s isn't running. Then run the following commands:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n"})}),"\n",(0,r.jsx)(s.h3,{id:"s3-configuration-secret-support",children:"S3 Configuration Secret Support"}),"\n",(0,r.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,r.jsx)(s.p,{children:"S3 Configuration Secret support is available as of the August 2024 releases: v1.30.4+k3s1, v1.29.8+k3s1, v1.28.13+k3s1"})}),"\n",(0,r.jsxs)(s.p,{children:["K3s supports reading etcd S3 snapshot configuration from a Kubernetes Secret.\nThis may be preferred to hardcoding credentials in K3s CLI flags or config files for security reasons, or if credentials need to be rotated without restarting K3s.\nTo pass S3 snapshot configuration via a Secret, start K3s with ",(0,r.jsx)(s.code,{children:"--etcd-s3"})," and ",(0,r.jsx)(s.code,{children:"--etcd-s3-config-secret=<SECRET-NAME>"}),".\nThe Secret does not need to exist when K3s is started, but it will be checked for every time a snapshot save/list/delete/prune operation is performed."]}),"\n",(0,r.jsx)(s.p,{children:"The S3 config Secret cannot be used when restoring a snapshot, as the apiserver is not available to provide the secret during a restore.\nS3 configuration must be passed via the CLI when restoring a snapshot stored on S3."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Pass only the the ",(0,r.jsx)(s.code,{children:"--etcd-s3"})," and ",(0,r.jsx)(s.code,{children:"--etcd-s3-config-secret"})," flags to enable the Secret.",(0,r.jsx)(s.br,{}),"\n","If any other S3 configuration flags are set, the Secret will be ignored."]})}),"\n",(0,r.jsxs)(s.p,{children:["Keys in the Secret correspond to the ",(0,r.jsx)(s.code,{children:"--etcd-s3-*"})," CLI flags listed above.\nThe ",(0,r.jsx)(s.code,{children:"etcd-s3-endpoint-ca"})," key accepts a PEM-encoded CA bundle, or the ",(0,r.jsx)(s.code,{children:"etcd-s3-endpoint-ca-name"})," key may be used to specify the name of a ConfigMap in the ",(0,r.jsx)(s.code,{children:"kube-system"})," namespace containing one or more PEM-encoded CA bundles."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: k3s-etcd-snapshot-s3-config\n  namespace: kube-system\ntype: etcd.k3s.cattle.io/s3-config-secret\nstringData:\n  etcd-s3-endpoint: ""\n  etcd-s3-endpoint-ca: ""\n  etcd-s3-endpoint-ca-name: ""\n  etcd-s3-skip-ssl-verify: "false"\n  etcd-s3-access-key: "AWS_ACCESS_KEY_ID"\n  etcd-s3-secret-key: "AWS_SECRET_ACCESS_KEY"\n  etcd-s3-bucket: "bucket"\n  etcd-s3-folder: "folder"\n  etcd-s3-region: "us-east-1"\n  etcd-s3-insecure: "false"\n  etcd-s3-timeout: "5m"\n  etcd-s3-proxy: ""\n'})}),"\n",(0,r.jsx)(s.h2,{id:"managing-snapshots",children:"Managing Snapshots"}),"\n",(0,r.jsx)(s.p,{children:"k3s supports a set of subcommands for working with your etcd snapshots."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Subcommand"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"delete"}),(0,r.jsx)(s.td,{children:"Delete given snapshot(s)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ls, list, l"}),(0,r.jsx)(s.td,{children:"List snapshots"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prune"}),(0,r.jsx)(s.td,{children:"Remove snapshots that exceed the configured retention count"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"save"}),(0,r.jsx)(s.td,{children:"Trigger an immediate etcd snapshot"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"These commands will perform as expected whether the etcd snapshots are stored locally or in an S3 compatible object store."}),"\n",(0,r.jsxs)(s.p,{children:["For additional information on the etcd snapshot subcommands, run ",(0,r.jsx)(s.code,{children:"k3s etcd-snapshot --help"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Delete a snapshot from S3."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Prune local snapshots with the default retention policy (5). The ",(0,r.jsx)(s.code,{children:"prune"})," subcommand takes an additional flag ",(0,r.jsx)(s.code,{children:"--snapshot-retention"})," that allows for overriding the default retention policy."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot prune\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s etcd-snapshot prune --snapshot-retention 10\n"})}),"\n",(0,r.jsx)(s.h3,{id:"etcdsnapshotfile-custom-resources",children:"ETCDSnapshotFile Custom Resources"}),"\n",(0,r.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,r.jsx)(s.p,{children:"ETCDSnapshotFiles are available as of the November 2023 releases: v1.28.4+k3s2, v1.27.8+k3s2, v1.26.11+k3s2, v1.25.16+k3s4"})}),"\n",(0,r.jsxs)(s.p,{children:["Snapshots can be viewed remotely using any Kubernetes client by listing or describing cluster-scoped ",(0,r.jsx)(s.code,{children:"ETCDSnapshotFile"})," resources.\nUnlike the ",(0,r.jsx)(s.code,{children:"k3s etcd-snapshot list"})," command, which only shows snapshots visible to that node, ",(0,r.jsx)(s.code,{children:"ETCDSnapshotFile"})," resources track all snapshots present on cluster members."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"root@k3s-server-1:~# kubectl get etcdsnapshotfile\nNAME                                             SNAPSHOTNAME                        NODE           LOCATION                                                                            SIZE      CREATIONTIME\nlocal-on-demand-k3s-server-1-1730308816-3e9290   on-demand-k3s-server-1-1730308816   k3s-server-1   file:///var/lib/rancher/k3s/server/db/snapshots/on-demand-k3s-server-1-1730308816   2891808   2024-10-30T17:20:16Z\ns3-on-demand-k3s-server-1-1730308816-79b15c      on-demand-k3s-server-1-1730308816   s3             s3://etcd/k3s-test/on-demand-k3s-server-1-1730308816                                2891808   2024-10-30T17:20:16Z\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-console",children:"root@k3s-server-1:~# kubectl describe etcdsnapshotfile s3-on-demand-k3s-server-1-1730308816-79b15c\nName:         s3-on-demand-k3s-server-1-1730308816-79b15c\nNamespace:\nLabels:       etcd.k3s.cattle.io/snapshot-storage-node=s3\nAnnotations:  etcd.k3s.cattle.io/snapshot-token-hash: b4b83cda3099\nAPI Version:  k3s.cattle.io/v1\nKind:         ETCDSnapshotFile\nMetadata:\n  Creation Timestamp:  2024-10-30T17:20:16Z\n  Finalizers:\n    wrangler.cattle.io/managed-etcd-snapshots-controller\n  Generation:        1\n  Resource Version:  790\n  UID:               bec9a51c-dbbe-4746-922e-a5136bef53fc\nSpec:\n  Location:   s3://etcd/k3s-test/on-demand-k3s-server-1-1730308816\n  Node Name:  s3\n  s3:\n    Bucket:           etcd\n    Endpoint:         s3.example.com\n    Prefix:           k3s-test\n    Region:           us-east-1\n    Skip SSL Verify:  true\n  Snapshot Name:      on-demand-k3s-server-1-1730308816\nStatus:\n  Creation Time:  2024-10-30T17:20:16Z\n  Ready To Use:   true\n  Size:           2891808\nEvents:\n  Type    Reason               Age   From            Message\n  ----    ------               ----  ----            -------\n  Normal  ETCDSnapshotCreated  113s  k3s-supervisor  Snapshot on-demand-k3s-server-1-1730308816 saved on S3\n"})}),"\n",(0,r.jsx)(s.h2,{id:"restoring-snapshots",children:"Restoring Snapshots"}),"\n",(0,r.jsx)(s.p,{children:"K3s runs through several steps when restoring a snapshot:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"If the snapshot is stored on S3, the file is downloaded into the snapshot directory."}),"\n",(0,r.jsx)(s.li,{children:"If the snapshot is compressed, it is decompressed."}),"\n",(0,r.jsxs)(s.li,{children:["If present, the current etcd database files are moved to ",(0,r.jsx)(s.code,{children:"${data-dir}/server/db/etcd-old-$TIMESTAMP/"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"The snapshot's contents are extracted out to disk, and the checksum is verified."}),"\n",(0,r.jsx)(s.li,{children:"Etcd is started, and all etcd cluster members except the current node are removed from the cluster."}),"\n",(0,r.jsx)(s.li,{children:"CA Certificates and other confidential data are extracted from the datastore and written to disk, for later use."}),"\n",(0,r.jsx)(s.li,{children:"The restore is complete, and K3s can be restarted and used normally on the server where the restore was performed."}),"\n",(0,r.jsx)(s.li,{children:"(optional) Agents and control-plane servers can be started normally."}),"\n",(0,r.jsx)(s.li,{children:"(optional) Etcd servers can be restarted to rejoin to the cluster after removing old database files."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"snapshot-restore-steps",children:"Snapshot Restore Steps"}),"\n",(0,r.jsx)(s.p,{children:"Select the tab below that matches your cluster configuration."}),"\n",(0,r.jsxs)(t,{queryString:"etcdsnap",children:[(0,r.jsx)(n,{value:"Single Server",children:(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Stop the K3s service:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"systemctl stop k3s\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Run ",(0,r.jsx)(s.code,{children:"k3s server"})," with the ",(0,r.jsx)(s.code,{children:"--cluster-reset"})," flag, and ",(0,r.jsx)(s.code,{children:"--cluster-reset-restore-path"})," indicating the path to the snapshot to restore.\nIf the snapshot is stored on S3, provide S3 configuration flags (",(0,r.jsx)(s.code,{children:"--etcd-s3"}),", ",(0,r.jsx)(s.code,{children:"--etcd-s3-bucket"}),", and so on), and give only the filename name of the snapshot as the restore path."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Using the ",(0,r.jsx)(s.code,{children:"--cluster-reset"})," flag without specifying a snapshot to restore simply resets the etcd cluster to a single member without restoring a snapshot."]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Result:"})," K3s restores the snapshot and resets cluster membership, then prints a message indicating that it is ready to be restarted:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"Managed etcd cluster membership has been reset, restart without --cluster-reset flag now."})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Start K3s again:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n"]})}),(0,r.jsxs)(n,{value:"Multiple Servers",children:[(0,r.jsxs)(s.p,{children:["In this example there are 3 servers, ",(0,r.jsx)(s.code,{children:"S1"}),", ",(0,r.jsx)(s.code,{children:"S2"}),", and ",(0,r.jsx)(s.code,{children:"S3"}),". The snapshot is located on ",(0,r.jsx)(s.code,{children:"S1"}),"."]}),(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Stop K3s on all servers:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"systemctl stop k3s\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["On S1, run ",(0,r.jsx)(s.code,{children:"k3s server"})," with the ",(0,r.jsx)(s.code,{children:"--cluster-reset"})," option, and ",(0,r.jsx)(s.code,{children:"--cluster-reset-restore-path"})," indicating the path to the snapshot to restore.\nIf the snapshot is stored on S3, provide S3 configuration flags (",(0,r.jsx)(s.code,{children:"--etcd-s3"}),", ",(0,r.jsx)(s.code,{children:"--etcd-s3-bucket"}),", and so on), and give only the filename name of the snapshot as the restore path."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Using the ",(0,r.jsx)(s.code,{children:"--cluster-reset"})," flag without specifying a snapshot to restore simply resets the etcd cluster to a single member without restoring a snapshot."]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Result:"})," K3s restores the snapshot and resets cluster membership, then prints a message indicating that it is ready to be restarted:",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"Managed etcd cluster membership has been reset, restart without --cluster-reset flag now."}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.code,{children:"Backup and delete ${datadir}/server/db on each peer etcd server and rejoin the nodes."})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"On S1, start K3s again:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["On S2 and S3, delete the data directory, ",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/db/"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"rm -rf /var/lib/rancher/k3s/server/db/\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"On S2 and S3, start K3s again to join the restored cluster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"systemctl start k3s\n"})}),"\n"]}),"\n"]})]})]})]})}function l(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(6540);const r={},d=t.createContext(r);function c(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);