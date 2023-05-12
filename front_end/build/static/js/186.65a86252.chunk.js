"use strict";(globalThis.webpackChunkfront_end=globalThis.webpackChunkfront_end||[]).push([[186],{186:(e,t,o)=>{o.r(t),o.d(t,{startInputShims:()=>y});var n,i=o(743),r=o(811),a=o(136);!function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"}(n||(n={}));const s={getEngine(){var e;return(null===(e=null===a.w||void 0===a.w?void 0:a.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null===a.w||void 0===a.w?void 0:a.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},d=new WeakMap,l=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];d.has(e)!==o&&(o?c(e,t,n,i):u(e,t))},c=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),i.appendChild(r),d.set(e,r);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${o}px,0) scale(0)`},u=(e,t)=>{const o=d.get(e);o&&(d.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},v="input, textarea, [no-blur], [contenteditable]",f=(e,t,o,n)=>{const i=e.top,r=e.bottom,a=t.top,s=a+15,d=Math.min(t.bottom,n-o)-50-r,l=s-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-a),v=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:o,inputSafeY:4-(i-s)}},g="$ionPaddingTimer",m=(e,t,o)=>{const n=e[g];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[g]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},w=(e,t,o)=>{e.addEventListener("focusout",(()=>{t&&m(t,0,o)}),{once:!0})};let h=0;const p=async function(e,t,o,n,a,s){let d=arguments.length>6&&void 0!==arguments[6]&&arguments[6];if(!o&&!n)return;const c=((e,t,o)=>{var n;const i=null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e;return f(i.getBoundingClientRect(),t.getBoundingClientRect(),o,e.ownerDocument.defaultView.innerHeight)})(e,o||n,a);if(o&&Math.abs(c.scrollAmount)<4)return t.focus(),void(s&&null!==o&&(h+=c.scrollPadding,m(o,h),w(t,o,(()=>h=0))));if(l(e,t,!0,c.inputSafeY,d),t.focus(),(0,r.r)((()=>e.click())),s&&o&&(h+=c.scrollPadding,m(o,h)),"undefined"!==typeof window){let n;const r=async()=>{void 0!==n&&clearTimeout(n),window.removeEventListener("ionKeyboardDidShow",a),window.removeEventListener("ionKeyboardDidShow",r),o&&await(0,i.c)(o,0,c.scrollAmount,c.scrollDuration),l(e,t,!1,c.inputSafeY),t.focus(),s&&w(t,o,(()=>h=0))},a=()=>{window.removeEventListener("ionKeyboardDidShow",a),window.addEventListener("ionKeyboardDidShow",r)};if(o){const e=await(0,i.g)(o),s=e.scrollHeight-e.clientHeight;if(c.scrollAmount>s-e.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",a)):window.addEventListener("ionKeyboardDidShow",r),void(n=setTimeout(r,1e3))}r()}},y=async(e,t)=>{const o=document,a="ios"===t,d="android"===t,c=e.getNumber("keyboardHeight",290),u=e.getBoolean("scrollAssist",!0),f=e.getBoolean("hideCaretOnScroll",a),g=e.getBoolean("inputBlurring",a),m=e.getBoolean("scrollPadding",!0),w=Array.from(o.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,y=new WeakMap,b=await s.getResizeMode(),E=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),a=(0,i.a)(e),s=a?null:e.closest("ion-footer");if(!o)return;if(a&&f&&!h.has(e)){const t=((e,t,o)=>{if(!o||!t)return()=>{};const n=o=>{var n;(n=t)===n.getRootNode().activeElement&&l(e,t,o)},i=()=>l(e,t,!1),a=()=>n(!0),s=()=>n(!1);return(0,r.a)(o,"ionScrollStart",a),(0,r.a)(o,"ionScrollEnd",s),t.addEventListener("blur",i),()=>{(0,r.b)(o,"ionScrollStart",a),(0,r.b)(o,"ionScrollEnd",s),t.removeEventListener("blur",i)}})(e,o,a);h.set(e,t)}if(!("date"===o.type||"datetime-local"===o.type)&&(a||s)&&u&&!y.has(e)){const t=function(e,t,o,i,r,a,s){let d=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const l=a&&(void 0===s||s.mode===n.None),c=async()=>{p(e,t,o,i,r,l,d)};return e.addEventListener("focusin",c,!0),()=>{e.removeEventListener("focusin",c,!0)}}(e,o,a,s,c,m,b,d);y.set(e,t)}};g&&(()=>{let e=!0,t=!1;const o=document,n=()=>{t=!0},i=()=>{e=!0},a=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(v))return;const r=n.target;r!==i&&(r.matches(v)||r.closest(v)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};(0,r.a)(o,"ionScrollStart",n),o.addEventListener("focusin",i,!0),o.addEventListener("touchend",a,!1)})();for(const n of w)E(n);o.addEventListener("ionInputDidLoad",(e=>{E(e.detail)})),o.addEventListener("ionInputDidUnload",(e=>{(e=>{if(f){const t=h.get(e);t&&t(),h.delete(e)}if(u){const t=y.get(e);t&&t(),y.delete(e)}})(e.detail)}))}}}]);
//# sourceMappingURL=186.65a86252.chunk.js.map