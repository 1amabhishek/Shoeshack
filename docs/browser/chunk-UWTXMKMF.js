import{a as S}from"./chunk-ZQRFGBOX.js";import{a as y}from"./chunk-OXE7SYZI.js";import{$ as Be,A as h,Aa as fe,B as J,Ba as ge,C as K,D as C,E as W,Ea as Ce,F as X,G as ee,H as E,Ia as Le,J as te,K as re,L as ie,N as Ue,O as ae,P as je,Q as ne,T as Ve,V as oe,W as me,X as le,Y as de,Z as ce,_ as pe,ba as qe,i as De,p as Ae,r as N,s as Z,t as Fe,u as A,v as F,w as U,wa as Ye,xa as se,y as I,ya as ue,z as D}from"./chunk-ZU2ZXMGP.js";import{$a as u,Ab as we,Bb as ke,Cb as n,Db as a,Ea as ve,Eb as l,Ib as w,Lb as s,N as R,Nb as v,Pc as x,Sb as be,Tb as xe,Tc as Ne,Ub as Ie,Wa as b,Wb as m,Yb as k,_a as d,ba as Me,ca as z,ec as $,fc as H,ga as Pe,ma as _,na as Q,rb as g,tb as c,ub as Te,va as M,wa as P}from"./chunk-RJHPHPNE.js";function et(e,t){e&1&&(n(0,"mat-error",19),m(1," Cardholder name is required "),a())}function tt(e,t){e&1&&(n(0,"mat-error",19),m(1," Cardholder name must be at least 3 characters "),a())}function rt(e,t){e&1&&(n(0,"mat-error",19),m(1," Cardholder name must be maximum 100 characters "),a())}function it(e,t){e&1&&(n(0,"mat-error",19),m(1," Cardholder name can only contain letters and spaces "),a())}function at(e,t){e&1&&(n(0,"mat-error",19),m(1," Card number is required "),a())}function nt(e,t){e&1&&(n(0,"mat-error",19),m(1," Invalid card number "),a())}function ot(e,t){e&1&&(n(0,"mat-error",19),m(1," Expiration date is required "),a())}function mt(e,t){e&1&&(n(0,"mat-error",19),m(1," Expiration date must be in MM/YYYY format "),a())}function lt(e,t){e&1&&(n(0,"mat-error",19),m(1," This card has already expired "),a())}var Oe=(()=>{let t=class t{constructor(o,i){this.dialogRef=o,this.cardsService=i,this.form=new ee({cardholder:new E("",[C.required,C.minLength(3),C.maxLength(100),S.onlyLettersAndSpaces()]),number:new E("",[C.required,S.cardNumber()]),expiration:new E("",[C.required,S.cardExpiration()])}),this.cardImageUrl=""}closeDialog(){this.resetForm(),this.dialogRef.close()}addCard(){this.form.markAllAsTouched(),!this.form.invalid&&(this.dialogRef.close(this.form.value),this.resetForm())}detectCardType(){let o=this.form.get("number")?.value;this.cardImageUrl=this.cardsService.getCardBrandByNumber(o).url}resetForm(){this.form.reset()}};t.\u0275fac=function(i){return new(i||t)(u(N),u(y))},t.\u0275cmp=_({type:t,selectors:[["app-create-payment-card-dialog"]],decls:40,vars:11,consts:[["mat-dialog-title","",1,"mat-dialog-title"],["svgIcon","credit-card",1,"mr-2"],[1,"flex-spacer"],["mat-icon-button","",3,"click"],["svgIcon","close"],[1,"py-2","form",3,"formGroup"],["appearance","outline","color","primary",1,"mat-form-field"],["matInput","","type","text","placeholder","Cardholder Name...","formControlName","cardholder"],["matPrefix","","svgIcon","account-credit-card"],["class","mat-error",4,"ngIf"],["matInput","","type","text","placeholder","Card Number...","formControlName","number","appCardNumber","",3,"input"],["matPrefix","","svgIcon","credit-card"],["matSuffix","","width","35px",1,"mr-2",3,"src"],["matInput","","type","text","placeholder","MM/YYYY...","formControlName","expiration","appCardExpiration",""],["matPrefix","","svgIcon","calendar-clock"],["align","end",1,"mat-dialog-actions"],["mat-button","","color","basic",3,"click"],["mat-flat-button","","color","primary",3,"click"],["svgIcon","plus-circle"],[1,"mat-error"]],template:function(i,r){if(i&1&&(n(0,"h2",0),l(1,"mat-icon",1),m(2," Create Card "),l(3,"div",2),n(4,"button",3),s("click",function(){return r.closeDialog()}),l(5,"mat-icon",4),a()(),n(6,"mat-dialog-content")(7,"form",5)(8,"mat-form-field",6)(9,"mat-label"),m(10,"Cardholder Name"),a(),l(11,"input",7)(12,"mat-icon",8),g(13,et,2,0,"mat-error",9)(14,tt,2,0,"mat-error",9)(15,rt,2,0,"mat-error",9)(16,it,2,0,"mat-error",9),a(),n(17,"mat-form-field",6)(18,"mat-label"),m(19,"Card Number"),a(),n(20,"input",10),s("input",function(){return r.detectCardType()}),a(),l(21,"mat-icon",11)(22,"img",12),g(23,at,2,0,"mat-error",9)(24,nt,2,0,"mat-error",9),a(),n(25,"mat-form-field",6)(26,"mat-label"),m(27,"Expiration Date"),a(),l(28,"input",13)(29,"mat-icon",14),g(30,ot,2,0,"mat-error",9)(31,mt,2,0,"mat-error",9)(32,lt,2,0,"mat-error",9),a()()(),n(33,"mat-dialog-actions",15)(34,"button",16),s("click",function(){return r.closeDialog()}),l(35,"mat-icon",4),m(36," Cancel "),a(),n(37,"button",17),s("click",function(){return r.addCard()}),l(38,"mat-icon",18),m(39," Create "),a()()),i&2){let p,j,V,B,q,Y,L,O,G;d(7),c("formGroup",r.form),d(6),c("ngIf",(p=r.form.get("cardholder"))==null?null:p.hasError("required")),d(),c("ngIf",(j=r.form.get("cardholder"))==null?null:j.hasError("minlength")),d(),c("ngIf",(V=r.form.get("cardholder"))==null?null:V.hasError("maxlength")),d(),c("ngIf",(B=r.form.get("cardholder"))==null?null:B.hasError("onlyLettersAndSpaces")),d(6),c("src",r.cardImageUrl,b),d(),c("ngIf",(q=r.form.get("number"))==null?null:q.hasError("required")),d(),c("ngIf",(Y=r.form.get("number"))==null?null:Y.hasError("cardNumber")),d(6),c("ngIf",(L=r.form.get("expiration"))==null?null:L.hasError("required")),d(),c("ngIf",(O=r.form.get("expiration"))==null?null:O.hasError("cardExpiration")),d(),c("ngIf",(G=r.form.get("expiration"))==null?null:G.hasError("cardAlreadyExpired"))}},dependencies:[x,se,ue,I,D,h,A,U,F,ce,oe,me,le,de,pe,te,K,W,X,re,ie]});let e=t;return e})();function dt(e,t){e&1&&(n(0,"mat-error",19),m(1," Cardholder name is required "),a())}function ct(e,t){e&1&&(n(0,"mat-error",19),m(1," Cardholder name must be at least 3 characters "),a())}function pt(e,t){e&1&&(n(0,"mat-error",19),m(1," The cardholder name must have a maximum of 100 characters "),a())}function st(e,t){e&1&&(n(0,"mat-error",19),m(1," The cardholder name can only contain letters and spaces "),a())}function ut(e,t){e&1&&(n(0,"mat-error",19),m(1," Card number is required "),a())}function ft(e,t){e&1&&(n(0,"mat-error",19),m(1," The card number is invalid "),a())}function gt(e,t){e&1&&(n(0,"mat-error",19),m(1," Expiration date is required "),a())}function Ct(e,t){e&1&&(n(0,"mat-error",19),m(1," The expiration date must be in the format MM/YYYY "),a())}function _t(e,t){e&1&&(n(0,"mat-error",19),m(1," This card has already expired "),a())}var Ge=(()=>{let t=class t{constructor(o,i,r){this.dialogRef=o,this.cardsService=i,this.card=r,this.form=new ee({cardholder:new E("",[C.required,C.minLength(3),C.maxLength(100),S.onlyLettersAndSpaces()]),number:new E("",[C.required,S.cardNumber()]),expiration:new E("",[C.required,S.cardExpiration()])}),this.cardImageUrl=""}ngOnInit(){this.form.patchValue({cardholder:this.card.cardholder,expiration:this.card.expiration})}closeDialog(){this.resetForm(),this.dialogRef.close()}updateCard(){this.form.markAllAsTouched(),!this.form.invalid&&(this.dialogRef.close(this.form.value),this.resetForm())}detectCardType(){let o=this.form.get("number")?.value;this.cardImageUrl=this.cardsService.getCardBrandByNumber(o).url}resetForm(){this.form.reset()}};t.\u0275fac=function(i){return new(i||t)(u(N),u(y),u(Z))},t.\u0275cmp=_({type:t,selectors:[["app-update-payment-card-dialog"]],decls:40,vars:11,consts:[["mat-dialog-title","",1,"mat-dialog-title"],["svgIcon","credit-card",1,"mr-2"],[1,"flex-spacer"],["mat-icon-button","",3,"click"],["svgIcon","close"],[1,"py-2","form",3,"formGroup"],["appearance","outline","color","primary",1,"mat-form-field"],["matInput","","type","text","placeholder","Nombre del tarjetahabiente...","formControlName","cardholder"],["matPrefix","","svgIcon","account-credit-card"],["class","mat-error",4,"ngIf"],["matInput","","type","text","placeholder","N\xFAmero de la tarjeta...","formControlName","number","appCardNumber","",3,"input"],["matPrefix","","svgIcon","credit-card"],["matSuffix","","width","35px",1,"mr-2",3,"src"],["matInput","","type","text","placeholder","MM/YYYY...","formControlName","expiration","appCardExpiration",""],["matPrefix","","svgIcon","calendar-clock"],["align","end",1,"mat-dialog-actions"],["mat-button","","color","basic",3,"click"],["mat-flat-button","","color","primary",3,"click"],["svgIcon","pencil"],[1,"mat-error"]],template:function(i,r){if(i&1&&(n(0,"h2",0),l(1,"mat-icon",1),m(2," Update card "),l(3,"div",2),n(4,"button",3),s("click",function(){return r.closeDialog()}),l(5,"mat-icon",4),a()(),n(6,"mat-dialog-content")(7,"form",5)(8,"mat-form-field",6)(9,"mat-label"),m(10," Cardholder name "),a(),l(11,"input",7)(12,"mat-icon",8),g(13,dt,2,0,"mat-error",9)(14,ct,2,0,"mat-error",9)(15,pt,2,0,"mat-error",9)(16,st,2,0,"mat-error",9),a(),n(17,"mat-form-field",6)(18,"mat-label"),m(19," Card number "),a(),n(20,"input",10),s("input",function(){return r.detectCardType()}),a(),l(21,"mat-icon",11)(22,"img",12),g(23,ut,2,0,"mat-error",9)(24,ft,2,0,"mat-error",9),a(),n(25,"mat-form-field",6)(26,"mat-label"),m(27," Expiration date "),a(),l(28,"input",13)(29,"mat-icon",14),g(30,gt,2,0,"mat-error",9)(31,Ct,2,0,"mat-error",9)(32,_t,2,0,"mat-error",9),a()()(),n(33,"mat-dialog-actions",15)(34,"button",16),s("click",function(){return r.closeDialog()}),l(35,"mat-icon",4),m(36," Cancel "),a(),n(37,"button",17),s("click",function(){return r.updateCard()}),l(38,"mat-icon",18),m(39," Update "),a()()),i&2){let p,j,V,B,q,Y,L,O,G;d(7),c("formGroup",r.form),d(6),c("ngIf",(p=r.form.get("cardholder"))==null?null:p.hasError("required")),d(),c("ngIf",(j=r.form.get("cardholder"))==null?null:j.hasError("minlength")),d(),c("ngIf",(V=r.form.get("cardholder"))==null?null:V.hasError("maxlength")),d(),c("ngIf",(B=r.form.get("cardholder"))==null?null:B.hasError("onlyLettersAndSpaces")),d(6),c("src",r.cardImageUrl,b),d(),c("ngIf",(q=r.form.get("number"))==null?null:q.hasError("required")),d(),c("ngIf",(Y=r.form.get("number"))==null?null:Y.hasError("cardNumber")),d(6),c("ngIf",(L=r.form.get("expiration"))==null?null:L.hasError("required")),d(),c("ngIf",(O=r.form.get("expiration"))==null?null:O.hasError("cardExpiration")),d(),c("ngIf",(G=r.form.get("expiration"))==null?null:G.hasError("cardAlreadyExpired"))}},dependencies:[x,se,ue,I,D,h,A,U,F,ce,oe,me,le,de,pe,te,K,W,X,re,ie]});let e=t;return e})();var Re=(()=>{let t=class t{constructor(o,i,r){this.dialogRef=o,this.cardsService=i,this.card=r}ngOnInit(){this.brand=this.cardsService.getCardBrandByNumber(this.card.number).brand,this.brandUrl=this.cardsService.getCardBrandByNumber(this.card.number).url}closeDialog(){this.dialogRef.close()}deleteCard(){this.dialogRef.close(this.card)}};t.\u0275fac=function(i){return new(i||t)(u(N),u(y),u(Z))},t.\u0275cmp=_({type:t,selectors:[["app-delete-payment-card-dialog"]],decls:23,vars:5,consts:[["mat-dialog-title","",1,"mat-dialog-title"],["svgIcon","credit-card",1,"mr-2"],[1,"flex-spacer"],["mat-icon-button","",3,"click"],["svgIcon","close"],[1,"text-center","pt-2"],["svgIcon","message-alert","color","warn",1,"icon-lg"],[1,"text-center"],[3,"src","alt"],["align","end",1,"mat-dialog-actions"],["mat-button","","color","basic",3,"click"],["mat-flat-button","","color","primary",3,"click"],["svgIcon","delete"]],template:function(i,r){i&1&&(n(0,"h2",0),l(1,"mat-icon",1),m(2," Delete card "),l(3,"div",2),n(4,"button",3),s("click",function(){return r.closeDialog()}),l(5,"mat-icon",4),a()(),n(6,"mat-dialog-content")(7,"p",5),l(8,"mat-icon",6),a(),n(9,"p",7),m(10,"Are you sure you want to delete the card?"),a(),n(11,"div",7),l(12,"img",8),a(),n(13,"p",7),m(14),$(15,"maskedCardNumber"),a()(),n(16,"mat-dialog-actions",9)(17,"button",10),s("click",function(){return r.closeDialog()}),l(18,"mat-icon",4),m(19," Cancel "),a(),n(20,"button",11),s("click",function(){return r.deleteCard()}),l(21,"mat-icon",12),m(22," Eliminate "),a()()),i&2&&(d(12),c("src",r.brandUrl,b)("alt",r.brand),d(2),k(" ",H(15,3,r.card.number)," "))},dependencies:[I,D,h,A,U,F,Ce],styles:["img[_ngcontent-%COMP%]{width:40px}"]});let e=t;return e})();var ze=(()=>{let t=class t{constructor(o){this.authService=o}mapGetAllPaymentCardsForUserToModel(o){return o.cards.map(i=>({id:i.id,cardholder:i.cardholder,expiration:i.expiration,number:i.number,user:this.authService.authUser()}))}};t.\u0275fac=function(i){return new(i||t)(Pe(Ae))},t.\u0275prov=Me({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function bt(e,t){e&1&&l(0,"div",8)}function xt(e,t){e&1&&l(0,"div",8)}function It(e,t){if(e&1){let f=w();n(0,"button",9),s("click",function(){M(f);let i=v();return P(i.updateCard())}),l(1,"mat-icon",10),a()}}function Dt(e,t){if(e&1){let f=w();n(0,"button",11),s("click",function(){M(f);let i=v();return P(i.deleteCard())}),l(1,"mat-icon",12),a()}}var Qe=(()=>{let t=class t{constructor(o){this.cardsService=o,this.delete=new ve,this.update=new ve}ngOnInit(){let o=this.cardsService.getCardBrandByNumber(this.card.number);this.brand=o.brand,this.brandUrl=o.url,this.brandBackground=o.backgroundColor}deleteCard(){this.delete.emit()}updateCard(){this.update.emit()}};t.\u0275fac=function(i){return new(i||t)(u(y))},t.\u0275cmp=_({type:t,selectors:[["app-payment-card"]],inputs:{card:"card",enableActions:"enableActions"},outputs:{delete:"delete",update:"update"},decls:18,vars:13,consts:[[1,"flex-aligned"],["svgIcon","credit-card",1,"mr-1"],["svgIcon","account",1,"mr-1"],["svgIcon","calendar",1,"mr-1"],["class","flex-spacer",4,"ngIf"],[1,"brand",3,"src","alt"],["mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],[1,"flex-spacer"],["mat-icon-button","","color","primary",3,"click"],["svgIcon","pencil"],["mat-icon-button","","color","warn",3,"click"],["svgIcon","delete"]],template:function(i,r){i&1&&(n(0,"mat-card")(1,"mat-card-content")(2,"p",0),l(3,"mat-icon",1),m(4),$(5,"maskedCardNumber"),a(),n(6,"p",0),l(7,"mat-icon",2),m(8),a(),n(9,"p",0),l(10,"mat-icon",3),m(11),a(),n(12,"div",0),g(13,bt,1,0,"div",4),l(14,"img",5),g(15,xt,1,0,"div",4)(16,It,2,0,"button",6)(17,Dt,2,0,"button",7),a()()()),i&2&&(Te("background-color",r.brandBackground),d(4),k(" ",H(5,11,r.card.number)," "),d(4),k(" ",r.card.cardholder," "),d(3),k(" ",r.card.expiration," "),d(2),c("ngIf",!r.enableActions),d(),c("src",r.brandUrl,b)("alt",r.brand),d(),c("ngIf",r.enableActions),d(),c("ngIf",r.enableActions),d(),c("ngIf",r.enableActions))},dependencies:[x,D,h,ae,ne,Ce],styles:["mat-card[_ngcontent-%COMP%]{border-radius:25px;box-shadow:0 0 12px #0003;width:310px}.brand[_ngcontent-%COMP%]{width:40px}"]});let e=t;return e})();var St=(e,t)=>t.id;function Mt(e,t){if(e&1){let f=w();n(0,"app-payment-card",13),s("delete",function(){let i=M(f).$implicit,r=v(2);return P(r.deleteCard(i))})("update",function(){let i=M(f).$implicit,r=v(2);return P(r.updateCard(i))}),a()}if(e&2){let f=t.$implicit;c("card",f)("enableActions",!0)}}function Pt(e,t){e&1&&(n(0,"p",12),l(1,"mat-icon",14),m(2," You do not have registered cards "),a())}function Tt(e,t){if(e&1){let f=w();n(0,"main",2)(1,"mat-card",3)(2,"mat-card-header",4)(3,"mat-card-title",5),l(4,"mat-icon",6),m(5," Manage cards "),a()(),n(6,"mat-card-content")(7,"div",7)(8,"button",8),s("click",function(){M(f);let i=v();return P(i.addCard())}),l(9,"mat-icon",9),m(10," Add card "),a()(),n(11,"div",10),we(12,Mt,1,2,"app-payment-card",11,St,!1,Pt,3,0,"p",12),a()()()()}if(e&2){let f=v();d(12),ke(f.cards)}}function wt(e,t){if(e&1&&l(0,"app-loading-view",15),e&2){let f=v();c("state",f.viewState)}}var $e=(()=>{let t=class t{constructor(o,i,r){this.cardsService=o,this.cardsMapper=i,this.dialog=r,this.viewState="loading"}ngOnInit(){this.getCards()}getCards(){this.viewState="loading",this.cardsService.getAllPaymentCardsForCurrentUser().subscribe({next:o=>{this.cards=this.cardsMapper.mapGetAllPaymentCardsForUserToModel(o),this.viewState="ready"},error:o=>{this.viewState="error"}})}addCard(){this.dialog.open(Oe,{width:J.md}).afterClosed().subscribe(i=>{i&&(this.loadingDialog.open(),this.cardsService.createPaymentCard(i).pipe(R(()=>this.loadingDialog.close())).subscribe({next:()=>{this.getCards()},error:r=>{this.errorDialog.open("Ocurrio un error al crear la tarjeta",r.message)}}))})}updateCard(o){this.dialog.open(Ge,{width:J.md,data:o}).afterClosed().subscribe(r=>{r&&(this.loadingDialog.open(),this.cardsService.updatePaymentCard(r,o.id).pipe(R(()=>this.loadingDialog.close())).subscribe({next:()=>{o.cardholder=r.cardholder,o.number=r.number,o.expiration=r.expiration},error:p=>{this.errorDialog.open("Ocurrio un error al actualizar la tarjeta",p.message)}}))})}deleteCard(o){this.dialog.open(Re,{width:J.md,data:o}).afterClosed().subscribe(r=>{r&&(this.loadingDialog.open(),this.cardsService.deletePaymentCard(r.id).pipe(R(()=>this.loadingDialog.close())).subscribe({next:()=>{this.cards=this.cards.filter(p=>p.id!==r.id)},error:p=>{this.errorDialog.open("Ocurrio un error al eliminar la tarjeta",p.message)}}))})}};t.\u0275fac=function(i){return new(i||t)(u(y),u(ze),u(Fe))},t.\u0275cmp=_({type:t,selectors:[["app-cards"]],viewQuery:function(i,r){if(i&1&&(be(fe,5),be(ge,5)),i&2){let p;xe(p=Ie())&&(r.loadingDialog=p.first),xe(p=Ie())&&(r.errorDialog=p.first)}},decls:5,vars:2,consts:[["class","mx-3 my-3",4,"ngIf"],["view","tarjetas",3,"state",4,"ngIf"],[1,"mx-3","my-3"],[1,"mx-1","mt-5"],[1,"flex-aligned","justify-center"],[1,"inline-flex-aligned"],["svgIcon","credit-card-multiple",1,"ml-3","mr-2"],[1,"flex-aligned","justify-center","mt-2"],["mat-raised-button","","color","primary",3,"click"],["svgIcon","plus-circle"],["id","cards",1,"mt-4"],[3,"card","enableActions"],[1,"flex-aligned","justify-center","mt-4","text-muted"],[3,"delete","update","card","enableActions"],["svgIcon","credit-card-off",1,"mr-2"],["view","tarjetas",3,"state"]],template:function(i,r){i&1&&(l(0,"app-navbar"),g(1,Tt,15,1,"main",0)(2,wt,1,1,"app-loading-view",1),l(3,"app-error-dialog")(4,"app-loading-dialog")),i&2&&(d(),c("ngIf",r.viewState==="ready"),d(),c("ngIf",r.viewState!=="ready"))},dependencies:[x,Be,qe,fe,ge,I,h,ae,ne,Ve,je,Qe],styles:["mat-card[_ngcontent-%COMP%]{border-radius:25px;box-shadow:0 0 12px #0003}#cards[_ngcontent-%COMP%]{display:grid;gap:16px;place-items:center;grid-template-columns:repeat(auto-fit,minmax(310px,1fr))}"]});let e=t;return e})();var kt=[{path:"",component:$e}],He=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Q({type:t}),t.\u0275inj=z({imports:[De.forChild(kt),De]});let e=t;return e})();var xr=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Q({type:t}),t.\u0275inj=z({imports:[Ne,He,Le,Ye,Ue]});let e=t;return e})();export{ze as a,Qe as b,xr as c};