"use strict";(()=>{function Ke(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function zr(t,r,e){return r&&Ke(t.prototype,r),e&&Ke(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var je="(prefers-reduced-motion: reduce)",Nt=1,Ur=2,Dt=3,Vt=4,Kt=5,ie=6,ue=7,Br={CREATED:Nt,MOUNTED:Ur,IDLE:Dt,MOVING:Vt,SCROLLING:Kt,DRAGGING:ie,DESTROYED:ue};function dt(t){t.length=0}function yt(t,r,e){return Array.prototype.slice.call(t,r,e)}function z(t){return t.bind.apply(t,[null].concat(yt(arguments,1)))}var cr=setTimeout,Ce=function(){};function qe(t){return requestAnimationFrame(t)}function ve(t,r){return typeof r===t}function Wt(t){return!Pe(t)&&ve("object",t)}var De=Array.isArray,fr=z(ve,"function"),Et=z(ve,"string"),jt=z(ve,"undefined");function Pe(t){return t===null}function lr(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function qt(t){return De(t)?t:[t]}function rt(t,r){qt(t).forEach(r)}function Ve(t,r){return t.indexOf(r)>-1}function ae(t,r){return t.push.apply(t,qt(r)),t}function ft(t,r,e){t&&rt(r,function(n){n&&t.classList[e?"add":"remove"](n)})}function st(t,r){ft(t,Et(r)?r.split(" "):r,!0)}function Zt(t,r){rt(r,t.appendChild.bind(t))}function xe(t,r){rt(t,function(e){var n=(r||e).parentNode;n&&n.insertBefore(e,r)})}function zt(t,r){return lr(t)&&(t.msMatchesSelector||t.matches).call(t,r)}function vr(t,r){var e=t?yt(t.children):[];return r?e.filter(function(n){return zt(n,r)}):e}function Jt(t,r){return r?vr(t,r)[0]:t.firstElementChild}var Ut=Object.keys;function Tt(t,r,e){return t&&(e?Ut(t).reverse():Ut(t)).forEach(function(n){n!=="__proto__"&&r(t[n],n)}),t}function Bt(t){return yt(arguments,1).forEach(function(r){Tt(r,function(e,n){t[n]=r[n]})}),t}function gt(t){return yt(arguments,1).forEach(function(r){Tt(r,function(e,n){De(e)?t[n]=e.slice():Wt(e)?t[n]=gt({},Wt(t[n])?t[n]:{},e):t[n]=e})}),t}function Ze(t,r){rt(r||Ut(t),function(e){delete t[e]})}function ot(t,r){rt(t,function(e){rt(r,function(n){e&&e.removeAttribute(n)})})}function M(t,r,e){Wt(r)?Tt(r,function(n,s){M(t,s,n)}):rt(t,function(n){Pe(e)||e===""?ot(n,r):n.setAttribute(r,String(e))})}function Ot(t,r,e){var n=document.createElement(t);return r&&(Et(r)?st(n,r):M(n,r)),e&&Zt(e,n),n}function nt(t,r,e){if(jt(e))return getComputedStyle(t)[r];Pe(e)||(t.style[r]=""+e)}function Ht(t,r){nt(t,"display",r)}function dr(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function it(t,r){return t.getAttribute(r)}function Je(t,r){return t&&t.classList.contains(r)}function tt(t){return t.getBoundingClientRect()}function Lt(t){rt(t,function(r){r&&r.parentNode&&r.parentNode.removeChild(r)})}function hr(t){return Jt(new DOMParser().parseFromString(t,"text/html").body)}function ct(t,r){t.preventDefault(),r&&(t.stopPropagation(),t.stopImmediatePropagation())}function gr(t,r){return t&&t.querySelector(r)}function Me(t,r){return r?yt(t.querySelectorAll(r)):[]}function lt(t,r){ft(t,r,!1)}function Re(t){return t.timeStamp}function pt(t){return Et(t)?t:t?t+"px":""}var Qt="splide",ke="data-"+Qt;function Ft(t,r){if(!t)throw new Error("["+Qt+"] "+(r||""))}var mt=Math.min,ce=Math.max,fe=Math.floor,Yt=Math.ceil,J=Math.abs;function Er(t,r,e){return J(t-r)<e}function se(t,r,e,n){var s=mt(r,e),v=ce(r,e);return n?s<t&&t<v:s<=t&&t<=v}function Rt(t,r,e){var n=mt(r,e),s=ce(r,e);return mt(ce(n,t),s)}function Ie(t){return+(t>0)-+(t<0)}function Ne(t,r){return rt(r,function(e){t=t.replace("%s",""+e)}),t}function Fe(t){return t<10?"0"+t:""+t}var Qe={};function Hr(t){return""+t+Fe(Qe[t]=(Qe[t]||0)+1)}function mr(){var t=[];function r(i,u,c,l){s(i,u,function(a,m,d){var h="addEventListener"in a,o=h?a.removeEventListener.bind(a,m,c,l):a.removeListener.bind(a,c);h?a.addEventListener(m,c,l):a.addListener(c),t.push([a,m,d,c,o])})}function e(i,u,c){s(i,u,function(l,a,m){t=t.filter(function(d){return d[0]===l&&d[1]===a&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function n(i,u,c){var l,a=!0;return typeof CustomEvent=="function"?l=new CustomEvent(u,{bubbles:a,detail:c}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(u,a,!1,c)),i.dispatchEvent(l),l}function s(i,u,c){rt(i,function(l){l&&rt(u,function(a){a.split(" ").forEach(function(m){var d=m.split(".");c(l,d[0],d[1])})})})}function v(){t.forEach(function(i){i[4]()}),dt(t)}return{bind:r,unbind:e,dispatch:n,destroy:v}}var Ct="mounted",tr="ready",St="move",te="moved",Sr="click",Yr="active",Xr="inactive",$r="visible",Kr="hidden",$="refresh",Q="updated",Xt="resize",Ge="resized",jr="drag",qr="dragging",Zr="dragged",We="scroll",xt="scrolled",Jr="overflow",yr="destroy",Qr="arrows:mounted",tn="arrows:updated",en="pagination:mounted",rn="pagination:updated",_r="navigation:mounted",Ar="autoplay:play",nn="autoplay:playing",pr="autoplay:pause",Tr="lazyload:loaded",Lr="sk",br="sh",le="ei";function H(t){var r=t?t.event.bus:document.createDocumentFragment(),e=mr();function n(v,i){e.bind(r,qt(v).join(" "),function(u){i.apply(i,De(u.detail)?u.detail:[])})}function s(v){e.dispatch(r,v,yt(arguments,1))}return t&&t.event.on(yr,e.destroy),Bt(e,{bus:r,on:n,off:z(e.unbind,r),emit:s})}function de(t,r,e,n){var s=Date.now,v,i=0,u,c=!0,l=0;function a(){if(!c){if(i=t?mt((s()-v)/t,1):1,e&&e(i),i>=1&&(r(),v=s(),n&&++l>=n))return d();u=qe(a)}}function m(S){S||o(),v=s()-(S?i*t:0),c=!1,u=qe(a)}function d(){c=!0}function h(){v=s(),i=0,e&&e(i)}function o(){u&&cancelAnimationFrame(u),i=0,u=0,c=!0}function f(S){t=S}function y(){return c}return{start:m,rewind:h,pause:d,cancel:o,set:f,isPaused:y}}function an(t){var r=t;function e(s){r=s}function n(s){return Ve(qt(s),r)}return{set:e,is:n}}function sn(t,r){var e=de(r||0,t,null,1);return function(){e.isPaused()&&e.start()}}function on(t,r,e){var n=t.state,s=e.breakpoints||{},v=e.reducedMotion||{},i=mr(),u=[];function c(){var o=e.mediaQuery==="min";Ut(s).sort(function(f,y){return o?+f-+y:+y-+f}).forEach(function(f){a(s[f],"("+(o?"min":"max")+"-width:"+f+"px)")}),a(v,je),m()}function l(o){o&&i.destroy()}function a(o,f){var y=matchMedia(f);i.bind(y,"change",m),u.push([o,y])}function m(){var o=n.is(ue),f=e.direction,y=u.reduce(function(S,E){return gt(S,E[1].matches?E[0]:{})},{});Ze(e),h(y),e.destroy?t.destroy(e.destroy==="completely"):o?(l(!0),t.mount()):f!==e.direction&&t.refresh()}function d(o){matchMedia(je).matches&&(o?gt(e,v):Ze(e,Ut(v)))}function h(o,f,y){gt(e,o),f&&gt(Object.getPrototypeOf(e),o),(y||!n.is(Nt))&&t.emit(Q,e)}return{setup:c,destroy:l,reduce:d,set:h}}var he="Arrow",ge=he+"Left",Ee=he+"Right",Cr=he+"Up",Rr=he+"Down";var er="rtl",me="ttb",pe={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Cr,Ee],ArrowRight:[Rr,ge]};function un(t,r,e){function n(v,i,u){u=u||e.direction;var c=u===er&&!i?1:u===me?0:-1;return pe[v]&&pe[v][c]||v.replace(/width|left|right/i,function(l,a){var m=pe[l.toLowerCase()][c]||l;return a>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function s(v){return v*(e.direction===er?1:-1)}return{resolve:n,orient:s}}var vt="role",wt="tabindex",cn="disabled",at="aria-",ee=at+"controls",Ir=at+"current",rr=at+"selected",et=at+"label",ze=at+"labelledby",Nr=at+"hidden",Ue=at+"orientation",$t=at+"roledescription",nr=at+"live",ir=at+"busy",ar=at+"atomic",Be=[vt,wt,cn,ee,Ir,et,ze,Nr,Ue,$t],ut=Qt+"__",_t="is-",Te=Qt,sr=ut+"track",fn=ut+"list",Se=ut+"slide",Or=Se+"--clone",ln=Se+"__container",He=ut+"arrows",ye=ut+"arrow",wr=ye+"--prev",Dr=ye+"--next",_e=ut+"pagination",Pr=_e+"__page",vn=ut+"progress",dn=vn+"__bar",Ye=ut+"toggle",ii=Ye+"__play",ai=Ye+"__pause",hn=ut+"spinner",gn=ut+"sr",En=_t+"initialized",bt=_t+"active",Vr=_t+"prev",xr=_t+"next",Oe=_t+"visible",we=_t+"loading",Mr=_t+"focus-in",kr=_t+"overflow",mn=[bt,Oe,Vr,xr,we,Mr,kr],Sn={slide:Se,clone:Or,arrows:He,arrow:ye,prev:wr,next:Dr,pagination:_e,page:Pr,spinner:hn};function yn(t,r){if(fr(t.closest))return t.closest(r);for(var e=t;e&&e.nodeType===1&&!zt(e,r);)e=e.parentElement;return e}var _n=5,or=200,Fr="touchstart mousedown",Le="touchmove mousemove",be="touchend touchcancel mouseup click";function An(t,r,e){var n=H(t),s=n.on,v=n.bind,i=t.root,u=e.i18n,c={},l=[],a=[],m=[],d,h,o;function f(){g(),D(),E()}function y(){s($,S),s($,f),s(Q,E),v(document,Fr+" keydown",function(A){o=A.type==="keydown"},{capture:!0}),v(i,"focusin",function(){ft(i,Mr,!!o)})}function S(A){var I=Be.concat("style");dt(l),lt(i,a),lt(d,m),ot([d,h],I),ot(i,A?I:["style",$t])}function E(){lt(i,a),lt(d,m),a=V(Te),m=V(sr),st(i,a),st(d,m),M(i,et,e.label),M(i,ze,e.labelledby)}function g(){d=R("."+sr),h=Jt(d,"."+fn),Ft(d&&h,"A track/list element is missing."),ae(l,vr(h,"."+Se+":not(."+Or+")")),Tt({arrows:He,pagination:_e,prev:wr,next:Dr,bar:dn,toggle:Ye},function(A,I){c[I]=R("."+A)}),Bt(c,{root:i,track:d,list:h,slides:l})}function D(){var A=i.id||Hr(Qt),I=e.role;i.id=A,d.id=d.id||A+"-track",h.id=h.id||A+"-list",!it(i,vt)&&i.tagName!=="SECTION"&&I&&M(i,vt,I),M(i,$t,u.carousel),M(h,vt,"presentation")}function R(A){var I=gr(i,A);return I&&yn(I,"."+Te)===i?I:void 0}function V(A){return[A+"--"+e.type,A+"--"+e.direction,e.drag&&A+"--draggable",e.isNavigation&&A+"--nav",A===Te&&bt]}return Bt(c,{setup:f,mount:y,destroy:S})}var Pt="slide",Mt="loop",re="fade";function pn(t,r,e,n){var s=H(t),v=s.on,i=s.emit,u=s.bind,c=t.Components,l=t.root,a=t.options,m=a.isNavigation,d=a.updateOnMove,h=a.i18n,o=a.pagination,f=a.slideFocus,y=c.Direction.resolve,S=it(n,"style"),E=it(n,et),g=e>-1,D=Jt(n,"."+ln),R;function V(){g||(n.id=l.id+"-slide"+Fe(r+1),M(n,vt,o?"tabpanel":"group"),M(n,$t,h.slide),M(n,et,E||Ne(h.slideLabel,[r+1,t.length]))),A()}function A(){u(n,"click",z(i,Sr,P)),u(n,"keydown",z(i,Lr,P)),v([te,br,xt],T),v(_r,F),d&&v(St,w)}function I(){R=!0,s.destroy(),lt(n,mn),ot(n,Be),M(n,"style",S),M(n,et,E||"")}function F(){var O=t.splides.map(function(p){var N=p.splide.Components.Slides.getAt(r);return N?N.slide.id:""}).join(" ");M(n,et,Ne(h.slideX,(g?e:r)+1)),M(n,ee,O),M(n,vt,f?"button":""),f&&ot(n,$t)}function w(){R||T()}function T(){if(!R){var O=t.index;L(),b(),ft(n,Vr,r===O-1),ft(n,xr,r===O+1)}}function L(){var O=k();O!==Je(n,bt)&&(ft(n,bt,O),M(n,Ir,m&&O||""),i(O?Yr:Xr,P))}function b(){var O=Y(),p=!O&&(!k()||g);if(t.state.is([Vt,Kt])||M(n,Nr,p||""),M(Me(n,a.focusableNodes||""),wt,p?-1:""),f&&M(n,wt,p?-1:0),O!==Je(n,Oe)&&(ft(n,Oe,O),i(O?$r:Kr,P)),!O&&document.activeElement===n){var N=c.Slides.getAt(t.index);N&&dr(N.slide)}}function x(O,p,N){nt(N&&D||n,O,p)}function k(){var O=t.index;return O===r||a.cloneStatus&&O===e}function Y(){if(t.is(re))return k();var O=tt(c.Elements.track),p=tt(n),N=y("left",!0),G=y("right",!0);return fe(O[N])<=Yt(p[N])&&fe(p[G])<=Yt(O[G])}function B(O,p){var N=J(O-r);return!g&&(a.rewind||t.is(Mt))&&(N=mt(N,t.length-N)),N<=p}var P={index:r,slideIndex:e,slide:n,container:D,isClone:g,mount:V,destroy:I,update:T,style:x,isWithin:B};return P}function Tn(t,r,e){var n=H(t),s=n.on,v=n.emit,i=n.bind,u=r.Elements,c=u.slides,l=u.list,a=[];function m(){d(),s($,h),s($,d)}function d(){c.forEach(function(T,L){f(T,L,-1)})}function h(){R(function(T){T.destroy()}),dt(a)}function o(){R(function(T){T.update()})}function f(T,L,b){var x=pn(t,L,b,T);x.mount(),a.push(x),a.sort(function(k,Y){return k.index-Y.index})}function y(T){return T?V(function(L){return!L.isClone}):a}function S(T){var L=r.Controller,b=L.toIndex(T),x=L.hasFocus()?1:e.perPage;return V(function(k){return se(k.index,b,b+x-1)})}function E(T){return V(T)[0]}function g(T,L){rt(T,function(b){if(Et(b)&&(b=hr(b)),lr(b)){var x=c[L];x?xe(b,x):Zt(l,b),st(b,e.classes.slide),I(b,z(v,Xt))}}),v($)}function D(T){Lt(V(T).map(function(L){return L.slide})),v($)}function R(T,L){y(L).forEach(T)}function V(T){return a.filter(fr(T)?T:function(L){return Et(T)?zt(L.slide,T):Ve(qt(T),L.index)})}function A(T,L,b){R(function(x){x.style(T,L,b)})}function I(T,L){var b=Me(T,"img"),x=b.length;x?b.forEach(function(k){i(k,"load error",function(){--x||L()})}):L()}function F(T){return T?c.length:a.length}function w(){return a.length>e.perPage}return{mount:m,destroy:h,update:o,register:f,get:y,getIn:S,getAt:E,add:g,remove:D,forEach:R,filter:V,style:A,getLength:F,isEnough:w}}function Ln(t,r,e){var n=H(t),s=n.on,v=n.bind,i=n.emit,u=r.Slides,c=r.Direction.resolve,l=r.Elements,a=l.root,m=l.track,d=l.list,h=u.getAt,o=u.style,f,y,S;function E(){g(),v(window,"resize load",sn(z(i,Xt))),s([Q,$],g),s(Xt,D)}function g(){f=e.direction===me,nt(a,"maxWidth",pt(e.width)),nt(m,c("paddingLeft"),R(!1)),nt(m,c("paddingRight"),R(!0)),D(!0)}function D(P){var O=tt(a);(P||y.width!==O.width||y.height!==O.height)&&(nt(m,"height",V()),o(c("marginRight"),pt(e.gap)),o("width",I()),o("height",F(),!0),y=O,i(Ge),S!==(S=B())&&(ft(a,kr,S),i(Jr,S)))}function R(P){var O=e.padding,p=c(P?"right":"left");return O&&pt(O[p]||(Wt(O)?0:O))||"0px"}function V(){var P="";return f&&(P=A(),Ft(P,"height or heightRatio is missing."),P="calc("+P+" - "+R(!1)+" - "+R(!0)+")"),P}function A(){return pt(e.height||tt(d).width*e.heightRatio)}function I(){return e.autoWidth?null:pt(e.fixedWidth)||(f?"":w())}function F(){return pt(e.fixedHeight)||(f?e.autoHeight?null:w():A())}function w(){var P=pt(e.gap);return"calc((100%"+(P&&" + "+P)+")/"+(e.perPage||1)+(P&&" - "+P)+")"}function T(){return tt(d)[c("width")]}function L(P,O){var p=h(P||0);return p?tt(p.slide)[c("width")]+(O?0:k()):0}function b(P,O){var p=h(P);if(p){var N=tt(p.slide)[c("right")],G=tt(d)[c("left")];return J(N-G)+(O?0:k())}return 0}function x(P){return b(t.length-1)-b(0)+L(0,P)}function k(){var P=h(0);return P&&parseFloat(nt(P.slide,c("marginRight")))||0}function Y(P){return parseFloat(nt(m,c("padding"+(P?"Right":"Left"))))||0}function B(){return t.is(re)||x(!0)>T()}return{mount:E,resize:D,listSize:T,slideSize:L,sliderSize:x,totalSize:b,getPadding:Y,isOverflow:B}}var bn=2;function Cn(t,r,e){var n=H(t),s=n.on,v=r.Elements,i=r.Slides,u=r.Direction.resolve,c=[],l;function a(){s($,m),s([Q,Xt],h),(l=y())&&(o(l),r.Layout.resize(!0))}function m(){d(),a()}function d(){Lt(c),dt(c),n.destroy()}function h(){var S=y();l!==S&&(l<S||!S)&&n.emit($)}function o(S){var E=i.get().slice(),g=E.length;if(g){for(;E.length<S;)ae(E,E);ae(E.slice(-S),E.slice(0,S)).forEach(function(D,R){var V=R<S,A=f(D.slide,R);V?xe(A,E[0].slide):Zt(v.list,A),ae(c,A),i.register(A,R-S+(V?0:g),D.index)})}}function f(S,E){var g=S.cloneNode(!0);return st(g,e.classes.clone),g.id=t.root.id+"-clone"+Fe(E+1),g}function y(){var S=e.clones;if(!t.is(Mt))S=0;else if(jt(S)){var E=e[u("fixedWidth")]&&r.Layout.slideSize(0),g=E&&Yt(tt(v.track)[u("width")]/E);S=g||e[u("autoWidth")]&&t.length||e.perPage*bn}return S}return{mount:a,destroy:d}}function Rn(t,r,e){var n=H(t),s=n.on,v=n.emit,i=t.state.set,u=r.Layout,c=u.slideSize,l=u.getPadding,a=u.totalSize,m=u.listSize,d=u.sliderSize,h=r.Direction,o=h.resolve,f=h.orient,y=r.Elements,S=y.list,E=y.track,g;function D(){g=r.Transition,s([Ct,Ge,Q,$],R)}function R(){r.Controller.isBusy()||(r.Scroll.cancel(),A(t.index),r.Slides.update())}function V(p,N,G,j){p!==N&&P(p>G)&&(T(),I(w(x(),p>G),!0)),i(Vt),v(St,N,G,p),g.start(N,function(){i(Dt),v(te,N,G,p),j&&j()})}function A(p){I(b(p,!0))}function I(p,N){if(!t.is(re)){var G=N?p:F(p);nt(S,"transform","translate"+o("X")+"("+G+"px)"),p!==G&&v(br)}}function F(p){if(t.is(Mt)){var N=L(p),G=N>r.Controller.getEnd(),j=N<0;(j||G)&&(p=w(p,G))}return p}function w(p,N){var G=p-B(N),j=d();return p-=f(j*(Yt(J(G)/j)||1))*(N?1:-1),p}function T(){I(x(),!0),g.cancel()}function L(p){for(var N=r.Slides.get(),G=0,j=1/0,K=0;K<N.length;K++){var ht=N[K].index,_=J(b(ht,!0)-p);if(_<=j)j=_,G=ht;else break}return G}function b(p,N){var G=f(a(p-1)-Y(p));return N?k(G):G}function x(){var p=o("left");return tt(S)[p]-tt(E)[p]+f(l(!1))}function k(p){return e.trimSpace&&t.is(Pt)&&(p=Rt(p,0,f(d(!0)-m()))),p}function Y(p){var N=e.focus;return N==="center"?(m()-c(p,!0))/2:+N*c(p)||0}function B(p){return b(p?r.Controller.getEnd():0,!!e.trimSpace)}function P(p){var N=f(w(x(),p));return p?N>=0:N<=S[o("scrollWidth")]-tt(E)[o("width")]}function O(p,N){N=jt(N)?x():N;var G=p!==!0&&f(N)<f(B(!1)),j=p!==!1&&f(N)>f(B(!0));return G||j}return{mount:D,move:V,jump:A,translate:I,shift:w,cancel:T,toIndex:L,toPosition:b,getPosition:x,getLimit:B,exceededLimit:O,reposition:R}}function In(t,r,e){var n=H(t),s=n.on,v=n.emit,i=r.Move,u=i.getPosition,c=i.getLimit,l=i.toPosition,a=r.Slides,m=a.isEnough,d=a.getLength,h=e.omitEnd,o=t.is(Mt),f=t.is(Pt),y=z(x,!1),S=z(x,!0),E=e.start||0,g,D=E,R,V,A;function I(){F(),s([Q,$,le],F),s(Ge,w)}function F(){R=d(!0),V=e.perMove,A=e.perPage,g=P();var _=Rt(E,0,h?g:R-1);_!==E&&(E=_,i.reposition())}function w(){g!==P()&&v(le)}function T(_,W,Z){if(!ht()){var X=b(_),q=B(X);q>-1&&(W||q!==E)&&(G(q),i.move(X,q,D,Z))}}function L(_,W,Z,X){r.Scroll.scroll(_,W,Z,function(){var q=B(i.toIndex(u()));G(h?mt(q,g):q),X&&X()})}function b(_){var W=E;if(Et(_)){var Z=_.match(/([+\-<>])(\d+)?/)||[],X=Z[1],q=Z[2];X==="+"||X==="-"?W=k(E+ +(""+X+(+q||1)),E):X===">"?W=q?O(+q):y(!0):X==="<"&&(W=S(!0))}else W=o?_:Rt(_,0,g);return W}function x(_,W){var Z=V||(K()?1:A),X=k(E+Z*(_?-1:1),E,!(V||K()));return X===-1&&f&&!Er(u(),c(!_),1)?_?0:g:W?X:B(X)}function k(_,W,Z){if(m()||K()){var X=Y(_);X!==_&&(W=_,_=X,Z=!1),_<0||_>g?!V&&(se(0,_,W,!0)||se(g,W,_,!0))?_=O(p(_)):o?_=Z?_<0?-(R%A||A):R:_:e.rewind?_=_<0?g:0:_=-1:Z&&_!==W&&(_=O(p(W)+(_<W?-1:1)))}else _=-1;return _}function Y(_){if(f&&e.trimSpace==="move"&&_!==E)for(var W=u();W===l(_,!0)&&se(_,0,t.length-1,!e.rewind);)_<E?--_:++_;return _}function B(_){return o?(_+R)%R||0:_}function P(){for(var _=R-(K()||o&&V?1:A);h&&_-- >0;)if(l(R-1,!0)!==l(_,!0)){_++;break}return Rt(_,0,R-1)}function O(_){return Rt(K()?_:A*_,0,g)}function p(_){return K()?mt(_,g):fe((_>=g?R-1:_)/A)}function N(_){var W=i.toIndex(_);return f?Rt(W,0,g):W}function G(_){_!==E&&(D=E,E=_)}function j(_){return _?D:E}function K(){return!jt(e.focus)||e.isNavigation}function ht(){return t.state.is([Vt,Kt])&&!!e.waitForTransition}return{mount:I,go:T,scroll:L,getNext:y,getPrev:S,getAdjacent:x,getEnd:P,setIndex:G,getIndex:j,toIndex:O,toPage:p,toDest:N,hasFocus:K,isBusy:ht}}var Nn="http://www.w3.org/2000/svg",On="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ne=40;function wn(t,r,e){var n=H(t),s=n.on,v=n.bind,i=n.emit,u=e.classes,c=e.i18n,l=r.Elements,a=r.Controller,m=l.arrows,d=l.track,h=m,o=l.prev,f=l.next,y,S,E={};function g(){R(),s(Q,D)}function D(){V(),g()}function R(){var L=e.arrows;L&&!(o&&f)&&F(),o&&f&&(Bt(E,{prev:o,next:f}),Ht(h,L?"":"none"),st(h,S=He+"--"+e.direction),L&&(A(),T(),M([o,f],ee,d.id),i(Qr,o,f)))}function V(){n.destroy(),lt(h,S),y?(Lt(m?[o,f]:h),o=f=null):ot([o,f],Be)}function A(){s([Ct,te,$,xt,le],T),v(f,"click",z(I,">")),v(o,"click",z(I,"<"))}function I(L){a.go(L,!0)}function F(){h=m||Ot("div",u.arrows),o=w(!0),f=w(!1),y=!0,Zt(h,[o,f]),!m&&xe(h,d)}function w(L){var b='<button class="'+u.arrow+" "+(L?u.prev:u.next)+'" type="button"><svg xmlns="'+Nn+'" viewBox="0 0 '+ne+" "+ne+'" width="'+ne+'" height="'+ne+'" focusable="false"><path d="'+(e.arrowPath||On)+'" />';return hr(b)}function T(){if(o&&f){var L=t.index,b=a.getPrev(),x=a.getNext(),k=b>-1&&L<b?c.last:c.prev,Y=x>-1&&L>x?c.first:c.next;o.disabled=b<0,f.disabled=x<0,M(o,et,k),M(f,et,Y),i(tn,o,f,b,x)}}return{arrows:E,mount:g,destroy:V,update:T}}var Dn=ke+"-interval";function Pn(t,r,e){var n=H(t),s=n.on,v=n.bind,i=n.emit,u=de(e.interval,t.go.bind(t,">"),A),c=u.isPaused,l=r.Elements,a=r.Elements,m=a.root,d=a.toggle,h=e.autoplay,o,f,y=h==="pause";function S(){h&&(E(),d&&M(d,ee,l.track.id),y||g(),V())}function E(){e.pauseOnHover&&v(m,"mouseenter mouseleave",function(F){o=F.type==="mouseenter",R()}),e.pauseOnFocus&&v(m,"focusin focusout",function(F){f=F.type==="focusin",R()}),d&&v(d,"click",function(){y?g():D(!0)}),s([St,We,$],u.rewind),s(St,I)}function g(){c()&&r.Slides.isEnough()&&(u.start(!e.resetProgress),f=o=y=!1,V(),i(Ar))}function D(F){F===void 0&&(F=!0),y=!!F,V(),c()||(u.pause(),i(pr))}function R(){y||(o||f?D(!1):g())}function V(){d&&(ft(d,bt,!y),M(d,et,e.i18n[y?"play":"pause"]))}function A(F){var w=l.bar;w&&nt(w,"width",F*100+"%"),i(nn,F)}function I(F){var w=r.Slides.getAt(F);u.set(w&&+it(w.slide,Dn)||e.interval)}return{mount:S,destroy:u.cancel,play:g,pause:D,isPaused:c}}function Vn(t,r,e){var n=H(t),s=n.on;function v(){e.cover&&(s(Tr,z(u,!0)),s([Ct,Q,$],z(i,!0)))}function i(c){r.Slides.forEach(function(l){var a=Jt(l.container||l.slide,"img");a&&a.src&&u(c,a,l)})}function u(c,l,a){a.style("background",c?'center/cover no-repeat url("'+l.src+'")':"",!0),Ht(l,c?"none":"")}return{mount:v,destroy:z(i,!1)}}var xn=10,Mn=600,kn=.6,Fn=1.5,Gn=800;function Wn(t,r,e){var n=H(t),s=n.on,v=n.emit,i=t.state.set,u=r.Move,c=u.getPosition,l=u.getLimit,a=u.exceededLimit,m=u.translate,d=t.is(Pt),h,o,f=1;function y(){s(St,D),s([Q,$],R)}function S(A,I,F,w,T){var L=c();if(D(),F&&(!d||!a())){var b=r.Layout.sliderSize(),x=Ie(A)*b*fe(J(A)/b)||0;A=u.toPosition(r.Controller.toDest(A%b))+x}var k=Er(L,A,1);f=1,I=k?0:I||ce(J(A-L)/Fn,Gn),o=w,h=de(I,E,z(g,L,A,T),1),i(Kt),v(We),h.start()}function E(){i(Dt),o&&o(),v(xt)}function g(A,I,F,w){var T=c(),L=A+(I-A)*V(w),b=(L-T)*f;m(T+b),d&&!F&&a()&&(f*=kn,J(b)<xn&&S(l(a(!0)),Mn,!1,o,!0))}function D(){h&&h.cancel()}function R(){h&&!h.isPaused()&&(D(),E())}function V(A){var I=e.easingFunc;return I?I(A):1-Math.pow(1-A,4)}return{mount:y,destroy:D,scroll:S,cancel:R}}var It={passive:!1,capture:!0};function zn(t,r,e){var n=H(t),s=n.on,v=n.emit,i=n.bind,u=n.unbind,c=t.state,l=r.Move,a=r.Scroll,m=r.Controller,d=r.Elements.track,h=r.Media.reduce,o=r.Direction,f=o.resolve,y=o.orient,S=l.getPosition,E=l.exceededLimit,g,D,R,V,A,I=!1,F,w,T;function L(){i(d,Le,Ce,It),i(d,be,Ce,It),i(d,Fr,x,It),i(d,"click",B,{capture:!0}),i(d,"dragstart",ct),s([Ct,Q],b)}function b(){var C=e.drag;$e(!C),V=C==="free"}function x(C){if(F=!1,!w){var U=q(C);X(C.target)&&(U||!C.button)&&(m.isBusy()?ct(C,!0):(T=U?d:window,A=c.is([Vt,Kt]),R=null,i(T,Le,k,It),i(T,be,Y,It),l.cancel(),a.cancel(),P(C)))}}function k(C){if(c.is(ie)||(c.set(ie),v(jr)),C.cancelable)if(A){l.translate(g+Z(K(C)));var U=ht(C)>or,At=I!==(I=E());(U||At)&&P(C),F=!0,v(qr),ct(C)}else N(C)&&(A=p(C),ct(C))}function Y(C){c.is(ie)&&(c.set(Dt),v(Zr)),A&&(O(C),ct(C)),u(T,Le,k),u(T,be,Y),A=!1}function B(C){!w&&F&&ct(C,!0)}function P(C){R=D,D=C,g=S()}function O(C){var U=G(C),At=j(U),kt=e.rewind&&e.rewindByDrag;h(!1),V?m.scroll(At,0,e.snap):t.is(re)?m.go(y(Ie(U))<0?kt?"<":"-":kt?">":"+"):t.is(Pt)&&I&&kt?m.go(E(!0)?">":"<"):m.go(m.toDest(At),!0),h(!0)}function p(C){var U=e.dragMinThreshold,At=Wt(U),kt=At&&U.mouse||0,Wr=(At?U.touch:+U)||10;return J(K(C))>(q(C)?Wr:kt)}function N(C){return J(K(C))>J(K(C,!0))}function G(C){if(t.is(Mt)||!I){var U=ht(C);if(U&&U<or)return K(C)/U}return 0}function j(C){return S()+Ie(C)*mt(J(C)*(e.flickPower||600),V?1/0:r.Layout.listSize()*(e.flickMaxPages||1))}function K(C,U){return W(C,U)-W(_(C),U)}function ht(C){return Re(C)-Re(_(C))}function _(C){return D===C&&R||D}function W(C,U){return(q(C)?C.changedTouches[0]:C)["page"+f(U?"Y":"X")]}function Z(C){return C/(I&&t.is(Pt)?_n:1)}function X(C){var U=e.noDrag;return!zt(C,"."+Pr+", ."+ye)&&(!U||!zt(C,U))}function q(C){return typeof TouchEvent<"u"&&C instanceof TouchEvent}function Gr(){return A}function $e(C){w=C}return{mount:L,disable:$e,isDragging:Gr}}var Un={Spacebar:" ",Right:Ee,Left:ge,Up:Cr,Down:Rr};function Xe(t){return t=Et(t)?t:t.key,Un[t]||t}var ur="keydown";function Bn(t,r,e){var n=H(t),s=n.on,v=n.bind,i=n.unbind,u=t.root,c=r.Direction.resolve,l,a;function m(){d(),s(Q,h),s(Q,d),s(St,f)}function d(){var S=e.keyboard;S&&(l=S==="global"?window:u,v(l,ur,y))}function h(){i(l,ur)}function o(S){a=S}function f(){var S=a;a=!0,cr(function(){a=S})}function y(S){if(!a){var E=Xe(S);E===c(ge)?t.go("<"):E===c(Ee)&&t.go(">")}}return{mount:m,destroy:h,disable:o}}var Gt=ke+"-lazy",oe=Gt+"-srcset",Hn="["+Gt+"], ["+oe+"]";function Yn(t,r,e){var n=H(t),s=n.on,v=n.off,i=n.bind,u=n.emit,c=e.lazyLoad==="sequential",l=[te,xt],a=[];function m(){e.lazyLoad&&(d(),s($,d))}function d(){dt(a),h(),c?S():(v(l),s(l,o),o())}function h(){r.Slides.forEach(function(E){Me(E.slide,Hn).forEach(function(g){var D=it(g,Gt),R=it(g,oe);if(D!==g.src||R!==g.srcset){var V=e.classes.spinner,A=g.parentElement,I=Jt(A,"."+V)||Ot("span",V,A);a.push([g,E,I]),g.src||Ht(g,"none")}})})}function o(){a=a.filter(function(E){var g=e.perPage*((e.preloadPages||1)+1)-1;return E[1].isWithin(t.index,g)?f(E):!0}),a.length||v(l)}function f(E){var g=E[0];st(E[1].slide,we),i(g,"load error",z(y,E)),M(g,"src",it(g,Gt)),M(g,"srcset",it(g,oe)),ot(g,Gt),ot(g,oe)}function y(E,g){var D=E[0],R=E[1];lt(R.slide,we),g.type!=="error"&&(Lt(E[2]),Ht(D,""),u(Tr,D,R),u(Xt)),c&&S()}function S(){a.length&&f(a.shift())}return{mount:m,destroy:z(dt,a),check:o}}function Xn(t,r,e){var n=H(t),s=n.on,v=n.emit,i=n.bind,u=r.Slides,c=r.Elements,l=r.Controller,a=l.hasFocus,m=l.getIndex,d=l.go,h=r.Direction.resolve,o=c.pagination,f=[],y,S;function E(){g(),s([Q,$,le],E);var w=e.pagination;o&&Ht(o,w?"":"none"),w&&(s([St,We,xt],F),D(),F(),v(en,{list:y,items:f},I(t.index)))}function g(){y&&(Lt(o?yt(y.children):y),lt(y,S),dt(f),y=null),n.destroy()}function D(){var w=t.length,T=e.classes,L=e.i18n,b=e.perPage,x=a()?l.getEnd()+1:Yt(w/b);y=o||Ot("ul",T.pagination,c.track.parentElement),st(y,S=_e+"--"+A()),M(y,vt,"tablist"),M(y,et,L.select),M(y,Ue,A()===me?"vertical":"");for(var k=0;k<x;k++){var Y=Ot("li",null,y),B=Ot("button",{class:T.page,type:"button"},Y),P=u.getIn(k).map(function(p){return p.slide.id}),O=!a()&&b>1?L.pageX:L.slideX;i(B,"click",z(R,k)),e.paginationKeyboard&&i(B,"keydown",z(V,k)),M(Y,vt,"presentation"),M(B,vt,"tab"),M(B,ee,P.join(" ")),M(B,et,Ne(O,k+1)),M(B,wt,-1),f.push({li:Y,button:B,page:k})}}function R(w){d(">"+w,!0)}function V(w,T){var L=f.length,b=Xe(T),x=A(),k=-1;b===h(Ee,!1,x)?k=++w%L:b===h(ge,!1,x)?k=(--w+L)%L:b==="Home"?k=0:b==="End"&&(k=L-1);var Y=f[k];Y&&(dr(Y.button),d(">"+k),ct(T,!0))}function A(){return e.paginationDirection||e.direction}function I(w){return f[l.toPage(w)]}function F(){var w=I(m(!0)),T=I(m());if(w){var L=w.button;lt(L,bt),ot(L,rr),M(L,wt,-1)}if(T){var b=T.button;st(b,bt),M(b,rr,!0),M(b,wt,"")}v(rn,{list:y,items:f},w,T)}return{items:f,mount:E,destroy:g,getAt:I,update:F}}var $n=[" ","Enter"];function Kn(t,r,e){var n=e.isNavigation,s=e.slideFocus,v=[];function i(){t.splides.forEach(function(o){o.isParent||(l(t,o.splide),l(o.splide,t))}),n&&a()}function u(){v.forEach(function(o){o.destroy()}),dt(v)}function c(){u(),i()}function l(o,f){var y=H(o);y.on(St,function(S,E,g){f.go(f.is(Mt)?g:S)}),v.push(y)}function a(){var o=H(t),f=o.on;f(Sr,d),f(Lr,h),f([Ct,Q],m),v.push(o),o.emit(_r,t.splides)}function m(){M(r.Elements.list,Ue,e.direction===me?"vertical":"")}function d(o){t.go(o.index)}function h(o,f){Ve($n,Xe(f))&&(d(o),ct(f))}return{setup:z(r.Media.set,{slideFocus:jt(s)?n:s},!0),mount:i,destroy:u,remount:c}}function jn(t,r,e){var n=H(t),s=n.bind,v=0;function i(){e.wheel&&s(r.Elements.track,"wheel",u,It)}function u(l){if(l.cancelable){var a=l.deltaY,m=a<0,d=Re(l),h=e.wheelMinThreshold||0,o=e.wheelSleep||0;J(a)>h&&d-v>o&&(t.go(m?"<":">"),v=d),c(m)&&ct(l)}}function c(l){return!e.releaseWheel||t.state.is(Vt)||r.Controller.getAdjacent(l)!==-1}return{mount:i}}var qn=90;function Zn(t,r,e){var n=H(t),s=n.on,v=r.Elements.track,i=e.live&&!e.isNavigation,u=Ot("span",gn),c=de(qn,z(a,!1));function l(){i&&(d(!r.Autoplay.isPaused()),M(v,ar,!0),u.textContent="\u2026",s(Ar,z(d,!0)),s(pr,z(d,!1)),s([te,xt],z(a,!0)))}function a(h){M(v,ir,h),h?(Zt(v,u),c.start()):(Lt(u),c.cancel())}function m(){ot(v,[nr,ar,ir]),Lt(u)}function d(h){i&&M(v,nr,h?"off":"polite")}return{mount:l,disable:d,destroy:m}}var Jn=Object.freeze({__proto__:null,Media:on,Direction:un,Elements:An,Slides:Tn,Layout:Ln,Clones:Cn,Move:Rn,Controller:In,Arrows:wn,Autoplay:Pn,Cover:Vn,Scroll:Wn,Drag:zn,Keyboard:Bn,LazyLoad:Yn,Pagination:Xn,Sync:Kn,Wheel:jn,Live:Zn}),Qn={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},ti={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Sn,i18n:Qn,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ei(t,r,e){var n=r.Slides;function s(){H(t).on([Ct,$],v)}function v(){n.forEach(function(u){u.style("transform","translateX(-"+100*u.index+"%)")})}function i(u,c){n.style("transition","opacity "+e.speed+"ms "+e.easing),cr(c)}return{mount:s,start:i,cancel:Ce}}function ri(t,r,e){var n=r.Move,s=r.Controller,v=r.Scroll,i=r.Elements.list,u=z(nt,i,"transition"),c;function l(){H(t).bind(i,"transitionend",function(h){h.target===i&&c&&(m(),c())})}function a(h,o){var f=n.toPosition(h,!0),y=n.getPosition(),S=d(h);J(f-y)>=1&&S>=1?e.useScroll?v.scroll(f,S,!1,o):(u("transform "+S+"ms "+e.easing),n.translate(f,!0),c=o):(n.jump(h),o())}function m(){u(""),v.cancel()}function d(h){var o=e.rewindSpeed;if(t.is(Pt)&&o){var f=s.getIndex(!0),y=s.getEnd();if(f===0&&h>=y||f>=y&&h===0)return o}return e.speed}return{mount:l,start:a,cancel:m}}var ni=function(){function t(e,n){this.event=H(),this.Components={},this.state=an(Nt),this.splides=[],this._o={},this._E={};var s=Et(e)?gr(document,e):e;Ft(s,s+" is invalid."),this.root=s,n=gt({label:it(s,et)||"",labelledby:it(s,ze)||""},ti,t.defaults,n||{});try{gt(n,JSON.parse(it(s,ke)))}catch{Ft(!1,"Invalid JSON")}this._o=Object.create(gt({},n))}var r=t.prototype;return r.mount=function(n,s){var v=this,i=this.state,u=this.Components;Ft(i.is([Nt,ue]),"Already mounted!"),i.set(Nt),this._C=u,this._T=s||this._T||(this.is(re)?ei:ri),this._E=n||this._E;var c=Bt({},Jn,this._E,{Transition:this._T});return Tt(c,function(l,a){var m=l(v,u,v._o);u[a]=m,m.setup&&m.setup()}),Tt(u,function(l){l.mount&&l.mount()}),this.emit(Ct),st(this.root,En),i.set(Dt),this.emit(tr),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Dt)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,s){return this.event.on(n,s),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var s;return(s=this.event).emit.apply(s,[n].concat(yt(arguments,1))),this},r.add=function(n,s){return this._C.Slides.add(n,s),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit($),this},r.destroy=function(n){n===void 0&&(n=!0);var s=this.event,v=this.state;return v.is(Nt)?H(this).on(tr,this.destroy.bind(this,n)):(Tt(this._C,function(i){i.destroy&&i.destroy(n)},!0),s.emit(yr),s.destroy(),n&&dt(this.splides),v.set(ue)),this},zr(t,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),Ae=ni;Ae.defaults={};Ae.STATES=Br;document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector("#testinappi");if(t){t.addEventListener("click",function(){let e=document.querySelector("#testiotsikko");e&&(e.textContent="joko joko joo")});var r=new Ae(".splide",{type:"loop",perPage:3});r.mount()}});console.log(" najy jee?");})();
/*! Bundled license information:

@splidejs/splide/dist/js/splide.esm.js:
  (*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)
*/
//# sourceMappingURL=index.js.map
