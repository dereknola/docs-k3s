"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[918],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),v=r,p=u["".concat(o,".").concat(v)]||u[v]||d[v]||l;return n?a.createElement(p,i(i({ref:t},m),{},{components:n})):a.createElement(p,i({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7594:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ye}});var a=n(7294),r=n(6010),l=n(1944),i=n(7524),c=n(5281),o=n(7462),s=n(5999),m=n(9960);function d(e){var t=e.permalink,n=e.title,l=e.subLabel,i=e.isNext;return a.createElement(m.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function u(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d,(0,o.Z)({},t,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d,(0,o.Z)({},n,{subLabel:a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var v=n(2263),p=n(143),f=n(373),h=n(4477);var b={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=b[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(m.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function N(e){var t,n=e.className,l=e.versionMetadata,i=(0,v.Z)().siteConfig.title,o=(0,p.gA)({failfast:!0}).pluginId,s=(0,f.J)(o).savePreferredVersionName,m=(0,p.Jo)(o),d=m.latestDocSuggestion,u=m.latestVersionSuggestion,h=null!=d?d:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:i,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:u.label,to:h.path,onClick:function(){return s(u.name)}})))}function y(e){var t=e.className,n=(0,h.E)();return n.banner?a.createElement(N,{className:t,versionMetadata:n}):null}function L(e){var t=e.className,n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function Z(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:c.k.common.lastUpdated},a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(Z,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(k,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var T=n(3366),C="iconEdit_eYIM",x=["className"];function O(e){var t=e.className,n=(0,T.Z)(e,x);return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(C,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},a.createElement(O,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var H="tag_zVej",A="tagRegular_sFm0",U="tagWithCount_h2kH";function M(e){var t=e.permalink,n=e.label,l=e.count;return a.createElement(m.Z,{href:t,className:(0,r.Z)(H,l?U:A)},n,l&&a.createElement("span",null,l))}var I="tags_jXut",P="tag_QGVx";function S(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(I,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:P},a.createElement(M,{label:t,permalink:n}))}))))}var j="lastUpdated_vbeJ";function B(e){return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(S,e)))}function D(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(c.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",j)},(n||l)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function V(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,m=s.length>0,d=!!(n||l||o);return m||d?a.createElement("footer",{className:(0,r.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},m&&a.createElement(B,{tags:s}),d&&a.createElement(D,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var R=n(6668),z=["parentIndex"];function F(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,T.Z)(e,z);n>=0?t[n].children.push(r):a.push(r)})),a}function q(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function W(e){var t=e.getBoundingClientRect();return t.top===t.bottom?W(e.parentNode):t}function G(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return W(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(W(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function J(){var e=(0,a.useRef)(0),t=(0,R.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){var t=(0,a.useRef)(void 0),n=J();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=G(c,{anchorTopOffset:n.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function X(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(X,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var Q=a.memo(X),K=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function $(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,s=void 0===c?void 0:c,m=e.minHeadingLevel,d=e.maxHeadingLevel,u=(0,T.Z)(e,K),v=(0,R.L)(),p=null!=m?m:v.tableOfContents.minHeadingLevel,f=null!=d?d:v.tableOfContents.maxHeadingLevel,h=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return q({toc:F(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return Y((0,a.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:f}}),[i,s,p,f])),a.createElement(Q,(0,o.Z)({toc:h,className:r,linkClassName:i},u))}var ee="tableOfContents_bqdL",te=["className"];function ne(e){var t=e.className,n=(0,T.Z)(e,te);return a.createElement("div",{className:(0,r.Z)(ee,"thin-scrollbar",t)},a.createElement($,(0,o.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var ae=n(6043),re="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E",ie=["collapsed"];function ce(e){var t=e.collapsed,n=(0,T.Z)(e,ie);return a.createElement("button",(0,o.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",re,!t&&le,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var oe="tocCollapsible_ETCw",se="tocCollapsibleContent_vkbj",me="tocCollapsibleExpanded_sAul";function de(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,ae.u)({initialState:!0}),o=c.collapsed,s=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(oe,!o&&me,n)},a.createElement(ce,{collapsed:o,onClick:s}),a.createElement(ae.z,{lazy:!0,className:se,collapsed:o},a.createElement($,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var ue="anchorWithStickyNavbar_LWe7",ve="anchorWithHideOnScrollNavbar_WYt5",pe=["as","id"];function fe(e){var t=e.as,n=e.id,l=(0,T.Z)(e,pe),i=(0,R.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,o.Z)({},l,{className:(0,r.Z)("anchor",i?ve:ue),id:n}),l.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,o.Z)({},l,{id:void 0}))}var he=n(3791),be=n(8596),ge=n(4996);function Ee(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var Ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ye(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(m.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Le(e){var t=e.children,n=e.active,l=e.index,i=e.addMicrodata;return a.createElement("li",(0,o.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Ze(){var e=(0,ge.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",Ne.breadcrumbsItemLink),href:e},a.createElement(Ee,{className:Ne.breadcrumbHomeIcon})))}function ke(){var e=(0,he.s1)(),t=(0,be.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,Ne.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Ze,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(Le,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(ye,{href:t.href,isLast:r},t.label))})))):null}var _e=n(3905),Te=n(5742),Ce=["mdxType","originalType"];var xe=n(3066);var Oe=n(2389),we="details_lb9f",He="isBrowser_bmU9",Ae="collapsibleContent_i85q",Ue=["summary","children"];function Me(e){return!!e&&("SUMMARY"===e.tagName||Me(e.parentElement))}function Ie(e,t){return!!e&&(e===t||Ie(e.parentElement,t))}function Pe(e){var t=e.summary,n=e.children,l=(0,T.Z)(e,Ue),i=(0,Oe.Z)(),c=(0,a.useRef)(null),s=(0,ae.u)({initialState:!l.open}),m=s.collapsed,d=s.setCollapsed,u=(0,a.useState)(l.open),v=u[0],p=u[1];return a.createElement("details",(0,o.Z)({},l,{ref:c,open:v,"data-collapsed":m,className:(0,r.Z)(we,i&&He,l.className),onMouseDown:function(e){Me(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;Me(t)&&Ie(t,c.current)&&(e.preventDefault(),m?(d(!1),p(!0)):d(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(ae.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){d(e),p(!e)}},a.createElement("div",{className:Ae},n)))}var Se="details_b_Ee";function je(e){var t=Object.assign({},e);return a.createElement(Pe,(0,o.Z)({},t,{className:(0,r.Z)("alert alert--info",Se,t.className)}))}function Be(e){return a.createElement(fe,e)}var De="containsTaskList_mC6p";var Ve="img_ev3q";var Re={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,T.Z)(n,Ce));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(Te.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(xe.Z,e)},a:function(e){return a.createElement(m.Z,e)},pre:function(e){var t;return a.createElement(xe.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(je,(0,o.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&De))}));var t},img:function(e){return a.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,Ve))}));var t},h1:function(e){return a.createElement(Be,(0,o.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Be,(0,o.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Be,(0,o.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Be,(0,o.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Be,(0,o.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Be,(0,o.Z)({as:"h6"},e))}};function ze(e){var t=e.children;return a.createElement(_e.Zo,{components:Re},t)}var Fe="docItemContainer_Adtb",qe="docItemCol_GujU",We="tocMobile_aoJ5";function Ge(e){var t,n=e.content,r=n.metadata,i=n.frontMatter,c=n.assets,o=i.keywords,s=r.description,m=r.title,d=null!=(t=c.image)?t:i.image;return a.createElement(l.d,{title:m,description:s,keywords:o,image:d})}function Je(e){var t=e.content,n=t.metadata,l=t.frontMatter,o=l.hide_title,s=l.hide_table_of_contents,m=l.toc_min_heading_level,d=l.toc_max_heading_level,v=n.title,p=!o&&void 0===t.contentTitle,f=(0,i.i)(),h=!s&&t.toc&&t.toc.length>0,b=h&&("desktop"===f||"ssr"===f);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!s&&qe)},a.createElement(y,null),a.createElement("div",{className:Fe},a.createElement("article",null,a.createElement(ke,null),a.createElement(L,null),h&&a.createElement(de,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:(0,r.Z)(c.k.docs.docTocMobile,We)}),a.createElement("div",{className:(0,r.Z)(c.k.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(fe,{as:"h1"},v)),a.createElement(ze,null,a.createElement(t,null))),a.createElement(V,e)),a.createElement(u,{previous:n.previous,next:n.next}))),b&&a.createElement("div",{className:"col col--3"},a.createElement(ne,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:c.k.docs.docTocDesktop})))}function Ye(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(l.FG,{className:t},a.createElement(Ge,e),a.createElement(Je,e))}},4477:function(e,t,n){n.d(t,{E:function(){return c},q:function(){return i}});var a=n(7294),r=n(9688),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);