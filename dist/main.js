(()=>{"use strict";const e=(e,t,r)=>{switch(e=Number(e),r=Number(r),t){case"+":return function(e,t){return e+t}(e,r);case"-":return function(e,t){return e-t}(e,r);case"*":return function(e,t){return e*t}(e,r);case"/":return 0==r?null:function(e,t){return e/t}(e,r);default:return}},t=(e,t,...r)=>{const n=document.createElement(e);for(let e in t)n.setAttribute(e,t[e]);return r.forEach((e=>{"string"==typeof e?n.appendChild(document.createTextNode(e)):n.appendChild(e)})),n},r=[{left:[1,"+","?"],right:[1,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:[5,"-","?"],right:[3,"+","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{left:["?","-","5"],right:[2,"*","?"],tiles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}],n=(()=>{const e=document.querySelector(".equation-wrapper"),r=document.querySelector("#tiles"),n=document.querySelector(".buttons-wrapper"),i=document.querySelector("#score"),s=document.querySelector("#time"),a=document.querySelector(".avatar-wrapper");return{renderTiles:(e,t,n)=>{const i=(e,t,n,i,s)=>{const a=document.createElement("div");a.classList.add("tile"),a.textContent=e,a.dataset.index=t,a.style.backgroundImage=`url('../../dist/img/Tile${n}.svg')`,r.appendChild(a),a.addEventListener(i,(e=>{s(e)}))};for(let r=0;r<e.length;r++)i(e[r],r,Math.floor(5*Math.random()+1),t,n)},renderEquation:(r,n)=>{const i=(r,n)=>{const i=t("div",{class:"equation-value"},String(r));"string"==typeof r&&(r.search(/[\+\-*\/]/)||i.classList.add("operator"),"="==r&&i.classList.add("equals"),1==n&&i.classList.add("in-focus")),e.appendChild(i)};for(let e=0;e<r.length;e++)i(r[e],e==n)},updateEquation:(t,r)=>{const n=e.childNodes;t.forEach(((e,t)=>{n[t].textContent!=e&&(n[t].textContent=e),t==r?n[t].classList.add("in-focus"):n[t].classList.remove("in-focus")}))},renderAvatar:e=>{const r=t("img",{class:"avatar",src:"../dist/img/avatar1.png"});a.appendChild(r)},addPizza:e=>{const r=Math.floor(6*Math.random())+1,n=t("img",{class:"pizza",src:`../dist/img/pizza${r}.png`});n.style.bottom=1===e?"136px":136+14*(e-1)+"px",a.appendChild(n)},dropPizza:e=>{a.querySelectorAll(".pizza").forEach(((e,t)=>{const r=Math.floor(13*Math.random());setInterval((()=>{e.style.transform=`rotate(${r}deg) translateY(${136+14*t}px)`}),900-60*t)}))},renderSubmitBtn:e=>{n.querySelector("#submit")&&n.removeChild(n.querySelector("#submit"));const r=t("div",{id:"submit",class:"btn submit"},"Submit");r.addEventListener("click",e),n.appendChild(r)},renderUndoBtn:e=>{n.querySelector("#undo")&&n.removeChild(n.querySelector("#undo"));const r=t("div",{id:"undo",class:"btn undo"},"Undo");r.addEventListener("click",e),n.appendChild(r)},resetGameUI:()=>{e.innerHTML="",r.innerHTML=""},setScore:e=>{i.innerHTML=e},setTime:e=>{const t=Math.floor(e/6e4),r=e%6e4/1e3;s.textContent=`Time: ${t}:${String(r).padStart(2,"0")}`}}})();!function t(i,s,a){const o=((t,r)=>{const{left:n,right:i,tiles:s}=t,a=[...n,"=",...i],o=a.reduce(((e,t,r)=>("?"===t&&e.push(r),e)),[]);let l=0;return setInterval((()=>{r-=1e3}),1e3),{tiles:s,equation:a,getCurrentMissingValue:()=>o[l],getTime:()=>r,updateEquation:e=>{if(l>=o.length)return;const t=(e=>{const t=e.target.dataset.index;return s[t]})(e);a[o[l]]=t,l++},undo:()=>{l<=0||(a[o[l-1]]="?",l--)},checkEquation:()=>{const t=a.slice(0,3),r=a.slice(4,7);return e(...t)===e(...r)}}})(i[s],a);n.resetGameUI();let l=setInterval((()=>{const e=o.getTime();n.setTime(e)}),1e3);n.setScore(100*s),0===s&&n.renderAvatar(),n.renderEquation(o.equation,o.getCurrentMissingValue()),n.renderTiles(o.tiles,"click",(e=>{o.updateEquation(e),n.updateEquation(o.equation,o.getCurrentMissingValue())})),n.renderSubmitBtn((e=>{o.checkEquation(e)&&s<=r.length?(s++,n.addPizza(s),clearInterval(l),t(i,s,o.getTime()+4e3)):(console.log("Womp womp :("),n.dropPizza())})),n.renderUndoBtn((()=>{o.undo(),n.updateEquation(o.equation,o.getCurrentMissingValue())}))}(r,0,6e4)})();