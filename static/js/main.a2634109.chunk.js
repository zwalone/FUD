(this.webpackJsonpfud=this.webpackJsonpfud||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var i,a=n(0),c=n.n(a),r=n(16),o=n.n(r),s=(n(88),n(89),n(19)),l=n(8),d=n(59),u=n.n(d),h=n(67),j=n(78),b=n(18),f=n(5),g=n(130),p=n(145),m=n(131),v=n(132),O=n(134),x=n(62),w=n.n(x),k=n(53),N=n.n(k),y=n(74),B=n.n(y),S=n(133),C=n(75),I=n.n(C),F=n(54),L=n.n(F),R=n(135),A=n(77),D=n(68),E=n(69),T=n(146),W=n(2),z=Object(E.a)(T.a)(i||(i=Object(D.a)(["\n            color: #6200EE !important;\n            backgroundColor: #6200EE !important;\n"])));function U(e){var t=e.checkable,n=e.ingredient,i=e.setChecked,a=H();return Object(W.jsxs)("div",{className:a.root,children:[t&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(z,{checked:n.checked,onChange:function(){i()},className:a.checkBox}),Object(W.jsx)("div",{className:a.nameCheckable,children:n.name})]}),!t&&Object(W.jsx)("div",{className:a.name,children:n.name})]})}var H=Object(g.a)({root:{display:"flex",flexDirection:"row"},checkBox:{paddingRight:"0.5em"},nameCheckable:{display:"flex",alignItems:"center",textAlign:"left",fontSize:"1em"},name:{display:"flex",alignItems:"center",textAlign:"left",fontSize:"1em",paddingLeft:"1em",paddingTop:"0.5em",paddingBottom:"0.5em"}});function $(e){var t=e.ingredients,n=e.setIngredients,i=e.checkable;return i||"string"!==typeof t[0]||(t=t.map((function(e){return{name:e,checked:!1}}))),Object(W.jsx)("div",{style:{width:"100%"},children:t.map((function(e,a){return Object(W.jsx)(U,{setChecked:function(){!function(e){t[e].checked=!t[e].checked,n(Object(A.a)(t))}(a)},checkable:i,ingredient:e},a)}))})}var q=window.localStorage;function J(e){var t=q.getItem(e);if(null===t)return null;try{return JSON.parse(t)}catch(n){return t}}function M(e,t){var n=t;"string"!==typeof t&&(n=JSON.stringify(t)),q.setItem(e,n)}var P=function(){return J("favourites")},_=function(e){var t=P();return t&&t[e]?t[e]:null},K=_,X=function(e){var t=P()||{};e.ingredients=e.ingredients.map((function(e){return"string"==typeof e?{name:e,checked:!1}:e})),t[e.uri]=e,M("favourites",t)},G=function(e){var t=P();"string"===typeof e?delete t[e]:delete t[e.uri],M("favourites",t)},Q=function(e){return!!e&&!!_(e)},V=function(e){var t=[];for(var n in e)t.push({label:e[n].label,quantity:Math.round(1e3*e[n].quantity)/1e3,unit:e[n].unit});return t},Y="86ce1907",Z="af51ddd726c7b958de428aea412cd744",ee=function(e,t,n){return fetch("https://api.edamam.com/search?app_id=".concat(Y)+"&app_key=".concat(Z,"&q=").concat(e,"&from=").concat(t,"&to=").concat(n)).then((function(e){return e.json()})).then((function(e){return 0===(t=e.hits).length?"No results":t.map((function(e){return{uri:e.recipe.uri,label:e.recipe.label,image:e.recipe.image,calories:Math.round(e.recipe.calories)+" kcal",url:e.recipe.url,servings:e.recipe.yield+" servings",ingredients:e.recipe.ingredientLines,nutrients:V(e.recipe.totalNutrients)}}));var t})).catch((function(e){return console.log(e)}))},te=function(e){return fetch("https://api.edamam.com/search?app_id=".concat(Y)+"&app_key=".concat(Z,"&r=").concat(e)).then((function(e){return e.json()})).then((function(e){return 0===(t=e).length?"No results":t.map((function(e){return{uri:e.uri,label:e.label,image:e.image,calories:Math.round(e.calories)+" kcal",url:e.url,servings:e.yield+" servings",ingredients:e.ingredientLines,nutrients:V(e.totalNutrients)}}))[0];var t})).catch((function(e){return console.log(e)}))},ne=Object(f.a)({root:{"&:before":{backgroundColor:"white"},"&$expanded":{margin:0}},expanded:{}})(p.a),ie=Object(f.a)({root:{minHeight:0,"&$expanded":{minHeight:0}},content:{margin:0,"&$expanded":{margin:0}},expanded:{}})(m.a),ae=Object(f.a)({root:{paddingRight:"1em",paddingLeft:"1em",paddingTop:0,paddingBottom:0}})(v.a);function ce(){var e,t=Object(l.f)(),n=re(),i=Object(a.useState)(Q(t.location.state.recipe.uri)),c=Object(b.a)(i,2),r=c[0],o=c[1],s=Object(a.useState)(K(t.location.state.recipe.uri)||t.location.state.recipe),d=Object(b.a)(s,2),f=d[0],g=d[1],p=Object(a.useCallback)((function(e){var t,n="http://www.edamam.com/ontologies/edamam.owl#"+e;Q(n)&&!(null===f||void 0===f||null===(t=f.ingredients[0])||void 0===t?void 0:t.name)?g(K(n)):f||Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(n).then((function(e){g(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}),[f]);Object(a.useEffect)((function(){var e=window.location.href.search("recipeDetails")+"recipeDetails".length+1,t=window.location.href.slice(e);p(t)}),[f,p]);return null===f||void 0===f?Object(W.jsx)(W.Fragment,{}):Object(W.jsxs)("div",{className:n.container,children:[Object(W.jsxs)("div",{className:n.imageBox,children:[Object(W.jsxs)("div",{className:n.icons,children:[Object(W.jsx)(S.a,{onClick:function(){t.goBack()},className:n.IconLeft,children:Object(W.jsx)(N.a,{})}),Object(W.jsx)(S.a,{href:"".concat(null===f||void 0===f?void 0:f.url),className:n.IconRight,children:Object(W.jsx)(B.a,{})})]}),Object(W.jsx)("img",{className:n.image,src:null===f||void 0===f?void 0:f.image,alt:"recipe"})]}),Object(W.jsxs)("div",{className:n.safeArea,children:[Object(W.jsx)(O.a,{className:n.title,children:null===f||void 0===f?void 0:f.label}),Object(W.jsxs)("div",{className:n.details,children:[Object(W.jsx)(O.a,{className:n.detailsLeft,children:null===f||void 0===f?void 0:f.calories}),Object(W.jsx)(O.a,{className:n.detailsRight,children:null===f||void 0===f?void 0:f.servings})]})]}),Object(W.jsxs)(ne,{elevation:0,children:[Object(W.jsx)(ie,{expandIcon:Object(W.jsx)(w.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(W.jsx)(O.a,{variant:"h6",children:"Ingredients"})}),Object(W.jsx)(ae,{children:f.ingredients&&Object(W.jsx)($,{checkable:r,ingredients:f.ingredients,setIngredients:function(e){!function(e){var t=Object(j.a)({},f);t.ingredients=e,X(t),g(t)}(e)}})})]}),Object(W.jsxs)(ne,{elevation:0,children:[Object(W.jsx)(ie,{expandIcon:Object(W.jsx)(w.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(W.jsx)(O.a,{variant:"h6",children:"Nutrients Info"})}),Object(W.jsx)("div",{className:n.safeArea,children:null===f||void 0===f||null===(e=f.nutrients)||void 0===e?void 0:e.map((function(e,t){return Object(W.jsx)(ae,{className:n.accordionDetails,children:Object(W.jsxs)("div",{className:n.nutrition,children:[Object(W.jsx)(O.a,{className:n.detailsLeft,children:e.label}),Object(W.jsxs)(O.a,{className:n.detailsRight,children:[e.quantity," ",e.unit]})]})},t)}))})]}),Object(W.jsx)(R.a,{onClick:function(){r?(o(!1),G(f)):(o(!0),X(f),g(K(f.uri)))},className:n.floatingButton,color:"secondary",children:r?Object(W.jsx)(I.a,{}):Object(W.jsx)(L.a,{})})]})}var re=Object(g.a)({container:{marginBottom:50,overflowX:"hidden"},imageBox:{position:"relative",height:192,overflow:"hidden"},image:{width:"100%",position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",zIndex:-1},icons:{width:"100%",justifyContent:"space-between"},IconLeft:{position:"absolute",top:8,left:0,color:"white"},IconRight:{position:"absolute",top:8,right:0,color:"white"},title:{fontSize:"1.75em",textAlign:"start",fontWeight:"bold",lineHeight:"1.0em",paddingTop:"0.5em"},safeArea:{paddingLeft:"1em",paddingRight:"1em",display:"flex",flexDirection:"column"},details:{paddingTop:"0.5em",paddingBottom:"0.5em",width:"100%",justifyContent:"space-between"},nutrition:{width:"100%",justifyContent:"space-between"},detailsLeft:{float:"left",display:"inline",width:"50%",textAlign:"start",fontSize:"1em"},detailsRight:{float:"right",display:"inline",width:"50%",textAlign:"end",fontSize:"1em"},description:{fontSize:"1em",textAlign:"start"},floatingButton:{position:"fixed",bottom:16,right:16}}),oe=n(136),se=n(137),le=n(42),de=n.n(le);function ue(e){var t=e.pathname,n=he(),i=t;return""!==t&&"FUD"!==t||(i="search"),Object(W.jsxs)(oe.a,{value:i,className:n.root,children:[Object(W.jsx)(se.a,{component:s.b,to:"/search",label:"Search",value:"search",icon:Object(W.jsx)(de.a,{}),classes:{label:n.label,root:n.button,selected:n.selected}}),Object(W.jsx)(se.a,{component:s.b,to:"/favorites",label:"Favorites",value:"favorites",icon:Object(W.jsx)(L.a,{}),classes:{label:n.label,root:n.button,selected:n.selected}})]})}var he=Object(g.a)({root:{position:"sticky",bottom:0,width:"100%",backgroundColor:"#6200EE"},button:{width:"50%",maxWidth:"none","&$selected":{color:"white"}},label:{color:"white"},selected:{}}),je=n(144),be=n(138),fe=n(139),ge=n(141),pe=n(140);function me(e){var t=e.title,n=e.subTitle,i=e.image,a=e.onClick,c=ve();return Object(W.jsx)(be.a,{className:c.root,onClick:function(){a()},children:Object(W.jsxs)(fe.a,{children:[Object(W.jsx)(pe.a,{className:c.media,image:i,title:t}),Object(W.jsxs)(ge.a,{children:[Object(W.jsx)(O.a,{variant:"h6",align:"left",noWrap:!0,children:t}),Object(W.jsx)(O.a,{variant:"body2",align:"left",children:n})]})]})})}var ve=Object(g.a)({root:{maxWidth:345,height:"fit-content"},media:{height:194}}),Oe=n(142),xe=n(143),we=n(104),ke=n(147),Ne=n(76),ye=n.n(Ne);function Be(e){var t=e.onSearch,n=e.canSearch,i=Se(),c=Object(a.useState)(!1),r=Object(b.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)(!1),d=Object(b.a)(l,2),u=d[0],h=d[1],j=Object(a.useRef)("");return Object(W.jsx)("div",{className:i.root,children:Object(W.jsx)(Oe.a,{position:"static",className:i.appBar,children:o?Object(W.jsxs)(xe.a,{children:[Object(W.jsx)(we.a,{className:i.backButton,onClick:function(){s(!1),h(!1)},children:Object(W.jsx)(ye.a,{})}),Object(W.jsxs)("div",{className:i.searchBar,children:[Object(W.jsx)(we.a,{className:i.searchBarButton,onClick:function(){return t(j.current.value)},children:Object(W.jsx)(de.a,{})}),Object(W.jsx)(ke.a,{placeholder:"Search for recipe",inputRef:j,onChange:function(e){return h(e.target.value.length>0)},className:i.searchBarInput,onKeyDown:function(e){13===e.keyCode&&(e.target.blur(),t(j.current.value))}}),u?Object(W.jsx)(we.a,{className:i.searchBarButton,onClick:function(){j.current.value="",h(!1)},children:Object(W.jsx)(N.a,{})}):Object(W.jsx)(W.Fragment,{})]})]}):Object(W.jsxs)(xe.a,{children:[" ",Object(W.jsx)(O.a,{className:i.title,children:"Recipes"}),n&&Object(W.jsx)(we.a,{className:i.searchButton,onClick:function(){s(!0)},children:Object(W.jsx)(de.a,{})})]})})})}var Se=Object(g.a)({root:{position:"sticky",top:0,zIndex:9999},appBar:{backgroundColor:"#6200EE"},title:{width:"100%",textAlign:"left",color:"rgba(255, 255, 255, 0.75)",fontSize:"1.25em",userSelect:"none"},searchButton:{padding:0,color:"rgba(255, 255, 255, 0.75)"},backButton:{paddingLeft:0,color:"rgba(255, 255, 255, 0.75)"},searchBar:{borderRadius:4,backgroundColor:"rgba(255, 255, 255, 0.75)",width:"100%",display:"flex"},searchBarButton:{paddingTop:0,paddingBottom:0,paddingLeft:"1%",paddingRight:"1%",color:"rgba(0, 0, 0, 0.75)"},searchBarInput:{width:"100%",fontSize:"1.25em",lineHeight:"1.5em"}});function Ce(){var e=Ie(),t=J("favourites"),n=Object(l.f)();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(Be,{canSearch:!1}),Object(W.jsx)("div",{className:e.root,children:Object(W.jsx)(je.a,{container:!0,spacing:1,justify:"center",children:function(){if(null===t)return[];var e=[],i=function(i){var a=t[i];e.push(Object(W.jsx)(je.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(W.jsx)(me,{title:a.label,subTitle:a.calories,image:a.image,onClick:function(){return function(e){var t=e.uri.split("#").pop();n.push({pathname:"/recipeDetails/"+t,state:{recipe:e}})}(a)}},a.url)},a.url))};for(var a in t)i(a);return e}()})})]})}var Ie=Object(g.a)({root:{margin:8,minHeight:"100vh"}});function Fe(e){return window.location.pathname.split("/")[e]}var Le=[];function Re(){var e=Ae(),t=Object(l.f)(),n=Object(a.useState)(Le),i=Object(b.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(Fe(3)),s=Object(b.a)(o,2),d=s[0],u=s[1],h=function(){var e=d;void 0!==e&&null!==e&&0!==e.length||(e="shrimp"),ee(e,0,50).then((function(e){void 0===e?console.log("Failed to fetch (wrong keys?)"):(r(e),Le=e)}))};Object(a.useEffect)((function(){0===c.length&&h()}),[]);var j=Object(a.useRef)(!1);Object(a.useEffect)((function(){!0===j.current?h():j.current=!0}),[d]);return Object(W.jsxs)(a.Fragment,{children:[Object(W.jsx)(Be,{canSearch:!0,onSearch:function(e){return function(e){t.replace({pathname:"/search/"+e}),u(e)}(e)}}),Object(W.jsx)("div",{className:e.root,children:Object(W.jsx)(je.a,{container:!0,spacing:1,justify:"center",children:c.map((function(e){return Object(W.jsx)(je.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(W.jsx)(me,{title:e.label,subTitle:e.calories,image:e.image,onClick:function(){return function(e){var n=e.uri.split("#").pop();t.push({pathname:"/recipeDetails/"+n,state:{recipe:e}})}(e)}},e.url)},e.url)}))})})]})}var Ae=Object(g.a)({root:{margin:8,minHeight:"100vh"}});function De(){var e=Fe(2);return Object(W.jsxs)(a.Fragment,{children:["favorites"===e?Object(W.jsx)(Ce,{}):Object(W.jsx)(Re,{}),Object(W.jsx)(ue,{pathname:e})]})}function Ee(){return Object(W.jsx)(s.a,{basename:"/FUD",children:Object(W.jsx)("div",{className:"App",children:Object(W.jsxs)(l.c,{children:[Object(W.jsx)(l.a,{path:"/recipeDetails",component:ce}),Object(W.jsx)(l.a,{path:"/",component:De})]})})})}var Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function We(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};o.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(Ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/FUD",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/FUD","/service-worker.js");Te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):We(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):We(t,e)}))}}(),ze()},88:function(e,t,n){},89:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.a2634109.chunk.js.map