"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7268],{3866:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"security/hardening-guide","title":"CIS Hardening Guide","description":"This document provides prescriptive guidance for hardening a production installation of K3s. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Internet Security (CIS).","source":"@site/docs/security/hardening-guide.md","sourceDirName":"security","slug":"/security/hardening-guide","permalink":"/docs-k3s/security/hardening-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/k3s-io/docs/edit/main/docs/security/hardening-guide.md","tags":[],"version":"current","lastUpdatedAt":1736279982000,"frontMatter":{"title":"CIS Hardening Guide"},"sidebar":"mySidebar","previous":{"title":"Secrets Encryption","permalink":"/docs-k3s/security/secrets-encryption"},"next":{"title":"CIS 1.8 Self Assessment Guide","permalink":"/docs-k3s/security/self-assessment-1.8"}}');var r=s(4848),t=s(8453);const a={title:"CIS Hardening Guide"},o=void 0,l={},c=[{value:"Host-level Requirements",id:"host-level-requirements",level:2},{value:"Ensure <code>protect-kernel-defaults</code> is set",id:"ensure-protect-kernel-defaults-is-set",level:3},{value:"Set kernel parameters",id:"set-kernel-parameters",level:4},{value:"Kubernetes Runtime Requirements",id:"kubernetes-runtime-requirements",level:2},{value:"Pod Security",id:"pod-security",level:3},{value:"NetworkPolicies",id:"networkpolicies",level:3},{value:"API Server audit configuration",id:"api-server-audit-configuration",level:3},{value:"Configuration for Kubernetes Components",id:"configuration-for-kubernetes-components",level:2},{value:"Manual Operations",id:"manual-operations",level:2},{value:"Control 1.1.20",id:"control-1120",level:3},{value:"Control 1.2.9",id:"control-129",level:3},{value:"Control 1.2.11",id:"control-1211",level:3},{value:"Control 1.2.21",id:"control-1221",level:3},{value:"Control 4.2.13",id:"control-4213",level:3},{value:"Control 5.X",id:"control-5x",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:s,TabItem:i,Tabs:a}=n;return s||p("Details",!0),i||p("TabItem",!0),a||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document provides prescriptive guidance for hardening a production installation of K3s. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Internet Security (CIS)."}),"\n",(0,r.jsx)(n.p,{children:"K3s has a number of security mitigations applied and turned on by default and will pass a number of the Kubernetes CIS controls without modification. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"K3s will not modify the host operating system. Any host-level modifications will need to be done manually."}),"\n",(0,r.jsxs)(n.li,{children:["Certain CIS policy controls for ",(0,r.jsx)(n.code,{children:"NetworkPolicies"})," and ",(0,r.jsx)(n.code,{children:"PodSecurityStandards"})," (",(0,r.jsx)(n.code,{children:"PodSecurityPolicies"})," on v1.24 and older) will restrict the functionality of the cluster. You must opt into having K3s configure these by adding the appropriate options (enabling of admission plugins) to your command-line flags or configuration file as well as manually applying appropriate policies. Further details are presented in the sections below."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The first section (1.1) of the CIS Benchmark concerns itself primarily with pod manifest permissions and ownership. K3s doesn't utilize these for the core components since everything is packaged into a single binary."}),"\n",(0,r.jsx)(n.h2,{id:"host-level-requirements",children:"Host-level Requirements"}),"\n",(0,r.jsx)(n.p,{children:"There are two areas of host-level requirements: kernel parameters and etcd process/directory configuration. These are outlined in this section."}),"\n",(0,r.jsxs)(n.h3,{id:"ensure-protect-kernel-defaults-is-set",children:["Ensure ",(0,r.jsx)(n.code,{children:"protect-kernel-defaults"})," is set"]}),"\n",(0,r.jsx)(n.p,{children:"This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.code,{children:"protect-kernel-defaults"})," is exposed as a top-level flag for K3s."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"set-kernel-parameters",children:"Set kernel parameters"}),"\n",(0,r.jsxs)(n.p,{children:["Create a file called ",(0,r.jsx)(n.code,{children:"/etc/sysctl.d/90-kubelet.conf"})," and add the snippet below. Then run ",(0,r.jsx)(n.code,{children:"sysctl -p /etc/sysctl.d/90-kubelet.conf"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes-runtime-requirements",children:"Kubernetes Runtime Requirements"}),"\n",(0,r.jsx)(n.p,{children:"The runtime requirements to comply with the CIS Benchmark are centered around pod security (via PSP or PSA), network policies and API Server auditing logs. These are outlined in this section."}),"\n",(0,r.jsxs)(n.p,{children:["By default, K3s does not include any pod security or network policies. However, K3s ships with a controller that will enforce network policies, if any are created. K3s doesn't enable auditing by default, so audit log configuration and audit policy must be created manually. By default, K3s runs with the both the ",(0,r.jsx)(n.code,{children:"PodSecurity"})," and ",(0,r.jsx)(n.code,{children:"NodeRestriction"})," admission controllers enabled, among others."]}),"\n",(0,r.jsx)(n.h3,{id:"pod-security",children:"Pod Security"}),"\n",(0,r.jsxs)(a,{groupId:"pod-sec",queryString:!0,children:[(0,r.jsxs)(i,{value:"v1.25 and Newer",default:!0,children:[(0,r.jsxs)(n.p,{children:["K3s v1.25 and newer support ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/",children:"Pod Security Admissions (PSAs)"})," for controlling pod security. PSAs are enabled by passing the following flag to the K3s server:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--kube-apiserver-arg="admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml"\n'})}),(0,r.jsxs)(n.p,{children:["The policy should be written to a file named ",(0,r.jsx)(n.code,{children:"psa.yaml"})," in ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server"})," directory."]}),(0,r.jsx)(n.p,{children:"Here is an example of a compliant PSA:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system]\n'})})]}),(0,r.jsxs)(i,{value:"v1.24 and Older",default:!0,children:[(0,r.jsxs)(n.p,{children:["K3s v1.24 and older support ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/",children:"Pod Security Policies (PSPs)"})," for controlling pod security. PSPs are enabled by passing the following flag to the K3s server:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'--kube-apiserver-arg="enable-admission-plugins=NodeRestriction,PodSecurityPolicy"\n'})}),(0,r.jsxs)(n.p,{children:["This will have the effect of maintaining the ",(0,r.jsx)(n.code,{children:"NodeRestriction"})," plugin as well as enabling the ",(0,r.jsx)(n.code,{children:"PodSecurityPolicy"}),"."]}),(0,r.jsx)(n.p,{children:"When PSPs are enabled, a policy can be applied to satisfy the necessary controls described in section 5.2 of the CIS Benchmark."}),(0,r.jsx)(n.p,{children:"Here is an example of a compliant PSP:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted-psp\nspec:\n  privileged: false                # CIS - 5.2.1\n  allowPrivilegeEscalation: false  # CIS - 5.2.5\n  requiredDropCapabilities:        # CIS - 5.2.7/8/9\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'csi'\n    - 'persistentVolumeClaim'\n    - 'ephemeral'\n  hostNetwork: false               # CIS - 5.2.4\n  hostIPC: false                   # CIS - 5.2.3\n  hostPID: false                   # CIS - 5.2.2\n  runAsUser:\n    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n"})}),(0,r.jsx)(n.p,{children:'For the above PSP to be effective, we need to create a ClusterRole and a ClusterRoleBinding. We also need to include a "system unrestricted policy" which is needed for system-level pods that require additional privileges, and an additional policy that allows sysctls necessary for servicelb to function properly.'}),(0,r.jsxs)(n.p,{children:["Combining the configuration above with the ",(0,r.jsx)(n.a,{href:"#networkpolicies",children:"Network Policy"})," described in the next section, a single file can be placed in the ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/manifests"})," directory. Here is an example of a ",(0,r.jsx)(n.code,{children:"policy.yaml"})," file:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted-psp\nspec:\n  privileged: false\n  allowPrivilegeEscalation: false\n  requiredDropCapabilities:\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'csi'\n    - 'persistentVolumeClaim'\n    - 'ephemeral'\n  hostNetwork: false\n  hostIPC: false\n  hostPID: false\n  runAsUser:\n    rule: 'MustRunAsNonRoot'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: system-unrestricted-psp\n  annotations:\n    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'\nspec:\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  fsGroup:\n    rule: RunAsAny\n  hostIPC: true\n  hostNetwork: true\n  hostPID: true\n  hostPorts:\n  - max: 65535\n    min: 0\n  privileged: true\n  runAsUser:\n    rule: RunAsAny\n  seLinux:\n    rule: RunAsAny\n  supplementalGroups:\n    rule: RunAsAny\n  volumes:\n  - '*'\n---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: svclb-psp\n  annotations:\n    seccomp.security.alpha.kubernetes.io/allowedProfileNames: '*'\nspec:\n  allowPrivilegeEscalation: false\n  allowedCapabilities:\n  - NET_ADMIN\n  allowedUnsafeSysctls:\n  - net.ipv4.ip_forward\n  - net.ipv6.conf.all.forwarding\n  fsGroup:\n    rule: RunAsAny\n  hostPorts:\n  - max: 65535\n    min: 0\n  runAsUser:\n    rule: RunAsAny\n  seLinux:\n    rule: RunAsAny\n  supplementalGroups:\n    rule: RunAsAny\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:restricted-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  verbs:\n  - use\n  resourceNames:\n  - restricted-psp\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:system-unrestricted-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - system-unrestricted-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:svclb-psp\nrules:\n- apiGroups:\n  - policy\n  resources:\n  - podsecuritypolicies\n  resourceNames:\n  - svclb-psp\n  verbs:\n  - use\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: default:restricted-psp\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:restricted-psp\nsubjects:\n- kind: Group\n  name: system:authenticated\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: system-unrestricted-node-psp-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:system-unrestricted-psp\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:nodes\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: system-unrestricted-svc-acct-psp-rolebinding\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:system-unrestricted-psp\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:serviceaccounts\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: svclb-psp-rolebinding\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:svclb-psp\nsubjects:\n- kind: ServiceAccount\n  name: svclb\n---\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: kube-system\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: kube-system\n---\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: default\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: default\n---\nkind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: kube-public\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: kube-public\n"})})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The Kubernetes critical additions such as CNI, DNS, and Ingress are run as pods in the ",(0,r.jsx)(n.code,{children:"kube-system"})," namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"networkpolicies",children:"NetworkPolicies"}),"\n",(0,r.jsx)(n.p,{children:"CIS requires that all namespaces have a network policy applied that reasonably limits traffic into namespaces and pods."}),"\n",(0,r.jsxs)(n.p,{children:["Network policies should be placed the ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/manifests"})," directory, where they will automatically be deployed on startup."]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of a compliant network policy."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: kube-system\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            kubernetes.io/metadata.name: kube-system\n"})}),"\n",(0,r.jsx)(n.p,{children:"With the applied restrictions, DNS will be blocked unless purposely allowed. Below is a network policy that will allow for traffic to exist for DNS."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-network-dns-policy\n  namespace: <NAMESPACE>\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n      k8s-app: kube-dns\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,r.jsx)(n.p,{children:"The metrics-server and Traefik ingress controller will be blocked by default if network policies are not created to allow access. Traefik v1 as packaged in K3s version 1.20 and below uses different labels than Traefik v2. Ensure that you only use the sample yaml below that is associated with the version of Traefik present on your cluster."}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(i,{value:"v1.21 and Newer",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-metrics-server\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      k8s-app: metrics-server\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-svclbtraefik-ingress\n  namespace: kube-system\nspec:\n  podSelector: \n    matchLabels:\n      svccontroller.k3s.cattle.io/svcname: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-traefik-v121-ingress\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      app.kubernetes.io/name: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\n\n"})})}),(0,r.jsx)(i,{value:"v1.20 and Older",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-metrics-server\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      k8s-app: metrics-server\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-svclbtraefik-ingress\n  namespace: kube-system\nspec:\n  podSelector: \n    matchLabels:\n      svccontroller.k3s.cattle.io/svcname: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-traefik-v120-ingress\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      app: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\n\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Operators must manage network policies as normal for additional namespaces that are created."})}),"\n",(0,r.jsx)(n.h3,{id:"api-server-audit-configuration",children:"API Server audit configuration"}),"\n",(0,r.jsx)(n.p,{children:"CIS requirements 1.2.22 to 1.2.25 are related to configuring audit logs for the API Server. K3s doesn't create by default the log directory and audit policy, as auditing requirements are specific to each user's policies and environment."}),"\n",(0,r.jsx)(n.p,{children:"The log directory, ideally, must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/logs\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A starter audit policy to log request metadata is provided below. The policy should be written to a file named ",(0,r.jsx)(n.code,{children:"audit.yaml"})," in ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server"})," directory. Detailed information about policy configuration for the API server can be found in the Kubernetes ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",children:"documentation"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: audit.k8s.io/v1\nkind: Policy\nrules:\n- level: Metadata\n"})}),"\n",(0,r.jsx)(n.p,{children:"Both configurations must be passed as arguments to the API Server as:"}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(i,{value:"config",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"kube-apiserver-arg:\n  - 'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\n"})})}),(0,r.jsx)(i,{value:"cmdline",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"--kube-apiserver-arg='audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n--kube-apiserver-arg='audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"K3s must be restarted to load the new configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\nsudo systemctl restart k3s.service\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration-for-kubernetes-components",children:"Configuration for Kubernetes Components"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration below should be placed in the ",(0,r.jsx)(n.a,{href:"/docs-k3s/installation/configuration#configuration-file",children:"configuration file"}),", and contains all the necessary remediations to harden the Kubernetes components."]}),"\n",(0,r.jsxs)(a,{groupId:"pod-sec",queryString:!0,children:[(0,r.jsx)(i,{value:"v1.25 and Newer",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"protect-kernel-defaults: true\nsecrets-encryption: true\nkube-apiserver-arg:\n  - \"enable-admission-plugins=NodeRestriction,EventRateLimit\"\n  - 'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\nkube-controller-manager-arg:\n  - 'terminated-pod-gc-threshold=10'\nkubelet-arg:\n  - 'streaming-connection-idle-timeout=5m'\n  - \"tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305\"\n"})})}),(0,r.jsx)(i,{value:"v1.24 and Older",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"protect-kernel-defaults: true\nsecrets-encryption: true\nkube-apiserver-arg:\n  - 'enable-admission-plugins=NodeRestriction,PodSecurityPolicy,NamespaceLifecycle,ServiceAccount'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\nkube-controller-manager-arg:\n  - 'terminated-pod-gc-threshold=10'\nkubelet-arg:\n  - 'streaming-connection-idle-timeout=5m'\n  - 'make-iptables-util-chains=true'\n  - \"tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305\"\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"manual-operations",children:"Manual Operations"}),"\n",(0,r.jsx)(n.p,{children:"The following are controls that K3s currently does not pass by with the above configuration applied. These controls require manual intervention to fully comply with the CIS Benchmark."}),"\n",(0,r.jsx)(n.h3,{id:"control-1120",children:"Control 1.1.20"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the Kubernetes PKI certificate file permissions are set to 600 or more restrictive (Manual)"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("summary",{children:"Remediation"}),"\nK3s PKI certificate files are stored in ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/tls/"})," with permission 644.\nTo remediate, run the following command:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chmod -R 600 /var/lib/rancher/k3s/server/tls/*.crt\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"control-129",children:"Control 1.2.9"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the admission control plugin EventRateLimit is set"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("summary",{children:"Remediation"}),"\nFollow the ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#eventratelimit",children:"Kubernetes documentation"})," and set the desired limits in a configuration file.\nFor this and other psa configuration, this documentation uses /var/lib/rancher/k3s/server/psa.yaml.\nThen, edit the K3s config file /etc/rancher/k3s/config.yaml and set the below parameters."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kube-apiserver-arg:\n  - "enable-admission-plugins=NodeRestriction,EventRateLimit"\n  - "admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"control-1211",children:"Control 1.2.11"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the admission control plugin AlwaysPullImages is set"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("summary",{children:"Remediation"}),'\nPermissive, per CIS guidelines,\n"This setting could impact offline or isolated clusters, which have images pre-loaded and\ndo not have access to a registry to pull in-use images. This setting is not appropriate for\nclusters which use this configuration."\nEdit the K3s config file /etc/rancher/k3s/config.yaml and set the below parameter.']}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kube-apiserver-arg:\n  - "enable-admission-plugins=...,AlwaysPullImages,..."\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"control-1221",children:"Control 1.2.21"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the --request-timeout argument is set as appropriate"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("summary",{children:"Remediation"}),'\nPermissive, per CIS guidelines,\n"it is recommended to set this limit as appropriate and change the default limit of 60 seconds only if needed".\nEdit the K3s config file /etc/rancher/k3s/config.yaml\nand set the below parameter if needed. For example,']}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kube-apiserver-arg:\n  - "request-timeout=300s"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"control-4213",children:"Control 4.2.13"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that a limit is set on pod PIDs"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)("summary",{children:"Remediation"}),"\nDecide on an appropriate level for this parameter and set it,\nIf using a K3s config file /etc/rancher/k3s/config.yaml, edit the file to set ",(0,r.jsx)(n.code,{children:"podPidsLimit"})," to"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kubelet-arg:\n  - "pod-max-pids=<value>"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"control-5x",children:"Control 5.X"}),"\n",(0,r.jsx)(n.p,{children:"All the 5.X Controls are related to Kubernetes policy configuration. These controls are not enforced by K3s by default."}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"/docs-k3s/security/self-assessment-1.8#51-rbac-and-service-accounts",children:"CIS 1.8 Section 5"})," for more information on how to create and apply these policies."]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["If you have followed this guide, your K3s cluster will be configured to comply with the CIS Kubernetes Benchmark. You can review the ",(0,r.jsx)(n.a,{href:"/docs-k3s/security/self-assessment-1.8",children:"CIS 1.8 Self-Assessment Guide"})," to understand the expectations of each of the benchmark's checks and how you can do the same on your cluster."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);