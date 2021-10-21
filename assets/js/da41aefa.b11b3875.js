"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2768],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1526:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],c={title:"Metadata Ingestion Architecture",sidebar_label:"Metadata Ingestion Architecture",slug:"/architecture/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/architecture/metadata-ingestion.md"},s="Metadata Ingestion Architecture",u={unversionedId:"docs/architecture/metadata-ingestion",id:"docs/architecture/metadata-ingestion",isDocsHomePage:!1,title:"Metadata Ingestion Architecture",description:"DataHub supports an extremely flexible ingestion architecture that can support push, pull, asynchronous and synchronous models.",source:"@site/genDocs/docs/architecture/metadata-ingestion.md",sourceDirName:"docs/architecture",slug:"/architecture/metadata-ingestion",permalink:"/docs/architecture/metadata-ingestion",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/architecture/metadata-ingestion.md",tags:[],version:"current",frontMatter:{title:"Metadata Ingestion Architecture",sidebar_label:"Metadata Ingestion Architecture",slug:"/architecture/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/architecture/metadata-ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Architecture Overview",permalink:"/docs/architecture/architecture"},next:{title:"Serving Architecture",permalink:"/docs/architecture/metadata-serving"}},l=[{value:"MCE: The Center Piece",id:"mce-the-center-piece",children:[],level:2},{value:"Pull-based Integration",id:"pull-based-integration",children:[],level:2},{value:"Push-based Integration",id:"push-based-integration",children:[],level:2},{value:"Internal Components",id:"internal-components",children:[{value:"Applying MCE-s to DataHub Service Tier (mce-consumer)",id:"applying-mce-s-to-datahub-service-tier-mce-consumer",children:[],level:3}],level:2}],d={toc:l};function p(e){var t=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metadata-ingestion-architecture"},"Metadata Ingestion Architecture"),(0,i.kt)("p",null,"DataHub supports an extremely flexible ingestion architecture that can support push, pull, asynchronous and synchronous models.\nThe figure below describes all the options possible for connecting your favorite system to DataHub.\n",(0,i.kt)("img",{alt:"Ingestion Architecture",src:n(4429).Z})),(0,i.kt)("h2",{id:"mce-the-center-piece"},"MCE: The Center Piece"),(0,i.kt)("p",null,"The center piece for ingestion is the ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-change-event-mce"},"Metadata Change Event (MCE)")," which represents a metadata change that is being communicated by an upstream system.\nMCE-s can be sent over Kafka, for highly scalable async publishing from source systems. They can also be sent directly to the HTTP endpoint exposed by the DataHub service tier to get synchronous success / failure responses. "),(0,i.kt)("h2",{id:"pull-based-integration"},"Pull-based Integration"),(0,i.kt)("p",null,"DataHub ships with a Python based ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata-ingestion system")," that can connect to different sources to pull metadata from them. This metadata is then pushed via Kafka or HTTP to the DataHub storage tier. Metadata ingestion pipelines can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#lineage-with-airflow"},"integrated with Airflow")," to set up scheduled ingestion or capture lineage. If you don't find a source already supported, it is very easy to ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#contributing"},"write your own"),"."),(0,i.kt)("h2",{id:"push-based-integration"},"Push-based Integration"),(0,i.kt)("p",null,"As long as you can emit a ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-change-event-mce"},"Metadata Change Event (MCE)")," event to Kafka or make a REST call over HTTP, you can integrate any system with DataHub. For convenience, DataHub also provides simple ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#using-as-a-library"},"Python emitters")," for you to integrate into your systems to emit metadata changes (MCE-s) at the point of origin."),(0,i.kt)("h2",{id:"internal-components"},"Internal Components"),(0,i.kt)("h3",{id:"applying-mce-s-to-datahub-service-tier-mce-consumer"},"Applying MCE-s to DataHub Service Tier (mce-consumer)"),(0,i.kt)("p",null,"DataHub comes with a Kafka Streams based job, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job"},"mce-consumer-job"),", which consumes the MCE-s and converts them into the ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/how_data_is_represented_in_memory#the-data-template-layer"},"equivalent Pegasus format")," and sends it to the DataHub Service Tier (datahub-gms) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"/ingest")," endpoint. "))}p.isMDXComponent=!0},4429:function(e,t,n){t.Z=n.p+"assets/images/ingestion-architecture-cd631d7c4a648ceb82908ce25b9f93b9.png"}}]);