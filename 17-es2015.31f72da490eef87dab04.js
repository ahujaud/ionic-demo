(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8k80":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),i=u("SVse"),c=u("mrSG"),b=u("X+KH");class s{constructor(l,n,u){this.alertCtrl=l,this.router=n,this.userData=u}ngAfterViewInit(){this.getUsername()}updatePicture(){console.log("Clicked to update picture")}changeUsername(){return c.b(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:l=>{this.userData.setUsername(l.username),this.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]});yield l.present()}))}getUsername(){this.userData.getUsername().then(l=>{this.username=l})}changePassword(){console.log("Clicked to change password")}logout(){this.userData.logout(),this.router.navigateByUrl("/login")}support(){this.router.navigateByUrl("/support")}}var p=u("iInd"),m=t.zb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function g(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,20,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(l()(),t.Bb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Tb(3,null,["",""])),(l()(),t.Bb(4,0,null,null,16,"ion-list",[["inset",""]],null,null,null,r.xb,r.B)),t.Ab(5,49152,null,0,a.P,[t.j,t.p,t.F],{inset:[0,"inset"]},null),(l()(),t.Bb(6,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updatePicture()&&t),t}),r.ub,r.u)),t.Ab(7,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Update Picture"])),(l()(),t.Bb(9,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changeUsername()&&t),t}),r.ub,r.u)),t.Ab(10,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Change Username"])),(l()(),t.Bb(12,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.changePassword()&&t),t}),r.ub,r.u)),t.Ab(13,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Change Password"])),(l()(),t.Bb(15,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.support()&&t),t}),r.ub,r.u)),t.Ab(16,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Support"])),(l()(),t.Bb(18,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t}),r.ub,r.u)),t.Ab(19,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Logout"]))],(function(l,n){l(n,5,0,"")}),(function(l,n){l(n,3,0,n.component.username)}))}function h(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,10,"ion-header",[],null,null,null,r.mb,r.r)),t.Ab(1,49152,null,0,a.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Pb,r.U)),t.Ab(3,49152,null,0,a.Db,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.Z,r.e)),t.Ab(5,49152,null,0,a.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.yb,r.E)),t.Ab(7,49152,null,0,a.S,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,2,"ion-title",[],null,null,null,r.Nb,r.S)),t.Ab(9,49152,null,0,a.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Account"])),(l()(),t.Bb(11,0,null,null,3,"ion-content",[],null,null,null,r.fb,r.k)),t.Ab(12,49152,null,0,a.v,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,g)),t.Ab(14,16384,null,0,i.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,14,0,n.component.username)}),null)}function d(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"page-account",[],null,null,null,h,m)),t.Ab(1,4243456,null,0,s,[a.b,p.m,b.a],null,null)],null,null)}var v=t.xb("page-account",s,d,{},{},[]);class B{}u.d(n,"AccountModuleNgFactory",(function(){return f}));var f=t.yb(e,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[o.a,v]],[3,t.m],t.D]),t.Lb(4608,i.l,i.k,[t.z,[2,i.s]]),t.Lb(4608,a.c,a.c,[t.F,t.g]),t.Lb(4608,a.Ib,a.Ib,[a.c,t.m,t.w]),t.Lb(4608,a.Mb,a.Mb,[a.c,t.m,t.w]),t.Lb(1073742336,i.b,i.b,[]),t.Lb(1073742336,a.Fb,a.Fb,[]),t.Lb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),t.Lb(1073742336,B,B,[]),t.Lb(1073742336,e,e,[]),t.Lb(1024,p.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);