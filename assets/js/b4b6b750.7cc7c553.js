"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[591],{4137:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,f=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(f,l(l({ref:e},p),{},{components:a})):n.createElement(f,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4742:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=["components"],o={title:"dbt",sidebar_label:"dbt",slug:"/metadata-ingestion/source_docs/dbt",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/dbt.md"},d="dbt",s={unversionedId:"metadata-ingestion/source_docs/dbt",id:"metadata-ingestion/source_docs/dbt",isDocsHomePage:!1,title:"dbt",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/dbt.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/dbt",permalink:"/docs/metadata-ingestion/source_docs/dbt",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/dbt.md",tags:[],version:"current",frontMatter:{title:"dbt",sidebar_label:"dbt",slug:"/metadata-ingestion/source_docs/dbt",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/dbt.md"},sidebar:"overviewSidebar",previous:{title:"Business Glossary",permalink:"/docs/metadata-ingestion/source_docs/business_glossary"},next:{title:"Druid",permalink:"/docs/metadata-ingestion/source_docs/druid"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],u={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dbt"},"dbt"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Works with ",(0,i.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," out of the box."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin pulls metadata from dbt's artifact files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/artifacts/manifest-json"},"dbt manifest file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file contains model, source and lineage data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/artifacts/catalog-json"},"dbt catalog file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file contains schema data."),(0,i.kt)("li",{parentName:"ul"},"dbt does not record schema data for Ephemeral models, as such datahub will show Ephemeral models in the lineage, however there will be no associated schema for Ephemeral models"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/artifacts/sources-json"},"dbt sources file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file contains metadata for sources with freshness checks."),(0,i.kt)("li",{parentName:"ul"},"We transfer dbt's freshness checks to DataHub's last-modified fields."),(0,i.kt)("li",{parentName:"ul"},"Note that this file is optional \u2013 if not specified, we'll use time of ingestion instead as a proxy for time last-modified."))),(0,i.kt)("li",{parentName:"ul"},"target_platform:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The data platform you are enriching with dbt metadata."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-service/restli-impl/src/main/resources/DataPlatformInfo.json"},"data platforms")))),(0,i.kt)("li",{parentName:"ul"},"load_schemas:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Load schemas from dbt catalog file, not necessary when the underlying data platform already has this data."))),(0,i.kt)("li",{parentName:"ul"},"use_identifiers:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use model ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/resource-properties/identifier"},"identifier")," instead of model name if defined (if not, default to model name)."))),(0,i.kt)("li",{parentName:"ul"},"tag_prefix:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Prefix added to tags during ingestion."))),(0,i.kt)("li",{parentName:"ul"},"node_type_pattern:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use this filter to exclude and include node types using allow or deny method")))),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "dbt"\n  config:\n    # Coordinates\n    manifest_path: "./path/dbt/manifest_file.json"\n    catalog_path: "./path/dbt/catalog_file.json"\n    sources_path: "./path/dbt/sources_file.json"\n\n    # Options\n    target_platform: "my_target_platform_id"\n    load_schemas: True # note: if this is disabled\n\nsink:\n  # sink configs\n')),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"manifest_path")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dbt manifest JSON. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/artifacts/manifest-json"},"https://docs.getdbt.com/reference/artifacts/manifest-json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"catalog_path")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dbt catalog JSON. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/artifacts/catalog-json"},"https://docs.getdbt.com/reference/artifacts/catalog-json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sources_path")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dbt sources JSON. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/artifacts/sources-json"},"https://docs.getdbt.com/reference/artifacts/sources-json"),". If not specified, last-modified fields will not be populated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,i.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"target_platform")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The platform that dbt is loading onto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"load_schemas")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to load database schemas. If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"False"),", table schema details (e.g. columns) will not be ingested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"use_identifiers")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to use model identifiers instead of names, if defined (if not, default to names)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tag_prefix")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dbt:")),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix added to tags during ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type_pattern.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for dbt nodes to include in ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type_pattern.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for dbt nodes to exclude from ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type_pattern.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")))),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Coming soon!"),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);