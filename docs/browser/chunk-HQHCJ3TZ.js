import{$ as q,A as N,Ia as U,da as V,ea as $,fa as A,ga as D,h as F,ha as z,i as d,wa as R,x as j,y as O,z as B}from"./chunk-ZU2ZXMGP.js";import{$a as M,Ab as k,Bb as E,Cb as i,Db as r,Eb as l,Ib as T,Lb as C,Nb as g,Sc as L,Tc as P,Wa as I,Wb as a,Yb as p,_a as c,ca as u,ec as v,gc as h,ma as b,na as f,rb as S,tb as x,va as _,wa as y,yb as w}from"./chunk-RJHPHPNE.js";var K=(e,t)=>t.product.id;function Q(e,t){if(e&1&&(i(0,"span",18),a(1),v(2,"number"),r()),e&2){let m=g().$implicit;c(),p(" (\u20B9 ",h(2,1,m.product.price,"1.2-2"),") ")}}function W(e,t){if(e&1){let m=T();i(0,"mat-list-item"),l(1,"img",15),i(2,"p",16),a(3),r(),i(4,"p",17),a(5),v(6,"number"),S(7,Q,3,4,"span",18),r(),i(8,"div",19)(9,"button",20),C("click",function(){let n=_(m).$implicit,s=g();return y(s.removeFromCart(n.product))}),l(10,"mat-icon",21),r(),i(11,"span",22),a(12),r(),i(13,"button",23),C("click",function(){let n=_(m).$implicit,s=g();return y(s.addToCart(n.product))}),l(14,"mat-icon",24),r()()()}if(e&2){let m=t.$implicit;c(),x("src",m.product.imageUrl,I),c(2),p(" ",m.product.name," "),c(2),p(" \xA0\u20B9 ",h(6,5,m.product.price*m.quantity,"1.2-2")," "),c(2),w(7,m.quantity>1?7:-1),c(5),p(" ",m.quantity," ")}}function X(e,t){e&1&&(i(0,"mat-list-item")(1,"p",25),l(2,"mat-icon",26),a(3," No products in the cart "),r()())}var H=(()=>{let t=class t{constructor(o){this.cartService=o}ngOnInit(){this.getCart()}getCart(){this.cart=this.cartService.getCart(),this.calculateTotal()}clearCart(){this.cartService.clearCart(),this.getCart()}calculateTotal(){this.total=this.cart.items.reduce((o,n)=>o+n.product.price*n.quantity,0)}removeFromCart(o){this.cartService.removeProduct(o),this.getCart()}addToCart(o){this.cartService.addProduct(o),this.getCart()}};t.\u0275fac=function(n){return new(n||t)(M(j))},t.\u0275cmp=b({type:t,selectors:[["app-cart"]],decls:27,vars:7,consts:[[1,"mt-3","mx-5"],[1,"cart"],[1,"flex-aligned","justify-between"],[1,"mb-3","flex-aligned"],["svgIcon","cart",1,"mr-2"],["mat-button","","color","primary","routerLink","/store"],["svgIcon","arrow-left"],[1,"flex-aligned","mt-2","justify-center"],["svgIcon","cash-multiple",1,"mr-1"],[1,"text-primary","ml-2"],[1,"flex-aligned","justify-center","mt-2"],["mat-raised-button","","color","accent",1,"mx-2",3,"click","disabled"],["svgIcon","cart-remove"],["mat-raised-button","","color","primary","routerLink","/payment",1,"mx-2",3,"disabled"],["svgIcon","cart-arrow-right"],["matListItemAvatar","","alt","image",3,"src"],["matListItemTitle","",1,"item-name"],["matListItemLine","",1,"mt-1","text-primary","item-price"],[1,"text-muted"],[1,"item-actions"],["mat-icon-button","","color","warn",3,"click"],["svgIcon","minus"],[1,"mx-2","text-primary"],["mat-icon-button","","color","primary",3,"click"],["svgIcon","plus"],["matLine","",1,"flex-aligned","justify-center","text-muted"],["svgIcon","cart-off",1,"mr-2"]],template:function(n,s){n&1&&(l(0,"app-navbar"),i(1,"main",0)(2,"div",1)(3,"div",2)(4,"h1",3),l(5,"mat-icon",4),a(6," Cart "),r(),i(7,"button",5),l(8,"mat-icon",6),a(9," Go to Store "),r()(),i(10,"mat-list"),k(11,W,15,8,"mat-list-item",null,K,!1,X,4,0,"mat-list-item"),r(),i(14,"h2",7),l(15,"mat-icon",8),a(16," Total "),i(17,"span",9),a(18),v(19,"number"),r()(),i(20,"div",10)(21,"button",11),C("click",function(){return s.clearCart()}),l(22,"mat-icon",12),a(23," Empty Cart "),r(),i(24,"button",13),l(25,"mat-icon",14),a(26," Checkout "),r()()()()),n&2&&(c(11),E(s.cart.items),c(7),p(" \u20B9 ",h(19,4,s.total,"1.2-2")," "),c(3),x("disabled",!s.cart.items.length),c(3),x("disabled",!s.cart.items.length))},dependencies:[F,O,B,N,D,z,A,$,V,q,L],styles:["main[_ngcontent-%COMP%]{display:grid;place-items:center}main[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]{width:100%;max-width:800px}.cart[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:25px;padding:12px;box-shadow:0 0 12px #0003}.quantity[_ngcontent-%COMP%]{font-size:1.05rem}.item-actions[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;right:0;top:12px}.item-name[_ngcontent-%COMP%], .item-price[_ngcontent-%COMP%]{width:220px}"]});let e=t;return e})();var Y=[{path:"",component:H}],J=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({imports:[d.forChild(Y),d]});let e=t;return e})();var vt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({imports:[P,J,R,U,d]});let e=t;return e})();export{vt as CartModule};