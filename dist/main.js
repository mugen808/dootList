!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){const r=document.querySelector("#addTaskButton"),n=[];function o(){const e=document.querySelector(".radio").children;for(let t=0;t<e.length;t++)if(e[t].children[0].checked)return e[t].children[1].innerHTML;return null}r.addEventListener("click",()=>{const e={},t=document.querySelector("#item-title"),r=document.querySelector("#item-date"),l=document.querySelector("#new-project"),u=document.querySelector("#projects");for(let t=0;t<u.children.length;t++)u.children[t].selected&&u.children[t].value?e.project=u.children[t].innerHTML:u.children[t].selected&&!u.children[t].value&&l.value&&(e.project=l.value);if(!(t.value&&r.value&&o()))return console.log("Gotcha"),!1;e.title=t.value,e.date=r.value,e.priority=o(),n.push(e),console.log(n)})}]);