import{A as N,B as d,C as p,D as u,E,F as j,G as W,H as z,I as Y,J as B,K as V,L as G,M as $,a as T,b as F,c as g,d as I,e as A,f as R,g as D,h as x,i as M,j as S,k as Q,l as c,m as h,n as v,o as q,p as k,q as f,r,s as a,t as m,u as O,v as b,w as P,x as l,y as H,z as y}from"./chunk-IQ2KEOXK.js";var w=(()=>{let n=class n{constructor(t){this.httpClient=t,this.token="6884668324:AAGiaDDxbrzZBWjb7jxxXLZ0-wbqEdF7JhA",this.chat_id="-4069813378",this.ip="unknow user init",this.BASE_URL="unknow user",this.BASE_URL=`https://api.telegram.org/bot${this.token}`}getIp(){this.httpClient.get("https://api.ipify.org?format=json").subscribe(t=>{let e=t?.ip||"unknow user";e=e.replace(/[.]/g,""),this.ip=e.slice(-5)})}sendMessage(t){let e=new Date().toString();return this.httpClient.get(`${this.BASE_URL}/sendMessage`,{params:{chat_id:this.chat_id,text:`${this.ip}: ${t} at ${e}`}})}};n.\u0275fac=function(e){return new(e||n)(D(W))},n.\u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var ee=["wrapText"],te=["canvas"],ie=["btnNo"],ne=["btnYes"];function oe(i,n){i&1&&(r(0,"div",1),m(1,"div",10,11),a())}function se(i,n){if(i&1){let C=O();r(0,"div",12)(1,"div",13),b("click",function(){M(C);let e=P();return S(e.handleClickGift())}),m(2,"app-gift"),a()()}}function re(i,n){i&1&&(r(0,"div",14),m(1,"app-heart"),a())}function ae(i,n){if(i&1){let C=O();r(0,"div",15)(1,"div",16)(2,"h1"),l(3,"V\u1EADy c\xF2n ch\u1EDD g\xEC n\u1EEFa m\xE0 kh\xF4ng inbox cho tui bi\u1EBFt k\u1EBFt qu\u1EA3 \u0111i =))"),a(),r(4,"div",17)(5,"button",18),b("click",function(){M(C);let e=P();return S(e.close())}),l(6,"\u0110\xF3ng"),a()()()()}}function le(i,n){i&1&&(r(0,"div",1)(1,"div",19,11)(3,"h1",4),l(4,"Merry Christmas"),a(),r(5,"h1",4),l(6,"\u0110\u1ED7 Th\u1ECB Huy\u1EC1n Trang"),a(),r(7,"h1",4),l(8,"Wishing you the best"),a()()())}var ce=i=>({question:!0,hidden:i}),Z=(()=>{let n=class n{constructor(t){this.telegramService=t,this.flakes=[],this.textRender=["Merry Christmas","\u0110\u1ED7 Th\u1ECB Huy\u1EC1n Trang","Wishing you the best"],this.headElement=null,this.textElement=null,this.cursorElement=null,this.typedTextDone$=new T,this.isShowWish=!0,this.isShowGift=!1,this.isShowHeart=!1,this.isShowQuestion=!1,this.isShowPopup=!1,this.isShowWishFinal=!1,this.currentIndexOfArray=0,this.currentIndexOfText=0,this.hoverTimes=0}ngAfterViewInit(){this.typedTextDone$.subscribe(()=>{setTimeout(()=>{this.isShowGift=!0},2e3)}),this.resiszeSubscription=g(window,"resize").subscribe(t=>{this.canvasElement.nativeElement.width=document.body.clientWidth,this.canvasElement.nativeElement.height=document.body.clientHeight}),this.canvasElement.nativeElement.width=document.body.clientWidth,this.canvasElement.nativeElement.height=document.body.clientHeight,this.createCanvas(),this.snallFallInterval=setInterval(()=>{this.snowFall()},20),setTimeout(()=>{this.type()},1e3),g(this.btnNo.nativeElement,"mousemove").pipe(F(()=>this.btnNo.nativeElement.style.left||0),A(300)).subscribe(()=>{this.telegramService.sendMessage("Hover to dont care").subscribe(),this.hoverTimes<10?this.moveButton():(this.switchButton(),this.hoverTimes=0),this.hoverTimes++})}createCanvas(){this.ctx=this.canvasElement.nativeElement.getContext("2d"),this.imageElement=new Image,this.imageElement.src="./assets/images/christmas.jpg"}snowFall(){this.ctx.drawImage(this.imageElement,0,0,window.innerWidth,window.innerHeight),this.addFlakes(),this.addSnow()}addFlakes(){let t=Math.ceil(Math.random()*this.canvasElement.nativeElement.width),e=Math.ceil(Math.random()*5),o=10*Math.PI;this.flakes.push({x:t,y:0,speed:e,radius:o})}addSnow(){for(let t=0;t<this.flakes.length;t++){let e=this.flakes[t];e.y+=e.speed/2,e.y>window.innerHeight&&this.flakes.splice(t,1),this.ctx.beginPath(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.arc(e.x,e.y,e.speed*.8,0,e.radius),this.ctx.fill()}}type(){if(this.currentIndexOfArray<this.textRender.length){if(this.wrapTextElement.nativeElement.style.padding="14px 60px",this.headElement||(this.headElement=document.createElement("h1"),this.textElement=document.createElement("span"),this.cursorElement=document.createElement("span"),this.headElement.className="text-main",this.cursorElement.className="cursor",this.headElement.appendChild(this.textElement),this.headElement.appendChild(this.cursorElement),this.wrapTextElement.nativeElement.appendChild(this.headElement)),this.currentIndexOfText<this.textRender[this.currentIndexOfArray].length){let t=this.textRender[this.currentIndexOfArray].charAt(this.currentIndexOfText),e=this.headElement.querySelector("span");e.innerHTML+=t,this.currentIndexOfText++}else this.cursorElement&&this.currentIndexOfArray<this.textRender.length-1&&this.headElement.removeChild(this.cursorElement),this.headElement=null,this.currentIndexOfText=0,this.currentIndexOfArray++;setTimeout(()=>{this.type()},100)}else this.typedTextDone$.next()}handleClickGift(){this.isShowHeart=!0,this.isShowGift=!1,this.telegramService.sendMessage("Open the gift").subscribe(),setTimeout(()=>{this.isShowWish=!1,this.isShowQuestion=!0},1e4)}switchButton(){new Audio("./assets/sounds/duck.mp3").play();let e=this.btnNo.nativeElement.style.left,o=this.btnNo.nativeElement.style.top,s=this.btnYes.nativeElement.style.left,_=this.btnYes.nativeElement.style.top;this.btnNo.nativeElement.style.left=s,this.btnNo.nativeElement.style.top=_,this.btnYes.nativeElement.style.left=e,this.btnYes.nativeElement.style.top=o}moveButton(){var t=new Audio("./assets/sounds/Swish1.mp3");if(t.play(),screen.width<=600)var e=Math.random()*300,o=Math.random()*500;else var e=Math.random()*500,o=Math.random()*500;var s=e+"px",_=o+"px";this.btnNo.nativeElement.style.left=s,this.btnNo.nativeElement.style.top=_}handleRecive(){this.isShowPopup=!0,this.telegramService.sendMessage("Click to receive").subscribe()}close(){this.isShowWish=!1,this.isShowGift=!1,this.isShowHeart=!0,this.isShowQuestion=!1,this.isShowPopup=!1,this.isShowWishFinal=!0}ngOnDestroy(){this.resiszeSubscription?.unsubscribe(),clearTimeout(this.typingTimeOut),clearInterval(this.snallFallInterval)}};n.\u0275fac=function(e){return new(e||n)(v(w))},n.\u0275cmp=x({type:n,selectors:[["app-main"]],viewQuery:function(e,o){if(e&1&&(p(ee,5,c),p(te,7,c),p(ie,5,c),p(ne,5,c)),e&2){let s;d(s=u())&&(o.wrapTextElement=s.first),d(s=u())&&(o.canvasElement=s.first),d(s=u())&&(o.btnNo=s.first),d(s=u())&&(o.btnYes=s.first)}},standalone:!0,features:[y],decls:16,vars:9,consts:[["canvas",""],["id","wish"],["class","gift"],["class","heart"],[1,"text-main"],[1,"button","no"],["btnNo",""],[1,"button","yes",3,"click"],["btnYes",""],["class","popup"],[1,"wrap-text"],["wrapText",""],[1,"gift"],[1,"gift-appear-animation",3,"click"],[1,"heart"],[1,"popup"],[1,"frame"],[2,"text-align","end"],[3,"click"],[1,"wrap-text","finnal"]],template:function(e,o){e&1&&(m(0,"canvas",null,0),k(2,oe,3,0,"div",1)(3,se,3,0,"div",2)(4,re,2,0,"div",3),r(5,"div")(6,"h1",4),l(7," L\xE0m g\xEC c\xF3 qu\xE0 g\xEC, ch\u1EC9 c\xF3 t\u1EA5m th\xE2n trong tr\u1EAFng g\xECn gi\u1EEF h\u01A1n 20 n\u0103m, c\xF3 l\u1EA5y kh\xF4ng =))) "),a(),r(8,"button",5,6),l(10,"Ch\xEA!!!"),a(),r(11,"button",7,8),b("click",function(){return o.handleRecive()}),l(13,"Nh\u1EADnnnnnn <333"),a()(),k(14,ae,7,0,"div",9)(15,le,9,0,"div",1)),e&2&&(h(2),f(2,o.isShowWish?2:-1),h(1),f(3,o.isShowGift?3:-1),h(1),f(4,o.isShowHeart?4:-1),h(1),q(N(7,ce,!o.isShowQuestion)),h(9),f(14,o.isShowPopup?14:-1),h(1),f(15,o.isShowWishFinal&&!o.isShowWish?15:-1))},dependencies:[G,$],styles:["#wish[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:30px 4px}.wrap-text[_ngcontent-%COMP%]{background-color:#0009;display:inline-flex;flex-direction:column;text-align:center}.wrap-text.finnal[_ngcontent-%COMP%]{background-color:unset}.test-color[_ngcontent-%COMP%]{width:100px;height:100px;background-image:linear-gradient(135deg,#cc0000,#556b2f,#4682b4,#ffa500,#808080)}.gift-appear-animation[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_appearance ease-in-out .5s}.heart[_ngcontent-%COMP%], .gift[_ngcontent-%COMP%]{position:absolute;inset:0}.gift[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;z-index:999}.heart[_ngcontent-%COMP%]{background-color:#0009}@keyframes _ngcontent-%COMP%_appearance{0%{transform:scale(0);transform:translateY(-300px)}80%{transform:scale(1.4);transform:translateY(100px)}to{transform:1;transform:translateY(0)}}.question[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#0009;display:flex;justify-content:center;padding:30px 4px;z-index:1001;animation:all linear 2s}.question[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;max-width:800px;text-align:center}.question[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{border-radius:4px;padding:.5rem 1rem;font-size:1.4rem;line-height:1.5;border-radius:.3rem;border:none;outline:none;cursor:pointer;position:absolute;top:40vh;text-align:center;-webkit-transition:all .1s ease-out;font-family:dancing-font,sans-serif}.question[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{opacity:.8}.question[_ngcontent-%COMP%]   .button.yes[_ngcontent-%COMP%]{background-color:#3498db;color:#fff;right:30%;width:180px}.question[_ngcontent-%COMP%]   .button.no[_ngcontent-%COMP%]{background-color:#e74c3c;color:#fff;right:60%;width:120px}.popup[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#0009;display:flex;justify-content:center;align-items:center;padding:0 6px;font-family:dancing-font,sans-serif;z-index:1005}.popup[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:inherit}.popup[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{display:inline-block;width:400px;background-color:#fff;flex-grow:0;padding:20px 30px;max-width:100%;border-radius:4px}.popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:12px;border-radius:4px;font-size:1.2rem;padding:4px 18px;line-height:1.5;border-radius:.3rem;border:none;outline:none;cursor:pointer;text-align:center;background-color:#3498db;color:#fff;font-family:inherit}@media only screen and (max-width: 500px){.button.no[_ngcontent-%COMP%]{position:absolute;display:inline-block;left:7%;top:40vh;font-size:14px;padding:3px;-webkit-transition:all .1s ease-out}.button.yes[_ngcontent-%COMP%]{position:absolute;display:inline-block;left:58%;top:40vh;font-size:14px;padding:3px;-webkit-transition:all .3s ease-out}}"]});let i=n;return i})();var J=[{path:"single",loadChildren:()=>import("./chunk-WA23XNMD.js").then(i=>i.singgleRoutes)},{path:"",component:Z}];var X={providers:[V(J),Q([z])]};var he=["audio"],K=(()=>{let n=class n{constructor(t,e){this.telegramService=t,this.datePipe=e,this.telegramService.getIp()}ngAfterViewInit(){this.telegramService.sendMessage("Connected").subscribe(),g(document.body,"click").pipe(I(3)).subscribe(()=>{this.audio.nativeElement.paused&&this.audio.nativeElement.play()}),this.intervalTimer=setInterval(()=>{this.telegramService.sendMessage("On the site").subscribe()},12e4)}ngOnDestroy(){clearInterval(this.intervalTimer)}};n.\u0275fac=function(e){return new(e||n)(v(w),v(E))},n.\u0275cmp=x({type:n,selectors:[["app-root"]],viewQuery:function(e,o){if(e&1&&p(he,7,c),e&2){let s;d(s=u())&&(o.audio=s.first)}},standalone:!0,features:[H([E]),y],decls:3,vars:0,consts:[["src","../assets/sounds/christmas.mp3","autoplay","","loop","",2,"display","none"],["audio",""]],template:function(e,o){e&1&&m(0,"router-outlet")(1,"audio",0,1)},dependencies:[j,B]});let i=n;return i})();Y(K,X).catch(i=>console.error(i));
