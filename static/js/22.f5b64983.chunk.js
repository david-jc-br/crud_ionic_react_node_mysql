/*! For license information please see 22.f5b64983.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkfront_end=globalThis.webpackChunkfront_end||[]).push([[22],{22:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>i});var r=n(811),o=n(507),a=n(909);const i=(t,e,n,i,s)=>{const c=t.ownerDocument.defaultView;let l=(0,o.i)(t);const h=t=>l?-t.deltaX:t.deltaX;return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(l=(0,o.i)(t),(t=>{const{startX:e}=t;return l?e>=c.innerWidth-50:e<=50})(n)&&e()),onStart:n,onMove:t=>{const e=h(t)/c.innerWidth;i(e)},onEnd:t=>{const e=h(t),n=c.innerWidth,o=e/n,a=(t=>l?-t.velocityX:t.velocityX)(t),i=a>=0&&(a>.2||e>n/2),u=(i?1-o:o)*n;let d=0;if(u>5){const t=u/Math.abs(a);d=Math.min(t,540)}s(i,o<=0?.01:(0,r.m)(0,o,.9999),d)}})}}}]);
//# sourceMappingURL=22.f5b64983.chunk.js.map