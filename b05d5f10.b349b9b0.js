(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{256:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),c=t(7),o=(t(0),t(364)),a={title:"SleepyDiscord::json::ClassTypeHelper< Value >"},l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01_value_01_4",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01_value_01_4",isDocsHomePage:!1,title:"SleepyDiscord::json::ClassTypeHelper< Value >",description:"Public Functions Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01_value_01_4.md",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01_value_01_4",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01_value_01_4",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::json::ClassTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper"},next:{title:"SleepyDiscord::json::ClassTypeHelper< bool >",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01bool_01_4"}},i=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[]},{value:"function toType",id:"function-totype-1",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function fromType",id:"function-fromtype",children:[]},{value:"function isType",id:"function-istype",children:[]}]}],s={toc:i};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(o.b)("h3",{id:"function-totype"},"function toType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline rapidjson::Type toType(\n    const Value & value\n)\n")),Object(o.b)("h3",{id:"function-totype-1"},"function toType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Value & toType(\n    Value & value\n)\n")),Object(o.b)("h3",{id:"function-empty"},"function empty"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Value & value\n)\n")),Object(o.b)("h3",{id:"function-fromtype"},"function fromType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const Value & value,\n    Value::AllocatorType & alloc\n)\n")),Object(o.b)("h3",{id:"function-istype"},"function isType"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool isType(\n    const Value & \n)\n")),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on 30 April 2021 at 23:51:56 UTC"))}p.isMDXComponent=!0},364:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),p=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,y=u["".concat(a,".").concat(d)]||u[d]||_[d]||o;return t?c.a.createElement(y,l(l({ref:n},s),{},{components:t})):c.a.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);