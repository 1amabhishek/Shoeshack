import{a as p,j as i,m as c}from"./chunk-ZU2ZXMGP.js";import{a as d,ba as n,g as r,ga as l}from"./chunk-RJHPHPNE.js";var h=[{name:"Espa\xF1a",code:"ES",areaCode:34},{name:"Argentina",code:"AR",areaCode:54},{name:"Bolivia",code:"BO",areaCode:591},{name:"Brasil",code:"BR",areaCode:55},{name:"Chile",code:"CL",areaCode:56},{name:"Colombia",code:"CO",areaCode:57},{name:"Costa Rica",code:"CR",areaCode:506},{name:"Cuba",code:"CU",areaCode:53},{name:"Ecuador",code:"EC",areaCode:593},{name:"El Salvador",code:"SV",areaCode:503},{name:"Guatemala",code:"GT",areaCode:502},{name:"Honduras",code:"HN",areaCode:504},{name:"M\xE9xico",code:"MX",areaCode:52},{name:"Nicaragua",code:"NI",areaCode:505},{name:"Panam\xE1",code:"PA",areaCode:507},{name:"Paraguay",code:"PY",areaCode:595},{name:"Per\xFA",code:"PE",areaCode:51},{name:"Rep\xFAblica Dominicana",code:"DO",areaCode:1},{name:"Uruguay",code:"UY",areaCode:598},{name:"Venezuela",code:"VE",areaCode:58},{name:"India",code:"IN",areaCode:91}];var P=(()=>{let o=class o{mapGetAllUsersResponseDtoToModel(e){return e.users.map(t=>({id:t.id,email:t.email,role:t.role}))}mapGetCurrentUserResonseDtoToModel(e){return{id:e.id,email:e.email,role:e.role}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=n({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();var R=(()=>{let o=class o{constructor(e){this.httpClient=e,this.mockPersons=c}getAllPeople(){return new r(e=>{setTimeout(()=>{e.next({people:c}),e.complete()},1e3)})}getPersonById(e){return new r(t=>{setTimeout(()=>{t.next(this.mockPersons.find(m=>m.id===e)),t.complete()},1e3)})}updatePerson(e,t){return new r(m=>{setTimeout(()=>{let s=this.mockPersons.findIndex(C=>C.id===t);this.mockPersons[s]=d(d({},this.mockPersons[s]),e),m.next(),m.complete()},1e3)})}updateCurrentAuthenticatedPerson(e){return new r(t=>{setTimeout(()=>{this.mockPersons[0]=d(d({},this.mockPersons[0]),e),t.next(),t.complete()},1e3)})}getCurrentAuthenticatedPerson(){return new r(e=>{setTimeout(()=>{e.next(this.mockPersons[0]),e.complete()},1e3)})}};o.\u0275fac=function(t){return new(t||o)(l(p))},o.\u0275prov=n({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();var g=(()=>{let o=class o{mapGetAllPeopleResponseDtoToModel(e){return e.people.map(t=>({id:t.id,address:t.address,country:t.country,firstName:t.firstName,lastName:t.lastName,phoneNumber:t.phoneNumber}))}mapGetCurrentAuthenticatedPersonResponseDtoToModel(e){return{id:e.id,address:e.address,country:e.country,firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber}}};o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=n({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();export{h as a,P as b,R as c,g as d};