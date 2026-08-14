(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const asset = (name) => `assets/${name}`;
  const glyphs = {
    industry: "⌁",
    agriculture: "♧",
    people: "◎",
    water: "◌",
    activity: "⌁",
    network: "◇",
    brain: "✦",
    gauge: "◔",
    cloud: "☁",
    shield: "⬡",
    zap: "ϟ",
  };
  const glyph = (name) => `<b class="ui-glyph" aria-hidden="true">${glyphs[name] || "◇"}</b>`;

  const solutions = [
    { number: "01", title: "AI-Driven Real-Time Monitoring", description: "24/7 visibility across pumps, motors and field devices—with AI-led anomaly detection, performance tracking and faster decisions.", image: "solution-monitoring.webp", href: "https://yobytech.com/AI-Driven_Real-Time_Monitoring", tag: "Observe" },
    { number: "02", title: "Custom-Built ERP for Any Industry", description: "Modular, cloud-ready ERP designed around your workflows, assets and reports, with seamless IoT integration and live data flow.", image: "solution-erp.webp", href: "https://yobytech.com/Custom-Built-ERP-for-Any-Industry", tag: "Orchestrate" },
    { number: "03", title: "Water, Energy, Healthcare & Safety", description: "Precision automation for critical systems—from smart water and energy efficiency to hospital assets and industrial safety.", image: "solution-sectors.webp", href: "https://yobytech.com/Water-Energy-Healthcare-%26-Safety-Automation", tag: "Automate" },
    { number: "04", title: "Industry 4.0 Compliance Guarantee", description: "Interoperability, data visibility, cybersecurity and smart-infrastructure readiness engineered into every deployment.", image: "solution-compliance.webp", href: "https://yobytech.com/Industry-Compliance-Guarantee", tag: "Future-proof" },
  ];

  const products = [
    { eyebrow: "Asset intelligence", title: "aTraket", subtitle: "Manage, track & audit assets", description: "Track IT, non-IT, movable, immovable and fixed assets. Build depreciation reports, filter expenses and manage the complete asset lifecycle cost-effectively.", image: "product-atraket.webp", href: "https://yobytech.com/aTraket", accent: "orange" },
    { eyebrow: "Education cloud", title: "MVC 360°", subtitle: "My Virtual Campus 360", description: "An integrated cloud platform with 18+ problem-solving modules and mobile experiences for management, staff, students and parents.", image: "product-mvc.png", href: "https://yobytech.com/mvc360", accent: "cyan" },
    { eyebrow: "Business operations", title: "MBD 360°", subtitle: "Business Automation ERP for SMEs", description: "A customised ERP for retail, manufacturing, services, B2B distribution, education and healthcare—built for transparent daily operations.", image: "product-mbd.png", href: "https://yobytech.com/mbd360", accent: "red" },
  ];

  const capabilities = [
    { icon: "activity", title: "Real-Time Asset Monitoring", text: "Live dashboards, fault alerts and performance intelligence for motors, pumps and industrial assets." },
    { icon: "network", title: "IoT-Powered Integration", text: "Plug-and-play edge devices that retrofit into legacy systems without a costly infrastructure overhaul." },
    { icon: "brain", title: "Predictive Maintenance", text: "Machine-learning signals that anticipate failure, reduce downtime and optimise maintenance cycles." },
    { icon: "gauge", title: "Energy & Cost Optimisation", text: "Real-time consumption analytics, efficiency benchmarks and practical recommendations that lower operating costs." },
    { icon: "cloud", title: "Scalable Architecture", text: "Modular automation that grows from one facility to enterprise-wide deployment without losing visibility." },
    { icon: "shield", title: "Secure by Design", text: "Interoperable, controlled and resilient systems built around Industry 4.0 readiness from day one." },
  ];

  const platforms = [
    { icon: "cloud", title: "Customised ERP", eyebrow: "Unified business operations", description: "Flexible architecture, unified operations, real-time insights, mobile access, robust security and efficient implementation support.", href: "https://yobytech.com/Our-Services", image: "solution-erp.webp", stat: "99.9%", statLabel: "workflow availability" },
    { icon: "network", title: "Salesforce Services", eyebrow: "Connected customer journeys", description: "Implementation, integration, development, training, data migration and Sales Cloud expertise aligned to your business process.", href: "https://yobytech.com/salesforce", image: "product-mbd.png", stat: "360°", statLabel: "customer visibility" },
    { icon: "industry", title: "SAP Administration", eyebrow: "Enterprise systems control", description: "Architecture, implementation, migrations, upgrades, S/4HANA deployment, monitoring, database administration and L2/L3 support.", href: "https://yobytech.com/sap", image: "industry-manufacturing.webp", stat: "24×7", statLabel: "system monitoring" },
    { icon: "shield", title: "24/7 IT Support", eyebrow: "Always-on technology care", description: "Help desk, remote monitoring, incident response, server and network management, backup, recovery and security operations.", href: "https://yobytech.com/Our-Services", image: "solution-monitoring.webp", stat: "&lt;15m", statLabel: "priority response" },
  ];

  const controlSuites = [
    { id: "industry", eyebrow: "Industrial IoT control", title: "Factory Command", description: "Real-time machine health, production telemetry and predictive alerts across the plant floor.", accent: "cyan", stats: [["94.6%", "OEE"], ["42", "Assets online"], ["−18%", "Energy variance"], ["03", "AI alerts"]] },
    { id: "agriculture", eyebrow: "Agriculture automation", title: "Smart Irrigation", description: "Zone-level soil intelligence, automated valves and weather-aware irrigation control.", accent: "green", stats: [["68%", "Soil moisture"], ["12", "Zones active"], ["31%", "Water saved"], ["06:40", "Next cycle"]] },
    { id: "people", eyebrow: "Workforce operations", title: "PeopleOS HRMS", description: "Attendance, payroll, leave and workforce analytics in one transparent operational view.", accent: "orange", stats: [["248", "Team members"], ["96.4%", "Attendance"], ["08", "On leave"], ["100%", "Payroll ready"]] },
    { id: "water", eyebrow: "Water infrastructure", title: "Flow & Pump Control", description: "Live reservoir levels, pressure telemetry, pump sequencing and leakage intelligence.", accent: "blue", stats: [["2.8 ML", "Daily flow"], ["4.2 bar", "Pressure"], ["07", "Pumps online"], ["0.8%", "Loss detected"]] },
  ];

  const industries = [
    { icon: "water", title: "Water Utilities", eyebrow: "Flow intelligence", description: "Smart automation for pumping systems, flow control and leakage detection—bringing continuous visibility to essential water infrastructure.", image: "industry-water.webp" },
    { icon: "industry", title: "Manufacturing", eyebrow: "Factory performance", description: "Connected equipment, asset tracking and production intelligence designed to reduce downtime and create more responsive factories.", image: "industry-manufacturing.webp" },
    { icon: "zap", title: "Energy & Infrastructure", eyebrow: "Infrastructure control", description: "Grid-level monitoring, remote asset control and load-balancing automation for resilient, efficient infrastructure operations.", image: "industry-energy.webp" },
    { icon: "agriculture", title: "Agritech & Irrigation", eyebrow: "Precision agriculture", description: "Automated irrigation and climate-aware control systems that turn field data into precise, resource-efficient action.", image: "solution-sectors.webp" },
  ];

  const resources = [
    { title: "What Is Industry 4.0 and Why Does It Matter?", description: "The technologies driving the fourth industrial revolution—and why organisations need to adapt now.", image: "resource-industry.webp", href: "https://yobytech.com/Fourth-Industrial-Revolution", topic: "Industry 4.0" },
    { title: "Smart Water Management in Indian Cities", description: "How automation and real-time monitoring are redefining urban water systems.", image: "resource-water.webp", href: "https://yobytech.com/Smart-Water-Management", topic: "Water" },
    { title: "AI in Manufacturing: Smarter Machines, Smarter Outputs", description: "How predictive maintenance is improving uptime, safety and productivity.", image: "resource-manufacturing.webp", href: "https://yobytech.com/AI-in-Manufacturing", topic: "Manufacturing" },
    { title: "How Smart Technology Is Preventing Accidents", description: "A closer look at connected systems that reduce human error and make roads safer.", image: "resource-safety.webp", href: "https://yobytech.com/AI-Powered-Road-Safety", topic: "Safety" },
  ];

  const otherServices = ["Custom Software Development", "Web Application Development", "Mobile App Development", "Software Consulting", "Software Testing & Quality Assurance", "Software Maintenance & Support", "Cloud Computing Solutions", "Data Analytics & Business Intelligence", "UI/UX Design", "IT Security Services", "IT Project Management", "IT Infrastructure Services"];

  function populateContent() {
    $("#solution-grid").innerHTML = solutions.map((item, index) => `<div class="reveal" style="--reveal-delay:${index * 80}ms"><a class="solution-card" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.title}, read more"><img src="${asset(item.image)}" alt="" /><div class="solution-card-shade"></div><div class="solution-card-top"><span>${item.number}</span><span>${item.tag}</span></div><div class="solution-card-copy"><h3>${item.title}</h3><p>${item.description}</p><span class="circle-link">→</span></div></a></div>`).join("");
    $("#product-stack").innerHTML = products.map((item, index) => `<div class="reveal" style="--reveal-delay:${index * 70}ms"><article class="product-card product-card--${item.accent}"><div class="product-number">0${index + 1}</div><div class="product-logo-stage"><div class="product-grid-lines"></div><img src="${asset(item.image)}" alt="${item.title} logo" /></div><div class="product-copy"><span>${item.eyebrow}</span><h3>${item.title}</h3><h4>${item.subtitle}</h4><p>${item.description}</p><a href="${item.href}" target="_blank" rel="noreferrer">Explore product ↗</a></div></article></div>`).join("");
    $("#capability-grid").innerHTML = capabilities.map((item, index) => `<div class="reveal" style="--reveal-delay:${(index % 3) * 70}ms"><article class="capability-card"><div class="capability-icon">${glyph(item.icon)}</div><span>0${index + 1}</span><h3>${item.title}</h3><p>${item.text}</p></article></div>`).join("");
    $("#resource-grid").innerHTML = resources.map((item, index) => `<div class="reveal" style="--reveal-delay:${index * 70}ms"><a class="resource-card" href="${item.href}" target="_blank" rel="noreferrer"><div class="resource-image"><img src="${asset(item.image)}" alt="" /><span>${item.topic}</span></div><div class="resource-copy"><h3>${item.title}</h3><p>${item.description}</p><span class="resource-link">Read insight →</span></div></a></div>`).join("");
    $("#footer-services-list").innerHTML = otherServices.map((item, index) => `<a href="https://yobytech.com/Our-Services" target="_blank" rel="noreferrer"><span>${String(index + 1).padStart(2, "0")}</span>${item}</a>`).join("");
  }

  function suiteVisual(suite) {
    if (suite.id === "agriculture") {
      const cells = [72, 58, 81, 64, 47, 76, 69, 54, 84, 62, 74, 57].map((value, index) => `<div style="--cell-level:${value}%"><span>Z${String(index + 1).padStart(2, "0")}</span><strong>${value}%</strong></div>`).join("");
      const valves = ["North orchard", "East field", "Nursery block"].map((name, index) => `<div class="valve-row"><span><i class="${index === 1 ? "is-paused" : ""}"></i>${name}</span><button type="button" aria-label="${name} valve status" class="${index === 1 ? "" : "is-on"}"><i></i></button></div>`).join("");
      return `<div class="suite-visual suite-visual--agriculture"><div class="field-map"><div class="field-map-head"><span>Field zones</span><small>Live moisture index</small></div><div class="field-cells">${cells}</div></div><div class="control-stack"><div class="control-stack-head"><span>Valve automation</span><i>Live</i></div>${valves}<div class="weather-strip">${glyph("cloud")}<span><strong>28°C</strong><small>Rain probability 18%</small></span></div></div></div>`;
    }
    if (suite.id === "people") {
      const bars = [["Operations", 82], ["Engineering", 68], ["Field service", 91], ["Business", 74]].map(([name, value]) => `<div class="team-bar"><span>${name}</span><i><b style="width:${value}%"></b></i><strong>${value}%</strong></div>`).join("");
      return `<div class="suite-visual suite-visual--people"><div class="attendance-card"><div class="attendance-ring"><span><strong>96.4%</strong><small>Present today</small></span></div><div class="attendance-meta"><span>Workforce pulse</span><h4>238 of 248 checked in</h4><p>Attendance is 3.2% above the monthly average.</p></div></div><div class="team-flow"><div class="team-flow-head"><span>Live team status</span><small>Updated now</small></div>${bars}</div><div class="people-events"><span>Today</span><div><i></i>Payroll audit completed <time>09:42</time></div><div><i></i>12 leave requests reviewed <time>09:18</time></div><div><i></i>Shift roster synchronised <time>08:56</time></div></div></div>`;
    }
    if (suite.id === "water") {
      const tanks = [["Reservoir A", 78], ["Tank B", 61], ["Tank C", 86]].map(([name, level]) => `<div class="water-tank"><div><i style="height:${level}%"></i><span>${level}%</span></div><strong>${name}</strong></div>`).join("");
      const pumps = ["Pump 01", "Pump 02", "Pump 04", "Pump 07"].map((name, index) => `<div class="pump-row"><span><i class="${index === 2 ? "is-watch" : ""}"></i>${name}</span><strong>${index === 2 ? "Watch" : "Running"}</strong><small>${["48Hz", "51Hz", "44Hz", "50Hz"][index]}</small></div>`).join("");
      return `<div class="suite-visual suite-visual--water"><div class="tank-field"><div class="pipe pipe--one"></div><div class="pipe pipe--two"></div>${tanks}</div><div class="pump-controls"><div class="control-stack-head"><span>Pump sequencing</span><i>Auto</i></div>${pumps}<div class="flow-wave"><svg viewBox="0 0 260 56" aria-hidden="true"><path d="M0 39 C24 38 24 17 50 19 S82 48 108 34 S140 11 165 24 S202 49 224 27 S246 17 260 20"></path></svg><span>Live flow · 2.8 ML/day</span></div></div></div>`;
    }
    const nodes = [["M-07", "92%"], ["P-12", "88%"], ["L-04", "97%"], ["E-09", "90%"]].map(([name, value], index) => `<div class="machine-node machine-node--${index + 1}"><i></i><span>${name}</span><strong>${value}</strong></div>`).join("");
    const telemetry = [["Motor vibration", "2.1 mm/s", 64], ["Line temperature", "68°C", 78], ["Power factor", "0.96", 91], ["Cycle output", "148/h", 72]].map(([name, value, level]) => `<div class="telemetry-row"><span>${name}<strong>${value}</strong></span><i><b style="width:${level}%"></b></i></div>`).join("");
    return `<div class="suite-visual suite-visual--industry"><div class="machine-network"><div class="machine-orbit machine-orbit--outer"></div><div class="machine-orbit machine-orbit--inner"></div><div class="machine-core">${glyph("industry")}<span>Plant A</span><strong>94.6% OEE</strong></div>${nodes}</div><div class="telemetry-panel"><div class="control-stack-head"><span>Live telemetry</span><i>42 online</i></div>${telemetry}<div class="prediction-chip">${glyph("brain")}<span><strong>AI prediction</strong><small>Maintenance window in 4 days</small></span></div></div></div>`;
  }

  let activeSuite = 0;
  let suiteTimer;
  function renderSuite(index, userInitiated) {
    activeSuite = index;
    const suite = controlSuites[index];
    $("#suite-nav").innerHTML = controlSuites.map((item, i) => `<button type="button" data-suite="${i}" class="${i === index ? "is-active" : ""}" aria-pressed="${i === index}"><span>${glyph(item.id)}</span><i><strong>${item.title}</strong><small>${item.eyebrow}</small></i><b>0${i + 1}</b></button>`).join("");
    $("#suite-mobile-tabs").innerHTML = controlSuites.map((item, i) => `<button type="button" data-suite="${i}" aria-label="Show ${item.title}" class="${i === index ? "is-active" : ""}"><span>0${i + 1}</span></button>`).join("");
    $("#suite-workspace").className = `suite-workspace suite-workspace--${suite.accent}`;
    $("#suite-workspace").innerHTML = `<header class="suite-workspace-head"><div><span>${suite.eyebrow}</span><h3>${suite.title}</h3><p>${suite.description}</p></div><div class="suite-mode">${glyph(suite.id)}<span>Live mode<small>Connected now</small></span></div></header><div class="suite-kpis">${suite.stats.map(([value, label], i) => `<div style="--kpi-delay:${i * 90}ms"><span>${label}</span><strong>${value}</strong><i><b></b></i></div>`).join("")}</div>${suiteVisual(suite)}`;
    const progress = $("#suite-auto-progress");
    progress.innerHTML = "<i></i>";
    $$('[data-suite]').forEach((button) => button.addEventListener("click", () => renderSuite(Number(button.dataset.suite), true)));
    if (userInitiated) restartSuiteTimer();
  }
  function restartSuiteTimer() {
    window.clearInterval(suiteTimer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) suiteTimer = window.setInterval(() => renderSuite((activeSuite + 1) % controlSuites.length, false), 5200);
  }

  let activePlatform = 0;
  function renderPlatforms(index) {
    activePlatform = index;
    const current = platforms[index];
    $("#platform-preview").innerHTML = `<img src="${asset(current.image)}" alt="" /><div class="platform-preview-shade"></div><div class="platform-preview-grid"></div><div class="platform-preview-top"><img src="${asset("yobytech-logo.webp")}" alt="YoByTech" /><span><i></i> Systems online</span></div><div class="platform-preview-copy"><span>${current.eyebrow}</span><h3>${current.title}</h3><div><strong>${current.stat}</strong><small>${current.statLabel}</small></div></div><div class="platform-preview-pulse">${glyph(current.icon)}<span>Live enterprise layer</span><i></i></div>`;
    $("#platform-items").innerHTML = platforms.map((item, i) => `<article class="${i === index ? "is-active" : ""}"><button type="button" data-platform="${i}" aria-expanded="${i === index}"><span class="platform-accordion-icon">${glyph(item.icon)}</span><strong>${item.title}</strong><span class="platform-plus"><i></i><i></i></span></button><div class="platform-answer"><div><p>${item.description}</p><div class="platform-answer-foot"><span><strong>${item.stat}</strong><small>${item.statLabel}</small></span><a href="${item.href}" target="_blank" rel="noreferrer">Know more →</a></div></div></div></article>`).join("");
    $$('[data-platform]').forEach((button) => button.addEventListener("click", () => renderPlatforms(Number(button.dataset.platform))));
  }

  function renderIndustries(index) {
    const current = industries[index];
    $("#industry-tabs").innerHTML = industries.map((item, i) => `<button data-industry="${i}" class="${i === index ? "is-active" : ""}" type="button" role="tab" aria-selected="${i === index}" aria-controls="industry-panel"><span class="industry-tab-index">0${i + 1}</span><span class="industry-tab-icon">${glyph(item.icon)}</span><strong>${item.title}</strong><span aria-hidden="true">→</span></button>`).join("");
    $("#industry-panel").innerHTML = `<img src="${asset(current.image)}" alt="" /><div class="industry-panel-shade"></div><div class="industry-panel-copy"><span>${current.eyebrow}</span><h3>${current.title}</h3><p>${current.description}</p></div><div class="industry-panel-pulse"><span></span> Live intelligence</div>`;
    $$('[data-industry]').forEach((button) => button.addEventListener("click", () => renderIndustries(Number(button.dataset.industry))));
  }

  function initReveal() {
    const nodes = $$(".reveal");
    if (!("IntersectionObserver" in window)) { nodes.forEach((node) => node.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach((node) => observer.observe(node));
  }

  function initLoader() {
    const loader = $("#site-loader");
    const number = $("#loader-progress");
    const bar = $("#loader-progress-bar");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 280 : 1650;
    const started = performance.now();
    document.body.style.overflow = "hidden";
    function frame(now) {
      const progress = Math.min(100, Math.round(((now - started) / duration) * 100));
      number.textContent = String(progress).padStart(2, "0");
      bar.style.width = `${progress}%`;
      if (progress < 100) requestAnimationFrame(frame);
      else {
        loader.classList.add("is-leaving");
        window.setTimeout(() => { loader.hidden = true; document.body.style.overflow = ""; }, reduced ? 100 : 520);
      }
    }
    requestAnimationFrame(frame);
  }

  function initTypewriter() {
    const target = $("#typewriter-text");
    const phrases = ["Run industry.", "Control irrigation.", "Connect people.", "Manage infrastructure."];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { target.textContent = phrases[0]; return; }
    let phraseIndex = 0, cursor = 0, deleting = false;
    function tick() {
      const phrase = phrases[phraseIndex];
      target.textContent = phrase.slice(0, cursor);
      const atEnd = cursor === phrase.length;
      const atStart = cursor === 0;
      const delay = !deleting && atEnd ? 1450 : deleting && atStart ? 260 : deleting ? 42 : 78;
      window.setTimeout(() => {
        if (!deleting && atEnd) deleting = true;
        else if (deleting && atStart) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
        else cursor += deleting ? -1 : 1;
        tick();
      }, delay);
    }
    tick();
  }

  function initNavigation() {
    const nav = $("#site-nav");
    const film = $("#film-hero");
    const back = $("#back-to-top");
    let lastScroll = 0;
    let menuOpen = false;
    function onScroll() {
      const current = window.scrollY;
      const viewport = window.innerHeight;
      const delta = current - lastScroll;
      const filmProgress = Math.min(1, Math.max(0, current / (viewport * 0.98)));
      const storyProgress = Math.min(1, Math.max(0, (filmProgress - 0.2) / 0.38));
      const hudProgress = Math.min(1, Math.max(0, (filmProgress - 0.48) / 0.3));
      film.style.setProperty("--film-inset-x", `${filmProgress * 3.4}vw`);
      film.style.setProperty("--film-inset-y", `${filmProgress * 3.1}vh`);
      film.style.setProperty("--film-radius", `${filmProgress * 28}px`);
      film.style.setProperty("--film-scale", `${1.055 - filmProgress * 0.055}`);
      film.style.setProperty("--film-story-opacity", `${storyProgress}`);
      film.style.setProperty("--film-story-y", `${(1 - storyProgress) * 38}px`);
      film.style.setProperty("--film-hud-opacity", `${hudProgress}`);
      film.style.setProperty("--film-cue-opacity", `${Math.max(0, 1 - filmProgress * 4)}`);
      film.style.setProperty("--film-dim", `${0.14 + storyProgress * 0.7}`);
      film.style.setProperty("--film-brightness", `${1 - storyProgress * 0.42}`);
      if (!menuOpen) {
        if (current <= 8) nav.classList.remove("is-visible");
        else if (delta < -4) nav.classList.add("is-visible");
        else if (delta > 4) nav.classList.remove("is-visible");
      }
      nav.classList.toggle("is-solid", current > viewport * 1.25);
      nav.classList.toggle("is-overlay", current <= viewport * 1.25);
      back.classList.toggle("is-visible", current > viewport * 1.15);
      lastScroll = current;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const toggle = $("#menu-toggle");
    const mobile = $("#mobile-navigation");
    function setMenu(open) {
      menuOpen = open;
      mobile.classList.toggle("is-open", open);
      mobile.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      toggle.classList.toggle("is-open", open);
      nav.classList.toggle("is-visible", open || window.scrollY > 8);
      document.body.style.overflow = open ? "hidden" : "";
    }
    toggle.addEventListener("click", () => setMenu(!menuOpen));
    $$("a", mobile).forEach((link) => link.addEventListener("click", () => setMenu(false)));
    back.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function initVideoModal() {
    const modal = $("#video-modal");
    const video = $("video", modal);
    function open() { modal.setAttribute("aria-hidden", "false"); video.play().catch(() => {}); }
    function close() { modal.setAttribute("aria-hidden", "true"); video.pause(); }
    $("#open-video").addEventListener("click", open);
    $("#close-video").addEventListener("click", close);
    modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
  }

  function initContactForm() {
    $("#contact-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const phone = String(data.get("phone") || "");
      const message = String(data.get("message") || "");
      const subject = encodeURIComponent(`Business enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not shared"}\n\n${message}`);
      $("#form-notice").classList.add("is-visible");
      window.location.href = `mailto:contactus@yobytech.com?subject=${subject}&body=${body}`;
    });
  }

  populateContent();
  renderSuite(0, false);
  restartSuiteTimer();
  renderPlatforms(0);
  renderIndustries(0);
  initReveal();
  initLoader();
  initTypewriter();
  initNavigation();
  initVideoModal();
  initContactForm();
  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  }, { passive: true });
})();
