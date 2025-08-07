(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Bh="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Bh);let Ar=!1,zh=!1;function kh(){Ar=!0}kh();const Hh=2,Vh=8,Gh=2,ru="[",su="[!",ou="]",fr={},Tt=Symbol(),au=!1;var lu=Array.isArray,Wh=Array.prototype.indexOf,Xh=Array.from,Ws=Object.keys,xr=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,qh=Object.getOwnPropertyDescriptors,Yh=Object.prototype,$h=Array.prototype,cu=Object.getPrototypeOf,Bl=Object.isExtensible;function jh(n){return n()}function Xs(n){for(var e=0;e<n.length;e++)n[e]()}function Kh(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const nn=2,Za=4,io=8,Jr=16,Gn=32,hi=64,uu=128,cn=256,qs=512,At=1024,un=2048,Wn=4096,oi=8192,Bi=16384,Ja=32768,Qa=65536,zl=1<<17,Zh=1<<18,el=1<<19,tl=1<<20,ta=1<<21,nl=1<<22,Ai=1<<23,wi=Symbol("$state"),hu=Symbol("legacy props"),il=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Jh=3,Ys=8;function Qh(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function fu(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ef(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function tf(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rf(n){throw new Error("https://svelte.dev/e/effect_orphan")}function sf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function of(){throw new Error("https://svelte.dev/e/hydration_failed")}function af(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function lf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cf(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function uf(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ro(n){console.warn("https://svelte.dev/e/hydration_mismatch")}let wt=!1;function ar(n){wt=n}let Mt;function Pi(n){if(n===null)throw ro(),fr;return Mt=n}function rl(){return Pi(zi(Mt))}function ti(n){if(wt){if(zi(Mt)!==null)throw ro(),fr;Mt=n}}function hf(){for(var n=0,e=Mt;;){if(e.nodeType===Ys){var t=e.data;if(t===ou){if(n===0)return e;n-=1}else(t===ru||t===su)&&(n+=1)}var i=zi(e);e.remove(),e=i}}function ff(n){if(!n||n.nodeType!==Ys)throw ro(),fr;return n.data}function du(n){return n===this.v}function df(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function pu(n){return!df(n,this.v)}let dt=null;function $s(n){dt=n}function so(n,e=!1,t){dt={p:dt,c:null,e:null,s:n,x:null,l:Ar&&!e?{s:null,u:null,$:[]}:null}}function oo(n){var e=dt,t=e.e;if(t!==null){e.e=null;for(var i of t)Cu(i)}return n!==void 0&&(e.x=n),dt=e.p,n??{}}function Qr(){return!Ar||dt!==null&&dt.l===null}const pf=new WeakMap;function mf(n){var e=Ze;if(e===null)return et.f|=Ai,n;if((e.f&Ja)===0){if((e.f&uu)===0)throw!e.parent&&n instanceof Error&&mu(n),n;e.b.error(n)}else sl(n,e)}function sl(n,e){for(;e!==null;){if((e.f&uu)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n instanceof Error&&mu(n),n}function mu(n){const e=pf.get(n);e&&(xr(n,"message",{value:e.message}),xr(n,"stack",{value:e.stack}))}let Hr=[],na=[];function _u(){var n=Hr;Hr=[],Xs(n)}function _f(){var n=na;na=[],Xs(n)}function gu(n){Hr.length===0&&queueMicrotask(_u),Hr.push(n)}function gf(){Hr.length>0&&_u(),na.length>0&&_f()}function vf(){for(var n=Ze.b;n!==null&&!n.has_pending_snippet();)n=n.parent;return n===null&&Qh(),n}function ol(n){var e=nn|un,t=et!==null&&(et.f&nn)!==0?et:null;return Ze===null||t!==null&&(t.f&cn)!==0?e|=cn:Ze.f|=el,{ctx:dt,deps:null,effects:null,equals:du,f:e,fn:n,reactions:null,rv:0,v:Tt,wv:0,parent:t??Ze,ac:null}}function xf(n,e){let t=Ze;t===null&&ef();var i=t.b,r=void 0,s=ll(Tt),o=null,a=!et;return Uf(()=>{try{var c=n()}catch(p){c=Promise.reject(p)}var l=()=>c;r=o?.then(l,l)??Promise.resolve(c),o=r;var u=vt,h=i.pending;a&&(i.update_pending_count(1),h||u.increment());const d=(p,_=void 0)=>{o=null,h||u.activate(),_?_!==il&&(s.f|=Ai,ra(s,_)):((s.f&Ai)!==0&&(s.f^=Ai),ra(s,p)),a&&(i.update_pending_count(-1),h||u.decrement()),Mu()};if(r.then(d,p=>d(null,p||"unknown")),u)return()=>{queueMicrotask(()=>u.neuter())}}),new Promise(c=>{function l(u){function h(){u===r?c(s):l(r)}u.then(h,h)}l(r)})}function js(n){const e=ol(n);return e.equals=pu,e}function vu(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)ai(e[t])}}function Mf(n){for(var e=n.parent;e!==null;){if((e.f&nn)===0)return e;e=e.parent}return null}function al(n){var e,t=Ze;li(Mf(n));try{vu(n),e=zu(n)}finally{li(t)}return e}function xu(n){var e=al(n);if(n.equals(e)||(n.v=e,n.wv=Ou()),!ki)if(Mr!==null)Mr.set(n,n.v);else{var t=(ii||(n.f&cn)!==0)&&n.deps!==null?Wn:At;Ft(n,t)}}function Sf(n,e,t){const i=Qr()?ol:js;if(e.length===0){t(n.map(i));return}var r=vt,s=Ze,o=Ef(),a=vf();Promise.all(e.map(c=>xf(c))).then(c=>{r?.activate(),o();try{t([...n.map(i),...c])}catch(l){(s.f&Bi)===0&&sl(l,s)}r?.deactivate(),Mu()}).catch(c=>{a.error(c)})}function Ef(){var n=Ze,e=et,t=dt;return function(){li(n),An(e),$s(t)}}function Mu(){li(null),An(null),$s(null)}const Rr=new Set;let vt=null,Mr=null,kl=new Set,Ks=[];function Su(){const n=Ks.shift();Ks.length>0&&queueMicrotask(Su),n()}let Di=[],ao=null,ia=!1,Ns=!1;class Li{current=new Map;#t=new Map;#e=new Set;#n=0;#c=null;#u=!1;#r=[];#o=[];#s=[];#i=[];#a=[];#h=[];#f=[];skipped_effects=new Set;process(e){Di=[];var t=null;if(Rr.size>1){t=new Map,Mr=new Map;for(const[s,o]of this.current)t.set(s,{v:s.v,wv:s.wv}),s.v=o;for(const s of Rr)if(s!==this)for(const[o,a]of s.#t)t.has(o)||(t.set(o,{v:o.v,wv:o.wv}),o.v=a)}for(const s of e)this.#p(s);if(this.#r.length===0&&this.#n===0){this.#d();var i=this.#s,r=this.#i;this.#s=[],this.#i=[],this.#a=[],vt=null,Hl(i),Hl(r),vt===null?vt=this:Rr.delete(this),this.#c?.resolve()}else this.#l(this.#s),this.#l(this.#i),this.#l(this.#a);if(t){for(const[s,{v:o,wv:a}]of t)s.wv<=a&&(s.v=o);Mr=null}for(const s of this.#r)pr(s);for(const s of this.#o)pr(s);this.#r=[],this.#o=[]}#p(e){e.f^=At;for(var t=e.first;t!==null;){var i=t.f,r=(i&(Gn|hi))!==0,s=r&&(i&At)!==0,o=s||(i&oi)!==0||this.skipped_effects.has(t);if(!o&&t.fn!==null){if(r)t.f^=At;else if((i&At)===0)if((i&Za)!==0)this.#i.push(t);else if((i&nl)!==0){var a=t.b?.pending?this.#o:this.#r;a.push(t)}else ts(t)&&((t.f&Jr)!==0&&this.#a.push(t),pr(t));var c=t.first;if(c!==null){t=c;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}}#l(e){for(const t of e)((t.f&un)!==0?this.#h:this.#f).push(t),Ft(t,At);e.length=0}capture(e,t){this.#t.has(e)||this.#t.set(e,t),this.current.set(e,e.v)}activate(){vt=this}deactivate(){vt=null;for(const e of kl)if(kl.delete(e),e(),vt!==null)break}neuter(){this.#u=!0}flush(){Di.length>0?Eu():this.#d(),vt===this&&(this.#n===0&&Rr.delete(this),this.deactivate())}#d(){if(!this.#u)for(const e of this.#e)e();this.#e.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,this.#n===0){for(const e of this.#h)Ft(e,un),Ui(e);for(const e of this.#f)Ft(e,Wn),Ui(e);this.#s=[],this.#i=[],this.flush()}else this.deactivate()}add_callback(e){this.#e.add(e)}settled(){return(this.#c??=Kh()).promise}static ensure(){if(vt===null){const e=vt=new Li;Rr.add(vt),Ns||Li.enqueue(()=>{vt===e&&e.flush()})}return vt}static enqueue(e){Ks.length===0&&queueMicrotask(Su),Ks.unshift(e)}}function Je(n){var e=Ns;Ns=!0;try{for(var t;;){if(gf(),Di.length===0&&(vt?.flush(),Di.length===0))return ao=null,t;Eu()}}finally{Ns=e}}function Eu(){var n=dr;ia=!0;try{var e=0;for(Gl(!0);Di.length>0;){var t=Li.ensure();if(e++>1e3){var i,r;yf()}t.process(Di),Ci.clear()}}finally{ia=!1,Gl(n),ao=null}}function yf(){try{sf()}catch(n){sl(n,ao)}}function Hl(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(Bi|oi))===0&&ts(i)){var r=vt?vt.current.size:0;if(pr(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?Lu(i):i.fn=null),vt!==null&&vt.current.size>r&&(i.f&tl)!==0)break}}for(;t<e;)Ui(n[t++])}}function Ui(n){for(var e=ao=n;e.parent!==null;){e=e.parent;var t=e.f;if(ia&&e===Ze&&(t&Jr)!==0)return;if((t&(hi|Gn))!==0){if((t&At)===0)return;e.f^=At}}Di.push(e)}const Ci=new Map;function ll(n,e){var t={f:0,v:n,reactions:null,equals:du,rv:0,wv:0};return t}function Xn(n,e){const t=ll(n);return zf(t),t}function Fr(n,e=!1,t=!0){const i=ll(n);return e||(i.equals=pu),Ar&&t&&dt!==null&&dt.l!==null&&(dt.l.s??=[]).push(i),i}function _o(n,e){return Dt(n,Qt(()=>be(n))),e}function Dt(n,e,t=!1){et!==null&&(!En||(et.f&zl)!==0)&&Qr()&&(et.f&(nn|Jr|nl|zl))!==0&&!Hn?.includes(n)&&uf();let i=t?lr(e):e;return ra(n,i)}function ra(n,e){if(!n.equals(e)){var t=n.v;ki?Ci.set(n,e):Ci.set(n,t),n.v=e;var i=Li.ensure();i.capture(n,t),(n.f&nn)!==0&&((n.f&un)!==0&&al(n),Ft(n,(n.f&cn)===0?At:Wn)),n.wv=Ou(),yu(n,un),Qr()&&Ze!==null&&(Ze.f&At)!==0&&(Ze.f&(Gn|hi))===0&&(an===null?kf([n]):an.push(n))}return e}function go(n){Dt(n,n.v+1)}function yu(n,e){var t=n.reactions;if(t!==null)for(var i=Qr(),r=t.length,s=0;s<r;s++){var o=t[s],a=o.f;if(!(!i&&o===Ze)){var c=(a&un)===0;c&&Ft(o,e),(a&nn)!==0?yu(o,Wn):c&&Ui(o)}}}function lr(n){if(typeof n!="object"||n===null||wi in n)return n;const e=cu(n);if(e!==Yh&&e!==$h)return n;var t=new Map,i=lu(n),r=Xn(0),s=Ri,o=a=>{if(Ri===s)return a();var c=et,l=Ri;An(null),Xl(s);var u=a();return An(c),Xl(l),u};return i&&t.set("length",Xn(n.length)),new Proxy(n,{defineProperty(a,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&lf();var u=t.get(c);return u===void 0?u=o(()=>{var h=Xn(l.value);return t.set(c,h),h}):Dt(u,l.value,!0),!0},deleteProperty(a,c){var l=t.get(c);if(l===void 0){if(c in a){const u=o(()=>Xn(Tt));t.set(c,u),go(r)}}else Dt(l,Tt),go(r);return!0},get(a,c,l){if(c===wi)return n;var u=t.get(c),h=c in a;if(u===void 0&&(!h||Ti(a,c)?.writable)&&(u=o(()=>{var p=lr(h?a[c]:Tt),_=Xn(p);return _}),t.set(c,u)),u!==void 0){var d=be(u);return d===Tt?void 0:d}return Reflect.get(a,c,l)},getOwnPropertyDescriptor(a,c){var l=Reflect.getOwnPropertyDescriptor(a,c);if(l&&"value"in l){var u=t.get(c);u&&(l.value=be(u))}else if(l===void 0){var h=t.get(c),d=h?.v;if(h!==void 0&&d!==Tt)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(a,c){if(c===wi)return!0;var l=t.get(c),u=l!==void 0&&l.v!==Tt||Reflect.has(a,c);if(l!==void 0||Ze!==null&&(!u||Ti(a,c)?.writable)){l===void 0&&(l=o(()=>{var d=u?lr(a[c]):Tt,p=Xn(d);return p}),t.set(c,l));var h=be(l);if(h===Tt)return!1}return u},set(a,c,l,u){var h=t.get(c),d=c in a;if(i&&c==="length")for(var p=l;p<h.v;p+=1){var _=t.get(p+"");_!==void 0?Dt(_,Tt):p in a&&(_=o(()=>Xn(Tt)),t.set(p+"",_))}if(h===void 0)(!d||Ti(a,c)?.writable)&&(h=o(()=>Xn(void 0)),Dt(h,lr(l)),t.set(c,h));else{d=h.v!==Tt;var v=o(()=>lr(l));Dt(h,v)}var m=Reflect.getOwnPropertyDescriptor(a,c);if(m?.set&&m.set.call(u,l),!d){if(i&&typeof c=="string"){var f=t.get("length"),w=Number(c);Number.isInteger(w)&&w>=f.v&&Dt(f,w+1)}go(r)}return!0},ownKeys(a){be(r);var c=Reflect.ownKeys(a).filter(h=>{var d=t.get(h);return d===void 0||d.v!==Tt});for(var[l,u]of t)u.v!==Tt&&!(l in a)&&c.push(l);return c},setPrototypeOf(){cf()}})}var Vl,bu,Tu,Au;function sa(){if(Vl===void 0){Vl=window,bu=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Tu=Ti(e,"firstChild").get,Au=Ti(e,"nextSibling").get,Bl(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Bl(t)&&(t.__t=void 0)}}function es(n=""){return document.createTextNode(n)}function Vr(n){return Tu.call(n)}function zi(n){return Au.call(n)}function ni(n,e){if(!wt)return Vr(n);var t=Vr(Mt);return t===null&&(t=Mt.appendChild(es())),Pi(t),t}function bf(n,e){if(!wt){var t=Vr(n);return t instanceof Comment&&t.data===""?zi(t):t}return Mt}function Zt(n,e=1,t=!1){let i=wt?Mt:n;for(var r;e--;)r=i,i=zi(i);if(!wt)return i;if(t&&i?.nodeType!==Jh){var s=es();return i===null?r?.after(s):i.before(s),Pi(s),s}return Pi(i),i}function Tf(n){n.textContent=""}function Af(){return!1}function wu(n){Ze===null&&et===null&&rf(),et!==null&&(et.f&cn)!==0&&Ze===null&&nf(),ki&&tf()}function wf(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function xn(n,e,t,i=!0){var r=Ze;r!==null&&(r.f&oi)!==0&&(n|=oi);var s={ctx:dt,deps:null,nodes_start:null,nodes_end:null,f:n|un,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{pr(s),s.f|=Ja}catch(c){throw ai(s),c}else e!==null&&Ui(s);var o=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&el)===0;if(!o&&i&&(r!==null&&wf(s,r),et!==null&&(et.f&nn)!==0&&(n&hi)===0)){var a=et;(a.effects??=[]).push(s)}return s}function Cf(n){const e=xn(io,null,!1);return Ft(e,At),e.teardown=n,e}function oa(n){wu();var e=Ze.f,t=!et&&(e&Gn)!==0&&(e&Ja)===0;if(t){var i=dt;(i.e??=[]).push(n)}else return Cu(n)}function Cu(n){return xn(Za|tl,n,!1)}function Rf(n){return wu(),xn(io|tl,n,!0)}function Pf(n){Li.ensure();const e=xn(hi,n,!0);return()=>{ai(e)}}function Df(n){Li.ensure();const e=xn(hi,n,!0);return(t={})=>new Promise(i=>{t.outro?Uu(e,()=>{ai(e),i(void 0)}):(ai(e),i(void 0))})}function Ru(n){return xn(Za,n,!1)}function ls(n,e){var t=dt,i={effect:null,ran:!1,deps:n};t.l.$.push(i),i.effect=lo(()=>{n(),!i.ran&&(i.ran=!0,Qt(e))})}function Lf(){var n=dt;lo(()=>{for(var e of n.l.$){e.deps();var t=e.effect;(t.f&At)!==0&&Ft(t,Wn),ts(t)&&pr(t),e.ran=!1}})}function Uf(n){return xn(nl|el,n,!0)}function lo(n,e=0){return xn(io|e,n,!0)}function cl(n,e=[],t=[]){Sf(e,t,i=>{xn(io,()=>n(...i.map(be)),!0)})}function If(n,e=0){var t=xn(Jr|e,n,!0);return t}function aa(n,e=!0){return xn(Gn,n,!0,e)}function Pu(n){var e=n.teardown;if(e!==null){const t=ki,i=et;Wl(!0),An(null);try{e.call(null)}finally{Wl(t),An(i)}}}function Du(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){t.ac?.abort(il);var i=t.next;(t.f&hi)!==0?t.parent=null:ai(t,e),t=i}}function Nf(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Gn)===0&&ai(e),e=t}}function ai(n,e=!0){var t=!1;(e||(n.f&Zh)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(Ff(n.nodes_start,n.nodes_end),t=!0),Du(n,e&&!t),Zs(n,0),Ft(n,Bi);var i=n.transitions;if(i!==null)for(const s of i)s.stop();Pu(n);var r=n.parent;r!==null&&r.first!==null&&Lu(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function Ff(n,e){for(;n!==null;){var t=n===e?null:zi(n);n.remove(),n=t}}function Lu(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function Uu(n,e){var t=[];Iu(n,t,!0),Of(t,()=>{ai(n),e&&e()})}function Of(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function Iu(n,e,t){if((n.f&oi)===0){if(n.f^=oi,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&e.push(o);for(var i=n.first;i!==null;){var r=i.next,s=(i.f&Qa)!==0||(i.f&Gn)!==0;Iu(i,e,s?t:!1),i=r}}}function Bf(n){Nu(n,!0)}function Nu(n,e){if((n.f&oi)!==0){n.f^=oi,(n.f&At)===0&&(Ft(n,un),Ui(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Qa)!==0||(t.f&Gn)!==0;Nu(t,r?e:!1),t=i}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let dr=!1;function Gl(n){dr=n}let ki=!1;function Wl(n){ki=n}let et=null,En=!1;function An(n){et=n}let Ze=null;function li(n){Ze=n}let Hn=null;function zf(n){et!==null&&(Hn===null?Hn=[n]:Hn.push(n))}let Nt=null,Kt=0,an=null;function kf(n){an=n}let Fu=1,Gr=0,Ri=Gr;function Xl(n){Ri=n}let ii=!1;function Ou(){return++Fu}function ts(n){var e=n.f;if((e&un)!==0)return!0;if((e&Wn)!==0){var t=n.deps,i=(e&cn)!==0;if(t!==null){var r,s,o=(e&qs)!==0,a=i&&Ze!==null&&!ii,c=t.length;if((o||a)&&(Ze===null||(Ze.f&Bi)===0)){var l=n,u=l.parent;for(r=0;r<c;r++)s=t[r],(o||!s?.reactions?.includes(l))&&(s.reactions??=[]).push(l);o&&(l.f^=qs),a&&u!==null&&(u.f&cn)===0&&(l.f^=cn)}for(r=0;r<c;r++)if(s=t[r],ts(s)&&xu(s),s.wv>n.wv)return!0}(!i||Ze!==null&&!ii)&&Ft(n,At)}return!1}function Bu(n,e,t=!0){var i=n.reactions;if(i!==null&&!Hn?.includes(n))for(var r=0;r<i.length;r++){var s=i[r];(s.f&nn)!==0?Bu(s,e,!1):e===s&&(t?Ft(s,un):(s.f&At)!==0&&Ft(s,Wn),Ui(s))}}function zu(n){var e=Nt,t=Kt,i=an,r=et,s=ii,o=Hn,a=dt,c=En,l=Ri,u=n.f;Nt=null,Kt=0,an=null,ii=(u&cn)!==0&&(En||!dr||et===null),et=(u&(Gn|hi))===0?n:null,Hn=null,$s(n.ctx),En=!1,Ri=++Gr,n.ac!==null&&(n.ac.abort(il),n.ac=null);try{n.f|=ta;var h=(0,n.fn)(),d=n.deps;if(Nt!==null){var p;if(Zs(n,Kt),d!==null&&Kt>0)for(d.length=Kt+Nt.length,p=0;p<Nt.length;p++)d[Kt+p]=Nt[p];else n.deps=d=Nt;if(!ii||(u&nn)!==0&&n.reactions!==null)for(p=Kt;p<d.length;p++)(d[p].reactions??=[]).push(n)}else d!==null&&Kt<d.length&&(Zs(n,Kt),d.length=Kt);if(Qr()&&an!==null&&!En&&d!==null&&(n.f&(nn|Wn|un))===0)for(p=0;p<an.length;p++)Bu(an[p],n);return r!==null&&r!==n&&(Gr++,an!==null&&(i===null?i=an:i.push(...an))),(n.f&Ai)!==0&&(n.f^=Ai),h}catch(_){return mf(_)}finally{n.f^=ta,Nt=e,Kt=t,an=i,et=r,ii=s,Hn=o,$s(a),En=c,Ri=l}}function Hf(n,e){let t=e.reactions;if(t!==null){var i=Wh.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&nn)!==0&&(Nt===null||!Nt.includes(e))&&(Ft(e,Wn),(e.f&(cn|qs))===0&&(e.f^=qs),vu(e),Zs(e,0))}function Zs(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Hf(n,t[i])}function pr(n){var e=n.f;if((e&Bi)===0){Ft(n,At);var t=Ze,i=dr;Ze=n,dr=!0;try{(e&Jr)!==0?Nf(n):Du(n),Pu(n);var r=zu(n);n.teardown=typeof r=="function"?r:null,n.wv=Fu;var s;au&&zh&&(n.f&un)!==0&&n.deps}finally{dr=i,Ze=t}}}function be(n){var e=n.f,t=(e&nn)!==0;if(et!==null&&!En){var i=Ze!==null&&(Ze.f&Bi)!==0;if(!i&&!Hn?.includes(n)){var r=et.deps;if((et.f&ta)!==0)n.rv<Gr&&(n.rv=Gr,Nt===null&&r!==null&&r[Kt]===n?Kt++:Nt===null?Nt=[n]:(!ii||!Nt.includes(n))&&Nt.push(n));else{(et.deps??=[]).push(n);var s=n.reactions;s===null?n.reactions=[et]:s.includes(et)||s.push(et)}}}else if(t&&n.deps===null&&n.effects===null){var o=n,a=o.parent;a!==null&&(a.f&cn)===0&&(o.f^=cn)}if(ki){if(Ci.has(n))return Ci.get(n);if(t){o=n;var c=o.v;return((o.f&At)===0&&o.reactions!==null||ku(o))&&(c=al(o)),Ci.set(o,c),c}}else if(t){if(o=n,Mr?.has(o))return Mr.get(o);ts(o)&&xu(o)}if((n.f&Ai)!==0)throw n.v;return n.v}function ku(n){if(n.v===Tt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Ci.has(e)||(e.f&nn)!==0&&ku(e))return!0;return!1}function Qt(n){var e=En;try{return En=!0,n()}finally{En=e}}const Vf=-7169;function Ft(n,e){n.f=n.f&Vf|e}function yn(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(wi in n)la(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&wi in t&&la(t)}}}function la(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{la(n[i],e)}catch{}const t=cu(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=qh(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}function Gf(n){var e=et,t=Ze;An(null),li(null);try{return n()}finally{An(e),li(t)}}const Wf=new Set,ql=new Set;function Xf(n,e,t,i={}){function r(s){if(i.capture||Or.call(e,s),!s.cancelBubble)return Gf(()=>t?.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?gu(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function Rn(n,e,t,i,r){var s={capture:i,passive:r},o=Xf(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Cf(()=>{e.removeEventListener(n,o,s)})}let Yl=null;function Or(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target;Yl=n;var o=0,a=Yl===n&&n.__root;if(a){var c=r.indexOf(a);if(c!==-1&&(e===document||e===window)){n.__root=e;return}var l=r.indexOf(e);if(l===-1)return;c<=l&&(o=c)}if(s=r[o]||n.target,s!==e){xr(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=et,h=Ze;An(null),li(null);try{for(var d,p=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+i];if(v!=null&&(!s.disabled||n.target===s))if(lu(v)){var[m,...f]=v;m.apply(s,[n,...f])}else v.call(s,n)}catch(w){d?p.push(w):d=w}if(n.cancelBubble||_===e||_===null)break;s=_}if(d){for(let w of p)queueMicrotask(()=>{throw w});throw d}}finally{n.__root=e,delete n.currentTarget,An(u),li(h)}}}function qf(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function Wr(n,e){var t=Ze;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function ul(n,e){var t=(e&Gh)!==0,i,r=!n.startsWith("<!>");return()=>{if(wt)return Wr(Mt,null),Mt;i===void 0&&(i=qf(r?n:"<!>"+n),i=Vr(i));var s=t||bu?document.importNode(i,!0):i.cloneNode(!0);return Wr(s,s),s}}function Yf(){if(wt)return Wr(Mt,null),Mt;var n=document.createDocumentFragment(),e=document.createComment(""),t=es();return n.append(e,t),Wr(e,t),n}function Xr(n,e){if(wt){Ze.nodes_end=Mt,rl();return}n!==null&&n.before(e)}const $f=["touchstart","touchmove"];function jf(n){return $f.includes(n)}function Js(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t+"")}function Hu(n,e){return Vu(n,e)}function Kf(n,e){sa(),e.intro=e.intro??!1;const t=e.target,i=wt,r=Mt;try{for(var s=Vr(t);s&&(s.nodeType!==Ys||s.data!==ru);)s=zi(s);if(!s)throw fr;ar(!0),Pi(s),rl();const o=Vu(n,{...e,anchor:s});if(Mt===null||Mt.nodeType!==Ys||Mt.data!==ou)throw ro(),fr;return ar(!1),o}catch(o){if(o===fr)return e.recover===!1&&of(),sa(),Tf(t),ar(!1),Hu(n,e);throw o}finally{ar(i),Pi(r)}}const Xi=new Map;function Vu(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:o=!0}){sa();var a=new Set,c=h=>{for(var d=0;d<h.length;d++){var p=h[d];if(!a.has(p)){a.add(p);var _=jf(p);e.addEventListener(p,Or,{passive:_});var v=Xi.get(p);v===void 0?(document.addEventListener(p,Or,{passive:_}),Xi.set(p,1)):Xi.set(p,v+1)}}};c(Xh(Wf)),ql.add(c);var l=void 0,u=Df(()=>{var h=t??e.appendChild(es());return aa(()=>{if(s){so({});var d=dt;d.c=s}r&&(i.$$events=r),wt&&Wr(h,null),l=n(h,i)||{},wt&&(Ze.nodes_end=Mt),s&&oo()}),()=>{for(var d of a){e.removeEventListener(d,Or);var p=Xi.get(d);--p===0?(document.removeEventListener(d,Or),Xi.delete(d)):Xi.set(d,p)}ql.delete(c),h!==t&&h.parentNode?.removeChild(h)}});return ca.set(l,u),l}let ca=new WeakMap;function Zf(n,e){const t=ca.get(n);return t?(ca.delete(n),t(e)):Promise.resolve()}function Gu(n){dt===null&&fu(),Ar&&dt.l!==null?Qf(dt).m.push(n):oa(()=>{const e=Qt(n);if(typeof e=="function")return e})}function Jf(n){dt===null&&fu(),Gu(()=>()=>Qt(n))}function Qf(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}function ed(n,e,t=!1){wt&&rl();var i=n,r=null,s=null,o=Tt,a=t?Qa:0,c=!1;const l=(p,_=!0)=>{c=!0,d(_,p)};var u=null;function h(){u!==null&&(u.lastChild.remove(),i.before(u),u=null);var p=o?r:s,_=o?s:r;p&&Bf(p),_&&Uu(_,()=>{o?s=null:r=null})}const d=(p,_)=>{if(o===(o=p))return;let v=!1;if(wt){const L=ff(i)===su;!!o===L&&(i=hf(),Pi(i),ar(!1),v=!0)}var m=Af(),f=i;if(m&&(u=document.createDocumentFragment(),u.append(f=es())),o?r??=_&&aa(()=>_(f)):s??=_&&aa(()=>_(f)),m){var w=vt,T=o?r:s,b=o?s:r;T&&w.skipped_effects.delete(T),b&&w.skipped_effects.add(b),w.add_callback(h)}else h();v&&ar(!0)};If(()=>{c=!1,e(l),c||d(null,null)},a),wt&&(i=Mt)}function hl(n,e){Ru(()=>{var t=n.getRootNode(),i=t.host?t:t.head??t.ownerDocument.head;if(!i.querySelector("#"+e.hash)){const r=document.createElement("style");r.id=e.hash,r.textContent=e.code,i.appendChild(r)}})}function td(n,e){return n==null?null:String(n)}function fl(n,e,t,i){var r=n.__style;if(wt||r!==e){var s=td(e);(!wt||s!==n.getAttribute("style"))&&(s==null?n.removeAttribute("style"):n.style.cssText=s),n.__style=e}return i}function $l(n,e){return n===e||n?.[wi]===e}function nd(n={},e,t,i){return Ru(()=>{var r,s;return lo(()=>{r=s,s=[],Qt(()=>{n!==t(...s)&&(e(n,...s),r&&$l(t(...r),n)&&e(null,...r))})}),()=>{gu(()=>{s&&$l(t(...s),n)&&e(null,...s)})}}),n}function dl(n=!1){const e=dt,t=e.l.u;if(!t)return;let i=()=>yn(e.s);if(n){let r=0,s={};const o=ol(()=>{let a=!1;const c=e.s;for(const l in c)c[l]!==s[l]&&(s[l]=c[l],a=!0);return a&&r++,r});i=()=>be(o)}t.b.length&&Rf(()=>{jl(e,i),Xs(t.b)}),oa(()=>{const r=Qt(()=>t.m.map(jh));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&oa(()=>{jl(e,i),Xs(t.a)})}function jl(n,e){if(n.l.s)for(const t of n.l.s)be(t);e()}let cs=!1;function id(n){var e=cs;try{return cs=!1,[n(),cs]}finally{cs=e}}function Qe(n,e,t,i){var r=!Ar||(t&Hh)!==0,s=(t&Vh)!==0,o=i,a=!0,c=()=>(a&&(a=!1,o=i),o),l;{var u=wi in n||hu in n;l=Ti(n,e)?.set??(u&&e in n?w=>n[e]=w:void 0)}var h,d=!1;[h,d]=id(()=>n[e]),h===void 0&&i!==void 0&&(h=c(),l&&(r&&af(),l(h)));var p;if(r?p=()=>{var w=n[e];return w===void 0?c():(a=!0,w)}:p=()=>{var w=n[e];return w!==void 0&&(o=void 0),w===void 0?o:w},l){var _=n.$$legacy;return function(w,T){return arguments.length>0?((!r||!T||_||d)&&l(T?p():w),w):p()}}var v=!1,m=js(()=>(v=!1,p()));be(m);var f=Ze;return function(w,T){if(arguments.length>0){const b=T?be(m):r&&s?lr(w):w;return Dt(m,b),v=!0,o!==void 0&&(o=b),w}return ki&&v||(f.f&Bi)!==0?m.v:be(m)}}function rd(n){return new sd(n)}class sd{#t;#e;constructor(e){var t=new Map,i=(s,o)=>{var a=Fr(o,!1,!1);return t.set(s,a),a};const r=new Proxy({...e.props||{},$$events:{}},{get(s,o){return be(t.get(o)??i(o,Reflect.get(s,o)))},has(s,o){return o===hu?!0:(be(t.get(o)??i(o,Reflect.get(s,o))),Reflect.has(s,o))},set(s,o,a){return Dt(t.get(o)??i(o,a),a),Reflect.set(s,o,a)}});this.#e=(e.hydrate?Kf:Hu)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover}),(!e?.props?.$$host||e.sync===!1)&&Je(),this.#t=r.$$events;for(const s of Object.keys(this.#e))s==="$set"||s==="$destroy"||s==="$on"||xr(this,s,{get(){return this.#e[s]},set(o){this.#e[s]=o},enumerable:!0});this.#e.$set=s=>{Object.assign(r,s)},this.#e.$destroy=()=>{Zf(this.#e)}}$set(e){this.#e.$set(e)}$on(e,t){this.#t[e]=this.#t[e]||[];const i=(...r)=>t.call(this,...r);return this.#t[e].push(i),()=>{this.#t[e]=this.#t[e].filter(r=>r!==i)}}$destroy(){this.#e.$destroy()}}let Wu;typeof HTMLElement=="function"&&(Wu=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;constructor(n,e,t){super(),this.$$ctor=n,this.$$s=e,t&&this.attachShadow({mode:"open"})}addEventListener(n,e,t){if(this.$$l[n]=this.$$l[n]||[],this.$$l[n].push(e),this.$$c){const i=this.$$c.$on(n,e);this.$$l_u.set(e,i)}super.addEventListener(n,e,t)}removeEventListener(n,e,t){if(super.removeEventListener(n,e,t),this.$$c){const i=this.$$l_u.get(e);i&&(i(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return s=>{const o=document.createElement("slot");r!=="default"&&(o.name=r),Xr(s,o)}};var n=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},i=od(this);for(const r of this.$$s)r in i&&(r==="default"&&!this.$$d.children?(this.$$d.children=e(r),t.default=!0):t[r]=e(r));for(const r of this.attributes){const s=this.$$g_p(r.name);s in this.$$d||(this.$$d[s]=Fs(s,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=rd({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$host:this}}),this.$$me=Pf(()=>{lo(()=>{this.$$r=!0;for(const r of Ws(this.$$c)){if(!this.$$p_d[r]?.reflect)continue;this.$$d[r]=this.$$c[r];const s=Fs(r,this.$$d[r],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,s)}this.$$r=!1})});for(const r in this.$$l)for(const s of this.$$l[r]){const o=this.$$c.$on(r,s);this.$$l_u.set(s,o)}this.$$l={}}}attributeChangedCallback(n,e,t){this.$$r||(n=this.$$g_p(n),this.$$d[n]=Fs(n,t,this.$$p_d,"toProp"),this.$$c?.$set({[n]:this.$$d[n]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(n){return Ws(this.$$p_d).find(e=>this.$$p_d[e].attribute===n||!this.$$p_d[e].attribute&&e.toLowerCase()===n)||n}});function Fs(n,e,t,i){const r=t[n]?.type;if(e=r==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!t[n])return e;if(i==="toAttribute")switch(r){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function od(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}function pl(n,e,t,i,r,s){let o=class extends Wu{constructor(){super(n,t,r),this.$$p_d=e}static get observedAttributes(){return Ws(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Ws(e).forEach(a=>{xr(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(c){c=Fs(a,c,e),this.$$d[a]=c;var l=this.$$c;if(l){var u=Ti(l,a)?.get;u?l[a]=c:l.$set({[a]:c})}}})}),i.forEach(a=>{xr(o.prototype,a,{get(){return this.$$c?.[a]}})}),n.element=o,o}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="179",mr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Kl=1,ld=2,Xu=1,cd=2,Fn=3,ci=0,Xt=1,On=2,ri=0,_r=1,Zl=2,Jl=3,Ql=4,ud=5,Si=100,hd=101,fd=102,dd=103,pd=104,md=200,_d=201,gd=202,vd=203,ua=204,ha=205,xd=206,Md=207,Sd=208,Ed=209,yd=210,bd=211,Td=212,Ad=213,wd=214,fa=0,da=1,pa=2,Sr=3,ma=4,_a=5,ga=6,va=7,_l=0,Cd=1,Rd=2,si=0,Pd=1,Dd=2,Ld=3,Ud=4,Id=5,Nd=6,Fd=7,qu=300,Er=301,yr=302,xa=303,Ma=304,co=306,yi=1e3,Bn=1001,qr=1002,tn=1003,Od=1004,us=1005,Gt=1006,vo=1007,zn=1008,wn=1009,Yu=1010,$u=1011,Yr=1012,gl=1013,Ii=1014,kn=1015,ns=1016,vl=1017,xl=1018,$r=1020,ju=35902,Ku=1021,Zu=1022,gn=1023,jr=1026,Kr=1027,Ju=1028,Ml=1029,Qu=1030,Sl=1031,El=1033,Os=33776,Bs=33777,zs=33778,ks=33779,Sa=35840,Ea=35841,ya=35842,ba=35843,Ta=36196,Aa=37492,wa=37496,Ca=37808,Ra=37809,Pa=37810,Da=37811,La=37812,Ua=37813,Ia=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ha=37821,Hs=36492,Va=36494,Ga=36495,eh=36283,Wa=36284,Xa=36285,qa=36286,Bd=3200,zd=3201,yl=0,kd=1,ei="",Vt="srgb",br="srgb-linear",Qs="linear",st="srgb",qi=7680,ec=519,Hd=512,Vd=513,Gd=514,th=515,Wd=516,Xd=517,qd=518,Yd=519,tc=35044,nc="300 es",Tn=2e3,eo=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,Ya=180/Math.PI;function is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function $d(n,e){return(n%e+e)%e}function xo(n,e,t){return(1-t)*n+t*e}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:Vs};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==d||l!==p||u!==_){let m=1-a;const f=c*d+l*p+u*_+h*v,w=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const L=Math.sqrt(T),R=Math.atan2(L,f*w);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const b=a*w;if(c=c*m+d*b,l=l*m+p*b,u=u*m+_*b,h=h*m+v*b,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-a*p,e[t+2]=l*_+u*p+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new B,ic=new Ni;class Ge{constructor(e,t,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],f=r[6],w=r[1],T=r[4],b=r[7],L=r[2],R=r[5],P=r[8];return s[0]=o*v+a*w+c*L,s[3]=o*m+a*T+c*R,s[6]=o*f+a*b+c*P,s[1]=l*v+u*w+h*L,s[4]=l*m+u*T+h*R,s[7]=l*f+u*b+h*P,s[2]=d*v+p*w+_*L,s[5]=d*m+p*T+_*R,s[8]=d*f+p*b+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,_=t*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Ge;function nh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){const n=Zr("canvas");return n.style.display="block",n}const rc={};function gr(n){n in rc||(rc[n]=!0,console.warn(n))}function Zd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const sc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?Qs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:sc,fromXYZ:oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:sc,fromXYZ:oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const nt=Jd();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=Zr("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eo(r[o].image)):s.push(Eo(r[o]))}else s=Eo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;const yo=new B;class Ot extends Hi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Bn,r=Bn,s=Gt,o=zn,a=gn,c=wn,l=Ot.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=is(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=qu;Ot.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,b=(p+1)/2,L=(f+1)/2,R=(u+d)/4,P=(h+v)/4,I=(_+m)/4;return T>b&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=P/i):b>L?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=I/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=I/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new bl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends np{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ih extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),fs.subVectors(this.max,Dr),$i.subVectors(e.a,Dr),ji.subVectors(e.b,Dr),Ki.subVectors(e.c,Dr),qn.subVectors(ji,$i),Yn.subVectors(Ki,ji),pi.subVectors($i,Ki);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-pi.z,pi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,pi.z,0,-pi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-pi.y,pi.x,0];return!bo(t,$i,ji,Ki,fs)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,$i,ji,Ki,fs))?!1:(ds.crossVectors(qn,Yn),t=[ds.x,ds.y,ds.z],bo(t,$i,ji,Ki,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,hs=new Vi,$i=new B,ji=new B,Ki=new B,qn=new B,Yn=new B,pi=new B,Dr=new B,fs=new B,ds=new B,mi=new B;function bo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const rp=new Vi,Lr=new B,To=new B;class uo{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(To)),this.expandByPoint(Lr.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new B,Ao=new B,ps=new B,$n=new B,wo=new B,ms=new B,Co=new B;class Tl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ao.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Ao);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=$n.dot(this.direction),c=-$n.dot(ps),l=$n.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ao).addScaledVector(ps,d),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){wo.subVectors(t,e),ms.subVectors(i,e),Co.crossVectors(wo,ms);let o=this.direction.dot(Co),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const c=a*this.direction.dot(ms.crossVectors($n,ms));if(c<0)return null;const l=a*this.direction.dot(wo.cross($n));if(l<0||c+l>o)return null;const u=-a*$n.dot(Co);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,c,l,u,h,d,p,_,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,p,_,v,m)}set(e,t,i,r,s,o,a,c,l,u,h,d,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,v=l*h;t[0]=d+v*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,op)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),jn.crossVectors(i,$t),jn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),jn.crossVectors(i,$t)),jn.normalize(),_s.crossVectors($t,jn),r[0]=jn.x,r[4]=_s.x,r[8]=$t.x,r[1]=jn.y,r[5]=_s.y,r[9]=$t.y,r[2]=jn.z,r[6]=_s.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],w=i[3],T=i[7],b=i[11],L=i[15],R=r[0],P=r[4],I=r[8],y=r[12],S=r[1],A=r[5],j=r[9],$=r[13],Q=r[2],k=r[6],Y=r[10],ie=r[14],V=r[3],de=r[7],ve=r[11],ae=r[15];return s[0]=o*R+a*S+c*Q+l*V,s[4]=o*P+a*A+c*k+l*de,s[8]=o*I+a*j+c*Y+l*ve,s[12]=o*y+a*$+c*ie+l*ae,s[1]=u*R+h*S+d*Q+p*V,s[5]=u*P+h*A+d*k+p*de,s[9]=u*I+h*j+d*Y+p*ve,s[13]=u*y+h*$+d*ie+p*ae,s[2]=_*R+v*S+m*Q+f*V,s[6]=_*P+v*A+m*k+f*de,s[10]=_*I+v*j+m*Y+f*ve,s[14]=_*y+v*$+m*ie+f*ae,s[3]=w*R+T*S+b*Q+L*V,s[7]=w*P+T*A+b*k+L*de,s[11]=w*I+T*j+b*Y+L*ve,s[15]=w*y+T*$+b*ie+L*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*p-i*c*p)+v*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],w=h*m*l-v*d*l+v*c*p-a*m*p-h*c*f+a*d*f,T=_*d*l-u*m*l-_*c*p+o*m*p+u*c*f-o*d*f,b=u*v*l-_*h*l+_*a*p-o*v*p-u*a*f+o*h*f,L=_*h*c-u*v*c-_*a*d+o*v*d+u*a*m-o*h*m,R=t*w+i*T+r*b+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=w*P,e[1]=(v*d*s-h*m*s-v*r*p+i*m*p+h*r*f-i*d*f)*P,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*f+i*c*f)*P,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*p-i*c*p)*P,e[4]=T*P,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*f+t*d*f)*P,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*f-t*c*f)*P,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*P,e[8]=b*P,e[9]=(_*h*s-u*v*s-_*i*p+t*v*p+u*i*f-t*h*f)*P,e[10]=(o*v*s-_*a*s+_*i*l-t*v*l-o*i*f+t*a*f)*P,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*p-t*a*p)*P,e[12]=L*P,e[13]=(u*v*r-_*h*r+_*i*d-t*v*d-u*i*m+t*h*m)*P,e[14]=(_*a*r-o*v*r-_*i*c+t*v*c+o*i*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,_=s*h,v=o*u,m=o*h,f=a*h,w=c*l,T=c*u,b=c*h,L=i.x,R=i.y,P=i.z;return r[0]=(1-(v+f))*L,r[1]=(p+b)*L,r[2]=(_-T)*L,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(d+f))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(_+T)*P,r[9]=(m-w)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const l=1/s,u=1/o,h=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(c)_=s/(o-s),v=o*s/(o-s);else if(a===Tn)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===eo)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(c)_=1/(o-s),v=o/(o-s);else if(a===Tn)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===eo)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new B,fn=new pt,sp=new B(0,0,0),op=new B(1,1,1),jn=new B,_s=new B,$t=new B,ac=new pt,lc=new Ni;class vn{constructor(e=0,t=0,i=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const cc=new B,Ji=new Ni,Ln=new pt,gs=new B,Ur=new B,lp=new B,cp=new Ni,uc=new B(1,0,0),hc=new B(0,1,0),fc=new B(0,0,1),dc={type:"added"},up={type:"removed"},Qi={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Ct extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new B,t=new vn,i=new Ni,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ur,gs,this.up):Ln.lookAt(gs,Ur,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new B(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new B,Un=new B,Po=new B,In=new B,er=new B,tr=new B,pc=new B,Do=new B,Lo=new B,Uo=new B,Io=new _t,No=new _t,Fo=new _t;class _n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),Un.subVectors(i,t),Po.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Un),c=dn.dot(Po),l=Un.dot(Un),u=Un.dot(Po),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,In.x),c.addScaledVector(o,In.y),c.addScaledVector(a,In.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Io.setScalar(0),No.setScalar(0),Fo.setScalar(0),Io.fromBufferAttribute(e,t),No.fromBufferAttribute(e,i),Fo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Io,s.x),o.addScaledVector(No,s.y),o.addScaledVector(Fo,s.z),o}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),Un.subVectors(e,t),dn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,i),tr.subVectors(s,i),Do.subVectors(e,i);const c=er.dot(Do),l=tr.dot(Do);if(c<=0&&l<=0)return t.copy(i);Lo.subVectors(e,r);const u=er.dot(Lo),h=tr.dot(Lo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(er,o);Uo.subVectors(e,s);const p=er.dot(Uo),_=tr.dot(Uo);if(_>=0&&p<=_)return t.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(tr,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return pc.subVectors(s,r),a=(h-u)/(h-u+(p-_)),t.copy(r).addScaledVector(pc,a);const f=1/(m+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=$d(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Oo(o,s,e+1/3),this.g=Oo(o,s,e),this.b=Oo(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=sh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return nt.workingToColorSpace(Pt.copy(this),e),Math.round(Ye(Pt.r*255,0,255))*65536+Math.round(Ye(Pt.g*255,0,255))*256+Math.round(Ye(Pt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Vt){nt.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(vs);const i=xo(Kn.h,vs.h,t),r=xo(Kn.s,vs.s,t),s=xo(Kn.l,vs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new ze;ze.NAMES=sh;let hp=0;class Gi extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=is(),this.name="",this.type="Material",this.blending=_r,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=ha,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ua&&(i.blendSrc=this.blendSrc),this.blendDst!==ha&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oh extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new B,xs=new He;let fp=0;class Bt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class ah extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lh extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dp=0;const on=new pt,Bo=new Ct,nr=new B,jt=new Vi,Ir=new Vi,bt=new B;class Lt extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?lh:ah)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(jt.min,Ir.min),jt.expandByPoint(bt),bt.addVectors(jt.max,Ir.max),jt.expandByPoint(bt)):(jt.expandByPoint(Ir.min),jt.expandByPoint(Ir.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bt.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(e,l),bt.add(nr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new B,c[I]=new B;const l=new B,u=new B,h=new B,d=new He,p=new He,_=new He,v=new B,m=new B;function f(I,y,S){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,y),_.fromBufferAttribute(s,S),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(A),a[I].add(v),a[y].add(v),a[S].add(v),c[I].add(m),c[y].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,y=w.length;I<y;++I){const S=w[I],A=S.start,j=S.count;for(let $=A,Q=A+j;$<Q;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new B,b=new B,L=new B,R=new B;function P(I){L.fromBufferAttribute(r,I),R.copy(L);const y=a[I];T.copy(y),T.sub(L.multiplyScalar(L.dot(y))).normalize(),b.crossVectors(R,y);const A=b.dot(c[I])<0?-1:1;o.setXYZW(I,T.x,T.y,T.z,A)}for(let I=0,y=w.length;I<y;++I){const S=w[I],A=S.start,j=S.count;for(let $=A,Q=A+j;$<Q;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new Bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new pt,_i=new Tl,Ms=new uo,_c=new B,Ss=new B,Es=new B,ys=new B,zo=new B,bs=new B,gc=new B,Ts=new B;class Wt extends Ct{constructor(e=new Lt,t=new oh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(zo.fromBufferAttribute(h,e),o?bs.addScaledVector(zo,u):bs.addScaledVector(zo.sub(t),u))}t.add(bs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Ms.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Ms,_c)===null||_i.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(mc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(mc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,L=T;b<L;b+=3){const R=a.getX(b),P=a.getX(b+1),I=a.getX(b+2);r=As(this,f,e,i,l,u,h,R,P,I),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const w=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);r=As(this,o,e,i,l,u,h,w,T,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,L=T;b<L;b+=3){const R=b,P=b+1,I=b+2;r=As(this,f,e,i,l,u,h,R,P,I),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const w=m,T=m+1,b=m+2;r=As(this,o,e,i,l,u,h,w,T,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pp(n,e,t,i,r,s,o,a){let c;if(e.side===Xt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ci,a),c===null)return null;Ts.copy(a),Ts.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ts);return l<t.near||l>t.far?null:{distance:l,point:Ts.clone(),object:n}}function As(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ss),n.getVertexPosition(c,Es),n.getVertexPosition(l,ys);const u=pp(n,e,t,i,Ss,Es,ys,gc);if(u){const h=new B;_n.getBarycoord(gc,Ss,Es,ys,h),r&&(u.uv=_n.getInterpolatedAttribute(r,a,c,l,h,new He)),s&&(u.uv1=_n.getInterpolatedAttribute(s,a,c,l,h,new He)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,c,l,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new B,materialIndex:0};_n.getNormal(Ss,Es,ys,d.normal),u.face=d,u.barycoord=h}return u}class rs extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function _(v,m,f,w,T,b,L,R,P,I,y){const S=b/P,A=L/I,j=b/2,$=L/2,Q=R/2,k=P+1,Y=I+1;let ie=0,V=0;const de=new B;for(let ve=0;ve<Y;ve++){const ae=ve*A-$;for(let Ie=0;Ie<k;Ie++){const qe=Ie*S-j;de[v]=qe*w,de[m]=ae*T,de[f]=Q,l.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[f]=R>0?1:-1,u.push(de.x,de.y,de.z),h.push(Ie/P),h.push(1-ve/I),ie+=1}}for(let ve=0;ve<I;ve++)for(let ae=0;ae<P;ae++){const Ie=d+ae+k*ve,qe=d+ae+k*(ve+1),je=d+(ae+1)+k*(ve+1),J=d+(ae+1)+k*ve;c.push(Ie,qe,J),c.push(qe,je,J),V+=6}a.addGroup(p,V,y),p+=V,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const r in i)e[r]=i[r]}return e}function mp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ch(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const _p={clone:Tr,merge:It};var gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uh extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new B,vc=new He,xc=new He;class Jt extends uh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,vc,xc),t.subVectors(xc,vc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class xp extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new Jt(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new Jt(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new Jt(ir,rr,e,t);a.layers=this.layers,this.add(a);const c=new Jt(ir,rr,e,t);c.layers=this.layers,this.add(c);const l=new Jt(ir,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hh extends Ot{constructor(e=[],t=Er,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rs(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ri});s.uniforms.tEquirect.value=t;const o=new Wt(r,s),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=Gt),new xp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class bi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mc extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ho=new B,Ep=new B,yp=new Ge;class Qn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(Ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yp.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new uo,bp=new He(.5,.5),ws=new B;class Al{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],_=s[8],v=s[9],m=s[10],f=s[11],w=s[12],T=s[13],b=s[14],L=s[15];if(r[0].setComponents(l-o,p-u,f-_,L-w).normalize(),r[1].setComponents(l+o,p+u,f+_,L+w).normalize(),r[2].setComponents(l+a,p+h,f+v,L+T).normalize(),r[3].setComponents(l-a,p-h,f-v,L-T).normalize(),i)r[4].setComponents(c,d,m,b).normalize(),r[5].setComponents(l-c,p-d,f-m,L-b).normalize();else if(r[4].setComponents(l-c,p-d,f-m,L-b).normalize(),t===Tn)r[5].setComponents(l+c,p+d,f+m,L+b).normalize();else if(t===eo)r[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=bp.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ws.x=r.normal.x>0?e.max.x:e.min.x,ws.y=r.normal.y>0?e.max.y:e.min.y,ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wl extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new B,no=new B,Sc=new pt,Nr=new Tl,Cs=new uo,Vo=new B,Ec=new B;class Tp extends Ct{constructor(e=new Lt,t=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)to.fromBufferAttribute(t,r-1),no.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=to.distanceTo(no);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;Sc.copy(r).invert(),Nr.copy(e.ray).applyMatrix4(Sc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=l){const f=u.getX(v),w=u.getX(v+1),T=Rs(this,e,Nr,c,f,w,v);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),f=Rs(this,e,Nr,c,v,m,_-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=l){const f=Rs(this,e,Nr,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Rs(this,e,Nr,c,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(to.fromBufferAttribute(a,r),no.fromBufferAttribute(a,s),t.distanceSqToSegment(to,no,Vo,Ec)>i)return;Vo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Vo);if(!(l<e.near||l>e.far))return{distance:l,point:Ec.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const yc=new B,bc=new B;class fh extends Tp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)yc.fromBufferAttribute(t,r),bc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+yc.distanceTo(bc);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dh extends Ot{constructor(e,t,i=Ii,r,s,o,a=tn,c=tn,l,u=jr,h=1){if(u!==jr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ho extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,p=[],_=[],v=[],m=[];for(let f=0;f<u;f++){const w=f*d-o;for(let T=0;T<l;T++){const b=T*h-s;_.push(b,-w,0),v.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){const T=w+l*f,b=w+l*(f+1),L=w+1+l*(f+1),R=w+1+l*f;p.push(T,b,R),p.push(b,L,R)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ps extends Gi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ap extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wp extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Cp{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Rp=new Cp;class Oi{constructor(e){this.manager=e!==void 0?e:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class Pp extends Error{constructor(e,t){super(e),this.response=t}}class mh extends Oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:i,onError:r});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Nn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let v=0;const m=new ReadableStream({start(f){w();function w(){h.read().then(({done:T,value:b})=>{if(T)f.close();else{v+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let R=0,P=u.length;R<P;R++){const I=u[R];I.onProgress&&I.onProgress(L)}f.enqueue(b),w()}},T=>{f.error(T)})}}});return new Response(m)}else throw new Pp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{zr.add(`file:${e}`,l);const u=Nn[e];delete Nn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const sr=new WeakMap;class Dp extends Oi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=sr.get(o);h===void 0&&(h=[],sr.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=Zr("img");function c(){u(),t&&t(this);const h=sr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}sr.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),zr.remove(`image:${e}`);const d=sr.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(h)}sr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Lp extends Oi{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,o=new Dp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class _h extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Go=new pt,Tc=new B,Ac=new B;class Up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cl extends uh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ip extends Up{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Np extends _h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Ip}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fp extends _h{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Op extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cc extends fh{constructor(e=10,t=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,p=0,_=-a;d<=t;d++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const v=d===s?i:r;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const u=new Lt;u.setAttribute("position",new xt(c,3)),u.setAttribute("color",new xt(l,3));const h=new wl({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Rc extends fh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Lt;r.setAttribute("position",new xt(t,3)),r.setAttribute("color",new xt(i,3));const s=new wl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new ze,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bp extends Hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pc(n,e,t,i){const r=zp(i);switch(t){case Ku:return n*e;case Ju:return n*e/r.components*r.byteLength;case Ml:return n*e/r.components*r.byteLength;case Qu:return n*e*2/r.components*r.byteLength;case Sl:return n*e*2/r.components*r.byteLength;case Zu:return n*e*3/r.components*r.byteLength;case gn:return n*e*4/r.components*r.byteLength;case El:return n*e*4/r.components*r.byteLength;case Os:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ea:case ba:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case ya:return Math.max(n,8)*Math.max(e,8)/2;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case za:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hs:case Va:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case eh:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xa:case qa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zp(n){switch(n){case wn:case Yu:return{byteLength:1,components:1};case Yr:case $u:case ns:return{byteLength:2,components:1};case vl:case xl:return{byteLength:2,components:4};case Ii:case gl:case kn:return{byteLength:4,components:1};case ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function kp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Um=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Hp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:$p,batching_pars_vertex:jp,batching_vertex:Kp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:um,cube_uv_reflection_fragment:hm,defaultnormal_vertex:fm,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:_m,colorspace_fragment:gm,colorspace_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:ym,fog_vertex:bm,fog_pars_vertex:Tm,fog_fragment:Am,fog_pars_fragment:wm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Lm,lights_toon_fragment:Im,lights_toon_pars_fragment:Nm,lights_phong_fragment:Fm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:zm,lights_fragment_begin:km,lights_fragment_maps:Hm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:jm,map_particle_pars_fragment:Km,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Qm,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:__,project_vertex:g_,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:y_,shadowmap_vertex:b_,shadowmask_pars_fragment:T_,skinbase_vertex:A_,skinning_pars_vertex:w_,skinning_vertex:C_,skinnormal_vertex:R_,specularmap_fragment:P_,specularmap_pars_fragment:D_,tonemapping_fragment:L_,tonemapping_pars_fragment:U_,transmission_fragment:I_,transmission_pars_fragment:N_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:z_,background_vert:k_,background_frag:H_,backgroundCube_vert:V_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:$_,distanceRGBA_frag:j_,equirect_vert:K_,equirect_frag:Z_,linedashed_vert:J_,linedashed_frag:Q_,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:ug,meshphysical_frag:hg,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:_g,shadow_frag:gg,sprite_vert:vg,sprite_frag:xg},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Sn={basic:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:It([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:It([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Sn.physical={uniforms:It([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ds={r:0,b:0,g:0},vi=new vn,Mg=new pt;function Sg(n,e,t,i,r,s,o){const a=new ze(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function _(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function v(T){let b=!1;const L=_(T);L===null?f(a,c):L&&L.isColor&&(f(L,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,b){const L=_(b);L&&(L.isCubeTexture||L.mapping===co)?(u===void 0&&(u=new Wt(new rs(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Tr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(b.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(vi)),u.material.toneMapped=nt.getTransfer(L.colorSpace)!==st,(h!==L||d!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=L,d=L.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Wt(new ho(2,2),new ui({name:"BackgroundMaterial",uniforms:Tr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(L.colorSpace)!==st,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=L,d=L.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,b){T.getRGB(Ds,ch(n)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,b,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:v,addToRenderList:m,dispose:w}}function Eg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,A,j,$,Q){let k=!1;const Y=h($,j,A);s!==Y&&(s=Y,l(s.object)),k=p(S,$,j,Q),k&&_(S,$,j,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(S,A,j,$),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,A,j){const $=j.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let k=Q[A.id];k===void 0&&(k={},Q[A.id]=k);let Y=k[$];return Y===void 0&&(Y=d(c()),k[$]=Y),Y}function d(S){const A=[],j=[],$=[];for(let Q=0;Q<t;Q++)A[Q]=0,j[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:j,attributeDivisors:$,object:S,attributes:{},index:null}}function p(S,A,j,$){const Q=s.attributes,k=A.attributes;let Y=0;const ie=j.getAttributes();for(const V in ie)if(ie[V].location>=0){const ve=Q[V];let ae=k[V];if(ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ve===void 0||ve.attribute!==ae||ae&&ve.data!==ae.data)return!0;Y++}return s.attributesNum!==Y||s.index!==$}function _(S,A,j,$){const Q={},k=A.attributes;let Y=0;const ie=j.getAttributes();for(const V in ie)if(ie[V].location>=0){let ve=k[V];ve===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const ae={};ae.attribute=ve,ve&&ve.data&&(ae.data=ve.data),Q[V]=ae,Y++}s.attributes=Q,s.attributesNum=Y,s.index=$}function v(){const S=s.newAttributes;for(let A=0,j=S.length;A<j;A++)S[A]=0}function m(S){f(S,0)}function f(S,A){const j=s.newAttributes,$=s.enabledAttributes,Q=s.attributeDivisors;j[S]=1,$[S]===0&&(n.enableVertexAttribArray(S),$[S]=1),Q[S]!==A&&(n.vertexAttribDivisor(S,A),Q[S]=A)}function w(){const S=s.newAttributes,A=s.enabledAttributes;for(let j=0,$=A.length;j<$;j++)A[j]!==S[j]&&(n.disableVertexAttribArray(j),A[j]=0)}function T(S,A,j,$,Q,k,Y){Y===!0?n.vertexAttribIPointer(S,A,j,Q,k):n.vertexAttribPointer(S,A,j,$,Q,k)}function b(S,A,j,$){v();const Q=$.attributes,k=j.getAttributes(),Y=A.defaultAttributeValues;for(const ie in k){const V=k[ie];if(V.location>=0){let de=Q[ie];if(de===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const ve=de.normalized,ae=de.itemSize,Ie=e.get(de);if(Ie===void 0)continue;const qe=Ie.buffer,je=Ie.type,J=Ie.bytesPerElement,D=je===n.INT||je===n.UNSIGNED_INT||de.gpuType===gl;if(de.isInterleavedBufferAttribute){const C=de.data,z=C.stride,H=de.offset;if(C.isInstancedInterleavedBuffer){for(let G=0;G<V.locationSize;G++)f(V.location+G,C.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let G=0;G<V.locationSize;G++)m(V.location+G);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let G=0;G<V.locationSize;G++)T(V.location+G,ae/V.locationSize,je,ve,z*J,(H+ae/V.locationSize*G)*J,D)}else{if(de.isInstancedBufferAttribute){for(let C=0;C<V.locationSize;C++)f(V.location+C,de.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let C=0;C<V.locationSize;C++)m(V.location+C);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let C=0;C<V.locationSize;C++)T(V.location+C,ae/V.locationSize,je,ve,ae*J,ae/V.locationSize*C*J,D)}}else if(Y!==void 0){const ve=Y[ie];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(V.location,ve);break;case 3:n.vertexAttrib3fv(V.location,ve);break;case 4:n.vertexAttrib4fv(V.location,ve);break;default:n.vertexAttrib1fv(V.location,ve)}}}}w()}function L(){I();for(const S in i){const A=i[S];for(const j in A){const $=A[j];for(const Q in $)u($[Q].object),delete $[Q];delete A[j]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const A=i[S.id];for(const j in A){const $=A[j];for(const Q in $)u($[Q].object),delete $[Q];delete A[j]}delete i[S.id]}function P(S){for(const A in i){const j=i[A];if(j[S.id]===void 0)continue;const $=j[S.id];for(const Q in $)u($[Q].object),delete $[Q];delete j[S.id]}}function I(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function yg(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*d[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==gn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==kn&&!I)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:L,maxSamples:R}}function Tg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,T=w*4;let b=f.clippingState||null;c.value=b,b=u(_,d,T,p);for(let L=0;L!==T;++L)b[L]=t[L];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const f=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,b=p;T!==v;++T,b+=4)o.copy(h[T]).applyMatrix4(w,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ag(n){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=Er:a===Ma&&(o.mapping=yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===Ma)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ur=4,Dc=[.125,.215,.35,.446,.526,.582],Ei=20,Wo=new Cl,Lc=new ze;let Xo=null,qo=0,Yo=0,$o=!1;const Mi=(1+Math.sqrt(5))/2,or=1/Mi,Uc=[new B(-Mi,or,0),new B(Mi,or,0),new B(-or,0,Mi),new B(or,0,Mi),new B(0,Mi,-or),new B(0,Mi,or),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],wg=new B;class Ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=wg}=s;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=$o,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ns,format:gn,colorSpace:br,depthBuffer:!1},r=Nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(s)),this._blurMaterial=Rg(s,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,r,s){const c=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Lc),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new oh({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new Wt(new rs,v);let f=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,f=!0):(v.color.copy(Lc),f=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const L=this._cubeSize;Ls(r,b*L,T>2?L:0,L,L),h.setRenderTarget(r),f&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ls(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Uc[(r-s-1)%Uc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let w=0;for(let P=0;P<Ei;++P){const I=P/v,y=Math.exp(-I*I/2);f.push(y),P===0?w+=y:P<m&&(w+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const b=this._sizeLods[r],L=3*b*(r>T-ur?r-T+ur:0),R=4*(this._cubeSize-b);Ls(t,L,R,3*b,2*b),c.setRenderTarget(t),c.render(h,Wo)}}function Cg(n){const e=[],t=[],i=[];let r=n;const s=n-ur+1+Dc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ur?c=Dc[o-n+ur-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,m=2,f=1,w=new Float32Array(v*_*p),T=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,I=R>2?0:-1,y=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];w.set(y,v*_*R),T.set(d,m*_*R);const S=[R,R,R,R,R,R];b.set(S,f*_*R)}const L=new Lt;L.setAttribute("position",new Bt(w,v)),L.setAttribute("uv",new Bt(T,m)),L.setAttribute("faceIndex",new Bt(b,f)),e.push(L),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nc(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rg(n,e,t){const i=new Float32Array(Ei),r=new B(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Fc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Oc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===xa||c===Ma,u=c===Er||c===yr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ic(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Ic(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Dg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lg(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let T=0,b=w.length;T<b;T+=3){const L=w[T+0],R=w[T+1],P=w[T+2];d.push(L,R,R,P,P,L)}}else if(_!==void 0){const w=_.array;v=_.version;for(let T=0,b=w.length/3-1;T<b;T+=3){const L=T+0,R=T+1,P=T+2;d.push(L,R,R,P,P,L)}}else return;const m=new(nh(d)?lh:ah)(d,1);m.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ug(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function l(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*o,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function h(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let f=0;for(let w=0;w<_;w++)f+=p[w]*v[w];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ig(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ng(n,e,t){const i=new WeakMap,r=new _t;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let L=a.attributes.position.count*b,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*R*4*h),I=new ih(P,L,R,h);I.type=kn,I.needsUpdate=!0;const y=b*4;for(let A=0;A<h;A++){const j=f[A],$=w[A],Q=T[A],k=L*R*4*A;for(let Y=0;Y<j.count;Y++){const ie=Y*y;_===!0&&(r.fromBufferAttribute(j,Y),P[k+ie+0]=r.x,P[k+ie+1]=r.y,P[k+ie+2]=r.z,P[k+ie+3]=0),v===!0&&(r.fromBufferAttribute($,Y),P[k+ie+4]=r.x,P[k+ie+5]=r.y,P[k+ie+6]=r.z,P[k+ie+7]=0),m===!0&&(r.fromBufferAttribute(Q,Y),P[k+ie+8]=r.x,P[k+ie+9]=r.y,P[k+ie+10]=r.z,P[k+ie+11]=Q.itemSize===4?r.w:1)}}d={count:h,texture:I,size:new He(L,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Fg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const vh=new Ot,Bc=new dh(1,1),xh=new ih,Mh=new ip,Sh=new hh,zc=[],kc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zc[r];if(s===void 0&&(s=new Float32Array(r),zc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fo(n,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Gc.set(i),n.uniformMatrix2fv(this.addr,!1,Gc),yt(t,i)}}function Vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),yt(t,i)}}function Gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Hc.set(i),n.uniformMatrix4fv(this.addr,!1,Hc),yt(t,i)}}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Bc.compareFunction=th,s=Bc):s=vh,t.setTexture2D(e||s,r)}function Qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mh,r)}function ev(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sh,r)}function tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xh,r)}function nv(n){switch(n){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Hg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return jg;case 36295:return Kg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(n,e){n.uniform1fv(this.addr,e)}function rv(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function sv(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function ov(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function av(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lv(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cv(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uv(n,e){n.uniform1iv(this.addr,e)}function hv(n,e){n.uniform2iv(this.addr,e)}function fv(n,e){n.uniform3iv(this.addr,e)}function dv(n,e){n.uniform4iv(this.addr,e)}function pv(n,e){n.uniform1uiv(this.addr,e)}function mv(n,e){n.uniform2uiv(this.addr,e)}function _v(n,e){n.uniform3uiv(this.addr,e)}function gv(n,e){n.uniform4uiv(this.addr,e)}function vv(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||vh,s[o])}function xv(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mh,s[o])}function Mv(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sh,s[o])}function Sv(n,e,t){const i=this.cache,r=e.length,s=fo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xh,s[o])}function Ev(n){switch(n){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return _v;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nv(t.type)}}class bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function Av(n,e,t){const i=n.name,r=i.length;for(jo.lastIndex=0;;){const s=jo.exec(i),o=jo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Wc(t,l===void 0?new yv(a,n,e):new bv(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Tv(a),Wc(t,h)),t=h}}}class Gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Av(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Xc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wv=37297;let Cv=0;function Rv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qc=new Ge;function Pv(n){nt._getMatrix(qc,nt.workingColorSpace,n);const e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Qs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Rv(n.getShaderSource(e),a)}else return s}function Dv(n,e){const t=Pv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lv(n,e){let t;switch(e){case Pd:t="Linear";break;case Dd:t="Reinhard";break;case Ld:t="Cineon";break;case Ud:t="ACESFilmic";break;case Nd:t="AgX";break;case Fd:t="Neutral";break;case Id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new B;function Uv(){nt.getLuminanceCoefficients(Us);const n=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Nv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Br(n){return n!==""}function $c(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(n){return n.replace(Ov,zv)}const Bv=new Map;function zv(n,e){let t=We[e];if(t===void 0){const i=Bv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(n){return n.replace(kv,Hv)}function Hv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case yr:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _l:e="ENVMAP_BLENDING_MULTIPLY";break;case Cd:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function qv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Yv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Vv(t),l=Gv(t),u=Wv(t),h=Xv(t),d=qv(t),p=Iv(t),_=Nv(s),v=r.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),f.length>0&&(f+=`
`)):(m=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),f=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?We.tonemapping_pars_fragment:"",t.toneMapping!==si?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=$a(o),o=$c(o,t),o=jc(o,t),a=$a(a),a=$c(a,t),a=jc(a,t),o=Kc(o),a=Kc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=w+m+o,b=w+f+a,L=Xc(r,r.VERTEX_SHADER,T),R=Xc(r,r.FRAGMENT_SHADER,b);r.attachShader(v,L),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(A){if(n.debug.checkShaderErrors){const j=r.getProgramInfoLog(v)||"",$=r.getShaderInfoLog(L)||"",Q=r.getShaderInfoLog(R)||"",k=j.trim(),Y=$.trim(),ie=Q.trim();let V=!0,de=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,L,R);else{const ve=Yc(r,L,"vertex"),ae=Yc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+ve+`
`+ae)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(Y===""||ie==="")&&(de=!1);de&&(A.diagnostics={runnable:V,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ie,prefix:f}})}r.deleteShader(L),r.deleteShader(R),I=new Gs(r,v),y=Fv(r,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,wv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let $v=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kv(e),t.set(e,i)),i}}class Kv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function Zv(n,e,t,i,r,s,o){const a=new rh,c=new jv,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,A,j,$){const Q=j.fog,k=$.geometry,Y=y.isMeshStandardMaterial?j.environment:null,ie=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),V=ie&&ie.mapping===co?ie.image.height:null,de=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=ve!==void 0?ve.length:0;let Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let qe,je,J,D;if(de){const it=Sn[de];qe=it.vertexShader,je=it.fragmentShader}else qe=y.vertexShader,je=y.fragmentShader,c.update(y),J=c.getVertexShaderID(y),D=c.getFragmentShaderID(y);const C=n.getRenderTarget(),z=n.state.buffers.depth.getReversed(),H=$.isInstancedMesh===!0,G=$.isBatchedMesh===!0,q=!!y.map,ee=!!y.matcap,E=!!ie,re=!!y.aoMap,ne=!!y.lightMap,me=!!y.bumpMap,K=!!y.normalMap,Xe=!!y.displacementMap,ue=!!y.emissiveMap,Re=!!y.metalnessMap,Ke=!!y.roughnessMap,Le=y.anisotropy>0,M=y.clearcoat>0,g=y.dispersion>0,O=y.iridescence>0,te=y.sheen>0,oe=y.transmission>0,Z=Le&&!!y.anisotropyMap,Ee=M&&!!y.clearcoatMap,pe=M&&!!y.clearcoatNormalMap,Ae=M&&!!y.clearcoatRoughnessMap,Pe=O&&!!y.iridescenceMap,he=O&&!!y.iridescenceThicknessMap,Se=te&&!!y.sheenColorMap,Oe=te&&!!y.sheenRoughnessMap,De=!!y.specularMap,xe=!!y.specularColorMap,Ve=!!y.specularIntensityMap,U=oe&&!!y.transmissionMap,fe=oe&&!!y.thicknessMap,_e=!!y.gradientMap,Te=!!y.alphaMap,le=y.alphaTest>0,se=!!y.alphaHash,Ce=!!y.extensions;let ke=si;y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=n.toneMapping);const lt={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:je,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:D,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:G,batchingColor:G&&$._colorsTexture!==null,instancing:H,instancingColor:H&&$.instanceColor!==null,instancingMorph:H&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:C===null?n.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:br,alphaToCoverage:!!y.alphaToCoverage,map:q,matcap:ee,envMap:E,envMapMode:E&&ie.mapping,envMapCubeUVHeight:V,aoMap:re,lightMap:ne,bumpMap:me,normalMap:K,displacementMap:d&&Xe,emissiveMap:ue,normalMapObjectSpace:K&&y.normalMapType===kd,normalMapTangentSpace:K&&y.normalMapType===yl,metalnessMap:Re,roughnessMap:Ke,anisotropy:Le,anisotropyMap:Z,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ae,dispersion:g,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:he,sheen:te,sheenColorMap:Se,sheenRoughnessMap:Oe,specularMap:De,specularColorMap:xe,specularIntensityMap:Ve,transmission:oe,transmissionMap:U,thicknessMap:fe,gradientMap:_e,opaque:y.transparent===!1&&y.blending===_r&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:le,alphaHash:se,combine:y.combine,mapUv:q&&v(y.map.channel),aoMapUv:re&&v(y.aoMap.channel),lightMapUv:ne&&v(y.lightMap.channel),bumpMapUv:me&&v(y.bumpMap.channel),normalMapUv:K&&v(y.normalMap.channel),displacementMapUv:Xe&&v(y.displacementMap.channel),emissiveMapUv:ue&&v(y.emissiveMap.channel),metalnessMapUv:Re&&v(y.metalnessMap.channel),roughnessMapUv:Ke&&v(y.roughnessMap.channel),anisotropyMapUv:Z&&v(y.anisotropyMap.channel),clearcoatMapUv:Ee&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(y.sheenRoughnessMap.channel),specularMapUv:De&&v(y.specularMap.channel),specularColorMapUv:xe&&v(y.specularColorMap.channel),specularIntensityMapUv:Ve&&v(y.specularIntensityMap.channel),transmissionMapUv:U&&v(y.transmissionMap.channel),thicknessMapUv:fe&&v(y.thicknessMap.channel),alphaMapUv:Te&&v(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(K||Le),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!k.attributes.uv&&(q||Te),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:z,skinning:$.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:q&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ce&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&y.extensions.multiDraw===!0||G)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)S.push(A),S.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(w(S,y),T(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function w(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){const S=_[y.type];let A;if(S){const j=Sn[S];A=_p.clone(j.uniforms)}else A=y.uniforms;return A}function L(y,S){let A;for(let j=0,$=u.length;j<$;j++){const Q=u[j];if(Q.cacheKey===S){A=Q,++A.usedTimes;break}}return A===void 0&&(A=new Yv(n,S,y,s),u.push(A)),A}function R(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:I}}function Jv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,_,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,d,p,_,v,m){const f=o(h,d,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,_,v,m){const f=o(h,d,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Qv),i.length>1&&i.sort(d||Jc),r.length>1&&r.sort(d||Jc)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function e0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Qc,n.set(i,[o])):r>=s.length?(o=new Qc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function t0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ze};break;case"SpotLight":t={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function n0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let i0=0;function r0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function s0(n){const e=new t0,t=n0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const r=new B,s=new pt,o=new pt;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,v=0,m=0,f=0,w=0,T=0,b=0,L=0,R=0,P=0;l.sort(r0);for(let y=0,S=l.length;y<S;y++){const A=l[y],j=A.color,$=A.intensity,Q=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=j.r*$,h+=j.g*$,d+=j.b*$;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(A.sh.coefficients[Y],$);P++}else if(A.isDirectionalLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const ie=A.shadow,V=t.get(A);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=A.shadow.matrix,w++}i.directional[p]=Y,p++}else if(A.isSpotLight){const Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(j).multiplyScalar($),Y.distance=Q,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,i.spot[v]=Y;const ie=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,ie.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[v]=ie.matrix,A.castShadow){const V=t.get(A);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=k,b++}v++}else if(A.isRectAreaLight){const Y=e.get(A);Y.color.copy(j).multiplyScalar($),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=Y,m++}else if(A.isPointLight){const Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const ie=A.shadow,V=t.get(A);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=A.shadow.matrix,T++}i.point[_]=Y,_++}else if(A.isHemisphereLight){const Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar($),Y.groundColor.copy(A.groundColor).multiplyScalar($),i.hemi[f]=Y,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==b||I.numSpotMaps!==L||I.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,I.directionalLength=p,I.pointLength=_,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=b,I.numSpotMaps=L,I.numLightProbes=P,i.version=i0++)}function c(l,u){let h=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const T=l[f];if(T.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(T.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function eu(n){const e=new s0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function o0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eu(n),e.set(r,[a])):s>=o.length?(a=new eu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c0(n,e,t){let i=new Al;const r=new He,s=new He,o=new _t,a=new Ap({depthPacking:zd}),c=new wp,l={},u=t.maxTextureSize,h={[ci]:Xt,[Xt]:ci,[On]:On},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:a0,fragmentShader:l0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Lt;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let f=this.type;this.render=function(R,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),j=n.state;j.setBlending(ri),j.buffers.depth.getReversed()?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const $=f!==Fn&&this.type===Fn,Q=f===Fn&&this.type!==Fn;for(let k=0,Y=R.length;k<Y;k++){const ie=R[k],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const de=V.getFrameExtents();if(r.multiply(de),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,V.mapSize.y=s.y)),V.map===null||$===!0||Q===!0){const ae=this.type!==Fn?{minFilter:tn,magFilter:tn}:{};V.map!==null&&V.map.dispose(),V.map=new Fi(r.x,r.y,ae),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ve=V.getViewportCount();for(let ae=0;ae<ve;ae++){const Ie=V.getViewport(ae);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),j.viewport(o),V.updateMatrices(ie,ae),i=V.getFrustum(),b(P,I,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&w(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,A)};function w(R,P){const I=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,I,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,I,p,v,null)}function T(R,P,I,y){let S=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)S=A;else if(S=I.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const j=S.uuid,$=P.uuid;let Q=l[j];Q===void 0&&(Q={},l[j]=Q);let k=Q[$];k===void 0&&(k=S.clone(),Q[$]=k,P.addEventListener("dispose",L)),S=k}if(S.visible=P.visible,S.wireframe=P.wireframe,y===Fn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=n.properties.get(S);j.light=I}return S}function b(R,P,I,y,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Fn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const $=e.update(R),Q=R.material;if(Array.isArray(Q)){const k=$.groups;for(let Y=0,ie=k.length;Y<ie;Y++){const V=k[Y],de=Q[V.materialIndex];if(de&&de.visible){const ve=T(R,de,y,S);R.onBeforeShadow(n,R,P,I,$,ve,V),n.renderBufferDirect(I,null,$,ve,R,V),R.onAfterShadow(n,R,P,I,$,ve,V)}}}else if(Q.visible){const k=T(R,Q,y,S);R.onBeforeShadow(n,R,P,I,$,k,null),n.renderBufferDirect(I,null,$,k,R,null),R.onAfterShadow(n,R,P,I,$,k,null)}}const j=R.children;for(let $=0,Q=j.length;$<Q;$++)b(j[$],P,I,y,S)}function L(R){R.target.removeEventListener("dispose",L);for(const I in l){const y=l[I],S=R.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const u0={[fa]:da,[pa]:ga,[ma]:va,[Sr]:_a,[da]:fa,[ga]:pa,[va]:ma,[_a]:Sr};function h0(n,e){function t(){let U=!1;const fe=new _t;let _e=null;const Te=new _t(0,0,0,0);return{setMask:function(le){_e!==le&&!U&&(n.colorMask(le,le,le,le),_e=le)},setLocked:function(le){U=le},setClear:function(le,se,Ce,ke,lt){lt===!0&&(le*=ke,se*=ke,Ce*=ke),fe.set(le,se,Ce,ke),Te.equals(fe)===!1&&(n.clearColor(le,se,Ce,ke),Te.copy(fe))},reset:function(){U=!1,_e=null,Te.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,_e=null,Te=null,le=null;return{setReversed:function(se){if(fe!==se){const Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),fe=se;const ke=le;le=null,this.setClear(ke)}},getReversed:function(){return fe},setTest:function(se){se?C(n.DEPTH_TEST):z(n.DEPTH_TEST)},setMask:function(se){_e!==se&&!U&&(n.depthMask(se),_e=se)},setFunc:function(se){if(fe&&(se=u0[se]),Te!==se){switch(se){case fa:n.depthFunc(n.NEVER);break;case da:n.depthFunc(n.ALWAYS);break;case pa:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case ma:n.depthFunc(n.EQUAL);break;case _a:n.depthFunc(n.GEQUAL);break;case ga:n.depthFunc(n.GREATER);break;case va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=se}},setLocked:function(se){U=se},setClear:function(se){le!==se&&(fe&&(se=1-se),n.clearDepth(se),le=se)},reset:function(){U=!1,_e=null,Te=null,le=null,fe=!1}}}function r(){let U=!1,fe=null,_e=null,Te=null,le=null,se=null,Ce=null,ke=null,lt=null;return{setTest:function(it){U||(it?C(n.STENCIL_TEST):z(n.STENCIL_TEST))},setMask:function(it){fe!==it&&!U&&(n.stencilMask(it),fe=it)},setFunc:function(it,Cn,Mn){(_e!==it||Te!==Cn||le!==Mn)&&(n.stencilFunc(it,Cn,Mn),_e=it,Te=Cn,le=Mn)},setOp:function(it,Cn,Mn){(se!==it||Ce!==Cn||ke!==Mn)&&(n.stencilOp(it,Cn,Mn),se=it,Ce=Cn,ke=Mn)},setLocked:function(it){U=it},setClear:function(it){lt!==it&&(n.clearStencil(it),lt=it)},reset:function(){U=!1,fe=null,_e=null,Te=null,le=null,se=null,Ce=null,ke=null,lt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,w=null,T=null,b=null,L=null,R=null,P=new ze(0,0,0),I=0,y=!1,S=null,A=null,j=null,$=null,Q=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ie=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=ie>=2);let de=null,ve={};const ae=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),qe=new _t().fromArray(ae),je=new _t().fromArray(Ie);function J(U,fe,_e,Te){const le=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<_e;Ce++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(fe+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return se}const D={};D[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),D[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),D[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),C(n.DEPTH_TEST),o.setFunc(Sr),me(!1),K(Kl),C(n.CULL_FACE),re(ri);function C(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function z(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function H(U,fe){return h[U]!==fe?(n.bindFramebuffer(U,fe),h[U]=fe,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function G(U,fe){let _e=p,Te=!1;if(U){_e=d.get(fe),_e===void 0&&(_e=[],d.set(fe,_e));const le=U.textures;if(_e.length!==le.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Ce=le.length;se<Ce;se++)_e[se]=n.COLOR_ATTACHMENT0+se;_e.length=le.length,Te=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Te=!0);Te&&n.drawBuffers(_e)}function q(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const ee={[Si]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[fd]:n.FUNC_REVERSE_SUBTRACT};ee[dd]=n.MIN,ee[pd]=n.MAX;const E={[md]:n.ZERO,[_d]:n.ONE,[gd]:n.SRC_COLOR,[ua]:n.SRC_ALPHA,[yd]:n.SRC_ALPHA_SATURATE,[Sd]:n.DST_COLOR,[xd]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[ha]:n.ONE_MINUS_SRC_ALPHA,[Ed]:n.ONE_MINUS_DST_COLOR,[Md]:n.ONE_MINUS_DST_ALPHA,[bd]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[Ad]:n.CONSTANT_ALPHA,[wd]:n.ONE_MINUS_CONSTANT_ALPHA};function re(U,fe,_e,Te,le,se,Ce,ke,lt,it){if(U===ri){v===!0&&(z(n.BLEND),v=!1);return}if(v===!1&&(C(n.BLEND),v=!0),U!==ud){if(U!==m||it!==y){if((f!==Si||b!==Si)&&(n.blendEquation(n.FUNC_ADD),f=Si,b=Si),it)switch(U){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.ONE,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,T=null,L=null,R=null,P.set(0,0,0),I=0,m=U,y=it}return}le=le||fe,se=se||_e,Ce=Ce||Te,(fe!==f||le!==b)&&(n.blendEquationSeparate(ee[fe],ee[le]),f=fe,b=le),(_e!==w||Te!==T||se!==L||Ce!==R)&&(n.blendFuncSeparate(E[_e],E[Te],E[se],E[Ce]),w=_e,T=Te,L=se,R=Ce),(ke.equals(P)===!1||lt!==I)&&(n.blendColor(ke.r,ke.g,ke.b,lt),P.copy(ke),I=lt),m=U,y=!1}function ne(U,fe){U.side===On?z(n.CULL_FACE):C(n.CULL_FACE);let _e=U.side===Xt;fe&&(_e=!_e),me(_e),U.blending===_r&&U.transparent===!1?re(ri):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Te=U.stencilWrite;a.setTest(Te),Te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?C(n.SAMPLE_ALPHA_TO_COVERAGE):z(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function K(U){U!==ad?(C(n.CULL_FACE),U!==A&&(U===Kl?n.cullFace(n.BACK):U===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):z(n.CULL_FACE),A=U}function Xe(U){U!==j&&(Y&&n.lineWidth(U),j=U)}function ue(U,fe,_e){U?(C(n.POLYGON_OFFSET_FILL),($!==fe||Q!==_e)&&(n.polygonOffset(fe,_e),$=fe,Q=_e)):z(n.POLYGON_OFFSET_FILL)}function Re(U){U?C(n.SCISSOR_TEST):z(n.SCISSOR_TEST)}function Ke(U){U===void 0&&(U=n.TEXTURE0+k-1),de!==U&&(n.activeTexture(U),de=U)}function Le(U,fe,_e){_e===void 0&&(de===null?_e=n.TEXTURE0+k-1:_e=de);let Te=ve[_e];Te===void 0&&(Te={type:void 0,texture:void 0},ve[_e]=Te),(Te.type!==U||Te.texture!==fe)&&(de!==_e&&(n.activeTexture(_e),de=_e),n.bindTexture(U,fe||D[U]),Te.type=U,Te.texture=fe)}function M(){const U=ve[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){qe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),qe.copy(U))}function Oe(U){je.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function De(U,fe){let _e=l.get(fe);_e===void 0&&(_e=new WeakMap,l.set(fe,_e));let Te=_e.get(U);Te===void 0&&(Te=n.getUniformBlockIndex(fe,U.name),_e.set(U,Te))}function xe(U,fe){const Te=l.get(fe).get(U);c.get(fe)!==Te&&(n.uniformBlockBinding(fe,Te,U.__bindingPointIndex),c.set(fe,Te))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,ve={},h={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,w=null,T=null,b=null,L=null,R=null,P=new ze(0,0,0),I=0,y=!1,S=null,A=null,j=null,$=null,Q=null,qe.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:C,disable:z,bindFramebuffer:H,drawBuffers:G,useProgram:q,setBlending:re,setMaterial:ne,setFlipSided:me,setCullFace:K,setLineWidth:Xe,setPolygonOffset:ue,setScissorTest:Re,activeTexture:Ke,bindTexture:Le,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:Pe,texImage3D:he,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:Ae,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ee,scissor:Se,viewport:Oe,reset:Ve}}function f0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):Zr("canvas")}function v(M,g,O){let te=1;const oe=Le(M);if((oe.width>O||oe.height>O)&&(te=O/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Z=Math.floor(te*oe.width),Ee=Math.floor(te*oe.height);h===void 0&&(h=_(Z,Ee));const pe=g?_(Z,Ee):h;return pe.width=Z,pe.height=Ee,pe.getContext("2d").drawImage(M,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+Ee+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(M,g,O,te,oe=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=g;if(g===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),g===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),g===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),g===n.RGBA){const Ee=oe?Qs:nt.getTransfer(te);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=Ee===st?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(M,g){let O;return M?g===null||g===Ii||g===$r?O=n.DEPTH24_STENCIL8:g===kn?O=n.DEPTH32F_STENCIL8:g===Yr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ii||g===$r?O=n.DEPTH_COMPONENT24:g===kn?O=n.DEPTH_COMPONENT32F:g===Yr&&(O=n.DEPTH_COMPONENT16),O}function L(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==tn&&M.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){const g=M.target;g.removeEventListener("dispose",R),I(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),S(g)}function I(M){const g=i.get(M);if(g.__webglInit===void 0)return;const O=M.source,te=d.get(O);if(te){const oe=te[g.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&y(M),Object.keys(te).length===0&&d.delete(O)}i.remove(M)}function y(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const O=M.source,te=d.get(O);delete te[g.__cacheKey],o.memory.textures--}function S(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(g.__webglFramebuffer[te]))for(let oe=0;oe<g.__webglFramebuffer[te].length;oe++)n.deleteFramebuffer(g.__webglFramebuffer[te][oe]);else n.deleteFramebuffer(g.__webglFramebuffer[te]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[te])}else{if(Array.isArray(g.__webglFramebuffer))for(let te=0;te<g.__webglFramebuffer.length;te++)n.deleteFramebuffer(g.__webglFramebuffer[te]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let te=0;te<g.__webglColorRenderbuffer.length;te++)g.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[te]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=M.textures;for(let te=0,oe=O.length;te<oe;te++){const Z=i.get(O[te]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[te])}i.remove(M)}let A=0;function j(){A=0}function $(){const M=A;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),A+=1,M}function Q(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function k(M,g){const O=i.get(M);if(M.isVideoTexture&&Re(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){const te=M.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(O,M,g);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function Y(M,g){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){D(O,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function ie(M,g){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){D(O,M,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function V(M,g){const O=i.get(M);if(M.version>0&&O.__version!==M.version){C(O,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const de={[yi]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[qr]:n.MIRRORED_REPEAT},ve={[tn]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[us]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},ae={[Hd]:n.NEVER,[Yd]:n.ALWAYS,[Vd]:n.LESS,[th]:n.LEQUAL,[Gd]:n.EQUAL,[qd]:n.GEQUAL,[Wd]:n.GREATER,[Xd]:n.NOTEQUAL};function Ie(M,g){if(g.type===kn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===vo||g.magFilter===us||g.magFilter===zn||g.minFilter===Gt||g.minFilter===vo||g.minFilter===us||g.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,de[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,de[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,de[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ve[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===tn||g.minFilter!==us&&g.minFilter!==zn||g.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qe(M,g){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",R));const te=g.source;let oe=d.get(te);oe===void 0&&(oe={},d.set(te,oe));const Z=Q(g);if(Z!==M.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),oe[Z].usedTimes++;const Ee=oe[M.__cacheKey];Ee!==void 0&&(oe[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(g)),M.__cacheKey=Z,M.__webglTexture=oe[Z].texture}return O}function je(M,g,O){return Math.floor(Math.floor(M/O)/g)}function J(M,g,O,te){const Z=M.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,te,g.data);else{Z.sort((he,Se)=>he.start-Se.start);let Ee=0;for(let he=1;he<Z.length;he++){const Se=Z[Ee],Oe=Z[he],De=Se.start+Se.count,xe=je(Oe.start,g.width,4),Ve=je(Se.start,g.width,4);Oe.start<=De+1&&xe===Ve&&je(Oe.start+Oe.count-1,g.width,4)===xe?Se.count=Math.max(Se.count,Oe.start+Oe.count-Se.start):(++Ee,Z[Ee]=Oe)}Z.length=Ee+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let he=0,Se=Z.length;he<Se;he++){const Oe=Z[he],De=Math.floor(Oe.start/4),xe=Math.ceil(Oe.count/4),Ve=De%g.width,U=Math.floor(De/g.width),fe=xe,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ve,U,fe,_e,O,te,g.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function D(M,g,O){let te=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(te=n.TEXTURE_3D);const oe=qe(M,g),Z=g.source;t.bindTexture(te,M.__webglTexture,n.TEXTURE0+O);const Ee=i.get(Z);if(Z.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+O);const pe=nt.getPrimaries(nt.workingColorSpace),Ae=g.colorSpace===ei?null:nt.getPrimaries(g.colorSpace),Pe=g.colorSpace===ei||pe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let he=v(g.image,!1,r.maxTextureSize);he=Ke(g,he);const Se=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let De=T(g.internalFormat,Se,Oe,g.colorSpace,g.isVideoTexture);Ie(te,g);let xe;const Ve=g.mipmaps,U=g.isVideoTexture!==!0,fe=Ee.__version===void 0||oe===!0,_e=Z.dataReady,Te=L(g,he);if(g.isDepthTexture)De=b(g.format===Kr,g.type),fe&&(U?t.texStorage2D(n.TEXTURE_2D,1,De,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,De,he.width,he.height,0,Se,Oe,null));else if(g.isDataTexture)if(Ve.length>0){U&&fe&&t.texStorage2D(n.TEXTURE_2D,Te,De,Ve[0].width,Ve[0].height);for(let le=0,se=Ve.length;le<se;le++)xe=Ve[le],U?_e&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,xe.width,xe.height,Se,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,le,De,xe.width,xe.height,0,Se,Oe,xe.data);g.generateMipmaps=!1}else U?(fe&&t.texStorage2D(n.TEXTURE_2D,Te,De,he.width,he.height),_e&&J(g,he,Se,Oe)):t.texImage2D(n.TEXTURE_2D,0,De,he.width,he.height,0,Se,Oe,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,Ve[0].width,Ve[0].height,he.depth);for(let le=0,se=Ve.length;le<se;le++)if(xe=Ve[le],g.format!==gn)if(Se!==null)if(U){if(_e)if(g.layerUpdates.size>0){const Ce=Pc(xe.width,xe.height,g.format,g.type);for(const ke of g.layerUpdates){const lt=xe.data.subarray(ke*Ce/xe.data.BYTES_PER_ELEMENT,(ke+1)*Ce/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ke,xe.width,xe.height,1,Se,lt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,he.depth,Se,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,De,xe.width,xe.height,he.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,he.depth,Se,Oe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,De,xe.width,xe.height,he.depth,0,Se,Oe,xe.data)}else{U&&fe&&t.texStorage2D(n.TEXTURE_2D,Te,De,Ve[0].width,Ve[0].height);for(let le=0,se=Ve.length;le<se;le++)xe=Ve[le],g.format!==gn?Se!==null?U?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,le,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?_e&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,xe.width,xe.height,Se,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,le,De,xe.width,xe.height,0,Se,Oe,xe.data)}else if(g.isDataArrayTexture)if(U){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,he.width,he.height,he.depth),_e)if(g.layerUpdates.size>0){const le=Pc(he.width,he.height,g.format,g.type);for(const se of g.layerUpdates){const Ce=he.data.subarray(se*le/he.data.BYTES_PER_ELEMENT,(se+1)*le/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Se,Oe,Ce)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,Oe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,he.width,he.height,he.depth,0,Se,Oe,he.data);else if(g.isData3DTexture)U?(fe&&t.texStorage3D(n.TEXTURE_3D,Te,De,he.width,he.height,he.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,Oe,he.data)):t.texImage3D(n.TEXTURE_3D,0,De,he.width,he.height,he.depth,0,Se,Oe,he.data);else if(g.isFramebufferTexture){if(fe)if(U)t.texStorage2D(n.TEXTURE_2D,Te,De,he.width,he.height);else{let le=he.width,se=he.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,De,le,se,0,Se,Oe,null),le>>=1,se>>=1}}else if(Ve.length>0){if(U&&fe){const le=Le(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Te,De,le.width,le.height)}for(let le=0,se=Ve.length;le<se;le++)xe=Ve[le],U?_e&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se,Oe,xe):t.texImage2D(n.TEXTURE_2D,le,De,Se,Oe,xe);g.generateMipmaps=!1}else if(U){if(fe){const le=Le(he);t.texStorage2D(n.TEXTURE_2D,Te,De,le.width,le.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Oe,he)}else t.texImage2D(n.TEXTURE_2D,0,De,Se,Oe,he);m(g)&&f(te),Ee.__version=Z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function C(M,g,O){if(g.image.length!==6)return;const te=qe(M,g),oe=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const Z=i.get(oe);if(oe.version!==Z.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const Ee=nt.getPrimaries(nt.workingColorSpace),pe=g.colorSpace===ei?null:nt.getPrimaries(g.colorSpace),Ae=g.colorSpace===ei||Ee===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!Pe&&!he?Se[se]=v(g.image[se],!0,r.maxCubemapSize):Se[se]=he?g.image[se].image:g.image[se],Se[se]=Ke(g,Se[se]);const Oe=Se[0],De=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),Ve=T(g.internalFormat,De,xe,g.colorSpace),U=g.isVideoTexture!==!0,fe=Z.__version===void 0||te===!0,_e=oe.dataReady;let Te=L(g,Oe);Ie(n.TEXTURE_CUBE_MAP,g);let le;if(Pe){U&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ve,Oe.width,Oe.height);for(let se=0;se<6;se++){le=Se[se].mipmaps;for(let Ce=0;Ce<le.length;Ce++){const ke=le[Ce];g.format!==gn?De!==null?U?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,ke.width,ke.height,De,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,Ve,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,ke.width,ke.height,De,xe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,Ve,ke.width,ke.height,0,De,xe,ke.data)}}}else{if(le=g.mipmaps,U&&fe){le.length>0&&Te++;const se=Le(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(he){U?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,De,xe,Se[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,Se[se].width,Se[se].height,0,De,xe,Se[se].data);for(let Ce=0;Ce<le.length;Ce++){const lt=le[Ce].image[se].image;U?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,lt.width,lt.height,De,xe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,Ve,lt.width,lt.height,0,De,xe,lt.data)}}else{U?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,xe,Se[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,De,xe,Se[se]);for(let Ce=0;Ce<le.length;Ce++){const ke=le[Ce];U?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,De,xe,ke.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,Ve,De,xe,ke.image[se])}}}m(g)&&f(n.TEXTURE_CUBE_MAP),Z.__version=oe.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function z(M,g,O,te,oe,Z){const Ee=s.convert(O.format,O.colorSpace),pe=s.convert(O.type),Ae=T(O.internalFormat,Ee,pe,O.colorSpace),Pe=i.get(g),he=i.get(O);if(he.__renderTarget=g,!Pe.__hasExternalTextures){const Se=Math.max(1,g.width>>Z),Oe=Math.max(1,g.height>>Z);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Z,Ae,Se,Oe,g.depth,0,Ee,pe,null):t.texImage2D(oe,Z,Ae,Se,Oe,0,Ee,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ue(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,oe,he.__webglTexture,0,Xe(g)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,oe,he.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(M,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){const te=g.depthTexture,oe=te&&te.isDepthTexture?te.type:null,Z=b(g.stencilBuffer,oe),Ee=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Xe(g);ue(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Z,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,M)}else{const te=g.textures;for(let oe=0;oe<te.length;oe++){const Z=te[oe],Ee=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),Ae=T(Z.internalFormat,Ee,pe,Z.colorSpace),Pe=Xe(g);O&&ue(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ae,g.width,g.height):ue(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(g.depthTexture);te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const oe=te.__webglTexture,Z=Xe(g);if(g.depthTexture.format===jr)ue(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(g.depthTexture.format===Kr)ue(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function q(M){const g=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const te=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),te){const oe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),g.__depthDisposeCallback=oe}g.__boundDepthTexture=te}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const te=M.texture.mipmaps;te&&te.length>0?G(g.__webglFramebuffer[0],M):G(g.__webglFramebuffer,M)}else if(O){g.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[te]),g.__webglDepthbuffer[te]===void 0)g.__webglDepthbuffer[te]=n.createRenderbuffer(),H(g.__webglDepthbuffer[te],M,!1);else{const oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}else{const te=M.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),H(g.__webglDepthbuffer,M,!1);else{const oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(M,g,O){const te=i.get(M);g!==void 0&&z(te.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&q(M)}function E(M){const g=M.texture,O=i.get(M),te=i.get(g);M.addEventListener("dispose",P);const oe=M.textures,Z=M.isWebGLCubeRenderTarget===!0,Ee=oe.length>1;if(Ee||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=g.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Ae=0;Ae<g.mipmaps.length;Ae++)O.__webglFramebuffer[pe][Ae]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let pe=0,Ae=oe.length;pe<Ae;pe++){const Pe=i.get(oe[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&ue(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const Ae=oe[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const Pe=s.convert(Ae.format,Ae.colorSpace),he=s.convert(Ae.type),Se=T(Ae.internalFormat,Pe,he,Ae.colorSpace,M.isXRRenderTarget===!0),Oe=Xe(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),H(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)z(O.__webglFramebuffer[pe][Ae],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae);else z(O.__webglFramebuffer[pe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let pe=0,Ae=oe.length;pe<Ae;pe++){const Pe=oe[pe],he=i.get(Pe);let Se=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,he.__webglTexture),Ie(Se,Pe),z(O.__webglFramebuffer,M,Pe,n.COLOR_ATTACHMENT0+pe,Se,0),m(Pe)&&f(Se)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),Ie(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)z(O.__webglFramebuffer[Ae],M,g,n.COLOR_ATTACHMENT0,pe,Ae);else z(O.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&f(pe),t.unbindTexture()}M.depthBuffer&&q(M)}function re(M){const g=M.textures;for(let O=0,te=g.length;O<te;O++){const oe=g[O];if(m(oe)){const Z=w(M),Ee=i.get(oe).__webglTexture;t.bindTexture(Z,Ee),f(Z),t.unbindTexture()}}}const ne=[],me=[];function K(M){if(M.samples>0){if(ue(M)===!1){const g=M.textures,O=M.width,te=M.height;let oe=n.COLOR_BUFFER_BIT;const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(M),pe=g.length>1;if(pe)for(let Pe=0;Pe<g.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ae=M.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Pe=0;Pe<g.length;Pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const he=i.get(g[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,O,te,0,0,O,te,oe,n.NEAREST),c===!0&&(ne.length=0,me.length=0,ne.push(n.COLOR_ATTACHMENT0+Pe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ne.push(Z),me.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<g.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const he=i.get(g[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Xe(M){return Math.min(r.maxSamples,M.samples)}function ue(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Re(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Ke(M,g){const O=M.colorSpace,te=M.format,oe=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==br&&O!==ei&&(nt.getTransfer(O)===st?(te!==gn||oe!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function Le(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=j,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=ee,this.setupRenderTarget=E,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=z,this.useMultisampledRTT=ue}function d0(n,e){function t(i,r=ei){let s;const o=nt.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yu)return n.BYTE;if(i===$u)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===Ku)return n.ALPHA;if(i===Zu)return n.RGB;if(i===gn)return n.RGBA;if(i===jr)return n.DEPTH_COMPONENT;if(i===Kr)return n.DEPTH_STENCIL;if(i===Ju)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===Qu)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===Os||i===Bs||i===zs||i===ks)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===Ea||i===ya||i===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===Aa||i===wa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ta||i===Aa)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ca||i===Ra||i===Pa||i===Da||i===La||i===Ua||i===Ia||i===Na||i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ha)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ca)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ra)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Da)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===La)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ua)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ia)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Na)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ba)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hs||i===Va||i===Ga)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hs)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===Wa||i===Xa||i===qa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Eh extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g0 extends Hi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const v=new _0,m={},f=t.getContextAttributes();let w=null,T=null;const b=[],L=[],R=new He;let P=null;const I=new Jt;I.viewport=new _t;const y=new Jt;y.viewport=new _t;const S=[I,y],A=new Op;let j=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let D=b[J];return D===void 0&&(D=new ko,b[J]=D),D.getTargetRaySpace()},this.getControllerGrip=function(J){let D=b[J];return D===void 0&&(D=new ko,b[J]=D),D.getGripSpace()},this.getHand=function(J){let D=b[J];return D===void 0&&(D=new ko,b[J]=D),D.getHandSpace()};function Q(J){const D=L.indexOf(J.inputSource);if(D===-1)return;const C=b[D];C!==void 0&&(C.update(J.inputSource,J.frame,l||o),C.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Y);for(let J=0;J<b.length;J++){const D=L[J];D!==null&&(L[J]=null,b[J].disconnect(D))}j=null,$=null,v.reset();for(const J in m)delete m[J];e.setRenderTarget(w),p=null,d=null,h=null,r=null,T=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(r,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let C=null,z=null,H=null;f.depth&&(H=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,C=f.stencil?Kr:jr,z=f.stencil?$r:Ii);const G={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:s};d=h.createProjectionLayer(G),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Fi(d.textureWidth,d.textureHeight,{format:gn,type:wn,depthTexture:new dh(d.textureWidth,d.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const C={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,C),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Fi(p.framebufferWidth,p.framebufferHeight,{format:gn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(J){for(let D=0;D<J.removed.length;D++){const C=J.removed[D],z=L.indexOf(C);z>=0&&(L[z]=null,b[z].disconnect(C))}for(let D=0;D<J.added.length;D++){const C=J.added[D];let z=L.indexOf(C);if(z===-1){for(let G=0;G<b.length;G++)if(G>=L.length){L.push(C),z=G;break}else if(L[G]===null){L[G]=C,z=G;break}if(z===-1)break}const H=b[z];H&&H.connect(C)}}const ie=new B,V=new B;function de(J,D,C){ie.setFromMatrixPosition(D.matrixWorld),V.setFromMatrixPosition(C.matrixWorld);const z=ie.distanceTo(V),H=D.projectionMatrix.elements,G=C.projectionMatrix.elements,q=H[14]/(H[10]-1),ee=H[14]/(H[10]+1),E=(H[9]+1)/H[5],re=(H[9]-1)/H[5],ne=(H[8]-1)/H[0],me=(G[8]+1)/G[0],K=q*ne,Xe=q*me,ue=z/(-ne+me),Re=ue*-ne;if(D.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Re),J.translateZ(ue),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),H[10]===-1)J.projectionMatrix.copy(D.projectionMatrix),J.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const Ke=q+ue,Le=ee+ue,M=K-Re,g=Xe+(z-Re),O=E*ee/Le*Ke,te=re*ee/Le*Ke;J.projectionMatrix.makePerspective(M,g,O,te,Ke,Le),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ve(J,D){D===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(D.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let D=J.near,C=J.far;v.texture!==null&&(v.depthNear>0&&(D=v.depthNear),v.depthFar>0&&(C=v.depthFar)),A.near=y.near=I.near=D,A.far=y.far=I.far=C,(j!==A.near||$!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,$=A.far),A.layers.mask=J.layers.mask|6,I.layers.mask=A.layers.mask&3,y.layers.mask=A.layers.mask&5;const z=J.parent,H=A.cameras;ve(A,z);for(let G=0;G<H.length;G++)ve(H[G],z);H.length===2?de(A,I,y):A.projectionMatrix.copy(I.projectionMatrix),ae(J,A,z)};function ae(J,D,C){C===null?J.matrix.copy(D.matrixWorld):(J.matrix.copy(C.matrixWorld),J.matrix.invert(),J.matrix.multiply(D.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(D.projectionMatrix),J.projectionMatrixInverse.copy(D.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ya*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(A)},this.getCameraTexture=function(J){return m[J]};let Ie=null;function qe(J,D){if(u=D.getViewerPose(l||o),_=D,u!==null){const C=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let z=!1;C.length!==A.cameras.length&&(A.cameras.length=0,z=!0);for(let ee=0;ee<C.length;ee++){const E=C[ee];let re=null;if(p!==null)re=p.getViewport(E);else{const me=h.getViewSubImage(d,E);re=me.viewport,ee===0&&(e.setRenderTargetTextures(T,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(T))}let ne=S[ee];ne===void 0&&(ne=new Jt,ne.layers.enable(ee),ne.viewport=new _t,S[ee]=ne),ne.matrix.fromArray(E.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(E.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(re.x,re.y,re.width,re.height),ee===0&&(A.matrix.copy(ne.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),z===!0&&A.cameras.push(ne)}const H=r.enabledFeatures;if(H&&H.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const ee=h.getDepthInformation(C[0]);ee&&ee.isValid&&ee.texture&&v.init(ee,r.renderState)}if(H&&H.includes("camera-access")&&(e.state.unbindTexture(),h))for(let ee=0;ee<C.length;ee++){const E=C[ee].camera;if(E){let re=m[E];re||(re=new Eh,m[E]=re);const ne=h.getCameraImage(E);re.sourceTexture=ne}}}for(let C=0;C<b.length;C++){const z=L[C],H=b[C];z!==null&&H!==void 0&&H.update(z,D,l||o)}Ie&&Ie(J,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),_=null}const je=new gh;je.setAnimationLoop(qe),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}}const xi=new vn,v0=new pt;function x0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ch(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,T,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),T=w.envMap,b=w.envMapRotation;T&&(m.envMap.value=T,xi.copy(b),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(xi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function M0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,T){const b=T.program;i.uniformBlockBinding(w,b)}function l(w,T){let b=r[w.id];b===void 0&&(_(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(w,L);const R=e.render.frame;s[w.id]!==R&&(d(w),s[w.id]=R)}function u(w){const T=h();w.__bindingPointIndex=T;const b=n.createBuffer(),L=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=r[w.id],b=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,P=b.length;R<P;R++){const I=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,S=I.length;y<S;y++){const A=I[y];if(p(A,R,y,L)===!0){const j=A.__offset,$=Array.isArray(A.value)?A.value:[A.value];let Q=0;for(let k=0;k<$.length;k++){const Y=$[k],ie=v(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,j+Q,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,Q),Q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,T,b,L){const R=w.value,P=T+"_"+b;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{const I=L[P];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[P]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(w){const T=w.uniforms;let b=0;const L=16;for(let P=0,I=T.length;P<I;P++){const y=Array.isArray(T[P])?T[P]:[T[P]];for(let S=0,A=y.length;S<A;S++){const j=y[S],$=Array.isArray(j.value)?j.value:[j.value];for(let Q=0,k=$.length;Q<k;Q++){const Y=$[Q],ie=v(Y),V=b%L,de=V%ie.boundary,ve=V+de;b+=de,ve!==0&&L-ve<ie.storage&&(b+=L-ve),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=ie.storage}}}const R=b%L;return R>0&&(b+=L-R),w.__size=b,w.__cache={},this}function v(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class S0{constructor(e={}){const{canvas:t=Kd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1;this._outputColorSpace=Vt;let R=0,P=0,I=null,y=-1,S=null;const A=new _t,j=new _t;let $=null;const Q=new ze(0);let k=0,Y=t.width,ie=t.height,V=1,de=null,ve=null;const ae=new _t(0,0,Y,ie),Ie=new _t(0,0,Y,ie);let qe=!1;const je=new Al;let J=!1,D=!1;const C=new pt,z=new B,H=new _t,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function ee(){return I===null?V:1}let E=i;function re(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",le,!1),E===null){const N="webgl2";if(E=re(N,x),E===null)throw re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ne,me,K,Xe,ue,Re,Ke,Le,M,g,O,te,oe,Z,Ee,pe,Ae,Pe,he,Se,Oe,De,xe,Ve;function U(){ne=new Dg(E),ne.init(),De=new d0(E,ne),me=new bg(E,ne,e,De),K=new h0(E,ne),me.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),Xe=new Ig(E),ue=new Jv,Re=new f0(E,ne,K,ue,me,De,Xe),Ke=new Ag(b),Le=new Pg(b),M=new kp(E),xe=new Eg(E,M),g=new Lg(E,M,Xe,xe),O=new Fg(E,g,M,Xe),he=new Ng(E,me,Re),pe=new Tg(ue),te=new Zv(b,Ke,Le,ne,me,xe,pe),oe=new x0(b,ue),Z=new e0,Ee=new o0(ne),Pe=new Sg(b,Ke,Le,K,O,p,c),Ae=new c0(b,O,me),Ve=new M0(E,Xe,me,K),Se=new yg(E,ne,Xe),Oe=new Ug(E,ne,Xe),Xe.programs=te.programs,b.capabilities=me,b.extensions=ne,b.properties=ue,b.renderLists=Z,b.shadowMap=Ae,b.state=K,b.info=Xe}U();const fe=new g0(b,E);this.xr=fe,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const x=ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(Y,ie,!1))},this.getSize=function(x){return x.set(Y,ie)},this.setSize=function(x,N,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,ie=N,t.width=Math.floor(x*V),t.height=Math.floor(N*V),W===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(Y*V,ie*V).floor()},this.setDrawingBufferSize=function(x,N,W){Y=x,ie=N,V=W,t.width=Math.floor(x*W),t.height=Math.floor(N*W),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(ae)},this.setViewport=function(x,N,W,X){x.isVector4?ae.set(x.x,x.y,x.z,x.w):ae.set(x,N,W,X),K.viewport(A.copy(ae).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Ie)},this.setScissor=function(x,N,W,X){x.isVector4?Ie.set(x.x,x.y,x.z,x.w):Ie.set(x,N,W,X),K.scissor(j.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(x){K.setScissorTest(qe=x)},this.setOpaqueSort=function(x){de=x},this.setTransparentSort=function(x){ve=x},this.getClearColor=function(x){return x.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,W=!0){let X=0;if(x){let F=!1;if(I!==null){const ce=I.texture.format;F=ce===El||ce===Sl||ce===Ml}if(F){const ce=I.texture.type,Me=ce===wn||ce===Ii||ce===Yr||ce===$r||ce===vl||ce===xl,we=Pe.getClearColor(),ye=Pe.getClearAlpha(),Fe=we.r,Be=we.g,Ue=we.b;Me?(_[0]=Fe,_[1]=Be,_[2]=Ue,_[3]=ye,E.clearBufferuiv(E.COLOR,0,_)):(v[0]=Fe,v[1]=Be,v[2]=Ue,v[3]=ye,E.clearBufferiv(E.COLOR,0,v))}else X|=E.COLOR_BUFFER_BIT}N&&(X|=E.DEPTH_BUFFER_BIT),W&&(X|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Pe.dispose(),Z.dispose(),Ee.dispose(),ue.dispose(),Ke.dispose(),Le.dispose(),O.dispose(),xe.dispose(),Ve.dispose(),te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Mn),fe.removeEventListener("sessionend",Ll),fi.stop()};function _e(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=Xe.autoReset,N=Ae.enabled,W=Ae.autoUpdate,X=Ae.needsUpdate,F=Ae.type;U(),Xe.autoReset=x,Ae.enabled=N,Ae.autoUpdate=W,Ae.needsUpdate=X,Ae.type=F}function le(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){const N=x.target;N.removeEventListener("dispose",se),Ce(N)}function Ce(x){ke(x),ue.remove(x)}function ke(x){const N=ue.get(x).programs;N!==void 0&&(N.forEach(function(W){te.releaseProgram(W)}),x.isShaderMaterial&&te.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,W,X,F,ce){N===null&&(N=G);const Me=F.isMesh&&F.matrixWorld.determinant()<0,we=Lh(x,N,W,X,F);K.setMaterial(X,Me);let ye=W.index,Fe=1;if(X.wireframe===!0){if(ye=g.getWireframeAttribute(W),ye===void 0)return;Fe=2}const Be=W.drawRange,Ue=W.attributes.position;let $e=Be.start*Fe,rt=(Be.start+Be.count)*Fe;ce!==null&&($e=Math.max($e,ce.start*Fe),rt=Math.min(rt,(ce.start+ce.count)*Fe)),ye!==null?($e=Math.max($e,0),rt=Math.min(rt,ye.count)):Ue!=null&&($e=Math.max($e,0),rt=Math.min(rt,Ue.count));const mt=rt-$e;if(mt<0||mt===1/0)return;xe.setup(F,X,we,W,ye);let ct,at=Se;if(ye!==null&&(ct=M.get(ye),at=Oe,at.setIndex(ct)),F.isMesh)X.wireframe===!0?(K.setLineWidth(X.wireframeLinewidth*ee()),at.setMode(E.LINES)):at.setMode(E.TRIANGLES);else if(F.isLine){let Ne=X.linewidth;Ne===void 0&&(Ne=1),K.setLineWidth(Ne*ee()),F.isLineSegments?at.setMode(E.LINES):F.isLineLoop?at.setMode(E.LINE_LOOP):at.setMode(E.LINE_STRIP)}else F.isPoints?at.setMode(E.POINTS):F.isSprite&&at.setMode(E.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,ht=F._multiDrawCounts,tt=F._multiDrawCount,qt=ye?M.get(ye).bytesPerElement:1,Wi=ue.get(X).currentProgram.getUniforms();for(let Yt=0;Yt<tt;Yt++)Wi.setValue(E,"_gl_DrawID",Yt),at.render(Ne[Yt]/qt,ht[Yt])}else if(F.isInstancedMesh)at.renderInstances($e,mt,F.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ht=Math.min(W.instanceCount,Ne);at.renderInstances($e,mt,ht)}else at.render($e,mt)};function lt(x,N,W){x.transparent===!0&&x.side===On&&x.forceSinglePass===!1?(x.side=Xt,x.needsUpdate=!0,as(x,N,W),x.side=ci,x.needsUpdate=!0,as(x,N,W),x.side=On):as(x,N,W)}this.compile=function(x,N,W=null){W===null&&(W=x),f=Ee.get(W),f.init(N),T.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),x!==W&&x.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const X=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){const we=ce[Me];lt(we,W,F),X.add(we)}else lt(ce,W,F),X.add(ce)}),f=T.pop(),X},this.compileAsync=function(x,N,W=null){const X=this.compile(x,N,W);return new Promise(F=>{function ce(){if(X.forEach(function(Me){ue.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){F(x);return}setTimeout(ce,10)}ne.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let it=null;function Cn(x){it&&it(x)}function Mn(){fi.stop()}function Ll(){fi.start()}const fi=new gh;fi.setAnimationLoop(Cn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(x){it=x,fe.setAnimationLoop(x),x===null?fi.stop():fi.start()},fe.addEventListener("sessionstart",Mn),fe.addEventListener("sessionend",Ll),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,N,I),f=Ee.get(x,T.length),f.init(N),T.push(f),C.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),je.setFromProjectionMatrix(C,Tn,N.reversedDepth),D=this.localClippingEnabled,J=pe.init(this.clippingPlanes,D),m=Z.get(x,w.length),m.init(),w.push(m),fe.enabled===!0&&fe.isPresenting===!0){const ce=b.xr.getDepthSensingMesh();ce!==null&&po(ce,N,-1/0,b.sortObjects)}po(x,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(de,ve),q=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,q&&Pe.addToRenderList(m,x),this.info.render.frame++,J===!0&&pe.beginShadows();const W=f.state.shadowsArray;Ae.render(W,x,N),J===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ce=N.cameras;if(F.length>0)for(let Me=0,we=ce.length;Me<we;Me++){const ye=ce[Me];Il(X,F,x,ye)}q&&Pe.render(x);for(let Me=0,we=ce.length;Me<we;Me++){const ye=ce[Me];Ul(m,x,ye,ye.viewport)}}else F.length>0&&Il(X,F,x,N),q&&Pe.render(x),Ul(m,x,N);I!==null&&P===0&&(Re.updateMultisampleRenderTarget(I),Re.updateRenderTargetMipmap(I)),x.isScene===!0&&x.onAfterRender(b,x,N),xe.resetDefaultState(),y=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],J===!0&&pe.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function po(x,N,W,X){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||je.intersectsSprite(x)){X&&H.setFromMatrixPosition(x.matrixWorld).applyMatrix4(C);const Me=O.update(x),we=x.material;we.visible&&m.push(x,Me,we,W,H.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||je.intersectsObject(x))){const Me=O.update(x),we=x.material;if(X&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),H.copy(x.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),H.copy(Me.boundingSphere.center)),H.applyMatrix4(x.matrixWorld).applyMatrix4(C)),Array.isArray(we)){const ye=Me.groups;for(let Fe=0,Be=ye.length;Fe<Be;Fe++){const Ue=ye[Fe],$e=we[Ue.materialIndex];$e&&$e.visible&&m.push(x,Me,$e,W,H.z,Ue)}}else we.visible&&m.push(x,Me,we,W,H.z,null)}}const ce=x.children;for(let Me=0,we=ce.length;Me<we;Me++)po(ce[Me],N,W,X)}function Ul(x,N,W,X){const F=x.opaque,ce=x.transmissive,Me=x.transparent;f.setupLightsView(W),J===!0&&pe.setGlobalState(b.clippingPlanes,W),X&&K.viewport(A.copy(X)),F.length>0&&os(F,N,W),ce.length>0&&os(ce,N,W),Me.length>0&&os(Me,N,W),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Il(x,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Fi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ns:wn,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ce=f.state.transmissionRenderTarget[X.id],Me=X.viewport||A;ce.setSize(Me.z*b.transmissionResolutionScale,Me.w*b.transmissionResolutionScale);const we=b.getRenderTarget(),ye=b.getActiveCubeFace(),Fe=b.getActiveMipmapLevel();b.setRenderTarget(ce),b.getClearColor(Q),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),q&&Pe.render(W);const Be=b.toneMapping;b.toneMapping=si;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),J===!0&&pe.setGlobalState(b.clippingPlanes,X),os(x,W,X),Re.updateMultisampleRenderTarget(ce),Re.updateRenderTargetMipmap(ce),ne.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let rt=0,mt=N.length;rt<mt;rt++){const ct=N[rt],at=ct.object,Ne=ct.geometry,ht=ct.material,tt=ct.group;if(ht.side===On&&at.layers.test(X.layers)){const qt=ht.side;ht.side=Xt,ht.needsUpdate=!0,Nl(at,W,X,Ne,ht,tt),ht.side=qt,ht.needsUpdate=!0,$e=!0}}$e===!0&&(Re.updateMultisampleRenderTarget(ce),Re.updateRenderTargetMipmap(ce))}b.setRenderTarget(we,ye,Fe),b.setClearColor(Q,k),Ue!==void 0&&(X.viewport=Ue),b.toneMapping=Be}function os(x,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ce=x.length;F<ce;F++){const Me=x[F],we=Me.object,ye=Me.geometry,Fe=Me.group;let Be=Me.material;Be.allowOverride===!0&&X!==null&&(Be=X),we.layers.test(W.layers)&&Nl(we,N,W,ye,Be,Fe)}}function Nl(x,N,W,X,F,ce){x.onBeforeRender(b,N,W,X,F,ce),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(b,N,W,X,x,ce),F.transparent===!0&&F.side===On&&F.forceSinglePass===!1?(F.side=Xt,F.needsUpdate=!0,b.renderBufferDirect(W,N,X,F,x,ce),F.side=ci,F.needsUpdate=!0,b.renderBufferDirect(W,N,X,F,x,ce),F.side=On):b.renderBufferDirect(W,N,X,F,x,ce),x.onAfterRender(b,N,W,X,F,ce)}function as(x,N,W){N.isScene!==!0&&(N=G);const X=ue.get(x),F=f.state.lights,ce=f.state.shadowsArray,Me=F.state.version,we=te.getParameters(x,F.state,ce,N,W),ye=te.getProgramCacheKey(we);let Fe=X.programs;X.environment=x.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(x.isMeshStandardMaterial?Le:Ke).get(x.envMap||X.environment),X.envMapRotation=X.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Fe===void 0&&(x.addEventListener("dispose",se),Fe=new Map,X.programs=Fe);let Be=Fe.get(ye);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===Me)return Ol(x,we),Be}else we.uniforms=te.getUniforms(x),x.onBeforeCompile(we,b),Be=te.acquireProgram(we,ye),Fe.set(ye,Be),X.uniforms=we.uniforms;const Ue=X.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),Ol(x,we),X.needsLights=Ih(x),X.lightsStateVersion=Me,X.needsLights&&(Ue.ambientLightColor.value=F.state.ambient,Ue.lightProbe.value=F.state.probe,Ue.directionalLights.value=F.state.directional,Ue.directionalLightShadows.value=F.state.directionalShadow,Ue.spotLights.value=F.state.spot,Ue.spotLightShadows.value=F.state.spotShadow,Ue.rectAreaLights.value=F.state.rectArea,Ue.ltc_1.value=F.state.rectAreaLTC1,Ue.ltc_2.value=F.state.rectAreaLTC2,Ue.pointLights.value=F.state.point,Ue.pointLightShadows.value=F.state.pointShadow,Ue.hemisphereLights.value=F.state.hemi,Ue.directionalShadowMap.value=F.state.directionalShadowMap,Ue.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ue.spotShadowMap.value=F.state.spotShadowMap,Ue.spotLightMatrix.value=F.state.spotLightMatrix,Ue.spotLightMap.value=F.state.spotLightMap,Ue.pointShadowMap.value=F.state.pointShadowMap,Ue.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function Fl(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Gs.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Ol(x,N){const W=ue.get(x);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Lh(x,N,W,X,F){N.isScene!==!0&&(N=G),Re.resetTextureUnits();const ce=N.fog,Me=X.isMeshStandardMaterial?N.environment:null,we=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:br,ye=(X.isMeshStandardMaterial?Le:Ke).get(X.envMap||Me),Fe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let mt=si;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(mt=b.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ct!==void 0?ct.length:0,Ne=ue.get(X),ht=f.state.lights;if(J===!0&&(D===!0||x!==S)){const Ut=x===S&&X.id===y;pe.setState(X,x,Ut)}let tt=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ht.state.version||Ne.outputColorSpace!==we||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==ye||X.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==pe.numPlanes||Ne.numIntersection!==pe.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Ue||Ne.morphNormals!==$e||Ne.morphColors!==rt||Ne.toneMapping!==mt||Ne.morphTargetsCount!==at)&&(tt=!0):(tt=!0,Ne.__version=X.version);let qt=Ne.currentProgram;tt===!0&&(qt=as(X,N,F));let Wi=!1,Yt=!1,Cr=!1;const ft=qt.getUniforms(),rn=Ne.uniforms;if(K.useProgram(qt.program)&&(Wi=!0,Yt=!0,Cr=!0),X.id!==y&&(y=X.id,Yt=!0),Wi||S!==x){K.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ft.setValue(E,"projectionMatrix",x.projectionMatrix),ft.setValue(E,"viewMatrix",x.matrixWorldInverse);const zt=ft.map.cameraPosition;zt!==void 0&&zt.setValue(E,z.setFromMatrixPosition(x.matrixWorld)),me.logarithmicDepthBuffer&&ft.setValue(E,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(E,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Yt=!0,Cr=!0)}if(F.isSkinnedMesh){ft.setOptional(E,F,"bindMatrix"),ft.setOptional(E,F,"bindMatrixInverse");const Ut=F.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(E,"boneTexture",Ut.boneTexture,Re))}F.isBatchedMesh&&(ft.setOptional(E,F,"batchingTexture"),ft.setValue(E,"batchingTexture",F._matricesTexture,Re),ft.setOptional(E,F,"batchingIdTexture"),ft.setValue(E,"batchingIdTexture",F._indirectTexture,Re),ft.setOptional(E,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(E,"batchingColorTexture",F._colorsTexture,Re));const sn=W.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&he.update(F,W,qt),(Yt||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,ft.setValue(E,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rn.envMap.value=ye,rn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),Yt&&(ft.setValue(E,"toneMappingExposure",b.toneMappingExposure),Ne.needsLights&&Uh(rn,Cr),ce&&X.fog===!0&&oe.refreshFogUniforms(rn,ce),oe.refreshMaterialUniforms(rn,X,V,ie,f.state.transmissionRenderTarget[x.id]),Gs.upload(E,Fl(Ne),rn,Re)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gs.upload(E,Fl(Ne),rn,Re),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(E,"center",F.center),ft.setValue(E,"modelViewMatrix",F.modelViewMatrix),ft.setValue(E,"normalMatrix",F.normalMatrix),ft.setValue(E,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ut=X.uniformsGroups;for(let zt=0,mo=Ut.length;zt<mo;zt++){const di=Ut[zt];Ve.update(di,qt),Ve.bind(di,qt)}}return qt}function Uh(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Ih(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(x,N,W){const X=ue.get(x);X.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ue.get(x.texture).__webglTexture=N,ue.get(x.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const W=ue.get(x);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const Nh=E.createFramebuffer();this.setRenderTarget=function(x,N=0,W=0){I=x,R=N,P=W;let X=!0,F=null,ce=!1,Me=!1;if(x){const ye=ue.get(x);if(ye.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(E.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)Re.setupRenderTarget(x);else if(ye.__hasExternalTextures)Re.rebindTextures(x,ue.get(x.texture).__webglTexture,ue.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ue=x.depthTexture;if(ye.__boundDepthTexture!==Ue){if(Ue!==null&&ue.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(x)}}const Fe=x.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Be=ue.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?F=Be[N][W]:F=Be[N],ce=!0):x.samples>0&&Re.useMultisampledRTT(x)===!1?F=ue.get(x).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[W]:F=Be,A.copy(x.viewport),j.copy(x.scissor),$=x.scissorTest}else A.copy(ae).multiplyScalar(V).floor(),j.copy(Ie).multiplyScalar(V).floor(),$=qe;if(W!==0&&(F=Nh),K.bindFramebuffer(E.FRAMEBUFFER,F)&&X&&K.drawBuffers(x,F),K.viewport(A),K.scissor(j),K.setScissorTest($),ce){const ye=ue.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,W)}else if(Me){const ye=N;for(let Fe=0;Fe<x.textures.length;Fe++){const Be=ue.get(x.textures[Fe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,W,ye)}}else if(x!==null&&W!==0){const ye=ue.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ye.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(x,N,W,X,F,ce,Me,we=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me]),ye){K.bindFramebuffer(E.FRAMEBUFFER,ye);try{const Fe=x.textures[we],Be=Fe.format,Ue=Fe.type;if(!me.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-X&&W>=0&&W<=x.height-F&&(x.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+we),E.readPixels(N,W,X,F,De.convert(Be),De.convert(Ue),ce))}finally{const Fe=I!==null?ue.get(I).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(x,N,W,X,F,ce,Me,we=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(ye=ye[Me]),ye)if(N>=0&&N<=x.width-X&&W>=0&&W<=x.height-F){K.bindFramebuffer(E.FRAMEBUFFER,ye);const Fe=x.textures[we],Be=Fe.format,Ue=Fe.type;if(!me.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,$e),E.bufferData(E.PIXEL_PACK_BUFFER,ce.byteLength,E.STREAM_READ),x.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+we),E.readPixels(N,W,X,F,De.convert(Be),De.convert(Ue),0);const rt=I!==null?ue.get(I).__webglFramebuffer:null;K.bindFramebuffer(E.FRAMEBUFFER,rt);const mt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Zd(E,mt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,$e),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ce),E.deleteBuffer($e),E.deleteSync(mt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,W=0){const X=Math.pow(2,-W),F=Math.floor(x.image.width*X),ce=Math.floor(x.image.height*X),Me=N!==null?N.x:0,we=N!==null?N.y:0;Re.setTexture2D(x,0),E.copyTexSubImage2D(E.TEXTURE_2D,W,0,0,Me,we,F,ce),K.unbindTexture()};const Fh=E.createFramebuffer(),Oh=E.createFramebuffer();this.copyTextureToTexture=function(x,N,W=null,X=null,F=0,ce=null){ce===null&&(F!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=F,F=0):ce=0);let Me,we,ye,Fe,Be,Ue,$e,rt,mt;const ct=x.isCompressedTexture?x.mipmaps[ce]:x.image;if(W!==null)Me=W.max.x-W.min.x,we=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,Be=W.min.y,Ue=W.isBox3?W.min.z:0;else{const sn=Math.pow(2,-F);Me=Math.floor(ct.width*sn),we=Math.floor(ct.height*sn),x.isDataArrayTexture?ye=ct.depth:x.isData3DTexture?ye=Math.floor(ct.depth*sn):ye=1,Fe=0,Be=0,Ue=0}X!==null?($e=X.x,rt=X.y,mt=X.z):($e=0,rt=0,mt=0);const at=De.convert(N.format),Ne=De.convert(N.type);let ht;N.isData3DTexture?(Re.setTexture3D(N,0),ht=E.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Re.setTexture2DArray(N,0),ht=E.TEXTURE_2D_ARRAY):(Re.setTexture2D(N,0),ht=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,N.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,N.unpackAlignment);const tt=E.getParameter(E.UNPACK_ROW_LENGTH),qt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Wi=E.getParameter(E.UNPACK_SKIP_PIXELS),Yt=E.getParameter(E.UNPACK_SKIP_ROWS),Cr=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ct.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ct.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Fe),E.pixelStorei(E.UNPACK_SKIP_ROWS,Be),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ue);const ft=x.isDataArrayTexture||x.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const sn=ue.get(x),Ut=ue.get(N),zt=ue.get(sn.__renderTarget),mo=ue.get(Ut.__renderTarget);K.bindFramebuffer(E.READ_FRAMEBUFFER,zt.__webglFramebuffer),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let di=0;di<ye;di++)ft&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ue.get(x).__webglTexture,F,Ue+di),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ue.get(N).__webglTexture,ce,mt+di)),E.blitFramebuffer(Fe,Be,Me,we,$e,rt,Me,we,E.DEPTH_BUFFER_BIT,E.NEAREST);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||ue.has(x)){const sn=ue.get(x),Ut=ue.get(N);K.bindFramebuffer(E.READ_FRAMEBUFFER,Fh),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,Oh);for(let zt=0;zt<ye;zt++)ft?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,sn.__webglTexture,F,Ue+zt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,sn.__webglTexture,F),rn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ut.__webglTexture,ce,mt+zt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ut.__webglTexture,ce),F!==0?E.blitFramebuffer(Fe,Be,Me,we,$e,rt,Me,we,E.COLOR_BUFFER_BIT,E.NEAREST):rn?E.copyTexSubImage3D(ht,ce,$e,rt,mt+zt,Fe,Be,Me,we):E.copyTexSubImage2D(ht,ce,$e,rt,Fe,Be,Me,we);K.bindFramebuffer(E.READ_FRAMEBUFFER,null),K.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else rn?x.isDataTexture||x.isData3DTexture?E.texSubImage3D(ht,ce,$e,rt,mt,Me,we,ye,at,Ne,ct.data):N.isCompressedArrayTexture?E.compressedTexSubImage3D(ht,ce,$e,rt,mt,Me,we,ye,at,ct.data):E.texSubImage3D(ht,ce,$e,rt,mt,Me,we,ye,at,Ne,ct):x.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ce,$e,rt,Me,we,at,Ne,ct.data):x.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ce,$e,rt,ct.width,ct.height,at,ct.data):E.texSubImage2D(E.TEXTURE_2D,ce,$e,rt,Me,we,at,Ne,ct);E.pixelStorei(E.UNPACK_ROW_LENGTH,tt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,qt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Wi),E.pixelStorei(E.UNPACK_SKIP_ROWS,Yt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Cr),ce===0&&N.generateMipmaps&&E.generateMipmap(ht),K.unbindTexture()},this.copyTextureToTexture3D=function(x,N,W=null,X=null,F=0){return gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,N,W,X,F)},this.initRenderTarget=function(x){ue.get(x).__webglFramebuffer===void 0&&Re.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Re.setTextureCube(x,0):x.isData3DTexture?Re.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Re.setTexture2DArray(x,0):Re.setTexture2D(x,0),K.unbindTexture()},this.resetState=function(){R=0,P=0,I=null,K.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class E0 extends Oi{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new mh(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){function t(l){const u=new DataView(l),h=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let v=0;v<5;v++)if(i(_,u,v))return!1;return!0}function i(l,u,h){for(let d=0,p=l.length;d<p;d++)if(l[d]!==u.getUint8(h+d))return!1;return!0}function r(l){const u=new DataView(l),h=u.getUint32(80,!0);let d,p,_,v=!1,m,f,w,T,b;for(let A=0;A<70;A++)u.getUint32(A,!1)==1129270351&&u.getUint8(A+4)==82&&u.getUint8(A+5)==61&&(v=!0,m=new Float32Array(h*3*3),f=u.getUint8(A+6)/255,w=u.getUint8(A+7)/255,T=u.getUint8(A+8)/255,b=u.getUint8(A+9)/255);const L=84,R=50,P=new Lt,I=new Float32Array(h*3*3),y=new Float32Array(h*3*3),S=new ze;for(let A=0;A<h;A++){const j=L+A*R,$=u.getFloat32(j,!0),Q=u.getFloat32(j+4,!0),k=u.getFloat32(j+8,!0);if(v){const Y=u.getUint16(j+48,!0);(Y&32768)===0?(d=(Y&31)/31,p=(Y>>5&31)/31,_=(Y>>10&31)/31):(d=f,p=w,_=T)}for(let Y=1;Y<=3;Y++){const ie=j+Y*12,V=A*3*3+(Y-1)*3;I[V]=u.getFloat32(ie,!0),I[V+1]=u.getFloat32(ie+4,!0),I[V+2]=u.getFloat32(ie+8,!0),y[V]=$,y[V+1]=Q,y[V+2]=k,v&&(S.setRGB(d,p,_,Vt),m[V]=S.r,m[V+1]=S.g,m[V+2]=S.b)}}return P.setAttribute("position",new Bt(I,3)),P.setAttribute("normal",new Bt(y,3)),v&&(P.setAttribute("color",new Bt(m,3)),P.hasColors=!0,P.alpha=b),P}function s(l){const u=new Lt,h=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let _=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),f=new RegExp("normal"+v+v+v,"g"),w=[],T=[],b=[],L=new B;let R,P=0,I=0,y=0;for(;(R=h.exec(l))!==null;){I=y;const S=R[0],A=(R=p.exec(S))!==null?R[1]:"";for(b.push(A);(R=d.exec(S))!==null;){let Q=0,k=0;const Y=R[0];for(;(R=f.exec(Y))!==null;)L.x=parseFloat(R[1]),L.y=parseFloat(R[2]),L.z=parseFloat(R[3]),k++;for(;(R=m.exec(Y))!==null;)w.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),T.push(L.x,L.y,L.z),Q++,y++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),Q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const j=I,$=y-I;u.userData.groupNames=b,u.addGroup(j,$,P),P++}return u.setAttribute("position",new xt(w,3)),u.setAttribute("normal",new xt(T,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?r(c):s(o(e))}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var en=Uint8Array,hr=Uint16Array,y0=Int32Array,yh=new en([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bh=new en([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),b0=new en([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Th=function(n,e){for(var t=new hr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new y0(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Ah=Th(yh,2),wh=Ah.b,T0=Ah.r;wh[28]=258,T0[258]=28;var A0=Th(bh,0),w0=A0.b,ja=new hr(32768);for(var ut=0;ut<32768;++ut){var Jn=(ut&43690)>>1|(ut&21845)<<1;Jn=(Jn&52428)>>2|(Jn&13107)<<2,Jn=(Jn&61680)>>4|(Jn&3855)<<4,ja[ut]=((Jn&65280)>>8|(Jn&255)<<8)>>1}var kr=function(n,e,t){for(var i=n.length,r=0,s=new hr(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new hr(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new hr(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)a[ja[h]>>c]=l}else for(a=new hr(i),r=0;r<i;++r)n[r]&&(a[r]=ja[o[n[r]-1]++]>>15-n[r]);return a},ss=new en(288);for(var ut=0;ut<144;++ut)ss[ut]=8;for(var ut=144;ut<256;++ut)ss[ut]=9;for(var ut=256;ut<280;++ut)ss[ut]=7;for(var ut=280;ut<288;++ut)ss[ut]=8;var Ch=new en(32);for(var ut=0;ut<32;++ut)Ch[ut]=5;var C0=kr(ss,9,1),R0=kr(Ch,5,1),Ko=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},pn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Zo=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},P0=function(n){return(n+7)/8|0},Pl=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new en(n.subarray(e,t))},D0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ln=function(n,e,t){var i=new Error(e||D0[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,ln),!t)throw i;return i},L0=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new en(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new en(r*3));var l=function(q){var ee=t.length;if(q>ee){var E=new en(Math.max(ee*2,q));E.set(t),t=E}},u=e.f||0,h=e.p||0,d=e.b||0,p=e.l,_=e.d,v=e.m,m=e.n,f=r*8;do{if(!p){u=pn(n,h,1);var w=pn(n,h+1,3);if(h+=3,w)if(w==1)p=C0,_=R0,v=9,m=5;else if(w==2){var R=pn(n,h,31)+257,P=pn(n,h+10,15)+4,I=R+pn(n,h+5,31)+1;h+=14;for(var y=new en(I),S=new en(19),A=0;A<P;++A)S[b0[A]]=pn(n,h+A*3,7);h+=P*3;for(var j=Ko(S),$=(1<<j)-1,Q=kr(S,j,1),A=0;A<I;){var k=Q[pn(n,h,$)];h+=k&15;var T=k>>4;if(T<16)y[A++]=T;else{var Y=0,ie=0;for(T==16?(ie=3+pn(n,h,3),h+=2,Y=y[A-1]):T==17?(ie=3+pn(n,h,7),h+=3):T==18&&(ie=11+pn(n,h,127),h+=7);ie--;)y[A++]=Y}}var V=y.subarray(0,R),de=y.subarray(R);v=Ko(V),m=Ko(de),p=kr(V,v,1),_=kr(de,m,1)}else ln(1);else{var T=P0(h)+4,b=n[T-4]|n[T-3]<<8,L=T+b;if(L>r){c&&ln(0);break}a&&l(d+b),t.set(n.subarray(T,L),d),e.b=d+=b,e.p=h=L*8,e.f=u;continue}if(h>f){c&&ln(0);break}}a&&l(d+131072);for(var ve=(1<<v)-1,ae=(1<<m)-1,Ie=h;;Ie=h){var Y=p[Zo(n,h)&ve],qe=Y>>4;if(h+=Y&15,h>f){c&&ln(0);break}if(Y||ln(2),qe<256)t[d++]=qe;else if(qe==256){Ie=h,p=null;break}else{var je=qe-254;if(qe>264){var A=qe-257,J=yh[A];je=pn(n,h,(1<<J)-1)+wh[A],h+=J}var D=_[Zo(n,h)&ae],C=D>>4;D||ln(3),h+=D&15;var de=w0[C];if(C>3){var J=bh[C];de+=Zo(n,h)&(1<<J)-1,h+=J}if(h>f){c&&ln(0);break}a&&l(d+131072);var z=d+je;if(d<de){var H=s-de,G=Math.min(de,z);for(H+d<0&&ln(3);d<G;++d)t[d]=i[H+d]}for(;d<z;++d)t[d]=t[d-de]}}e.l=p,e.p=Ie,e.b=d,e.f=u,p&&(u=1,e.m=v,e.d=_,e.n=m)}while(!u);return d!=t.length&&o?Pl(t,0,d):t.subarray(0,d)},U0=new en(0),bn=function(n,e){return n[e]|n[e+1]<<8},mn=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Jo=function(n,e){return mn(n,e)+mn(n,e+4)*4294967296};function I0(n,e){return L0(n,{i:2},e&&e.out,e&&e.dictionary)}var Ka=typeof TextDecoder<"u"&&new TextDecoder,N0=0;try{Ka.decode(U0,{stream:!0}),N0=1}catch{}var F0=function(n){for(var e="",t=0;;){var i=n[t++],r=(i>127)+(i>223)+(i>239);if(t+r>n.length)return{s:e,r:Pl(n,t-1)};r?r==3?(i=((i&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|n[t++]&63):e+=String.fromCharCode((i&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(i)}};function O0(n,e){if(e){for(var t="",i=0;i<n.length;i+=16384)t+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return t}else{if(Ka)return Ka.decode(n);var r=F0(n),s=r.s,t=r.r;return t.length&&ln(8),s}}var B0=function(n,e){return e+30+bn(n,e+26)+bn(n,e+28)},z0=function(n,e,t){var i=bn(n,e+28),r=O0(n.subarray(e+46,e+46+i),!(bn(n,e+8)&2048)),s=e+46+i,o=mn(n,e+20),a=t&&o==4294967295?k0(n,s):[o,mn(n,e+24),mn(n,e+42)],c=a[0],l=a[1],u=a[2];return[bn(n,e+10),c,l,r,s+bn(n,e+30)+bn(n,e+32),u]},k0=function(n,e){for(;bn(n,e)!=1;e+=4+bn(n,e+2));return[Jo(n,e+12),Jo(n,e+4),Jo(n,e+20)]};function H0(n,e){for(var t={},i=n.length-22;mn(n,i)!=101010256;--i)(!i||n.length-i>65558)&&ln(13);var r=bn(n,i+8);if(!r)return{};var s=mn(n,i+16),o=s==4294967295||r==65535;if(o){var a=mn(n,i-12);o=mn(n,a)==101075792,o&&(r=mn(n,a+32),s=mn(n,a+48))}for(var c=0;c<r;++c){var l=z0(n,s,o),u=l[0],h=l[1],d=l[2],p=l[3],_=l[4],v=l[5],m=B0(n,v);s=_,u?u==8?t[p]=I0(n.subarray(m,m+h),{out:new en(d)}):ln(14,"unknown compression type "+u):t[p]=Pl(n,m,m+h)}return t}const Qo=Vt;class V0 extends Oi{constructor(e){super(e),this.availableExtensions=[]}load(e,t,i,r){const s=this,o=new mh(s.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this,i=new Lp(this.manager);function r(D){let C=null,z=null,H,G;const q=[],ee=[];let E;const re={},ne={},me={},K=new TextDecoder;try{C=H0(new Uint8Array(D))}catch(Le){if(Le instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let Xe=null;for(z in C)z.match(/\_rels\/.rels$/)?H=z:z.match(/3D\/_rels\/.*\.model\.rels$/)?G=z:z.match(/^3D\/[^\/]*\.model$/)?Xe=z:z.match(/^3D\/.*\/.*\.model$/)?q.push(z):z.match(/^3D\/Textures?\/.*/)&&ee.push(z);if(q.push(Xe),H===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");const ue=C[H],Re=K.decode(ue),Ke=s(Re);if(G){const Le=C[G],M=K.decode(Le);E=s(M)}for(let Le=0;Le<q.length;Le++){const M=q[Le],g=C[M],O=K.decode(g),te=new DOMParser().parseFromString(O,"application/xml");te.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",M);const oe=te.querySelector("model"),Z={};for(let pe=0;pe<oe.attributes.length;pe++){const Ae=oe.attributes[pe];Ae.name.match(/^xmlns:(.+)$/)&&(Z[Ae.value]=RegExp.$1)}const Ee=R(oe);Ee.xml=oe,0<Object.keys(Z).length&&(Ee.extensions=Z),re[M]=Ee}for(let Le=0;Le<ee.length;Le++){const M=ee[Le];me[M]=C[M].buffer}return{rels:Ke,modelRels:E,model:re,printTicket:ne,texture:me}}function s(D){const C=[],H=new DOMParser().parseFromString(D,"application/xml").querySelectorAll("Relationship");for(let G=0;G<H.length;G++){const q=H[G],ee={target:q.getAttribute("Target"),id:q.getAttribute("Id"),type:q.getAttribute("Type")};C.push(ee)}return C}function o(D){const C={};for(let z=0;z<D.length;z++){const H=D[z],G=H.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(G)&&(C[G]=H.textContent)}return C}function a(D){const C={id:D.getAttribute("id"),basematerials:[]},z=D.querySelectorAll("base");for(let H=0;H<z.length;H++){const G=z[H],q=_(G);q.index=H,C.basematerials.push(q)}return C}function c(D){return{id:D.getAttribute("id"),path:D.getAttribute("path"),contenttype:D.getAttribute("contenttype"),tilestyleu:D.getAttribute("tilestyleu"),tilestylev:D.getAttribute("tilestylev"),filter:D.getAttribute("filter")}}function l(D){const C={id:D.getAttribute("id"),texid:D.getAttribute("texid"),displaypropertiesid:D.getAttribute("displaypropertiesid")},z=D.querySelectorAll("tex2coord"),H=[];for(let G=0;G<z.length;G++){const q=z[G],ee=q.getAttribute("u"),E=q.getAttribute("v");H.push(parseFloat(ee),parseFloat(E))}return C.uvs=new Float32Array(H),C}function u(D){const C={id:D.getAttribute("id"),displaypropertiesid:D.getAttribute("displaypropertiesid")},z=D.querySelectorAll("color"),H=[],G=new ze;for(let q=0;q<z.length;q++){const E=z[q].getAttribute("color");G.setStyle(E.substring(0,7),Qo),H.push(G.r,G.g,G.b)}return C.colors=new Float32Array(H),C}function h(D){const C=D.children,z={};for(let H=0;H<C.length;H++){const G={type:C[H].nodeName.substring(2)};for(let q=0;q<C[H].attributes.length;q++){const ee=C[H].attributes[q];ee.specified&&(G[ee.name]=ee.value)}z[C[H].getAttribute("identifier")]=G}return z}function d(D){const C={id:D.getAttribute("id"),displayname:D.getAttribute("displayname")},z=D.children,H={};for(let G=0;G<z.length;G++){const q=z[G];if(q.nodeName==="i:in"||q.nodeName==="i:out")H[q.nodeName==="i:in"?"inputs":"outputs"]=h(q);else{const ee=q.children,E={op:q.nodeName.substring(2),identifier:q.getAttribute("identifier")};for(let re=0;re<ee.length;re++)E[ee[re].nodeName.substring(2)]=h(ee[re]);H[E.identifier]=E}}return C.operations=H,C}function p(D){const C={id:D.getAttribute("id")},z=D.querySelectorAll("pbmetallic"),H=[];for(let G=0;G<z.length;G++){const q=z[G];H.push({name:q.getAttribute("name"),metallicness:parseFloat(q.getAttribute("metallicness")),roughness:parseFloat(q.getAttribute("roughness"))})}return C.data=H,C}function _(D){const C={};return C.name=D.getAttribute("name"),C.displaycolor=D.getAttribute("displaycolor"),C.displaypropertiesid=D.getAttribute("displaypropertiesid"),C}function v(D){const C={},z=[],H=D.querySelectorAll("vertices vertex");for(let E=0;E<H.length;E++){const re=H[E],ne=re.getAttribute("x"),me=re.getAttribute("y"),K=re.getAttribute("z");z.push(parseFloat(ne),parseFloat(me),parseFloat(K))}C.vertices=new Float32Array(z);const G=[],q=[],ee=D.querySelectorAll("triangles triangle");for(let E=0;E<ee.length;E++){const re=ee[E],ne=re.getAttribute("v1"),me=re.getAttribute("v2"),K=re.getAttribute("v3"),Xe=re.getAttribute("p1"),ue=re.getAttribute("p2"),Re=re.getAttribute("p3"),Ke=re.getAttribute("pid"),Le={};Le.v1=parseInt(ne,10),Le.v2=parseInt(me,10),Le.v3=parseInt(K,10),q.push(Le.v1,Le.v2,Le.v3),Xe&&(Le.p1=parseInt(Xe,10)),ue&&(Le.p2=parseInt(ue,10)),Re&&(Le.p3=parseInt(Re,10)),Ke&&(Le.pid=Ke),0<Object.keys(Le).length&&G.push(Le)}return C.triangleProperties=G,C.triangles=new Uint32Array(q),C}function m(D){const C=[],z=D.querySelectorAll("component");for(let H=0;H<z.length;H++){const G=z[H],q=f(G);C.push(q)}return C}function f(D){const C={};C.objectId=D.getAttribute("objectid");const z=D.getAttribute("transform");return z&&(C.transform=w(z)),C}function w(D){const C=[];D.split(" ").forEach(function(H){C.push(parseFloat(H))});const z=new pt;return z.set(C[0],C[3],C[6],C[9],C[1],C[4],C[7],C[10],C[2],C[5],C[8],C[11],0,0,0,1),z}function T(D){const C={type:D.getAttribute("type")},z=D.getAttribute("id");z&&(C.id=z);const H=D.getAttribute("pid");H&&(C.pid=H);const G=D.getAttribute("pindex");G&&(C.pindex=G);const q=D.getAttribute("thumbnail");q&&(C.thumbnail=q);const ee=D.getAttribute("partnumber");ee&&(C.partnumber=ee);const E=D.getAttribute("name");E&&(C.name=E);const re=D.querySelector("mesh");re&&(C.mesh=v(re));const ne=D.querySelector("components");return ne&&(C.components=m(ne)),C}function b(D){const C={};C.basematerials={};const z=D.querySelectorAll("basematerials");for(let ne=0;ne<z.length;ne++){const me=z[ne],K=a(me);C.basematerials[K.id]=K}C.texture2d={};const H=D.querySelectorAll("texture2d");for(let ne=0;ne<H.length;ne++){const me=H[ne],K=c(me);C.texture2d[K.id]=K}C.colorgroup={};const G=D.querySelectorAll("colorgroup");for(let ne=0;ne<G.length;ne++){const me=G[ne],K=u(me);C.colorgroup[K.id]=K}const q=D.querySelectorAll("implicitfunction");q.length>0&&(C.implicitfunction={});for(let ne=0;ne<q.length;ne++){const me=q[ne],K=d(me);C.implicitfunction[K.id]=K}C.pbmetallicdisplayproperties={};const ee=D.querySelectorAll("pbmetallicdisplayproperties");for(let ne=0;ne<ee.length;ne++){const me=ee[ne],K=p(me);C.pbmetallicdisplayproperties[K.id]=K}C.texture2dgroup={};const E=D.querySelectorAll("texture2dgroup");for(let ne=0;ne<E.length;ne++){const me=E[ne],K=l(me);C.texture2dgroup[K.id]=K}C.object={};const re=D.querySelectorAll("object");for(let ne=0;ne<re.length;ne++){const me=re[ne],K=T(me);C.object[K.id]=K}return C}function L(D){const C=[],z=D.querySelectorAll("item");for(let H=0;H<z.length;H++){const G=z[H],q={objectId:G.getAttribute("objectid")},ee=G.getAttribute("transform");ee&&(q.transform=w(ee)),C.push(q)}return C}function R(D){const C={unit:D.getAttribute("unit")||"millimeter"},z=D.querySelectorAll("metadata");z&&(C.metadata=o(z));const H=D.querySelector("resources");H&&(C.resources=b(H));const G=D.querySelector("build");return G&&(C.build=L(G)),C}function P(D,C,z,H){const G=D.texid,ee=z.resources.texture2d[G];if(ee){const E=H[ee.path],re=ee.contenttype,ne=new Blob([E],{type:re}),me=URL.createObjectURL(ne),K=i.load(me,function(){URL.revokeObjectURL(me)});switch(K.colorSpace=Qo,ee.tilestyleu){case"wrap":K.wrapS=yi;break;case"mirror":K.wrapS=qr;break;case"none":case"clamp":K.wrapS=Bn;break;default:K.wrapS=yi}switch(ee.tilestylev){case"wrap":K.wrapT=yi;break;case"mirror":K.wrapT=qr;break;case"none":case"clamp":K.wrapT=Bn;break;default:K.wrapT=yi}switch(ee.filter){case"auto":K.magFilter=Gt,K.minFilter=zn;break;case"linear":K.magFilter=Gt,K.minFilter=Gt,K.generateMipmaps=!1;break;case"nearest":K.magFilter=tn,K.minFilter=tn,K.generateMipmaps=!1;break;default:K.magFilter=Gt,K.minFilter=zn}return K}else return null}function I(D,C,z,H,G,q,ee){const E=ee.pindex,re={};for(let K=0,Xe=C.length;K<Xe;K++){const ue=C[K],Re=ue.p1!==void 0?ue.p1:E;re[Re]===void 0&&(re[Re]=[]),re[Re].push(ue)}const ne=Object.keys(re),me=[];for(let K=0,Xe=ne.length;K<Xe;K++){const ue=ne[K],Re=re[ue],Ke=D.basematerials[ue],Le=ie(Ke,H,G,q,ee,V),M=new Lt,g=[],O=z.vertices;for(let oe=0,Z=Re.length;oe<Z;oe++){const Ee=Re[oe];g.push(O[Ee.v1*3+0]),g.push(O[Ee.v1*3+1]),g.push(O[Ee.v1*3+2]),g.push(O[Ee.v2*3+0]),g.push(O[Ee.v2*3+1]),g.push(O[Ee.v2*3+2]),g.push(O[Ee.v3*3+0]),g.push(O[Ee.v3*3+1]),g.push(O[Ee.v3*3+2])}M.setAttribute("position",new xt(g,3));const te=new Wt(M,Le);me.push(te)}return me}function y(D,C,z,H,G,q,ee){const E=new Lt,re=[],ne=[],me=z.vertices,K=D.uvs;for(let Ke=0,Le=C.length;Ke<Le;Ke++){const M=C[Ke];re.push(me[M.v1*3+0]),re.push(me[M.v1*3+1]),re.push(me[M.v1*3+2]),re.push(me[M.v2*3+0]),re.push(me[M.v2*3+1]),re.push(me[M.v2*3+2]),re.push(me[M.v3*3+0]),re.push(me[M.v3*3+1]),re.push(me[M.v3*3+2]),ne.push(K[M.p1*2+0]),ne.push(K[M.p1*2+1]),ne.push(K[M.p2*2+0]),ne.push(K[M.p2*2+1]),ne.push(K[M.p3*2+0]),ne.push(K[M.p3*2+1])}E.setAttribute("position",new xt(re,3)),E.setAttribute("uv",new xt(ne,2));const Xe=ie(D,H,G,q,ee,P),ue=new Ps({map:Xe,flatShading:!0});return new Wt(E,ue)}function S(D,C,z,H){const G=new Lt,q=[],ee=[],E=z.vertices,re=D.colors;for(let K=0,Xe=C.length;K<Xe;K++){const ue=C[K],Re=ue.v1,Ke=ue.v2,Le=ue.v3;q.push(E[Re*3+0]),q.push(E[Re*3+1]),q.push(E[Re*3+2]),q.push(E[Ke*3+0]),q.push(E[Ke*3+1]),q.push(E[Ke*3+2]),q.push(E[Le*3+0]),q.push(E[Le*3+1]),q.push(E[Le*3+2]);const M=ue.p1!==void 0?ue.p1:H.pindex,g=ue.p2!==void 0?ue.p2:M,O=ue.p3!==void 0?ue.p3:M;ee.push(re[M*3+0]),ee.push(re[M*3+1]),ee.push(re[M*3+2]),ee.push(re[g*3+0]),ee.push(re[g*3+1]),ee.push(re[g*3+2]),ee.push(re[O*3+0]),ee.push(re[O*3+1]),ee.push(re[O*3+2])}G.setAttribute("position",new xt(q,3)),G.setAttribute("color",new xt(ee,3));const ne=new Ps({vertexColors:!0,flatShading:!0});return new Wt(G,ne)}function A(D){const C=new Lt;C.setIndex(new Bt(D.triangles,1)),C.setAttribute("position",new Bt(D.vertices,3));const z=new Ps({name:Oi.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new Wt(C,z)}function j(D,C,z,H,G,q){const ee=Object.keys(D),E=[];for(let re=0,ne=ee.length;re<ne;re++){const me=ee[re],K=D[me];switch($(me,H)){case"material":const ue=H.resources.basematerials[me],Re=I(ue,K,C,z,H,G,q);for(let M=0,g=Re.length;M<g;M++)E.push(Re[M]);break;case"texture":const Ke=H.resources.texture2dgroup[me];E.push(y(Ke,K,C,z,H,G,q));break;case"vertexColors":const Le=H.resources.colorgroup[me];E.push(S(Le,K,C,q));break;case"default":E.push(A(C));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(q.name)for(let re=0;re<E.length;re++)E[re].name=q.name;return E}function $(D,C){return C.resources.texture2dgroup[D]!==void 0?"texture":C.resources.basematerials[D]!==void 0?"material":C.resources.colorgroup[D]!==void 0?"vertexColors":D==="default"?"default":void 0}function Q(D,C){const z={},H=D.triangleProperties,G=C.pid;for(let q=0,ee=H.length;q<ee;q++){const E=H[q];let re=E.pid!==void 0?E.pid:G;re===void 0&&(re="default"),z[re]===void 0&&(z[re]=[]),z[re].push(E)}return z}function k(D,C,z,H,G){const q=new bi,ee=Q(D,G),E=j(ee,D,C,z,H,G);for(let re=0,ne=E.length;re<ne;re++)q.add(E[re]);return q}function Y(D,C,z){if(!D)return;const H=[],G=Object.keys(D);for(let q=0;q<G.length;q++){const ee=G[q];for(let E=0;E<t.availableExtensions.length;E++){const re=t.availableExtensions[E];re.ns===ee&&H.push(re)}}for(let q=0;q<H.length;q++){const ee=H[q];ee.apply(z,D[ee.ns],C)}}function ie(D,C,z,H,G,q){return D.build!==void 0||(D.build=q(D,C,z,H,G)),D.build}function V(D,C,z){let H;const G=D.displaypropertiesid,q=z.resources.pbmetallicdisplayproperties;if(G!==null&&q[G]!==void 0){const ne=q[G].data[D.index];H=new ph({flatShading:!0,roughness:ne.roughness,metalness:ne.metallicness})}else H=new Ps({flatShading:!0});H.name=D.name;const ee=D.displaycolor,E=ee.substring(0,7);return H.color.setStyle(E,Qo),ee.length===9&&(H.opacity=parseInt(ee.charAt(7)+ee.charAt(8),16)/255),H}function de(D,C,z,H){const G=new bi;for(let q=0;q<D.length;q++){const ee=D[q];let E=C[ee.objectId];E===void 0&&(ve(ee.objectId,C,z,H),E=C[ee.objectId]);const re=E.clone(),ne=ee.transform;ne&&re.applyMatrix4(ne),G.add(re)}return G}function ve(D,C,z,H){const G=z.resources.object[D];if(G.mesh){const q=G.mesh,ee=z.extensions,E=z.xml;Y(ee,q,E),C[G.id]=ie(q,C,z,H,G,k)}else{const q=G.components;C[G.id]=ie(q,C,z,H,G,de)}G.name&&(C[G.id].name=G.name),z.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",z.resources.implicitfunction)}function ae(D){const C=D.model,z=D.modelRels,H={},G=Object.keys(C),q={};if(z)for(let ee=0,E=z.length;ee<E;ee++){const re=z[ee],ne=re.target.substring(1);D.texture[ne]&&(q[re.target]=D.texture[ne])}for(let ee=0;ee<G.length;ee++){const E=G[ee],re=C[E],ne=Object.keys(re.resources.object);for(let me=0;me<ne.length;me++){const K=ne[me];ve(K,H,re,q)}}return H}function Ie(D){for(let C=0;C<D.length;C++){const z=D[C];if(z.target.split(".").pop().toLowerCase()==="model")return z}}function qe(D,C){const z=new bi,H=Ie(C.rels),G=C.model[H.target.substring(1)].build;for(let q=0;q<G.length;q++){const ee=G[q],E=D[ee.objectId].clone(),re=ee.transform;re&&E.applyMatrix4(re),z.add(E)}return z}const je=r(e),J=ae(je);return qe(J,je)}addExtension(e){this.availableExtensions.push(e)}}const tu={type:"change"},Dl={type:"start"},Rh={type:"end"},Is=new Tl,nu=new Qn,G0=Math.cos(70*jd.DEG2RAD),St=new B,Ht=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ea=1e-6;class W0 extends Bp{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ni,this._lastTargetPosition=new B,this._quat=new Ni().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wc,this._sphericalDelta=new wc,this._scale=1,this._panOffset=new B,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new B,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q0.bind(this),this._onPointerDown=X0.bind(this),this._onPointerUp=Y0.bind(this),this._onContextMenu=ex.bind(this),this._onMouseWheel=K0.bind(this),this._onKeyDown=Z0.bind(this),this._onTouchStart=J0.bind(this),this._onTouchMove=Q0.bind(this),this._onMouseDown=$0.bind(this),this._onMouseMove=j0.bind(this),this._interceptControlDown=tx.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tu),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),r<-Math.PI?r+=Ht:r>Math.PI&&(r-=Ht),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<G0?this.object.lookAt(this.target):(nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(nu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ea||this._lastTargetPosition.distanceToSquared(this.target)>ea?(this.dispatchEvent(tu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;St.copy(r).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function X0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function q0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Y0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rh),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $0(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case mr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case mr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Dl)}function j0(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function K0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(Dl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rh))}function Z0(n){this.enabled!==!1&&this._handleKeyDown(n)}function J0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Dl)}function Q0(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function ex(n){this.enabled!==!1&&n.preventDefault()}function tx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ix{scene;renderer;controls;perspectiveCamera;orthographicCamera;currentCamera;currentMesh=null;gridHelper;modelHistory=[];historyIndex=-1;gizmoScene;gizmoCamera;stlLoader=new E0;threeMFLoader=new V0;animationFrameId=null;gridColor;gridCenterLineColor;constructor(e,t,i,r){this.gridColor=i,this.gridCenterLineColor=r,this.scene=new Mc,this.scene.background=new ze(t);const s=e.clientWidth/e.clientHeight;this.perspectiveCamera=new Jt(75,s,.1,1e3),this.orthographicCamera=new Cl(-s,s,1,-1,.1,1e3),this.currentCamera=this.perspectiveCamera,this.currentCamera.position.z=10,this.setupGrid(this.gridColor,this.gridCenterLineColor),this.setupLighting(),this.setupRenderer(e),this.setupControls(),this.setupGizmo()}setupGizmo(){this.gizmoScene=new Mc,this.gizmoCamera=new Jt(50,1,.1,10),this.gizmoCamera.position.z=2;const e=new Rc(1);this.gizmoScene.add(e)}setupGrid(e,t){this.gridHelper=new Cc(100,100,e,t),this.scene.add(this.gridHelper);const i=new Rc(5);this.scene.add(i)}setupLighting(){const e=new Fp(16777215,.7);this.scene.add(e);const t=new Np(16777215,1);t.position.set(5,10,7.5),this.scene.add(t)}setupRenderer(e){this.renderer=new S0({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement)}setupControls(){this.controls=new W0(this.currentCamera,this.renderer.domElement),this.controls.enableDamping=!0}startAnimation(){const e=()=>{this.animationFrameId=requestAnimationFrame(e),this.controls.update(),this.renderer.render(this.scene,this.currentCamera),this.renderer.autoClear=!1,this.renderer.clearDepth(),this.gizmoCamera.position.copy(this.currentCamera.position),this.gizmoCamera.quaternion.copy(this.currentCamera.quaternion),this.renderer.setViewport(0,0,100,100),this.renderer.render(this.gizmoScene,this.gizmoCamera),this.renderer.setViewport(0,0,this.renderer.domElement.width,this.renderer.domElement.height),this.renderer.autoClear=!0};e()}updateBackgroundColor(e){this.scene.background=new ze(e)}updateGrid(e,t,i=100,r=100){this.gridColor=e,this.gridCenterLineColor=t,this.scene.remove(this.gridHelper),this.gridHelper.dispose(),this.gridHelper=new Cc(i,r,e,t),this.scene.add(this.gridHelper)}loadModel(e,t,i){this.clearCurrentModel();try{const r=this.parseModel(e,t,i);if(r.length>0){const s=r[0];this.currentMesh=s,this.modelHistory=this.modelHistory.slice(0,this.historyIndex+1),this.modelHistory.push(s),this.historyIndex++,this.scene.add(s);const o=this.calculateModelInfo(r);if(o.dimensions){const{x:a,y:c,z:l}=o.dimensions,u=Math.max(parseFloat(a),parseFloat(c),parseFloat(l)),h=Math.ceil(u/10)*20;this.updateGrid(this.gridColor,this.gridCenterLineColor,h,h/10)}return o}}catch(r){console.error(`Failed to parse ${t.toUpperCase()}:`,r)}return{triangleCount:0,dimensions:null}}undo(){this.historyIndex>0&&(this.historyIndex--,this.setActiveModelFromHistory())}redo(){this.historyIndex<this.modelHistory.length-1&&(this.historyIndex++,this.setActiveModelFromHistory())}setActiveModelFromHistory(){this.clearCurrentModel(),this.currentMesh=this.modelHistory[this.historyIndex],this.scene.add(this.currentMesh)}parseModel(e,t,i){const r=[];if(t==="stl"){const s=this.stlLoader.parse(e),o=new ph({color:i,metalness:.1,roughness:.75}),a=new Wt(s,o);r.push(a)}else if(t==="3mf"){const s=new TextEncoder().encode(e).buffer,o=this.threeMFLoader.parse(s);this.addMeshesRecursively(o,r,!1)}return r}addMeshesRecursively(e,t,i){e.isMesh&&(i&&this.scene.add(e),t.push(e)),e.children&&e.children.length&&e.children.forEach(r=>this.addMeshesRecursively(r,t,i))}calculateModelInfo(e){if(!this.currentMesh)return{triangleCount:0,dimensions:null};const i=new Vi().setFromObject(this.currentMesh).getSize(new B);return{triangleCount:e.reduce((s,o)=>s+o.geometry.attributes.position.count/3,0),dimensions:{x:i.x.toFixed(2),y:i.y.toFixed(2),z:i.z.toFixed(2)}}}clearCurrentModel(){this.currentMesh&&(this.scene.remove(this.currentMesh),this.currentMesh=null)}resize(e,t){if(e===0||t===0)return;this.renderer.setSize(e,t);const i=e/t;if("isPerspectiveCamera"in this.currentCamera&&this.currentCamera.isPerspectiveCamera)this.currentCamera.aspect=i;else{const r=this.currentCamera.top-this.currentCamera.bottom,s=this.currentCamera;s.left=-r*i/2,s.right=r*i/2}this.currentCamera.updateProjectionMatrix()}exportScreenshot(e,t,i){return new Promise(r=>{const s=this.scene.background;i&&(this.scene.background=new ze(i)),this.renderer.setSize(e,t),this.renderer.render(this.scene,this.currentCamera);const o=this.renderer.domElement.toDataURL("image/png");this.resize(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight),i&&(this.scene.background=s),r(o)})}dispose(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),this.clearCurrentModel(),this.controls.dispose(),this.renderer.dispose()}}class rx{constructor(e,t,i,r){this.perspectiveCamera=e,this.orthographicCamera=t,this.controls=i,this.container=r}viewMode="perspective";get currentCamera(){return this.viewMode==="perspective"?this.perspectiveCamera:this.orthographicCamera}toggleViewMode(){return this.viewMode=this.viewMode==="perspective"?"orthographic":"perspective",this.controls.object=this.currentCamera,this.viewMode}setView(e){const t=this.currentCamera.position.length();switch(this.controls.target.set(0,0,0),this.currentCamera.up.set(0,1,0),e){case"top":this.currentCamera.position.set(0,t,0),this.currentCamera.up.set(0,0,-1);break;case"front":this.currentCamera.position.set(0,0,t);break;case"right":this.currentCamera.position.set(t,0,0);break}this.controls.update()}frameToObject(e,t=!0){const i=new Vi().setFromObject(e),r=i.getCenter(new B),s=i.getSize(new B),o=Math.max(s.x,s.y,s.z);e.position.sub(r);const a=new B;this.currentCamera.getWorldDirection(a),this.controls.target.set(0,0,0);let c;if(this.viewMode==="perspective"){const l=this.perspectiveCamera.fov*(Math.PI/180);c=o/2/Math.tan(l/2)*1.5}else{const l=this.container.clientWidth/this.container.clientHeight,u=o*1.2,h=u*l;this.orthographicCamera.left=-h/2,this.orthographicCamera.right=h/2,this.orthographicCamera.top=u/2,this.orthographicCamera.bottom=-u/2,this.orthographicCamera.zoom=1,this.orthographicCamera.updateProjectionMatrix(),c=o*1.5}this.currentCamera.position.copy(a.multiplyScalar(-c)),this.currentCamera.lookAt(0,0,0),this.controls.object=this.currentCamera,this.controls.update()}}class iu{static toggleWireframe(e){e&&(Array.isArray(e.material)?e.material.forEach(t=>{"wireframe"in t&&(t.wireframe=!t.wireframe)}):"wireframe"in e.material&&(e.material.wireframe=!e.material.wireframe))}static updateMeshColor(e,t){e&&(Array.isArray(e.material)?e.material.forEach(i=>{"color"in i&&i.color instanceof ze&&i.color.set(t)}):"color"in e.material&&e.material.color instanceof ze&&e.material.color.set(t))}}var sx=ul('<div class="toolbar svelte-plrvfh"><button class="svelte-plrvfh">Reset View</button> <button class="svelte-plrvfh"> </button> <button class="svelte-plrvfh">Toggle Wireframe</button> <button class="svelte-plrvfh">Top</button> <button class="svelte-plrvfh">Front</button> <button class="svelte-plrvfh">Right</button> <button class="svelte-plrvfh">Export</button> <div class="history-controls svelte-plrvfh"><button class="svelte-plrvfh">Undo</button> <span class="svelte-plrvfh"> </span> <button class="svelte-plrvfh">Redo</button></div></div>');const ox={hash:"svelte-plrvfh",code:".toolbar.svelte-plrvfh {position:absolute;top:1rem;left:1rem;z-index:10;background-color:var(--toolbar-background-color);padding:8px;border-radius:4px;display:flex;gap:10px;flex-wrap:wrap;}.toolbar.svelte-plrvfh button:where(.svelte-plrvfh) {background-color:var(--toolbar-button-background-color);color:var(--toolbar-button-foreground-color);border:1px solid var(--toolbar-button-border-color);border-radius:4px;padding:5px 10px;cursor:pointer;font-size:0.9em;}.toolbar.svelte-plrvfh button:where(.svelte-plrvfh):hover {background-color:var(--toolbar-button-hover-background-color);}.history-controls.svelte-plrvfh {display:flex;align-items:center;gap:5px;}.history-controls.svelte-plrvfh span:where(.svelte-plrvfh) {padding:0 5px;font-size:0.9em;color:var(--toolbar-button-foreground-color);}.history-controls.svelte-plrvfh button:where(.svelte-plrvfh):disabled {opacity:0.5;cursor:not-allowed;}"};function Ph(n,e){so(e,!1),hl(n,ox);let t=Qe(e,"viewMode",12),i=Qe(e,"onResetView",12),r=Qe(e,"onToggleViewMode",12),s=Qe(e,"onToggleWireframe",12),o=Qe(e,"onSetView",12),a=Qe(e,"onExport",12),c=Qe(e,"onUndo",12),l=Qe(e,"onRedo",12),u=Qe(e,"historyIndex",12),h=Qe(e,"historyCount",12),d=Qe(e,"toolbarBackgroundColor",12),p=Qe(e,"toolbarButtonBackgroundColor",12),_=Qe(e,"toolbarButtonHoverBackgroundColor",12),v=Qe(e,"toolbarButtonForegroundColor",12),m=Qe(e,"toolbarButtonBorderColor",12);dl();var f=sx(),w=ni(f),T=Zt(w,2),b=ni(T);ti(T);var L=Zt(T,2),R=Zt(L,2),P=Zt(R,2),I=Zt(P,2),y=Zt(I,2),S=Zt(y,2),A=ni(S),j=Zt(A,2),$=ni(j);ti(j);var Q=Zt(j,2);return ti(S),ti(f),cl(()=>{fl(f,`
    --toolbar-background-color: ${d()??""};
    --toolbar-button-background-color: ${p()??""};
    --toolbar-button-hover-background-color: ${_()??""};
    --toolbar-button-foreground-color: ${v()??""};
    --toolbar-button-border-color: ${m()??""};
  `),Js(b,`View: ${t()??""}`),A.disabled=u()<=0,Js($,`${u()+1} / ${h()??""}`),Q.disabled=u()>=h()-1}),Rn("click",w,function(...k){i()?.apply(this,k)}),Rn("click",T,function(...k){r()?.apply(this,k)}),Rn("click",L,function(...k){s()?.apply(this,k)}),Rn("click",R,()=>o()("top")),Rn("click",P,()=>o()("front")),Rn("click",I,()=>o()("right")),Rn("click",y,function(...k){a()?.apply(this,k)}),Rn("click",A,function(...k){c()?.apply(this,k)}),Rn("click",Q,function(...k){l()?.apply(this,k)}),Xr(n,f),oo({get viewMode(){return t()},set viewMode(k){t(k),Je()},get onResetView(){return i()},set onResetView(k){i(k),Je()},get onToggleViewMode(){return r()},set onToggleViewMode(k){r(k),Je()},get onToggleWireframe(){return s()},set onToggleWireframe(k){s(k),Je()},get onSetView(){return o()},set onSetView(k){o(k),Je()},get onExport(){return a()},set onExport(k){a(k),Je()},get onUndo(){return c()},set onUndo(k){c(k),Je()},get onRedo(){return l()},set onRedo(k){l(k),Je()},get historyIndex(){return u()},set historyIndex(k){u(k),Je()},get historyCount(){return h()},set historyCount(k){h(k),Je()},get toolbarBackgroundColor(){return d()},set toolbarBackgroundColor(k){d(k),Je()},get toolbarButtonBackgroundColor(){return p()},set toolbarButtonBackgroundColor(k){p(k),Je()},get toolbarButtonHoverBackgroundColor(){return _()},set toolbarButtonHoverBackgroundColor(k){_(k),Je()},get toolbarButtonForegroundColor(){return v()},set toolbarButtonForegroundColor(k){v(k),Je()},get toolbarButtonBorderColor(){return m()},set toolbarButtonBorderColor(k){m(k),Je()}})}pl(Ph,{viewMode:{},onResetView:{},onToggleViewMode:{},onToggleWireframe:{},onSetView:{},onExport:{},onUndo:{},onRedo:{},historyIndex:{},historyCount:{},toolbarBackgroundColor:{},toolbarButtonBackgroundColor:{},toolbarButtonHoverBackgroundColor:{},toolbarButtonForegroundColor:{},toolbarButtonBorderColor:{}},[],[],!0);var ax=ul('<div class="info-panel svelte-1nhhg0h"><strong>Model Info:</strong> <span class="svelte-1nhhg0h"> </span> <span class="svelte-1nhhg0h"> </span></div>');const lx={hash:"svelte-1nhhg0h",code:".info-panel.svelte-1nhhg0h {position:absolute;bottom:1rem;left:1rem;z-index:10;background-color:var(--info-panel-background-color);color:var(--info-panel-foreground-color);padding:8px 12px;border-radius:4px;display:flex;gap:20px;flex-wrap:wrap;font-size:0.9em;}.info-panel.svelte-1nhhg0h span:where(.svelte-1nhhg0h) {background-color:var(--info-panel-span-background-color);padding:4px 8px;border-radius:4px;}"};function Dh(n,e){so(e,!1),hl(n,lx);let t=Qe(e,"modelInfo",12),i=Qe(e,"infoPanelBackgroundColor",12),r=Qe(e,"infoPanelForegroundColor",12),s=Qe(e,"infoPanelSpanBackgroundColor",12);dl();var o=Yf(),a=bf(o);{var c=l=>{var u=ax(),h=Zt(ni(u),2),d=ni(h);ti(h);var p=Zt(h,2),_=ni(p);ti(p),ti(u),cl(v=>{fl(u,`
      --info-panel-background-color: ${i()??""};
      --info-panel-foreground-color: ${r()??""};
      --info-panel-span-background-color: ${s()??""};
    `),Js(d,`Triangles: ${v??""}`),Js(_,`Dimensions (mm): ${yn(t()),Qt(()=>t().dimensions.x)??""} x ${yn(t()),Qt(()=>t().dimensions.y)??""} x ${yn(t()),Qt(()=>t().dimensions.z)??""}`)},[()=>(yn(t()),Qt(()=>t().triangleCount.toLocaleString()))]),Xr(l,u)};ed(a,l=>{yn(t()),Qt(()=>t().dimensions)&&l(c)})}return Xr(n,o),oo({get modelInfo(){return t()},set modelInfo(l){t(l),Je()},get infoPanelBackgroundColor(){return i()},set infoPanelBackgroundColor(l){i(l),Je()},get infoPanelForegroundColor(){return r()},set infoPanelForegroundColor(l){r(l),Je()},get infoPanelSpanBackgroundColor(){return s()},set infoPanelSpanBackgroundColor(l){s(l),Je()}})}pl(Dh,{modelInfo:{},infoPanelBackgroundColor:{},infoPanelForegroundColor:{},infoPanelSpanBackgroundColor:{}},[],[],!0);var cx=ul('<div class="stl-viewer-host svelte-f6ldrr"><div class="viewer-container svelte-f6ldrr"></div> <!> <!></div>');const ux={hash:"svelte-f6ldrr",code:".stl-viewer-host.svelte-f6ldrr {position:relative;height:100%;width:100%;overflow:hidden;}.viewer-container.svelte-f6ldrr {width:100%;height:100%;background-color:var(--viewer-background-color);}"};function hx(n,e){so(e,!1),hl(n,ux);let t=Qe(e,"payload",12,""),i=Qe(e,"payloadType",12,"stl"),r=Qe(e,"color",12,"#fca503"),s=Qe(e,"viewerBackgroundColor",12,"#1e1e1e"),o=Qe(e,"gridColor",12,"#888888"),a=Qe(e,"gridCenterLineColor",12,"#444444"),c=Qe(e,"toolbarBackgroundColor",12,"rgba(42, 42, 42, 0.8)"),l=Qe(e,"toolbarButtonBackgroundColor",12,"#444"),u=Qe(e,"toolbarButtonHoverBackgroundColor",12,"#555"),h=Qe(e,"toolbarButtonForegroundColor",12,"white"),d=Qe(e,"toolbarButtonBorderColor",12,"#666"),p=Qe(e,"infoPanelBackgroundColor",12,"rgba(42, 42, 42, 0.8)"),_=Qe(e,"infoPanelForegroundColor",12,"#eee"),v=Qe(e,"infoPanelSpanBackgroundColor",12,"#444"),m=Fr(),f=Fr(),w,T,b=Fr({triangleCount:0,dimensions:null}),L=Fr("perspective");Gu(()=>{R(),P(),t()&&I()}),Jf(()=>{y()});function R(){Dt(f,new ix(be(m),s(),o(),a())),w=new rx(be(f).perspectiveCamera,be(f).orthographicCamera,be(f).controls,be(m)),_o(f,be(f).currentCamera=w.currentCamera),be(f).startAnimation()}function P(){const ae=()=>{if(!be(m))return;const{clientWidth:Ie,clientHeight:qe}=be(m);be(f).resize(Ie,qe)};T=new ResizeObserver(ae),T.observe(be(m))}function I(){Dt(b,be(f).loadModel(t(),i(),r())),be(f).currentMesh&&w.frameToObject(be(f).currentMesh,!1)}function y(){T?.disconnect(),be(f)?.dispose()}function S(){be(f).currentMesh&&w.frameToObject(be(f).currentMesh)}function A(){Dt(L,w.toggleViewMode()),_o(f,be(f).currentCamera=w.currentCamera),_o(f,be(f).controls.object=be(f).currentCamera),S()}function j(){iu.toggleWireframe(be(f).currentMesh)}function $(ae){w.setView(ae)}function Q(){be(f).undo(),Dt(b,be(f).calculateModelInfo(be(f).modelHistory))}function k(){be(f).redo(),Dt(b,be(f).calculateModelInfo(be(f).modelHistory))}function Y(){const{clientWidth:ae,clientHeight:Ie}=be(m);be(f).exportScreenshot(ae,Ie).then(qe=>{const je=new CustomEvent("screenshot",{detail:qe});window.dispatchEvent(je)})}ls(()=>(be(f),yn(t())),()=>{be(f)&&t()&&I()}),ls(()=>(be(f),be(m)),()=>{if(be(f)&&be(m)){const ae=getComputedStyle(be(m));be(f).updateBackgroundColor(ae.backgroundColor)}}),ls(()=>(be(f),yn(o()),yn(a())),()=>{be(f)&&be(f).updateGrid(o(),a())}),ls(()=>(be(f),yn(r())),()=>{be(f)?.currentMesh&&iu.updateMeshColor(be(f).currentMesh,r())}),Lf(),dl();var ie=cx(),V=ni(ie);nd(V,ae=>Dt(m,ae),()=>be(m));var de=Zt(V,2);{let ae=js(()=>(be(f),Qt(()=>be(f)?.historyIndex??0))),Ie=js(()=>(be(f),Qt(()=>be(f)?.modelHistory.length??0)));Ph(de,{get viewMode(){return be(L)},onResetView:S,onToggleViewMode:A,onToggleWireframe:j,onSetView:$,onExport:Y,onUndo:Q,onRedo:k,get historyIndex(){return be(ae)},get historyCount(){return be(Ie)},get toolbarBackgroundColor(){return c()},get toolbarButtonBackgroundColor(){return l()},get toolbarButtonHoverBackgroundColor(){return u()},get toolbarButtonForegroundColor(){return h()},get toolbarButtonBorderColor(){return d()}})}var ve=Zt(de,2);return Dh(ve,{get modelInfo(){return be(b)},get infoPanelBackgroundColor(){return p()},get infoPanelForegroundColor(){return _()},get infoPanelSpanBackgroundColor(){return v()}}),ti(ie),cl(()=>fl(ie,`--viewer-background-color: ${s()??""};`)),Xr(n,ie),oo({get payload(){return t()},set payload(ae){t(ae),Je()},get payloadType(){return i()},set payloadType(ae){i(ae),Je()},get color(){return r()},set color(ae){r(ae),Je()},get viewerBackgroundColor(){return s()},set viewerBackgroundColor(ae){s(ae),Je()},get gridColor(){return o()},set gridColor(ae){o(ae),Je()},get gridCenterLineColor(){return a()},set gridCenterLineColor(ae){a(ae),Je()},get toolbarBackgroundColor(){return c()},set toolbarBackgroundColor(ae){c(ae),Je()},get toolbarButtonBackgroundColor(){return l()},set toolbarButtonBackgroundColor(ae){l(ae),Je()},get toolbarButtonHoverBackgroundColor(){return u()},set toolbarButtonHoverBackgroundColor(ae){u(ae),Je()},get toolbarButtonForegroundColor(){return h()},set toolbarButtonForegroundColor(ae){h(ae),Je()},get toolbarButtonBorderColor(){return d()},set toolbarButtonBorderColor(ae){d(ae),Je()},get infoPanelBackgroundColor(){return p()},set infoPanelBackgroundColor(ae){p(ae),Je()},get infoPanelForegroundColor(){return _()},set infoPanelForegroundColor(ae){_(ae),Je()},get infoPanelSpanBackgroundColor(){return v()},set infoPanelSpanBackgroundColor(ae){v(ae),Je()}})}customElements.define("cad-viewer",pl(hx,{payload:{},payloadType:{},color:{},viewerBackgroundColor:{},gridColor:{},gridCenterLineColor:{},toolbarBackgroundColor:{},toolbarButtonBackgroundColor:{},toolbarButtonHoverBackgroundColor:{},toolbarButtonForegroundColor:{},toolbarButtonBorderColor:{},infoPanelBackgroundColor:{},infoPanelForegroundColor:{},infoPanelSpanBackgroundColor:{}},[],[],!0));
