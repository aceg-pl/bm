(function(){
  const actions=[
    ["UTILS:",[
      ["⬆️",()=>window.scrollTo(0,0)],
      ["⬇️",()=>window.scrollTo(0,document.body.scrollHeight)],
      ["➕",()=>document.body.style.zoom=(parseFloat(document.body.style.zoom||1)+0.1)],
      ["➖",()=>document.body.style.zoom=(parseFloat(document.body.style.zoom||1)-0.1)],
      ["⏸️",()=>document.querySelectorAll('video').forEach(v=>v.paused?v.play():v.pause())],
      ["🔇",()=>document.querySelectorAll('video').forEach(v=>v.muted=true)],
      ["▶️",()=>document.querySelectorAll('video').forEach(v=>v.play())],
      ["⏹️",()=>document.querySelectorAll('video').forEach(v=>v.pause())],
      ["☯️",()=>{
        const id='dark-mode-filter-style';
        let el=document.getElementById(id);
        const on=localStorage.getItem('dm')==='1';
        if(on){el&&el.remove();localStorage.setItem('dm','0');}
        else{
          if(!el){
            el=document.createElement('style');
            el.id=id;
            el.textContent=`html{filter:invert(1) hue-rotate(180deg);background:#121212!important} img,video,iframe,picture,svg,canvas{filter:invert(1) hue-rotate(180deg)!important}`;
            document.head.appendChild(el);
          }
          localStorage.setItem('dm','1');
        }
      }],
      ["🌫️",()=>document.body.style.filter=document.body.style.filter?'':'blur(3px)'],
      ["🔲",()=>document.body.style.filter=document.body.style.filter?'':'grayscale(1)'],
      ["🫥",()=>document.querySelectorAll('*').forEach(e=>e.style.outline=e.style.outline?'':'1px solid red')],
      ["🔄",()=>document.body.style.filter=document.body.style.filter?'':'invert(1)'],
      ["🔗",()=>document.querySelectorAll('a').forEach(e=>e.style.display=e.style.display==='none'?'':'none')],
      ["🖼️",()=>document.querySelectorAll('img').forEach(e=>e.style.display=e.style.display==='none'?'':'none')],
      ["🎬",()=>document.querySelectorAll('video').forEach(e=>e.style.display=e.style.display==='none'?'':'none')],
      ["🔘",()=>document.querySelectorAll('button').forEach(e=>e.style.display=e.style.display==='none'?'':'none')],
      ["📷",()=>{
        const url=window.location.href;
        navigator.clipboard.writeText(url)
          .then(()=>window.location.href='shortcuts://run-shortcut?name=Download Images')
          .catch(()=>prompt('Copy URL manually then run Shortcut',url));
      }],
      ["📝",()=>{
        const s=new XMLSerializer().serializeToString(document);
        const w=window.open();
        w.document.write('<pre style="white-space:pre-wrap;font-family:monospace">'+s.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&/g,'&amp;')+'</pre>');
        w.document.close();
      }],
      ["©️",()=>{
        try{
          const h=document.documentElement.outerHTML;
          if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(h);
          else{const t=document.createElement('textarea');t.value=h;document.body.appendChild(t);t.select();document.execCommand('copy');document.body.removeChild(t);}
        }catch(e){}
      }],
      ["🛑",()=>document.querySelectorAll('.ad,.ads,#popup,.overlay,.modal').forEach(e=>e.remove())],
      ["🚫",()=>{
        document.querySelectorAll('div,section,aside,video,iframe').forEach(e=>{
          const s=getComputedStyle(e);
          if(s.position==='fixed'||s.position==='sticky'||/video|player|overlay|ad/i.test(e.className)) e.remove();
        });
        ['body','html'].forEach(o=>{
          const n=document.querySelector(o);
          if(n){n.removeAttribute('style');n.className='';n.style.overflow='auto';n.style.position='static';n.style.height='auto';}
        });
      }],
      ["📸",()=>{
        const url=window.location.href;
        navigator.clipboard.writeText(url)
          .then(()=>window.location.href='shortcuts://run-shortcut?name=Screenshot')
          .catch(()=>prompt('Copy URL manually then run Shortcut',url));
      }],
      ["💱",()=>{
        const s=window.getSelection().toString().trim();
        if(!s){alert('Select a number'); return;}
        alert('Inline conversion placeholder for: '+s);
      }],
      ["#️⃣",()=>{
        let t=window.getSelection().toString().trim();
        if(!t) t=prompt('Enter code (ISBN/package/flight/airport)');
        if(!t) return;
        alert('Code handler placeholder for: '+t);
      }],
      ["⛓️",()=>{
        const d=document,h=location.hostname,l=[];
        for(let i=0;i<d.links.length;i++){try{const u=new URL(d.links[i].href);if(u.hostname&&u.hostname!==h) l.push(u.href);}catch(e){}}
        alert('Copied '+l.length+' external links');
      }]
    ]]
  ];

  function buildPanel(s){
    let e=document.getElementById("shortcutPanel"); if(e)e.remove();
    e=document.createElement("div"); e.id="shortcutPanel";
    Object.assign(e.style,{
      position:"fixed", top:"0", left:"0", right:"0", width:"100%", background:"#fff",
      borderBottom:"1px solid #ccc", padding:"2px 8px", zIndex:99999,
      fontSize:"14px", fontFamily:"sans-serif", boxShadow:"0 2px 5px rgba(0,0,0,0.25)",
      display:"flex", flexDirection:"column", alignItems:"flex-start", cursor:"default"
    });
    let c=document.createElement("div"); c.textContent="❌";
    Object.assign(c.style,{position:"absolute",top:"2px",right:"6px",cursor:"pointer",fontSize:"15px",fontWeight:"700"});
    c.onclick=()=>{let p=document.getElementById("shortcutPanel");if(p)p.remove();document.body.style.paddingTop="0"; sessionStorage.removeItem("showShortcutPanel")};
    e.appendChild(c);
    s.forEach(([sec,lnks])=>{
      let a=document.createElement("div");
      Object.assign(a.style,{margin:"2px 0",display:"flex",flexWrap:"wrap",alignItems:"center"});
      let h=document.createElement("div"); h.textContent=sec;
      Object.assign(h.style,{fontWeight:"700",margin:"1px 0",color:"#0066c0"});
      a.appendChild(h);
      lnks.forEach(([t,f])=>{
        let r=document.createElement("a"); r.href="javascript:void(0)"; r.textContent=t;
        Object.assign(r.style,{
          margin:"2px 4px", padding:"2px 6px", background:"#eee",
          borderRadius:"7px", border:"1px solid #ccc",
          boxShadow:"1px 1px 2px rgba(0,0,0,0.2)", color:"#0066c0",
          textDecoration:"none", cursor:"pointer", fontWeight:"400"
        });
        r.onclick=f; r.onmouseover=()=>r.style.textDecoration="underline"; r.onmouseout=()=>r.style.textDecoration="none";
        a.appendChild(r);
      });
      e.appendChild(a);
    });
    document.body.insertBefore(e,document.body.firstChild);
    document.body.style.paddingTop=e.offsetHeight+"px";
    window.onresize=()=>{document.body.style.paddingTop=e.offsetHeight+"px";}
  }

  sessionStorage.setItem("showShortcutPanel","1");
  buildPanel(actions);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden&&sessionStorage.getItem("showShortcutPanel"))buildPanel(actions);});

})();
