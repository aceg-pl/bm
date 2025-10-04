// myShortcutPanel.js - Snapshot copy with close button

// Local copy variable to avoid conflicts with future changes
const buildPanelCopy = function() {

  // Remove existing panel if any
  let old = document.getElementById("shortcutPanel");
  if (old) old.remove();

  // Create panel container
  let panel = document.createElement("div");
  panel.id = "shortcutPanel";
  Object.assign(panel.style, {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    width: "100%",
    background: "#fff",
    borderBottom: "1px solid #ccc",
    padding: "4px 10px",
    zIndex: 99999,
    fontSize: "15px",
    fontFamily: "sans-serif",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "default"
  });

  // Add close button ❌
  let closeBtn = document.createElement("div");
  closeBtn.textContent = "❌";
  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "4px",
    right: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700"
  });
  closeBtn.onclick = () => {
    panel.remove();
    document.body.style.paddingTop = "0";
  };
  panel.appendChild(closeBtn);

  // Define sections
  const sections = [
    ["TECH:", [
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
    ["TRAVEL:", [
      ["WakacyjniPiraci","https://www.wakacyjnipiraci.pl"],
      ["Urlaubspiraten","https://www.urlaubspiraten.de"],
      ["Urlaubspiraten","https://www.urlaubspiraten.at"],
      ["Ferienpiraten","https://www.ferienpiraten.ch"],
      ["PiratinViaggio","https://www.piratinviaggio.it"],
      ["ViajerosPiratas","https://www.viajerospiratas.es"],
      ["VoyagesPirates","https://www.voyagespirates.fr"],
      ["VakantiePiraten","https://www.vakantiepiraten.nl"],
      ["TravelPirates","https://www.holidaypirates.com/us"],
      ["Google Travel","https://www.google.com/travel"],
      ["Skyscanner","https://www.skyscanner.com"],
      ["Expedia","https://www.expedia.com"],
      ["Kayak","https://www.kayak.com"],
      ["Travelocity","https://www.travelocity.com"],
      ["eSky","https://www.esky.pl"],
      ["Fly4Free","https://www.fly4free.com"],
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

  // Build sections
  sections.forEach(([title, links]) => {
    let row = document.createElement("div");
    Object.assign(row.style, {
      marginBottom: "4px",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center"
    });

    // Section header
    let header = document.createElement("div");
    header.textContent = title;
    Object.assign(header.style, { fontWeight: "700", marginBottom: "2px" });
    row.appendChild(header);

    // Links
    links.forEach(([txt, href]) => {
      let a = document.createElement("a");
      a.href = "#";
      a.textContent = txt;
      Object.assign(a.style, {
        margin: "4px",
        padding: "3px 8px",
        background: "#eee",
        borderRadius: "8px",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        color: "#0066c0",
        textDecoration: "none",
        cursor: "pointer",
        fontWeight: "400"
      });
      a.onmouseover = () => a.style.textDecoration = "underline";
      a.onmouseout = () => a.style.textDecoration = "none";

      a.onclick = e => {
        e.preventDefault();
        // Remove old panel before injecting copy
        let old = document.getElementById("shortcutPanel");
        if(old) old.remove();
        // Rebuild panel copy
        buildPanelCopy();
        // Open link after small delay
        setTimeout(()=>window.open(href), 80);
      };
      row.appendChild(a);
    });

    panel.appendChild(row);
  });

  document.body.insertBefore(panel, document.body.firstChild);
  document.body.style.paddingTop = panel.offsetHeight + "px";
  window.onresize = () => { document.body.style.paddingTop = panel.offsetHeight + "px"; };
};

// Immediately run copy when script loaded
buildPanelCopy();
