// ==========================================
// OPTIAI GOVERNANCE PLATFORM - MOCK DATABASE
// ==========================================

const STATE = {
  globalSettings: {
    monthlyBudget: 25000,
    defaultEmployeeLimit: 250,
    smartRoutingEnabled: true,
    routingBias: 'balanced', // cost, balanced, quality
    scanApiKeys: true,
    scanCodeLeaks: true
  },
  
  employees: [
    {
      id: "emp-1",
      name: "Alex Brewer",
      role: "Lead Backend Engineer",
      team: "Backend",
      requests: 14204,
      spend: 284.10,
      savings: 142.05,
      securityStatus: "alerts",
      securityAlertsCount: 2,
      lastActivity: "2 mins ago",
      modelUsage: { gpt: 30, claude: 20, gemini: 40, llama: 10, other: 0 },
      insights: [
        "82% of code formatting requests successfully routed to Gemini Flash, saving $42.10.",
        "Detected 2 attempts to upload private SSH/API keys. Blocked by governance scanner."
      ]
    },
    {
      id: "emp-2",
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      team: "Frontend",
      requests: 9812,
      spend: 182.40,
      savings: 96.20,
      securityStatus: "clean",
      securityAlertsCount: 0,
      lastActivity: "15 mins ago",
      modelUsage: { gpt: 45, claude: 35, gemini: 15, llama: 5, other: 0 },
      insights: [
        "Consistently uses Claude 3.5 Sonnet for interface logic planning, matching high-complexity routing rules.",
        "Zero governance violations recorded this quarter."
      ]
    },
    {
      id: "emp-3",
      name: "Marcus Vance",
      role: "DevOps Architect",
      team: "DevOps",
      requests: 18240,
      spend: 420.50,
      savings: 215.10,
      securityStatus: "alerts",
      securityAlertsCount: 1,
      lastActivity: "Just now",
      modelUsage: { gpt: 15, claude: 25, gemini: 50, llama: 10, other: 0 },
      insights: [
        "High volume of shell script parsing routed automatically to Llama 3 70B, reducing costs by 52%.",
        "1 warning generated: Attempted upload of internal Docker Compose config containing unencrypted database credentials."
      ]
    },
    {
      id: "emp-4",
      name: "Emily Watson",
      role: "QA Automation Engineer",
      team: "QA",
      requests: 22105,
      spend: 110.80,
      savings: 165.40,
      securityStatus: "clean",
      securityAlertsCount: 0,
      lastActivity: "1 hour ago",
      modelUsage: { gpt: 10, claude: 10, gemini: 70, llama: 10, other: 0 },
      insights: [
        "Test script generation highly optimized using low-cost models. Saved $165.40 via Gemini Flash integration.",
        "Compliance rating: 100% clean."
      ]
    },
    {
      id: "emp-5",
      name: "Devon Carter",
      role: "Junior Backend Engineer",
      team: "Backend",
      requests: 6412,
      spend: 145.20,
      savings: 42.10,
      securityStatus: "clean",
      securityAlertsCount: 0,
      lastActivity: "3 hours ago",
      modelUsage: { gpt: 40, claude: 30, gemini: 20, llama: 10, other: 0 },
      insights: [
        "Could save an additional $24.00/month by routing code comments tasks from GPT-4o to Gemini Flash.",
        "Compliance rating: 100% clean."
      ]
    },
    {
      id: "emp-6",
      name: "Elena Rostova",
      role: "Security Engineer",
      team: "DevOps",
      requests: 4120,
      spend: 92.50,
      savings: 38.90,
      securityStatus: "clean",
      securityAlertsCount: 0,
      lastActivity: "24 mins ago",
      modelUsage: { gpt: 20, claude: 50, gemini: 20, llama: 10, other: 0 },
      insights: [
        "Uses Claude Sonnet exclusively for threat modeling analysis. Quality settings approved for compliance validations.",
        "Compliance rating: 100% clean."
      ]
    }
  ],

  teams: [
    { name: "Backend Team", lead: "Alex Brewer", members: 8, spend: 4280.50, budget: 6000.00, accuracy: "95.2%", activeAlerts: 2 },
    { name: "Frontend Team", lead: "Sarah Chen", members: 6, spend: 3105.20, budget: 4500.00, accuracy: "93.4%", activeAlerts: 0 },
    { name: "QA Team", lead: "Emily Watson", members: 4, spend: 1820.10, budget: 3000.00, accuracy: "96.1%", activeAlerts: 0 },
    { name: "DevOps Team", lead: "Marcus Vance", members: 5, spend: 3274.20, budget: 5000.00, accuracy: "92.8%", activeAlerts: 1 }
  ],

  securityAlerts: [
    {
      id: "SEC-108",
      timestamp: "2026-06-03 21:12:08",
      employee: "Alex Brewer",
      category: "API Key Exposure",
      snippet: "const AWS_SECRET_ACCESS_KEY = 'AKIAIOSFODNN7EXAMPLE...';",
      severity: "critical",
      status: "blocked",
      model: "GPT-4o API"
    },
    {
      id: "SEC-107",
      timestamp: "2026-06-03 20:44:15",
      employee: "Marcus Vance",
      category: "Password Shared",
      snippet: "postgres://root:AdminP@ss123@prod-db.internal:5432/main",
      severity: "critical",
      status: "blocked",
      model: "Claude 3.5 Sonnet"
    },
    {
      id: "SEC-106",
      timestamp: "2026-06-03 19:15:30",
      employee: "Alex Brewer",
      category: "Confidential Code",
      snippet: "// Proprietary algorithmic trading core module\nfunction calculateArbitrageProfit()...",
      severity: "high",
      status: "flagged",
      model: "Gemini 1.5 Pro"
    },
    {
      id: "SEC-105",
      timestamp: "2026-06-03 15:30:22",
      employee: "Sarah Chen",
      category: "Sensitive Data Exposure",
      snippet: "Comparing user billing database (emails, home addresses, phone numbers)...",
      severity: "medium",
      status: "warned",
      model: "GPT-4o API"
    },
    {
      id: "SEC-104",
      timestamp: "2026-06-02 11:22:10",
      employee: "Devon Carter",
      category: "Internal Documents",
      snippet: "Reading context from 'AcmeCorp_Q2_Financial_Report_Confidential.pdf'...",
      severity: "medium",
      status: "allowed",
      model: "Claude 3.5 Sonnet"
    }
  ],

  savingOpportunities: [
    { title: "Variable Rename Tasks", task: "Code Refactoring", savings: 2400.00, count: 24200, icon: "code" },
    { title: "Commit Message Generation", task: "Git Integrations", savings: 1850.00, count: 18500, icon: "commit" },
    { title: "Documentation Requests", task: "Doc Generation", savings: 1420.00, count: 9470, icon: "doc" },
    { title: "Code Formatting Tasks", task: "Linting & Formats", savings: 1150.00, count: 11500, icon: "format" }
  ],

  modelsReference: [
    { name: "GPT-4o (OpenAI)", type: "Premium", inputCost: 5.00, outputCost: 15.00, latency: 450, enabled: true },
    { name: "Claude 3.5 Sonnet (Anthropic)", type: "Premium", inputCost: 3.00, outputCost: 15.00, latency: 520, enabled: true },
    { name: "Gemini 1.5 Pro (Google)", type: "Premium", inputCost: 3.50, outputCost: 10.50, latency: 410, enabled: true },
    { name: "Gemini 1.5 Flash (Google)", type: "Cheaper", inputCost: 0.35, outputCost: 1.05, latency: 180, enabled: true },
    { name: "Llama 3 70B (Meta/Hosted)", type: "Cheaper", inputCost: 0.59, outputCost: 0.79, latency: 220, enabled: true }
  ],

  taskCategories: [
    { category: "Code Generation", spend: 4820.00, pct: 38.6 },
    { category: "Bug Fixing", spend: 2840.00, pct: 22.8 },
    { category: "Testing", spend: 1980.00, pct: 15.9 },
    { category: "Documentation", spend: 1250.00, pct: 10.0 },
    { category: "Architecture Design", spend: 1140.00, pct: 9.1 },
    { category: "Security Reviews", spend: 450.00, pct: 3.6 }
  ],

  routingStats: {
    accuracy: 94.2,
    cheapSuccess: 88.7,
    autoEscalations: 5.8,
    responseTime: 340,
    costSaved: 6820,
    recAccuracy: 96.5
  },

  historicalSavings: [
    { date: "May 25", actual: 320, noRoute: 480 },
    { date: "May 26", actual: 350, noRoute: 530 },
    { date: "May 27", actual: 410, noRoute: 640 },
    { date: "May 28", actual: 390, noRoute: 600 },
    { date: "May 29", actual: 420, noRoute: 670 },
    { date: "May 30", actual: 380, noRoute: 590 },
    { date: "May 31", actual: 450, noRoute: 710 },
    { date: "Jun 01", actual: 430, noRoute: 660 },
    { date: "Jun 02", actual: 410, noRoute: 620 },
    { date: "Jun 03", actual: 428, noRoute: 680 }
  ]
};

// ==========================================
// INITIALIZATION AND VIEW NAVIGATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initDashboard();
  initEmployees();
  initTeams();
  initModels();
  initSecurity();
  initAnalytics();
  initRouting();
  initSettings();
  initNotifications();
  initGlobalSearch();

  // Watch for window resize to redraw charts responsively
  window.addEventListener("resize", () => {
    const activeView = document.querySelector(".view-section.active").id;
    if (activeView === "view-dashboard") {
      drawSavingsTrendChart();
      drawModelUsageDoughnut();
    } else if (activeView === "view-analytics") {
      drawAnalyticsCharts();
    } else if (activeView === "view-routing") {
      drawRoutingCharts();
    } else if (activeView === "view-teams") {
      drawTeamsTimelineChart();
    }
  });
});

function initNavigation() {
  const navItems = document.querySelectorAll("#sidebarNav .nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      const targetView = item.getAttribute("data-view");
      switchView(targetView);
    });
  });
}

function switchView(viewName) {
  const sections = document.querySelectorAll(".view-section");
  sections.forEach(sec => sec.classList.remove("active"));
  
  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) {
    targetSection.classList.add("active");
    
    // Perform specialized chart rendering on view enter
    if (viewName === 'dashboard') {
      setTimeout(() => {
        drawSavingsTrendChart();
        drawModelUsageDoughnut();
      }, 50);
    } else if (viewName === 'analytics') {
      setTimeout(() => {
        drawAnalyticsCharts();
      }, 50);
    } else if (viewName === 'routing') {
      setTimeout(() => {
        drawRoutingCharts();
      }, 50);
    } else if (viewName === 'teams') {
      setTimeout(() => {
        drawTeamsTimelineChart();
      }, 50);
    }
  }
}

// ==========================================
// VIEW 1: MAIN DASHBOARD VIEW
// ==========================================

function initDashboard() {
  // Setup Opportunity list
  const oppList = document.getElementById("savingOpportunities");
  oppList.innerHTML = "";
  STATE.savingOpportunities.forEach(opp => {
    oppList.innerHTML += `
      <div class="opportunity-card">
        <div class="opp-details">
          <span class="opp-title">${opp.title}</span>
          <span class="opp-sub">${opp.task} • ${opp.count.toLocaleString()} cases</span>
        </div>
        <div class="opp-savings">
          <span class="opp-saving-val">$${opp.savings.toFixed(2)}</span>
          <div class="opp-saving-label">EST. SAVINGS / MO</div>
        </div>
      </div>
    `;
  });

  // Setup Task categories progress bars
  const taskList = document.getElementById("taskCategoriesList");
  taskList.innerHTML = "";
  const maxSpend = Math.max(...STATE.taskCategories.map(t => t.spend));
  
  STATE.taskCategories.forEach((tc, idx) => {
    // Dynamic color selection
    const colors = ["var(--google-blue)", "var(--google-green)", "var(--google-yellow)", "var(--google-red)", "#80868b", "#3c4043"];
    const percentWidth = (tc.spend / maxSpend) * 100;
    taskList.innerHTML += `
      <div class="task-bar-item">
        <div class="task-bar-header">
          <span>${tc.category}</span>
          <span>$${tc.spend.toLocaleString()} (${tc.pct}%)</span>
        </div>
        <div class="task-bar-track">
          <div class="task-bar-fill" style="width: ${percentWidth}%; background-color: ${colors[idx % colors.length]};"></div>
        </div>
      </div>
    `;
  });

  // Setup Quick Team Grid
  const teamGrid = document.getElementById("dashboardTeamGrid");
  teamGrid.innerHTML = "";
  STATE.teams.slice(0, 4).forEach(team => {
    teamGrid.innerHTML += `
      <div class="team-card" style="padding: 12px; border-radius: var(--radius-s);">
        <div style="font-size:12px; font-weight:600; margin-bottom:4px; display:flex; justify-content:space-between;">
          <span>${team.name}</span>
          <span style="color:var(--google-blue);">$${team.spend.toLocaleString()}</span>
        </div>
        <div style="height:4px; background:var(--grey-200); border-radius:9px; overflow:hidden;">
          <div style="height:100%; background:var(--google-blue); width:${(team.spend/team.budget)*100}%;"></div>
        </div>
      </div>
    `;
  });

  // Setup security critical alerts on dashboard
  const securitySummary = document.getElementById("dashboardAlertsSummary");
  securitySummary.innerHTML = "";
  const criticalAlerts = STATE.securityAlerts.filter(a => a.severity === 'critical' || a.severity === 'high').slice(0, 3);
  criticalAlerts.forEach(a => {
    securitySummary.innerHTML += `
      <div class="opportunity-card" style="border-left: 3px solid ${a.severity === 'critical' ? 'var(--google-red)' : 'var(--google-yellow)'}; cursor:pointer;" onclick="switchView('security')">
        <div class="opp-details">
          <span class="opp-title">${a.category}</span>
          <span class="opp-sub">${a.employee} • ${a.timestamp}</span>
        </div>
        <div>
          <span class="badge ${a.severity}">${a.severity}</span>
        </div>
      </div>
    `;
  });

  // Button actions
  document.getElementById("routeTestBtn").addEventListener("click", () => {
    alert("Triggered real-time cost scanning on the active query router. Router is performing optimally at 94.2% accuracy.");
  });

  // Render initial charts
  setTimeout(() => {
    drawSavingsTrendChart();
    drawModelUsageDoughnut();
  }, 100);
}

// ------------------------------------------
// CHARTING ENGINE: SAVINGS TREND (SVG)
// ------------------------------------------
function drawSavingsTrendChart() {
  const container = document.getElementById("impactChartContainer");
  if (!container) return;
  
  const width = container.clientWidth;
  const height = container.clientHeight;
  container.innerHTML = ""; // Clear existing

  const paddingLeft = 60;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;
  
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  
  const dates = STATE.historicalSavings.map(d => d.date);
  const actualVals = STATE.historicalSavings.map(d => d.actual);
  const noRouteVals = STATE.historicalSavings.map(d => d.noRoute);
  
  const maxVal = Math.max(...noRouteVals) * 1.1; // 10% headroom

  // Calculate points
  const pointsActual = actualVals.map((val, idx) => {
    const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
    return { x, y, val, date: dates[idx] };
  });

  const pointsNoRoute = noRouteVals.map((val, idx) => {
    const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
    return { x, y, val, date: dates[idx] };
  });

  // Build SVG Content
  let svgContent = `<svg width="${width}" height="${height}" style="overflow:visible;">`;

  // Draw Grid Lines & Y-axis labels
  const gridLinesCount = 5;
  for (let i = 0; i <= gridLinesCount; i++) {
    const y = paddingTop + (i / gridLinesCount) * chartHeight;
    const value = maxVal - (i / gridLinesCount) * maxVal;
    
    svgContent += `
      <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--grey-200)" stroke-dasharray="3,3" />
      <text x="${paddingLeft - 10}" y="${y + 4}" font-size="10" fill="var(--text-secondary)" text-anchor="end">$${Math.round(value)}</text>
    `;
  }

  // Draw X-axis labels
  dates.forEach((date, idx) => {
    const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
    svgContent += `
      <text x="${x}" y="${height - paddingBottom + 20}" font-size="10" fill="var(--text-secondary)" text-anchor="middle">${date}</text>
    `;
  });

  // Helper function to build SVG path
  function buildPath(points) {
    return points.reduce((pathStr, p, idx) => {
      return pathStr + `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`;
    }, "");
  }

  // Build Area Path under Actual line
  let actualAreaPath = buildPath(pointsActual);
  actualAreaPath += ` L ${pointsActual[pointsActual.length - 1].x} ${paddingTop + chartHeight} L ${pointsActual[0].x} ${paddingTop + chartHeight} Z`;

  // Draw Actual Cost Area
  svgContent += `<path d="${actualAreaPath}" fill="var(--google-blue-bg)" opacity="0.4" />`;

  // Draw Standalone Cost Path (Dashed)
  const pathNoRoute = buildPath(pointsNoRoute);
  svgContent += `<path d="${pathNoRoute}" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-dasharray="5,5" />`;

  // Draw Actual Cost Path (Solid Blue)
  const pathActual = buildPath(pointsActual);
  svgContent += `<path d="${pathActual}" fill="none" stroke="var(--google-blue)" stroke-width="3" />`;

  // Draw data interaction circles & hover triggers
  pointsActual.forEach((p, idx) => {
    svgContent += `
      <circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--google-blue)" stroke="#fff" stroke-width="1.5" />
      <circle cx="${pointsNoRoute[idx].x}" cy="${pointsNoRoute[idx].y}" r="4" fill="var(--text-muted)" stroke="#fff" stroke-width="1.5" />
      
      <!-- Invisible interaction area -->
      <rect x="${p.x - (chartWidth / dates.length)/2}" y="${paddingTop}" width="${chartWidth / dates.length}" height="${chartHeight}" 
            fill="transparent" style="cursor:pointer;" 
            onmouseover="showTrendTooltip(event, '${p.date}', ${p.val}, ${pointsNoRoute[idx].val})" 
            onmouseout="hideTooltip()"/>
    `;
  });

  svgContent += `</svg>`;
  container.innerHTML = svgContent;
}

function showTrendTooltip(e, date, actual, noRoute) {
  const tooltip = document.getElementById("globalChartTooltip");
  const savings = noRoute - actual;
  tooltip.innerHTML = `
    <strong>${date}</strong><br/>
    Actual spend: <span style="color:var(--google-blue); font-weight:600;">$${actual.toFixed(2)}</span><br/>
    Unoptimized: <span>$${noRoute.toFixed(2)}</span><br/>
    Saved: <span style="color:var(--google-green); font-weight:600;">$${savings.toFixed(2)} (${Math.round((savings/noRoute)*100)}%)</span>
  `;
  tooltip.style.left = (e.pageX + 15) + "px";
  tooltip.style.top = (e.pageY - 15) + "px";
  tooltip.classList.add("active");
}

function hideTooltip() {
  document.getElementById("globalChartTooltip").classList.remove("active");
}

// ------------------------------------------
// CHARTING ENGINE: MODEL DOUGHNUT (SVG)
// ------------------------------------------
function drawModelUsageDoughnut() {
  const container = document.getElementById("modelUsageDoughnutContainer");
  const legendContainer = document.getElementById("modelUsageLegend");
  if (!container || !legendContainer) return;

  container.innerHTML = "";
  legendContainer.innerHTML = "";
  
  const width = 160;
  const height = 160;
  const radius = Math.min(width, height) / 2;
  const innerRadius = radius - 20;

  // Aggregate model metrics from all employee distributions
  const totals = { gpt: 0, claude: 0, gemini: 0, llama: 0, other: 0 };
  STATE.employees.forEach(emp => {
    Object.keys(totals).forEach(k => {
      totals[k] += emp.modelUsage[k] * (emp.spend / 100);
    });
  });

  const sum = Object.values(totals).reduce((a, b) => a + b, 0);
  const data = [
    { label: "GPT Models", key: "gpt", value: totals.gpt, color: "var(--google-red)", pct: (totals.gpt / sum) * 100 },
    { label: "Claude Models", key: "claude", value: totals.claude, color: "var(--google-yellow)", pct: (totals.claude / sum) * 100 },
    { label: "Gemini Models", key: "gemini", value: totals.gemini, color: "var(--google-blue)", pct: (totals.gemini / sum) * 100 },
    { label: "Llama Models", key: "llama", value: totals.llama, color: "var(--google-green)", pct: (totals.llama / sum) * 100 },
    { label: "Other Models", key: "other", value: totals.other, color: "var(--text-muted)", pct: (totals.other / sum) * 100 }
  ].filter(d => d.value > 0);

  let currentAngle = 0;
  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
  svgContent += `<g transform="translate(${width/2}, ${height/2})">`;

  data.forEach((d, idx) => {
    const angle = (d.pct / 100) * 360;
    
    // Polar coordinates mapping
    function polarToCartesian(centerX, centerY, r, angleInDegrees) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + (r * Math.cos(angleInRadians)),
        y: centerY + (r * Math.sin(angleInRadians))
      };
    }

    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startOuter = polarToCartesian(0, 0, radius, startAngle);
    const endOuter = polarToCartesian(0, 0, radius, endAngle);
    const startInner = polarToCartesian(0, 0, innerRadius, startAngle);
    const endInner = polarToCartesian(0, 0, innerRadius, endAngle);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
      "Z"
    ].join(" ");

    svgContent += `
      <path d="${pathData}" fill="${d.color}" stroke="#fff" stroke-width="1.5" style="cursor:pointer;" 
            onmouseover="showDoughnutTooltip(event, '${d.label}', '${d.pct.toFixed(1)}%', '$${d.value.toFixed(2)}')" 
            onmouseout="hideTooltip()"/>
    `;

    // Populate legend side pane
    legendContainer.innerHTML += `
      <div class="legend-item" onmouseover="highlightDoughnut(this, ${idx})" onmouseout="clearHighlight()">
        <div class="legend-label-group">
          <span class="legend-color-dot" style="background-color: ${d.color};"></span>
          <span>${d.label}</span>
        </div>
        <span class="legend-val">${d.pct.toFixed(0)}%</span>
      </div>
    `;
  });

  // Center summary texts
  svgContent += `
    <circle cx="0" cy="0" r="${innerRadius - 2}" fill="#fff" />
    <text x="0" y="-5" font-family="'Outfit', sans-serif;" font-size="12" fill="var(--text-secondary)" text-anchor="middle">Total cost</text>
    <text x="0" y="15" font-family="'Outfit', sans-serif;" font-size="16" font-weight="700" fill="var(--text-primary)" text-anchor="middle">$${sum.toFixed(0)}</text>
  `;

  svgContent += `</g></svg>`;
  container.innerHTML = svgContent;
}

function showDoughnutTooltip(e, label, pct, val) {
  const tooltip = document.getElementById("globalChartTooltip");
  tooltip.innerHTML = `
    <strong>${label}</strong><br/>
    Share: <strong>${pct}</strong><br/>
    Total spend: <strong>${val}</strong>
  `;
  tooltip.style.left = (e.pageX + 15) + "px";
  tooltip.style.top = (e.pageY - 15) + "px";
  tooltip.classList.add("active");
}

function highlightDoughnut(el, index) {
  const paths = document.querySelectorAll("#modelUsageDoughnutContainer path");
  paths.forEach((p, idx) => {
    if (idx === index) {
      p.setAttribute("transform", "scale(1.05)");
      p.style.opacity = "1";
    } else {
      p.style.opacity = "0.4";
    }
  });
}

function clearHighlight() {
  const paths = document.querySelectorAll("#modelUsageDoughnutContainer path");
  paths.forEach(p => {
    p.removeAttribute("transform");
    p.style.opacity = "1";
  });
}


// ==========================================
// VIEW 2: EMPLOYEE REGISTRY
// ==========================================

function initEmployees() {
  renderEmployeeTable(STATE.employees);

  // Search functionality
  const filterInput = document.getElementById("employeeFilterInput");
  filterInput.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = STATE.employees.filter(emp => 
      emp.name.toLowerCase().includes(val) || 
      emp.team.toLowerCase().includes(val) ||
      emp.role.toLowerCase().includes(val)
    );
    renderEmployeeTable(filtered);
  });

  // Sidebar detail panel drawers bind
  document.getElementById("profileDrawerCloseBtn").addEventListener("click", closeProfileDrawer);
  document.getElementById("profileDrawerOverlay").addEventListener("click", (e) => {
    if (e.target.id === 'profileDrawerOverlay') closeProfileDrawer();
  });

  // Onboard button trigger
  document.getElementById("addEmpBtn").addEventListener("click", () => {
    const name = prompt("Enter new employee name:");
    if (!name) return;
    const team = prompt("Enter team assignment (Backend, Frontend, QA, DevOps):", "Backend");
    const role = prompt("Enter employee role title:", "Software Engineer");
    
    if (name && team && role) {
      const newEmp = {
        id: `emp-${STATE.employees.length + 1}`,
        name,
        role,
        team,
        requests: 0,
        spend: 0,
        savings: 0,
        securityStatus: "clean",
        securityAlertsCount: 0,
        lastActivity: "Just joined",
        modelUsage: { gpt: 20, claude: 20, gemini: 60, llama: 0, other: 0 },
        insights: ["New onboarding. Initial cost routing configurations configured default."]
      };
      STATE.employees.push(newEmp);
      renderEmployeeTable(STATE.employees);
      initDashboard(); // refresh stats
    }
  });
}

function renderEmployeeTable(list) {
  const tableBody = document.getElementById("employeeTableBody");
  tableBody.innerHTML = "";

  if (list.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 40px; color:var(--text-muted);">No employees match this filter constraint.</td></tr>`;
    return;
  }

  list.forEach(emp => {
    const initial = emp.name.split(" ").map(n => n[0]).join("");
    
    // Select security badge representation
    let badgeHtml = "";
    if (emp.securityStatus === 'clean') {
      badgeHtml = `<span class="badge clean">Clean</span>`;
    } else {
      badgeHtml = `<span class="badge critical">${emp.securityAlertsCount} Alerts</span>`;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="employee-cell">
          <div class="avatar">${initial}</div>
          <div class="employee-cell-info">
            <span class="emp-name">${emp.name}</span>
            <span class="emp-role">${emp.role}</span>
          </div>
        </div>
      </td>
      <td>${emp.role}</td>
      <td><span class="badge active-status">${emp.team}</span></td>
      <td><strong>${emp.requests.toLocaleString()}</strong></td>
      <td style="font-weight:600;">$${emp.spend.toFixed(2)}</td>
      <td style="color:var(--google-green); font-weight:600;">$${emp.savings.toFixed(2)}</td>
      <td>${badgeHtml}</td>
      <td style="color:var(--text-secondary);">${emp.lastActivity}</td>
    `;
    
    // Row click opens the Employee Profile View slider
    row.addEventListener("click", () => openProfileDrawer(emp.id));
    tableBody.appendChild(row);
  });
}

function openProfileDrawer(empId) {
  const emp = STATE.employees.find(e => e.id === empId);
  if (!emp) return;

  const initial = emp.name.split(" ").map(n => n[0]).join("");
  document.getElementById("drawerAvatar").innerText = initial;
  document.getElementById("drawerEmpName").innerText = emp.name;
  document.getElementById("drawerEmpRole").innerText = `${emp.role} • ${emp.team} Team`;
  document.getElementById("drawerRequests").innerText = emp.requests.toLocaleString();
  document.getElementById("drawerSpend").innerText = `$${emp.spend.toFixed(2)}`;
  document.getElementById("drawerSavings").innerText = `$${emp.savings.toFixed(2)}`;

  // Alerts section
  const alertListContainer = document.getElementById("drawerAlertList");
  alertListContainer.innerHTML = "";
  const alerts = STATE.securityAlerts.filter(a => a.employee === emp.name);
  if (alerts.length === 0) {
    alertListContainer.innerHTML = `<p style="font-size:12px; color:var(--text-secondary);">No governance incidents or data leaks recorded.</p>`;
  } else {
    alerts.forEach(a => {
      alertListContainer.innerHTML += `
        <div class="drawer-alert-item">
          <div class="drawer-alert-icon">⚠️</div>
          <div>
            <div class="drawer-alert-text"><strong>${a.category} (${a.severity.toUpperCase()})</strong></div>
            <div style="font-size:10px; color:var(--text-muted); margin-bottom:4px;">Endpoint: ${a.model} • ${a.timestamp}</div>
            <code style="display:block; font-size:10px; background:rgba(0,0,0,0.05); padding:4px; border-radius:4px; overflow-x:auto;">${a.snippet}</code>
          </div>
        </div>
      `;
    });
  }

  // Model breakdown visual (Bar segments inside drawer)
  const modelChartContainer = document.getElementById("drawerModelChartContainer");
  modelChartContainer.innerHTML = "";
  
  let chartHtml = `<div style="width:100%; display:flex; flex-direction:column; gap:8px;">`;
  const mColors = { gpt: "var(--google-red)", claude: "var(--google-yellow)", gemini: "var(--google-blue)", llama: "var(--google-green)", other: "var(--text-muted)" };
  
  Object.keys(emp.modelUsage).forEach(key => {
    const usagePct = emp.modelUsage[key];
    if (usagePct > 0) {
      chartHtml += `
        <div style="font-size:11px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
            <span style="text-transform:uppercase; font-weight:600;">${key}</span>
            <span>${usagePct}%</span>
          </div>
          <div style="height:6px; background:var(--grey-200); border-radius:4px; overflow:hidden;">
            <div style="height:100%; background:${mColors[key]}; width:${usagePct}%"></div>
          </div>
        </div>
      `;
    }
  });
  chartHtml += `</div>`;
  modelChartContainer.innerHTML = chartHtml;

  // Insights
  const insightsList = document.getElementById("drawerInsightsList");
  insightsList.innerHTML = "";
  emp.insights.forEach(ins => {
    insightsList.innerHTML += `
      <div class="opportunity-card" style="background:#fff; border-color:var(--grey-200);">
        <div class="opp-details">
          <span style="font-size:12px; line-height:1.4;">${ins}</span>
        </div>
      </div>
    `;
  });

  // Open the drawer
  const overlay = document.getElementById("profileDrawerOverlay");
  overlay.classList.add("active");
}

function closeProfileDrawer() {
  document.getElementById("profileDrawerOverlay").classList.remove("active");
}


// ==========================================
// VIEW 3: TEAMS DETAIL
// ==========================================

function initTeams() {
  const detailedTeamsGrid = document.getElementById("detailedTeamsGrid");
  detailedTeamsGrid.innerHTML = "";

  STATE.teams.forEach(team => {
    const isOver = team.spend > team.budget;
    const progressPct = Math.min((team.spend / team.budget) * 100, 100);

    detailedTeamsGrid.innerHTML += `
      <div class="team-card">
        <div class="team-card-header">
          <span class="team-name">${team.name}</span>
          <span class="team-total-badge">${team.members} devs</span>
        </div>
        <div style="margin-bottom: 16px;">
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
            <span style="color:var(--text-secondary);">Budget Utilization</span>
            <span style="font-weight:600; color:${isOver ? 'var(--google-red)' : 'var(--text-primary)'}">${(team.spend/team.budget*100).toFixed(0)}%</span>
          </div>
          <div style="height:8px; background:var(--grey-200); border-radius:4px; overflow:hidden;">
            <div style="height:100%; background:${isOver ? 'var(--google-red)' : 'var(--google-blue)'}; width:${progressPct}%"></div>
          </div>
        </div>

        <div class="team-stat-row">
          <span class="team-stat-label">Lead Engineer</span>
          <span class="team-stat-value">${team.lead}</span>
        </div>
        <div class="team-stat-row">
          <span class="team-stat-label">Active Spend</span>
          <span class="team-stat-value">$${team.spend.toLocaleString()}</span>
        </div>
        <div class="team-stat-row">
          <span class="team-stat-label">Budget Threshold</span>
          <span class="team-stat-value">$${team.budget.toLocaleString()}</span>
        </div>
        <div class="team-stat-row">
          <span class="team-stat-label">Routing Accuracy</span>
          <span class="team-stat-value" style="color:var(--google-green);">${team.accuracy}</span>
        </div>
        <div class="team-stat-row">
          <span class="team-stat-label">Active Incidents</span>
          <span class="team-stat-value" style="color:${team.activeAlerts > 0 ? 'var(--google-red)' : 'var(--google-green)'}">${team.activeAlerts} Alerts</span>
        </div>
      </div>
    `;
  });
}

function drawTeamsTimelineChart() {
  const container = document.getElementById("teamsChartContainer");
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  container.innerHTML = "";

  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const backendCost = [1800, 2400, 3100, 3800, 4100, 4280];
  const devopsCost = [1500, 1900, 2300, 2900, 3100, 3274];
  const frontendCost = [900, 1400, 1800, 2400, 2900, 3105];
  
  const maxVal = 6000; // Team max budget line

  function getSvgCoords(data) {
    return data.map((val, idx) => {
      const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
      const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
      return `${x},${y}`;
    }).join(" ");
  }

  let svgContent = `<svg width="${width}" height="${height}">`;

  // Draw budget line y=5000 (average team limit)
  const budgetY = paddingTop + chartHeight - (5000 / maxVal) * chartHeight;
  svgContent += `
    <line x1="${paddingLeft}" y1="${budgetY}" x2="${width - paddingRight}" y2="${budgetY}" stroke="var(--google-red)" stroke-dasharray="4,4" stroke-width="1.5" />
    <text x="${width - paddingRight}" y="${budgetY - 5}" font-size="9" fill="var(--google-red)" font-weight="600" text-anchor="end">Limit ($5,000)</text>
  `;

  // Draw grid
  for (let i = 0; i <= 4; i++) {
    const y = paddingTop + (i / 4) * chartHeight;
    const value = maxVal - (i / 4) * maxVal;
    svgContent += `
      <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--grey-200)" stroke-width="0.5" />
      <text x="${paddingLeft - 10}" y="${y + 4}" font-size="9" fill="var(--text-secondary)" text-anchor="end">$${value}</text>
    `;
  }

  dates.forEach((date, idx) => {
    const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
    svgContent += `
      <text x="${x}" y="${height - paddingBottom + 18}" font-size="9" fill="var(--text-secondary)" text-anchor="middle">${date}</text>
    `;
  });

  // Lines
  svgContent += `<polyline fill="none" stroke="var(--google-blue)" stroke-width="2" points="${getSvgCoords(backendCost)}" />`;
  svgContent += `<polyline fill="none" stroke="var(--google-green)" stroke-width="2" points="${getSvgCoords(devopsCost)}" />`;
  svgContent += `<polyline fill="none" stroke="var(--google-yellow)" stroke-width="2" points="${getSvgCoords(frontendCost)}" />`;

  // Points
  backendCost.forEach((val, idx) => {
    const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
    svgContent += `<circle cx="${x}" cy="${y}" r="3" fill="var(--google-blue)" />`;
  });

  svgContent += `</svg>`;
  container.innerHTML = svgContent;
}


// ==========================================
// VIEW 4: AI MODELS REFERENCE
// ==========================================

function initModels() {
  renderModelsView();
}

function renderModelsView() {
  const modelsContainer = document.getElementById("modelsToggleList");
  modelsContainer.innerHTML = "";

  STATE.modelsReference.forEach((m, idx) => {
    const dotColor = m.type === 'Premium' ? 'var(--google-red)' : 'var(--google-green)';
    
    modelsContainer.innerHTML += `
      <div class="model-toggle-row">
        <div class="model-name-badge-group">
          <span class="model-dot" style="background-color: ${dotColor};"></span>
          <div>
            <strong style="font-size:13px;">${m.name}</strong>
            <div style="font-size:11px; color:var(--text-secondary);">Avg Latency: ${m.latency}ms • Type: ${m.type}</div>
          </div>
        </div>
        <div>
          <label class="switch">
            <input type="checkbox" ${m.enabled ? 'checked' : ''} onchange="toggleModelEnabled(${idx})">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    `;
  });

  // Load market rates summary card
  const ratesContainer = document.getElementById("modelMarketRates");
  ratesContainer.innerHTML = "";
  STATE.modelsReference.forEach(m => {
    ratesContainer.innerHTML += `
      <div class="opportunity-card" style="background:#fff; border-color:var(--grey-200);">
        <div class="opp-details">
          <span class="opp-title">${m.name.split(" ")[0]}</span>
          <span class="opp-sub">Input: $${m.inputCost.toFixed(2)}/1M • Output: $${m.outputCost.toFixed(2)}/1M</span>
        </div>
      </div>
    `;
  });
}

function toggleModelEnabled(index) {
  STATE.modelsReference[index].enabled = !STATE.modelsReference[index].enabled;
  renderModelsView();
  
  // Show standard toast trigger
  alert(`Governance Update: ${STATE.modelsReference[index].name} has been ${STATE.modelsReference[index].enabled ? 'enabled globally for API requests.' : 'disabled globally. Router will auto-bypass.'}`);
}


// ==========================================
// VIEW 5: SECURITY AUDIT
// ==========================================

function initSecurity() {
  renderSecurityTable(STATE.securityAlerts);

  // Security drop filters
  const severityFilter = document.getElementById("securitySeverityFilter");
  severityFilter.addEventListener("change", (e) => {
    const val = e.target.value;
    let list = STATE.securityAlerts;
    if (val === 'critical') {
      list = STATE.securityAlerts.filter(a => a.severity === 'critical');
    } else if (val === 'high') {
      list = STATE.securityAlerts.filter(a => a.severity === 'critical' || a.severity === 'high');
    } else if (val === 'medium') {
      list = STATE.securityAlerts.filter(a => a.severity !== 'low');
    }
    renderSecurityTable(list);
  });
}

function renderSecurityTable(list) {
  const tableBody = document.getElementById("securityTableBody");
  tableBody.innerHTML = "";

  if (list.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 40px; color:var(--text-muted);">No security alerts detected under this severity filter.</td></tr>`;
    return;
  }

  list.forEach((alert, idx) => {
    const row = document.createElement("tr");
    row.className = "security-alert-row";
    row.innerHTML = `
      <td><strong>${alert.id}</strong></td>
      <td style="white-space:nowrap;">${alert.timestamp}</td>
      <td><strong>${alert.employee}</strong></td>
      <td><span style="font-weight:600; color:var(--text-primary);">${alert.category}</span></td>
      <td><code style="font-size:11px; background:var(--grey-100); padding:3px 6px; border-radius:4px; display:block; max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${alert.snippet}</code></td>
      <td><span class="badge ${alert.severity}">${alert.severity}</span></td>
      <td><span class="badge ${alert.status === 'blocked' ? 'critical' : 'yellow'}">${alert.status}</span></td>
      <td>
        <button class="btn btn-text" onclick="resolveAlert(event, '${alert.id}')" style="font-size:11px;">Dismiss</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function resolveAlert(e, alertId) {
  e.stopPropagation();
  const index = STATE.securityAlerts.findIndex(a => a.id === alertId);
  if (index !== -1) {
    const alertItem = STATE.securityAlerts[index];
    const triggerEmp = STATE.employees.find(emp => emp.name === alertItem.employee);
    if (triggerEmp && triggerEmp.securityAlertsCount > 0) {
      triggerEmp.securityAlertsCount--;
      if (triggerEmp.securityAlertsCount === 0) {
        triggerEmp.securityStatus = 'clean';
      }
    }
    STATE.securityAlerts.splice(index, 1);
    renderSecurityTable(STATE.securityAlerts);
    initDashboard(); // refresh dashboard summary lists
    initEmployees(); // refresh employee registry
    alert(`Alert ${alertId} dismissed. Flagged incident updated to compliance log archive.`);
  }
}


// ==========================================
// VIEW 6: DETAILED ANALYTICS
// ==========================================

function initAnalytics() {
  document.getElementById("exportCsvBtn").addEventListener("click", () => {
    alert("Compiling optimization token logs. Downloader will output report: 'ai_governance_q2_spend.csv'.");
  });
}

function drawAnalyticsCharts() {
  const container = document.getElementById("analyticsChartContainer");
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  container.innerHTML = "";

  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 40;
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const dates = ["May 28", "May 29", "May 30", "May 31", "Jun 01", "Jun 02", "Jun 03"];
  const inputTokens = [82000, 94000, 78000, 115000, 105000, 98000, 102000];
  const outputTokens = [45000, 52000, 48000, 68000, 61000, 55000, 59000];
  
  const maxVal = 200000;

  function getPoints(data) {
    return data.map((val, idx) => {
      const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
      const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
      return { x, y };
    });
  }

  const inputPoints = getPoints(inputTokens);
  const outputPoints = getPoints(outputTokens);

  let svgContent = `<svg width="${width}" height="${height}">`;

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = paddingTop + (i / 4) * chartHeight;
    const value = maxVal - (i / 4) * maxVal;
    svgContent += `
      <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--grey-200)" stroke-dasharray="3,3" />
      <text x="${paddingLeft - 10}" y="${y + 4}" font-size="9" fill="var(--text-secondary)" text-anchor="end">${value.toLocaleString()}</text>
    `;
  }

  dates.forEach((date, idx) => {
    const x = paddingLeft + (idx / (dates.length - 1)) * chartWidth;
    svgContent += `<text x="${x}" y="${height - paddingBottom + 18}" font-size="9" fill="var(--text-secondary)" text-anchor="middle">${date}</text>`;
  });

  // Draw Areas
  const inputAreaPath = inputPoints.reduce((s, p, idx) => s + `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, "") + ` L ${inputPoints[inputPoints.length - 1].x} ${paddingTop+chartHeight} L ${inputPoints[0].x} ${paddingTop+chartHeight} Z`;
  const outputAreaPath = outputPoints.reduce((s, p, idx) => s + `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, "") + ` L ${outputPoints[outputPoints.length - 1].x} ${paddingTop+chartHeight} L ${outputPoints[0].x} ${paddingTop+chartHeight} Z`;

  svgContent += `<path d="${inputAreaPath}" fill="var(--google-blue-bg)" opacity="0.3" />`;
  svgContent += `<path d="${outputAreaPath}" fill="var(--google-green-bg)" opacity="0.3" />`;

  // Draw Lines
  const inputLine = inputPoints.reduce((s, p, idx) => s + `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, "");
  const outputLine = outputPoints.reduce((s, p, idx) => s + `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, "");

  svgContent += `<path d="${inputLine}" fill="none" stroke="var(--google-blue)" stroke-width="2" />`;
  svgContent += `<path d="${outputLine}" fill="none" stroke="var(--google-green)" stroke-width="2" />`;

  // Label indicators
  svgContent += `
    <g transform="translate(${paddingLeft + 10}, 10)">
      <circle cx="0" cy="5" r="4" fill="var(--google-blue)" />
      <text x="10" y="9" font-size="10" fill="var(--text-secondary)">Input Tokens</text>
      
      <circle cx="95" cy="5" r="4" fill="var(--google-green)" />
      <text x="105" y="9" font-size="10" fill="var(--text-secondary)">Output Tokens</text>
    </g>
  `;

  svgContent += `</svg>`;
  container.innerHTML = svgContent;

  // Render input/output ratios
  const ratioContainer = document.getElementById("ratioChartContainer");
  ratioContainer.innerHTML = `
    <div style="width:100%; max-width:400px; padding: 24px; background:var(--grey-50); border:1px solid var(--grey-200); border-radius:var(--radius-s); display:flex; flex-direction:column; gap:16px;">
      <div>
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; margin-bottom:6px;">
          <span>Prompt Input Tokens (63%)</span>
          <span>Completion Output Tokens (37%)</span>
        </div>
        <div style="height:16px; display:flex; border-radius:8px; overflow:hidden;">
          <div style="background:var(--google-blue); width:63%;"></div>
          <div style="background:var(--google-green); width:37%;"></div>
        </div>
      </div>
      <div style="font-size:11px; color:var(--text-secondary); line-height:1.4;">
        Note: Prompts represent 63% of input parameters but generate only 24% of overall costs due to dynamic routing to cheap context caching on Gemini Flash endpoints.
      </div>
    </div>
  `;

  // Render latency distribution
  const latencyContainer = document.getElementById("latencyChartContainer");
  latencyContainer.innerHTML = `
    <div style="width:100%; display:flex; flex-direction:column; gap:12px; padding:10px;">
      <div>
        <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px;">
          <span>Gemini 1.5 Flash (180ms avg)</span>
          <span>70% of calls</span>
        </div>
        <div style="height:6px; background:var(--grey-200); border-radius:4px; overflow:hidden;">
          <div style="height:100%; background:var(--google-green); width:70%"></div>
        </div>
      </div>
      <div>
        <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px;">
          <span>Llama 3 70B (220ms avg)</span>
          <span>14% of calls</span>
        </div>
        <div style="height:6px; background:var(--grey-200); border-radius:4px; overflow:hidden;">
          <div style="height:100%; background:var(--google-blue); width:14%"></div>
        </div>
      </div>
      <div>
        <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px;">
          <span>GPT-4o / Claude 3.5 Sonnet (485ms avg)</span>
          <span>16% of calls</span>
        </div>
        <div style="height:6px; background:var(--grey-200); border-radius:4px; overflow:hidden;">
          <div style="height:100%; background:var(--google-red); width:16%"></div>
        </div>
      </div>
    </div>
  `;
}


// ==========================================
// VIEW 7: ROUTING PERFORMANCE
// ==========================================

function initRouting() {
  const statList = document.getElementById("routingStatList");
  statList.innerHTML = "";

  const rStats = [
    { title: "Routing Accuracy", value: "94.2%", pct: 94.2, color: "blue" },
    { title: "Cheap Model Success", value: "88.7%", pct: 88.7, color: "green" },
    { title: "Auto Escalations", value: "5.8%", pct: 5.8, color: "yellow" },
    { title: "Model Rec. Accuracy", value: "96.5%", pct: 96.5, color: "green" }
  ];

  rStats.forEach(stat => {
    // Circle dash calculations
    const r = 36;
    const circ = 2 * Math.PI * r;
    const strokeDash = circ - (stat.pct / 100) * circ;

    statList.innerHTML += `
      <div class="routing-metric-card">
        <div class="routing-metric-circle">
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="${r}" class="svg-ring-bg" />
            <circle cx="45" cy="45" r="${r}" class="svg-ring-fg ${stat.color}" stroke-dasharray="${circ}" stroke-dashoffset="${strokeDash}" />
          </svg>
          <div class="routing-metric-val">${stat.value}</div>
        </div>
        <span class="routing-metric-label">${stat.title}</span>
      </div>
    `;
  });
}

function drawRoutingCharts() {
  const container = document.getElementById("routingDiagramContainer");
  if (!container) return;

  // Let's draw a beautiful visual workflow node schema in SVG
  container.innerHTML = `
    <svg width="500" height="220" viewBox="0 0 500 220" style="background:var(--grey-50); border:1px solid var(--grey-300); border-radius:var(--radius-m);">
      <!-- Flow Nodes -->
      <g transform="translate(10, 80)">
        <rect x="0" y="0" width="80" height="40" rx="8" fill="var(--google-blue)" />
        <text x="40" y="24" fill="#fff" font-size="11" font-weight="600" text-anchor="middle">User Prompt</text>
      </g>
      
      <g transform="translate(130, 80)">
        <rect x="0" y="0" width="100" height="40" rx="8" fill="#fff" stroke="var(--border-color)" stroke-width="2" />
        <text x="50" y="18" fill="var(--text-primary)" font-size="10" font-weight="600" text-anchor="middle">Security Scan</text>
        <text x="50" y="30" fill="var(--google-green)" font-size="8" font-weight="600" text-anchor="middle">✔ Checked</text>
      </g>
      
      <g transform="translate(270, 80)">
        <rect x="0" y="0" width="100" height="40" rx="8" fill="#fff" stroke="var(--border-color)" stroke-width="2" />
        <text x="50" y="18" fill="var(--text-primary)" font-size="10" font-weight="600" text-anchor="middle">Complexity Evaluator</text>
        <text x="50" y="30" fill="var(--google-blue)" font-size="8" font-weight="600" text-anchor="middle">NLP Vector Fit</text>
      </g>

      <!-- Branch 1 (Low complexity) -->
      <g transform="translate(400, 30)">
        <rect x="0" y="0" width="90" height="40" rx="8" fill="var(--google-green-bg)" stroke="var(--google-green)" stroke-width="1.5" />
        <text x="45" y="24" fill="var(--google-green-hover)" font-size="10" font-weight="600" text-anchor="middle">Gemini Flash</text>
      </g>

      <!-- Branch 2 (High complexity) -->
      <g transform="translate(400, 130)">
        <rect x="0" y="0" width="90" height="40" rx="8" fill="var(--google-red-bg)" stroke="var(--google-red)" stroke-width="1.5" />
        <text x="45" y="24" fill="var(--google-red-hover)" font-size="10" font-weight="600" text-anchor="middle">Claude 3.5 Sonnet</text>
      </g>

      <!-- Connection Lines -->
      <line x1="90" y1="100" x2="130" y2="100" stroke="var(--google-blue)" stroke-width="2" />
      <polygon points="130,100 124,96 124,104" fill="var(--google-blue)" />

      <line x1="230" y1="100" x2="270" y2="100" stroke="var(--google-blue)" stroke-width="2" />
      <polygon points="270,100 264,96 264,104" fill="var(--google-blue)" />

      <!-- Branching lines -->
      <path d="M 370 100 L 385 100 L 385 50 L 400 50" fill="none" stroke="var(--text-secondary)" stroke-width="1.5" />
      <polygon points="400,50 394,46 394,54" fill="var(--text-secondary)" />

      <path d="M 370 100 L 385 100 L 385 150 L 400 150" fill="none" stroke="var(--text-secondary)" stroke-width="1.5" />
      <polygon points="400,150 394,146 394,154" fill="var(--text-secondary)" />

      <text x="390" y="38" font-size="8" fill="var(--google-green)" font-weight="600">84%</text>
      <text x="390" y="128" font-size="8" fill="var(--google-red)" font-weight="600">16%</text>
    </svg>
  `;
}


// ==========================================
// VIEW 8: CONTROL CENTER (SETTINGS)
// ==========================================

function initSettings() {
  const budgetRange = document.getElementById("settingGlobalBudget");
  const budgetVal = document.getElementById("budgetDisplayVal");
  
  budgetRange.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    STATE.globalSettings.monthlyBudget = val;
    budgetVal.innerText = `$${val.toLocaleString()}`;
    
    // Update dashboard projections display
    document.getElementById("spendProjected").parentNode.querySelector(".stat-card-change").innerText = `Limit: $${val.toLocaleString()}`;
  });

  const routingCheck = document.getElementById("settingEnforceRouting");
  routingCheck.addEventListener("change", (e) => {
    STATE.globalSettings.smartRoutingEnabled = e.target.checked;
    
    // Update dashboard badge
    const badge = document.querySelector("#view-dashboard .badge");
    if (badge) {
      if (e.target.checked) {
        badge.className = "badge low";
        badge.innerText = "Smart Router: Enabled";
      } else {
        badge.className = "badge critical";
        badge.innerText = "Smart Router: Disabled";
      }
    }
  });

  const apiScanCheck = document.getElementById("settingScanApi");
  apiScanCheck.addEventListener("change", (e) => {
    STATE.globalSettings.scanApiKeys = e.target.checked;
  });

  const codeScanCheck = document.getElementById("settingScanCode");
  codeScanCheck.addEventListener("change", (e) => {
    STATE.globalSettings.scanCodeLeaks = e.target.checked;
  });

  document.getElementById("saveSettingsBtn").addEventListener("click", () => {
    alert("Governance Settings Saved: Active firewall and query filters updated successfully across all model pipelines.");
  });
}


// ==========================================
// GLOBAL SEARCH SYSTEM
// ==========================================

function initGlobalSearch() {
  const globalSearch = document.getElementById("globalSearch");
  globalSearch.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
      const query = globalSearch.value.toLowerCase().trim();
      if (!query) return;

      // Look up matches
      const empMatch = STATE.employees.find(emp => emp.name.toLowerCase().includes(query));
      if (empMatch) {
        switchView("employees");
        openProfileDrawer(empMatch.id);
        globalSearch.value = "";
        return;
      }

      const teamMatch = STATE.teams.find(t => t.name.toLowerCase().includes(query));
      if (teamMatch) {
        switchView("teams");
        globalSearch.value = "";
        return;
      }

      const alertMatch = STATE.securityAlerts.find(a => a.category.toLowerCase().includes(query) || a.id.toLowerCase().includes(query));
      if (alertMatch) {
        switchView("security");
        globalSearch.value = "";
        return;
      }

      alert(`No direct dashboard entries match search parameters: "${query}".`);
    }
  });
}


// ==========================================
// NOTIFICATIONS SYSTEM
// ==========================================

function initNotifications() {
  const notifBtn = document.getElementById("notifBtn");
  const notifMenu = document.getElementById("notifMenu");
  const notifBadge = document.getElementById("notifBadge");
  const notifList = document.getElementById("notifList");
  const clearBtn = document.getElementById("clearNotifBtn");

  // Load static unread notifs from security alerts database
  const initNotifs = [
    { text: "Critical: API key leak blocked on Alex Brewer's account.", type: "critical", unread: true },
    { text: "Smart routing saved $412.00 in the past 24 hours.", type: "info", unread: true },
    { text: "Warning: Team DevOps spend is reaching 82% of monthly cap.", type: "warning", unread: false }
  ];

  function renderNotifs() {
    notifList.innerHTML = "";
    let unreadCount = 0;
    
    initNotifs.forEach((n, idx) => {
      if (n.unread) unreadCount++;
      notifList.innerHTML += `
        <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="readNotif(${idx})">
          ${n.text}
        </div>
      `;
    });

    if (unreadCount > 0) {
      notifBadge.style.display = "block";
    } else {
      notifBadge.style.display = "none";
    }
  }

  window.readNotif = function(index) {
    initNotifs[index].unread = false;
    renderNotifs();
  };

  notifBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notifMenu.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    notifMenu.classList.remove("active");
  });

  clearBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    initNotifs.forEach(n => n.unread = false);
    renderNotifs();
  });

  renderNotifs();
}
