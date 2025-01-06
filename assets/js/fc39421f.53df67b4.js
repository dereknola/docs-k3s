"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1093],{9460:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"reference/resource-profiling","title":"Resource Profiling","description":"This section captures the results of tests to determine resource requirements for K3s.","source":"@site/docs/reference/resource-profiling.md","sourceDirName":"reference","slug":"/reference/resource-profiling","permalink":"/docs-k3s/reference/resource-profiling","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/reference/resource-profiling.md","tags":[],"version":"current","lastUpdatedAt":1736200611000,"frontMatter":{"title":"Resource Profiling"},"sidebar":"mySidebar","previous":{"title":"Flag Deprecation","permalink":"/docs-k3s/reference/flag-deprecation"},"next":{"title":"v1.31.X","permalink":"/docs-k3s/release-notes/v1.31.X"}}');var t=s(4848),i=s(8453);const l={title:"Resource Profiling"},d=void 0,o={},a=[{value:"Minimum Resource Requirements for K3s",id:"minimum-resource-requirements-for-k3s",level:2},{value:"Scope of Resource Testing",id:"scope-of-resource-testing",level:3},{value:"Components Included for Baseline Measurements",id:"components-included-for-baseline-measurements",level:3},{value:"Methodology",id:"methodology",level:3},{value:"Environment",id:"environment",level:3},{value:"Baseline Resource Requirements",id:"baseline-resource-requirements",level:3},{value:"K3s Server with a Workload",id:"k3s-server-with-a-workload",level:4},{value:"K3s Cluster with a Single Agent",id:"k3s-cluster-with-a-single-agent",level:3},{value:"K3s Server",id:"k3s-server",level:4},{value:"K3s Agent",id:"k3s-agent",level:4},{value:"Analysis of Primary Resource Utilization Drivers",id:"analysis-of-primary-resource-utilization-drivers",level:3},{value:"Preventing Agents and Workloads from Interfering with the Cluster Datastore",id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",level:3},{value:"Server Sizing Requirements for K3s",id:"server-sizing-requirements-for-k3s",level:2},{value:"Environment",id:"environment-1",level:3},{value:"Methodology",id:"methodology-1",level:3},{value:"Observations",id:"observations",level:3},{value:"A note on High Availability (HA)",id:"a-note-on-high-availability-ha",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This section captures the results of tests to determine resource requirements for K3s."}),"\n",(0,t.jsx)(n.h2,{id:"minimum-resource-requirements-for-k3s",children:"Minimum Resource Requirements for K3s"}),"\n",(0,t.jsx)(n.p,{children:"The results are summarized as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Components"}),(0,t.jsx)(n.th,{children:"Processor"}),(0,t.jsx)(n.th,{children:"Min CPU"}),(0,t.jsx)(n.th,{children:"Min RAM with Kine/SQLite"}),(0,t.jsx)(n.th,{children:"Min RAM with Embedded etcd"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K3s server with a workload"}),(0,t.jsx)(n.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,t.jsx)(n.td,{children:"6% of a core"}),(0,t.jsx)(n.td,{children:"1596 M"}),(0,t.jsx)(n.td,{children:"1606 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K3s cluster with a single agent"}),(0,t.jsx)(n.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,t.jsx)(n.td,{children:"5% of a core"}),(0,t.jsx)(n.td,{children:"1428 M"}),(0,t.jsx)(n.td,{children:"1450 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K3s agent"}),(0,t.jsx)(n.td,{children:"Intel 8375C CPU, 2.90 GHz"}),(0,t.jsx)(n.td,{children:"3% of a core"}),(0,t.jsx)(n.td,{children:"275 M"}),(0,t.jsx)(n.td,{children:"275 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K3s server with a workload"}),(0,t.jsx)(n.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,t.jsx)(n.td,{children:"30% of a core"}),(0,t.jsx)(n.td,{children:"1588 M"}),(0,t.jsx)(n.td,{children:"1613 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K3s cluster with a single agent"}),(0,t.jsx)(n.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,t.jsx)(n.td,{children:"25% of a core"}),(0,t.jsx)(n.td,{children:"1215 M"}),(0,t.jsx)(n.td,{children:"1413 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"K3s agent"}),(0,t.jsx)(n.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,t.jsx)(n.td,{children:"10% of a core"}),(0,t.jsx)(n.td,{children:"268 M"}),(0,t.jsx)(n.td,{children:"268 M"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"scope-of-resource-testing",children:"Scope of Resource Testing"}),"\n",(0,t.jsx)(n.p,{children:"The resource tests were intended to address the following problem statements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"On a single-node cluster, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside to run the entire K3s stack server stack, assuming that a real workload will be deployed on the cluster."}),"\n",(0,t.jsx)(n.li,{children:"On an agent (worker) node, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside for the Kubernetes and K3s control plane components (the kubelet and k3s agent)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"components-included-for-baseline-measurements",children:"Components Included for Baseline Measurements"}),"\n",(0,t.jsx)(n.p,{children:"The tested components are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"K3s v1.26.5 with all packaged components enabled"}),"\n",(0,t.jsx)(n.li,{children:"Prometheus + Grafana monitoring stack"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/",children:"Kubernetes Example Nginx Deployment"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are baseline figures for a stable system using only K3s packaged components (Traefik Ingress, Klipper lb, local-path storage) running a standard monitoring stack (Prometheus and Grafana) and the Guestbook example app."}),"\n",(0,t.jsx)(n.p,{children:"Resource figures including IOPS are for the Kubernetes datastore and control plane only, and do not include overhead for system-level management agents or logging, container image management, or any workload-specific requirements."}),"\n",(0,t.jsx)(n.h3,{id:"methodology",children:"Methodology"}),"\n",(0,t.jsxs)(n.p,{children:["A standalone instance of Prometheus v2.43.0 was used to collect host CPU, memory, and disk IO statistics using ",(0,t.jsx)(n.code,{children:"prometheus-node-exporter"})," installed via apt."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"systemd-cgtop"})," was used to spot-check systemd cgroup-level CPU and memory utilization. ",(0,t.jsx)(n.code,{children:"system.slice/k3s.service"})," tracks resource utilization for both K3s and containerd, while individual pods are under the ",(0,t.jsx)(n.code,{children:"kubepods"})," hierarchy."]}),"\n",(0,t.jsxs)(n.p,{children:["Additional detailed K3s memory utilization data was collected from ",(0,t.jsx)(n.code,{children:"kubectl top node"})," using the integrated metrics-server for the server and agent processes."]}),"\n",(0,t.jsx)(n.p,{children:"Utilization figures were based on 95th percentile readings from steady state operation on nodes running the described workloads."}),"\n",(0,t.jsx)(n.h3,{id:"environment",children:"Environment"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Arch"}),(0,t.jsx)(n.th,{children:"OS"}),(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"CPU"}),(0,t.jsx)(n.th,{children:"RAM"}),(0,t.jsx)(n.th,{children:"Disk"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x86_64"}),(0,t.jsx)(n.td,{children:"Ubuntu 22.04"}),(0,t.jsx)(n.td,{children:"AWS c6id.xlarge"}),(0,t.jsx)(n.td,{children:"Intel Xeon Platinum 8375C CPU, 4 Core 2.90 GHz"}),(0,t.jsx)(n.td,{children:"8 GB"}),(0,t.jsx)(n.td,{children:"NVME SSD"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aarch64"}),(0,t.jsx)(n.td,{children:"Raspberry Pi OS 11"}),(0,t.jsx)(n.td,{children:"Raspberry Pi 4 Model B"}),(0,t.jsx)(n.td,{children:"BCM2711, 4 Core 1.50 GHz"}),(0,t.jsx)(n.td,{children:"8 GB"}),(0,t.jsx)(n.td,{children:"UHS-III SDXC"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"baseline-resource-requirements",children:"Baseline Resource Requirements"}),"\n",(0,t.jsx)(n.p,{children:"This section captures the results of tests to determine minimum resource requirements for basic K3s operation."}),"\n",(0,t.jsx)(n.h4,{id:"k3s-server-with-a-workload",children:"K3s Server with a Workload"}),"\n",(0,t.jsxs)(n.p,{children:["These are the requirements for a single-node cluster in which the K3s server shares resources with a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/",children:"simple workload"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The CPU requirements are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"CPU Core Usage"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"6% of a core"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"30% of a core"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The Memory Requirements are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tested Datastore"}),(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"Memory"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kine/SQLite"}),(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"1596 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"1588 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Embedded etcd"}),(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"1606 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"1613 M"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The Disk requirements are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tested Datastore"}),(0,t.jsx)(n.th,{children:"IOPS"}),(0,t.jsx)(n.th,{children:"KiB/sec"}),(0,t.jsx)(n.th,{children:"Latency"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kine/SQLite"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"500"}),(0,t.jsx)(n.td,{children:"< 10 ms"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Embedded etcd"}),(0,t.jsx)(n.td,{children:"50"}),(0,t.jsx)(n.td,{children:"250"}),(0,t.jsx)(n.td,{children:"< 5 ms"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"k3s-cluster-with-a-single-agent",children:"K3s Cluster with a Single Agent"}),"\n",(0,t.jsx)(n.p,{children:"These are the baseline requirements for a K3s cluster with a K3s server node and a K3s agent, but no workload."}),"\n",(0,t.jsx)(n.h4,{id:"k3s-server",children:"K3s Server"}),"\n",(0,t.jsx)(n.p,{children:"The CPU requirements are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"CPU Core Usage"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"5% of a core"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"25% of a core"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The Memory Requirements are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Tested Datastore"}),(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"Memory"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kine/SQLite"}),(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"1428 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"1215 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Embedded etcd"}),(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"1450 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"1413 M"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"k3s-agent",children:"K3s Agent"}),"\n",(0,t.jsx)(n.p,{children:"The requirements are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"System"}),(0,t.jsx)(n.th,{children:"CPU Core Usage"}),(0,t.jsx)(n.th,{children:"RAM"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Intel 8375C"}),(0,t.jsx)(n.td,{children:"3% of a core"}),(0,t.jsx)(n.td,{children:"275 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pi4B"}),(0,t.jsx)(n.td,{children:"5% of a core"}),(0,t.jsx)(n.td,{children:"268 M"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"analysis-of-primary-resource-utilization-drivers",children:"Analysis of Primary Resource Utilization Drivers"}),"\n",(0,t.jsx)(n.p,{children:"K3s server utilization figures are primarily driven by support of the Kubernetes datastore (kine or etcd), API Server, Controller-Manager, and Scheduler control loops, as well as any management tasks necessary to effect changes to the state of the system. Operations that place additional load on the Kubernetes control plane, such as creating/modifying/deleting resources, will cause temporary spikes in utilization. Using operators or apps that make extensive use of the Kubernetes datastore (such as Rancher or other Operator-type applications) will increase the server's resource requirements. Scaling up the cluster by adding additional nodes or creating many cluster resources will increase the server's resource requirements."}),"\n",(0,t.jsx)(n.p,{children:"K3s agent utilization figures are primarily driven by support of container lifecycle management control loops. Operations that involve managing images, provisioning storage, or creating/destroying containers will cause temporary spikes in utilization. Image pulls in particular are typically highly CPU and IO bound, as they involve decompressing image content to disk. If possible, workload storage (pod ephemeral storage and volumes) should be isolated from the agent components (/var/lib/rancher/k3s/agent) to ensure that there are no resource conflicts."}),"\n",(0,t.jsx)(n.h3,{id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",children:"Preventing Agents and Workloads from Interfering with the Cluster Datastore"}),"\n",(0,t.jsx)(n.p,{children:"When running in an environment where the server is also hosting workload pods, care should be taken to ensure that agent and workload IOPS do not interfere with the datastore."}),"\n",(0,t.jsx)(n.p,{children:"This can be best accomplished by placing the server components (/var/lib/rancher/k3s/server) on a different storage medium than the agent components (/var/lib/rancher/k3s/agent), which include the containerd image store."}),"\n",(0,t.jsx)(n.p,{children:"Workload storage (pod ephemeral storage and volumes) should also be isolated from the datastore."}),"\n",(0,t.jsx)(n.p,{children:"Failure to meet datastore throughput and latency requirements may result in delayed response from the control plane and/or failure of the control plane to maintain system state."}),"\n",(0,t.jsx)(n.h2,{id:"server-sizing-requirements-for-k3s",children:"Server Sizing Requirements for K3s"}),"\n",(0,t.jsx)(n.h3,{id:"environment-1",children:"Environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["All agents were t3.medium AWS ec2 instances.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A single agent was a c5.4xlarge instance. This hosted the grafana monitoring stack and prevented it from interfering with the control-plane resources."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The Server was a c5 AWS ec2 instance. As the number of agents increased, the server was upgraded to larger c5 instances."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"methodology-1",children:"Methodology"}),"\n",(0,t.jsx)(n.p,{children:"This data was retrieved under specific test conditions. It will vary depending upon environment and workloads. The steps below give an overview of the test that was run to retrieve this. It was last performed on v1.31.0+k3s1. All the machines were provisioned in AWS with standard 20 GiB gp3 volumes. The test was run with the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Monitor resources on grafana using prometheus data source."}),"\n",(0,t.jsxs)(n.li,{children:["Deploy workloads in such a way to simulate continuous cluster activity:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A basic workload that scales up and down continuously"}),"\n",(0,t.jsx)(n.li,{children:"A workload that is deleted and recreated in a loop"}),"\n",(0,t.jsx)(n.li,{children:"A constant workload that contains multiple other resources including CRDs."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Join agent nodes in batches of 50-100 at a time."}),"\n",(0,t.jsx)(n.li,{children:"Stop adding agents when server CPU spikes above 90% utilization on agent joining, or if RAM was above 80% utilization."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"observations",children:"Observations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When joining agents, server CPU saw spikes of ~20% over baseline."}),"\n",(0,t.jsx)(n.li,{children:"Typically, the limiting factor was CPU, not RAM. For most of the tests, when the CPU hit 90% utilization, RAM utilization was around 60%."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"a-note-on-high-availability-ha",children:"A note on High Availability (HA)"}),"\n",(0,t.jsx)(n.p,{children:"At the end of each test, two additional servers were joined (forming a basic 3 node HA cluster) to observe what effect this had on the original server resources. The effect was:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A noticeable drop in CPU utilization, usually 30-50%."}),"\n",(0,t.jsx)(n.li,{children:"RAM utilization remained the same."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"While not tested, with CPU utilization as the limiting factor on a single server, it is expected that the number of agents that can be joined would increase by ~50% with a 3 node HA cluster."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);