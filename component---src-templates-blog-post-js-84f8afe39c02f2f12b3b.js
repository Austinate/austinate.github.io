(self.webpackChunkaustinate_me=self.webpackChunkaustinate_me||[]).push([[989],{8784:function(e,t,n){"use strict";n.d(t,{H:function(){return L},b:function(){return te},c:function(){return z},g:function(){return _},h:function(){return E},p:function(){return c},r:function(){return re}});let l,r,s=!1,a=!1;const $="undefined"!=typeof window?window:{},o=$.document||{head:{}},i={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),u=(e,t,n,l)=>{n&&n.map((([n,l,r])=>{const s=h(e,n),a=d(t,r),$=f(n);i.ael(s,l,a,$),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>i.rel(s,l,a,$)))}))},d=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(l){$e(l)}},h=(e,t)=>4&t?o:e,f=e=>0!=(2&e),g="http://www.w3.org/1999/xlink",p=new WeakMap,y=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,l=t.$flags$,r=(t.$tagName$,()=>{}),s=((e,t,n,l)=>{let r=v(t);const s=ce.get(r);if(e=11===e.nodeType?e:o,s)if("string"==typeof s){e=e.head||e;let t,n=p.get(e);n||p.set(e,n=new Set),n.has(r)||(t=o.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(r))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return r})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h")),r()},v=(e,t)=>"sc-"+e.$tagName$,w={},b=e=>"object"===(e=typeof e)||"function"===e,E=(e,t,...n)=>{let l=null,r=null,s=!1,a=!1;const $=[],o=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?o(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!b(l))&&(l=String(l)),s&&a?$[$.length-1].$text$+=l:$.push(s?k(null,l):l),a=s)};if(o(n),t){t.key&&(r=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,$,R);const i=k(e,null);return i.$attrs$=t,$.length>0&&(i.$children$=$),i.$key$=r,i},k=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},L={},R={forEach:(e,t)=>e.map(S).forEach(t),map:(e,t)=>e.map(S).map(t).map(x)},S=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),x=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),E(e.vtag,t,...e.vchildren||[])}const t=k(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},N=(e,t,n,l,r,s)=>{if(n!==l){let o=ae(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,r=j(n),s=j(l);t.remove(...r.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!r.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(o||"o"!==t[0]||"n"!==t[1]){const $=b(l);if((o||$&&null!==l)&&!r)try{if(e.tagName.includes("-"))e[t]=l;else{const r=null==l?"":l;"list"===t?o=!1:null!=n&&e[t]==r||(e[t]=r)}}catch(a){}let i=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,i=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(i?e.removeAttributeNS(g,t):e.removeAttribute(t)):(!o||4&s||r)&&!$&&(l=!0===l?"":l,i?e.setAttributeNS(g,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ae($,c)?c.slice(2):c[2]+t.slice(3),n&&i.rel(e,t,n,!1),l&&i.ael(e,t,l,!1)}},M=/\s/,j=e=>e?e.split(M):[],T=(e,t,n,l)=>{const r=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||w,a=t.$attrs$||w;for(l in s)l in a||N(r,l,s[l],void 0,n,t.$flags$);for(l in a)N(r,l,s[l],a[l],n,t.$flags$)},C=(e,t,n,r)=>{const a=t.$children$[n];let $,i,c=0;if(null!==a.$text$)$=a.$elm$=o.createTextNode(a.$text$);else{if(s||(s="svg"===a.$tag$),$=a.$elm$=o.createElementNS(s?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a.$tag$),s&&"foreignObject"===a.$tag$&&(s=!1),T(null,a,s),null!=l&&$["s-si"]!==l&&$.classList.add($["s-si"]=l),a.$children$)for(c=0;c<a.$children$.length;++c)i=C(e,a,c),i&&$.appendChild(i);"svg"===a.$tag$?s=!1:"foreignObject"===$.tagName&&(s=!0)}return $},P=(e,t,n,l,s,a)=>{let $,o=e;for(o.shadowRoot&&o.tagName===r&&(o=o.shadowRoot);s<=a;++s)l[s]&&($=C(null,n,s),$&&(l[s].$elm$=$,o.insertBefore($,t)))},O=(e,t,n,l,r)=>{for(;t<=n;++t)(l=e[t])&&(r=l.$elm$,A(l),r.remove())},I=(e,t)=>e.$tag$===t.$tag$&&e.$key$===t.$key$,H=(e,t)=>{const n=t.$elm$=e.$elm$,l=e.$children$,r=t.$children$,a=t.$tag$,$=t.$text$;null===$?(s="svg"===a||"foreignObject"!==a&&s,"slot"===a||T(e,t,s),null!==l&&null!==r?((e,t,n,l)=>{let r,s,a=0,$=0,o=0,i=0,c=t.length-1,m=t[0],u=t[c],d=l.length-1,h=l[0],f=l[d];for(;a<=c&&$<=d;)if(null==m)m=t[++a];else if(null==u)u=t[--c];else if(null==h)h=l[++$];else if(null==f)f=l[--d];else if(I(m,h))H(m,h),m=t[++a],h=l[++$];else if(I(u,f))H(u,f),u=t[--c],f=l[--d];else if(I(m,f))H(m,f),e.insertBefore(m.$elm$,u.$elm$.nextSibling),m=t[++a],f=l[--d];else if(I(u,h))H(u,h),e.insertBefore(u.$elm$,m.$elm$),u=t[--c],h=l[++$];else{for(o=-1,i=a;i<=c;++i)if(t[i]&&null!==t[i].$key$&&t[i].$key$===h.$key$){o=i;break}o>=0?(s=t[o],s.$tag$!==h.$tag$?r=C(t&&t[$],n,o):(H(s,h),t[o]=void 0,r=s.$elm$),h=l[++$]):(r=C(t&&t[$],n,$),h=l[++$]),r&&m.$elm$.parentNode.insertBefore(r,m.$elm$)}a>c?P(e,null==l[d+1]?null:l[d+1].$elm$,n,l,$,d):$>d&&O(t,a,c)})(n,l,t,r):null!==r?(null!==e.$text$&&(n.textContent=""),P(n,null,t,r,0,r.length-1)):null!==l&&O(l,0,l.length-1),s&&"svg"===a&&(s=!1)):e.$text$!==$&&(n.data=$)},A=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(A)},U=(e,t)=>{const n=e.$hostElement$,s=e.$cmpMeta$,a=e.$vnode$||k(null,null),$=(o=t)&&o.$tag$===L?t:E(null,null,t);var o;r=n.tagName,s.$attrsToReflect$&&($.$attrs$=$.$attrs$||{},s.$attrsToReflect$.map((([e,t])=>$.$attrs$[t]=n[e]))),$.$tag$=null,$.$flags$|=4,e.$vnode$=$,$.$elm$=a.$elm$=n.shadowRoot||n,l=n["s-sc"],H(a,$)},_=e=>le(e).$hostElement$,z=(e,t,n)=>{const l=_(e);return{emit:e=>B(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},B=(e,t,n)=>{const l=i.ce(t,n);return e.dispatchEvent(l),l},q=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},D=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);q(e,e.$ancestorComponent$);return pe((()=>F(e,t)))},F=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),l=e.$lazyInstance$;let r;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>K(l,e,t))),e.$queuedListeners$=null),r=K(l,"componentWillLoad")),n(),Y(r,(()=>W(e,l,t)))},W=async(e,t,n)=>{const l=e.$hostElement$,r=(e.$cmpMeta$.$tagName$,()=>{}),s=l["s-rc"];n&&y(e);const a=(e.$cmpMeta$.$tagName$,()=>{});V(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0),a(),r();{const t=l["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},V=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,U(e,t)}catch(l){$e(l,e.$hostElement$)}return null},Z=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=()=>{},l=e.$lazyInstance$,r=e.$ancestorComponent$;64&e.$flags$?(K(l,"componentDidUpdate"),n()):(e.$flags$|=64,J(t),K(l,"componentDidLoad"),n(),e.$onReadyResolve$(t),r||G()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&ge((()=>D(e,!1))),e.$flags$&=-517},G=e=>{J(o.documentElement),ge((()=>B($,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})))},K=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){$e(l)}},Y=(e,t)=>e&&e.then?e.then(t):t(),J=e=>e.classList.add("hydrated"),Q=(e,t,n,l)=>{const r=le(e),s=r.$hostElement$,a=r.$instanceValues$.get(t),$=r.$flags$,o=r.$lazyInstance$;var i,c;i=n,c=l.$members$[t][0],n=null==i||b(i)?i:4&c?"false"!==i&&(""===i||!!i):1&c?String(i):i;const m=Number.isNaN(a)&&Number.isNaN(n);if((!(8&$)||void 0===a)&&(n!==a&&!m)&&(r.$instanceValues$.set(t,n),o)){if(l.$watchers$&&128&$){const e=l.$watchers$[t];e&&e.map((e=>{try{o[e](n,a,t)}catch(l){$e(l,s)}}))}2==(18&$)&&D(r,!1)}},X=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const l=Object.entries(t.$members$),r=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(r,e,{get(){return t=e,le(this).$instanceValues$.get(t);var t},set(n){Q(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(r,e,{value(...t){const n=le(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),1&n){const n=new Map;r.attributeChangedCallback=function(e,t,l){i.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(r.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const r=l[1]||e;return n.set(r,e),512&l[0]&&t.$attrsToReflect$.push([e,r]),r}))}}return e},ee=async(e,t,n,l,r)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(r=ie(n)).then){const e=()=>{};r=await r,e()}r.isProxied||(n.$watchers$=r.watchers,X(r,n,2),r.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new r(t)}catch($){$e($)}t.$flags$&=-9,t.$flags$|=128,e()}if(r.style){let e=r.style;const t=v(n);if(!ce.has(t)){const l=(n.$tagName$,()=>{});((e,t,n)=>{let l=ce.get(e);m&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,ce.set(e,l)})(t,e,!!(1&n.$flags$)),l()}}}const s=t.$ancestorComponent$,a=()=>D(t,!0);s&&s["s-rc"]?s["s-rc"].push(a):a()},te=(e,t={})=>{const n=()=>{},l=[],r=t.exclude||[],s=$.customElements,a=o.head,c=a.querySelector("meta[charset]"),m=o.createElement("style"),d=[];let h,f=!0;Object.assign(i,t),i.$resourcesUrl$=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>{e[1].map((t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$={};const a=n.$tagName$,$=class extends HTMLElement{constructor(e){super(e),se(e=this,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),f?d.push(this):i.jmp((()=>(e=>{if(0==(1&i.$flags$)){const t=le(e),n=t.$cmpMeta$,l=(n.$tagName$,()=>{});if(1&t.$flags$)u(e,t,n.$listeners$);else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){q(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),ee(0,t,n)}l()}})(this)))}disconnectedCallback(){i.jmp((()=>(e=>{if(0==(1&i.$flags$)){const t=le(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this)))}componentOnReady(){return le(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],r.includes(a)||s.get(a)||(l.push(a),s.define(a,X($,n,1)))}))})),m.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),a.insertBefore(m,c?c.nextSibling:a.firstChild),f=!1,d.length?d.map((e=>e.connectedCallback())):i.jmp((()=>h=setTimeout(G,30))),n()},ne=new WeakMap,le=e=>ne.get(e),re=(e,t)=>ne.set(t.$lazyInstance$=e,t),se=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e)),n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],u(e,n,t.$listeners$),ne.set(e,n)},ae=(e,t)=>t in e,$e=(e,t)=>(0,console.error)(e,t),oe=new Map,ie=(e,t,l)=>{const r=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,a=oe.get(s);if(a)return a[r];if(!l||!BUILD.hotModuleReplacement){const e=e=>(oe.set(s,e),e[r]);if("deckgo-highlight-code_2"===s)return n.e(60).then(n.bind(n,6060)).then(e,$e)}return n(9047)(`./${s}.entry.js`).then((e=>(oe.set(s,e),e[r])),$e)},ce=new Map,me=[],ue=[],de=(e,t)=>n=>{e.push(n),a||(a=!0,t&&4&i.$flags$?ge(fe):i.raf(fe))},he=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){$e(t)}e.length=0},fe=()=>{he(me),he(ue),(a=me.length>0)&&i.raf(fe)},ge=e=>c().then(e),pe=de(ue,!0)},9047:function(e,t,n){var l={"./deckgo-highlight-code_2.entry.js":[6060,60]};function r(e){if(!n.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(l)},r.id=9047,e.exports=r},1977:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(7294),r=n(1883);const s=e=>l.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},l.createElement(r.rU,{to:e.to},e.children));var a=e=>l.createElement("header",{style:{marginBottom:"1.5rem"}},l.createElement(r.rU,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},l.createElement("h3",{style:{display:"inline"}},"austinate.me")),l.createElement("ul",{style:{listStyle:" none",float:"right"}},l.createElement(s,{to:"/about"},"About")),l.createElement("h2",null,e.title));var $=e=>{let{children:t}=e;return l.createElement("footer",{style:{width:"100%",padding:"3rem auto"}},l.createElement("div",{style:{margin:"0.5rem auto",maxWidth:650,padding:"0 15px",display:"flex",justifyContent:"center"}},t,l.createElement("div",{style:{fontSize:"12pt",textAlign:"center"}},"Follow posts ",l.createElement(r.rU,{to:"/rss.xml"},"via RSS"),l.createElement("br",null),"©",(new Date).getFullYear()," Ostap Taran. This website is made with"," ",l.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby.js"))))};var o=e=>l.createElement(l.Fragment,null,l.createElement("div",{className:"site",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"100vh"}},l.createElement("div",{style:{margin:"1rem auto",width:"100%",maxWidth:800,padding:"0 15px"}},l.createElement(a,{title:e.title}),e.children),l.createElement($,null)))},5595:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var l=n(7294),r=n(1883);var s=e=>{let{title:t,description:n,pathname:s,children:a}=e;const{title:$,description:o,image:i,siteUrl:c}=(0,r.K2)("512065377").site.siteMetadata,m={title:t||$,description:n||o,image:""+c+i,url:""+c+(s||"")};return l.createElement(l.Fragment,null,l.createElement("title",null,m.title),l.createElement("meta",{name:"description",content:m.description}),l.createElement("link",{rel:"alternate",type:"application/rss+xml",href:m.url+"/rss.xml",title:m.rssTitle}),a)}},790:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return i},default:function(){return o}});var l=n(7294),r=n(1977),s=n(5595),a=n(8784);var $;!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,a.p)().then((()=>(0,a.b)([["deckgo-highlight-code_2",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],editableLabel:[1,"editable-label"],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"]]],[1,"deckgo-highlight-code-edit",{label:[1]}]]]],$)));var o=e=>{let{data:t}=e;const n=t.markdownRemark;return l.createElement(r.Z,null,l.createElement("div",null,l.createElement("h1",null,n.frontmatter.title),l.createElement("p",{style:{fontSize:"12pt"}},n.frontmatter.date),l.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}})))};const i=e=>{let{data:t}=e;return l.createElement(s.Z,{title:t.markdownRemark.frontmatter.title+" | "+t.site.siteMetadata.title})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-84f8afe39c02f2f12b3b.js.map