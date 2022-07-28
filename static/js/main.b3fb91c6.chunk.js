(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__2xSkK",overlayVisible:"Drawer_overlayVisible__f49qa",drawer:"Drawer_drawer__3kHcM",items:"Drawer_items__Pa7ly"}},20:function(e,t,c){e.exports={card:"Card_card__CzRzD",plus:"Card_plus__e2v-9",favorite:"Card_favorite__1VVSS"}},40:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(33),s=c.n(n),i=c(14),o=(c(40),c(41),c(11)),l=c(12),d=c(8),u=c(13),j=c(2),b=c(5),m=c.n(b),h=c(3),x=a.a.createContext({}),f=function(){var e=a.a.useContext(x),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return parseInt(t.price.replace(/\s/g,""))+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},p=c(1),O=function(e){var t=f().totalPrice,c=Object(r.useState)(4e3),n=Object(j.a)(c,2),s=n[0],o=n[1];return a.a.useEffect((function(){o(document.querySelector("html").clientWidth)}),[]),Object(p.jsxs)("header",{className:s>640?"d-flex justify-between align-center p-40":"d-flex flex-column pl-40 pt-30 pb-30",children:[Object(p.jsx)(i.b,{to:"/react-shop/",children:Object(p.jsxs)("div",{className:s>640?"d-flex align-center":"d-flex align-center mb-20",children:[Object(p.jsx)("img",{width:40,height:40,src:"img/logo.svg",alt:"logo"}),Object(p.jsxs)("div",{className:"headerInfo",children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Shop"}),Object(p.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043d\u0430 React"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(p.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(p.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(p.jsx)("li",{className:"mr-20 cu-p",children:Object(p.jsx)(i.b,{to:"/react-shop/favorites",children:Object(p.jsx)("img",{width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/react-shop/orders",children:Object(p.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"\u0417\u0430\u043a\u0430\u0437\u044b"})})})]})]})},v=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(x).setCartOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(p.jsx)("img",{className:"mb-20",width:120,src:c,alt:"Empty Cart"}),Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{className:"opacity-6",children:r}),Object(p.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},g=c(19),y=c.n(g),N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var w=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=f(),o=i.cartItems,l=i.setCartItems,b=i.totalPrice,h=a.a.useState(null),x=Object(j.a)(h,2),O=x[0],g=x[1],w=a.a.useState(!1),k=Object(j.a)(w,2),C=k[0],S=k[1],I=a.a.useState(!1),_=Object(j.a)(I,2),A=_[0],q=_[1],T=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,c,r,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),e.next=4,m.a.post("https://62e2ce15b54fc209b880c2ac.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,g(c.id),S(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,m.a.delete("https://62e2ce15b54fc209b880c2ac.mockapi.io/cart/"+a.id);case 14:return e.next=16,N(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:q(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();function F(){var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=document.createElement("div");e.appendChild(t);var c=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),Math.floor(c/2)}return s?(document.querySelector("html").style.overflowY="hidden",document.querySelector("html").style.transform="translateX(-".concat(F(),"px)"),document.querySelector("html").style.height="".concat(document.querySelector("html").clientHeight,"px")):(document.querySelector("html").style.overflowY="",document.querySelector("html").style.transform="",document.querySelector("html").style.height=""),Object(p.jsx)("div",{className:"".concat(y.a.overlay," ").concat(s?y.a.overlayVisible:""),style:{transform:"translateX(".concat(F(),"px)")},children:Object(p.jsxs)("div",{className:y.a.drawer,children:[Object(p.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(p.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(p.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(p.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(p.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[b," \u0440\u0443\u0431. "]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[(.05*b).toFixed(2)," \u0440\u0443\u0431. "]})]})]}),Object(p.jsxs)("button",{disabled:A,onClick:T,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(p.jsx)(v,{title:C?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:C?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(O," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:C?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},k=c(35),C=c(20),S=c.n(C);var I=function(e){var t=e.id,c=e.title,r=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorites,l=void 0!==o&&o,d=e.loading,u=void 0!==d&&d,b=a.a.useContext(x).isItemAdded,m={id:t,parentId:t,title:c,imageUrl:r,price:n},h=a.a.useState(l),f=Object(j.a)(h,2),O=f[0],v=f[1];return Object(p.jsx)("div",{className:S.a.card,children:u?Object(p.jsxs)(k.a,{speed:2,width:155,height:250,viewBox:"0 0 155 255",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"155"}),Object(p.jsx)("rect",{x:"0",y:"165",rx:"5",ry:"5",width:"150",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"190",rx:"5",ry:"5",width:"100",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"230",rx:"5",ry:"5",width:"80",height:"25"}),Object(p.jsx)("rect",{x:"118",y:"223",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[s&&Object(p.jsx)("div",{className:S.a.favorite,onClick:function(){s(m),v(!O)},children:Object(p.jsx)("img",{src:O||l?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(p.jsx)("img",{width:"100%",src:r,alt:"Sneakers"}),Object(p.jsx)("h5",{children:c}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(p.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(p.jsx)("img",{className:S.a.plus,onClick:function(){i(m)},src:b(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"plus"})]})]})})},_=function(e){var t=e.items,c=e.searchValue,n=e.setSearchValue,s=e.onChangeSearchInput,i=e.onAddToFavorite,d=e.onAddToCart,u=e.isLoading,b=e.favorites,m=Object(r.useState)(4e3),h=Object(j.a)(m,2),x=h[0],f=h[1];a.a.useEffect((function(){f(document.querySelector("html").clientWidth)}),[]);return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:x>768?"d-flex align-center justify-between mb-40":"d-flex flex-column mb-40",children:[Object(p.jsx)("h1",{className:x>768?"":"mb-20",children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(p.jsx)("img",{onClick:function(){return n("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(p.jsx)("input",{onChange:s,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(u?Object(l.a)(Array(8)):e).map((function(e,t){return Object(p.jsx)(I,Object(o.a)({onFavorite:function(e){return i(e)},onPlus:function(e){return d(e)},loading:u,favorites:b.filter((function(t){return t.parentId===e.id})).length>0},e),t)}))}()})]})},A=function(){var e=a.a.useContext(x),t=e.favorites,c=e.onAddToFavorite;return console.log(t),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(p.jsx)(I,Object(o.a)({favorites:!0,onFavorite:c},e),t)}))})]})},q=function(){var e=a.a.useContext(x),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),c=Object(j.a)(t,2),r=c[0],n=c[1],s=a.a.useState(!0),i=Object(j.a)(s,2),b=i[0],h=i[1];return a.a.useEffect((function(){Object(u.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://62e2ce15b54fc209b880c2ac.mockapi.io/orders");case 3:t=e.sent,c=t.data,n(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),h(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:(b?Object(l.a)(Array(8)):r).map((function(e,t){return Object(p.jsx)(I,Object(o.a)({loading:b},e),t)}))})]})};var T=function(){var e=a.a.useState([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=a.a.useState([]),i=Object(j.a)(s,2),b=i[0],f=i[1],v=a.a.useState([]),g=Object(j.a)(v,2),y=g[0],N=g[1],k=a.a.useState(""),C=Object(j.a)(k,2),S=C[0],I=C[1],T=a.a.useState(!1),F=Object(j.a)(T,2),E=F[0],P=F[1],V=a.a.useState(!0),B=Object(j.a)(V,2),R=B[0],D=B[1],W=Object(r.useState)(4e3),L=Object(j.a)(W,2),U=L[0],M=L[1];a.a.useEffect((function(){M(document.querySelector("html").clientWidth),Object(u.a)(Object(d.a)().mark((function e(){var t,c,r,a,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(!0),e.next=4,Promise.all([m.a.get("https://62e2ce15b54fc209b880c2ac.mockapi.io/cart"),m.a.get("https://62e2ce15b54fc209b880c2ac.mockapi.io/favorites"),m.a.get("https://62e2ce15b54fc209b880c2ac.mockapi.io/items")]);case 4:t=e.sent,c=Object(j.a)(t,3),r=c[0],a=c[1],s=c[2],D(!1),f(r.data),N(a.data),n(s.data),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ;("),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[]);var z=function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var c,r,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=b.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return f((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,m.a.delete("https://62e2ce15b54fc209b880c2ac.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return f((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,m.a.post("https://62e2ce15b54fc209b880c2ac.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,f((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var c,r;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!y.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://62e2ce15b54fc209b880c2ac.mockapi.io/favorites/".concat(t.id)),N((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://62e2ce15b54fc209b880c2ac.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,N((function(e){return[].concat(Object(l.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(x.Provider,{value:{items:c,cartItems:b,favorites:y,isItemAdded:function(e){return b.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:H,onAddToCart:z,setCartOpened:P,setCartItems:f},children:Object(p.jsxs)("div",{className:U>768?"wrapper clear":"wrapper clear ml-15 mr-15",children:[Object(p.jsx)(w,{items:b,onClose:function(){return P(!1)},onRemove:function(e){try{m.a.delete("https://62e2ce15b54fc209b880c2ac.mockapi.io/cart/".concat(e)),f((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:E}),Object(p.jsx)(O,{onClickCart:function(){return P(!0)}}),Object(p.jsx)(h.a,{path:"/react-shop/",exact:!0,children:Object(p.jsx)(_,{items:c,cartItems:b,searchValue:S,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorite:H,onAddToCart:z,isLoading:R,favorites:y})}),Object(p.jsx)(h.a,{path:"/react-shop/favorites",exact:!0,children:Object(p.jsx)(A,{})}),Object(p.jsx)(h.a,{path:"/react-shop/orders",exact:!0,children:Object(p.jsx)(q,{})})]})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(T,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.b3fb91c6.chunk.js.map