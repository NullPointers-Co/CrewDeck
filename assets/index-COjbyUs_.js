import{V as xe,m as Ft,M as jt,a as Dt}from"./VImg-B2Hs72vs.js";import{V as $t}from"./VContainer-zLeqTUDv.js";import{S as et,U as tt,g as D,W as fe,D as Ht,m as $,C as Ee,G as Wt,h as K,i as d,p as I,b as ee,X as oe,c as Ae,d as Pe,F as Se,Y as nt,Z as at,e as P,_ as ot,$ as it,N as z,a0 as ve,r as q,a1 as Y,f as Oe,I as R,a2 as H,a3 as zt,a4 as Ve,j,H as Me,w as _e,a5 as lt,a6 as qt,a7 as me,a8 as st,a9 as Fe,aa as Ut,s as Q,ab as Gt,J as Yt,ac as rt,ad as Kt,ae as Jt,af as Xt,L as Zt,E as Qt,t as en,K as tn,ag as nn,ah as an,B as on,l as ct,o as ut,n as dt,q as U,y as le}from"./index-IGjd7s9i.js";import{m as ft,g as pe,b as vt,h as ln,i as mt,c as yt,j as gt,k as ht,e as bt,l as sn,V as ke,f as ce,n as St,a as rn,o as cn,p as un,q as dn,r as fn,R as vn,d as mn,s as yn,t as gn,v as hn,w as bn,L as Sn,x as je,y as ye,z as ge,A as De,B as $e,u as kn,C as wn,D as Cn}from"./index-B8IWVMi0.js";class G{constructor(n){let{x:t,y:a,width:o,height:i}=n;this.x=t,this.y=a,this.width=o,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function He(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function xn(e){return Array.isArray(e)?new G({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function En(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,i,s,l,c;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),i=+o[0],s=+o[5],l=+o[12],c=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),i=+o[0],s=+o[3],l=+o[4],c=+o[5];else return new G(n);const f=t.transformOrigin,r=n.x-l-(1-i)*parseFloat(f),h=n.y-c-(1-s)*parseFloat(f.slice(f.indexOf(" ")+1)),x=i?n.width/i:e.offsetWidth+1,C=s?n.height/s:e.offsetHeight+1;return new G({x:r,y:h,width:x,height:C})}else return new G(n)}function An(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const se=new WeakMap;function Pn(e,n){Object.keys(n).forEach(t=>{if(et(t)){const a=tt(t),o=se.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[s,l]=i;s===a&&(e.removeEventListener(a,l),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),se.has(e)||se.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function On(e,n){Object.keys(n).forEach(t=>{if(et(t)){const a=tt(t),o=se.get(e);o==null||o.forEach(i=>{const[s,l]=i;s===a&&(e.removeEventListener(a,l),o.delete(i))})}else e.removeAttribute(t)})}function Vn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return D()({name:t??fe(Ht(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...$()},setup(a,o){let{slots:i}=o;return()=>{var s;return Ee(a.tag,{class:[e,a.class],style:a.style},(s=i.default)==null?void 0:s.call(i))}}})}function kt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const _n="cubic-bezier(0.4, 0, 0.2, 1)";function pn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Ln(e):Le(e))return e;e=e.parentElement}return document.scrollingElement}function ue(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Le(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Le(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ln(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Tn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Bn="/CrewDeck/assets/logo-BqgwMaIS.png",In="/CrewDeck/assets/no-button-sm-CvyU2Jps.png",Nn=D()({name:"VCardActions",props:$(),setup(e,n){let{slots:t}=n;return Wt({VBtn:{slim:!0,variant:"text"}}),K(()=>{var a;return d("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Rn=I({opacity:[Number,String],...$(),...ee()},"VCardSubtitle"),Mn=D()({name:"VCardSubtitle",props:Rn(),setup(e,n){let{slots:t}=n;return K(()=>d(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Fn=Vn("v-card-title"),jn=I({start:Boolean,end:Boolean,icon:oe,image:String,text:String,...ft(),...$(),...pe(),...vt(),...ln(),...ee(),...Ae(),...mt({variant:"flat"})},"VAvatar"),We=D()({name:"VAvatar",props:jn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=Pe(e),{borderClasses:o}=yt(e),{colorClasses:i,colorStyles:s,variantClasses:l}=gt(e),{densityClasses:c}=ht(e),{roundedClasses:f}=bt(e),{sizeClasses:r,sizeStyles:h}=sn(e);return K(()=>d(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,i.value,c.value,f.value,r.value,l.value,e.class],style:[s.value,h.value,e.style]},{default:()=>[t.default?d(ce,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?d(xe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?d(ke,{key:"icon",icon:e.icon},null):e.text,St(!1,"v-avatar")]})),{}}}),Dn=I({appendAvatar:String,appendIcon:oe,prependAvatar:String,prependIcon:oe,subtitle:[String,Number],title:[String,Number],...$(),...pe()},"VCardItem"),$n=D()({name:"VCardItem",props:Dn(),setup(e,n){let{slots:t}=n;return K(()=>{var f;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),s=!!(i||t.append),l=!!(e.title!=null||t.title),c=!!(e.subtitle!=null||t.subtitle);return d("div",{class:["v-card-item",e.class],style:e.style},[o&&d("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?d(ce,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):d(Se,null,[e.prependAvatar&&d(We,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(ke,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),d("div",{class:"v-card-item__content"},[l&&d(Fn,{key:"title"},{default:()=>{var r;return[((r=t.title)==null?void 0:r.call(t))??e.title]}}),c&&d(Mn,{key:"subtitle"},{default:()=>{var r;return[((r=t.subtitle)==null?void 0:r.call(t))??e.subtitle]}}),(f=t.default)==null?void 0:f.call(t)]),s&&d("div",{key:"append",class:"v-card-item__append"},[t.append?d(ce,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):d(Se,null,[e.appendIcon&&d(ke,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(We,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Hn=I({opacity:[Number,String],...$(),...ee()},"VCardText"),Wn=D()({name:"VCardText",props:Hn(),setup(e,n){let{slots:t}=n;return K(()=>d(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),zn=I({appendAvatar:String,appendIcon:oe,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:oe,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ft(),...$(),...pe(),...nt(),...rn(),...cn(),...un(),...dn(),...vt(),...fn(),...ee(),...Ae(),...mt({variant:"elevated"})},"VCard"),ze=D()({name:"VCard",directives:{Ripple:vn},props:zn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=Pe(e),{borderClasses:i}=yt(e),{colorClasses:s,colorStyles:l,variantClasses:c}=gt(e),{densityClasses:f}=ht(e),{dimensionStyles:r}=at(e),{elevationClasses:h}=mn(e),{loaderClasses:x}=yn(e),{locationStyles:C}=gn(e),{positionClasses:y}=hn(e),{roundedClasses:v}=bt(e),E=bn(e,t),V=P(()=>e.link!==!1&&E.isLink.value),k=P(()=>!e.disabled&&e.link!==!1&&(e.link||E.isClickable.value));return K(()=>{const w=V.value?"a":e.tag,_=!!(a.title||e.title!=null),L=!!(a.subtitle||e.subtitle!=null),B=_||L,O=!!(a.append||e.appendAvatar||e.appendIcon),u=!!(a.prepend||e.prependAvatar||e.prependIcon),p=!!(a.image||e.image),te=B||u||O,A=!!(a.text||e.text!=null);return ot(d(w,z({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},o.value,i.value,s.value,f.value,h.value,x.value,y.value,v.value,c.value,e.class],style:[l.value,r.value,C.value,e.style],onClick:k.value&&E.navigate,tabindex:e.disabled?-1:void 0},E.linkProps),{default:()=>{var b;return[p&&d("div",{key:"image",class:"v-card__image"},[a.image?d(ce,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):d(xe,{key:"image-img",cover:!0,src:e.image},null)]),d(Sn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),te&&d($n,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),A&&d(Wn,{key:"text"},{default:()=>{var m;return[((m=a.text)==null?void 0:m.call(a))??e.text]}}),(b=a.default)==null?void 0:b.call(a),a.actions&&d(Nn,null,{default:a.actions}),St(k.value,"v-card")]}}),[[it("ripple"),k.value&&e.ripple]])}),{}}}),wt=ve.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),Ct=ve.reduce((e,n)=>{const t="offset"+fe(n);return e[t]={type:[String,Number],default:null},e},{}),xt=ve.reduce((e,n)=>{const t="order"+fe(n);return e[t]={type:[String,Number],default:null},e},{}),qe={col:Object.keys(wt),offset:Object.keys(Ct),order:Object.keys(xt)};function qn(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");a+=`-${o}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Un=["auto","start","end","center","baseline","stretch"],Gn=I({cols:{type:[Boolean,String,Number],default:!1},...wt,offset:{type:[String,Number],default:null},...Ct,order:{type:[String,Number],default:null},...xt,alignSelf:{type:String,default:null,validator:e=>Un.includes(e)},...$(),...ee()},"VCol"),Ue=D()({name:"VCol",props:Gn(),setup(e,n){let{slots:t}=n;const a=P(()=>{const o=[];let i;for(i in qe)qe[i].forEach(l=>{const c=e[l],f=qn(i,l,c);f&&o.push(f)});const s=o.some(l=>l.startsWith("v-col-"));return o.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return Ee(e.tag,{class:[a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),Te=["start","end","center"],Et=["space-between","space-around","space-evenly"];function Be(e,n){return ve.reduce((t,a)=>{const o=e+fe(a);return t[o]=n(),t},{})}const Yn=[...Te,"baseline","stretch"],At=e=>Yn.includes(e),Pt=Be("align",()=>({type:String,default:null,validator:At})),Kn=[...Te,...Et],Ot=e=>Kn.includes(e),Vt=Be("justify",()=>({type:String,default:null,validator:Ot})),Jn=[...Te,...Et,"stretch"],_t=e=>Jn.includes(e),pt=Be("alignContent",()=>({type:String,default:null,validator:_t})),Ge={align:Object.keys(Pt),justify:Object.keys(Vt),alignContent:Object.keys(pt)},Xn={align:"align",justify:"justify",alignContent:"align-content"};function Zn(e,n,t){let a=Xn[e];if(t!=null){if(n){const o=n.replace(e,"");a+=`-${o}`}return a+=`-${t}`,a.toLowerCase()}}const Qn=I({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:At},...Pt,justify:{type:String,default:null,validator:Ot},...Vt,alignContent:{type:String,default:null,validator:_t},...pt,...$(),...ee()},"VRow"),ea=D()({name:"VRow",props:Qn(),setup(e,n){let{slots:t}=n;const a=P(()=>{const o=[];let i;for(i in Ge)Ge[i].forEach(s=>{const l=e[s],c=Zn(i,s,l);c&&o.push(c)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return Ee(e.tag,{class:["v-row",a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}});function he(e,n){return{x:e.x+n.x,y:e.y+n.y}}function ta(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ye(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return he({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return he({x:o,y:i},n)}return he({x:n.width/2,y:n.height/2},n)}const Lt={static:oa,connected:la},na=I({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Lt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function aa(e,n){const t=q({}),a=q();Y&&Oe(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,l;R(()=>e.locationStrategy,i),H(()=>{window.removeEventListener("resize",o),a.value=void 0}),window.addEventListener("resize",o,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:a.value=(l=Lt[e.locationStrategy](n,e,t))==null?void 0:l.updateLocation});function o(i){var s;(s=a.value)==null||s.call(a,i)}return{contentStyles:t,updateLocation:a}}function oa(){}function ia(e,n){const t=En(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function la(e,n,t){(Array.isArray(e.target.value)||Tn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=zt(()=>{const y=je(n.location,e.isRtl.value),v=n.origin==="overlap"?y:n.origin==="auto"?ye(y):je(n.origin,e.isRtl.value);return y.side===v.side&&y.align===ge(v).align?{preferredAnchor:De(y),preferredOrigin:De(v)}:{preferredAnchor:y,preferredOrigin:v}}),[s,l,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>P(()=>{const v=parseFloat(n[y]);return isNaN(v)?1/0:v})),r=P(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let h=!1;const x=new ResizeObserver(()=>{h&&C()});R([e.target,e.contentEl],(y,v)=>{let[E,V]=y,[k,w]=v;k&&!Array.isArray(k)&&x.unobserve(k),E&&!Array.isArray(E)&&x.observe(E),w&&x.unobserve(w),V&&x.observe(V)},{immediate:!0}),H(()=>{x.disconnect()});function C(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const y=xn(e.target.value),v=ia(e.contentEl.value,e.isRtl.value),E=ue(e.contentEl.value),V=12;E.length||(E.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const k=E.reduce((A,b)=>{const m=b.getBoundingClientRect(),S=new G({x:b===document.documentElement?0:m.x,y:b===document.documentElement?0:m.y,width:b.clientWidth,height:b.clientHeight});return A?new G({x:Math.max(A.left,S.left),y:Math.max(A.top,S.top),width:Math.min(A.right,S.right)-Math.max(A.left,S.left),height:Math.min(A.bottom,S.bottom)-Math.max(A.top,S.top)}):S},void 0);k.x+=V,k.y+=V,k.width-=V*2,k.height-=V*2;let w={anchor:o.value,origin:i.value};function _(A){const b=new G(v),m=Ye(A.anchor,y),S=Ye(A.origin,b);let{x:M,y:F}=ta(m,S);switch(A.anchor.side){case"top":F-=r.value[0];break;case"bottom":F+=r.value[0];break;case"left":M-=r.value[0];break;case"right":M+=r.value[0];break}switch(A.anchor.align){case"top":F-=r.value[1];break;case"bottom":F+=r.value[1];break;case"left":M-=r.value[1];break;case"right":M+=r.value[1];break}return b.x+=M,b.y+=F,b.width=Math.min(b.width,c.value),b.height=Math.min(b.height,f.value),{overflows:He(b,k),x:M,y:F}}let L=0,B=0;const O={x:0,y:0},u={x:!1,y:!1};let p=-1;for(;!(p++>10);){const{x:A,y:b,overflows:m}=_(w);L+=A,B+=b,v.x+=A,v.y+=b;{const S=$e(w.anchor),M=m.x.before||m.x.after,F=m.y.before||m.y.after;let J=!1;if(["x","y"].forEach(T=>{if(T==="x"&&M&&!u.x||T==="y"&&F&&!u.y){const W={anchor:{...w.anchor},origin:{...w.origin}},X=T==="x"?S==="y"?ge:ye:S==="y"?ye:ge;W.anchor=X(W.anchor),W.origin=X(W.origin);const{overflows:Z}=_(W);(Z[T].before<=m[T].before&&Z[T].after<=m[T].after||Z[T].before+Z[T].after<(m[T].before+m[T].after)/2)&&(w=W,J=u[T]=!0)}}),J)continue}m.x.before&&(L+=m.x.before,v.x+=m.x.before),m.x.after&&(L-=m.x.after,v.x-=m.x.after),m.y.before&&(B+=m.y.before,v.y+=m.y.before),m.y.after&&(B-=m.y.after,v.y-=m.y.after);{const S=He(v,k);O.x=k.width-S.x.before-S.x.after,O.y=k.height-S.y.before-S.y.after,L+=S.x.before,v.x+=S.x.before,B+=S.y.before,v.y+=S.y.before}break}const te=$e(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:j(be(B)),left:e.isRtl.value?void 0:j(be(L)),right:e.isRtl.value?j(be(-L)):void 0,minWidth:j(te==="y"?Math.min(s.value,y.width):s.value),maxWidth:j(Ke(Me(O.x,s.value===1/0?0:s.value,c.value))),maxHeight:j(Ke(Me(O.y,l.value===1/0?0:l.value,f.value)))}),{available:O,contentBox:v}}return R(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>C()),Ve(()=>{const y=C();if(!y)return;const{available:v,contentBox:E}=y;E.height>v.y&&requestAnimationFrame(()=>{C(),requestAnimationFrame(()=>{C()})})}),{updateLocation:C}}function be(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ke(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let we=!0;const de=[];function sa(e){!we||de.length?(de.push(e),Ce()):(we=!1,e(),Ce())}let Je=-1;function Ce(){cancelAnimationFrame(Je),Je=requestAnimationFrame(()=>{const e=de.shift();e&&e(),de.length?Ce():we=!0})}const re={none:null,close:ua,block:da,reposition:fa},ra=I({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in re}},"VOverlay-scroll-strategies");function ca(e,n){if(!Y)return;let t;_e(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=lt(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=re[e.scrollStrategy])==null||a.call(re,n,e,t)}))}),H(()=>{t==null||t.stop()})}function ua(e){function n(t){e.isActive.value=!1}Tt(e.targetEl.value??e.contentEl.value,n)}function da(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,a=[...new Set([...ue(e.targetEl.value,n.contained?t:void 0),...ue(e.contentEl.value,n.contained?t:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(l=>Le(l)&&l)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,c)=>{l.style.setProperty("--v-body-scroll-x",j(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",j(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",j(o)),l.classList.add("v-overlay-scroll-blocked")}),H(()=>{a.forEach((l,c)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),r=parseFloat(l.style.getPropertyValue("--v-body-scroll-y")),h=l.style.scrollBehavior;l.style.scrollBehavior="auto",l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-r,l.style.scrollBehavior=h}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function fa(e,n,t){let a=!1,o=-1,i=-1;function s(l){sa(()=>{var r,h;const c=performance.now();(h=(r=e.updateLocation).value)==null||h.call(r,l),a=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{t.run(()=>{Tt(e.targetEl.value??e.contentEl.value,l=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{s(l)})})):s(l)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function Tt(e,n){const t=[document,...ue(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),H(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const va=Symbol.for("vuetify:v-menu"),ma=I({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ya(e,n){let t=()=>{};function a(s){t==null||t();const l=Number(s?e.openDelay:e.closeDelay);return new Promise(c=>{t=qt(l,()=>{n==null||n(s),c(s)})})}function o(){return a(!0)}function i(){return a(!1)}return{clearDelay:t,runOpenDelay:o,runCloseDelay:i}}const ga=I({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ma()},"VOverlay-activator");function ha(e,n){let{isActive:t,isTop:a,contentEl:o}=n;const i=me("useActivator"),s=q();let l=!1,c=!1,f=!0;const r=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),h=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:x,runCloseDelay:C}=ya(e,u=>{u===(e.openOnHover&&l||r.value&&c)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==u&&(f=!0),t.value=u)}),y=q(),v={onClick:u=>{u.stopPropagation(),s.value=u.currentTarget||u.target,t.value||(y.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var p;(p=u.sourceCapabilities)!=null&&p.firesTouchEvents||(l=!0,s.value=u.currentTarget||u.target,x())},onMouseleave:u=>{l=!1,C()},onFocus:u=>{Ut(u.target,":focus-visible")!==!1&&(c=!0,u.stopPropagation(),s.value=u.currentTarget||u.target,x())},onBlur:u=>{c=!1,u.stopPropagation(),C()}},E=P(()=>{const u={};return h.value&&(u.onClick=v.onClick),e.openOnHover&&(u.onMouseenter=v.onMouseenter,u.onMouseleave=v.onMouseleave),r.value&&(u.onFocus=v.onFocus,u.onBlur=v.onBlur),u}),V=P(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{l=!0,x()},u.onMouseleave=()=>{l=!1,C()}),r.value&&(u.onFocusin=()=>{c=!0,x()},u.onFocusout=()=>{c=!1,C()}),e.closeOnContentClick){const p=st(va,null);u.onClick=()=>{t.value=!1,p==null||p.closeParents()}}return u}),k=P(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{f&&(l=!0,f=!1,x())},u.onMouseleave=()=>{l=!1,C()}),u});R(a,u=>{var p;u&&(e.openOnHover&&!l&&(!r.value||!c)||r.value&&!c&&(!e.openOnHover||!l))&&!((p=o.value)!=null&&p.contains(document.activeElement))&&(t.value=!1)}),R(t,u=>{u||setTimeout(()=>{y.value=void 0})},{flush:"post"});const w=Fe();_e(()=>{w.value&&Ve(()=>{s.value=w.el})});const _=Fe(),L=P(()=>e.target==="cursor"&&y.value?y.value:_.value?_.el:Bt(e.target,i)||s.value),B=P(()=>Array.isArray(L.value)?void 0:L.value);let O;return R(()=>!!e.activator,u=>{u&&Y?(O=lt(),O.run(()=>{ba(e,i,{activatorEl:s,activatorEvents:E})})):O&&O.stop()},{flush:"post",immediate:!0}),H(()=>{O==null||O.stop()}),{activatorEl:s,activatorRef:w,target:L,targetEl:B,targetRef:_,activatorEvents:E,contentEvents:V,scrimEvents:k}}function ba(e,n,t){let{activatorEl:a,activatorEvents:o}=t;R(()=>e.activator,(c,f)=>{if(f&&c!==f){const r=l(f);r&&s(r)}c&&Ve(()=>i())},{immediate:!0}),R(()=>e.activatorProps,()=>{i()}),H(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Pn(c,z(o.value,f))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&On(c,z(o.value,f))}function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=Bt(c,n);return a.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,a.value}}function Bt(e,n){var a,o;if(!e)return;let t;if(e==="parent"){let i=(o=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:o.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Sa(){if(!Y)return Q(!1);const{ssr:e}=Gt();if(e){const n=Q(!1);return Yt(()=>{n.value=!0}),n}else return Q(!0)}const ka=I({eager:Boolean},"lazy");function wa(e,n){const t=Q(!1),a=P(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function Ca(){const n=me("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Xe=Symbol.for("vuetify:stack"),ae=rt([]);function xa(e,n,t){const a=me("useStack"),o=!t,i=st(Xe,void 0),s=rt({activeChildren:new Set});Kt(Xe,s);const l=Q(+n.value);Oe(e,()=>{var h;const r=(h=ae.at(-1))==null?void 0:h[1];l.value=r?r+10:+n.value,o&&ae.push([a.uid,l.value]),i==null||i.activeChildren.add(a.uid),H(()=>{if(o){const x=Jt(ae).findIndex(C=>C[0]===a.uid);ae.splice(x,1)}i==null||i.activeChildren.delete(a.uid)})});const c=Q(!0);o&&_e(()=>{var h;const r=((h=ae.at(-1))==null?void 0:h[0])===a.uid;setTimeout(()=>c.value=r)});const f=P(()=>!s.activeChildren.size);return{globalTop:Xt(c),localTop:f,stackStyles:P(()=>({zIndex:l.value}))}}function Ea(e){return{teleportTarget:P(()=>{const t=e();if(t===!0||!Y)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=[...a.children].find(i=>i.matches(".v-overlay-container"));return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Aa(){return!0}function It(e,n,t){if(!e||Nt(e,t)===!1)return!1;const a=kt(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function Nt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Aa)(e)}function Pa(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&It(e,n,t)&&setTimeout(()=>{Nt(e,t)&&a&&a(e)},0)}function Ze(e,n){const t=kt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Oa={mounted(e,n){const t=o=>Pa(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=It(o,e,n)};Ze(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},beforeUnmount(e,n){e._clickOutside&&(Ze(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Va(e){const{modelValue:n,color:t,...a}=e;return d(on,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&d("div",z({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const _a=I({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...ga(),...$(),...nt(),...ka(),...na(),...ra(),...Ae(),...Ft()},"VOverlay"),Qe=D()({name:"VOverlay",directives:{ClickOutside:Oa},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,..._a()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=me("VOverlay"),s=q(),l=q(),c=q(),f=Zt(e,"modelValue"),r=P({get:()=>f.value,set:g=>{g&&e.disabled||(f.value=g)}}),{themeClasses:h}=Pe(e),{rtlClasses:x,isRtl:C}=Qt(),{hasContent:y,onAfterLeave:v}=wa(e,r),E=kn(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:V,localTop:k,stackStyles:w}=xa(r,en(e,"zIndex"),e._disableGlobalStack),{activatorEl:_,activatorRef:L,target:B,targetEl:O,targetRef:u,activatorEvents:p,contentEvents:te,scrimEvents:A}=ha(e,{isActive:r,isTop:k,contentEl:c}),{teleportTarget:b}=Ea(()=>{var ne,Ne,Re;const g=e.attach||e.contained;if(g)return g;const N=((ne=_==null?void 0:_.value)==null?void 0:ne.getRootNode())||((Re=(Ne=i.proxy)==null?void 0:Ne.$el)==null?void 0:Re.getRootNode());return N instanceof ShadowRoot?N:!1}),{dimensionStyles:m}=at(e),S=Sa(),{scopeId:M}=Ca();R(()=>e.disabled,g=>{g&&(r.value=!1)});const{contentStyles:F,updateLocation:J}=aa(e,{isRtl:C,contentEl:c,target:B,isActive:r});ca(e,{root:s,contentEl:c,targetEl:O,isActive:r,updateLocation:J});function T(g){o("click:outside",g),e.persistent?ie():r.value=!1}function W(g){return r.value&&V.value&&(!e.scrim||g.target===l.value||g instanceof MouseEvent&&g.shadowTarget===l.value)}Y&&R(r,g=>{g?window.addEventListener("keydown",X):window.removeEventListener("keydown",X)},{immediate:!0}),tn(()=>{Y&&window.removeEventListener("keydown",X)});function X(g){var N,ne;g.key==="Escape"&&V.value&&(e.persistent?ie():(r.value=!1,(N=c.value)!=null&&N.contains(document.activeElement)&&((ne=_.value)==null||ne.focus())))}const Z=wn();Oe(()=>e.closeOnBack,()=>{Cn(Z,g=>{V.value&&r.value?(g(!1),e.persistent?ie():r.value=!1):g()})});const Ie=q();R(()=>r.value&&(e.absolute||e.contained)&&b.value==null,g=>{if(g){const N=pn(s.value);N&&N!==document.scrollingElement&&(Ie.value=N.scrollTop)}});function ie(){e.noClickAnimation||c.value&&An(c.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:_n})}function Rt(){o("afterEnter")}function Mt(){v(),o("afterLeave")}return K(()=>{var g;return d(Se,null,[(g=t.activator)==null?void 0:g.call(t,{isActive:r.value,targetRef:u,props:z({ref:L},p.value,e.activatorProps)}),S.value&&y.value&&d(nn,{disabled:!b.value,to:b.value},{default:()=>[d("div",z({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},h.value,x.value,e.class],style:[w.value,{"--v-overlay-opacity":e.opacity,top:j(Ie.value)},e.style],ref:s},M,a),[d(Va,z({color:E,modelValue:r.value&&!!e.scrim,ref:l},A.value),null),d(jt,{appear:!0,persisted:!0,transition:e.transition,target:B.value,onAfterEnter:Rt,onAfterLeave:Mt},{default:()=>{var N;return[ot(d("div",z({ref:c,class:["v-overlay__content",e.contentClass],style:[m.value,F.value]},te.value,e.contentProps),[(N=t.default)==null?void 0:N.call(t,{isActive:r})]),[[an,r.value],[it("click-outside"),{handler:T,closeConditional:W,include:()=>[_.value]}]])]}})])]})])}),{activatorEl:_,scrimEl:l,target:B,animateClick:ie,contentEl:c,globalTop:V,localTop:k,updateLocation:J}}}),pa=ct({__name:"Dashboard",setup(e){return(n,t)=>(ut(),dt($t,{class:"fill-height pa-4"},{default:U(()=>[d(Dt,{class:"align-center fill-height mx-auto"},{default:U(()=>[d(xe,{class:"mb-4",height:"150",src:Bn}),t[0]||(t[0]=le("div",{class:"text-center"},[le("div",{class:"text-body-2 font-weight-light mb-n1"}," Welcome to "),le("h1",{class:"text-h2 font-weight-bold"}," NullPointers Co ")],-1)),t[1]||(t[1]=le("div",{class:"py-4"},null,-1)),d(ea,{class:"ma-0",justify:"center",align:"start",dense:""},{default:U(()=>[d(Ue,{cols:"12",md:"6"},{default:U(()=>[d(ze,{class:"py-4",color:"surface-variant",rounded:"lg","prepend-icon":"mdi-calendar-remove",variant:"outlined",title:"No Meeting Button",subtitle:"No meetings today? Just press the button!","append-avatar":In,to:"/no-meeting"},{default:U(()=>[d(Qe,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),d(Ue,{cols:"12",md:"6"},{default:U(()=>[d(ze,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://www.notion.so/app-12970de2bada80b2a10ad1e8c5ad3cb9","prepend-icon":"mdi-text-box-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Learn about all things Vuetify in our documentation.",target:"_blank",title:"Documentation",variant:"outlined"},{default:U(()=>[d(Qe,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Na=ct({__name:"index",setup(e){return(n,t)=>{const a=pa;return ut(),dt(a)}}});export{Na as default};