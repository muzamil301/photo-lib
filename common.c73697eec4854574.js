"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,w,u)=>{u.d(w,{c:()=>d});var o=u(1308),h=u(7864),g=u(1898);const d=(l,n)=>{let e,t;const s=(r,m,f)=>{if(typeof document>"u")return;const _=document.elementFromPoint(r,m);_&&n(_)?_!==e&&(c(),i(_,f)):c()},i=(r,m)=>{e=r,t||(t=e);const f=e;(0,o.c)(()=>f.classList.add("ion-activated")),m()},c=(r=!1)=>{if(!e)return;const m=e;(0,o.c)(()=>m.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,g.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>s(r.currentX,r.currentY,h.a),onMove:r=>s(r.currentX,r.currentY,h.b),onEnd:()=>{c(!0),(0,h.h)(),t=void 0}})}},2225:(M,w,u)=>{u.d(w,{g:()=>o});const o=(n,e,t,s,i)=>g(n[1],e[1],t[1],s[1],i).map(c=>h(n[0],e[0],t[0],s[0],c)),h=(n,e,t,s,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*t*i+3*t+s*i))-n*Math.pow(i-1,3),g=(n,e,t,s,i)=>l((s-=i)-3*(t-=i)+3*(e-=i)-(n-=i),3*t-6*e+3*n,3*e-3*n,n).filter(r=>r>=0&&r<=1),l=(n,e,t,s)=>{if(0===n)return((n,e,t)=>{const s=e*e-4*n*t;return s<0?[]:[(-e+Math.sqrt(s))/(2*n),(-e-Math.sqrt(s))/(2*n)]})(e,t,s);const i=(3*(t/=n)-(e/=n)*e)/3,c=(2*e*e*e-9*e*t+27*(s/=n))/27;if(0===i)return[Math.pow(-c,1/3)];if(0===c)return[Math.sqrt(-i),-Math.sqrt(-i)];const r=Math.pow(c/2,2)+Math.pow(i/3,3);if(0===r)return[Math.pow(c/2,.5)-e/3];if(r>0)return[Math.pow(-c/2+Math.sqrt(r),1/3)-Math.pow(c/2+Math.sqrt(r),1/3)-e/3];const m=Math.sqrt(Math.pow(-i/3,3)),f=Math.acos(-c/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(m,1/3);return[_*Math.cos(f/3)-e/3,_*Math.cos((f+2*Math.PI)/3)-e/3,_*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(M,w,u)=>{u.d(w,{i:()=>o});const o=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,w,u)=>{u.r(w),u.d(w,{startFocusVisible:()=>d});const o="ion-focused",g=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=l=>{let n=[],e=!0;const t=l?l.shadowRoot:document,s=l||document.body,i=E=>{n.forEach(v=>v.classList.remove(o)),E.forEach(v=>v.classList.add(o)),n=E},c=()=>{e=!1,i([])},r=E=>{e=g.includes(E.key),e||i([])},m=E=>{if(e&&void 0!==E.composedPath){const v=E.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));i(v)}},f=()=>{t.activeElement===s&&i([])};return t.addEventListener("keydown",r),t.addEventListener("focusin",m),t.addEventListener("focusout",f),t.addEventListener("touchstart",c),t.addEventListener("mousedown",c),{destroy:()=>{t.removeEventListener("keydown",r),t.removeEventListener("focusin",m),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",c),t.removeEventListener("mousedown",c)},setFocus:i}}},7626:(M,w,u)=>{u.d(w,{C:()=>l,a:()=>g,d:()=>d});var o=u(5861),h=u(5730);const g=function(){var n=(0,o.Z)(function*(e,t,s,i,c,r){var m;if(e)return e.attachViewToDom(t,s,c,i);if(!(r||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof s?null===(m=t.ownerDocument)||void 0===m?void 0:m.createElement(s):s;return i&&i.forEach(_=>f.classList.add(_)),c&&Object.assign(f,c),t.appendChild(f),yield new Promise(_=>(0,h.c)(f,_)),f});return function(t,s,i,c,r,m){return n.apply(this,arguments)}}(),d=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},l=()=>{let n,e;return{attachViewToDom:function(){var i=(0,o.Z)(function*(c,r,m={},f=[]){var _,E;if(n=c,r){const p="string"==typeof r?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(r):r;f.forEach(a=>p.classList.add(a)),Object.assign(p,m),n.appendChild(p),yield new Promise(a=>(0,h.c)(p,a))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const a=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");a.classList.add("ion-delegate-host"),f.forEach(y=>a.classList.add(y)),a.append(...n.children),n.appendChild(a)}const v=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),v.appendChild(n),n});return function(r,m){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7864:(M,w,u)=>{u.d(w,{a:()=>d,b:()=>l,c:()=>g,d:()=>e,h:()=>n});const o={getEngine(){var t;const s=window;return s.TapticEngine||(null===(t=s.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var t;const s=window;return!!this.getEngine()&&("web"!==(null===(t=s.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.impact({style:i})},notification(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>o.available(),g=()=>{h()&&o.selection()},d=()=>{h()&&o.selectionStart()},l=()=>{h()&&o.selectionChanged()},n=()=>{h()&&o.selectionEnd()},e=t=>{h()&&o.impact(t)}},109:(M,w,u)=>{u.d(w,{a:()=>o,b:()=>r,c:()=>e,d:()=>m,e:()=>D,f:()=>n,g:()=>f,h:()=>g,i:()=>h,j:()=>a,k:()=>y,l:()=>t,m:()=>i,n:()=>_,o:()=>s,p:()=>l,q:()=>d,r:()=>p,s:()=>C,t:()=>c,u:()=>E,v:()=>v});const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9888:(M,w,u)=>{u.d(w,{s:()=>o});const o=t=>{try{if(t instanceof e)return t.value;if(!d()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const s=document.createDocumentFragment(),i=document.createElement("div");s.appendChild(i),i.innerHTML=t,n.forEach(f=>{const _=s.querySelectorAll(f);for(let E=_.length-1;E>=0;E--){const v=_[E];v.parentNode?v.parentNode.removeChild(v):s.removeChild(v);const p=g(v);for(let a=0;a<p.length;a++)h(p[a])}});const c=g(s);for(let f=0;f<c.length;f++)h(c[f]);const r=document.createElement("div");r.appendChild(s);const m=r.querySelector("div");return null!==m?m.innerHTML:r.innerHTML}catch(s){return console.error(s),""}},h=t=>{if(t.nodeType&&1!==t.nodeType)return;if(typeof NamedNodeMap<"u"&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let i=t.attributes.length-1;i>=0;i--){const c=t.attributes.item(i),r=c.name;if(!l.includes(r.toLowerCase())){t.removeAttribute(r);continue}const m=c.value,f=t[r];(null!=m&&m.toLowerCase().includes("javascript:")||null!=f&&f.toLowerCase().includes("javascript:"))&&t.removeAttribute(r)}const s=g(t);for(let i=0;i<s.length;i++)h(s[i])},g=t=>null!=t.children?t.children:t.childNodes,d=()=>{var t;const s=window,i=null===(t=null==s?void 0:s.Ionic)||void 0===t?void 0:t.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},l=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(s){this.value=s}}},8416:(M,w,u)=>{u.d(w,{I:()=>l,a:()=>i,b:()=>n,c:()=>m,d:()=>_,f:()=>c,g:()=>s,i:()=>t,p:()=>f,r:()=>E,s:()=>r});var o=u(5861),h=u(5730),g=u(4147);const l="ion-content",n=".ion-content-scroll-host",e=`${l}, ${n}`,t=v=>"ION-CONTENT"===v.tagName,s=function(){var v=(0,o.Z)(function*(p){return t(p)?(yield new Promise(a=>(0,h.c)(p,a)),p.getScrollElement()):p});return function(a){return v.apply(this,arguments)}}(),i=v=>v.querySelector(n)||v.querySelector(e),c=v=>v.closest(e),r=(v,p)=>t(v)?v.scrollToTop(p):Promise.resolve(v.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),m=(v,p,a,y)=>t(v)?v.scrollByPoint(p,a,y):Promise.resolve(v.scrollBy({top:a,left:p,behavior:y>0?"smooth":"auto"})),f=v=>(0,g.a)(v,l),_=v=>{if(t(v)){const a=v.scrollY;return v.scrollY=!1,a}return v.style.setProperty("overflow","hidden"),!0},E=(v,p)=>{t(v)?v.scrollY=p:v.style.removeProperty("overflow")}},5234:(M,w,u)=>{u.r(w),u.d(w,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>p,keyboardDidClose:()=>f,keyboardDidOpen:()=>r,keyboardDidResize:()=>m,resetKeyboardAssist:()=>e,setKeyboardClose:()=>c,setKeyboardOpen:()=>i,startKeyboardAssist:()=>t,trackViewportChanges:()=>v});const o="ionKeyboardDidShow",h="ionKeyboardDidHide";let d={},l={},n=!1;const e=()=>{d={},l={},n=!1},t=a=>{s(a),a.visualViewport&&(l=p(a.visualViewport),a.visualViewport.onresize=()=>{v(a),r()||m(a)?i(a):f(a)&&c(a)})},s=a=>{a.addEventListener("keyboardDidShow",y=>i(a,y)),a.addEventListener("keyboardDidHide",()=>c(a))},i=(a,y)=>{_(a,y),n=!0},c=a=>{E(a),n=!1},r=()=>!n&&d.width===l.width&&(d.height-l.height)*l.scale>150,m=a=>n&&!f(a),f=a=>n&&l.height===a.innerHeight,_=(a,y)=>{const D=new CustomEvent(o,{detail:{keyboardHeight:y?y.keyboardHeight:a.innerHeight-l.height}});a.dispatchEvent(D)},E=a=>{const y=new CustomEvent(h);a.dispatchEvent(y)},v=a=>{d=Object.assign({},l),l=p(a.visualViewport)},p=a=>({width:Math.round(a.width),height:Math.round(a.height),offsetTop:a.offsetTop,offsetLeft:a.offsetLeft,pageTop:a.pageTop,pageLeft:a.pageLeft,scale:a.scale})},9852:(M,w,u)=>{u.d(w,{c:()=>h});var o=u(3457);const h=g=>{let d,l,n;const e=()=>{d=()=>{n=!0,g&&g(!0)},l=()=>{n=!1,g&&g(!1)},null==o.w||o.w.addEventListener("keyboardWillShow",d),null==o.w||o.w.addEventListener("keyboardWillHide",l)};return e(),{init:e,destroy:()=>{null==o.w||o.w.removeEventListener("keyboardWillShow",d),null==o.w||o.w.removeEventListener("keyboardWillHide",l),d=l=void 0},isKeyboardVisible:()=>n}}},7741:(M,w,u)=>{u.d(w,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(g,d,l)=>{const n=g*d/l-g+"ms",e=2*Math.PI*d/l;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(g,d,l)=>{const n=d/l,e=g*n-g+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(g,d)=>({r:6,style:{left:9-9*d+"px","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(g,d,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*d+(d<l/2?180:-180)}deg)`,"animation-delay":g*d/l-g+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(g,d,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*d+(d<l/2?180:-180)}deg)`,"animation-delay":g*d/l-g+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(g,d,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":g*d/l-g+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(g,d,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":g*d/l-g+"ms"}})}}},6659:(M,w,u)=>{u.r(w),u.d(w,{createSwipeBackGesture:()=>l});var o=u(5730),h=u(5062),g=u(1898);u(4349);const l=(n,e,t,s,i)=>{const c=n.ownerDocument.defaultView;let r=(0,h.i)(n);const f=a=>r?-a.deltaX:a.deltaX;return(0,g.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:a=>(r=(0,h.i)(n),(a=>{const{startX:C}=a;return r?C>=c.innerWidth-50:C<=50})(a)&&e()),onStart:t,onMove:a=>{const C=f(a)/c.innerWidth;s(C)},onEnd:a=>{const y=f(a),C=c.innerWidth,D=y/C,x=(a=>r?-a.velocityX:a.velocityX)(a),O=x>=0&&(x>.2||y>C/2),L=(O?1-D:D)*C;let T=0;if(L>5){const S=L/Math.abs(x);T=Math.min(S,540)}i(O,D<=0?.01:(0,o.l)(0,D,.9999),T)}})}},1581:(M,w,u)=>{u.d(w,{GW:()=>o,R1:()=>h,Z4:()=>g});const o="https://picsum.photos",h=o+"/v2/list",g="FAVT_IMAGES_ARRAY"},3195:(M,w,u)=>{u.d(w,{r:()=>t});var o=u(655),h=u(1135),g=u(1581),d=u(8256),l=u(529);let n=(()=>{class s{setItem(c,r){localStorage.setItem(c,JSON.stringify(r))}getItem(c){const r=localStorage.getItem(c);return JSON.parse(r)}}return s.\u0275fac=function(c){return new(c||s)},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var e=u(4556);let t=(()=>{class s{constructor(c,r,m){this.http=c,this.localStorage=r,this.toastController=m,this.favtImagesSource=new h.X([]),this.favtImagesData=this.favtImagesSource.asObservable(),this.favtImagesSource=new h.X(r.getItem(g.Z4)||[]),this.favtImagesData=this.favtImagesSource.asObservable()}getImages(c,r){return this.http.get(`${g.R1}/?page=${c}&limit=${r}`)}getFavtImages(){return this.favtImagesData}updateFavtList(c){c&&(this.localStorage.setItem(g.Z4,c),this.favtImagesSource.next(c))}presentToast(c){return(0,o.mG)(this,void 0,void 0,function*(){yield(yield this.toastController.create({message:c,duration:800,position:"bottom"})).present()})}}return s.\u0275fac=function(c){return new(c||s)(d.LFG(l.eN),d.LFG(n),d.LFG(e.yF))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5476:(M,w,u)=>{u.d(w,{p:()=>s});var o=u(8256),h=u(1581),g=u(1407),d=u(6895),l=u(4556);function n(i,c){if(1&i){const r=o.EpF();o.TgZ(0,"div",6),o.NdJ("click",function(){o.CHM(r);const f=o.oxw().$implicit,_=o.oxw();return o.KtG(_.addToFavtList(f))}),o._UZ(1,"ion-icon",7),o.qZA()}}const e=function(i){return{clickable:i}};function t(i,c){if(1&i){const r=o.EpF();o.TgZ(0,"ion-col",2)(1,"ion-card",3),o.NdJ("click",function(){const _=o.CHM(r).$implicit,E=o.oxw();return o.KtG(!0===E.enableDetailView?E.goToDetailPage(_.id):null)}),o._UZ(2,"img",4),o.YNc(3,n,2,0,"div",5),o.qZA()()}if(2&i){const r=c.$implicit,m=o.oxw();o.xp6(1),o.Q6J("ngClass",o.VKq(3,e,!0===m.enableDetailView)),o.xp6(1),o.Q6J("src",m.basepath+"/id/"+r.id+"/400/400",o.LSH),o.xp6(1),o.Q6J("ngIf",m.showAddToFavt)}}let s=(()=>{class i{constructor(r){this.router=r,this.data=[],this.showAddToFavt=!1,this.enableDetailView=!1,this.addToFavtEvent=new o.vpe,this.basepath=h.GW}addToFavtList(r){this.addToFavtEvent.emit(r)}goToDetailPage(r){this.router.navigate(["gallery/photo",r])}}return i.\u0275fac=function(r){return new(r||i)(o.Y36(g.F0))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-gallery-view"]],inputs:{data:"data",showAddToFavt:"showAddToFavt",enableDetailView:"enableDetailView"},outputs:{addToFavtEvent:"addToFavtEvent"},decls:3,vars:1,consts:[[1,"gallery-view"],["size-md","3","size-sm","4","size-xs","6",4,"ngFor","ngForOf"],["size-md","3","size-sm","4","size-xs","6"],[1,"gallery-card","ion-no-margin",3,"ngClass","click"],["alt","image",3,"src"],["class","icon-wrapper",3,"click",4,"ngIf"],[1,"icon-wrapper",3,"click"],["slot","icon-only","name","heart",1,"heart-animate"]],template:function(r,m){1&r&&(o.TgZ(0,"ion-grid",0)(1,"ion-row"),o.YNc(2,t,4,5,"ion-col",1),o.qZA()()),2&r&&(o.xp6(2),o.Q6J("ngForOf",m.data))},dependencies:[d.mk,d.sg,d.O5,l.PM,l.wI,l.jY,l.gu,l.Nd],styles:[".gallery-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.gallery-card[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;background-color:rgba(0,0,0,.3);border-radius:30px;top:10px;right:10px;display:flex;align-items:center;justify-content:center;cursor:pointer}.gallery-card[_ngcontent-%COMP%]   .icon-wrapper.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#ea4c89}.gallery-card[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff}.clickable[_ngcontent-%COMP%]{cursor:pointer}"]}),i})()}}]);