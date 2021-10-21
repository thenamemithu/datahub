"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4947],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],l={title:"No Code Metadata",sidebar_label:"No Code Metadata",slug:"/advanced/no-code-modeling",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/no-code-modeling.md"},s="No Code Metadata",d={unversionedId:"docs/advanced/no-code-modeling",id:"docs/advanced/no-code-modeling",isDocsHomePage:!1,title:"No Code Metadata",description:"Summary of changes",source:"@site/genDocs/docs/advanced/no-code-modeling.md",sourceDirName:"docs/advanced",slug:"/advanced/no-code-modeling",permalink:"/docs/advanced/no-code-modeling",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/advanced/no-code-modeling.md",tags:[],version:"current",frontMatter:{title:"No Code Metadata",sidebar_label:"No Code Metadata",slug:"/advanced/no-code-modeling",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/no-code-modeling.md"},sidebar:"overviewSidebar",previous:{title:"MetadataChangeEvent (MCE) Consumer Job",permalink:"/docs/metadata-jobs/mce-consumer-job"},next:{title:"Aspect Versioning",permalink:"/docs/advanced/aspect-versioning"}},p=[{value:"Summary of changes",id:"summary-of-changes",children:[],level:2},{value:"Engineering Spec",id:"engineering-spec",children:[{value:"Primary Goal",id:"primary-goal",children:[],level:3},{value:"Secondary Goal",id:"secondary-goal",children:[],level:3},{value:"Must-Haves",id:"must-haves",children:[],level:3}],level:2},{value:"Nice-to-haves",id:"nice-to-haves",children:[],level:2},{value:"What Success Looks Like",id:"what-success-looks-like",children:[],level:2},{value:"Design",id:"design",children:[],level:2},{value:"State of the World",id:"state-of-the-world",children:[{value:"Modeling",id:"modeling",children:[],level:3}],level:2},{value:"Proposed Solution",id:"proposed-solution",children:[{value:"How will we do it?",id:"how-will-we-do-it",children:[],level:3},{value:"Final Developer Experience: Defining an Entity",id:"final-developer-experience-defining-an-entity",children:[{value:"Step 1. Add aspects",id:"step-1-add-aspects",children:[],level:4},{value:"Step 2. Add aspect union.",id:"step-2-add-aspect-union",children:[],level:4},{value:"Step 3. Add Snapshot model.",id:"step-3-add-snapshot-model",children:[],level:4},{value:"Step 4. Update Snapshot union.",id:"step-4-update-snapshot-union",children:[],level:4}],level:3},{value:"Interacting with New Entity",id:"interacting-with-new-entity",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-code-metadata"},"No Code Metadata"),(0,o.kt)("h2",{id:"summary-of-changes"},"Summary of changes"),(0,o.kt)("p",null,"As part of the No Code Metadata Modeling initiative, we've made radical changes to the DataHub stack. "),(0,o.kt)("p",null,"Specifically, we've "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Decoupled the persistence layer from Java + Rest.li specific concepts "),(0,o.kt)("li",{parentName:"ul"},"Consolidated the per-entity Rest.li resources into a single general-purpose Entity Resource"),(0,o.kt)("li",{parentName:"ul"},"Consolidated the per-entity Graph Index Writers + Readers into a single general-purpose Neo4J DAO "),(0,o.kt)("li",{parentName:"ul"},"Consolidated the per-entity Search Index Writers + Readers into a single general-purpose ES DAO. "),(0,o.kt)("li",{parentName:"ul"},"Developed mechanisms for declaring search indexing configurations + foreign key relationships as annotations\non PDL models themselves."),(0,o.kt)("li",{parentName:"ul"},'Introduced a special "Browse Paths" aspect that allows the browse configuration to be\npushed into DataHub, as opposed to computed in a blackbox lambda sitting within DataHub'),(0,o.kt)("li",{parentName:"ul"},'Introduced special "Key" aspects for conveniently representing the information that identifies a DataHub entities via\na normal struct.'),(0,o.kt)("li",{parentName:"ul"},"Removed the need for hand-written Elastic ",(0,o.kt)("inlineCode",{parentName:"li"},"settings.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mappings.json"),". (Now generated at runtime)"),(0,o.kt)("li",{parentName:"ul"},"Removed the need for the Elastic Set Up container (indexes are not registered at runtime)"),(0,o.kt)("li",{parentName:"ul"},"Simplified the number of models that need to be maintained for each DataHub entity. We removed the need for",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Relationship Models"),(0,o.kt)("li",{parentName:"ol"},"Entity Models "),(0,o.kt)("li",{parentName:"ol"},"Urn models + the associated Java container classes "),(0,o.kt)("li",{parentName:"ol"},"'Value' models, those which are returned by the Rest.li resource")))),(0,o.kt)("p",null,"In doing so, dramatically reducing the level of effort required to add or extend an existing entity."),(0,o.kt)("p",null,"For more on the design considerations, see the ",(0,o.kt)("strong",{parentName:"p"},"Design")," section below."),(0,o.kt)("h2",{id:"engineering-spec"},"Engineering Spec"),(0,o.kt)("p",null,"This section will provide a more in-depth overview of the design considerations that were at play when working on the No\nCode initiative. "),(0,o.kt)("h1",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"Who needs what & why?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"As a"),(0,o.kt)("th",{parentName:"tr",align:null},"I want to"),(0,o.kt)("th",{parentName:"tr",align:null},"because"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DataHub Operator"),(0,o.kt)("td",{parentName:"tr",align:null},"Add new entities"),(0,o.kt)("td",{parentName:"tr",align:null},"The default domain model does not match my business needs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DataHub Operator"),(0,o.kt)("td",{parentName:"tr",align:null},"Extend existing entities"),(0,o.kt)("td",{parentName:"tr",align:null},"The default domain model does not match my business needs")))),(0,o.kt)("p",null,"What we heard from folks in the community is that adding new entities + aspects is just ",(0,o.kt)("strong",{parentName:"p"},"too difficult"),"."),(0,o.kt)("p",null,"They'd be happy if this process was streamlined and simple. ",(0,o.kt)("strong",{parentName:"p"},"Extra")," happy if there was no chance of merge conflicts in the future. (no fork necessary)"),(0,o.kt)("h1",{id:"goals"},"Goals"),(0,o.kt)("h3",{id:"primary-goal"},"Primary Goal"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reduce the friction")," of adding new entities, aspects, and relationships."),(0,o.kt)("h3",{id:"secondary-goal"},"Secondary Goal"),(0,o.kt)("p",null,"Achieve the primary goal in a way that does not require a fork."),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"must-haves"},"Must-Haves"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Mechanisms for ",(0,o.kt)("strong",{parentName:"li"},"adding")," a browsable, searchable, linkable GMS entity by defining one or more PDL models")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity"),(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity relationships"),(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for searching entity"),(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for browsing entity")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Mechanisms for ",(0,o.kt)("strong",{parentName:"li"},"extending")," a *",(0,o.kt)("strong",{parentName:"li"},"*browsable, searchable, linkable GMS **"),"entity by defining one or more PDL models")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity"),(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for fetching entity relationships"),(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for searching entity"),(0,o.kt)("li",{parentName:"ul"},"GMS Endpoint for browsing entity")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Mechanisms + conventions for introducing a new ",(0,o.kt)("strong",{parentName:"li"},"relationship")," between 2 GMS entities without writing code"),(0,o.kt)("li",{parentName:"ol"},"Clear documentation describing how to perform actions in #1, #2, and #3 above published on ",(0,o.kt)("a",{parentName:"li",href:"http://datahubproject.io"},"datahubproject.io"))),(0,o.kt)("h2",{id:"nice-to-haves"},"Nice-to-haves"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Mechanisms for automatically generating a working GraphQL API using the entity PDL models"),(0,o.kt)("li",{parentName:"ol"},"Ability to add / extend GMS entities without a fork.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"e.g. ",(0,o.kt)("strong",{parentName:"li"},"Register")," new entity / extensions ",(0,o.kt)("em",{parentName:"li"},"at runtime"),". (Unlikely due to code generation)"),(0,o.kt)("li",{parentName:"ul"},"or, ",(0,o.kt)("strong",{parentName:"li"},"configure")," new entities at ",(0,o.kt)("em",{parentName:"li"},"deploy time"))),(0,o.kt)("h2",{id:"what-success-looks-like"},"What Success Looks Like"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding a new browsable, searchable entity to GMS (not DataHub UI / frontend) takes 1 dev < 15 minutes."),(0,o.kt)("li",{parentName:"ol"},"Extending an existing browsable, searchable entity in GMS takes 1 dev < 15 minutes"),(0,o.kt)("li",{parentName:"ol"},"Adding a new relationship among 2 GMS entities takes 1 dev < 15 minutes"),(0,o.kt)("li",{parentName:"ol"},"[Bonus]"," Implementing the ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," GraphQL API for a new / extended entity takes < 10 minutes")),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("h2",{id:"state-of-the-world"},"State of the World"),(0,o.kt)("h3",{id:"modeling"},"Modeling"),(0,o.kt)("p",null,"Currently, there are various models in GMS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/li-utils/src/main/pegasus/com/linkedin/common/DatasetUrn.pdl"},"Urn")," - Structs composing primary keys"),(0,o.kt)("li",{parentName:"ol"},"[Root][Snapshots]","(",(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/snapshot/Snapshot.pdl"},"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/snapshot/Snapshot.pdl"),") - Container of aspects"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/aspect/DashboardAspect.pdl"},"Aspects")," - Optional container of fields"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/gms/api/src/main/pegasus/com/linkedin/dataset/Dataset.pdl"},"Values"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/gms/api/src/main/pegasus/com/linkedin/dataset/DatasetKey.pdl"},"Keys")," - Model returned by GMS ",(0,o.kt)("a",{parentName:"li",href:"http://rest.li"},"Rest.li")," API (public facing)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/entity/DatasetEntity.pdl"},"Entities")," - Records with fields derived from the URN. Used only in graph / relationships"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/relationship/Relationship.pdl"},"Relationships")," - Edges between 2 entities with optional edge properties"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/search/ChartDocument.pdl"},"Search Documents")," - Flat documents for indexing within Elastic index")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"And corresponding index ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/resources/index/chart/mappings.json"},"mappings.json"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/resources/index/chart/settings.json"},"settings.json"))),(0,o.kt)("p",null,"Various components of GMS depend on / make assumptions about these model types:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"IndexBuilders depend on ",(0,o.kt)("strong",{parentName:"li"},"Documents")),(0,o.kt)("li",{parentName:"ol"},"GraphBuilders depend on ",(0,o.kt)("strong",{parentName:"li"},"Snapshots")),(0,o.kt)("li",{parentName:"ol"},"RelationshipBuilders depend on ",(0,o.kt)("strong",{parentName:"li"},"Aspects")),(0,o.kt)("li",{parentName:"ol"},"Mae Processor depend on ",(0,o.kt)("strong",{parentName:"li"},"Snapshots, Documents, Relationships")),(0,o.kt)("li",{parentName:"ol"},"Mce Processor depend on ",(0,o.kt)("strong",{parentName:"li"},"Snapshots, Urns")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://rest.li"},"Rest.li")," Resources on ",(0,o.kt)("strong",{parentName:"li"},"Documents, Snapshots, Aspects, Values, Urns")),(0,o.kt)("li",{parentName:"ol"},"Graph Reader Dao (BaseQueryDao) depends on ",(0,o.kt)("strong",{parentName:"li"},"Relationships, Entity")),(0,o.kt)("li",{parentName:"ol"},"Graph Writer Dao (BaseGraphWriterDAO) depends on ",(0,o.kt)("strong",{parentName:"li"},"Relationships, Entity")),(0,o.kt)("li",{parentName:"ol"},"Local Dao Depends on ",(0,o.kt)("strong",{parentName:"li"},"aspects, urns")),(0,o.kt)("li",{parentName:"ol"},"Search Dao depends on ",(0,o.kt)("strong",{parentName:"li"},"Documents"))),(0,o.kt)("p",null,"Additionally, there are some implicit concepts that require additional caveats / logic:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browse Paths - Requires defining logic in an entity-specific index builder to generate."),(0,o.kt)("li",{parentName:"ol"},"Urns - Requires defining a) an Urn PDL model and b) a hand-written Urn class ")),(0,o.kt)("p",null,"As you can see, there are many tied up concepts. Fundamentally changing the model would require a serious amount of refactoring, as it would require new versions of numerous components."),(0,o.kt)("p",null,"The challenge is, how can we meet the requirements without fundamentally altering the model?"),(0,o.kt)("h2",{id:"proposed-solution"},"Proposed Solution"),(0,o.kt)("p",null,"In a nutshell, the idea is to consolidate the number of models + code we need to write on a per-entity basis.\nWe intend to achieve this by making search index + relationship configuration declarative, specified as part of the model\ndefinition itself. "),(0,o.kt)("p",null,"We will use this configuration to drive more generic versions of the index builders + rest resources,\nwith the intention of reducing the overall surface area of GMS. "),(0,o.kt)("p",null,"During this initiative, we will also seek to make the concepts of Browse Paths and Urns declarative. Browse Paths\nwill be provided using a special BrowsePaths aspect. Urns will no longer be strongly typed. "),(0,o.kt)("p",null,"To achieve this, we will attempt to generify many components throughout the stack. Currently, many of them are defined on\na ",(0,o.kt)("em",{parentName:"p"},"per-entity")," basis, including"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rest.li Resources"),(0,o.kt)("li",{parentName:"ul"},"Index Builders"),(0,o.kt)("li",{parentName:"ul"},"Graph Builders"),(0,o.kt)("li",{parentName:"ul"},"Local, Search, Browse, Graph DAOs"),(0,o.kt)("li",{parentName:"ul"},"Clients "),(0,o.kt)("li",{parentName:"ul"},"Browse Path Logic")),(0,o.kt)("p",null,"along with simplifying the number of raw data models that need defined, including "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rest.li Resource Models"),(0,o.kt)("li",{parentName:"ul"},"Search Document Models"),(0,o.kt)("li",{parentName:"ul"},"Relationship Models"),(0,o.kt)("li",{parentName:"ul"},"Urns + their java classes")),(0,o.kt)("p",null,"From an architectural PoV, we will move from a before that looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"no-code-before",src:n(8812).Z})),(0,o.kt)("p",null,"to an after that looks like this"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"no-code-after",src:n(6038).Z})),(0,o.kt)("p",null,"That is, a move away from patterns of strong-typing-everywhere to a more generic + flexible world. "),(0,o.kt)("h3",{id:"how-will-we-do-it"},"How will we do it?"),(0,o.kt)("p",null,"We will accomplish this by building the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set of custom annotations to permit declarative entity, search, graph configurations",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"@Entity & @Aspect"),(0,o.kt)("li",{parentName:"ul"},"@Searchable"),(0,o.kt)("li",{parentName:"ul"},"@Relationship"))),(0,o.kt)("li",{parentName:"ol"},"Entity Registry: In-memory structures for representing, storing & serving metadata associated with a particular Entity, including search and relationship configurations."),(0,o.kt)("li",{parentName:"ol"},"Generic Entity, Search, Graph Service classes: Replaces traditional strongly-typed DAOs with flexible, pluggable APIs that can be used for CRUD, search, and graph across all entities. "),(0,o.kt)("li",{parentName:"ol"},"Generic Rest.li Resources: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1 permitting reading, writing, searching, autocompleting, and browsing arbitrary entities"),(0,o.kt)("li",{parentName:"ul"},"1 permitting reading of arbitrary entity-entity relationship edges"))),(0,o.kt)("li",{parentName:"ol"},"Generic Search Index Builder: Given a MAE and a specification of the Search Configuration for an entity, updates the search index."),(0,o.kt)("li",{parentName:"ol"},"Generic Graph Index Builder: Given a MAE and a specification of the Relationship Configuration for an entity, updates the graph index. "),(0,o.kt)("li",{parentName:"ol"},"Generic Index + Mappings Builder: Dynamically generates index mappings and creates indices on the fly."),(0,o.kt)("li",{parentName:"ol"},"Introduce of special aspects to address other imperative code requirements",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BrowsePaths Aspect: Include an aspect to permit customization of the indexed browse paths."),(0,o.kt)("li",{parentName:"ul"},'Key aspects: Include "virtual" aspects for representing the fields that uniquely identify an Entity for easy\nreading by clients of DataHub. ')))),(0,o.kt)("h3",{id:"final-developer-experience-defining-an-entity"},"Final Developer Experience: Defining an Entity"),(0,o.kt)("p",null,'We will outline what the experience of adding a new Entity should look like. We will imagine we want to define a "Service" entity representing\nonline microservices. '),(0,o.kt)("h4",{id:"step-1-add-aspects"},"Step 1. Add aspects"),(0,o.kt)("p",null,"ServiceKey.pdl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.key\n\n/**\n * Key for a Service\n */\n@Aspect = {\n  "name": "serviceKey"\n}\nrecord ServiceKey {\n  /**\n  * Name of the service\n  */\n  @Searchable = {\n    "fieldType": "TEXT_PARTIAL",\n    "enableAutocomplete": true\n  }\n  name: string\n}\n')),(0,o.kt)("p",null,"ServiceInfo.pdl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'namespace com.linkedin.service\n\nimport com.linkedin.common.Urn\n\n/**\n * Properties associated with a Tag\n */\n@Aspect = {\n  "name": "serviceInfo"\n}\nrecord ServiceInfo {\n\n  /**\n   * Description of the service\n   */\n  @Searchable = {} \n  description: string\n\n  /**\n   * The owners of the\n   */\n  @Relationship = {\n     "name": "OwnedBy",\n     "entityTypes": ["corpUser"] \n  }\n  owner: Urn\n}\n')),(0,o.kt)("h4",{id:"step-2-add-aspect-union"},"Step 2. Add aspect union."),(0,o.kt)("p",null,"ServiceAspect.pdl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.aspect\n\nimport com.linkedin.metadata.key.ServiceKey\nimport com.linkedin.service.ServiceInfo\nimport com.linkedin.common.BrowsePaths\n\n/**\n * Service Info\n */\ntyperef ServiceAspect = union[\n  ServiceKey,\n  ServiceInfo,\n  BrowsePaths\n]\n")),(0,o.kt)("h4",{id:"step-3-add-snapshot-model"},"Step 3. Add Snapshot model."),(0,o.kt)("p",null,"ServiceSnapshot.pdl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.snapshot\n\nimport com.linkedin.common.Urn\nimport com.linkedin.metadata.aspect.ServiceAspect\n\n@Entity = {\n  "name": "service",\n  "keyAspect": "serviceKey"\n}\nrecord ServiceSnapshot {\n\n  /**\n   * Urn for the service\n   */\n  urn: Urn\n\n  /**\n   * The list of service aspects\n   */\n  aspects: array[ServiceAspect]\n}\n')),(0,o.kt)("h4",{id:"step-4-update-snapshot-union"},"Step 4. Update Snapshot union."),(0,o.kt)("p",null,"Snapshot.pdl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.snapshot\n\n/**\n * A union of all supported metadata snapshot types.\n */\ntyperef Snapshot = union[\n  ... \n  ServiceSnapshot\n]\n")),(0,o.kt)("h3",{id:"interacting-with-new-entity"},"Interacting with New Entity"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write Entity")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/entities?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{\n   "entity":{ \n      "value":{\n         "com.linkedin.metadata.snapshot.ServiceSnapshot":{\n            "urn": "urn:li:service:mydemoservice",\n            "aspects":[\n               {\n                  "com.linkedin.service.ServiceInfo":{\n                     "description":"My demo service",\n                     "owner": "urn:li:corpuser:user1"                     \n                  }\n               },\n               {\n                  "com.linkedin.common.BrowsePaths":{\n                     "paths":[\n                        "/my/custom/browse/path1",\n                        "/my/custom/browse/path2"\n                     ]\n                  }\n               }\n            ]\n         }\n      }\n   }\n}\'\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Read Entity")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl 'http://localhost:8080/entities/urn%3Ali%3Aservice%3Amydemoservice' -H 'X-RestLi-Protocol-Version:2.0.0'\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Search Entity")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=search\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "input": "My demo",\n    "entity": "service",\n    "start": 0,\n    "count": 10\n}\'\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Autocomplete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=autocomplete\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "query": "mydem",\n    "entity": "service",\n    "limit": 10\n}\'\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Browse")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=browse\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "path": "/my/custom/browse",\n    "entity": "service",\n    "start": 0,\n    "limit": 10\n}\'\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Relationships")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://localhost:8080/relationships?direction=INCOMING&urn=urn%3Ali%3Acorpuser%3Auser1&types=OwnedBy' \\\n--header 'X-RestLi-Protocol-Version: 2.0.0'\n")))}m.isMDXComponent=!0},6038:function(e,t,n){t.Z=n.p+"assets/images/no-code-after-ec057839ab02f8e4bbd3892b9a8b3e54.png"},8812:function(e,t,n){t.Z=n.p+"assets/images/no-code-before-30e9204e75e9acb92dc55853e27ee8ab.png"}}]);