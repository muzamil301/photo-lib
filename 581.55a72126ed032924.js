"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[581],{581:(b,g,i)=>{i.r(g),i.d(g,{SinglePhotoPageModule:()=>S});var a=i(4556),c=i(6895),u=i(433),r=i(1407),d=i(655),m=i(1581),h=i(727),t=i(8256),v=i(3195);const f=[{path:"",component:(()=>{class o{constructor(e,s,l,y){this.galleryService=e,this.activatedRoute=s,this.route=l,this.toastController=y,this.favtImagesData=[],this.basepath=m.GW,this.id=0,this.favtDataSubscription=new h.w0,this.activatedRoute.paramMap.subscribe(F=>{const I=F.get("id");this.id=Number(I)})}ngOnInit(){this.loadFavtImagesList()}removeFromFavtList(e){if(e){const s=this.favtImagesData.filter(l=>Number(l.id)!==e);this.galleryService.updateFavtList(s),this.presentToast("Item removed from favorite"),this.route.navigate(["gallery/favorites"])}}presentToast(e){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:e,duration:800,position:"bottom"})).present()})}loadFavtImagesList(){this.galleryService.getFavtImages().subscribe(e=>{this.favtImagesData=e})}ngOnDestroy(){this.favtDataSubscription.unsubscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.r),t.Y36(r.gz),t.Y36(r.F0),t.Y36(a.yF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-photos"]],decls:9,vars:1,consts:[[1,"ion-padding"],[1,"ion-align-items-center"],["size","12",1,"ion-text-center"],["alt","image",3,"src"],[1,"ion-text-center"],["color","light",3,"click"],["color","primary","slot","start","name","heart-dislike-outline"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"ion-col",4)(6,"ion-button",5),t.NdJ("click",function(){return s.removeFromFavtList(s.id)}),t._UZ(7,"ion-icon",6),t._uU(8," Remove from favorites "),t.qZA()()()()()),2&e&&(t.xp6(4),t.Q6J("src",s.basepath+"/id/"+s.id+"/500/500",t.LSH))},dependencies:[a.YG,a.wI,a.W2,a.jY,a.gu,a.Nd],styles:["img[_ngcontent-%COMP%]{border-radius:20px}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.Bz.forChild(f),r.Bz]}),o})();var p=i(4466);let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.Pc,c.ez,u.u5,P,p.m]}),o})()}}]);