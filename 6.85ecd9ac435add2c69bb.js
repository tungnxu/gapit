(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rUUp:function(t,n,i){"use strict";i.r(n),i.d(n,"CommitmentModule",(function(){return s}));var c=i("ofXK"),e=i("tyNb"),r=i("fXoL"),h=i("K3ix"),a=function(){function t(t,n){this.elementRef=t,this.renderer=n,this.startNum=0,this.timestamp=0,this.duration=.3}return t.prototype.incNbrRec=function(t,n,i){var c=this;this.elementRef.nativeElement.innerText=Number(t).toLocaleString("en-GB"),t<n?this.timeout=setTimeout((function(){c.incNbrRec(t+Number((c.timestamp/100).toFixed(0)),n,i)}),10*this.duration):t>n&&(this.timeout=setTimeout((function(){c.incNbrRec(t-Number((c.timestamp/100).toFixed(0)),n,i)}),10*this.duration))},t.prototype.changeNumber=function(t){clearTimeout(this.timeout),this.endNumber=t,this.timestamp=Math.abs(this.endNumber-this.startNum),t&&(this.incNbrRec(this.startNum,this.endNumber,this.elementRef.nativeElement),this.startNum=this.endNumber)},t.\u0275fac=function(n){return new(n||t)(r.Jb(r.l),r.Jb(r.D))},t.\u0275dir=r.Eb({type:t,selectors:[["","countAnimation",""]],inputs:{startNum:"startNum",duration:"duration"},exportAs:["countAnimation"]}),t}(),o=["ca"];function g(t,n){if(1&t){var i=r.Qb();r.Pb(0,"a",31),r.Wb("click",(function(){r.nc(i);var t=n.$implicit;return r.Yb().getDataChild(t.year)})),r.vc(1),r.Ob()}if(2&t){var c=n.$implicit,e=n.last,h=r.Yb();r.Bb("active",c===h.currentData),r.xb(1),r.yc("",null==c?null:c.year," ",e?"m\u1ee5c ti\xeau":"","")}}function m(t,n){1&t&&(r.Pb(0,"div",32),r.Kb(1,"iframe",33),r.Ob())}var b=[{path:"",component:function(){function t(t){this.modalService=t,this.dataChilren=[{year:2012,numOfChild:1e5},{year:2013,numOfChild:13e4},{year:2014,numOfChild:32e4},{year:2015,numOfChild:7e5},{year:2016,numOfChild:1e6},{year:2017,numOfChild:18e5},{year:2018,numOfChild:48e5},{year:2025,numOfChild:13e8}]}return t.prototype.ngOnInit=function(){this.getDataChild(2025)},t.prototype.getDataChild=function(t){this.currentData=this.dataChilren.find((function(n){return n.year===t})),this.countAnimation.changeNumber(this.currentData.numOfChild)},t.prototype.openModal=function(t){this.modalRef=this.modalService.show(t,Object.assign({initialState:{backdrop:!0,ignoreBackdropClick:!0}},{class:"modal-lg modal-dialog-centered"}))},t.\u0275fac=function(n){return new(n||t)(r.Jb(h.b))},t.\u0275cmp=r.Db({type:t,selectors:[["app-commitment"]],viewQuery:function(t,n){var i;1&t&&r.rc(o,!0),2&t&&r.kc(i=r.Xb())&&(n.countAnimation=i.first)},decls:70,vars:1,consts:[[1,"fix-container"],[1,"container-fluid"],[1,"main-header","commit"],[1,"overlay"],["src","assets/img/logo-label.png","alt","logo-label",1,"logo-smile"],[1,"header-content"],["href","",1,"btn","btn-sm","btn-light"],[1,"section-outside"],[1,"container"],[1,"text-primary"],[1,"container-fluid","section-count"],["width","100%","src","assets/img/commit-2.jpg"],["countAnimation",""],["ca","countAnimation"],[1,"section-outside","pt-0"],[1,"nav-colgate","nav","nav-pills","nav-justified","justify-content-around"],["class","nav-link ","href","javascript:;",3,"active","click",4,"ngFor","ngForOf"],[1,"container","my-5"],[1,"section-content"],["href","#",1,"btn","btn-light","text-primary"],[1,"row","no-gutters","video-section"],[1,"col-md"],[1,"video-thumb",3,"click"],["aria-hidden","true",1,"fa","fa-play-circle","fa-4x"],[1,"col-md","text-white","d-flex","justify-content-center","align-items-center",2,"background-color","#8F1F1D","height","500px"],[1,"video-des","w-50"],[1,"btn","btn-light","text-primary","btn-sm",3,"click"],[1,"smile"],[1,"content"],["href","#",1,"btn","btn-light","btn-sm","text-primary"],["template",""],["href","javascript:;",1,"nav-link",3,"click"],[1,"modal-body"],["width","100%","height","415","src","https://www.youtube-nocookie.com/embed/yA_arKOlslk","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""]],template:function(t,n){if(1&t){var i=r.Qb();r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Kb(3,"div",3),r.Kb(4,"img",4),r.Pb(5,"div",5),r.Pb(6,"h1"),r.vc(7,"Cam k\u1ebft c\u1ee7a ch\xfang t\xf4i trong vi\u1ec7c gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng"),r.Ob(),r.Pb(8,"a",6),r.vc(9,"Xem c\xe1c video T\u1ed5ng quan"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(10,"div",7),r.Pb(11,"div",8),r.Pb(12,"h2",9),r.vc(13,"Colgate Ti\u1ebfp c\u1eadn Tr\u1ebb em C\xf3 nhu c\u1ea7u tr\xean To\xe0n c\u1ea7u b\u1eb1ng S\u1ee9c m\u1ea1nh c\u1ee7a N\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1."),r.Ob(),r.Pb(14,"p"),r.vc(15,"Tr\xean kh\u1eafp th\u1ebf gi\u1edbi, nhi\u1ec1u tr\u1ebb em kh\xf4ng \u0111\u01b0\u1ee3c ti\u1ebfp c\u1eadn v\u1edbi d\u1ecbch v\u1ee5 ch\u0103m s\xf3c r\u0103ng mi\u1ec7ng c\u01a1 b\u1ea3n v\xe0 thi\u1ebfu s\u1ef1 gi\xe1o d\u1ee5c c\u1ea7n thi\u1ebft \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c n\u1ee5 c\u01b0\u1eddi kh\u1ecfe m\u1ea1nh. Colgate Bright Smiles, Bright Futures\xae ti\u1ebfp c\u1eadn tr\u1ebb em tr\xean to\xe0n th\u1ebf gi\u1edbi v\u1edbi d\u1ecbch v\u1ee5 kh\xe1m r\u0103ng v\xe0 gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng mi\u1ec5n ph\xed. Cam k\u1ebft c\u1ee7a Colgate trong vi\u1ec7c x\xe2y d\u1ef1ng th\xf3i quen l\xe0nh m\u1ea1nh su\u1ed1t \u0111\u1eddi mang l\u1ea1i cho tr\u1ebb em l\xf2ng t\u1ef1 tr\u1ecdng ng\xe0y c\xe0ng l\u1edbn v\xe0 n\u1ec1n t\u1ea3ng \u0111\u1ec3 th\xe0nh c\xf4ng - \u0111\xf3 l\xe0 S\u1ee9c m\u1ea1nh c\u1ee7a N\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1."),r.Ob(),r.Ob(),r.Ob(),r.Pb(16,"div",7),r.Pb(17,"div",10),r.Kb(18,"img",11),r.Pb(19,"h2"),r.vc(20,"Ti\u1ebfp c\u1eadn h\xe0ng t\u1ef7 tr\u1ebb em tr\xean kh\u1eafp th\u1ebf gi\u1edbi"),r.Ob(),r.Kb(21,"h1",12,13),r.Ob(),r.Ob(),r.Pb(23,"div",14),r.Pb(24,"div",1),r.Pb(25,"nav",15),r.tc(26,g,2,4,"a",16),r.Ob(),r.Ob(),r.Pb(27,"div",17),r.Pb(28,"div",18),r.Pb(29,"h3",9),r.vc(30,"Ph\u1ea1m vi to\xe0n c\u1ea7u c\u1ee7a Colgate"),r.Ob(),r.Pb(31,"p"),r.vc(32,"Tr\xean kh\u1eafp th\u1ebf gi\u1edbi, nhi\u1ec1u tr\u1ebb em kh\xf4ng \u0111\u01b0\u1ee3c ti\u1ebfp c\u1eadn v\u1edbi d\u1ecbch v\u1ee5 ch\u0103m s\xf3c r\u0103ng mi\u1ec7ng c\u01a1 b\u1ea3n v\xe0 thi\u1ebfu s\u1ef1 gi\xe1o d\u1ee5c c\u1ea7n thi\u1ebft \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c n\u1ee5 c\u01b0\u1eddi kh\u1ecfe m\u1ea1nh. Colgate Bright Smiles, Bright Futures\xae ti\u1ebfp c\u1eadn tr\u1ebb em tr\xean to\xe0n th\u1ebf gi\u1edbi v\u1edbi d\u1ecbch v\u1ee5 kh\xe1m r\u0103ng v\xe0 gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng mi\u1ec5n ph\xed. Cam k\u1ebft c\u1ee7a Colgate trong vi\u1ec7c x\xe2y d\u1ef1ng th\xf3i quen l\xe0nh m\u1ea1nh su\u1ed1t \u0111\u1eddi mang l\u1ea1i cho tr\u1ebb em l\xf2ng t\u1ef1 tr\u1ecdng ng\xe0y c\xe0ng l\u1edbn v\xe0 n\u1ec1n t\u1ea3ng \u0111\u1ec3 th\xe0nh c\xf4ng - \u0111\xf3 l\xe0 S\u1ee9c m\u1ea1nh c\u1ee7a N\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1."),r.Ob(),r.Kb(33,"br"),r.Pb(34,"h3",9),r.vc(35,"Ph\u1ea1m vi to\xe0n c\u1ea7u c\u1ee7a Colgate"),r.Ob(),r.Pb(36,"p"),r.vc(37,"N\u1ec1n t\u1ea3ng c\u1ee7a Colgate Bright Smiles, Bright Futures\xae l\xe0 ch\u01b0\u01a1ng tr\xecnh gi\xe1o d\u1ee5c t\u1eebng \u0111o\u1ea1t gi\u1ea3i th\u01b0\u1edfng. \u0110\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi c\xe1c chuy\xean gia to\xe0n c\u1ea7u, t\xe0i li\u1ec7u gi\xe1o d\u1ee5c \u0111a v\u0103n h\xf3a c\u1ee7a Colgate gi\xfap minh h\u1ecda c\xe1ch duy tr\xec r\u0103ng v\xe0 n\u01b0\u1edbu kh\u1ecfe m\u1ea1nh. T\u1ea1i Hoa K\u1ef3, ch\u01b0\u01a1ng tr\xecnh gi\u1ea3ng d\u1ea1y trong l\u1edbp h\u1ecdc c\u1ee7a Colgate ti\u1ebfp c\u1eadn g\u1ea7n 9 tr\xean 10 h\u1ecdc sinh m\u1eabu gi\xe1o m\u1ed7i n\u0103m, 3,5 tri\u1ec7u tr\u1ebb em \u1edf t\u1ea5t c\u1ea3 50 ti\u1ec3u bang v\xe0 h\u01a1n 10 tri\u1ec7u tr\u1ebb em th\xf4ng qua ch\u01b0\u01a1ng tr\xecnh xe van c\u01a1 s\u1edf xe nha khoa di \u0111\u1ed9ng c\u1ee7a ch\xfang t\xf4i. Ng\xe0y nay, ch\u01b0\u01a1ng tr\xecnh gi\xe1o d\u1ee5c Colgate Bright Smiles, Bright Futures\xae c\xf3 s\u1eb5n b\u1eb1ng 30 ng\xf4n ng\u1eef v\xe0 \u1edf nhi\u1ec1u qu\u1ed1c gia, \u0111\xe3 tr\u1edf th\xe0nh m\u1ed9t ph\u1ea7n c\u1ee7a ch\u01b0\u01a1ng tr\xecnh gi\u1ea3ng d\u1ea1y th\u01b0\u1eddng xuy\xean t\u1ea1i tr\u01b0\u1eddng h\u1ecdc."),r.Ob(),r.Kb(38,"br"),r.Pb(39,"h3",9),r.vc(40,"Ph\u1ea1m vi to\xe0n c\u1ea7u c\u1ee7a Colgate"),r.Ob(),r.Pb(41,"p"),r.vc(42,"Tr\xean kh\u1eafp th\u1ebf gi\u1edbi, nhi\u1ec1u tr\u1ebb em kh\xf4ng \u0111\u01b0\u1ee3c ti\u1ebfp c\u1eadn v\u1edbi d\u1ecbch v\u1ee5 ch\u0103m s\xf3c r\u0103ng mi\u1ec7ng c\u01a1 b\u1ea3n v\xe0 thi\u1ebfu s\u1ef1 gi\xe1o d\u1ee5c c\u1ea7n thi\u1ebft \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c n\u1ee5 c\u01b0\u1eddi kh\u1ecfe m\u1ea1nh. Colgate Bright Smiles, Bright Futures\xae ti\u1ebfp c\u1eadn tr\u1ebb em tr\xean to\xe0n th\u1ebf gi\u1edbi v\u1edbi d\u1ecbch v\u1ee5 kh\xe1m r\u0103ng v\xe0 gi\xe1o d\u1ee5c s\u1ee9c kh\u1ecfe r\u0103ng mi\u1ec7ng mi\u1ec5n ph\xed. Cam k\u1ebft c\u1ee7a Colgate trong vi\u1ec7c x\xe2y d\u1ef1ng th\xf3i quen l\xe0nh m\u1ea1nh su\u1ed1t \u0111\u1eddi mang l\u1ea1i cho tr\u1ebb em l\xf2ng t\u1ef1 tr\u1ecdng ng\xe0y c\xe0ng l\u1edbn v\xe0 n\u1ec1n t\u1ea3ng \u0111\u1ec3 th\xe0nh c\xf4ng - \u0111\xf3 l\xe0 S\u1ee9c m\u1ea1nh c\u1ee7a N\u1ee5 c\u01b0\u1eddi r\u1ea1ng r\u1ee1."),r.Ob(),r.Ob(),r.Pb(43,"a",19),r.vc(44,"Xem t\u1ea5t c\u1ea3 c\xe1c ch\u01b0\u01a1ng tr\xecnh c\u1ed9ng \u0111\u1ed3ng c\u1ee7a ch\xfang t\xf4i"),r.Ob(),r.Ob(),r.Ob(),r.Pb(45,"div",14),r.Pb(46,"div",1),r.Pb(47,"div",20),r.Pb(48,"div",21),r.Pb(49,"div",22),r.Wb("click",(function(){r.nc(i);var t=r.lc(69);return n.openModal(t)})),r.Kb(50,"i",23),r.Ob(),r.Ob(),r.Pb(51,"div",24),r.Pb(52,"div",25),r.Pb(53,"h3"),r.vc(54,"L\xe0m r\u1ea1ng r\u1ee1 c\u1ed9ng \u0111\u1ed3ng c\u1ee7a ch\xfang ta M\u1ed9t n\u1ee5 c\u01b0\u1eddi t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m"),r.Ob(),r.Pb(55,"p"),r.vc(56,"H\xe3y \u0111\u1ebfn th\u0103m m\u1ed9t s\u1ed1 c\u1ed9ng \u0111\u1ed3ng, tr\u1ebb em, nha s\u0129 v\xe0 t\xecnh nguy\u1ec7n vi\xean, nh\u1eefng ng\u01b0\u1eddi \u0111\xe3 gi\xfap t\u1ea1o n\xean th\xe0nh c\xf4ng cho xe van Colgate Bright Smiles, Bright Futures\xae c\u1ee7a ch\xfang t\xf4i, v\xe0 t\u1eadn m\u1eaft nghe c\xe1ch kh\xe1m r\u0103ng \u0111\u01a1n gi\u1ea3n c\xf3 th\u1ec3 gi\xfap tr\u1ebb c\xf3 m\u1ed9t t\u01b0\u01a1ng lai kh\u1ecfe m\u1ea1nh v\xe0 t\u01b0\u01a1i s\xe1ng."),r.Ob(),r.Pb(57,"button",26),r.Wb("click",(function(){r.nc(i);var t=r.lc(69);return n.openModal(t)})),r.vc(58,"Xem video"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(59,"div",14),r.Pb(60,"div",27),r.Pb(61,"div",28),r.Pb(62,"h1"),r.vc(63,"X\xe2y d\u1ef1ng n\u1ee5 c\u01b0\u1eddi"),r.Kb(64,"br"),r.vc(65," trong h\u01a1n 200 n\u0103m"),r.Ob(),r.Pb(66,"a",29),r.vc(67,"C\xe2u chuy\u1ec7n c\u1ee7a ch\xfang t\xf4i"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.tc(68,m,2,0,"ng-template",null,30,r.uc)}2&t&&(r.xb(26),r.dc("ngForOf",n.dataChilren))},directives:[a,c.k],encapsulation:2}),t}()}],u=function(){function t(){}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[e.d.forChild(b)],e.d]}),t}(),l=i("PCNd"),s=function(){function t(){}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[c.c,u,l.a]]}),t}()}}]);