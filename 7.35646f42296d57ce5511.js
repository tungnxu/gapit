(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{iydT:function(i,n,t){"use strict";t.r(n),t.d(n,"HomeModule",(function(){return x}));var e=t("ofXK"),s=t("tyNb"),c=t("fXoL"),r=t("1OyB"),l=t("vuIU"),o=t("3Pt+"),a=["*"],b=function(){var i=function(){function i(n,t,e){Object(r.a)(this,i),this.el=n,this.zone=t,this.platformId=e,this.afterChange=new c.n,this.beforeChange=new c.n,this.breakpoint=new c.n,this.destroy=new c.n,this.init=new c.n,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}return Object(l.a)(i,[{key:"ngOnDestroy",value:function(){this.unslick()}},{key:"ngAfterViewInit",value:function(){this.ngAfterViewChecked()}},{key:"ngAfterViewChecked",value:function(){var i=this;if(!Object(e.u)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){var n=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===n?this.unslick():(this._addedSlides.forEach((function(n){i.slides.push(n),i.zone.runOutsideAngular((function(){i.$instance.slick("slickAdd",n.el.nativeElement)}))})),this._addedSlides=[],this._removedSlides.forEach((function(n){var t=i.slides.indexOf(n);i.slides=i.slides.filter((function(i){return i!==n})),i.zone.runOutsideAngular((function(){i.$instance.slick("slickRemove",t)}))})),this._removedSlides=[]):n>0&&this.initSlick()}}},{key:"initSlick",value:function(){var i=this;this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular((function(){i.$instance=jQuery(i.el.nativeElement),i.$instance.on("init",(function(n,t){i.zone.run((function(){i.init.emit({event:n,slick:t})}))})),i.$instance.slick(i.config),i.zone.run((function(){var n;i.initialized=!0,i.currentIndex=(null===(n=i.config)||void 0===n?void 0:n.initialSlide)||0})),i.$instance.on("afterChange",(function(n,t,e){i.zone.run((function(){i.afterChange.emit({event:n,slick:t,currentSlide:e,first:0===e,last:t.$slides.length===e+t.options.slidesToScroll}),i.currentIndex=e}))})),i.$instance.on("beforeChange",(function(n,t,e,s){i.zone.run((function(){i.beforeChange.emit({event:n,slick:t,currentSlide:e,nextSlide:s}),i.currentIndex=s}))})),i.$instance.on("breakpoint",(function(n,t,e){i.zone.run((function(){i.breakpoint.emit({event:n,slick:t,breakpoint:e})}))})),i.$instance.on("destroy",(function(n,t){i.zone.run((function(){i.destroy.emit({event:n,slick:t}),i.initialized=!1}))}))}))}},{key:"addSlide",value:function(i){this._addedSlides.push(i)}},{key:"removeSlide",value:function(i){this._removedSlides.push(i)}},{key:"slickGoTo",value:function(i){var n=this;this.zone.runOutsideAngular((function(){n.$instance.slick("slickGoTo",i)}))}},{key:"slickNext",value:function(){var i=this;this.zone.runOutsideAngular((function(){i.$instance.slick("slickNext")}))}},{key:"slickPrev",value:function(){var i=this;this.zone.runOutsideAngular((function(){i.$instance.slick("slickPrev")}))}},{key:"slickPause",value:function(){var i=this;this.zone.runOutsideAngular((function(){i.$instance.slick("slickPause")}))}},{key:"slickPlay",value:function(){var i=this;this.zone.runOutsideAngular((function(){i.$instance.slick("slickPlay")}))}},{key:"unslick",value:function(){var i=this;this.$instance&&(this.zone.runOutsideAngular((function(){i.$instance.slick("unslick")})),this.$instance=void 0),this.initialized=!1}},{key:"ngOnChanges",value:function(i){var n=this;if(this.initialized){var t=i.config;if(t.previousValue!==t.currentValue&&void 0!==t.currentValue){var e=t.currentValue.refresh,s=Object.assign({},t.currentValue);delete s.refresh,this.zone.runOutsideAngular((function(){n.$instance.slick("slickSetOption",s,e)}))}}}}]),i}();return i.\u0275fac=function(n){return new(n||i)(c.Jb(c.l),c.Jb(c.z),c.Jb(c.B))},i.\u0275cmp=c.Db({type:i,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[c.wb([{provide:o.j,useExisting:Object(c.S)((function(){return i})),multi:!0}]),c.vb],ngContentSelectors:a,decls:1,vars:0,template:function(i,n){1&i&&(c.cc(),c.bc(0))},encapsulation:2}),i}(),u=function(){var i=function(){function i(n,t,e){Object(r.a)(this,i),this.el=n,this.platformId=t,this.carousel=e}return Object(l.a)(i,[{key:"ngOnInit",value:function(){Object(e.t)(this.platformId)&&this.carousel.addSlide(this)}},{key:"ngOnDestroy",value:function(){Object(e.t)(this.platformId)&&this.carousel.removeSlide(this)}}]),i}();return i.\u0275fac=function(n){return new(n||i)(c.Jb(c.l),c.Jb(c.B),c.Jb(b,1))},i.\u0275dir=c.Eb({type:i,selectors:[["","ngxSlickItem",""]]}),i}(),d=function(){var i=function i(){Object(r.a)(this,i)};return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(n){return new(n||i)},imports:[[e.c]]}),i}();function g(i,n){1&i&&c.Kb(0,"img",8)}var h=function(i){return{"background-image":i}};function v(i,n){if(1&i&&(c.Pb(0,"div",3),c.Pb(1,"div",4),c.Kb(2,"div",5),c.tc(3,g,1,0,"img",6),c.Pb(4,"div",7),c.Pb(5,"h6"),c.vc(6),c.Ob(),c.Pb(7,"h1"),c.vc(8),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i){var t=n.$implicit;c.xb(1),c.dc("ngStyle",c.fc(4,h,"url("+(null==t?null:t.imageUrl)+")")),c.xb(2),c.dc("ngIf",null==t?null:t.hasLable),c.xb(3),c.wc(null==t?null:t.smallTitle),c.xb(2),c.wc(null==t?null:t.bigTitle)}}var m=function(){function i(){this.slideLanding=[{bigTitle:"T\u1ea1o n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1, t\u01b0\u01a1ng lai t\u01b0\u01a1i s\xe1ng th\xf4ng qua gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng",smallTitle:"GI\xc1O D\u1ee4C S\u1ee8C KH\u1eceE HAY",hasLable:!0,imageUrl:"assets/img/hero-img.jpg",link:"#"},{bigTitle:"T\u1ea1o n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1, t\u01b0\u01a1ng lai t\u01b0\u01a1i s\xe1ng th\xf4ng qua gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng",smallTitle:"Ti\xeau \u0111\u1ec1 slide nh\u1ecf",hasLable:!1,imageUrl:"assets/img/smile.jpg",link:"#"}],this.slideConfig={dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2e3,fade:!0,cssEase:"linear"}}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-landing-slide"]],decls:3,vars:2,consts:[[1,"carousel","main-slide","slider",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide-item slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide-item","slide"],[1,"main-header",3,"ngStyle"],[1,"overlay"],["class","logo-smile","src","assets/img/logo-label.png","alt","logo-label",4,"ngIf"],[1,"header-content"],["src","assets/img/logo-label.png","alt","logo-label",1,"logo-smile"]],template:function(i,n){1&i&&(c.Pb(0,"ngx-slick-carousel",0,1),c.tc(2,v,9,6,"div",2),c.Ob()),2&i&&(c.dc("config",n.slideConfig),c.xb(2),c.dc("ngForOf",n.slideLanding))},directives:[b,e.k,u,e.m,e.l],styles:[""]}),i}();function f(i,n){if(1&i&&(c.Pb(0,"div",11),c.Pb(1,"div",12),c.Pb(2,"div",13),c.Kb(3,"img",14),c.Ob(),c.Pb(4,"div",15),c.Pb(5,"div",16),c.vc(6),c.Ob(),c.Pb(7,"a",17),c.Kb(8,"i",18),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i){var t=n.$implicit;c.xb(3),c.dc("src",null==t?null:t.thumbnailUrl,c.pc),c.xb(3),c.wc(null==t?null:t.title),c.xb(1),c.dc("routerLink",null==t?null:t.link)}}function p(i,n){if(1&i){var t=c.Qb();c.Nb(0),c.Pb(1,"ngx-slick-carousel",8,9),c.Wb("init",(function(i){return c.nc(t),c.Yb().slickInit(i)})),c.tc(3,f,9,3,"div",10),c.Ob(),c.Mb()}if(2&i){var e=c.Yb();c.xb(1),c.dc("config",e.slideConfig),c.xb(2),c.dc("ngForOf",e.currentResourceList)}}var O=function(){function i(){this.currentResourceList=[{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"}],this.slideConfig={dots:!1,infinite:!0,variableWidth:!0}}return i.prototype.ngOnInit=function(){},i.prototype.removeSlide=function(){this.currentResourceList.length=0},i.prototype.getCategory=function(i){this.slickModal.unslick(),this.currentResourceList=[],this.currentResourceList=10==i?[{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"}]:[{link:"#",title:"Chompers: Loose in Tooth City",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"}]},i.prototype.slickInit=function(i){this.slickModal=i.slick},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-who-section"]],decls:16,vars:1,consts:[[1,"resource-section"],[1,"container"],[1,"nav-colgate","nav","nav-pills","nav-justified"],["href","#",1,"nav-link","active"],["href","javascript:;",1,"nav-link",3,"click"],[1,"nav-link",3,"click"],["href","#",1,"nav-link"],[4,"ngIf"],[1,"carousel","list-resource-card","slider",3,"config","init"],["slickModal","slick-carousel"],["ngxSlickItem","","class","resource-card-wrapper",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"resource-card-wrapper"],[1,"resource-card"],[1,"resource-thumbnail"],[3,"src"],[1,"resource-card-des"],[1,"title"],["title","Xem chi ti\u1ebft",1,"action",3,"routerLink"],["aria-hidden","true",1,"fa","fa-angle-right"]],template:function(i,n){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h2"),c.vc(3,"T\xe0i nguy\xean"),c.Ob(),c.Pb(4,"nav",2),c.Pb(5,"a",3),c.vc(6,"H\xe0ng \u0111\u1ea7u"),c.Ob(),c.Pb(7,"a",4),c.Wb("click",(function(){return n.getCategory(10)})),c.vc(8,"D\xe0nh cho gia \u0111\xecnh"),c.Ob(),c.Pb(9,"a",4),c.Wb("click",(function(){return n.getCategory(11)})),c.vc(10,"D\xe0nh cho gi\xe1o vi\xean"),c.Ob(),c.Pb(11,"a",5),c.Wb("click",(function(){return n.currentResourceList=null})),c.vc(12,"D\xe0nh cho chuy\xean gia nha khoa"),c.Ob(),c.Pb(13,"a",6),c.vc(14,"D\xe0nh cho t\xecnh nguy\u1ec7n vi\xean"),c.Ob(),c.Ob(),c.tc(15,p,4,2,"ng-container",7),c.Ob(),c.Ob()),2&i&&(c.xb(15),c.dc("ngIf",(null==n.currentResourceList?null:n.currentResourceList.length)>0))},directives:[e.l,b,e.k,u,s.c],styles:[""]}),i}(),k=function(){function i(){}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-age-section"]],decls:57,vars:0,consts:[[1,"resource-section"],[1,"container"],[1,"mb-4"],[1,"resource-group"],[1,"row","no-gutters"],[1,"col-md"],[1,"resource-group-item"],[1,"thumbnail"],["width","100%","src","assets/img/so-sinh.jpg"],[1,"overlay"],[1,"content"],["title","Xem chi ti\u1ebft","href","#",1,"action"],[1,"fa","fa-angle-right"],["width","100%","src","assets/img/3-4-tuoi.jpg"],["width","100%","src","assets/img/5-6-tuoi.jpg"],["width","100%","src","assets/img/7-8-tuoi.jpg"],["width","100%","src","assets/img/9-12-tuoi.jpg"]],template:function(i,n){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h4",2),c.vc(3,"T\xe0i nguy\xean theo Nh\xf3m tu\u1ed5i"),c.Ob(),c.Pb(4,"div",3),c.Pb(5,"div",4),c.Pb(6,"div",5),c.Pb(7,"div",6),c.Pb(8,"div",7),c.Kb(9,"img",8),c.Ob(),c.Kb(10,"div",9),c.Pb(11,"div",10),c.Pb(12,"h5"),c.vc(13,"Tr\u1ebb s\u01a1 sinh v\xe0 tr\u1ebb m\u1edbi bi\u1ebft \u0111i"),c.Ob(),c.Pb(14,"a",11),c.Kb(15,"i",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(16,"div",5),c.Pb(17,"div",6),c.Pb(18,"div",7),c.Kb(19,"img",13),c.Ob(),c.Kb(20,"div",9),c.Pb(21,"div",10),c.Pb(22,"h5"),c.vc(23,"3-4 Tu\u1ed5i"),c.Ob(),c.Pb(24,"a",11),c.Kb(25,"i",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(26,"div",5),c.Pb(27,"div",6),c.Pb(28,"div",7),c.Kb(29,"img",14),c.Ob(),c.Kb(30,"div",9),c.Pb(31,"div",10),c.Pb(32,"h5"),c.vc(33,"5-6 Tu\u1ed5i"),c.Ob(),c.Pb(34,"a",11),c.Kb(35,"i",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(36,"div",4),c.Pb(37,"div",5),c.Pb(38,"div",6),c.Pb(39,"div",7),c.Kb(40,"img",15),c.Ob(),c.Kb(41,"div",9),c.Pb(42,"div",10),c.Pb(43,"h5"),c.vc(44,"7-8 Tu\u1ed5i"),c.Ob(),c.Pb(45,"a",11),c.Kb(46,"i",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(47,"div",5),c.Pb(48,"div",6),c.Pb(49,"div",7),c.Kb(50,"img",16),c.Ob(),c.Kb(51,"div",9),c.Pb(52,"div",10),c.Pb(53,"h6"),c.vc(54,"9-12 Tu\u1ed5i"),c.Ob(),c.Pb(55,"a",11),c.Kb(56,"i",12),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob())},styles:[""]}),i}(),P=function(){function i(){}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-activity-section"]],decls:48,vars:0,consts:[[1,"resource-section"],[1,"container"],[1,"mb-4"],[1,"resource-activity"],[1,"row"],[1,"col-lg","col-md-3","col-sm-6","col-xs-6"],[1,"resource-activity-item"],[1,"resource-thumbnail"],["src","assets/img/a-1.jpg"],[1,"resource-card-des"],["src","assets/img/a-2.jpg"],["src","assets/img/a-3.jpg"],["src","assets/img/a-4.jpg"],["src","assets/img/a-5.jpg"],["src","assets/img/a-6.jpg"],["src","assets/img/a-7.jpg"]],template:function(i,n){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h4",2),c.vc(3,"T\xe0i nguy\xean theo ho\u1ea1t \u0111\u1ed9ng"),c.Ob(),c.Pb(4,"div",3),c.Pb(5,"div",4),c.Pb(6,"div",5),c.Pb(7,"div",6),c.Pb(8,"div",7),c.Kb(9,"img",8),c.Ob(),c.Pb(10,"div",9),c.vc(11," M\xe0u s\u1eafc "),c.Ob(),c.Ob(),c.Ob(),c.Pb(12,"div",5),c.Pb(13,"div",6),c.Pb(14,"div",7),c.Kb(15,"img",10),c.Ob(),c.Pb(16,"div",9),c.vc(17," L\u1eafng nghe "),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"div",5),c.Pb(19,"div",6),c.Pb(20,"div",7),c.Kb(21,"img",11),c.Ob(),c.Pb(22,"div",9),c.vc(23," Ch\u01a1i "),c.Ob(),c.Ob(),c.Ob(),c.Pb(24,"div",5),c.Pb(25,"div",6),c.Pb(26,"div",7),c.Kb(27,"img",12),c.Ob(),c.Pb(28,"div",9),c.vc(29," Ki\u1ec3m tra "),c.Ob(),c.Ob(),c.Ob(),c.Pb(30,"div",5),c.Pb(31,"div",6),c.Pb(32,"div",7),c.Kb(33,"img",13),c.Ob(),c.Pb(34,"div",9),c.vc(35," \u0110\u1ecdc "),c.Ob(),c.Ob(),c.Ob(),c.Pb(36,"div",5),c.Pb(37,"div",6),c.Pb(38,"div",7),c.Kb(39,"img",14),c.Ob(),c.Pb(40,"div",9),c.vc(41," H\xe1t "),c.Ob(),c.Ob(),c.Ob(),c.Pb(42,"div",5),c.Pb(43,"div",6),c.Pb(44,"div",7),c.Kb(45,"img",15),c.Ob(),c.Pb(46,"div",9),c.vc(47," Xem "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob())},styles:[""]}),i}();function y(i,n){if(1&i){var t=c.Qb();c.Pb(0,"a",7),c.Wb("click",(function(){c.nc(t);var i=n.index;return c.Yb(),c.lc(7).slickGoTo(i)})),c.vc(1),c.Ob()}if(2&i){var e=n.$implicit,s=n.index,r=c.Yb();c.Bb("active",s===r.currentSlide),c.xb(1),c.wc(null==e?null:e.bigTitle)}}function j(i,n){if(1&i&&(c.Pb(0,"div",8),c.Pb(1,"div",9),c.Kb(2,"img",10),c.Ob(),c.Kb(3,"div",11),c.Pb(4,"div",12),c.Pb(5,"h3"),c.vc(6),c.Ob(),c.Pb(7,"p"),c.vc(8),c.Ob(),c.Pb(9,"a",13),c.vc(10),c.Ob(),c.Ob(),c.Ob()),2&i){var t=n.$implicit;c.xb(2),c.dc("src",null==t?null:t.imageUrl,c.pc),c.xb(4),c.wc(null==t?null:t.bigTitle),c.xb(2),c.wc(null==t?null:t.smallTitle),c.xb(2),c.wc(null==t?null:t.buttonTitle)}}var S=function(){function i(){this.currentSlide=0,this.slideProgram=[{bigTitle:"Ki\u1ec3m tra & Ph\xf2ng ng\u1eeba Nha khoa",smallTitle:"V\u1edbi hai gh\u1ebf nha khoa c\u1ee1 tr\u1ebb em tr\xean t\xe0u, Colgate's Bright Smiles, Bright Futures\xae s\u1ebd s\xe0ng l\u1ecdc hai tr\u1ebb em c\xf9ng m\u1ed9t l\xfac.",hasLable:!0,imageUrl:"assets/img/p-1.jpg",link:"#",buttonTitle:"L\xean l\u1ecbch"},{bigTitle:"T\xecnh nguy\u1ec7n vi\xean",smallTitle:"B\u1ea1n mu\u1ed1n tr\u1edf th\xe0nh t\xecnh nguy\u1ec7n vi\xean c\u1ee7a Colgate Bright Smiles, Bright Futures? B\u1eaft \u0111\u1ea7u b\u1eb1ng c\xe1ch \u0111i\u1ec1n v\xe0o bi\u1ec3u m\u1eabu quan t\xe2m t\xecnh nguy\u1ec7n c\u1ee7a ch\xfang t\xf4i.",hasLable:!1,imageUrl:"assets/img/p-2.jpg",link:"#",buttonTitle:"B\u1eaft \u0111\u1ea7u"}],this.slideConfig={dots:!1,infinite:!0,variableWidth:!0}}return i.prototype.ngOnInit=function(){},i.prototype.beforeChange=function(i){this.currentSlide=i.nextSlide},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-program-section"]],decls:9,vars:3,consts:[[1,"section-outside"],[1,"container"],[1,"nav-colgate","nav","nav-pills","nav-justified"],["class","nav-link","href","javascript:;",3,"active","click",4,"ngFor","ngForOf"],[1,"carousel","programs","slider",3,"config","beforeChange"],["slickModal","slick-carousel"],["ngxSlickItem","","class","program-item",4,"ngFor","ngForOf"],["href","javascript:;",1,"nav-link",3,"click"],["ngxSlickItem","",1,"program-item"],[1,"thumbnail"],["width","100%",3,"src"],[1,"overlay"],[1,"content"],["routerLink","slide?.link",1,"btn","btn-light","btn-round"]],template:function(i,n){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h2"),c.vc(3,"C\xe1c ch\u01b0\u01a1ng tr\xecnh"),c.Ob(),c.Pb(4,"nav",2),c.tc(5,y,2,3,"a",3),c.Ob(),c.Pb(6,"ngx-slick-carousel",4,5),c.Wb("beforeChange",(function(i){return n.beforeChange(i)})),c.tc(8,j,11,4,"div",6),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(5),c.dc("ngForOf",n.slideProgram),c.xb(1),c.dc("config",n.slideConfig),c.xb(2),c.dc("ngForOf",n.slideProgram))},directives:[e.k,b,u,s.c],styles:[""]}),i}(),C=[{path:"",component:function(){function i(){}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["tnx-home"]],decls:27,vars:1,consts:[[1,"fix-container"],[1,"container-fluid"],[1,"gray-section","bg-gray"],[1,"section-outside"],[1,"container"],[1,"program-single-item"],[1,"thumbnail"],["width","100%","src","assets/img/p-s.jpg"],[1,"overlay"],[1,"content"],[1,"text-uppercase","m-0"],[1,"mb-2"],[1,"btn","btn-light","btn-round",3,"routerLink"]],template:function(i,n){1&i&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Kb(3,"app-landing-slide"),c.Kb(4,"app-resource-who-section"),c.Kb(5,"app-resource-age-section"),c.Kb(6,"app-resource-activity-section"),c.Ob(),c.Ob(),c.Kb(7,"app-resource-program-section"),c.Pb(8,"div",3),c.Pb(9,"div",4),c.Pb(10,"h2"),c.vc(11,"Cam k\u1ebft c\u1ee7a ch\xfang t\xf4i"),c.Ob(),c.Pb(12,"div",5),c.Pb(13,"div",6),c.Kb(14,"img",7),c.Ob(),c.Kb(15,"div",8),c.Pb(16,"div",9),c.Pb(17,"p",10),c.vc(18,"Gi\xe1o d\u1ee5c"),c.Kb(19,"br"),c.vc(20,"S\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng"),c.Ob(),c.Pb(21,"h5",11),c.vc(22,"Cam k\u1ebft c\u1ee7a Colgate v\u1ec1 "),c.Kb(23,"br"),c.vc(24,"Gi\xe1o d\u1ee5c S\u1ee9c kh\u1ecfe R\u0103ng mi\u1ec7ng"),c.Ob(),c.Pb(25,"a",12),c.vc(26,"T\xecm hi\u1ec3u th\xeam"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(25),c.dc("routerLink","/commitment"))},directives:[m,O,k,P,S,s.c],encapsulation:2}),i}()}],T=function(){function i(){}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(n){return new(n||i)},imports:[[s.d.forChild(C)],s.d]}),i}(),w=t("PCNd"),x=function(){function i(){}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(n){return new(n||i)},imports:[[e.c,T,w.a,d]]}),i}()}}]);