(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2L7j":function(t,e,n){"use strict";n.r(e),n.d(e,"ArticleModule",(function(){return O}));var r=n("ofXK"),i=n("tyNb"),o=n("fXoL"),s=n("mrSG"),c=n("eIep"),a=n("no3z"),p=n("8atc"),u=n("tk/3"),l=function(t){function e(e,n){var r=t.call(this,e)||this;return r.hostUrl=n,r.setEndpoint(n,"/wp/v2/posts"),r}return Object(s.c)(e,t),e.prototype.getPosts=function(t){var e=this;return t._fields="id,excerpt,title,modified,status,slug,categories",this.httpClient.get(this.createUrl(""),{observe:"response",params:this.createParams(t)}).pipe(Object(c.a)((function(t){return e.getWPQueryResult(t)})))},e.prototype.getPostById=function(t){return this.httpClient.get(this.createUrl(t),{params:this.createParams({_fields:"id,title,content,modified,status,categories,tags"})})},e.\u0275fac=function(t){return new(t||e)(o.Tb(u.b),o.Tb(p.b))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(a.a),b=function(t){function e(e,n){var r=t.call(this,e)||this;return r.hostUrl=n,r.setEndpoint(n,"/wp/v2/categories"),r}return Object(s.c)(e,t),e.prototype.queryCategories=function(t){var e=this;return t._fields="id,name,slug,description,parent",this.httpClient.get(this.createUrl(""),{observe:"response",params:this.createParams(t)}).pipe(Object(c.a)((function(t){return e.getWPQueryResult(t)})))},e.prototype.getAllCategories=function(){return this.httpClient.get(this.createUrl(""),{params:this.createParams({_fields:"id,name,slug,description,parent"})})},e.\u0275fac=function(t){return new(t||e)(o.Tb(u.b),o.Tb(p.b))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(a.a);function f(t,e){if(1&t&&(o.Pb(0,"li"),o.Pb(1,"a",3),o.xc(2),o.Ob(),o.Ob()),2&t){var n=e.$implicit;o.xb(1),o.dc("routerLink",n.slug),o.xb(1),o.yc(n.name)}}var d=function(t,e){return["p",t,e]};function h(t,e){if(1&t&&(o.Pb(0,"div",4),o.Pb(1,"h3"),o.Pb(2,"a",3),o.xc(3),o.Ob(),o.Ob(),o.Pb(4,"div"),o.xc(5),o.Ob(),o.Ob()),2&t){var n=e.$implicit;o.xb(2),o.dc("routerLink",o.hc(3,d,n.slug,n.id)),o.xb(1),o.yc(n.title.rendered),o.xb(2),o.yc(n.excerpt.rendered)}}function g(t,e){if(1&t&&(o.Pb(0,"a",1),o.xc(1),o.Ob()),2&t){var n=e.$implicit;o.xb(1),o.yc(n)}}var v=[{path:"",component:function(){function t(t,e){this.postApi=t,this.categoryApi=e}return t.prototype.ngOnInit=function(){var t=this;this.postApi.getPosts({offset:0,per_page:10}).subscribe((function(e){t.posts=e.items})),this.categoryApi.getAllCategories().subscribe((function(e){t.categories=e}))},t.\u0275fac=function(e){return new(e||t)(o.Jb(l),o.Jb(b))},t.\u0275cmp=o.Db({type:t,selectors:[["tnx-article"]],decls:7,vars:2,consts:[[4,"ngFor","ngForOf"],[1,"list-article"],["class","article",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"article"]],template:function(t,e){1&t&&(o.Pb(0,"h2"),o.xc(1,"List Posts"),o.Ob(),o.Pb(2,"nav"),o.Pb(3,"ul"),o.vc(4,f,3,2,"li",0),o.Ob(),o.Ob(),o.Pb(5,"div",1),o.vc(6,h,6,6,"div",2),o.Ob()),2&t&&(o.xb(4),o.dc("ngForOf",e.categories),o.xb(2),o.dc("ngForOf",e.posts))},directives:[r.k,i.c],encapsulation:2}),t}()},{path:"p/:slug/:id",component:function(){function t(t,e){this.activeRouter=t,this.postApi=e}return t.prototype.ngOnInit=function(){var t=this;this.postApi.getPostById(this.activeRouter.snapshot.params.id).subscribe((function(e){t.post=e}))},t.\u0275fac=function(e){return new(e||t)(o.Jb(i.a),o.Jb(l))},t.\u0275cmp=o.Db({type:t,selectors:[["tnx-post-detail"]],decls:7,vars:3,consts:[["href","",4,"ngFor","ngForOf"],["href",""]],template:function(t,e){1&t&&(o.Pb(0,"h1"),o.xc(1),o.Ob(),o.Pb(2,"div"),o.xc(3),o.Ob(),o.Pb(4,"div"),o.xc(5,"Tags: "),o.vc(6,g,2,1,"a",0),o.Ob()),2&t&&(o.xb(1),o.yc(null==e.post||null==e.post.title?null:e.post.title.rendered),o.xb(2),o.zc(" ",null==e.post||null==e.post.content?null:e.post.content.rendered,"\n"),o.xb(3),o.dc("ngForOf",null==e.post?null:e.post.tags))},directives:[r.k],styles:[""]}),t}()}],m=function(){function t(){}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(v)],i.d]}),t}(),y=n("PCNd"),O=function(){function t(){}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[r.c,m,y.a]]}),t}()}}]);