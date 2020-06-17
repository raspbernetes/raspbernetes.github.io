(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),b=(a(0),a(166)),c={id:"cis-benchmark",title:"CIS Benchmark"},i={id:"cis-benchmark",title:"CIS Benchmark",description:"| ID | Description | Code |",source:"@site/docs/cis-benchmark.md",permalink:"/docs/cis-benchmark",editUrl:"https://github.com/raspbernetes/docs/edit/master/website/docs/cis-benchmark.md",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/advanced_installation"},next:{title:"Kubesec Benchmark",permalink:"/docs/kubesec-benchmark"}},s=[],o={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"ID"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Code"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --anonymous-auth argument is set to false"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.1.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.10"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin EventRateLimit is set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.10.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.11"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin AlwaysAdmit is not set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.11.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.12"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin AlwaysPullImages is set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.12.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.13"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin SecurityContextDeny is set if PodSecurityPolicy is not used"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.13.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.14"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin ServiceAccount is set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.14.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.15"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin NamespaceLifecycle is set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.15.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.16"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin PodSecurityPolicy is set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.16.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.2.17"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the admission control plugin NodeRestriction is set"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.2.17.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.1.4.1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --profiling argument is set to false"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.1.4.1.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --cert-file and --key-file arguments are set as appropriate"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.1.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.2"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --client-cert-auth argument is set to true"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.2.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.3"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --auto-tls argument is not set to true"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.3.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.4"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --peer-cert-file and --peer-key-file arguments are set as appropriate"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.4.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.5"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --peer-client-cert-auth argument is set to true"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.5.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.6"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the --peer-auto-tls argument is not set to true"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.6.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.2.7"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that a unique Certificate Authority is used for etcd"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.2.7.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.5.1.1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ensure that the cluster-admin role is only used where required"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.5.1.1.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.5.1.3"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Minimize wildcard use in Roles and ClusterRoles"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.5.1.3.rego"}),"Link"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CIS.5.5.1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Configure Image Provenance using ImagePolicyWebhook admission controller"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/raspbernetes/k8s-gitops/blob/master/policies/CIS.5.5.1.rego"}),"Link"))))))}p.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),l=p(a),O=r,j=l["".concat(c,".").concat(O)]||l[O]||m[O]||b;return a?n.a.createElement(j,i(i({ref:t},o),{},{components:a})):n.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);