"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[411],{6763:function(e,n,t){t.d(n,{qn:function(){return h},fR:function(){return b},o4:function(){return r}});var r={};t.r(r),t.d(r,{createFeed:function(){return f}});var a=t(1549),i=t(9041),c=t(3719),o=t(6942);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){var n=e.effect,t=(0,a.yM)(),r=(0,a.GW)((function(e){var n=e.slug;return o.v_("articles/".concat(n,"/favorite")).then((function(e){return e.data}))})),u=(0,a.GW)((function(e){var n=e.slug;return o.IV("articles/".concat(n,"/favorite")).then((function(e){return e.data}))})),l=(0,a.MT)({articlesCount:0,articles:[]}).on(n.doneData,(function(e,n){return n})).on([r.done,u.done],(function(e,n){var t=n.params,r=n.result;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:s(s({},e),{},{favorited:r.article.favorited,favoritesCount:r.article.favoritesCount})}))})})),f=l.map((function(e){return e.articlesCount})),d=l.map((function(e){return e.articles})),p=(0,c.status)({effect:n}),g=(0,a.$e)(p,d,(function(e,n){return("done"===e||"fail"===e)&&0===n.length}));return(0,a.Vl)({source:t,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:u,unfavorite:r}}),{favoriteArticleToggled:t,$feed:l,$totalPages:f,$articles:d,$isEmptyFeed:g,selectors:{useLoading:function(){return(0,i.oR)(n.pending)},useIsEmpty:function(){return(0,i.oR)(g)}}}}var d=t(4246),p=function(e){var n=e.children;return(0,d.jsx)("ul",{className:"articles-wrapper list-unstyled",children:n})},g=t(303),h=function(e){var n=e.author,t=e.createdAt,r=e.children;return(0,d.jsxs)("div",{className:"article-meta",children:[(0,d.jsx)(g.rU,{to:"/@".concat(n.username),children:(0,d.jsx)("img",{alt:n.username,src:n.image})}),(0,d.jsxs)("div",{className:"info",children:[(0,d.jsx)(g.rU,{className:"author",to:"/@".concat(n.username),children:n.username}),(0,d.jsx)("span",{className:"date",children:new Date(t).toDateString()})]}),r]})},v=t(7391),m=function(e){var n=e.active,t=e.onClick,r=e.children;return(0,d.jsxs)(v.zx,{className:"btn-outline-primary","data-active":n,size:"sm",onClick:t,children:[(0,d.jsx)("i",{className:"ion-heart"})," ",r]})},j=function(e){var n=e.data,t=n.author,r=n.createdAt,a=n.slug,i=n.title,c=n.description,o=n.tagList,u=n.favorited,s=n.favoritesCount,l=e.onClick;return(0,d.jsxs)("article",{className:"article-preview",children:[(0,d.jsx)(h,{author:t,createdAt:r,children:(0,d.jsx)("div",{className:"pull-xs-right",children:(0,d.jsx)(m,{active:u,onClick:l,children:s})})}),(0,d.jsxs)(g.rU,{className:"preview-link",to:"/article/".concat(a),children:[(0,d.jsx)("h1",{children:i}),(0,d.jsx)("p",{children:c}),(0,d.jsx)("span",{children:"Read more..."}),(0,d.jsx)(v.PS,{children:o.map((function(e){return(0,d.jsx)(v.Vp,{children:e.toLowerCase()},e)}))})]})]})},x=function(e){return e.show?(0,d.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},b=function(e){var n=e.loading,t=e.isEmpty,r=e.pageSize,a=e.pageNumber,c=e.totalPages,o=e.articles,u=e.onPageChange,s=e.onArticleClick;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{show:t}),(0,d.jsx)(p,{children:(0,i.sm)(o,{getKey:function(e){return e.slug},fn:function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(j,{data:e,onClick:function(){return s(e)}})})}})}),(0,d.jsx)(v.tl,{current:a,pageSize:r,total:c,onPageChange:u}),(0,d.jsx)(v.$j,{loading:n})]})}},6925:function(e,n,t){t.d(n,{F:function(){return i}});var r=t(1549),a=t(8737);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.pageSize,t=void 0===n?10:n,i=(0,r.yM)(),c=(0,r.MT)(t),o=(0,r.MT)("1").on(i.map(String),(function(e,n){return n})),u=o.map(Number);(0,a.tJ)({store:o,key:"page"});var s=u.map((function(e){return e-1}));return{paginationChanged:i,$pageSize:c,$pageNumber:u,$pageIndex:s}}t(7405)},3411:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(7378),a=t(9635),i=t(6763),c=t(1549),o=t(9041),u=t(6925),s=t(6942),l=t(3300),f=(0,c.GW)((function(e){var n=e.username,t=e.pageIndex,r=e.pageSize;return s.U2("articles?author=".concat(encodeURIComponent(n),"&").concat((0,l.b)(r,t))).then((function(e){return e.data}))})),d=i.o4.createFeed({effect:f}),p=d.favoriteArticleToggled,g=(d.$feed,d.$isEmptyFeed),h=d.$articles,v=d.$totalPages,m=(0,u.F)({pageSize:10}),j=m.paginationChanged,x=m.$pageSize,b=m.$pageIndex,y=m.$pageNumber,C=function(){return(0,o.oR)(f.pending)},O=function(){return(0,o.oR)(g)},w=function(){return(0,o.oR)(v)},N=function(){return(0,o.oR)(x)},P=function(){return(0,o.oR)(y)},$=function(){return(0,o.oR)(b)},k=t(4246),S=function(){var e=(0,a.UO)().username,n=C(),t=O(),c=N(),o=$(),u=P(),s=w(),l=(0,r.useCallback)((function(){f({username:e,pageIndex:o,pageSize:c})}),[e,o,c]);return(0,r.useEffect)((function(){l()}),[l]),(0,k.jsx)(i.fR,{articles:h,isEmpty:t,loading:n,pageNumber:u,pageSize:c,totalPages:s,onArticleClick:p,onPageChange:function(e){j(e),l()}})}},3300:function(e,n,t){t.d(n,{b:function(){return r}});var r=function(e,n){return"limit=".concat(e,"&offset=").concat(n*e)}}}]);