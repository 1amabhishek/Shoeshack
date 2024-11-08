import{Ia as k,b as F,c as D,ca as L,d as x,e as B,f as H,g as j,i as h,p as z,wa as V}from"./chunk-ZU2ZXMGP.js";import{Eb as P,Hc as U,Ka as A,Lb as b,Sb as I,Tb as T,Tc as E,Ub as _,Ya as M,_ as f,ab as C,ba as g,ca as p,cb as R,eb as w,gb as S,ha as l,hb as N,ma as y,na as c,qa as v,sc as O}from"./chunk-RJHPHPNE.js";var Q=["admin/users","admin/products","admin/purchases"],W=["store","cart","payment","cards","purchases","profile"],G=["login","register"];var a=(t,e)=>{let o=l(z),r=l(j),i=t.routeConfig.path,n=o.authUser();return G.includes(i)&&n?(r.navigateByUrl("/store"),!1):W.includes(i)&&!n?(r.navigateByUrl("/login"),!1):Q.includes(i)&&n?.role!=="Admin"?(r.navigateByUrl("/store"),!1):!0};var K=[{path:"store",loadChildren:()=>import("./chunk-5XWGFT76.js").then(t=>t.StoreModule),canActivate:[a]},{path:"cart",loadChildren:()=>import("./chunk-HQHCJ3TZ.js").then(t=>t.CartModule),canActivate:[a]},{path:"payment",loadChildren:()=>import("./chunk-ORODHLVA.js").then(t=>t.PaymentModule),canActivate:[a]},{path:"cards",loadChildren:()=>import("./chunk-WASUYKYT.js").then(t=>t.CardsModule),canActivate:[a]},{path:"admin/products",loadChildren:()=>import("./chunk-D3ETHQFA.js").then(t=>t.ProductsModule),canActivate:[a]},{path:"admin/users",loadChildren:()=>import("./chunk-B43IWGFM.js").then(t=>t.UsersModule),canActivate:[a]},{path:"purchases",loadChildren:()=>import("./chunk-L6IGKRFK.js").then(t=>t.PurchasesModule),canActivate:[a]},{path:"admin/purchases",loadChildren:()=>import("./chunk-5CWYHC4B.js").then(t=>t.ManagePurchasesModule),canActivate:[a]},{path:"login",loadChildren:()=>import("./chunk-PLEO5UEY.js").then(t=>t.LoginModule),canActivate:[a]},{path:"register",loadChildren:()=>import("./chunk-4JIBJZLK.js").then(t=>t.RegisterModule),canActivate:[a]},{path:"profile",loadChildren:()=>import("./chunk-7EDISBAJ.js").then(t=>t.ProfileModule),canActivate:[a]},{path:"",redirectTo:"store",pathMatch:"full"},{path:"**",redirectTo:"store"}],q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e}),e.\u0275inj=p({imports:[h.forRoot(K),h]});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.sidenavProperties={opened:!1,mode:"side"}}ngOnInit(){this.toggleSidenavMode(window.innerWidth)}onResize(){this.toggleSidenavMode(window.innerWidth)}toggleSidenav(){this.sidenav.toggle()}closeSidenav(){this.sidenav.close()}toggleSidenavMode(r){this.sidenavProperties.mode=r>768?"side":"over"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],viewQuery:function(i,n){if(i&1&&I(L,5),i&2){let s;T(s=_())&&(n.sidenav=s.first)}},hostBindings:function(i,n){i&1&&b("resize",function(d){return n.onResize(d)},!1,M)},decls:1,vars:0,template:function(i,n){i&1&&P(0,"router-outlet")},dependencies:[H]});let t=e;return t})();var $="@",ee=(()=>{let e=class e{constructor(r,i,n,s,d){this.doc=r,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=l(R,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-LPVPNOZ7.js")).catch(i=>{throw new f(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new u(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let J=d.createRenderer(r,i);s.use(J)}).catch(d=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){C()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),u=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,r,i){this.delegate.insertBefore(e,o,r,i)}removeChild(e,o,r){this.delegate.removeChild(e,o,r)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,r,i){this.delegate.setAttribute(e,o,r,i)}removeAttribute(e,o,r){this.delegate.removeAttribute(e,o,r)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,r,i){this.delegate.setStyle(e,o,r,i)}removeStyle(e,o,r){this.delegate.removeStyle(e,o,r)}setProperty(e,o,r){this.shouldReplay(o)&&this.replay.push(i=>i.setProperty(e,o,r)),this.delegate.setProperty(e,o,r)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,r){return this.shouldReplay(o)&&this.replay.push(i=>i.listen(e,o,r)),this.delegate.listen(e,o,r)}shouldReplay(e){return this.replay!==null&&e.startsWith($)}};function Y(t="animations"){return S("NgAsyncAnimations"),v([{provide:w,useFactory:(e,o,r)=>new ee(e,o,r,t),deps:[U,D,N]},{provide:A,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=c({type:e,bootstrap:[X]}),e.\u0275inj=p({providers:[Y()],imports:[B,E,q,h,F,V,k]});let t=e;return t})();x().bootstrapModule(Z,{providers:[{provide:O,useValue:"es-ES"}]}).catch(t=>console.error(t));