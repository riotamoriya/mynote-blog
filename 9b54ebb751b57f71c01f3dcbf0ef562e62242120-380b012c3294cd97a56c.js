(self.webpackChunkmynote_blog=self.webpackChunkmynote_blog||[]).push([[211],{4129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var l=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));s(l);l.BLOCKS;var f=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));s(f);f.INLINES;var d=c((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));s(d);var p=c((function(e,t){var n,r=u&&u.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var a=o(d);t.TOP_LEVEL_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[l.BLOCKS.TABLE,l.BLOCKS.TABLE_ROW,l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[l.BLOCKS.HR,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[l.BLOCKS.OL_LIST]=[l.BLOCKS.LIST_ITEM],n[l.BLOCKS.UL_LIST]=[l.BLOCKS.LIST_ITEM],n[l.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[l.BLOCKS.QUOTE]=[l.BLOCKS.PARAGRAPH],n[l.BLOCKS.TABLE]=[l.BLOCKS.TABLE_ROW],n[l.BLOCKS.TABLE_ROW]=[l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],n[l.BLOCKS.TABLE_CELL]=[l.BLOCKS.PARAGRAPH],n[l.BLOCKS.TABLE_HEADER_CELL]=[l.BLOCKS.PARAGRAPH],n),t.HEADINGS=[l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([l.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[l.BLOCKS.DOCUMENT,l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.LIST_ITEM,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,f.INLINES.HYPERLINK,f.INLINES.ENTRY_HYPERLINK,f.INLINES.ASSET_HYPERLINK,f.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[a.default.BOLD,a.default.CODE,a.default.ITALIC,a.default.UNDERLINE]}));s(p);p.V1_MARKS,p.V1_NODE_TYPES,p.TEXT_CONTAINERS,p.HEADINGS,p.CONTAINERS,p.VOID_BLOCKS,p.TABLE_BLOCKS,p.LIST_ITEM_BLOCKS,p.TOP_LEVEL_BLOCKS;var y=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));s(y);var E=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));s(E);var _=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:l.BLOCKS.DOCUMENT,data:{},content:[{nodeType:l.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));s(_);var g=c((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(f.INLINES,e.nodeType)},t.isBlock=function(e){return n(l.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));s(g);g.isText,g.isBlock,g.isInline;var h=c((function(e,t){var n=u&&u.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=u&&u.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},i=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return l.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return f.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(d).default}}),o(p,t),o(y,t),o(E,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(_).default}});var s=a(g);t.helpers=s}));s(h);var v,m,L=h.helpers,O=(h.EMPTY_DOCUMENT,h.MARKS),S=h.INLINES,b=h.BLOCKS;function T(e,t){return e.map((function(e,n){return r=I(e,t),a=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:a}):r;var r,a}))}function I(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(L.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=T(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):a.createElement(a.Fragment,null,i)}var C=((v={})[b.DOCUMENT]=function(e,t){return t},v[b.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},v[b.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},v[b.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},v[b.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},v[b.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},v[b.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},v[b.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},v[b.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},v[b.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},v[b.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},v[b.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},v[b.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},v[b.HR]=function(){return a.createElement("hr",null)},v[b.TABLE]=function(e,t){return a.createElement("table",null,a.createElement("tbody",null,t))},v[b.TABLE_ROW]=function(e,t){return a.createElement("tr",null,t)},v[b.TABLE_HEADER_CELL]=function(e,t){return a.createElement("th",null,t)},v[b.TABLE_CELL]=function(e,t){return a.createElement("td",null,t)},v[S.ASSET_HYPERLINK]=function(e){return B(S.ASSET_HYPERLINK,e)},v[S.ENTRY_HYPERLINK]=function(e){return B(S.ENTRY_HYPERLINK,e)},v[S.EMBEDDED_ENTRY]=function(e){return B(S.EMBEDDED_ENTRY,e)},v[S.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},v),A=((m={})[O.BOLD]=function(e){return a.createElement("b",null,e)},m[O.ITALIC]=function(e){return a.createElement("i",null,e)},m[O.UNDERLINE]=function(e){return a.createElement("u",null,e)},m[O.CODE]=function(e){return a.createElement("code",null,e)},m[O.SUPERSCRIPT]=function(e){return a.createElement("sup",null,e)},m[O.SUBSCRIPT]=function(e){return a.createElement("sub",null,e)},m);function B(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?I(e,{renderNode:i(i({},C),t.renderNode),renderMark:i(i({},A),t.renderMark),renderText:t.renderText}):null}},3204:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,a=/[_.\- ]+/,i=new RegExp("^"+a.source),u=new RegExp(a.source+o.source,"gu"),s=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const a=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):a(e);return e!==a(e)&&(e=((e,r,o)=>{let a=!1,i=!1,u=!1;for(let s=0;s<e.length;s++){const c=e[s];a&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),a=!1,u=i,i=!0,s++):i&&u&&n.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),u=i,i=!1,a=!0):(a=r(c)===c&&o(c)!==c,u=i,i=o(c)===c&&r(c)!==c)}return e})(e,a,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,a):a(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(u.lastIndex=0,s.lastIndex=0,e.replace(u,((e,n)=>t(n))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3903:function(e,t,n){"use strict";n.r(t);var r=n(3346),o=n.n(r),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u={},s=function(e,t){var n=t.entryId,r=t.linkType,o=t.spaceId;return o?e.get(o+"!"+r+"!"+n):e.get(r+"!"+n)},c=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":a(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==u}));for(var t in e)e[t]===u&&delete e[t];return e}(t))}return t},l=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.type,o=n.linkType;if("ResourceLink"===r){var a=t.sys.urn,i=/.*:spaces\/(?<spaceId>[A-Za-z0-9]*)\/entries\/(?<entryId>[A-Za-z0-9]*)/;if(!i.test(a))return u;var c=a.match(i).groups,l=c.spaceId,f=c.entryId,d=o.split(":")[1];return s(e,{linkType:d,entryId:f,spaceId:l})||u}var p=t.sys.id;return s(e,{linkType:o,entryId:p})||u}(e,t);return r===u?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),a=[].concat(i(n.items),i(r)),u=new Map(a.reduce((function(e,t){var n,r=(n=t.sys,n.space?[n.type+"!"+n.id,n.space.sys.id+"!"+n.type+"!"+n.id]:[n.type+"!"+n.id]).map((function(e){return[e,t]}));return e.push.apply(e,i(r)),e}),[]));return a.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,c(n,(function(e){return(t=e)&&t.sys&&"Link"===t.sys.type||function(e){return e&&e.sys&&"ResourceLink"===e.sys.type}(e);var t}),(function(e){return l(u,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},3346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,s=Object.prototype,c=s.hasOwnProperty,l=s.propertyIsEnumerable,f="function"==typeof i,d="function"==typeof WeakMap,p=function(){if(d)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),y=function(n,r){var o=n.__proto__||u(n);if(!o)return t(null);var a=o.constructor;if(a===r.Object)return o===r.Object.prototype?{}:t(o);if(~e.call(a).indexOf("[native code]"))try{return new a}catch(s){}return t(o)},E=function(e,t,n,r){var o=y(e,t);for(var a in r.set(e,o),e)c.call(e,a)&&(o[a]=n(e[a],r));if(f)for(var u=i(e),s=0,d=u.length,p=void 0;s<d;++s)p=u[s],l.call(e,p)&&(o[p]=n(e[p],r));return o},_=function(e,t,n,u){var s=y(e,t);u.set(e,s);for(var c=f?a(e).concat(i(e)):a(e),l=0,d=c.length,p=void 0,E=void 0;l<d;++l)if("callee"!==(p=c[l])&&"caller"!==p)if(E=o(e,p)){E.get||E.set||(E.value=n(e[p],u));try{r(s,p,E)}catch(_){s[p]=E.value}}else s[p]=n(e[p],u);return s},g=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},h=Array.isArray,v=Object.getPrototypeOf,m=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function L(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||m,o=n?_:E,a=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var i,u=e.__proto__||v(e),s=u&&u.constructor;if(!s||s===r.Object)return o(e,r,a,t);if(h(e)){if(n)return _(e,r,a,t);i=new s,t.set(e,i);for(var c=0,l=e.length;c<l;++c)i[c]=a(e[c],t);return i}if(e instanceof r.Date)return new s(e.getTime());if(e instanceof r.RegExp)return(i=new s(e.source,e.flags||g(e))).lastIndex=e.lastIndex,i;if(r.Map&&e instanceof r.Map)return i=new s,t.set(e,i),e.forEach((function(e,n){i.set(n,a(e,t))})),i;if(r.Set&&e instanceof r.Set)return i=new s,t.set(e,i),e.forEach((function(e){i.add(a(e,t))})),i;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new s(e.length),t.set(e,i),e.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return i=new s(e.buffer.slice(0)),t.set(e,i),i;if(e instanceof r.ArrayBuffer)return i=e.slice(0),t.set(e,i),i}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:o(e,r,a,t)};return a(e,p())}return L.default=L,L.strict=function(e,t){return L(e,{isStrict:!0,realm:t?t.realm:void 0})},L}()},8032:function(e,t,n){"use strict";n.d(t,{G:function(){return w},L:function(){return E},M:function(){return S},P:function(){return O},_:function(){return u},a:function(){return i},b:function(){return f},c:function(){return c},g:function(){return d},h:function(){return s}});var r=n(7294),o=(n(3204),n(5697)),a=n.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function l(e,t,n){const r={};let o="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:r}}function f(e,t,n,r,o){return void 0===o&&(o={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function d(e,t,n,r,o,a,u,s){const c={};a&&(c.backgroundColor=a,"fixed"===n?(c.width=r,c.height=o,c.backgroundColor=a,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),u&&(c.objectFit=u),s&&(c.objectPosition=s);const l=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return l}const p=["children"],y=function(e){let{layout:t,width:n,height:o}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+o+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},E=function(e){let{children:t}=e,n=u(e,p);return r.createElement(r.Fragment,null,r.createElement(y,i({},n)),t,null)},_=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:n,loading:o,alt:a="",shouldLoad:s}=e,c=u(e,_);return r.createElement("img",i({},c,{decoding:"async",loading:o,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:a}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:o=!0}=e,a=u(e,g);const s=a.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,i({},a,t,{sizes:s,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:a}=e;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,sizes:s})})),c):c};var m;h.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},v.displayName="Picture",v.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const L=["fallback"],O=function(e){let{fallback:t}=e,n=u(e,L);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};O.displayName="Placeholder",O.propTypes={fallback:o.string,sources:null==(m=v.propTypes)?void 0:m.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const S=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=v.propTypes;const b=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],T=["style","className"],I=e=>e.replace(/\n/g,""),C=function(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?a().string.apply(a(),[e,t,n].concat(o)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:a().object.isRequired,alt:C},B=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],D=new Set;let K,x;const R=function(e){let{as:t="div",image:o,style:a,backgroundColor:c,className:f,class:d,onStartLoad:p,onLoad:y,onError:E}=e,_=u(e,B);const{width:g,height:h,layout:v}=o,m=l(g,h,v),{style:L,className:O}=m,S=u(m,N),b=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(o.images)),[o.images]);d&&(f=d);const I=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,g,h);return(0,r.useEffect)((()=>{K||(K=Promise.all([n.e(774),n.e(731)]).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=b.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==y||y({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==y||y({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void D.add(T);if(x&&D.has(T))return;let t,r;return K.then((e=>{let{renderImageToString:n,swapPlaceholderImage:u}=e;b.current&&(b.current.innerHTML=n(i({isLoading:!0,isLoaded:D.has(T),image:o},_)),D.has(T)||(t=requestAnimationFrame((()=>{b.current&&(r=u(b.current,T,D,a,p,y,E))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[o]),(0,r.useLayoutEffect)((()=>{D.has(T)&&x&&(b.current.innerHTML=x(i({isLoading:D.has(T),isLoaded:D.has(T),image:o},_)),null==p||p({wasCached:!0}),null==y||y({wasCached:!0}))}),[o]),(0,r.createElement)(t,i({},S,{style:i({},L,a,{backgroundColor:c}),className:O+(f?" "+f:""),ref:b,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},w=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));w.propTypes=A,w.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function j(e){return function(t){let{src:n,__imageData:o,__error:a}=t,s=u(t,P);return a&&console.warn(a),o?r.createElement(e,i({image:o},s)):(console.warn("Image not loaded",n),null)}}const H=j((function(e){let{as:t="div",className:n,class:o,style:a,image:s,loading:c="lazy",imgClassName:p,imgStyle:y,backgroundColor:_,objectFit:g,objectPosition:h}=e,v=u(e,b);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(n=o),y=i({objectFit:g,objectPosition:h,backgroundColor:_},y);const{width:m,height:L,layout:C,images:A,placeholder:B,backgroundColor:N}=s,D=l(m,L,C),{style:K,className:x}=D,R=u(D,T),w={fallback:void 0,sources:[]};return A.fallback&&(w.fallback=i({},A.fallback,{srcSet:A.fallback.srcSet?I(A.fallback.srcSet):void 0})),A.sources&&(w.sources=A.sources.map((e=>i({},e,{srcSet:I(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},K,a,{backgroundColor:_}),className:x+(n?" "+n:"")}),r.createElement(E,{layout:C,width:m,height:L},r.createElement(O,i({},d(B,!1,C,m,L,N,g,h))),r.createElement(S,i({"data-gatsby-image-ssr":"",className:p},v,f("eager"===c,!1,w,c,y)))))})),k=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),G={src:a().string.isRequired,alt:C,width:k,height:k,sizes:a().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};H.displayName="StaticImage",H.propTypes=G;const U=j(w);U.displayName="StaticImage",U.propTypes=G},8872:function(e,t,n){"use strict";var r=n(4836);t.Z=function(e,t){let{raw:n,references:r}=e;void 0===t&&(t={});const i=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(i,t);const u={items:[{sys:{type:"Entry"},richText:i}],includes:{Entry:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"!==t})).map((e=>({...e,sys:{type:"Entry",id:e.contentful_id}}))),Asset:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"===t})).map((e=>({...e,sys:{type:"Asset",id:e.contentful_id}})))}},s=(0,a.default)(u,{removeUnresolved:!0});return(0,o.documentToReactComponents)(s[0].richText,t)};var o=n(4129),a=r(n(3903))},2464:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(8032),a=n(8872),i=function(e){var t=e.image,n=e.title,i=e.content;return r.createElement("div",{className:"hero-module--hero--26b78"},t&&r.createElement(o.G,{className:"hero-module--image--c04da",alt:n,image:t}),r.createElement("div",{className:"hero-module--details--5963b"},r.createElement("h1",{className:"hero-module--title--fae11"},n),i&&r.createElement("div",{className:"hero-module--content--bb570"},(0,a.Z)(i))))}},5917:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),o=function(e){var t=e.tags;return(null==t?void 0:t.length)>0&&r.createElement("small",{className:"tags-module--tags--a9fcf"},t.map((function(e){return r.createElement("div",{key:e,className:"tags-module--tag--d53a8"},e)})))}},1989:function(e,t,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),u=n(1866);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,e.exports=s},8407:function(e,t,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),u=n(3399);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,e.exports=s},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),u=n(5265);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=u,e.exports=s},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},7786:function(e,t,n){var r=n(1811),o=n(327);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},8458:function(e,t,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,l=s.toString,f=c.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?d:u).test(i(e))}},531:function(e,t,n){var r=n(2705),o=n(9932),a=n(1469),i=n(3448),u=r?r.prototype:void 0,s=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},1811:function(e,t,n){var r=n(1469),o=n(5403),a=n(5514),i=n(9833);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(s){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},5403:function(e,t,n){var r=n(1469),o=n(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7518:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},3399:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},4785:function(e,t,n){var r=n(1989),o=n(8407),a=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},4523:function(e,t,n){var r=n(8306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},5514:function(e,t,n){var r=n(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},327:function(e,t,n){var r=n(3448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},7361:function(e,t,n){var r=n(7786);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},1469:function(e){var t=Array.isArray;e.exports=t},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},8306:function(e,t,n){var r=n(3369);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}}}]);
//# sourceMappingURL=9b54ebb751b57f71c01f3dcbf0ef562e62242120-380b012c3294cd97a56c.js.map