"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5601],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6686:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=a(7462),n=a(3366),o=(a(7294),a(4137)),l=["components"],r={title:"Policies Guide",sidebar_label:"Policies Guide",slug:"/policies",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/policies.md"},s="Policies Guide",c={unversionedId:"docs/policies",id:"docs/policies",isDocsHomePage:!1,title:"Policies Guide",description:"Introduction",source:"@site/genDocs/docs/policies.md",sourceDirName:"docs",slug:"/policies",permalink:"/docs/policies",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/policies.md",tags:[],version:"current",frontMatter:{title:"Policies Guide",sidebar_label:"Policies Guide",slug:"/policies",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/policies.md"},sidebar:"overviewSidebar",previous:{title:"Metadata Ingestion",permalink:"/docs/metadata-ingestion"},next:{title:"Architecture Overview",permalink:"/docs/architecture/architecture"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What is a Policy?",id:"what-is-a-policy",children:[{value:"Platform Policies",id:"platform-policies",children:[],level:3},{value:"Metadata Policies",id:"metadata-policies",children:[],level:3}],level:2},{value:"Managing Policies",id:"managing-policies",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Coming Soon",id:"coming-soon",children:[],level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",children:[],level:2}],u={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policies-guide"},"Policies Guide"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"DataHub provides the ability to declare fine-grained access control Policies via the UI & GraphQL API.\nAccess policies in DataHub define ",(0,o.kt)("em",{parentName:"p"},"who")," can ",(0,o.kt)("em",{parentName:"p"},"do what")," to ",(0,o.kt)("em",{parentName:"p"},"which resources"),". A few policies in plain English include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags. "),(0,o.kt)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,o.kt)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of."),(0,o.kt)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves.")),(0,o.kt)("p",null,"In this document, we'll take a deeper look at DataHub Policies & how to use them effectively. "),(0,o.kt)("h2",{id:"what-is-a-policy"},"What is a Policy?"),(0,o.kt)("p",null,"There are 2 types of Policy within DataHub:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Platform Policies"),(0,o.kt)("li",{parentName:"ol"},"Metadata Policies")),(0,o.kt)("p",null,"We'll briefly describe each. "),(0,o.kt)("h3",{id:"platform-policies"},"Platform Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Platform")," policies determine who has platform-level privileges on DataHub. These privileges include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing Users & Groups"),(0,o.kt)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,o.kt)("li",{parentName:"ul"},"Managing Policies themselves")),(0,o.kt)("p",null,"Platform policies can be broken down into 2 parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Actors"),": Who the policy applies to (Users or Groups)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")')),(0,o.kt)("p",null,'Note that platform policies do not include a specific "target resource" against which the Policies apply. Instead,\nthey simply serve to assign specific privileges to DataHub users and groups.'),(0,o.kt)("h3",{id:"metadata-policies"},"Metadata Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metadata")," policies determine who can do what to which Metadata Entities. For example, "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,o.kt)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,o.kt)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,o.kt)("p",null,"and so on. "),(0,o.kt)("p",null,"A Metadata Policy can be broken down into 3 parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups that the policy applies to."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a policy, e.g. \"Add Tags\"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the policy applies to, e.g. \"All Datasets\".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Today, the set of privileges supported includes only ",(0,o.kt)("em",{parentName:"p"},"write")," privileges. That is, there are no read restrictions implemented yet.")),(0,o.kt)("h2",{id:"managing-policies"},"Managing Policies"),(0,o.kt)("p",null,"Policies can be managed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/policies")," page, or accessed inside the Control Center, a slide-out menu\nappearing on the left side of the DataHub UI. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Policies")," tab will only be visible to those users having the ",(0,o.kt)("inlineCode",{parentName:"p"},"MANAGE_POLICIES")," privilege."),(0,o.kt)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. The set of default policies are created at deploy\ntime and can be found inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"policies.json")," file within ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata-service/war/src/main/resources/boot"),". This set of policies serves the\nfollowing purposes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,o.kt)("li",{parentName:"ol"},"Assigns all Platform privileges for all Users by default (Editable)")),(0,o.kt)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing policies without friction.\nNote that these privilege ",(0,o.kt)("em",{parentName:"p"},"can")," and likely ",(0,o.kt)("em",{parentName:"p"},"should")," be altered inside the ",(0,o.kt)("strong",{parentName:"p"},"Policies")," page of the UI."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pro-Tip: To login using the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," account, simply navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-datahub-domain>/login")," and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub"),". Note that the password can be customized for your\ndeployment by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"user.props")," file within the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," module. Notice that JaaS authentication must be enabled. ")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"By default, the Policies feature is ",(0,o.kt)("em",{parentName:"p"},"enabled"),". This means that the deployment will support creating, editing, removing, and\nmost importantly enforcing fine-grained access policies."),(0,o.kt)("p",null,"In some cases, these capabilities are not desirable. For example, if your company's users are already used to having free reign, you\nmay want to keep it that way. Or perhaps it is only your Data Platform team who actively uses DataHub, in which case Policies may be overkill."),(0,o.kt)("p",null,"For these scenarios, we've provided a back door to disable Policies in your deployment of DataHub. This will completely hide\nthe policies management UI and by default will allow all actions on the platform. It will be as though\neach user has ",(0,o.kt)("em",{parentName:"p"},"all")," privileges, both of the ",(0,o.kt)("strong",{parentName:"p"},"Platform")," & ",(0,o.kt)("strong",{parentName:"p"},"Metadata")," flavor."),(0,o.kt)("p",null,"To disable Policies, you can simply set the ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTH_POLICIES_ENABLED")," environment variable for the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms")," service container\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". For example in your ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-gms/docker.env"),", you'd place"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AUTH_POLICIES_ENABLED=false\n")),(0,o.kt)("h2",{id:"coming-soon"},"Coming Soon"),(0,o.kt)("p",null,"The DataHub team is hard at work trying to improve the Policies feature. We are planning on building out the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hide edit action buttons on Entity pages to reflect user privileges")),(0,o.kt)("p",null,"Under consideration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Ability to define Metadata Policies against multiple resources scoped to a particular "Domains"'),(0,o.kt)("li",{parentName:"ul"},'Ability to define Metadata Policies against multiple reosurces scoped to particular "Containers" (e.g. A "schema", "database", or "collection")')),(0,o.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,o.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on Slack!"))}d.isMDXComponent=!0}}]);