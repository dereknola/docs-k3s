"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(3117),n=a(7294),o=a(6010),i=a(2466),s=a(6775),l=a(1980),u=a(7392),d=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=a(2389);const k="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==s&&(p(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,o.Z)("tabs__item",y,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},3510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(3117),n=(a(7294),a(3905)),o=a(4866),i=a(5162);const s={title:"Cluster Datastore",weight:50},l=void 0,u={unversionedId:"datastore/datastore",id:"datastore/datastore",title:"Cluster Datastore",description:"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:",source:"@site/docs/datastore/datastore.md",sourceDirName:"datastore",slug:"/datastore/",permalink:"/docs-k3s/datastore/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/datastore.md",tags:[],version:"current",lastUpdatedAt:1682707376,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Cluster Datastore",weight:50},sidebar:"mySidebar",previous:{title:"Uninstalling K3s",permalink:"/docs-k3s/installation/uninstall"},next:{title:"Backup and Restore",permalink:"/docs-k3s/datastore/backup-restore"}},d={},p=[{value:"External Datastore Configuration Parameters",id:"external-datastore-configuration-parameters",level:3},{value:"Datastore Endpoint Format and Functionality",id:"datastore-endpoint-format-and-functionality",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If your team doesn't have expertise in operating etcd, you can choose an enterprise-grade SQL database like MySQL or PostgreSQL"),(0,n.kt)("li",{parentName:"ul"},"If you need to run a simple, short-lived cluster in your CI/CD environment, you can use the embedded SQLite database"),(0,n.kt)("li",{parentName:"ul"},"If you wish to deploy Kubernetes on the edge and require a highly available solution but can't afford the operational overhead of managing a database at the edge, you can use K3s's embedded HA datastore built on top of embedded etcd.")),(0,n.kt)("p",null,"K3s supports the following datastore options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Embedded ",(0,n.kt)("a",{parentName:"strong",href:"https://www.sqlite.org/index.html"},"SQLite")),(0,n.kt)("br",{parentName:"li"}),"SQLite cannot be used on clusters with multiple servers.",(0,n.kt)("br",{parentName:"li"}),"SQLite is the default datastore, and will be used if no other datastore configuration is present, and no embedded etcd database files are present on disk."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Embedded etcd"),(0,n.kt)("br",{parentName:"li"}),"See the ",(0,n.kt)("a",{parentName:"li",href:"/docs-k3s/datastore/ha-embedded"},"High Availability Embedded etcd")," documentation for more information on using embedded etcd with multiple servers.\nEmbedded etcd will be automatically selected if K3s is configured to initialize a new etcd cluster, join an existing etcd cluster, or if etcd database files are present on disk during startup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Database"),(0,n.kt)("br",{parentName:"li"}),"See the ",(0,n.kt)("a",{parentName:"li",href:"/docs-k3s/datastore/ha"},"High Availability External DB")," documentation for more information on using external datastores with multiple servers.",(0,n.kt)("br",{parentName:"li"}),"The following external datastores are supported:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd")," (certified against version 3.5.4)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (certified against versions 5.7 and 8.0)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB")," (certified against version 10.6.8)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," (certified against versions 10.7, 11.5, and 14.2)")))),(0,n.kt)("h3",{id:"external-datastore-configuration-parameters"},"External Datastore Configuration Parameters"),(0,n.kt)("p",null,"If you wish to use an external datastore such as PostgreSQL, MySQL, or etcd you must set the ",(0,n.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter so that K3s knows how to connect to it. You may also specify parameters to configure the authentication and encryption of the connection. The below table summarizes these parameters, which can be passed as either CLI flags or environment variables."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"CLI Flag"),(0,n.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--datastore-endpoint")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_ENDPOINT")),(0,n.kt)("td",{parentName:"tr",align:null},"Specify a PostgreSQL, MySQL, or etcd connection string. This is a string used to describe the connection to the datastore. The structure of this string is specific to each backend and is detailed below.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--datastore-cafile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_CAFILE")),(0,n.kt)("td",{parentName:"tr",align:null},"TLS Certificate Authority (CA) file used to help secure communication with the datastore. If your datastore serves requests over TLS using a certificate signed by a custom certificate authority, you can specify that CA using this parameter so that the K3s client can properly verify the certificate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--datastore-certfile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_CERTFILE")),(0,n.kt)("td",{parentName:"tr",align:null},"TLS certificate file used for client certificate based authentication to your datastore. To use this feature, your datastore must be configured to support client certificate based authentication. If you specify this parameter, you must also specify the ",(0,n.kt)("inlineCode",{parentName:"td"},"datastore-keyfile")," parameter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--datastore-keyfile")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"K3S_DATASTORE_KEYFILE")),(0,n.kt)("td",{parentName:"tr",align:null},"TLS key file used for client certificate based authentication to your datastore. See the previous ",(0,n.kt)("inlineCode",{parentName:"td"},"datastore-certfile")," parameter for more details.")))),(0,n.kt)("p",null,"As a best practice we recommend setting these parameters as environment variables rather than command line arguments so that your database credentials or other sensitive information aren't exposed as part of the process info."),(0,n.kt)("h3",{id:"datastore-endpoint-format-and-functionality"},"Datastore Endpoint Format and Functionality"),(0,n.kt)("p",null,"As mentioned, the format of the value passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter is dependent upon the datastore backend. The following details this format and functionality for each supported external datastore."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,n.kt)("p",null,"  In its most common form, the datastore-endpoint parameter for PostgreSQL has the following format:"),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"postgres://username:password@hostname:port/database-name")),(0,n.kt)("p",null,"  More advanced configuration parameters are available. For more information on these, please see ",(0,n.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/lib/pq"},"https://godoc.org/github.com/lib/pq"),"."),(0,n.kt)("p",null,"  If you specify a database name and it does not exist, the server will attempt to create it."),(0,n.kt)("p",null,"  If you only supply ",(0,n.kt)("inlineCode",{parentName:"p"},"postgres://"),"  as the endpoint, K3s will attempt to do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect to localhost using ",(0,n.kt)("inlineCode",{parentName:"li"},"postgres")," as the username and password"),(0,n.kt)("li",{parentName:"ul"},"Create a database named ",(0,n.kt)("inlineCode",{parentName:"li"},"kubernetes")))),(0,n.kt)(i.Z,{value:"MySQL / MariaDB",mdxType:"TabItem"},(0,n.kt)("p",null,"  In its most common form, the ",(0,n.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter for MySQL and MariaDB has the following format:"),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"mysql://username:password@tcp(hostname:3306)/database-name")),(0,n.kt)("p",null,"  More advanced configuration parameters are available. For more information on these, please see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"},"https://github.com/go-sql-driver/mysql#dsn-data-source-name")),(0,n.kt)("p",null,"  Note that due to a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues/1093"},"known issue")," in K3s, you cannot set the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls"),' parameter. TLS communication is supported, but you cannot, for example, set this parameter to "skip-verify" to cause K3s to skip certificate verification.'),(0,n.kt)("p",null,"  If you specify a database name and it does not exist, the server will attempt to create it."),(0,n.kt)("p",null,"  If you only supply ",(0,n.kt)("inlineCode",{parentName:"p"},"mysql://")," as the endpoint, K3s will attempt to do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect to the MySQL socket at ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/run/mysqld/mysqld.sock")," using the ",(0,n.kt)("inlineCode",{parentName:"li"},"root")," user and no password"),(0,n.kt)("li",{parentName:"ul"},"Create a database with the name ",(0,n.kt)("inlineCode",{parentName:"li"},"kubernetes")))),(0,n.kt)(i.Z,{value:"etcd",mdxType:"TabItem"},(0,n.kt)("p",null,"  In its most common form, the ",(0,n.kt)("inlineCode",{parentName:"p"},"datastore-endpoint")," parameter for etcd has the following format:"),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"https://etcd-host-1:2379,https://etcd-host-2:2379,https://etcd-host-3:2379")),(0,n.kt)("p",null,"  The above assumes a typical three node etcd cluster. The parameter can accept one more comma separated etcd URLs."))))}m.isMDXComponent=!0}}]);