(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{iydT:function(i,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return F}));var e=n("ofXK"),r=n("tyNb"),c=n("fXoL"),l=n("eSVu");function a(i,t){1&i&&c.Kb(0,"img",8)}var s=function(i){return{"background-image":i}};function b(i,t){if(1&i&&(c.Pb(0,"div",3),c.Pb(1,"div",4),c.Kb(2,"div",5),c.vc(3,a,1,0,"img",6),c.Pb(4,"div",7),c.Pb(5,"h6"),c.xc(6),c.Ob(),c.Pb(7,"h1"),c.xc(8),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i){var n=t.$implicit;c.xb(1),c.dc("ngStyle",c.gc(4,s,"url("+(null==n?null:n.imageUrl)+")")),c.xb(2),c.dc("ngIf",null==n?null:n.hasLable),c.xb(3),c.yc(null==n?null:n.smallTitle),c.xb(2),c.yc(null==n?null:n.bigTitle)}}var o=function(){function i(){this.slideLanding=[{bigTitle:"T\u1ea1o n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1, t\u01b0\u01a1ng lai t\u01b0\u01a1i s\xe1ng th\xf4ng qua gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng",smallTitle:"GI\xc1O D\u1ee4C S\u1ee8C KH\u1eceE HAY",hasLable:!0,imageUrl:"assets/img/hero-img.jpg",link:"#"},{bigTitle:"T\u1ea1o n\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1, t\u01b0\u01a1ng lai t\u01b0\u01a1i s\xe1ng th\xf4ng qua gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng",smallTitle:"Ti\xeau \u0111\u1ec1 slide nh\u1ecf",hasLable:!1,imageUrl:"assets/img/smile.jpg",link:"#"}],this.slideConfig={dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:2e3,fade:!0,cssEase:"linear"}}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-landing-slide"]],decls:3,vars:2,consts:[[1,"carousel","main-slide","slider",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide-item slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide-item","slide"],[1,"main-header",3,"ngStyle"],[1,"overlay"],["class","logo-smile","src","assets/img/logo-label.png","alt","logo-label",4,"ngIf"],[1,"header-content"],["src","assets/img/logo-label.png","alt","logo-label",1,"logo-smile"]],template:function(i,t){1&i&&(c.Pb(0,"ngx-slick-carousel",0,1),c.vc(2,b,9,6,"div",2),c.Ob()),2&i&&(c.dc("config",t.slideConfig),c.xb(2),c.dc("ngForOf",t.slideLanding))},directives:[l.a,e.k,l.c,e.m,e.l],styles:[""]}),i}(),u=n("rdL6"),g=n("t5Rq");function d(i,t){if(1&i){var n=c.Qb();c.Pb(0,"a",3),c.Wb("click",(function(){c.oc(n);var i=t.$implicit;return c.Yb().getCategory(i)})),c.xc(1),c.Ob()}if(2&i){var e=t.$implicit,r=c.Yb();c.Bb("active",(null==r.currentCat?null:r.currentCat.id)==(null==e?null:e.id)),c.xb(1),c.yc(null==e?null:e.name)}}var m=function(i,t,n){return["/material/detail",i,t,n]};function f(i,t){if(1&i&&(c.Pb(0,"div",12),c.Pb(1,"div",13),c.Pb(2,"a",14),c.Pb(3,"div",15),c.Kb(4,"img",16),c.Ob(),c.Ob(),c.Pb(5,"div",17),c.Pb(6,"div",18),c.xc(7),c.Ob(),c.Pb(8,"a",14),c.Kb(9,"i",19),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i){var n,e,r=t.$implicit,l=c.Yb(2);c.xb(2),c.ec("title",null==r||null==r.title?null:r.title.rendered),c.dc("routerLink",c.ic(6,m,null==r?null:r.slug,null==(n=l.getCategoryByType(r))?null:n.slug,null==r?null:r.id)),c.xb(2),c.dc("src",null==r?null:r.thumbnailUrl,c.rc),c.xb(3),c.yc(null==r||null==r.title?null:r.title.rendered),c.xb(1),c.ec("title",null==r||null==r.title?null:r.title.rendered),c.dc("routerLink",c.ic(10,m,null==r?null:r.slug,null==(e=l.getCategoryByType(r))?null:e.slug,null==r?null:r.id))}}function v(i,t){if(1&i){var n=c.Qb();c.Nb(0),c.Pb(1,"ngx-slick-carousel",9,10),c.Wb("init",(function(i){return c.oc(n),c.Yb().slickInit(i)})),c.vc(3,f,10,14,"div",11),c.Ob(),c.Mb()}if(2&i){var e=c.Yb();c.xb(1),c.dc("config",e.slideConfig),c.xb(2),c.dc("ngForOf",e.currentResourceList)}}var h=function(){function i(i,t){this.materialApi=i,this.categoryMaterial=t,this.currentResourceList=[],this.slideConfig={dots:!1,infinite:!1,variableWidth:!0}}return i.prototype.ngOnInit=function(){var i=this;this.categoryMaterial.queryCategories({parent:5}).subscribe((function(t){i.whoCategoryList=t.items,i.getBest()}))},i.prototype.removeSlide=function(){this.currentResourceList.length=0},i.prototype.getBest=function(){var i=this;this.currentCat=null,this.materialApi.getMaterials({offset:0,per_page:8},"likeCount").subscribe((function(t){i.currentResourceList=t.items}))},i.prototype.getCategoryByType=function(i){return i.categories.find((function(i){return 2===i.parent}))},i.prototype.getCategory=function(i){var t=this;this.currentCat=i,this.slickModal&&this.slickModal.unslick(),this.currentResourceList=[],this.materialApi.getMaterials({offset:0,per_page:8,material_categories:this.currentCat.id}).subscribe((function(i){t.currentResourceList=i.items}))},i.prototype.slickInit=function(i){this.slickModal=i.slick},i.\u0275fac=function(t){return new(t||i)(c.Jb(u.a),c.Jb(g.a))},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-who-section"]],decls:13,vars:5,consts:[[1,"resource-section"],[1,"container"],[1,"nav-colgate","nav","nav-pills","nav-justified"],["href","javascript:;",1,"nav-link","text-bold",3,"click"],["class","nav-link text-bold","href","javascript:;",3,"active","click",4,"ngFor","ngForOf"],[2,"min-height","300px"],[4,"ngIf"],[1,"btn","btn-light",3,"routerLink"],["aria-hidden","true",1,"fa","fa-angle-right","fa-2x","ml-2"],[1,"carousel","list-resource-card","slider",3,"config","init"],["slickModal","slick-carousel"],["ngxSlickItem","","class","resource-card-wrapper",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"resource-card-wrapper"],[1,"resource-card"],[1,"action",3,"routerLink","title"],[1,"resource-thumbnail"],[3,"src"],[1,"resource-card-des"],[1,"title"],["aria-hidden","true",1,"fa","fa-angle-right"]],template:function(i,t){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h2"),c.xc(3,"T\xe0i nguy\xean"),c.Ob(),c.Pb(4,"nav",2),c.Pb(5,"a",3),c.Wb("click",(function(){return t.getBest()})),c.xc(6,"H\xe0ng \u0111\u1ea7u"),c.Ob(),c.vc(7,d,2,3,"a",4),c.Ob(),c.Pb(8,"div",5),c.vc(9,v,4,2,"ng-container",6),c.Ob(),c.Pb(10,"a",7),c.xc(11,"T\u1ea5t c\u1ea3 t\xe0i nguy\xean "),c.Kb(12,"i",8),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(5),c.Bb("active",null==t.currentCat),c.xb(2),c.dc("ngForOf",t.whoCategoryList),c.xb(2),c.dc("ngIf",(null==t.currentResourceList?null:t.currentResourceList.length)>0),c.xb(1),c.dc("routerLink","/material"))},directives:[e.k,e.l,r.c,l.a,l.c],styles:[""]}),i}(),p=function(){return["/material/by-age/11"]},O=function(){return["/material/by-age/12"]},P=function(){return["/material/by-age/13"]},y=function(){return["/material/by-age/14"]},k=function(){return["/material/by-age/15"]},x=function(){function i(){}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-age-section"]],decls:62,vars:20,consts:[[1,"resource-section"],[1,"container"],[1,"mb-4"],[1,"resource-group"],[1,"row","no-gutters"],[1,"col-md"],[3,"routerLink"],[1,"resource-group-item"],[1,"thumbnail"],["width","100%","src","assets/img/so-sinh.jpg"],[1,"overlay"],[1,"content"],["title","Xem chi ti\u1ebft",1,"action",3,"routerLink"],[1,"fa","fa-angle-right"],["width","100%","src","assets/img/3-4-tuoi.jpg"],["width","100%","src","assets/img/5-6-tuoi.jpg"],["width","100%","src","assets/img/7-8-tuoi.jpg"],["width","100%","src","assets/img/9-12-tuoi.jpg"]],template:function(i,t){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h4",2),c.xc(3,"T\xe0i nguy\xean theo Nh\xf3m tu\u1ed5i"),c.Ob(),c.Pb(4,"div",3),c.Pb(5,"div",4),c.Pb(6,"div",5),c.Pb(7,"a",6),c.Pb(8,"div",7),c.Pb(9,"div",8),c.Kb(10,"img",9),c.Ob(),c.Kb(11,"div",10),c.Pb(12,"div",11),c.Pb(13,"h6"),c.xc(14,"Tr\u1ebb s\u01a1 sinh v\xe0 tr\u1ebb m\u1edbi bi\u1ebft \u0111i"),c.Ob(),c.Pb(15,"a",12),c.Kb(16,"i",13),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(17,"div",5),c.Pb(18,"a",6),c.Pb(19,"div",7),c.Pb(20,"div",8),c.Kb(21,"img",14),c.Ob(),c.Kb(22,"div",10),c.Pb(23,"div",11),c.Pb(24,"h6"),c.xc(25,"3-4 Tu\u1ed5i"),c.Ob(),c.Pb(26,"a",12),c.Kb(27,"i",13),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(28,"div",5),c.Pb(29,"a",6),c.Pb(30,"div",7),c.Pb(31,"div",8),c.Kb(32,"img",15),c.Ob(),c.Kb(33,"div",10),c.Pb(34,"div",11),c.Pb(35,"h6"),c.xc(36,"5-6 Tu\u1ed5i"),c.Ob(),c.Pb(37,"a",12),c.Kb(38,"i",13),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(39,"div",4),c.Pb(40,"div",5),c.Pb(41,"a",6),c.Pb(42,"div",7),c.Pb(43,"div",8),c.Kb(44,"img",16),c.Ob(),c.Kb(45,"div",10),c.Pb(46,"div",11),c.Pb(47,"h6"),c.xc(48,"7-8 Tu\u1ed5i"),c.Ob(),c.Pb(49,"a",12),c.Kb(50,"i",13),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(51,"div",5),c.Pb(52,"a",6),c.Pb(53,"div",7),c.Pb(54,"div",8),c.Kb(55,"img",17),c.Ob(),c.Kb(56,"div",10),c.Pb(57,"div",11),c.Pb(58,"h6"),c.xc(59,"9-12 Tu\u1ed5i"),c.Ob(),c.Pb(60,"a",12),c.Kb(61,"i",13),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(7),c.dc("routerLink",c.fc(10,p)),c.xb(8),c.dc("routerLink",c.fc(11,p)),c.xb(3),c.dc("routerLink",c.fc(12,O)),c.xb(8),c.dc("routerLink",c.fc(13,O)),c.xb(3),c.dc("routerLink",c.fc(14,P)),c.xb(8),c.dc("routerLink",c.fc(15,P)),c.xb(4),c.dc("routerLink",c.fc(16,y)),c.xb(8),c.dc("routerLink",c.fc(17,y)),c.xb(3),c.dc("routerLink",c.fc(18,k)),c.xb(8),c.dc("routerLink",c.fc(19,k)))},directives:[r.c],styles:[""]}),i}();function L(i,t){if(1&i&&(c.Pb(0,"a",7),c.Pb(1,"div",8),c.Pb(2,"div",9),c.Kb(3,"img",10),c.Ob(),c.Pb(4,"div",11),c.xc(5),c.Ob(),c.Ob(),c.Ob()),2&i){var n=t.$implicit;c.dc("routerLink",null==n?null:n.link),c.xb(3),c.dc("src",null==n?null:n.image,c.rc),c.xb(2),c.zc(" ",null==n?null:n.title," ")}}var T=function(){function i(){this.activityList=[{link:"/material/by-activity/16",image:"assets/img/a-1.jpg",title:" M\xe0u s\u1eafc"},{link:"/material/by-activity/17",image:"assets/img/a-2.jpg",title:"L\u1eafng nghe"},{link:"/material/by-activity/18",image:"assets/img/a-3.jpg",title:"Ch\u01a1i"},{link:"/material/by-activity/19",image:"assets/img/a-4.jpg",title:"Ki\u1ec3m tra"},{link:"/material/by-activity/20",image:"assets/img/a-5.jpg",title:"\u0110\u1ecdc"},{link:"/material/by-activity/21",image:"assets/img/a-6.jpg",title:"H\xe1t"},{link:"/material/by-activity/22",image:"assets/img/a-7.jpg",title:"Xem"}],this.slideConfig={dots:!1,infinite:!1,variableWidth:!0}}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-activity-section"]],decls:8,vars:2,consts:[[1,"resource-section"],[1,"container"],[1,"mb-4"],[1,"resource-activity"],[1,"carousel","slider",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","",3,"routerLink",4,"ngFor","ngForOf"],["ngxSlickItem","",3,"routerLink"],[1,"resource-activity-item"],[1,"resource-thumbnail"],[3,"src"],[1,"resource-card-des"]],template:function(i,t){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h4",2),c.xc(3,"T\xe0i nguy\xean theo ho\u1ea1t \u0111\u1ed9ng"),c.Ob(),c.Pb(4,"div",3),c.Pb(5,"ngx-slick-carousel",4,5),c.vc(7,L,6,3,"a",6),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(5),c.dc("config",t.slideConfig),c.xb(2),c.dc("ngForOf",t.activityList))},directives:[l.a,e.k,r.c,l.c],styles:[""]}),i}();function C(i,t){if(1&i){var n=c.Qb();c.Pb(0,"a",7),c.Wb("click",(function(){c.oc(n);var i=t.index;return c.Yb(),c.mc(7).slickGoTo(i)})),c.xc(1),c.Ob()}if(2&i){var e=t.$implicit,r=t.index,l=c.Yb();c.Bb("active",r===l.currentSlide),c.xb(1),c.yc(null==e?null:e.bigTitle)}}function K(i,t){if(1&i&&(c.Pb(0,"div",8),c.Pb(1,"div",9),c.Kb(2,"img",10),c.Ob(),c.Kb(3,"div",11),c.Pb(4,"div",12),c.Pb(5,"h3"),c.xc(6),c.Ob(),c.Pb(7,"p"),c.xc(8),c.Ob(),c.Pb(9,"a",13),c.xc(10),c.Ob(),c.Ob(),c.Ob()),2&i){var n=t.$implicit;c.xb(2),c.dc("src",null==n?null:n.imageUrl,c.rc),c.xb(4),c.yc(null==n?null:n.bigTitle),c.xb(2),c.yc(null==n?null:n.smallTitle),c.xb(1),c.dc("routerLink",null==n?null:n.link),c.xb(1),c.yc(null==n?null:n.buttonTitle)}}var w=function(){function i(){this.currentSlide=0,this.slideProgram=[{bigTitle:"Ki\u1ec3m tra & Ph\xf2ng ng\u1eeba Nha khoa",smallTitle:"V\u1edbi hai gh\u1ebf nha khoa c\u1ee1 tr\u1ebb em tr\xean t\xe0u, Colgate's Bright Smiles, Bright Futures\xae s\u1ebd s\xe0ng l\u1ecdc hai tr\u1ebb em c\xf9ng m\u1ed9t l\xfac.",hasLable:!0,imageUrl:"assets/img/p-1.jpg",link:"#",buttonTitle:"L\xean l\u1ecbch"},{bigTitle:"T\xecnh nguy\u1ec7n vi\xean",smallTitle:"B\u1ea1n mu\u1ed1n tr\u1edf th\xe0nh t\xecnh nguy\u1ec7n vi\xean c\u1ee7a Colgate Bright Smiles, Bright Futures? B\u1eaft \u0111\u1ea7u b\u1eb1ng c\xe1ch \u0111i\u1ec1n v\xe0o bi\u1ec3u m\u1eabu quan t\xe2m t\xecnh nguy\u1ec7n c\u1ee7a ch\xfang t\xf4i.",hasLable:!1,imageUrl:"assets/img/p-2.jpg",link:"#",buttonTitle:"B\u1eaft \u0111\u1ea7u"},{bigTitle:"Th\u01b0 vi\u1ec7n tranh",smallTitle:"Th\u01b0 vi\u1ec7n tr\u01b0ng b\xe0y cu\u1ed9c thi v\u1ebd tranh Colgate Bright Smiles, Bright Futures",hasLable:!1,imageUrl:"assets/img/p-3.jpg",link:"/gallery",buttonTitle:"Kh\xe1m ph\xe1"},{bigTitle:"\u0110\u0103ng k\xfd d\u1ee5ng c\u1ee5 h\u1ecdc t\u1eadp",smallTitle:"B\u1ea1n mu\u1ed1n tr\u1edf th\xe0nh t\xecnh nguy\u1ec7n vi\xean c\u1ee7a Colgate Bright Smiles, Bright Futures? B\u1eaft \u0111\u1ea7u b\u1eb1ng c\xe1ch \u0111i\u1ec1n v\xe0o bi\u1ec3u m\u1eabu quan t\xe2m t\xecnh nguy\u1ec7n c\u1ee7a ch\xfang t\xf4i.",hasLable:!1,imageUrl:"assets/img/side.jpg",link:"/stuff-registration",buttonTitle:"\u0110\u0103ng k\xfd"}],this.slideConfig={dots:!1,infinite:!0,variableWidth:!0}}return i.prototype.ngOnInit=function(){},i.prototype.beforeChange=function(i){this.currentSlide=i.nextSlide},i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-resource-program-section"]],decls:9,vars:3,consts:[["id","program",1,"section-outside"],[1,"container"],[1,"nav-colgate","nav","nav-pills","nav-justified"],["class","nav-link","href","javascript:;",3,"active","click",4,"ngFor","ngForOf"],[1,"carousel","programs","slider",3,"config","beforeChange"],["slickModal","slick-carousel"],["ngxSlickItem","","class","program-item",4,"ngFor","ngForOf"],["href","javascript:;",1,"nav-link",3,"click"],["ngxSlickItem","",1,"program-item"],[1,"thumbnail"],["width","100%",3,"src"],[1,"overlay"],[1,"content"],[1,"btn","btn-light","btn-round",3,"routerLink"]],template:function(i,t){1&i&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"h2"),c.xc(3,"C\xe1c ch\u01b0\u01a1ng tr\xecnh"),c.Ob(),c.Pb(4,"nav",2),c.vc(5,C,2,3,"a",3),c.Ob(),c.Pb(6,"ngx-slick-carousel",4,5),c.Wb("beforeChange",(function(i){return t.beforeChange(i)})),c.vc(8,K,11,5,"div",6),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(5),c.dc("ngForOf",t.slideProgram),c.xb(1),c.dc("config",t.slideConfig),c.xb(2),c.dc("ngForOf",t.slideProgram))},directives:[e.k,l.a,l.c,r.c],styles:[""]}),i}(),j=[{path:"",component:function(){function i(){}return i.prototype.ngOnInit=function(){},i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Db({type:i,selectors:[["tnx-home"]],decls:29,vars:1,consts:[[1,"fix-container"],[1,"container-fluid"],[1,"gray-section","bg-gray"],[1,""],[1,"section-outside"],[1,"container"],[1,"program-single-item"],[1,"thumbnail"],["src","assets/img/p-s.jpg"],[1,"overlay"],[1,"content"],[1,"text-uppercase","m-0","mb-3"],[1,"mb-4"],[1,"btn","btn-light","btn-round",3,"routerLink"]],template:function(i,t){1&i&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Kb(3,"app-landing-slide"),c.Kb(4,"app-resource-who-section"),c.Kb(5,"div",3),c.Kb(6,"app-resource-age-section"),c.Kb(7,"app-resource-activity-section"),c.Ob(),c.Ob(),c.Kb(8,"app-resource-program-section"),c.Pb(9,"div",4),c.Pb(10,"div",5),c.Pb(11,"h2"),c.xc(12,"Cam k\u1ebft c\u1ee7a ch\xfang t\xf4i"),c.Ob(),c.Pb(13,"div",6),c.Pb(14,"div",7),c.Kb(15,"img",8),c.Ob(),c.Kb(16,"div",9),c.Pb(17,"div",10),c.Pb(18,"small",11),c.Pb(19,"b"),c.xc(20,"Gi\xe1o d\u1ee5c"),c.Kb(21,"br"),c.xc(22,"S\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng"),c.Ob(),c.Ob(),c.Pb(23,"h3",12),c.xc(24,"Cam k\u1ebft c\u1ee7a Colgate v\u1ec1 "),c.Kb(25,"br"),c.xc(26,"Gi\xe1o d\u1ee5c S\u1ee9c kh\u1ecfe R\u0103ng mi\u1ec7ng"),c.Ob(),c.Pb(27,"a",13),c.xc(28,"T\xecm hi\u1ec3u th\xeam"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&i&&(c.xb(27),c.dc("routerLink","/commitment"))},directives:[o,h,x,T,w,r.c],encapsulation:2}),i}()}],S=function(){function i(){}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(t){return new(t||i)},imports:[[r.d.forChild(j)],r.d]}),i}(),B=n("PCNd"),F=function(){function i(){}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(t){return new(t||i)},imports:[[e.c,S,B.a,l.b]]}),i}()}}]);