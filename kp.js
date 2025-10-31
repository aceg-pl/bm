(function(kd,ad){
if(window.__kP){__kP.remove();__kP=null;return}
let s=0;document.body.style.filter='blur(3px)';
let t=setInterval(()=>{
window.scrollBy({top:600,left:0,behavior:'smooth'});
if(s++>29){clearInterval(t);window.scrollTo({top:0,behavior:'smooth'});
setTimeout(()=>{
document.body.style.filter='';
let trim=t=>{let w=t.split(" ").slice(0,7).join(" ");return w.length>50?w.slice(0,50).replace(/\s+\S*$/,""):w};
let arr=[];
document.querySelectorAll(".productContainer").forEach(e=>{
 let n=e.querySelector(".title")?.textContent.trim()||"No title",
     i=e.querySelector(".productImage img")?.src||"",
     d=e.querySelector(".productDiscountBox span")?.textContent.trim()||"",
     p=(e.querySelector(".productPriceTableTdLargeS")?.textContent.trim()||"–").replace(/^Now:\s*/,""),
     h=e.querySelector("a[href*='product/']")?.getAttribute("href")||"",
     m=h.match(/(\d+)-([A-Z0-9]{10})/),
     pid=m?m[2]:"",
     mid=m?m[1]:3,
     lnk=e.querySelector("a[href*='/dp/']")?.getAttribute("href")||"",
     v=/\d+/.test(d)?parseInt(d):0;
 if(pid)arr.push({pid,n:trim(n),i,d,p,v,lnk,mid});
});
if(!arr.length){alert("No items found.");return}
arr.sort((a,b)=>b.v-a.v);
let P=document.createElement("div");__kP=P;
Object.assign(P.style,{position:"fixed",top:"0",left:"10px",right:"10px",bottom:"10px",background:"white",color:"black",border:"2px solid black",padding:"6px",overflowY:"auto",zIndex:999998,fontSize:"13px",fontFamily:"Arial,sans-serif",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"4px"});
arr.forEach(({pid,n,i,d,p,v,lnk,mid})=>{
 let B=document.createElement("div");B.style.cssText="display:flex;flex-direction:column;border:1px solid #ccc;padding:2px;position:relative;";
 let c=v>=80?"red":v>=70?"brown":v>=60?"orange":v>=50?"blue":"grey",
     I=`<img src="${i}" width="60" height="60" style="cursor:zoom-in;">`,
     T=`<a href="${lnk||'#'}" target="_blank" style="text-decoration:none;color:inherit;font-weight:bold;">${n}</a>`,
     Q=`<span style="margin-top:2px;color:${c};font-weight:bold;">${p} - ${d}</span>`,
     L=`<a href="${kd}${mid}-${pid}" target="_blank" style="position:absolute;bottom:2px;right:2px;font-size:14px;text-decoration:none;">💠</a>`;
 B.innerHTML=`<div style="display:flex;align-items:center;">${I}<div style="display:flex;flex-direction:column;margin-left:4px;">${T}${Q}</div></div>${L}`;
 if(i)B.querySelector("img").onclick=()=>{let o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000000;";let f=document.createElement("img");f.src=i;Object.assign(f.style,{maxWidth:"90%",maxHeight:"90%",boxShadow:"0 0 10px #fff"});o.appendChild(f);o.onclick=()=>o.remove();document.body.appendChild(o)};
 P.appendChild(B);
});
document.body.appendChild(P);
},800)}},400);
})(kd,ad);
