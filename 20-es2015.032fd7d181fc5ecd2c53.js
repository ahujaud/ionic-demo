(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4cNi":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),o=u("oBZk"),b=u("ZZ/e"),s=u("s7LF"),a=u("X+KH");class r{constructor(l,n){this.router=l,this.userData=n,this.signup={username:"",password:""},this.submitted=!1}onSignup(l){this.submitted=!0,l.valid&&(this.userData.signup(this.signup.username),this.router.navigateByUrl("/app/tabs/schedule"))}}var d=u("iInd"),g=e.zb({encapsulation:0,styles:[[".signup-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.signup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function p(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,10,"ion-header",[],null,null,null,o.mb,o.r)),e.Ab(1,49152,null,0,b.C,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Pb,o.U)),e.Ab(3,49152,null,0,b.Db,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.Z,o.e)),e.Ab(5,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.yb,o.E)),e.Ab(7,49152,null,0,b.S,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,2,"ion-title",[],null,null,null,o.Nb,o.S)),e.Ab(9,49152,null,0,b.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Signup"])),(l()(),e.Bb(11,0,null,null,50,"ion-content",[],null,null,null,o.fb,o.k)),e.Ab(12,49152,null,0,b.v,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,1,"div",[["class","signup-logo"]],null,null,null,null,null)),(l()(),e.Bb(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),e.Bb(15,0,null,0,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Nb(l,17).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Nb(l,17).onReset()&&i),i}),null,null)),e.Ab(16,16384,null,0,s.m,[],null,null),e.Ab(17,4210688,[["signupForm",4]],0,s.h,[[8,null],[8,null]],null,null),e.Qb(2048,null,s.a,null,[s.h]),e.Ab(19,16384,null,0,s.g,[[4,s.a]],null,null),(l()(),e.Bb(20,0,null,null,37,"ion-list",[["lines","none"]],null,null,null,o.xb,o.B)),e.Ab(21,49152,null,0,b.P,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(22,0,null,0,13,"ion-item",[],null,null,null,o.ub,o.u)),e.Ab(23,49152,null,0,b.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,o.vb,o.A)),e.Ab(25,49152,null,0,b.O,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Tb(-1,0,["Username"])),(l()(),e.Bb(27,0,null,0,8,"ion-input",[["name","username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,30)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,30)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.signup.username=u)&&i),i}),o.ob,o.t)),e.Ab(28,16384,null,0,s.j,[],{required:[0,"required"]},null),e.Qb(1024,null,s.c,(function(l){return[l]}),[s.j]),e.Ab(30,16384,null,0,b.Pb,[e.p],null,null),e.Qb(1024,null,s.d,(function(l){return[l]}),[b.Pb]),e.Ab(32,671744,[["username",4]],0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.e,null,[s.i]),e.Ab(34,16384,null,0,s.f,[[4,s.e]],null,null),e.Ab(35,49152,null,0,b.H,[e.j,e.p,e.F],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(36,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,o.Lb,o.Q)),e.Ab(37,49152,null,0,b.yb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(38,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.Tb(-1,null,[" Username is required "])),(l()(),e.Bb(40,0,null,0,13,"ion-item",[],null,null,null,o.ub,o.u)),e.Ab(41,49152,null,0,b.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(42,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,o.vb,o.A)),e.Ab(43,49152,null,0,b.O,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Tb(-1,0,["Password"])),(l()(),e.Bb(45,0,null,0,8,"ion-input",[["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,48)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,48)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.signup.password=u)&&i),i}),o.ob,o.t)),e.Ab(46,16384,null,0,s.j,[],{required:[0,"required"]},null),e.Qb(1024,null,s.c,(function(l){return[l]}),[s.j]),e.Ab(48,16384,null,0,b.Pb,[e.p],null,null),e.Qb(1024,null,s.d,(function(l){return[l]}),[b.Pb]),e.Ab(50,671744,[["password",4]],0,s.i,[[2,s.a],[6,s.c],[8,null],[6,s.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.e,null,[s.i]),e.Ab(52,16384,null,0,s.f,[[4,s.e]],null,null),e.Ab(53,49152,null,0,b.H,[e.j,e.p,e.F],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.Bb(54,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,o.Lb,o.Q)),e.Ab(55,49152,null,0,b.yb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(56,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e.Tb(-1,null,[" Password is required "])),(l()(),e.Bb(58,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.Bb(59,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onSignup(e.Nb(l,17))&&i),i}),o.Y,o.d)),e.Ab(60,49152,null,0,b.l,[e.j,e.p,e.F],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),e.Tb(-1,0,["Create"]))],(function(l,n){var u=n.component;l(n,21,0,"none"),l(n,25,0,"primary","stacked"),l(n,28,0,""),l(n,32,0,"username",u.signup.username),l(n,35,0,"username","","text"),l(n,37,0,"danger"),l(n,43,0,"primary","stacked"),l(n,46,0,""),l(n,50,0,"password",u.signup.password),l(n,53,0,"password","","password"),l(n,55,0,"danger"),l(n,60,0,"block","submit")}),(function(l,n){var u=n.component;l(n,15,0,e.Nb(n,19).ngClassUntouched,e.Nb(n,19).ngClassTouched,e.Nb(n,19).ngClassPristine,e.Nb(n,19).ngClassDirty,e.Nb(n,19).ngClassValid,e.Nb(n,19).ngClassInvalid,e.Nb(n,19).ngClassPending),l(n,27,0,e.Nb(n,28).required?"":null,e.Nb(n,34).ngClassUntouched,e.Nb(n,34).ngClassTouched,e.Nb(n,34).ngClassPristine,e.Nb(n,34).ngClassDirty,e.Nb(n,34).ngClassValid,e.Nb(n,34).ngClassInvalid,e.Nb(n,34).ngClassPending),l(n,38,0,e.Nb(n,32).valid||0==u.submitted),l(n,45,0,e.Nb(n,46).required?"":null,e.Nb(n,52).ngClassUntouched,e.Nb(n,52).ngClassTouched,e.Nb(n,52).ngClassPristine,e.Nb(n,52).ngClassDirty,e.Nb(n,52).ngClassValid,e.Nb(n,52).ngClassInvalid,e.Nb(n,52).ngClassPending),l(n,56,0,e.Nb(n,50).valid||0==u.submitted)}))}function c(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"page-signup",[],null,null,null,p,g)),e.Ab(1,49152,null,0,r,[d.m,a.a],null,null)],null,null)}var m=e.xb("page-signup",r,c,{},{},[]),h=u("SVse");class C{}u.d(n,"SignUpModuleNgFactory",(function(){return v}));var v=e.yb(i,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[t.a,m]],[3,e.m],e.D]),e.Lb(4608,h.l,h.k,[e.z,[2,h.s]]),e.Lb(4608,s.l,s.l,[]),e.Lb(4608,b.c,b.c,[e.F,e.g]),e.Lb(4608,b.Ib,b.Ib,[b.c,e.m,e.w]),e.Lb(4608,b.Mb,b.Mb,[b.c,e.m,e.w]),e.Lb(1073742336,h.b,h.b,[]),e.Lb(1073742336,s.k,s.k,[]),e.Lb(1073742336,s.b,s.b,[]),e.Lb(1073742336,b.Fb,b.Fb,[]),e.Lb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),e.Lb(1073742336,C,C,[]),e.Lb(1073742336,i,i,[]),e.Lb(1024,d.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);