import"./assets/styles-63765268.js";import{a as n}from"./assets/vendor-216cde32.js";document.querySelector("form").addEventListener("submit",function(i){i.preventDefault();const l=document.getElementById("delayInput"),s=document.querySelector('input[name="state"]:checked'),t=parseInt(l.value),o=s?s.value:null;!isNaN(t)&&o!==null&&new Promise((e,m)=>{setTimeout(()=>{o==="fulfilled"?e(t):m(t)},t)}).then(e=>{n.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{n.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map