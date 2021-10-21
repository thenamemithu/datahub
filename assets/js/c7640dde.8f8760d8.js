"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4976],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1478:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(7462),i=a(3366),s=(a(7294),a(4137)),r=["components"],o={title:"The Metadata Model",sidebar_label:"The Metadata Model",slug:"/metadata-modeling/metadata-model",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/modeling/metadata-model.md"},l="How does DataHub model metadata?",p={unversionedId:"docs/modeling/metadata-model",id:"docs/modeling/metadata-model",isDocsHomePage:!1,title:"The Metadata Model",description:"DataHub uses the Pegasus schema (PDL) language extended with a custom set of annotations to model metadata.",source:"@site/genDocs/docs/modeling/metadata-model.md",sourceDirName:"docs/modeling",slug:"/metadata-modeling/metadata-model",permalink:"/docs/metadata-modeling/metadata-model",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/modeling/metadata-model.md",tags:[],version:"current",frontMatter:{title:"The Metadata Model",sidebar_label:"The Metadata Model",slug:"/metadata-modeling/metadata-model",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/modeling/metadata-model.md"},sidebar:"overviewSidebar",previous:{title:"File",permalink:"/docs/metadata-ingestion/sink_docs/file"},next:{title:"Extending the Metadata Model",permalink:"/docs/metadata-modeling/extending-the-metadata-model"}},c=[{value:"Querying the Metadata Graph",id:"querying-the-metadata-graph",children:[{value:"Querying an Entity",id:"querying-an-entity",children:[{value:"Fetching Latest Entity Aspects (Snapshot)",id:"fetching-latest-entity-aspects-snapshot",children:[],level:4},{value:"Fetching Versioned Aspects",id:"fetching-versioned-aspects",children:[],level:4},{value:"Fetching Timeseries Aspects",id:"fetching-timeseries-aspects",children:[],level:4}],level:3},{value:"Search Query",id:"search-query",children:[],level:3},{value:"Relationship Query",id:"relationship-query",children:[],level:3},{value:"Special Aspects",id:"special-aspects",children:[{value:"Key aspects",id:"key-aspects",children:[{value:"Example",id:"example",children:[],level:5}],level:4},{value:"BrowsePaths aspect",id:"browsepaths-aspect",children:[],level:4},{value:"Timeseries aspects",id:"timeseries-aspects",children:[],level:4},{value:"Aggregatable Timeseries aspects",id:"aggregatable-timeseries-aspects",children:[{value:"Defining a new aggregatable Timeseries aspect.",id:"defining-a-new-aggregatable-timeseries-aspect",children:[],level:5},{value:"Ingesting a Timeseries aspect",id:"ingesting-a-timeseries-aspect",children:[],level:5},{value:"Performing an aggregation on a Timeseries aspect.",id:"performing-an-aggregation-on-a-timeseries-aspect",children:[],level:5}],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-does-datahub-model-metadata"},"How does DataHub model metadata?"),(0,s.kt)("p",null,"DataHub uses the Pegasus schema (PDL) language extended with a custom set of annotations to model metadata."),(0,s.kt)("p",null,"Conceptually, metadata is modeled using the following abstractions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Entities"),": An entity is the primary node in the metadata graph. For example, an instance of a Dataset or a CorpUser is an Entity. An entity is made up of a unique identifier (a primary key) and groups of metadata which we call aspects.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Aspects"),': An aspect is a collection of attributes that describes a particular facet of an entity. They are the smallest atomic unit of write in DataHub. That is, Multiple aspects associated with the same Entity can be updated independently. For example, DatasetProperties contains a collection of attributes that describes a Dataset. Aspects can be shared across entities, for example the "Ownership" an aspect is re-used across all the Entities that have owners. ')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Keys & Urns"),": A key is a special type of aspect that contains the fields that uniquely identify an individual Entity. Key aspects can be serialized into ",(0,s.kt)("em",{parentName:"li"},"Urns"),", which represent a stringified form of the key fields used for primary-key lookup. Moreover, ",(0,s.kt)("em",{parentName:"li"},"Urns"),' can be converted back into key aspect structs, making key aspects a type of "virtual" aspect. Key aspects provide a mechanism for clients to easily read fields comprising the primary key, which are usually generally useful like Dataset names, platform names etc. Urns provide a friendly handle by which Entities can be queried without requiring a fully materialized struct. ')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Relationships"),': A relationship represents a named edge between 2 entities. They are declared via foreign key attributes within Aspects along with a custom annotation (@Relationship). Relationships permit edges to be traversed bi-directionally. For example, a Chart may refer to a CorpUser as its owner via a relationship named "OwnedBy". This edge would be walkable starting from the Chart ',(0,s.kt)("em",{parentName:"li"},"or")," the CorpUser instance.")),(0,s.kt)("p",null,"Here is an example graph consisting of 3 types of entity (CorpUser, Chart, Dashboard), 2 types of relationship (OwnedBy, Contains), and 3 types of metadata aspect (Ownership, ChartInfo, and DashboardInfo)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"metadata-modeling",src:a(6423).Z})),(0,s.kt)("h2",{id:"querying-the-metadata-graph"},"Querying the Metadata Graph"),(0,s.kt)("p",null,"DataHub\u2019s modeling language allows you to optimize metadata persistence to align with query patterns."),(0,s.kt)("p",null,"There are three supported ways to query the metadata graph: by primary key lookup, a search query, and via relationship traversal. "),(0,s.kt)("h3",{id:"querying-an-entity"},"Querying an Entity"),(0,s.kt)("h4",{id:"fetching-latest-entity-aspects-snapshot"},"Fetching Latest Entity Aspects (Snapshot)"),(0,s.kt)("p",null,'Querying an Entity by primary key means using the "entities" endpoint, passing in the\nurn of the entity to retrieve. '),(0,s.kt)("p",null,"For example, to fetch a Chart entity, we can use the following CURL: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://localhost:8080/entities/urn%3Ali%3Achart%3Acustomers\n")),(0,s.kt)("p",null,"The type of request will return a set of versioned aspects, each at the latest version. "),(0,s.kt)("p",null,"As you'll notice, we perform the lookup using the url-encoded ",(0,s.kt)("em",{parentName:"p"},"Urn"),' associated with an entity.\nThe response would be an "Entity" record containing the Entity Snapshot (which in turn contains the latest aspects associated with the Entity).'),(0,s.kt)("h4",{id:"fetching-versioned-aspects"},"Fetching Versioned Aspects"),(0,s.kt)("p",null,"DataHub also supports fetching individual pieces of metadata about an Entity, which we call aspects. To do so,\nyou'll provide both an Entity's primary key (urn) along with the aspect name and version that you'd like to retrieve. "),(0,s.kt)("p",null,"For example, to fetch the latest version of a Dataset's SchemaMetadata aspect, you would issue the following query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/aspects/urn%3Ali%3Adataset%3A(urn%3Ali%3AdataPlatform%3Afoo%2Cbar%2CPROD)?aspect=schemaMetadata&version=0\'\n\n{\n   "version":0,\n   "aspect":{\n      "com.linkedin.schema.SchemaMetadata":{\n         "created":{\n            "actor":"urn:li:corpuser:fbar",\n            "time":0\n         },\n         "platformSchema":{\n            "com.linkedin.schema.KafkaSchema":{\n               "documentSchema":"{\\"type\\":\\"record\\",\\"name\\":\\"MetadataChangeEvent\\",\\"namespace\\":\\"com.linkedin.mxe\\",\\"doc\\":\\"Kafka event for proposing a metadata change for an entity.\\",\\"fields\\":[{\\"name\\":\\"auditHeader\\",\\"type\\":{\\"type\\":\\"record\\",\\"name\\":\\"KafkaAuditHeader\\",\\"namespace\\":\\"com.linkedin.avro2pegasus.events\\",\\"doc\\":\\"Header\\"}}]}"\n            }\n         },\n         "lastModified":{\n            "actor":"urn:li:corpuser:fbar",\n            "time":0\n         },\n         "schemaName":"FooEvent",\n         "fields":[\n            {\n               "fieldPath":"foo",\n               "description":"Bar",\n               "type":{\n                  "type":{\n                     "com.linkedin.schema.StringType":{\n                        \n                     }\n                  }\n               },\n               "nativeDataType":"string"\n            }\n         ],\n         "version":0,\n         "hash":"",\n         "platform":"urn:li:dataPlatform:foo"\n      }\n   }\n}\n')),(0,s.kt)("h4",{id:"fetching-timeseries-aspects"},"Fetching Timeseries Aspects"),(0,s.kt)("p",null,'DataHub supports an API for fetching a group of Timeseries aspects about an Entity. For example, you may want to use this API\nto fetch recent profiling runs & statistics about a Dataset. To do so, you can issue a "get" request against the ',(0,s.kt)("inlineCode",{parentName:"p"},"/aspects")," endpoint."),(0,s.kt)("p",null,"For example, to fetch dataset profiles (ie. stats) for a Dataset, you would issue the following query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl -X POST \'http://localhost:8080/aspects?action=getTimeseriesAspectValues\' \\\n--data \'{\n    "urn": "urn:li:dataset:(urn:li:dataPlatform:redshift,global_dev.larxynx_carcinoma_data_2020,PROD)",\n    "entity": "dataset",\n    "aspect": "datasetProfile",\n    "startTimeMillis": 1625122800000,\n    "endTimeMillis": 1627455600000\n}\'\n\n{\n   "value":{\n      "limit":10000,\n      "aspectName":"datasetProfile",\n      "endTimeMillis":1627455600000,\n      "startTimeMillis":1625122800000,\n      "entityName":"dataset",\n      "values":[\n         {\n            "aspect":{\n               "value":"{\\"timestampMillis\\":1626912000000,\\"fieldProfiles\\":[{\\"uniqueProportion\\":1.0,\\"sampleValues\\":[\\"123MMKK12\\",\\"13KDFMKML\\",\\"123NNJJJL\\"],\\"fieldPath\\":\\"id\\",\\"nullCount\\":0,\\"nullProportion\\":0.0,\\"uniqueCount\\":3742},{\\"uniqueProportion\\":1.0,\\"min\\":\\"1524406400000\\",\\"max\\":\\"1624406400000\\",\\"sampleValues\\":[\\"1640023230002\\",\\"1640343012207\\",\\"16303412330117\\"],\\"mean\\":\\"1555406400000\\",\\"fieldPath\\":\\"date\\",\\"nullCount\\":0,\\"nullProportion\\":0.0,\\"uniqueCount\\":3742},{\\"uniqueProportion\\":0.037,\\"min\\":\\"21\\",\\"median\\":\\"68\\",\\"max\\":\\"92\\",\\"sampleValues\\":[\\"45\\",\\"65\\",\\"81\\"],\\"mean\\":\\"65\\",\\"distinctValueFrequencies\\":[{\\"value\\":\\"12\\",\\"frequency\\":103},{\\"value\\":\\"54\\",\\"frequency\\":12}],\\"fieldPath\\":\\"patient_age\\",\\"nullCount\\":0,\\"nullProportion\\":0.0,\\"uniqueCount\\":79},{\\"uniqueProportion\\":0.00820873786407767,\\"sampleValues\\":[\\"male\\",\\"female\\"],\\"fieldPath\\":\\"patient_gender\\",\\"nullCount\\":120,\\"nullProportion\\":0.03,\\"uniqueCount\\":2}],\\"rowCount\\":3742,\\"columnCount\\":4}",\n               "contentType":"application/json"\n            }\n         },\n      ]\n   }\n}\n')),(0,s.kt)("p",null,"You'll notice that the aspect itself is serialized as escaped JSON. This is part of a shift toward a more generic set of READ / WRITE APIs\nthat permit serialization of aspects in different ways. By default, the content type will be JSON, and the aspect can be deserialized into a normal JSON object\nin the language of your choice. Note that this will soon become the de-facto way to both write and read individual aspects. "),(0,s.kt)("h3",{id:"search-query"},"Search Query"),(0,s.kt)("p",null,"A search query allows you to search for entities matching an arbitrary string. "),(0,s.kt)("p",null,'For example, to search for entities matching the term "customers", we can use the following CURL:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8080/entities?action=search\' \\                           \n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "input": "\\"customers\\"",\n    "entity": "chart",\n    "start": 0,\n    "count": 10\n}\'\n')),(0,s.kt)("p",null,"The notable parameters are ",(0,s.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"input")," specifies the query we are issuing and ",(0,s.kt)("inlineCode",{parentName:"p"},"entity")," specifies the Entity Type we want to search over. This is the common name of the Entity as defined in the @Entity definition. The response contains a list of Urns, that can be used to fetch the full entity."),(0,s.kt)("h3",{id:"relationship-query"},"Relationship Query"),(0,s.kt)("p",null,"A relationship query allows you to find Entity connected to a particular source Entity via an edge of a particular type."),(0,s.kt)("p",null,"For example, to find the owners of a particular Chart, we can use the following CURL:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl --location --request GET --header 'X-RestLi-Protocol-Version: 2.0.0' 'http://localhost:8080/relationships?direction=OUTGOING&urn=urn:li:chart:customers&types=OwnedBy'\n")),(0,s.kt)("p",null,"The notable parameters are ",(0,s.kt)("inlineCode",{parentName:"p"},"direction"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"urn")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"types"),". The response contains ",(0,s.kt)("em",{parentName:"p"},"Urns"),' associated with all entities connected\nto the primary entity (urn:li:chart:customer) by an relationship named "OwnedBy". That is, it permits fetching the owners of a given\nchart. '),(0,s.kt)("h3",{id:"special-aspects"},"Special Aspects"),(0,s.kt)("p",null,'There are 2 "special" aspects worth mentioning: '),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Key aspects"),(0,s.kt)("li",{parentName:"ol"},"Browse aspect"),(0,s.kt)("li",{parentName:"ol"},"Timeseries aspects")),(0,s.kt)("h4",{id:"key-aspects"},"Key aspects"),(0,s.kt)("p",null,"As introduced above, Key aspects are structs / records that contain the fields that uniquely identify an Entity. There are\nsome constraints about the fields that can be present in Key aspects:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All fields must be of STRING or ENUM type"),(0,s.kt)("li",{parentName:"ul"},"All fields must be REQUIRED")),(0,s.kt)("p",null,"Keys can be created from and turned into ",(0,s.kt)("em",{parentName:"p"},"Urns"),", which represent the stringified version of the Key record.\nThe algorithm used to do the conversion is straightforward: the fields of the Key aspect are substituted into a\nstring template based on their index (order of definition) using the following template:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},"// Case 1: # key fields == 1\nurn:li:<entity-name>:key-field-1\n\n// Case 2: # key fields > 1\nurn:li:<entity-name>:(key-field-1, key-field-2, ... key-field-n) \n")),(0,s.kt)("p",null,"By convention, key aspects are defined under ",(0,s.kt)("inlineCode",{parentName:"p"},"metadata-models/src/main/pegasus/com/linkedin/metadata/key"),"."),(0,s.kt)("h5",{id:"example"},"Example"),(0,s.kt)("p",null,'A CorpUser can be uniquely identified by a "username", which should typically correspond to an LDAP name. '),(0,s.kt)("p",null,"Thus, it's Key Aspect is defined as the following: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},'namespace com.linkedin.metadata.key\n\n/**\n * Key for a CorpUser\n */\n@Aspect = {\n  "name": "corpUserKey"\n}\nrecord CorpUserKey {\n  /**\n  * The name of the AD/LDAP user.\n  */\n  username: string\n}\n')),(0,s.kt)("p",null,"and it's Entity Snapshot model is defined as "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},'/**\n * A metadata snapshot for a specific CorpUser entity.\n */\n@Entity = {\n  "name": "corpuser",\n  "keyAspect": "corpUserKey"\n}\nrecord CorpUserSnapshot {\n\n  /**\n   * URN for the entity the metadata snapshot is associated with.\n   */\n  urn: CorpuserUrn\n\n  /**\n   * The list of metadata aspects associated with the CorpUser. Depending on the use case, this can either be all, or a selection, of supported aspects.\n   */\n  aspects: array[CorpUserAspect]\n}\n')),(0,s.kt)("p",null,"Using a combination of the information provided by these models, we are able to generate the Urn corresponding to a CorpUser as "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"urn:li:corpuser:<username>\n")),(0,s.kt)("p",null,'Imagine we have a CorpUser Entity with the username "johnsmith". In this world, the JSON version of the Key Aspect associated with the Entity would be '),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n  "username": "johnsmith"\n}\n')),(0,s.kt)("p",null,"and its corresponding Urn would be"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},"urn:li:corpuser:johnsmith \n")),(0,s.kt)("h4",{id:"browsepaths-aspect"},"BrowsePaths aspect"),(0,s.kt)("p",null,'The BrowsePaths aspect allows you to define a custom "browse path" for an Entity. A browse path is a way to hierarchically organize\nentities. They manifest within the "Explore" features on the UI, allowing users to navigate through trees of related entities of a given type. '),(0,s.kt)("p",null,'To support browsing a particular entity, simply include the "BrowsePaths" aspect in its aspect union: '),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},"// DatasetAspect.pdl\n\n/**\n * A union of all supported metadata aspects for a Dataset\n */\ntyperef DatasetAspect = union[\n  DatasetKey,\n  ...\n  BrowsePaths\n]\n")),(0,s.kt)("p",null,"By declaring this aspect, you can produce custom browse paths as well as query for browse paths manually using a CURL like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-aidl"},'curl --location --request POST \'http://localhost:8080/entities?action=browse\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "path": "/my/custom/browse/path",\n    "entity": "dataset",\n    "start": 0,\n    "limit": 10\n}\'\n')),(0,s.kt)("p",null,"Notice that you must provide "),(0,s.kt)("p",null,'a. A "/"-delimited root path for which to fetch results.\nb. An entity "type" using its common name ("dataset" in the example above). '),(0,s.kt)("h4",{id:"timeseries-aspects"},"Timeseries aspects"),(0,s.kt)("p",null,"Timeseries aspects are aspects that have a timestampMillis field, and are meant for aspects that continuously change on a\ntimely basis e.g. data profiles, usage statistics, etc."),(0,s.kt)("p",null,'Each timeseries aspect must be declared "type": "timeseries" and must\ninclude ',(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin/timeseries/TimeseriesAspectBase.pdl"},"TimeseriesAspectBase"),"\n, which contains a timestampMillis field."),(0,s.kt)("p",null,"Timeseries aspect cannot have any fields that have the @Searchable or @Relationship annotation, as it goes through a\ncompletely different flow."),(0,s.kt)("p",null,"Please refer\nto ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin/dataset/DatasetProfile"},"DatasetProfile"),"\nto see an example of a timeseries aspect."),(0,s.kt)("p",null,"Because timeseries aspects are updated on a frequent basis, ingests of these aspects go straight to elastic search (\ninstead of being stored in local DB). "),(0,s.kt)("p",null,'You can retrieve timeseries aspects using the "aspects?action=getTimeseriesAspectValues" end point. '),(0,s.kt)("h4",{id:"aggregatable-timeseries-aspects"},"Aggregatable Timeseries aspects"),(0,s.kt)("p",null,"Being able to perform SQL like ",(0,s.kt)("em",{parentName:"p"},"group by + aggregate")," operations on the timeseries aspects is a very natural use-case for\nthis kind of data (dataset profiles, usage statistics etc.). This section describes how to define, ingest and perform an\naggregation query against a timeseries aspect."),(0,s.kt)("h5",{id:"defining-a-new-aggregatable-timeseries-aspect"},"Defining a new aggregatable Timeseries aspect."),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"@TimeseriesField")," and the ",(0,s.kt)("em",{parentName:"p"},"@TimeseriesFieldCollection")," are two new annotations that can be attached to a field of\na ",(0,s.kt)("em",{parentName:"p"},"Timeseries aspect")," that allows it to be part of an aggregatable query. The kinds of aggregations allowed on these\nannotated fields depends on the type of the field, as well as the kind of aggregation, as\ndescribed ",(0,s.kt)("a",{parentName:"p",href:"#Performing-an-aggregation-on-a-Timeseries-aspect"},"here"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"@TimeseriesField = {}")," - this annotation can be used with any type of non-collection type field of the aspect such as\nprimitive types and records (see the fields ",(0,s.kt)("em",{parentName:"p"},"stat"),", ",(0,s.kt)("em",{parentName:"p"},"strStat")," and ",(0,s.kt)("em",{parentName:"p"},"strArray")," fields\nof ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/test-models/src/main/pegasus/com/datahub/test/TestEntityProfile.pdl"},"TestEntityProfile.pdl"),").")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},'@TimeseriesFieldCollection {"key":"<name of the key field of collection item type>"}')," annotation allows for\naggregation support on the items of a collection type (supported only for the array type collections for now), where the\nvalue of ",(0,s.kt)("inlineCode",{parentName:"p"},'"key"')," is the name of the field in the collection item type that will be used to specify the group-by clause (\nsee ",(0,s.kt)("em",{parentName:"p"},"userCounts")," and ",(0,s.kt)("em",{parentName:"p"},"fieldCounts")," fields of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/dataset/DatasetUsageStatistics.pdl"},"DatasetUsageStatistics.pdl"),"). "))),(0,s.kt)("p",null,"In addition to defining the new aspect with appropriate Timeseries annotations,\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/resources/entity-registry.yml"},"entity-registry.yml"),"\nfile needs to be updated as well. Just add the new aspect name under the list of aspects against the appropriate entity as shown below, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"datasetUsageStatistics")," for the aspect DatasetUsageStatistics."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"entities:\n  - name: dataset\n    keyAspect: datasetKey\n    aspects:\n      - datasetProfile\n      - datasetUsageStatistics\n")),(0,s.kt)("h5",{id:"ingesting-a-timeseries-aspect"},"Ingesting a Timeseries aspect"),(0,s.kt)("p",null,"The timeseries aspects can be ingested via the GSM REST endpoint ",(0,s.kt)("inlineCode",{parentName:"p"},"/aspects?action=ingestProposal")," or via the python API."),(0,s.kt)("p",null,"Example1: Via GSM REST API using curl."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/aspects?action=ingestProposal\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "proposal" : {\n    "entityType": "dataset",\n    "entityUrn" : "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n    "changeType" : "UPSERT",\n    "aspectName" : "datasetUsageStatistics",\n    "aspect" : {\n      "value" : "{ \\"timestampMillis\\":1629840771000,\\"uniqueUserCount\\" : 10, \\"totalSqlQueries\\": 20, \\"fieldCounts\\": [ {\\"fieldPath\\": \\"col1\\", \\"count\\": 20}, {\\"fieldPath\\" : \\"col2\\", \\"count\\": 5} ]}",\n      "contentType": "application/json"\n    }\n  }\n}\'\n')),(0,s.kt)("p",null,"Example2: Via Python API to Kafka(or REST)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from datahub.metadata.schema_classes import (\n    ChangeTypeClass,\n    DatasetFieldUsageCountsClass,\n    DatasetUsageStatisticsClass,\n)\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\nusageStats = DatasetUsageStatisticsClass(\n            timestampMillis=1629840771000,\n            uniqueUserCount=10,\n            totalSqlQueries=20,\n            fieldCounts=[\n                DatasetFieldUsageCountsClass(\n                    fieldPath="col1",\n                    count=10\n                )\n            ]\n        )\n\nmcpw = MetadataChangeProposalWrapper(\n    entityType="dataset",\n    aspectName="datasetUsageStatistics",\n    changeType=ChangeTypeClass.UPSERT,\n    entityUrn="urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n    aspect=usageStats,\n)\n\n# Instantiate appropriate emitter (kafk_emitter/rest_emitter)\nmy_emitter = DatahubKafkaEmitter("""<config>""")\nmy_emitter.emit(mcpw)\n')),(0,s.kt)("h5",{id:"performing-an-aggregation-on-a-timeseries-aspect"},"Performing an aggregation on a Timeseries aspect."),(0,s.kt)("p",null,"Aggreations on timeseries aspects can be performed by the GSM REST API for ",(0,s.kt)("inlineCode",{parentName:"p"},"/analytics?action=getTimeseriesStats")," which\naccepts the following params."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"entityName")," - The name of the entity the aspect is associated with."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"aspectName")," - The name of the aspect."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"filter")," - Any pre-filtering criteria before grouping and aggregations are performed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metrics")," - A list of aggregation specification. The ",(0,s.kt)("inlineCode",{parentName:"li"},"fieldPath")," member of an aggregation specification refers to the\nfield name against which the aggregation needs to be performed, and the ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregationType")," specifies the kind of aggregation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"buckets")," - A list of grouping bucket specifications. Each grouping bucket has a ",(0,s.kt)("inlineCode",{parentName:"li"},"key")," field that refers to the field\nto use for grouping. The ",(0,s.kt)("inlineCode",{parentName:"li"},"type")," field specifies the kind of grouping bucket.")),(0,s.kt)("p",null,"We support three kinds of aggregations that can be specified in an aggregation query on the Timeseries annotated fields.\nThe values that ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregationType")," can take are"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LATEST"),": The latest value of the field in each bucket. Supported for any type of field."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SUM"),": The cumulative sum of the field in each bucket. Supported only for integral types."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"CARDINALITY"),": The number of unique values or the cardinality of the set in each bucket. Supported for string and\nrecord types.")),(0,s.kt)("p",null,"We support two types of grouping for defining the buckets to perform aggregations against."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"DATE_GROUPING_BUCKET"),": Allows for creating time-based buckets such as by second, minute, hour, day, week, month,\nquarter, year etc. Should be used in conjunction with a timestamp field whose value is in milliseconds since ",(0,s.kt)("em",{parentName:"li"},"epoch"),".\nThe ",(0,s.kt)("inlineCode",{parentName:"li"},"timeWindowSize")," param specifies the date histogram bucket width."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"STRING_GROUPING_BUCKET"),": Allows for creating buckets grouped by the unique values of a field. Should be used in\nconjunction with a string type field always.")),(0,s.kt)("p",null,"The API returns a generic SQL like table as the ",(0,s.kt)("inlineCode",{parentName:"p"},"table")," member of the output that contains the results of\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"group-by/aggregate")," query, in addition to echoing the input params."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"columnNames"),": the names of the table columns. The group-by ",(0,s.kt)("inlineCode",{parentName:"li"},"key")," names appear in the same order as they are specified\nin the request. Aggregation specifications follow the grouping fields in the same order as specified in the request,\nand will be named ",(0,s.kt)("inlineCode",{parentName:"li"},"<agg_name>_<fieldPath>"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"columnTypes"),": the data types of the columns."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"rows"),": the data values, each row corresponding to the respective bucket(s).")),(0,s.kt)("p",null,"Example1: Latest unique user count for each day."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# QUERY\ncurl --location --request POST \'http://localhost:8080/analytics?action=getTimeseriesStats\' \\\n--header \'X-RestLi-Protocol-Version: 2.0.0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "entityName": "dataset",\n    "aspectName": "datasetUsageStatistics",\n    "filter": {\n        "criteria": []\n    },\n    "metrics": [\n        {\n            "fieldPath": "uniqueUserCount",\n            "aggregationType": "LATEST"\n        }\n    ],\n    "buckets": [\n        {\n            "key": "timestampMillis",\n            "type": "DATE_GROUPING_BUCKET",\n            "timeWindowSize": {\n                "multiple": 1,\n                "unit": "DAY"\n            }\n        }\n    ]\n}\'\n\n# SAMPLE RESPOSNE\n{\n    "value": {\n        "filter": {\n            "criteria": []\n        },\n        "aspectName": "datasetUsageStatistics",\n        "entityName": "dataset",\n        "groupingBuckets": [\n            {\n                "type": "DATE_GROUPING_BUCKET",\n                "timeWindowSize": {\n                    "multiple": 1,\n                    "unit": "DAY"\n                },\n                "key": "timestampMillis"\n            }\n        ],\n        "aggregationSpecs": [\n            {\n                "fieldPath": "uniqueUserCount",\n                "aggregationType": "LATEST"\n            }\n        ],\n        "table": {\n            "columnNames": [\n                "timestampMillis",\n                "latest_uniqueUserCount"\n            ],\n            "rows": [\n                [\n                    "1631491200000",\n                    "1"\n                ]\n            ],\n            "columnTypes": [\n                "long",\n                "int"\n            ]\n        }\n    }\n}\n')),(0,s.kt)("p",null,"For more examples on the complex types of group-by/aggregations, refer to the tests in the group ",(0,s.kt)("inlineCode",{parentName:"p"},"getAggregatedStats")," of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-io/src/test/java/com/linkedin/metadata/timeseries/elastic/ElasticSearchTimeseriesAspectServiceTest.java"},"ElasticSearchTimeseriesAspectServiceTest.java"),"."))}u.isMDXComponent=!0},6423:function(e,t,a){t.Z=a.p+"assets/images/metadata-model-chart-a22bf2c3338dcc0a5d40405dd51e7f13.png"}}]);