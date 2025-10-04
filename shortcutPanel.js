(function(){
  let id="shortcutPanel", e=document.getElementById(id);
  if(e){e.style.display=e.style.display=="none"?"flex":"none";document.body.style.paddingTop=e.style.display=="none"?"0":e.offsetHeight+"px";return}
  let t=document.createElement("div"); t.id=id;
  Object.assign(t.style,{
    position:"fixed",top:"0",left:"0",right:"0",width:"100%",
    background:"#fff",borderBottom:"1px solid #ccc",padding:"8px 10px",
    zIndex:99999,fontSize:"15px",fontFamily:"sans-serif",fontWeight:700,
    boxShadow:"0 2px 6px rgba(0,0,0,0.25)",display:"flex",
    flexDirection:"column",alignItems:"center",justifyContent:"center",
    cursor:"pointer",flexWrap:"wrap"
  });
  t.onclick=()=>{t.style.display="none";document.body.style.paddingTop="0"};

  // ----- ALL LINKS -----
  let sections=[
    ["💻",[
      ["The Verge","https://www.theverge.com"],
      ["TechCrunch","https://techcrunch.com"],
      ["Wired","https://www.wired.com"],
      ["CNET","https://www.cnet.com"],
      ["Engadget","https://www.engadget.com"],
      ["Ars Technica","https://arstechnica.com"],
      ["MIT Tech Review","https://www.technologyreview.com"],
      ["VentureBeat","https://venturebeat.com"],
      ["Tom's Hardware","https://www.tomshardware.com"],
      ["AnandTech","https://www.anandtech.com"],
      ["GSMArena","https://www.gsmarena.com"],
      ["Hacker News","https://news.ycombinator.com"],
      ["Stack Overflow Blog","https://stackoverflow.blog"],
      ["InfoQ","https://www.infoq.com"]
    ]],
    ["💰",[
      ["WakacyjniPiraci","https://www.wakacyjnipiraci.pl"],
      ["Urlaubspiraten","https://www.urlaubspiraten.de"],
      ["Urlaubspiraten","https://www.urlaubspiraten.at"],
      ["Ferienpiraten","https://www.ferienpiraten.ch"],
      ["PiratinViaggio","https://www.piratinviaggio.it"],
      ["ViajerosPiratas","https://www.viajerospiratas.es"],
      ["VoyagesPirates","https://www.voyagespirates.fr"],
      ["VakantiePiraten","https://www.vakantiepiraten.nl"],
      ["TravelPirates","https://www.holidaypirates.com/us"]
    ]],
    ["🔍",[
      ["Google Travel","https://www.google.com/travel"],
      ["Skyscanner","https://www.skyscanner.com"],
      ["Expedia","https://www.expedia.com"],
      ["Kayak","https://www.kayak.com"],
      ["Travelocity","https://www.travelocity.com"],
      ["eSky","https://www.esky.pl"],
      ["Fly4Free","https://www.fly4free.com"]
    ]],
    ["🎇",[
      ["Secret Flying","https://www.secretflying.com"],
      ["Secret Escapes","https://www.secretescapes.com"],
      ["Voyage‑Privé","https://www.voyage-prive.com"],
      ["Lastminute","https://www.lastminute.com"],
      ["OnTheBeach","https://www.onthebeach.co.uk"],
      ["GetYourGuide","https://www.getyourguide.com"],
      ["Viator","https://www.viator.com"],
      ["Klook","https://www.klook.com"],
      ["Tiqets","https://www.tiqets.com"],
      ["Headout","https://www.headout.com"],
      ["Musement","https://www.musement.com"]
    ]]
  ];

  sections.forEach(([emoji,links],idx)=>{
    let div=document.createElement("div");
    Object.assign(div.style,{textAlign:"center",marginBottom:idx<sections.length-1?"8px":"4px",display:"flex",flexWrap:"wrap",justifyContent:"center"});
    div.appendChild(document.createTextNode(emoji+" "));
    links.forEach(([txt,href],i,a)=>{
      let r=document.createElement("a"); r.href=href; r.target="_self"; r.textContent=txt;
      Object.assign(r.style,{margin:"0 3px",color:"#0066c0",textDecoration:"none",cursor:"pointer",fontWeight:700});
      r.onmouseover=()=>r.style.textDecoration="underline"; r.onmouseout=()=>r.style.textDecoration="none";
      div.appendChild(r); if(i<a.length-1)div.appendChild(document.createTextNode(" • "));
    });
    t.appendChild(div);
  });

  document.body.insertBefore(t,document.body.firstChild);
  document.body.style.paddingTop=t.offsetHeight+"px";
  window.onresize=()=>{document.body.style.paddingTop=t.offsetHeight+"px"};
})();
