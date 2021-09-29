"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[430],{6763:function(e,t,r){r.d(t,{qn:function(){return h},fR:function(){return x},o4:function(){return n}});var n={};r.r(n),r.d(n,{createFeed:function(){return f}});var c=r(1549),a=r(9041),i=r(3719),o=r(6942);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=e.effect,r=(0,c.yM)(),n=(0,c.GW)((function(e){var t=e.slug;return o.v_("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),s=(0,c.GW)((function(e){var t=e.slug;return o.IV("articles/".concat(t,"/favorite")).then((function(e){return e.data}))})),l=(0,c.MT)({articlesCount:0,articles:[]}).on(t.doneData,(function(e,t){return t})).on(r,(function(e,t){return u(u({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:u(u({},e),{},{favorited:!e.favorited,favoritesCount:e.favorited?e.favoritesCount-1:e.favoritesCount+1})}))})})).on([n.done,s.done],(function(e,t){var r=t.params,n=t.result;return u(u({},e),{},{articles:e.articles.map((function(e){return e.slug!==r.slug?e:u(u({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})).on([n.fail,s.fail],(function(e,t){var r=t.params;return u(u({},e),{},{articles:e.articles.map((function(e){return e.slug!==r.slug?e:u(u({},e),{},{favorited:r.favorited,favoritesCount:r.favoritesCount})}))})})),f=l.map((function(e){return e.articlesCount})),d=l.map((function(e){return e.articles})),m=(0,i.status)({effect:t}),j=(0,c.$e)(m,d,(function(e,t){return("done"===e||"fail"===e)&&0===t.length}));return(0,c.Vl)({source:r,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:s,unfavorite:n}}),{favoriteArticleToggled:r,setUnfavoriteArticleFx:s,$feed:l,$totalPages:f,$articles:d,$isEmptyFeed:j,selectors:{useLoading:function(){return(0,a.oR)(t.pending)},useIsEmpty:function(){return(0,a.oR)(j)}}}}var d=r(4246),m=function(e){var t=e.children;return(0,d.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},j=r(303),h=function(e){var t=e.author,r=e.createdAt,n=e.children;return(0,d.jsxs)("div",{className:"article-meta",children:[(0,d.jsx)(j.rU,{to:"/@".concat(t.username),children:(0,d.jsx)("img",{alt:t.username,src:t.image})}),(0,d.jsxs)("div",{className:"info",children:[(0,d.jsx)(j.rU,{className:"author",to:"/@".concat(t.username),children:t.username}),(0,d.jsx)("span",{className:"date",children:new Date(r).toDateString()})]}),n]})},p=r(7391),v=function(e){var t=e.active,r=e.onClick,n=e.children;return(0,d.jsxs)(p.zx,{className:"button-favorite btn-outline-primary","data-active":t,size:"sm",onClick:r,children:[(0,d.jsx)("i",{className:"ion-heart"})," ",n]})},b=function(e){var t=e.data,r=t.author,n=t.createdAt,c=t.slug,a=t.title,i=t.description,o=t.tagList,s=t.favorited,u=t.favoritesCount,l=e.onClick;return(0,d.jsxs)("article",{className:"article-preview",children:[(0,d.jsx)(h,{author:r,createdAt:n,children:(0,d.jsx)("div",{className:"pull-xs-right",children:(0,d.jsx)(v,{active:s,onClick:l,children:u})})}),(0,d.jsxs)(j.rU,{className:"preview-link",to:"/article/".concat(c),children:[(0,d.jsx)("h1",{children:a}),(0,d.jsx)("p",{children:i}),(0,d.jsx)("span",{children:"Read more..."}),(0,d.jsx)(p.PS,{children:o.map((function(e){return(0,d.jsx)(p.Vp,{children:e.toLowerCase()},e)}))})]})]})},g=function(e){return e.show?(0,d.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},x=function(e){var t=e.loading,r=e.isEmpty,n=e.pageSize,c=e.pageNumber,i=e.totalPages,o=e.articles,s=e.onPageChange,u=e.onArticleClick;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{show:r}),(0,d.jsx)(m,{children:(0,a.sm)(o,{getKey:function(e){return e.slug},fn:function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(b,{data:e,onClick:function(){return u(e)}})})}})}),(0,d.jsx)(p.tl,{current:c,pageSize:n,total:i,onPageChange:s}),(0,d.jsx)(p.$j,{loading:t})]})}},8430:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var n=r(7378),c=r(303),a=r(7391),i=r(1288),o=r(3451),s=r(9635),u=r(1549),l=r(6942),f=(0,u.yM)(),d=(0,u.GW)((function(e){return l.U2("articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))})),m=(0,u.GW)((function(e){var t=e.slug,r=e.body;return l.v_("articles/".concat(t,"/comments"),{comment:{body:r}}).then((function(e){return e.data.comment}))})),j=(0,u.GW)((function(e){var t=e.slug,r=e.id;return l.IV("articles/".concat(t,"/comments/").concat(r))}));(0,u.eH)({from:f,to:j});var h=(0,u.nu)(d.doneData,[]).on(m.doneData,(function(e,t){return[t].concat(e)})).on(j.done,(function(e,t){var r=t.params;return e.filter((function(e){return e.id!==r.id}))})),p=(0,u.MT)({errors:{}}).on([m.failData,j.failData],(function(e,t){var r;return null===(r=t.response)||void 0===r?void 0:r.data})),v=p.map((function(e){return Object.keys(Object(e)).length>0})),b=p.map((function(e){return Object.entries(Object(null==e?void 0:e.errors))})),g=r(9041),x=r(4246);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P={body:""};function N(){var e=(0,s.UO)().slug,t=(0,o.cI)({defaultValues:P}),r=t.handleSubmit,c=t.register,i=t.reset;return(0,n.useEffect)((function(){var e=m.done.watch((function(){i(P)}));return function(){return e()}})),(0,x.jsxs)(a.l0,{className:"card comment-form",onSubmit:r((function(t){var r=t.body;m({body:r,slug:e})})),children:[(0,x.jsx)("div",{className:"card-block",children:(0,x.jsx)(a.l0.Control,y({as:"textarea",placeholder:"Write a comment...",rows:3},c("body")))}),(0,x.jsx)(C,{})]})}function C(){var e=i.wl.useUser(),t=e.image,r=e.username;return(0,x.jsxs)("div",{className:"card-footer",children:[(0,x.jsx)("img",{alt:r,className:"comment-author-img",src:t}),(0,x.jsx)(a.zx,{className:"btn-primary",size:"sm",type:"submit",children:"Post Comment"})]})}var D=function(e){var t=e.author,r=e.onClick,n=i.wl.useUser().username,c=i.wl.useIsAuth(),o=n===t.username;return c&&o?(0,x.jsx)(a.zx,{className:"mod-options btn-delete",onClick:r,children:(0,x.jsx)("i",{className:"ion-trash-a"})}):null};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e){var t=e.data;return(0,x.jsxs)("div",{className:"card",children:[(0,x.jsx)("div",{className:"card-block",children:(0,x.jsx)("p",{className:"card-text",children:t.body})}),(0,x.jsx)(E,S({},t))]})}function E(e){var t=e.author,r=e.createdAt,n=e.id,a=(0,s.UO)().slug;return(0,x.jsxs)("div",{className:"card-footer",children:[(0,x.jsx)(c.rU,{className:"comment-author",to:"/@".concat(t.username),children:(0,x.jsx)("img",{alt:t.username,className:"comment-author-img",src:t.image})})," ",(0,x.jsx)(c.rU,{className:"comment-author",to:"/@".concat(t.username),children:t.username}),(0,x.jsx)("span",{className:"date-posted",children:new Date(r).toDateString()}),(0,x.jsx)(D,{author:t,onClick:function(){f({slug:a,id:n})}})]})}var z=function(){var e=(0,s.UO)().slug;return(0,n.useEffect)((function(){e&&d(e)}),[e]),(0,x.jsx)(a.aV,{children:(0,g.sm)(h,{getKey:function(e){return e.id},fn:function(e){return(0,x.jsx)(U,{data:e})}})})},R=function(){var e=(0,g.oR)(v),t=(0,g.oR)(b);return e?(0,x.jsx)(a.KM,{errors:t}):null},F=function(){var e=i.wl.useIsAuth();return(0,x.jsx)(x.Fragment,{children:e?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(R,{}),(0,x.jsx)(N,{}),(0,x.jsx)(z,{})]}):null})},I=["createdAt"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var $=(0,u.yM)(),M=(0,u.GW)((function(e){return l.U2("articles/".concat(e)).then((function(e){return e.data.article})).then((function(e){var t=e.createdAt;return V(V({},L(e,I)),{},{createdAt:new Date(t).toDateString()})}))})),T=(0,u.GW)((function(e){return l.IV("articles/".concat(e))})),K=(0,u.nu)(M.doneData,{title:"",slug:"",body:"",createdAt:"",updatedAt:"",tagList:[],description:"",author:{username:"",bio:"",image:"",following:!1},favorited:!1,favoritesCount:0}),q=(0,u.$e)(K,i.o4.bR,(function(e,t){return e.author.username===t.username}));(0,u.eH)({from:$,to:T}),T.done.watch((function(){c.m8.push("/")}));var H=function(){return(0,g.oR)(K)},X=r(4080),_=function(){var e=H().tagList;return(0,x.jsx)(a.PS,{children:e.map((function(e){return(0,x.jsx)(a.Vp,{children:e.toLowerCase()},e)}))})},Z=function(){var e=H().body;return(0,x.jsx)(a.X2,{className:"article-content",children:(0,x.jsxs)("div",{className:"col-xs-12",children:[(0,x.jsx)(X.Z,{children:e}),(0,x.jsx)(_,{})]})})},B=r(6763),J=r(4289),Q=function(){var e=(0,g.oR)(q),t=H().slug;return(0,x.jsx)(x.Fragment,{children:e&&(0,x.jsxs)("span",{children:[(0,x.jsx)(J.rU,{to:"/editor/".concat(t),children:(0,x.jsxs)(a.zx,{className:"btn-outline-secondary",size:"sm",children:[(0,x.jsx)("i",{className:"ion-edit"})," Edit Article"]})}),(0,x.jsxs)(a.zx,{className:"btn-sm btn-outline-danger",onClick:function(){$(t)},children:[(0,x.jsx)("i",{className:"ion-trash-a"})," Delete Article"]})]})})},Y=function(){var e=H(),t=e.title,r=e.author,n=e.createdAt;return(0,x.jsx)(a.jL,{children:(0,x.jsxs)(a.W2,{children:[(0,x.jsx)("h1",{children:t}),(0,x.jsx)(B.qn,{author:r,createdAt:n,children:(0,x.jsx)(Q,{})})]})})},ee=function(){var e=i.wl.useIsAuth();return(0,x.jsx)(x.Fragment,{children:e?null:(0,x.jsxs)("p",{children:[(0,x.jsx)(c.rU,{to:"/login",children:"Sign in"})," or ",(0,x.jsx)(c.rU,{to:"/register",children:"sign up"})," to add comments on this article."]})})},te=function(){var e=(0,c.UO)().slug,t=(0,g.oR)(M.pending);return(0,n.useEffect)((function(){e&&M(e)}),[e]),(0,x.jsx)(x.Fragment,{children:!t&&(0,x.jsxs)("div",{className:"article-page",children:[(0,x.jsx)(Y,{}),(0,x.jsxs)(a.T3,{children:[(0,x.jsx)(Z,{}),(0,x.jsx)("hr",{}),(0,x.jsx)("div",{className:"article-actions"}),(0,x.jsx)(a.X2,{children:(0,x.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[(0,x.jsx)(F,{}),(0,x.jsx)(ee,{})]})})]})]})})}}}]);