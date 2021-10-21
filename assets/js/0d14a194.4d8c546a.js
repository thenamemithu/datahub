"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4685],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return t?o.createElement(h,l(l({ref:n},p),{},{components:t})):o.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3942:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=t(7462),a=t(3366),r=(t(7294),t(4137)),l=["components"],i={title:"Onboarding to GMA Graph - Adding a new relationship type",sidebar_label:"Onboarding to GMA Graph - Adding a new relationship type",slug:"/demo/graph-onboarding",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/demo/graph-onboarding.md"},d="Onboarding to GMA Graph - Adding a new relationship type",s={unversionedId:"docs/demo/graph-onboarding",id:"docs/demo/graph-onboarding",isDocsHomePage:!1,title:"Onboarding to GMA Graph - Adding a new relationship type",description:"Steps for this already detailed in How to onboard to GMA graph?",source:"@site/genDocs/docs/demo/graph-onboarding.md",sourceDirName:"docs/demo",slug:"/demo/graph-onboarding",permalink:"/docs/demo/graph-onboarding",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/demo/graph-onboarding.md",tags:[],version:"current",frontMatter:{title:"Onboarding to GMA Graph - Adding a new relationship type",sidebar_label:"Onboarding to GMA Graph - Adding a new relationship type",slug:"/demo/graph-onboarding",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/demo/graph-onboarding.md"}},p=[{value:"1. Onboard <code>Follow</code> aspect",id:"1-onboard-follow-aspect",children:[{value:"1.1 Model new aspect",id:"11-model-new-aspect",children:[],level:3},{value:"1.2 Update aspect union for dataset",id:"12-update-aspect-union-for-dataset",children:[],level:3}],level:2},{value:"2. Create <code>FollowedBy</code> relationship",id:"2-create-followedby-relationship",children:[],level:2},{value:"3. Build the repo to generate Java classes for newly added models",id:"3-build-the-repo-to-generate-java-classes-for-newly-added-models",children:[],level:2},{value:"4. Create <code>FollowedBy</code> relationship builder from <code>Follow</code> aspect",id:"4-create-followedby-relationship-builder-from-follow-aspect",children:[],level:2},{value:"5. Update set of relationship builders for dataset by adding <code>FollowedByBuilderFromFollow</code>",id:"5-update-set-of-relationship-builders-for-dataset-by-adding-followedbybuilderfromfollow",children:[],level:2},{value:"6. Rebuild &amp; restart all containers with new changes",id:"6-rebuild--restart-all-containers-with-new-changes",children:[],level:2},{value:"7. That&#39;s it. Let&#39;s test our new feature!",id:"7-thats-it-lets-test-our-new-feature",children:[],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onboarding-to-gma-graph---adding-a-new-relationship-type"},"Onboarding to GMA Graph - Adding a new relationship type"),(0,r.kt)("p",null,"Steps for this already detailed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/how/graph-onboarding"},"How to onboard to GMA graph?")),(0,r.kt)("p",null,"For this exercise, we'll add a new relationship type ",(0,r.kt)("inlineCode",{parentName:"p"},"FollowedBy")," which is extracted out of ",(0,r.kt)("inlineCode",{parentName:"p"},"Follow")," aspect. For that, we first need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"Follow")," aspect."),(0,r.kt)("h2",{id:"1-onboard-follow-aspect"},"1. Onboard ",(0,r.kt)("inlineCode",{parentName:"h2"},"Follow")," aspect"),(0,r.kt)("p",null,"Referring to ",(0,r.kt)("a",{parentName:"p",href:"/docs/how/add-new-aspect"},"How to add a new metadata aspect?")),(0,r.kt)("h3",{id:"11-model-new-aspect"},"1.1 Model new aspect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Follow.pdl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.common\n\n/**\n * Follow information of an entity.\n */\nrecord Follow {\n\n  /**\n   * List of followers of an entity.\n   */\n  followers: array[FollowAction]\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FollowAction.pdl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.common\n\n/**\n * Follow Action of an entity.\n */\nrecord FollowAction {\n\n  /**\n   * Follower (User or a Group) of an entity\n   */\n  follower: FollowerType\n\n  /**\n   * Audit stamp containing who last modified the record and when.\n   */\n  lastModified: optional AuditStamp\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FollowerType.pdl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.common\n\n/**\n * A union of all supported follower types\n */\ntyperef FollowerType = union[\n  corpUser: CorpuserUrn,\n  corpGroup: CorpGroupUrn\n]\n")),(0,r.kt)("h3",{id:"12-update-aspect-union-for-dataset"},"1.2 Update aspect union for dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.aspect\n\nimport com.linkedin.common.Follow\nimport com.linkedin.common.InstitutionalMemory\nimport com.linkedin.common.Ownership\nimport com.linkedin.common.Status\nimport com.linkedin.dataset.DatasetDeprecation\nimport com.linkedin.dataset.DatasetProperties\nimport com.linkedin.dataset.UpstreamLineage\nimport com.linkedin.schema.SchemaMetadata\n\n/**\n * A union of all supported metadata aspects for a Dataset\n */\ntyperef DatasetAspect = union[\n  DatasetProperties,\n  DatasetDeprecation,\n  Follow,\n  UpstreamLineage,\n  InstitutionalMemory,\n  Ownership,\n  Status,\n  SchemaMetadata\n]\n")),(0,r.kt)("h2",{id:"2-create-followedby-relationship"},"2. Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"FollowedBy")," relationship"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.relationship\n\n/**\n * A generic model for the Followed-By relationship\n */\n@pairings = [ {\n  "destination" : "com.linkedin.common.urn.CorpuserUrn",\n  "source" : "com.linkedin.common.urn.DatasetUrn"\n}, {\n  "destination" : "com.linkedin.common.urn.CorpGroupUrn",\n  "source" : "com.linkedin.common.urn.DatasetUrn"\n} ]\nrecord FollowedBy includes BaseRelationship {\n}\n')),(0,r.kt)("h2",{id:"3-build-the-repo-to-generate-java-classes-for-newly-added-models"},"3. Build the repo to generate Java classes for newly added models"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew build -Prest.model.compatibility=ignore\n")),(0,r.kt)("p",null,"You can verify that API definitions for /dataset endpoint of GMS as well as MXE schemas are automatically updated to include new model changes."),(0,r.kt)("h2",{id:"4-create-followedby-relationship-builder-from-follow-aspect"},"4. Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"FollowedBy")," relationship builder from ",(0,r.kt)("inlineCode",{parentName:"h2"},"Follow")," aspect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.linkedin.metadata.builders.graph.relationship;\n\nimport com.linkedin.common.Follow;\nimport com.linkedin.common.urn.Urn;\nimport com.linkedin.metadata.builders.graph.GraphBuilder;\nimport com.linkedin.metadata.relationship.FollowedBy;\nimport java.util.Collections;\nimport java.util.List;\nimport java.util.Objects;\nimport java.util.stream.Collectors;\nimport javax.annotation.Nonnull;\n\nimport static com.linkedin.metadata.dao.internal.BaseGraphWriterDAO.RemovalOption.*;\n\n\npublic class FollowedByBuilderFromFollow extends BaseRelationshipBuilder<Follow> {\n\n  public FollowedByBuilderFromFollow() {\n    super(Follow.class);\n  }\n\n  @Nonnull\n  @Override\n  public <URN extends Urn> List<GraphBuilder.RelationshipUpdates> buildRelationships(@Nonnull URN urn,\n      @Nonnull Follow follow) {\n    final List<FollowedBy> followedByList = follow.getFollowers().stream().map(followAction -> {\n      if (followAction.getFollower().isCorpUser()) {\n        return new FollowedBy().setSource(urn).setDestination(followAction.getFollower().getCorpUser());\n      }\n      if (followAction.getFollower().isCorpGroup()) {\n        return new FollowedBy().setSource(urn).setDestination(followAction.getFollower().getCorpGroup());\n      }\n      return null;\n    }).filter(Objects::nonNull).collect(Collectors.toList());\n\n    return Collections.singletonList(new GraphBuilder.RelationshipUpdates(followedByList, REMOVE_ALL_EDGES_FROM_SOURCE));\n  }\n}\n")),(0,r.kt)("h2",{id:"5-update-set-of-relationship-builders-for-dataset-by-adding-followedbybuilderfromfollow"},"5. Update set of relationship builders for dataset by adding ",(0,r.kt)("inlineCode",{parentName:"h2"},"FollowedByBuilderFromFollow")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.linkedin.metadata.builders.graph;\n\nimport com.linkedin.common.urn.DatasetUrn;\nimport com.linkedin.data.template.RecordTemplate;\nimport com.linkedin.metadata.builders.graph.relationship.BaseRelationshipBuilder;\nimport com.linkedin.metadata.builders.graph.relationship.DownstreamOfBuilderFromUpstreamLineage;\nimport com.linkedin.metadata.builders.graph.relationship.FollowedByBuilderFromFollow;\nimport com.linkedin.metadata.builders.graph.relationship.OwnedByBuilderFromOwnership;\nimport com.linkedin.metadata.entity.DatasetEntity;\nimport com.linkedin.metadata.snapshot.DatasetSnapshot;\nimport java.util.Collections;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\nimport javax.annotation.Nonnull;\n\npublic class DatasetGraphBuilder extends BaseGraphBuilder<DatasetSnapshot> {\n  private static final Set<BaseRelationshipBuilder> RELATIONSHIP_BUILDERS =\n      Collections.unmodifiableSet(new HashSet<BaseRelationshipBuilder>() {\n        {\n          add(new DownstreamOfBuilderFromUpstreamLineage());\n          add(new FollowedByBuilderFromFollow());\n          add(new OwnedByBuilderFromOwnership());\n        }\n      });\n\n  public DatasetGraphBuilder() {\n    super(DatasetSnapshot.class, RELATIONSHIP_BUILDERS);\n  }\n\n  @Nonnull\n  @Override\n  protected List<? extends RecordTemplate> buildEntities(@Nonnull DatasetSnapshot snapshot) {\n    final DatasetUrn urn = snapshot.getUrn();\n    final DatasetEntity entity = new DatasetEntity().setUrn(urn)\n        .setName(urn.getDatasetNameEntity())\n        .setPlatform(urn.getPlatformEntity())\n        .setOrigin(urn.getOriginEntity());\n\n    setRemovedProperty(snapshot, entity);\n\n    return Collections.singletonList(entity);\n  }\n}\n")),(0,r.kt)("h2",{id:"6-rebuild--restart-all-containers-with-new-changes"},"6. Rebuild & restart all containers with new changes"),(0,r.kt)("p",null,"This is all the code change we need to do to enable linking datasets and corp users (groups as well).\nNow we can re-build & start all Docker images."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker/rebuild-all/rebuild-all.sh\n")),(0,r.kt)("h2",{id:"7-thats-it-lets-test-our-new-feature"},"7. That's it. Let's test our new feature!"),(0,r.kt)("p",null,"Let's ingest a user first"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/corpUsers?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'\n{\n  "snapshot": {\n    "aspects": [{\n      "com.linkedin.identity.CorpUserInfo": {\n        "active": true,\n        "displayName": "Foo Bar",\n        "fullName": "Foo Bar",\n        "email": "fbar@linkedin.com"\n      }\n    }],\n    "urn": "urn:li:corpuser:fbar"\n  }\n}\'\n')),(0,r.kt)("p",null,"And now let's ingest a dataset with two aspects: Ownership & Follow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/datasets?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'\n{\n  "snapshot": {\n    "aspects": [{\n      "com.linkedin.common.Ownership": {\n        "owners": [{\n            "owner": "urn:li:corpuser:fbar",\n            "type": "DATAOWNER"\n        }],\n        "lastModified": {\n            "time": 0,\n            "actor": "urn:li:corpuser:fbar"\n        }\n      }\n    },\n    {\n      "com.linkedin.common.Follow": {\n        "followers": [{\n          "follower": {\n            "corpUser": "urn:li:corpuser:fbar"\n          }\n        }]\n      }\n    }],\n    "urn": "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)"\n  }\n}\'\n')),(0,r.kt)("p",null,"Ownership aspect will help create an ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnedBy")," edge between user & dataset nodes. That existed already.\nNow that we added follow aspect, we'll also be able to see a ",(0,r.kt)("inlineCode",{parentName:"p"},"FollowedBy")," edge between same user & dataset nodes."),(0,r.kt)("p",null,"You can confirm this by connecting to Neo4j browser on http://localhost:7474/browser"))}u.isMDXComponent=!0}}]);