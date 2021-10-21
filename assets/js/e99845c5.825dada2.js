"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6695],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2735:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},9524:function(e,t,a){a.d(t,{C:function(){return i},Z:function(){return o}});var n=a(9962),r=a(2735);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(l)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+u:u}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9902:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},Logo:function(){return d},default:function(){return m}});var n=a(3366),r=a(7462),i=(a(7294),a(4137)),o=a(9524),l=["components"],s={description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems.",hide_title:!0,title:"Introduction",sidebar_label:"Introduction",slug:"/",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/README.md"},p=void 0,u={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Introduction",description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems.",source:"@site/genDocs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/linkedin/datahub/blob/master/README.md",tags:[],version:"current",frontMatter:{description:"DataHub is a data discovery application built on an extensible metadata platform that helps you tame the complexity of diverse data ecosystems.",hide_title:!0,title:"Introduction",sidebar_label:"Introduction",slug:"/",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/README.md"},sidebar:"overviewSidebar",next:{title:"Features",permalink:"/docs/features"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Demo and Screenshots",id:"demo-and-screenshots",children:[],level:2},{value:"Source Code and Repositories",id:"source-code-and-repositories",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2},{value:"Releases",id:"releases",children:[],level:2},{value:"Features &amp; Roadmap",id:"features--roadmap",children:[],level:2},{value:"Contributing",id:"contributing",children:[],level:2},{value:"Community",id:"community",children:[],level:2},{value:"Adoption",id:"adoption",children:[],level:2},{value:"Select Articles &amp; Talks",id:"select-articles--talks",children:[],level:2},{value:"License",id:"license",children:[],level:2}],d=function(e){return(0,i.kt)("div",{style:{display:"flex",justifyContent:"center",padding:"20px"}},(0,i.kt)("img",(0,r.Z)({height:"150",alt:"DataHub Logo",src:(0,o.Z)("/static/img/datahub-logo-color-mark.svg")},e)))},h={toc:c,Logo:d};function m(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"Logo"}),(0,i.kt)("h1",{id:"datahub-a-metadata-platform-for-the-modern-data-stack"},"DataHub: A Metadata Platform for the Modern Data Stack"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/releases/latest"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/linkedin/datahub?include_prereleases",alt:"Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions?query=workflow%3A%22build+%26+test%22+branch%3Amaster+event%3Apush"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/workflows/build%20&%20test/badge.svg?branch=master&event=push",alt:"build & test"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linkedin/datahub-gms"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/linkedin/datahub-gms.svg",alt:"Docker Pulls"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social",alt:"Slack"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docs/CONTRIBUTING.md"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg",alt:"PRs Welcome"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/pulls?q=is%3Apr"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/commit-activity/m/linkedin/datahub",alt:"GitHub commit activity"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/linkedin/datahub",alt:"License"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UC3qFQC5IiwR5fvWEqi_tJ5w"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/youtube/channel/subscribers/UC3qFQC5IiwR5fvWEqi_tJ5w?style=social",alt:"YouTube"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/datahub-project"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white",alt:"Medium"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/datahubproject"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/datahubproject?label=Follow&style=social",alt:"Follow"}))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Quickstart")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"Documentation")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/features"},"Features")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/roadmap"},"Roadmap")," |\n",(0,i.kt)("a",{parentName:"p",href:"#adoption"},"Adoption")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/demo"},"Demo")," |\n",(0,i.kt)("a",{parentName:"p",href:"/docs/townhalls"},"Town Hall")),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udce3\u2002Next DataHub town hall meeting on Sep 24th, 9am-10am PDT (",(0,i.kt)("a",{parentName:"p",href:"https://greenwichmeantime.com/time/to/pacific-local/"},"convert to your local time"),")"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Topic Proposals: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1v2ynbAXjJlqY97xE_X1DAntNrXDznOFiNfryUkMPtkI/"},"submit here")),(0,i.kt)("li",{parentName:"ul"},"Signup to get a calendar invite: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/d/1r9bObXKS3tgKpISqqO3rw4yQog5zwuaFxg8IrJGUbvQ/"},"here")),(0,i.kt)("li",{parentName:"ul"},"Town-hall Zoom link: ",(0,i.kt)("a",{parentName:"li",href:"https://zoom.datahubproject.io"},"zoom.datahubproject.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/townhalls"},"Meeting details")," & ",(0,i.kt)("a",{parentName:"li",href:"/docs/townhall-history"},"past recordings")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2728\u2002Latest Update:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Monthly project update: ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/datahub-project/datahub-project-updates-f4299cd3602e?source=friends_link&sk=27af7637f7ae44786ede694c3af512a5"},"July 2021 Edition"),"."),(0,i.kt)("li",{parentName:"ul"},"Unleashing Excellent DataOps with LinkedIn DataHub: ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ccsIKK9nVxk"},"DataOps Unleashed Talk"),"."),(0,i.kt)("li",{parentName:"ul"},"Latest blog post ",(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"DataHub: Popular Metadata Architectures Explained")," @ LinkedIn Engineering Blog."),(0,i.kt)("li",{parentName:"ul"},"We're on ",(0,i.kt)("a",{parentName:"li",href:"/docs/slack"},"Slack")," now! Ask questions and keep up with the latest announcements."))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"DataHub is an open-source metadata platform for the modern data stack. Read about the architectures of different metadata systems and why DataHub excels ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"here"),". Also read our\n",(0,i.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2019/data-hub"},"LinkedIn Engineering blog post"),", check out our ",(0,i.kt)("a",{parentName:"p",href:"https://speakerdeck.com/shirshanka/the-evolution-of-metadata-linkedins-journey-strata-nyc-2019"},"Strata presentation")," and watch our ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OB-O0Y6OYDE"},"Crunch Conference Talk"),". You should also visit ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/architecture"},"DataHub Architecture")," to get a better understanding of how DataHub is implemented and ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/extending-the-metadata-model"},"DataHub Onboarding Guide")," to understand how to extend DataHub for your own use cases."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Please follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"DataHub Quickstart Guide")," to get a copy of DataHub up & running locally using ",(0,i.kt)("a",{parentName:"p",href:"https://docker.com"},"Docker"),'. As the guide assumes some basic knowledge of Docker, we\'d recommend you to go through the "Hello World" example of ',(0,i.kt)("a",{parentName:"p",href:"https://docker-curriculum.com"},"A Docker Tutorial for Beginners")," if Docker is completely foreign to you."),(0,i.kt)("h2",{id:"demo-and-screenshots"},"Demo and Screenshots"),(0,i.kt)("p",null,"There's a ",(0,i.kt)("a",{parentName:"p",href:"/docs/demo"},"hosted demo environment")," where you can play around with DataHub before installing."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/demo"},(0,i.kt)("img",{alt:"DataHub Demo GIF",src:a(150).Z}))),(0,i.kt)("h2",{id:"source-code-and-repositories"},"Source Code and Repositories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub"},"linkedin/datahub"),": This repository contains the complete source code for both DataHub's frontend & backend services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub-gma"},"linkedin/datahub-gma"),": This repository contains the source code for DataHub's metadata infrastructure libraries (Generalized Metadata Architecture, or GMA).")),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"We have documentation available at ",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"https://datahubproject.io/docs/"),"."),(0,i.kt)("h2",{id:"releases"},"Releases"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/releases"},"Releases")," page for more details. We follow the ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org"},"SemVer Specification")," when versioning the releases and adopt the ",(0,i.kt)("a",{parentName:"p",href:"https://keepachangelog.com/"},"Keep a Changelog convention")," for the changelog format."),(0,i.kt)("h2",{id:"features--roadmap"},"Features & Roadmap"),(0,i.kt)("p",null,"Check out DataHub's ",(0,i.kt)("a",{parentName:"p",href:"/docs/features"},"Features")," & ",(0,i.kt)("a",{parentName:"p",href:"/docs/roadmap"},"Roadmap"),"."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"We welcome contributions from the community. Please refer to our ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"Contributing Guidelines")," for more details. We also have a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/contrib"},"contrib")," directory for incubating experimental features."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Join our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"slack workspace")," for discussions and important announcements. You can also find out more about our upcoming ",(0,i.kt)("a",{parentName:"p",href:"/docs/townhalls"},"town hall meetings")," and view past recordings."),(0,i.kt)("h2",{id:"adoption"},"Adoption"),(0,i.kt)("p",null,"Here are the companies that have officially adopted DataHub. Please feel free to add yours to the list if we missed it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.banksalad.com"},"Banksalad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.definedcrowd.com"},"DefinedCrowd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dfds.com/"},"DFDS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://expedia.com"},"Expedia Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.experius.nl"},"Experius")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.geotab.com"},"Geotab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grofers.com"},"Grofers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.klarna.com"},"Klarna")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://linkedin.com"},"LinkedIn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.onepeloton.com"},"Peloton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.home.saxo"},"Saxo Bank")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.shrbank.com"},"Shanghai HuaRui Bank")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.thoughtworks.com"},"ThoughtWorks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://typeform.com"},"TypeForm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uphold.com"},"Uphold")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://viasat.com"},"Viasat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wolt.com"},"Wolt"))),(0,i.kt)("h2",{id:"select-articles--talks"},"Select Articles & Talks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2019/data-hub"},"DataHub: A Generalized Metadata Search & Discovery Tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"DataHub: Popular Metadata Architectures Explained")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/open-sourcing-datahub--linkedins-metadata-search-and-discovery-p"},"Open sourcing DataHub: LinkedIn\u2019s metadata search and discovery platform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ccsIKK9nVxk"},"Driving DataOps Culture with LinkedIn DataHub")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://dataopsunleashed.com/#shirshanka-session"},"DataOps Unleashed 2021")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:a(5510).Z},"DataHub: Powering LinkedIn's Metadata")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://budapestdata.hu/2020/en/"},"Budapest Data Forum 2020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bo4OhiPro7Y"},"Taming the Data Beast Using DataHub")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://www.meetup.com/Data-Engineering-Melbourne/events/kgnvlrybcpbjc/"},"Data Engineering Melbourne Meetup November 2020")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dataengineeringpodcast.com/datahub-metadata-management-episode-147/"},"Metadata Management And Integration At LinkedIn With DataHub")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://www.dataengineeringpodcast.com"},"Data Engineering Podcast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://speakerdeck.com/shirshanka/the-evolution-of-metadata-linkedins-journey-strata-nyc-2019"},"The evolution of metadata: LinkedIn\u2019s story")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://conferences.oreilly.com/strata/strata-ny-2019.html"},"Strata Data Conference 2019")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OB-O0Y6OYDE"},"Journey of metadata at LinkedIn")," @ ",(0,i.kt)("a",{parentName:"li",href:"https://crunchconf.com/2019"},"Crunch Data Conference 2019")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ajcRdB22s5o"},"DataHub Journey with Expedia Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.slideshare.net/SheetalPratik/linkedinsaxobankdataworkbench"},"Saxo Bank's Data Workbench")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.slideshare.net/MaggieHays/data-discoverability-at-spothero"},"Data Discoverability at SpotHero")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/albert-franzi/data-catalogue-knowing-your-data-15f7d0724900"},"Data Catalogue \u2014 Knowing your data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@liangjunjiang/linkedin-datahub-application-architecture-quick-understanding-a5b7868ee205"},"LinkedIn DataHub Application Architecture Quick Understanding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.holistics.io/blog/a-dive-into-metadata-hubs/"},"A Dive Into Metadata Hubs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.amplifypartners.com/25-hot-new-data-tools-and-what-they-dont-do/"},"25 Hot New Data Tools and What They DON\u2019T Do")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://a16z.com/2020/10/15/the-emerging-architectures-for-modern-data-infrastructure/"},"Emerging Architectures for Modern Data Infrastructure"))),(0,i.kt)("p",null,"See the full list ",(0,i.kt)("a",{parentName:"p",href:"/docs/links"},"here"),"."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/LICENSE"},"Apache License 2.0"),"."))}m.isMDXComponent=!0},5510:function(e,t,a){t.Z=a.p+"assets/files/DataHub_-_Powering_LinkedIn_Metadata-40ed71316364cd28772b41bdf9f71d94.pdf"},150:function(e,t,a){t.Z=a.p+"assets/images/entity-2b85136a8cdea9260ea35654b29e485b.png"}}]);