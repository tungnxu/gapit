(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iydT:function(i,t,e){"use strict";e.r(t),e.d(t,"HomeModule",(function(){return S}));var n=e("ofXK"),s=e("tyNb"),l=e("fXoL");e("HDdC"),e("DH7j"),e("lJxs"),e("XoHu"),e("Cfvw");const c=new l.q("NgValueAccessor"),r=["*"];let b=(()=>{class i{constructor(i,t,e){this.el=i,this.zone=t,this.platformId=e,this.afterChange=new l.n,this.beforeChange=new l.n,this.breakpoint=new l.n,this.destroy=new l.n,this.init=new l.n,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!Object(n.o)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const i=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===i?this.unslick():(this._addedSlides.forEach(i=>{this.slides.push(i),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",i.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(i=>{const t=this.slides.indexOf(i);this.slides=this.slides.filter(t=>t!==i),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",t)})}),this._removedSlides=[]):i>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(i,t)=>{this.zone.run(()=>{this.init.emit({event:i,slick:t})})}),this.$instance.slick(this.config),this.zone.run(()=>{var i;this.initialized=!0,this.currentIndex=(null===(i=this.config)||void 0===i?void 0:i.initialSlide)||0}),this.$instance.on("afterChange",(i,t,e)=>{this.zone.run(()=>{this.afterChange.emit({event:i,slick:t,currentSlide:e,first:0===e,last:t.$slides.length===e+t.options.slidesToScroll}),this.currentIndex=e})}),this.$instance.on("beforeChange",(i,t,e,n)=>{this.zone.run(()=>{this.beforeChange.emit({event:i,slick:t,currentSlide:e,nextSlide:n}),this.currentIndex=n})}),this.$instance.on("breakpoint",(i,t,e)=>{this.zone.run(()=>{this.breakpoint.emit({event:i,slick:t,breakpoint:e})})}),this.$instance.on("destroy",(i,t)=>{this.zone.run(()=>{this.destroy.emit({event:i,slick:t}),this.initialized=!1})})})}addSlide(i){this._addedSlides.push(i)}removeSlide(i){this._removedSlides.push(i)}slickGoTo(i){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",i)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(i){if(this.initialized){const t=i.config;if(t.previousValue!==t.currentValue&&void 0!==t.currentValue){const i=t.currentValue.refresh,e=Object.assign({},t.currentValue);delete e.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",e,i)})}}}}return i.\u0275fac=function(t){return new(t||i)(l.Hb(l.l),l.Hb(l.z),l.Hb(l.B))},i.\u0275cmp=l.Bb({type:i,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[l.wb([{provide:c,useExisting:Object(l.S)(()=>i),multi:!0}]),l.vb],ngContentSelectors:r,decls:1,vars:0,template:function(i,t){1&i&&(l.Xb(),l.Wb(0))},encapsulation:2}),i})(),o=(()=>{class i{constructor(i,t,e){this.el=i,this.platformId=t,this.carousel=e}ngOnInit(){Object(n.n)(this.platformId)&&this.carousel.addSlide(this)}ngOnDestroy(){Object(n.n)(this.platformId)&&this.carousel.removeSlide(this)}}return i.\u0275fac=function(t){return new(t||i)(l.Hb(l.l),l.Hb(l.B),l.Hb(b,1))},i.\u0275dir=l.Cb({type:i,selectors:[["","ngxSlickItem",""]]}),i})(),a=(()=>{class i{}return i.\u0275mod=l.Fb({type:i}),i.\u0275inj=l.Eb({factory:function(t){return new(t||i)},imports:[[n.b]]}),i})();function h(i,t){1&i&&l.Ib(0,"img",8)}const u=function(i){return{"background-image":i}};function g(i,t){if(1&i&&(l.Mb(0,"div",3),l.Mb(1,"div",4),l.Ib(2,"div",5),l.gc(3,h,1,0,"img",6),l.Mb(4,"div",7),l.Mb(5,"h6"),l.hc(6),l.Lb(),l.Mb(7,"h1"),l.hc(8),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&i){const i=t.$implicit;l.xb(1),l.Yb("ngStyle",l.Zb(4,u,"url("+(null==i?null:i.imageUrl)+")")),l.xb(2),l.Yb("ngIf",null==i?null:i.hasLable),l.xb(3),l.ic(null==i?null:i.smallTitle),l.xb(2),l.ic(null==i?null:i.bigTitle)}}let d=(()=>{class i{constructor(){this.slideLanding=[{bigTitle:"T\u1ea1o n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1, t\u01b0\u01a1ng lai t\u01b0\u01a1i s\xe1ng th\xf4ng qua gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng",smallTitle:"GI\xc1O D\u1ee4C S\u1ee8C KH\u1eceE HAY",hasLable:!0,imageUrl:"assets/img/hero-img.jpg",link:"#"},{bigTitle:"T\u1ea1o n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1, t\u01b0\u01a1ng lai t\u01b0\u01a1i s\xe1ng th\xf4ng qua gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng",smallTitle:"Ti\xeau \u0111\u1ec1 slide nh\u1ecf",hasLable:!1,imageUrl:"assets/img/smile.jpg",link:"#"}],this.slideConfig={dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2e3,fade:!0,cssEase:"linear"}}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Bb({type:i,selectors:[["app-landing-slide"]],decls:3,vars:2,consts:[[1,"carousel","main-slide","slider",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide-item slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide-item","slide"],[1,"main-header",3,"ngStyle"],[1,"overlay"],["class","logo-smile","src","assets/img/logo-label.png","alt","logo-label",4,"ngIf"],[1,"header-content"],["src","assets/img/logo-label.png","alt","logo-label",1,"logo-smile"]],template:function(i,t){1&i&&(l.Mb(0,"ngx-slick-carousel",0,1),l.gc(2,g,9,6,"div",2),l.Lb()),2&i&&(l.Yb("config",t.slideConfig),l.xb(2),l.Yb("ngForOf",t.slideLanding))},directives:[b,n.h,o,n.j,n.i],styles:[""]}),i})();function m(i,t){if(1&i&&(l.Mb(0,"div",11),l.Mb(1,"div",12),l.Mb(2,"div",13),l.Ib(3,"img",14),l.Lb(),l.Mb(4,"div",15),l.Mb(5,"div",16),l.hc(6),l.Lb(),l.Mb(7,"a",17),l.Ib(8,"i",18),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&i){const i=t.$implicit;l.xb(3),l.Yb("src",null==i?null:i.thumbnailUrl,l.ec),l.xb(3),l.ic(null==i?null:i.title),l.xb(1),l.Yb("routerLink",null==i?null:i.link)}}function v(i,t){if(1&i){const i=l.Nb();l.Kb(0),l.Mb(1,"ngx-slick-carousel",8,9),l.Tb("init",(function(t){return l.dc(i),l.Vb().slickInit(t)})),l.gc(3,m,9,3,"div",10),l.Lb(),l.Jb()}if(2&i){const i=l.Vb();l.xb(1),l.Yb("config",i.slideConfig),l.xb(2),l.Yb("ngForOf",i.currentResourceList)}}let p=(()=>{class i{constructor(){this.currentResourceList=[{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"}],this.slideConfig={dots:!1,infinite:!0,variableWidth:!0}}ngOnInit(){}removeSlide(){this.currentResourceList.length=0}getCategory(i){this.slickModal.unslick(),this.currentResourceList=[],this.currentResourceList=10==i?[{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"},{link:"#",title:"T\xe0i nguy\xean thu\u1ed9c nh\xf3m gia \u0111\xecnh",thumbnailUrl:"assets/img/t-4.jpg"}]:[{link:"#",title:"Chompers: Loose in Tooth City",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"},{link:"#",title:"Chompers: Loose in Tooth City 1",thumbnailUrl:"assets/img/t-1.jpg"}],console.log(this.currentResourceList)}slickInit(i){console.log(i),this.slickModal=i.slick}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Bb({type:i,selectors:[["app-resource-who-section"]],decls:16,vars:1,consts:[[1,"resource-section"],[1,"container"],[1,"nav-colgate","nav","nav-pills","nav-justified"],["href","#",1,"nav-link","active"],["href","javascript:;",1,"nav-link",3,"click"],[1,"nav-link",3,"click"],["href","#",1,"nav-link"],[4,"ngIf"],[1,"carousel","list-resource-card","slider",3,"config","init"],["slickModal","slick-carousel"],["ngxSlickItem","","class","resource-card-wrapper",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"resource-card-wrapper"],[1,"resource-card"],[1,"resource-thumbnail"],[3,"src"],[1,"resource-card-des"],[1,"title"],["title","Xem chi ti\u1ebft",1,"action",3,"routerLink"],["aria-hidden","true",1,"fa","fa-angle-right"]],template:function(i,t){1&i&&(l.Mb(0,"div",0),l.Mb(1,"div",1),l.Mb(2,"h2"),l.hc(3,"T\xe0i nguy\xean"),l.Lb(),l.Mb(4,"nav",2),l.Mb(5,"a",3),l.hc(6,"H\xe0ng \u0111\u1ea7u"),l.Lb(),l.Mb(7,"a",4),l.Tb("click",(function(){return t.getCategory(10)})),l.hc(8,"D\xe0nh cho gia \u0111\xecnh"),l.Lb(),l.Mb(9,"a",4),l.Tb("click",(function(){return t.getCategory(11)})),l.hc(10,"D\xe0nh cho gi\xe1o vi\xean"),l.Lb(),l.Mb(11,"a",5),l.Tb("click",(function(){return t.currentResourceList=null})),l.hc(12,"D\xe0nh cho chuy\xean gia nha khoa"),l.Lb(),l.Mb(13,"a",6),l.hc(14,"D\xe0nh cho t\xecnh nguy\u1ec7n vi\xean"),l.Lb(),l.Lb(),l.gc(15,v,4,2,"ng-container",7),l.Lb(),l.Lb()),2&i&&(l.xb(15),l.Yb("ngIf",(null==t.currentResourceList?null:t.currentResourceList.length)>0))},directives:[n.i,b,n.h,o,s.b],styles:[""]}),i})(),L=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Bb({type:i,selectors:[["app-resource-age-section"]],decls:57,vars:0,consts:[[1,"resource-section"],[1,"container"],[1,"mb-4"],[1,"resource-group"],[1,"row","no-gutters"],[1,"col-md"],[1,"resource-group-item"],[1,"thumbnail"],["width","100%","src","assets/img/so-sinh.jpg"],[1,"overlay"],[1,"content"],["title","Xem chi ti\u1ebft","href","#",1,"action"],[1,"fa","fa-angle-right"],["width","100%","src","assets/img/3-4-tuoi.jpg"],["width","100%","src","assets/img/5-6-tuoi.jpg"],["width","100%","src","assets/img/7-8-tuoi.jpg"],["width","100%","src","assets/img/9-12-tuoi.jpg"]],template:function(i,t){1&i&&(l.Mb(0,"div",0),l.Mb(1,"div",1),l.Mb(2,"h4",2),l.hc(3,"T\xe0i nguy\xean theo Nh\xf3m tu\u1ed5i"),l.Lb(),l.Mb(4,"div",3),l.Mb(5,"div",4),l.Mb(6,"div",5),l.Mb(7,"div",6),l.Mb(8,"div",7),l.Ib(9,"img",8),l.Lb(),l.Ib(10,"div",9),l.Mb(11,"div",10),l.Mb(12,"h5"),l.hc(13,"Tr\u1ebb s\u01a1 sinh v\xe0 tr\u1ebb m\u1edbi bi\u1ebft \u0111i"),l.Lb(),l.Mb(14,"a",11),l.Ib(15,"i",12),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(16,"div",5),l.Mb(17,"div",6),l.Mb(18,"div",7),l.Ib(19,"img",13),l.Lb(),l.Ib(20,"div",9),l.Mb(21,"div",10),l.Mb(22,"h5"),l.hc(23,"3-4 Tu\u1ed5i"),l.Lb(),l.Mb(24,"a",11),l.Ib(25,"i",12),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(26,"div",5),l.Mb(27,"div",6),l.Mb(28,"div",7),l.Ib(29,"img",14),l.Lb(),l.Ib(30,"div",9),l.Mb(31,"div",10),l.Mb(32,"h5"),l.hc(33,"5-6 Tu\u1ed5i"),l.Lb(),l.Mb(34,"a",11),l.Ib(35,"i",12),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(36,"div",4),l.Mb(37,"div",5),l.Mb(38,"div",6),l.Mb(39,"div",7),l.Ib(40,"img",15),l.Lb(),l.Ib(41,"div",9),l.Mb(42,"div",10),l.Mb(43,"h5"),l.hc(44,"7-8 Tu\u1ed5i"),l.Lb(),l.Mb(45,"a",11),l.Ib(46,"i",12),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(47,"div",5),l.Mb(48,"div",6),l.Mb(49,"div",7),l.Ib(50,"img",16),l.Lb(),l.Ib(51,"div",9),l.Mb(52,"div",10),l.Mb(53,"h6"),l.hc(54,"9-12 Tu\u1ed5i"),l.Lb(),l.Mb(55,"a",11),l.Ib(56,"i",12),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb())},styles:[""]}),i})(),f=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Bb({type:i,selectors:[["app-resource-activity-section"]],decls:48,vars:0,consts:[[1,"resource-section"],[1,"container"],[1,"mb-4"],[1,"resource-activity"],[1,"row"],[1,"col-lg","col-md-3","col-sm-6","col-xs-6"],[1,"resource-activity-item"],[1,"resource-thumbnail"],["src","assets/img/a-1.jpg"],[1,"resource-card-des"],["src","assets/img/a-2.jpg"],["src","assets/img/a-3.jpg"],["src","assets/img/a-4.jpg"],["src","assets/img/a-5.jpg"],["src","assets/img/a-6.jpg"],["src","assets/img/a-7.jpg"]],template:function(i,t){1&i&&(l.Mb(0,"div",0),l.Mb(1,"div",1),l.Mb(2,"h4",2),l.hc(3,"T\xe0i nguy\xean theo ho\u1ea1t \u0111\u1ed9ng"),l.Lb(),l.Mb(4,"div",3),l.Mb(5,"div",4),l.Mb(6,"div",5),l.Mb(7,"div",6),l.Mb(8,"div",7),l.Ib(9,"img",8),l.Lb(),l.Mb(10,"div",9),l.hc(11," M\xe0u s\u1eafc "),l.Lb(),l.Lb(),l.Lb(),l.Mb(12,"div",5),l.Mb(13,"div",6),l.Mb(14,"div",7),l.Ib(15,"img",10),l.Lb(),l.Mb(16,"div",9),l.hc(17," L\u1eafng nghe "),l.Lb(),l.Lb(),l.Lb(),l.Mb(18,"div",5),l.Mb(19,"div",6),l.Mb(20,"div",7),l.Ib(21,"img",11),l.Lb(),l.Mb(22,"div",9),l.hc(23," Ch\u01a1i "),l.Lb(),l.Lb(),l.Lb(),l.Mb(24,"div",5),l.Mb(25,"div",6),l.Mb(26,"div",7),l.Ib(27,"img",12),l.Lb(),l.Mb(28,"div",9),l.hc(29," Ki\u1ec3m tra "),l.Lb(),l.Lb(),l.Lb(),l.Mb(30,"div",5),l.Mb(31,"div",6),l.Mb(32,"div",7),l.Ib(33,"img",13),l.Lb(),l.Mb(34,"div",9),l.hc(35," \u0110\u1ecdc "),l.Lb(),l.Lb(),l.Lb(),l.Mb(36,"div",5),l.Mb(37,"div",6),l.Mb(38,"div",7),l.Ib(39,"img",14),l.Lb(),l.Mb(40,"div",9),l.hc(41," H\xe1t "),l.Lb(),l.Lb(),l.Lb(),l.Mb(42,"div",5),l.Mb(43,"div",6),l.Mb(44,"div",7),l.Ib(45,"img",15),l.Lb(),l.Mb(46,"div",9),l.hc(47," Xem "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb())},styles:[""]}),i})();function M(i,t){if(1&i){const i=l.Nb();l.Mb(0,"a",7),l.Tb("click",(function(){l.dc(i);const e=t.index;return l.Vb(),l.cc(7).slickGoTo(e)})),l.hc(1),l.Lb()}if(2&i){const i=t.$implicit,e=t.index,n=l.Vb();l.zb("active",e===n.currentSlide),l.xb(1),l.ic(null==i?null:i.bigTitle)}}function k(i,t){if(1&i&&(l.Mb(0,"div",8),l.Mb(1,"div",9),l.Ib(2,"img",10),l.Lb(),l.Ib(3,"div",11),l.Mb(4,"div",12),l.Mb(5,"h3"),l.hc(6),l.Lb(),l.Mb(7,"p"),l.hc(8),l.Lb(),l.Mb(9,"a",13),l.hc(10),l.Lb(),l.Lb(),l.Lb()),2&i){const i=t.$implicit;l.xb(2),l.Yb("src",null==i?null:i.imageUrl,l.ec),l.xb(4),l.ic(null==i?null:i.bigTitle),l.xb(2),l.ic(null==i?null:i.smallTitle),l.xb(2),l.ic(null==i?null:i.buttonTitle)}}let y=(()=>{class i{constructor(){this.currentSlide=0,this.slideProgram=[{bigTitle:"Ki\u1ec3m tra & Ph\xf2ng ng\u1eeba Nha khoa",smallTitle:"V\u1edbi hai gh\u1ebf nha khoa c\u1ee1 tr\u1ebb em tr\xean t\xe0u, Colgate's Bright Smiles, Bright Futures\xae s\u1ebd s\xe0ng l\u1ecdc hai tr\u1ebb em c\xf9ng m\u1ed9t l\xfac.",hasLable:!0,imageUrl:"assets/img/p-1.jpg",link:"#",buttonTitle:"L\xean l\u1ecbch"},{bigTitle:"T\xecnh nguy\u1ec7n vi\xean",smallTitle:"B\u1ea1n mu\u1ed1n tr\u1edf th\xe0nh t\xecnh nguy\u1ec7n vi\xean c\u1ee7a Colgate Bright Smiles, Bright Futures? B\u1eaft \u0111\u1ea7u b\u1eb1ng c\xe1ch \u0111i\u1ec1n v\xe0o bi\u1ec3u m\u1eabu quan t\xe2m t\xecnh nguy\u1ec7n c\u1ee7a ch\xfang t\xf4i.",hasLable:!1,imageUrl:"assets/img/p-2.jpg",link:"#",buttonTitle:"B\u1eaft \u0111\u1ea7u"}],this.slideConfig={dots:!1,infinite:!0,variableWidth:!0}}ngOnInit(){}beforeChange(i){this.currentSlide=i.nextSlide}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Bb({type:i,selectors:[["app-resource-program-section"]],decls:9,vars:3,consts:[[1,"section-outside"],[1,"container"],[1,"nav-colgate","nav","nav-pills","nav-justified"],["class","nav-link","href","javascript:;",3,"active","click",4,"ngFor","ngForOf"],[1,"carousel","programs","slider",3,"config","beforeChange"],["slickModal","slick-carousel"],["ngxSlickItem","","class","program-item",4,"ngFor","ngForOf"],["href","javascript:;",1,"nav-link",3,"click"],["ngxSlickItem","",1,"program-item"],[1,"thumbnail"],["width","100%",3,"src"],[1,"overlay"],[1,"content"],["routerLink","slide?.link",1,"btn","btn-light","btn-round"]],template:function(i,t){1&i&&(l.Mb(0,"div",0),l.Mb(1,"div",1),l.Mb(2,"h2"),l.hc(3,"C\xe1c ch\u01b0\u01a1ng tr\xecnh"),l.Lb(),l.Mb(4,"nav",2),l.gc(5,M,2,3,"a",3),l.Lb(),l.Mb(6,"ngx-slick-carousel",4,5),l.Tb("beforeChange",(function(i){return t.beforeChange(i)})),l.gc(8,k,11,4,"div",6),l.Lb(),l.Lb(),l.Lb()),2&i&&(l.xb(5),l.Yb("ngForOf",t.slideProgram),l.xb(1),l.Yb("config",t.slideConfig),l.xb(2),l.Yb("ngForOf",t.slideProgram))},directives:[n.h,b,o,s.b],styles:[""]}),i})();const I=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Bb({type:i,selectors:[["tnx-home"]],decls:27,vars:0,consts:[[1,"fix-container"],[1,"container-fluid"],[1,"gray-section","bg-gray"],[1,"section-outside"],[1,"container"],[1,"program-single-item"],[1,"thumbnail"],["width","100%","src","assets/img/p-s.jpg"],[1,"overlay"],[1,"content"],[1,"text-uppercase","m-0"],[1,"mb-2"],["href","#",1,"btn","btn-light","btn-round"]],template:function(i,t){1&i&&(l.Mb(0,"section",0),l.Mb(1,"div",1),l.Mb(2,"div",2),l.Ib(3,"app-landing-slide"),l.Ib(4,"app-resource-who-section"),l.Ib(5,"app-resource-age-section"),l.Ib(6,"app-resource-activity-section"),l.Lb(),l.Lb(),l.Ib(7,"app-resource-program-section"),l.Mb(8,"div",3),l.Mb(9,"div",4),l.Mb(10,"h2"),l.hc(11,"Cam k\u1ebft c\u1ee7a ch\xfang t\xf4i"),l.Lb(),l.Mb(12,"div",5),l.Mb(13,"div",6),l.Ib(14,"img",7),l.Lb(),l.Ib(15,"div",8),l.Mb(16,"div",9),l.Mb(17,"p",10),l.hc(18,"Gi\xe1o d\u1ee5c"),l.Ib(19,"br"),l.hc(20,"S\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng"),l.Lb(),l.Mb(21,"h5",11),l.hc(22,"Cam k\u1ebft c\u1ee7a Colgate v\u1ec1 "),l.Ib(23,"br"),l.hc(24,"Gi\xe1o d\u1ee5c S\u1ee9c kh\u1ecfe R\u0103ng mi\u1ec7ng"),l.Lb(),l.Mb(25,"a",12),l.hc(26,"T\xecm hi\u1ec3u th\xeam"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb())},directives:[d,p,L,f,y],encapsulation:2}),i})()}];let T=(()=>{class i{}return i.\u0275mod=l.Fb({type:i}),i.\u0275inj=l.Eb({factory:function(t){return new(t||i)},imports:[[s.c.forChild(I)],s.c]}),i})();var C=e("PCNd");let S=(()=>{class i{}return i.\u0275mod=l.Fb({type:i}),i.\u0275inj=l.Eb({factory:function(t){return new(t||i)},imports:[[n.b,T,C.a,a]]}),i})()}}]);