(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var i=n(3),r=n(7),c=(n(0),n(364)),a={title:"SleepyDiscord::ActivityTimestamp"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_activity_timestamp",id:"reference/Classes/struct_sleepy_discord_1_1_activity_timestamp",isDocsHomePage:!1,title:"SleepyDiscord::ActivityTimestamp",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::ActivitySecrets",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_secrets"},next:{title:"SleepyDiscord::ActivityTimestampTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp_type_helper"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ActivityTimestamp",id:"function-activitytimestamp",children:[]},{value:"function ~ActivityTimestamp",id:"function-activitytimestamp-1",children:[]},{value:"function ActivityTimestamp",id:"function-activitytimestamp-2",children:[]},{value:"function ActivityTimestamp",id:"function-activitytimestamp-3",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable start",id:"variable-start",children:[]},{value:"variable end",id:"variable-end",children:[]}]}],p={toc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherits from ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-activitytimestamp"},"function ActivityTimestamp"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ActivityTimestamp() =default\n")),Object(c.b)("h3",{id:"function-activitytimestamp-1"},"function ~ActivityTimestamp"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"~ActivityTimestamp() =default\n")),Object(c.b)("h3",{id:"function-activitytimestamp-2"},"function ActivityTimestamp"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ActivityTimestamp(\n    const json::Value & json\n)\n")),Object(c.b)("h3",{id:"function-activitytimestamp-3"},"function ActivityTimestamp"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ActivityTimestamp(\n    const nonstd::string_view & json\n)\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair< ActivityTimestampTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair< ActivityTimestampTypeHelper > &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-start"},"variable start"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Time start;\n")),Object(c.b)("h3",{id:"variable-end"},"variable end"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Time end;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 30 April 2021 at 23:51:56 UTC"))}l.isMDXComponent=!0},364:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||c;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<c;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);