(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),o=r.n(n),s=r(645),a=r.n(s)()(o());a.push([e.id,"body {\n  margin: 0;\n}\n",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);n&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},a=[],c=0;c<e.length;c++){var u=e[c],i=n.base?u[0]+n.base:u[0],l=s[i]||0,d="".concat(i," ").concat(l);s[i]=l+1;var p=r(d),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var s=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var c=r(s[a]);t[c].references--}for(var u=n(e,o),i=0;i<s.length;i++){var l=r(s[i]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=u}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor({user:e=null,score:t=0}={}){this.user=e,this.score=t}}var t=r(379),n=r.n(t),o=r(795),s=r.n(o),a=r(569),c=r.n(a),u=r(565),i=r.n(u),l=r(216),d=r.n(l),p=r(589),f=r.n(p),v=r(426),h={};h.styleTagTransform=f(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=d(),n()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const[m,y,g,b,w,x,C]=[new e({user:"Dico",score:100}),new e({user:"Peter",score:110}),new e({user:"Mark",score:90}),new e({user:"Tony",score:120}),new e({user:"Roger",score:80}),new e({user:"Steve",score:130}),new e({user:"Stan",score:70})],R=new class{constructor({results:e=[]}={}){this.results=e}addResult(e){return this.results.push(e),this}},T=new class{populate(e,t){const r=document.createElement("tr"),n=document.createElement("td");return n.appendChild(document.createTextNode(`${e.user}: ${e.score}`)),r.appendChild(n),t.appendChild(r),this}populateAll(e,t){return e.forEach((e=>this.populate(e,t))),this}},S=document.querySelector("#result-list");window.onload=()=>{R.addResult(m).addResult(y).addResult(g).addResult(b).addResult(w).addResult(x).addResult(C),T.populateAll(R.results,S)}})()})();