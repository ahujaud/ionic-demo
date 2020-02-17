var __awaiter=this&&this.__awaiter||function(i,t,n,e){return new(n||(n=Promise))((function(o,a){function r(i){try{c(e.next(i))}catch(t){a(t)}}function s(i){try{c(e.throw(i))}catch(t){a(t)}}function c(i){i.done?o(i.value):new n((function(t){t(i.value)})).then(r,s)}c((e=e.apply(i,t||[])).next())}))},__generator=this&&this.__generator||function(i,t){var n,e,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,e&&(o=2&a[0]?e.return:a[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,a[1])).done)return o;switch(e=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,e=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(i,r)}catch(s){a=[6,s],e=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{J3Yu:function(i,t,n){"use strict";n.r(t),n.d(t,"ion_loading",(function(){return f}));var e=n("c1op"),o=n("AfW+"),a=(n("aiEM"),n("+4pY")),r=n("pori"),s=n("Dl6n"),c=n("YtD4"),l=function(i){var t=Object(a.a)(),n=Object(a.a)(),e=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},d=function(i){var t=Object(a.a)(),n=Object(a.a)(),e=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},p=function(i){var t=Object(a.a)(),n=Object(a.a)(),e=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},u=function(i){var t=Object(a.a)(),n=Object(a.a)(),e=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),e.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,e])},f=function(){function i(i){var t=this;Object(e.l)(this,i),this.presented=!1,this.mode=Object(e.d)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,r.a)},Object(r.e)(this.el),this.didPresent=Object(e.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(e.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(e.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(e.e)(this,"ionLoadingDidDismiss",7)}return i.prototype.componentWillLoad=function(){if(void 0===this.spinner){var i=Object(e.d)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(t){switch(t.label){case 0:return[4,Object(r.f)(this,"loadingEnter",l,p,void 0)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)),[2]}}))}))},i.prototype.dismiss=function(i,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.g)(this,i,t,"loadingLeave",d,u)},i.prototype.onDidDismiss=function(){return Object(r.h)(this.el,"ionLoadingDidDismiss")},i.prototype.onWillDismiss=function(){return Object(r.h)(this.el,"ionLoadingWillDismiss")},i.prototype.render=function(){var i,t=this.message,n=this.spinner,o=Object(e.d)(this);return Object(e.i)(e.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),(i={},i[o]=!0,i["loading-translucent"]=this.translucent,i))},Object(e.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(e.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(e.i)("div",{class:"loading-spinner"},Object(e.i)("ion-spinner",{name:n})),t&&Object(e.i)("div",{class:"loading-content",innerHTML:Object(c.a)(t)})))},Object.defineProperty(i.prototype,"el",{get:function(){return Object(e.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),i}()}}]);