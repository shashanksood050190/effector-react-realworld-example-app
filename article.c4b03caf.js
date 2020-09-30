parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"siga":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"uiIa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$slug=exports.$errors=exports.$comments=exports.$commentText=exports.deleteCommentFx=exports.fetchCommentFx=exports.fetchCommentsFx=exports.commentDeleted=exports.formSubmitted=exports.handleTextChanged=exports.textChanged=void 0;var e,t=require("effector"),r=c(require("api")),o=require("library/form"),n=c(require("library/router"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var c=o?Object.getOwnPropertyDescriptor(e,n):null;c&&(c.get||c.set)?Object.defineProperty(r,n,c):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}var s=(e=(0,o.createFormEvents)()).textChanged,m=e.handleTextChanged,u=e.formSubmitted;exports.formSubmitted=u,exports.handleTextChanged=m,exports.textChanged=s;var p=(0,t.createEvent)();exports.commentDeleted=p;var f=(0,t.createEffect)(function(e){return r.get("/articles/"+e+"/comments").then(function(e){return e.comments})});exports.fetchCommentsFx=f;var i=(0,t.createEffect)({handler:function(e){var t=e.slug,o=e.body;return r.post("/articles/"+t+"/comments",{body:o}).then(function(e){return e.comment})}});exports.fetchCommentFx=i;var x=(0,t.createEffect)(function(e){var t=e.slug,o=e.id;return r.del("/articles/"+t+"/comments/"+o)});exports.deleteCommentFx=x;var l=(0,t.createStore)("");exports.$commentText=l;var d=(0,t.createStore)([]);exports.$comments=d;var v=(0,t.createStore)({errors:[]});exports.$errors=v;var h=n.model.$pathname.map(function(e){return e.replace(/^\/article\//,"")});exports.$slug=h;
},{"effector":"hr1S","api":"in7L","library/form":"FMv7","library/router":"CgWG"}],"MANB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=exports.types=void 0;var e=o(require("./types"));exports.types=e;var t=o(require("./model"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if(Object.prototype.hasOwnProperty.call(e,p)){var u=n?Object.getOwnPropertyDescriptor(e,p):null;u&&(u.get||u.set)?Object.defineProperty(o,p,u):o[p]=e[p]}return o.default=e,t&&t.set(e,o),o}exports.model=t;
},{"./types":"siga","./model":"uiIa"}],"flHx":[function(require,module,exports) {

},{}],"yYXh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonDelete=void 0;var e=r(require("react")),t=require("ui");function r(e){return e&&e.__esModule?e:{default:e}}require("./index.css");var n=function(r){var n=r.onClick;return e.default.createElement(t.Button,{className:"mod-options btn-delete",onClick:n},e.default.createElement("i",{className:"ion-trash-a"}))};exports.ButtonDelete=n;
},{"react":"AQ6k","ui":"npgd","./index.css":"flHx"}],"dcBU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommentFooter=void 0;var e=u(require("react")),t=require("react-router-dom"),r=require("library/router"),a=require("../model"),o=require("./button-delete");function u(e){return e&&e.__esModule?e:{default:e}}var n=function(u){var n=u.author,m=u.createdAt,l=u.id;return e.default.createElement("div",{className:"card-footer"},e.default.createElement(t.Link,{className:"comment-author",to:"/@"+n.username},e.default.createElement("img",{alt:n.username,className:"comment-author-img",src:n.image}))," ",e.default.createElement(t.Link,{className:"comment-author",to:"/@"+n.username},n.username),e.default.createElement("span",{className:"date-posted"},new Date(m).toDateString()),e.default.createElement(r.AuthBranch,{check:"auth"},e.default.createElement(o.ButtonDelete,{onClick:function(){return a.model.commentDeleted(l)}})))};exports.CommentFooter=n;
},{"react":"AQ6k","react-router-dom":"uc19","library/router":"CgWG","../model":"MANB","./button-delete":"yYXh"}],"DumL":[function(require,module,exports) {
"use strict";var e=require("effector"),t=require("./model"),n=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var m=arguments[t],u=0,f=m.length;u<f;u++,o++)r[o]=m[u];return r};t.formSubmitted.watch(function(e){return e.preventDefault()}),t.$commentText.on(t.textChanged,function(e,t){return t}).reset(t.fetchCommentFx),(0,e.forward)({from:t.formSubmitted,to:(0,e.attach)({source:{slug:t.$slug,body:t.$commentText},effect:t.fetchCommentFx})}),(0,e.sample)({source:t.$slug,clock:t.commentDeleted,fn:function(e,t){return{slug:e,id:t}},target:t.deleteCommentFx}),t.$comments.on(t.fetchCommentsFx.doneData,function(e,t){return t}).on(t.fetchCommentFx.doneData,function(e,t){return n([t],e)}).on(t.deleteCommentFx.done,function(e,t){var n=t.params;return e.filter(function(e){return e.id!==n.id})}),t.$errors.on(t.fetchCommentFx.failData,function(e,t){return t}).reset(t.textChanged);
},{"effector":"hr1S","./model":"uiIa"}],"dmRu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Comment=void 0;var e=r(require("react")),t=require("./comment-footer");function r(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var a=function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(r){var o=r.comment;return e.default.createElement("div",{className:"card"},e.default.createElement("div",{className:"card-block"},e.default.createElement("p",{className:"card-text"},o.body)),e.default.createElement(t.CommentFooter,a({},o)))};exports.Comment=o;
},{"react":"AQ6k","./comment-footer":"dcBU","../model/init":"DumL"}],"EwuE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommentsList=void 0;var e=o(require("react")),t=require("effector-react"),r=require("ui"),u=require("../model"),n=require("./comment");function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return e.default.createElement(r.List,null,(0,t.useList)(u.model.$comments,function(t){return e.default.createElement(n.Comment,{comment:t})}))};exports.CommentsList=i;
},{"react":"AQ6k","effector-react":"wuaz","ui":"npgd","../model":"MANB","./comment":"dmRu"}],"aXGq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Errors=void 0;var r=u(require("react")),e=require("effector-react"),t=require("../../../ui"),o=require("../model");function u(r){return r&&r.__esModule?r:{default:r}}var s=function(){var u=(0,e.useStore)(o.model.$errors);return r.default.createElement(t.ErrorList,{errors:u})};exports.Errors=s;
},{"react":"AQ6k","effector-react":"wuaz","../../../ui":"npgd","../model":"MANB"}],"QGYy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AddComment=void 0;var e=u(require("react")),r=require("effector-react"),t=require("ui"),o=require("../model");function u(e){return e&&e.__esModule?e:{default:e}}var a=function(){var u=(0,r.useStore)(o.model.$commentText);return e.default.createElement(t.Textarea,{rows:3,value:u,onChange:o.model.handleTextChanged})};exports.AddComment=a;
},{"react":"AQ6k","effector-react":"wuaz","ui":"npgd","../model":"MANB"}],"IO74":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FormFooter=void 0;var e=a(require("react")),t=require("effector-react"),r=u(require("features/user")),o=require("ui");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){var n=(0,t.useStore)(r.model.$user),u=n.image,a=n.username;return e.default.createElement("div",{className:"card-footer"},e.default.createElement("img",{alt:a,className:"comment-author-img",src:u}),e.default.createElement(o.Button,{className:"btn-sm btn-primary",type:"submit"},"Post Comment"))};exports.FormFooter=i;
},{"react":"AQ6k","effector-react":"wuaz","features/user":"TQk2","ui":"npgd"}],"vuhL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Form=void 0;var e=u(require("react")),r=require("ui"),t=require("../model"),o=require("./add-comment"),m=require("./form-footer");function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){return e.default.createElement(r.Form,{className:"card comment-form",onSubmit:t.model.formSubmitted},e.default.createElement("div",{className:"card-block"},e.default.createElement(o.AddComment,null)),e.default.createElement(m.FormFooter,null))};exports.Form=l;
},{"react":"AQ6k","ui":"npgd","../model":"MANB","./add-comment":"QGYy","./form-footer":"IO74"}],"aWFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Comments=void 0;var e=a(require("react")),t=require("react-router-dom"),r=require("library/router"),l=require("./comment-list"),n=require("./errors"),u=require("./form");function a(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var o=function(){return e.default.createElement("div",{className:"col-xs-12 col-md-8 offset-md-2"},e.default.createElement(r.AuthBranch,{check:"auth"},e.default.createElement(n.Errors,null),e.default.createElement(u.Form,null)),e.default.createElement(r.AuthBranch,{check:"anon"},e.default.createElement("p",null,e.default.createElement(t.Link,{to:"/login"},"Sign in")," or ",e.default.createElement(t.Link,{to:"/register"},"sign up")," to add comments on this article.")),e.default.createElement(l.CommentsList,null))};exports.Comments=o;
},{"react":"AQ6k","react-router-dom":"uc19","library/router":"CgWG","./comment-list":"EwuE","./errors":"aXGq","./form":"vuhL","../model/init":"DumL"}],"aCgk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"types",{enumerable:!0,get:function(){return e.types}}),Object.defineProperty(exports,"model",{enumerable:!0,get:function(){return e.model}}),Object.defineProperty(exports,"Comments",{enumerable:!0,get:function(){return t.Comments}});var e=require("./model"),t=require("./ui/comments");
},{"./model":"MANB","./ui/comments":"aWFO"}],"spEH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_e,exports.compiler=Pe;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=/[\'\"]/,i={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},l={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},u=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,p=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,m=/^ *> ?/gm,y=/^ {2,}\n/,g=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,h=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,k=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,b=/^(?:\n *)*\n/,x=/\r\n?/g,O=/^\[\^([^\]]+)](:.*)\n/,H=/^\[\^([^\]]+)]/,S=/\f/g,w=/^\s*?\[(x|\s)\]/,I=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,M=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,A=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,E=/&([a-z]+);/g,j=/^<!--.*?-->/,C=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,G=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,L=/^\{.*\}$/,$=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,T=/^<([^ >]+@[^ >]+)>/,P=/^<([^ >]+:\/[^ >]+)>/,_=/ *\n+$/,z=/(?:^|\n)( *)$/,X=/-([a-z])?/gi,D=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,B=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,N=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,U=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,Z=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,F=/\t/g,q=/^ *\| */,V=/(^ *\||\| *$)/g,K=/ *$/,Q=/^ *:-+: *$/,J=/^ *:-+ *$/,Y=/^ *-+: *$/,ee=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,te=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ne=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,re=/^\\([^0-9A-Za-z\s])/,ae=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/(^\n+|\n+$|\s+$)/g,ce=/^([ \t]*)/,ie=/\\([^0-9A-Z\s])/gi,le=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ue=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),se=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),fe="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",pe=new RegExp("^\\[("+fe+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),de=new RegExp("^!\\[("+fe+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),me=[d,k,h,I,M,A,j,G,ue,se,D,R];function ye(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ge(e){return Y.test(e)?"right":Q.test(e)?"center":J.test(e)?"left":null}function he(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach(function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"!==e.type||null!=a[t+1]&&"tableSeparator"!==a[t+1].type||(e.content=e.content.replace(K,"")),o[o.length-1].push(e))}),o}function ke(e,t,n){n.inline=!0;var r=he(e[1],t,n),a=e[2].replace(V,"").split("|").map(ge),o=function(e,t,n){return e.trim().split("\n").map(function(e){return he(e,t,n)})}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function ve(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function be(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Oe(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function He(e){return function(t){return e.exec(t)}}function Se(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function we(e){return e.replace(ie,"$1")}function Ie(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Me(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){return n.inline=!1,e(t+"\n\n",n)}var Ee,je=function(e,t,n){return{content:Ie(t,e[1],n)}};function Ce(){return{}}function Ge(){return null}function Le(){return[].slice.call(arguments).filter(Boolean).join(" ")}function $e(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Te(e,t){var r=$e(t,e);return r?"function"==typeof r||"object"==n(r)&&"render"in r?r:$e(t,e+".component",e):e}function Pe(t,n){void 0===n&&(n={}),n.overrides=n.overrides||{},n.slugify=n.slugify||ye,n.namedCodesToUnicode=n.namedCodesToUnicode?o(o({},l),n.namedCodesToUnicode):l;var r=n.createElement||e.default.createElement;function a(e,t){var a=$e(n.overrides,e+".props",{});return r.apply(void 0,[Te(e,n.overrides),o(o(o({},t),a),{},{className:Le(null==t?void 0:t.className,a.className)||void 0})].concat([].slice.call(arguments,2)))}function V(e){var t=!1;n.forceInline?t=!0:n.forceBlock||(t=!1===Z.test(e));var r,o=he(ge(t?e:e.replace(oe,"")+"\n\n",{inline:t}));return o.length>1?r=a(t?"span":"div",{key:"outer"},o):1===o.length?"string"==typeof(r=o[0])&&(r=a("span",{key:"outer"},r)):r=a("span",{key:"outer"}),r}function K(t){var n=t.match(s);return n?n.reduce(function(t,n,r){var a,o=n.indexOf("=");if(-1!==o){var l=(a=n.slice(0,o),-1!==a.indexOf("-")&&null===a.match(C)&&(a=a.replace(X,function(e,t){return t.toUpperCase()})),a).trim(),u=function(e){return e?(c.test(e.charAt(0))&&(e=e.substr(1)),c.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(n.slice(o+1).trim()),s=i[l]||l,f=t[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce(function(e,t){var n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()})]=t.slice(n.length+1).trim(),e},{}):"href"===e?Se(t):(t.match(L)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(l,u);"string"==typeof f&&(A.test(f)||G.test(f))&&(t[s]=e.default.cloneElement(V(f.trim()),{key:r}))}else"style"!==n&&(t[i[n]||n]=!0);return t},{}):void 0}var Q=[],J={},Y={blockQuote:{match:Oe(d),order:Ee.HIGH,parse:function(e,t,n){return{content:t(e[0].replace(m,""),n)}},react:function(e,t,n){return a("blockquote",{key:n.key},t(e.content,n))}},breakLine:{match:He(y),order:Ee.HIGH,parse:Ce,react:function(e,t,n){return a("br",{key:n.key})}},breakThematic:{match:Oe(g),order:Ee.HIGH,parse:Ce,react:function(e,t,n){return a("hr",{key:n.key})}},codeBlock:{match:Oe(k),order:Ee.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,n){return a("pre",{key:n.key},a("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Oe(h),order:Ee.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(v),order:Ee.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,n){return a("code",{key:n.key},e.content)}},footnote:{match:Oe(O),order:Ee.MAX,parse:function(e){return Q.push({footnote:e[2],identifier:e[1]}),{}},react:Ge},footnoteReference:{match:be(H),order:Ee.HIGH,parse:function(e){return{content:e[1],target:"#"+n.slugify(e[1])}},react:function(e,t,n){return a("a",{key:n.key,href:Se(e.target)},a("sup",{key:n.key},e.content))}},gfmTask:{match:be(w),order:Ee.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,n){return a("input",{checked:e.completed,key:n.key,readOnly:!0,type:"checkbox"})}},heading:{match:Oe(I),order:Ee.HIGH,parse:function(e,t,r){return{content:Ie(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}},react:function(e,t,n){return e.tag="h"+e.level,a(e.tag,{id:e.id,key:n.key},t(e.content,n))}},headingSetext:{match:Oe(M),order:Ee.MAX,parse:function(e,t,n){return{content:Ie(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:He(j),order:Ee.HIGH,parse:function(){return{}},react:Ge},image:{match:xe(de),order:Ee.HIGH,parse:function(e){return{alt:e[1],target:we(e[2]),title:e[3]}},react:function(e,t,n){return a("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:Se(e.target)})}},link:{match:be(pe),order:Ee.LOW,parse:function(e,t,n){return{content:Me(t,e[1],n),target:we(e[2]),title:e[3]}},react:function(e,t,n){return a("a",{key:n.key,href:Se(e.target),title:e.title},t(e.content,n))}},linkAngleBraceStyleDetector:{match:be(P),order:Ee.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:be($),order:Ee.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:be(T),order:Ee.MAX,parse:function(e){var t=e[1],n=e[1];return f.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=z.exec(n);return!r||!t._list&&t.inline?null:se.exec(e=r[1]+e)},order:Ee.HIGH,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(p,"\n").match(ue),i=!1;return{items:c.map(function(e,r){var a=le.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(le,""),u=r===c.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var f,p=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,f=l.replace(_,"\n\n")):(n.inline=!0,f=l.replace(_,""));var m=t(f,n);return n.inline=p,n._list=d,m}),ordered:a,start:o}},react:function(e,t,n){return a(e.ordered?"ol":"ul",{key:n.key,start:e.start},e.items.map(function(e,r){return a("li",{key:r},t(e,n))}))}},newlineCoalescer:{match:Oe(b),order:Ee.LOW,parse:Ce,react:function(){return"\n"}},paragraph:{match:Oe(R),order:Ee.LOW,parse:je,react:function(e,t,n){return a("p",{key:n.key},t(e.content,n))}},ref:{match:be(B),order:Ee.MAX,parse:function(e){return J[e[1]]={target:e[2],title:e[4]},{}},react:Ge},refImage:{match:xe(N),order:Ee.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,n){return a("img",{key:n.key,alt:e.alt,src:Se(J[e.ref].target),title:J[e.ref].title})}},refLink:{match:be(U),order:Ee.MAX,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(W,"\\$1"),n),ref:e[2]}},react:function(e,t,n){return J[e.ref]?a("a",{key:n.key,href:Se(J[e.ref].target),title:J[e.ref].title},t(e.content,n)):a("span",{key:n.key},t(e.fallbackContent,n))}},table:{match:Oe(D),order:Ee.HIGH,parse:ke,react:function(e,t,n){return a("table",{key:n.key},a("thead",null,a("tr",null,e.header.map(function(r,o){return a("th",{key:o,style:ve(e,o)},t(r,n))}))),a("tbody",null,e.cells.map(function(r,o){return a("tr",{key:o},r.map(function(r,o){return a("td",{key:o,style:ve(e,o)},t(r,n))}))})))}},tableSeparator:{match:function(e,t){return t.inTable?q.exec(e):null},order:Ee.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:He(ae),order:Ee.MIN,parse:function(e){return{content:e[0].replace(E,function(e,t){return n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e})}},react:function(e){return e.content}},textBolded:{match:xe(ee),order:Ee.MED,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return a("strong",{key:n.key},t(e.content,n))}},textEmphasized:{match:xe(te),order:Ee.LOW,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,n){return a("em",{key:n.key},t(e.content,n))}},textEscaped:{match:xe(re),order:Ee.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ne),order:Ee.LOW,parse:je,react:function(e,t,n){return a("del",{key:n.key},t(e.content,n))}}};!0!==n.disableParsingRawHTML&&(Y.htmlBlock={match:He(A),order:Ee.HIGH,parse:function(e,t,n){var r,a=e[3].match(ce),o=new RegExp("^"+a[1],"gm"),c=e[3].replace(o,""),i=(r=c,me.some(function(e){return e.test(r)})?Ae:Ie),l=e[1].toLowerCase(),s=-1!==u.indexOf(l);return{attrs:K(e[2]),content:s?e[3]:i(t,c,n),noInnerParse:s,tag:s?l:e[1]}},react:function(e,t,n){return a(e.tag,Object.assign({key:n.key},e.attrs),e.noInnerParse?e.content:t(e.content,n))}},Y.htmlSelfClosing={match:He(G),order:Ee.HIGH,parse:function(e){return{attrs:K(e[2]||""),tag:e[1]}},react:function(e,t,n){return a(e.tag,Object.assign({},e.attrs,{key:n.key}))}});var ie,fe,ge=function(e){var t=Object.keys(e);function n(r,a){for(var o=[],c="";r;)for(var i=0;i<t.length;){var l=t[i],u=e[l],s=u.match(r,a,c);if(s){var f=s[0];r=r.substring(f.length);var p=u.parse(s,n,a);null==p.type&&(p.type=l),o.push(p),c=f;break}i++}return o}return t.sort(function(t,n){var r=e[t].order,a=e[n].order;return r!==a?r-a:t<n?-1:1}),function(e,t){return n(function(e){return e.replace(x,"\n").replace(S,"").replace(F,"    ")}(e),t)}}(Y),he=(fe=Y,ie=function(e,t,n){return fe[e.type].react(e,t,n)},function e(t,n){if(void 0===n&&(n={}),Array.isArray(t)){for(var r=n.key,a=[],o=!1,c=0;c<t.length;c++){n.key=c;var i=e(t[c],n),l="string"==typeof i;l&&o?a[a.length-1]+=i:a.push(i),o=l}return n.key=r,a}return ie(t,e,n)}),Pe=V(t.replace(/<!--[\s\S]*?(?:-->)/g,""));return Q.length&&Pe.props.children.push(a("footer",{key:"footer"},Q.map(function(e){return a("div",{id:n.slugify(e.identifier),key:e.identifier},e.identifier,he(ge(e.footnote,{inline:!0})))}))),Pe}function _e(t){var n=t.children,r=t.options,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}(t,["children","options"]);return e.default.cloneElement(Pe(n,r),a)}!function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(Ee||(Ee={}));
},{"react":"AQ6k"}],"aDZn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$canModify=exports.$article=exports.$slug=exports.PageGate=exports.fetchPageDataFx=exports.deleteArticleFx=exports.fetchArticleFx=exports.articleDeleted=void 0;var e=require("effector"),t=require("effector-react"),r=i(require("api")),o=i(require("features/comments")),a=i(require("features/user")),n=i(require("library/router"));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=o?Object.getOwnPropertyDescriptor(e,a):null;n&&(n.get||n.set)?Object.defineProperty(r,a,n):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r},l=(0,e.createEvent)();exports.articleDeleted=l;var p=(0,e.createEffect)(function(e){return r.get("/articles/"+e).then(function(e){return e.article}).then(function(e){var t=e.createdAt,r=f(e,["createdAt"]);return u(u({},r),{createdAt:new Date(t).toDateString()})})});exports.fetchArticleFx=p;var s=(0,e.createEffect)(function(e){return r.del("/articles/"+e)});exports.deleteArticleFx=s;var d=(0,e.createEffect)(function(e){return Promise.all([p(e),o.model.fetchCommentsFx(e)])});exports.fetchPageDataFx=d;var x=(0,t.createGate)();exports.PageGate=x;var y=n.model.$pathname.map(function(e){return e.replace(/^\/article\//,"")});exports.$slug=y;var v=(0,e.createStore)({title:"",slug:"",body:"",createdAt:"",updatedAt:"",tagList:[],description:"",author:{username:"",bio:"",image:"",following:!1},favorited:!1,favoritesCount:0});exports.$article=v;var g=(0,e.combine)(v,a.model.$user,function(e,t){return e.author.username===t.username});exports.$canModify=g;
},{"effector":"hr1S","effector-react":"wuaz","api":"in7L","features/comments":"aCgk","features/user":"TQk2","library/router":"CgWG"}],"QbiA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=r(require("./model"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=n?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}exports.model=e;
},{"./model":"aDZn"}],"ZaTi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EditMode=void 0;var e=n(require("react")),t=require("react-router-dom"),r=require("effector-react"),l=require("ui"),a=require("../model");function n(e){return e&&e.__esModule?e:{default:e}}var u=function(){var n=(0,r.useStore)(a.model.$canModify),u=(0,r.useStore)(a.model.$article).slug;return e.default.createElement(e.default.Fragment,null,n&&e.default.createElement("span",null,e.default.createElement(t.Link,{to:"/editor/"+u},e.default.createElement(l.Button,{className:"btn-sm btn-outline-secondary"},e.default.createElement("i",{className:"ion-edit"})," Edit Article")),e.default.createElement(l.Button,{className:"btn-sm btn-outline-danger",onClick:a.model.articleDeleted},e.default.createElement("i",{className:"ion-trash-a"})," Delete Article")))};exports.EditMode=u;
},{"react":"AQ6k","react-router-dom":"uc19","effector-react":"wuaz","ui":"npgd","../model":"QbiA"}],"hqRz":[function(require,module,exports) {
"use strict";var e=require("effector"),t=n(require("library/router")),r=require("./model");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=n?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(0,e.forward)({from:r.PageGate.open,to:(0,e.attach)({source:r.$slug,effect:r.fetchPageDataFx})}),r.$article.on(r.fetchArticleFx.doneData,function(e,t){return t}),(0,e.forward)({from:r.articleDeleted,to:(0,e.attach)({source:r.$slug,effect:r.deleteArticleFx})}),r.deleteArticleFx.done.watch(function(){t.model.history.push("/")});
},{"effector":"hr1S","library/router":"CgWG","./model":"aDZn"}],"OmDx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArticlePage=void 0;var e=d(require("react")),t=require("effector-react"),l=require("features/comments"),a=require("features/feed"),r=d(require("markdown-to-jsx")),u=require("ui"),n=require("../model"),c=require("./edit-mode");function d(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var i=function(){(0,t.useGate)(n.model.PageGate);var d=(0,t.useStore)(n.model.$article),i=d.title,o=d.author,m=d.createdAt,f=d.body,s=d.tagList,E=(0,t.useStore)(n.model.fetchArticleFx.pending);return e.default.createElement(e.default.Fragment,null,!E&&e.default.createElement("div",{className:"article-page"},e.default.createElement(u.Banner,null,e.default.createElement(u.Container,null,e.default.createElement("h1",null,i),e.default.createElement(a.ArticleMeta,{author:o,createdAt:m},e.default.createElement(c.EditMode,null)))),e.default.createElement(u.Page,null,e.default.createElement(u.Row,{className:"article-content"},e.default.createElement("div",{className:"col-xs-12"},e.default.createElement(r.default,null,f),e.default.createElement(u.TagList,null,s.map(function(t){return e.default.createElement(u.Tag,{key:t},t.toLowerCase())})))),e.default.createElement("hr",null),e.default.createElement("div",{className:"article-actions"}),e.default.createElement(u.Row,null,e.default.createElement(l.Comments,null)))))};exports.ArticlePage=i;
},{"react":"AQ6k","effector-react":"wuaz","features/comments":"aCgk","features/feed":"emfq","markdown-to-jsx":"spEH","ui":"npgd","../model":"QbiA","./edit-mode":"ZaTi","../model/init":"hqRz"}],"mbNX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ArticlePage",{enumerable:!0,get:function(){return e.ArticlePage}});var e=require("./ui/article");
},{"./ui/article":"OmDx"}]},{},[], null)