import{a as p,j as r,l,m as a}from"./chunk-ZU2ZXMGP.js";import{a as o,ba as c,g as i,ga as u}from"./chunk-RJHPHPNE.js";var g=(()=>{let n=class n{constructor(t){this.httpClient=t,this.mockUsers=l,this.mockPeople=a}createUser(t){return new i(e=>{setTimeout(()=>{let s=this.mockUsers.length+1;this.mockUsers.push({id:s,email:t.email,role:t.role}),this.mockPeople.push({id:s,address:"",country:"",firstName:"",lastName:"",phoneNumber:""}),e.next(),e.complete()},1e3)})}updateUser(t,e){return new i(s=>{setTimeout(()=>{let m=this.mockUsers.findIndex(f=>f.id===e);this.mockUsers[m]=o(o({},this.mockUsers[m]),t),s.next(),s.complete()},1e3)})}deleteUser(t){return new i(e=>{setTimeout(()=>{this.mockUsers=this.mockUsers.filter(s=>s.id!==t),this.mockPeople=this.mockPeople.filter(s=>s.id!==t),e.next(),e.complete()},1e3)})}getUserById(t){return new i(e=>{setTimeout(()=>{e.next(this.mockUsers.find(s=>s.id===t)),e.complete()},1e3)})}getAllUsers(){return new i(t=>{setTimeout(()=>{t.next({users:this.mockUsers}),t.complete()},1e3)})}updateCurrentUser(t){return new i(e=>{setTimeout(()=>{let s=this.mockUsers.findIndex(m=>m.id===1);this.mockUsers[s]=o(o({},this.mockUsers[s]),t),e.next(),e.complete()},1e3)})}getCurrentAuthenticatedUser(){return new i(t=>{setTimeout(()=>{t.next(this.mockUsers[0]),t.complete()},1e3)})}determinePasswordStrength(t){let e=0;return t.length>10&&(e+=20),t.match(/[a-z]/)&&(e+=20),t.match(/[A-Z]/)&&(e+=20),t.match(/[0-9]/)&&(e+=20),t.match(/[^a-zA-Z0-9]/)&&(e+=20),e}};n.\u0275fac=function(e){return new(e||n)(u(p))},n.\u0275prov=c({token:n,factory:n.\u0275fac,providedIn:"root"});let h=n;return h})();export{g as a};
