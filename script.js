document.documentElement.classList.add("motion-ready");

const projects = [
  {
    title: "Arenix: AI Realtime Gaming Analytics",
    label: "Forecasting product",
    tags: ["python", "dashboard", "ml", "flask"],
    description:
      "A Flask-based analytics product that forecasts Steam game demand and turns model output into recruiter-friendly dashboard views.",
    bullets: [
      "Builds demand signals from historical monthly player activity.",
      "Compares XGBoost performance with a lag-based baseline.",
      "Packages predictions, rankings, comparisons, and tests into one web app."
    ],
    image: "assets/project-gaming.jpg",
    imageAlt: "Gaming setup representing AI realtime gaming analytics",
    visual: "gaming",
    visualMetric: "XGBoost",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/Arenix"
      }
    ]
  },
  {
    title: "Airbnb India Analytics Dashboard",
    label: "Rental market dashboard",
    tags: ["python", "dashboard", "flask", "bi"],
    description:
      "A Flask dashboard for reading Airbnb listing behavior across pricing, room types, ratings, availability, and location patterns.",
    bullets: [
      "Creates filtered KPI views for city and room-type comparison.",
      "Uses visual and map-style analysis to explain market concentration.",
      "Prepares listing fields for clean dashboard storytelling."
    ],
    image: "assets/project-airbnb.jpg",
    imageAlt: "Modern home representing Airbnb listing analytics",
    visual: "map",
    visualMetric: "Listings",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/airbnb-dashboard"
      }
    ]
  },
  {
    title: "Automotive Sales Performance Analytics",
    label: "Sales performance report",
    tags: ["python", "excel", "dashboard", "bi"],
    description:
      "A business reporting project that studies vehicle sales behavior across model, category, time, and economic context.",
    bullets: [
      "Compares model-wise and category-wise sales movement.",
      "Turns trend checks into dashboard-ready summaries.",
      "Connects spreadsheet review with Python analysis."
    ],
    image: "assets/project-automotive.jpg",
    imageAlt: "Car detail representing automotive sales analytics",
    visual: "sales",
    visualMetric: "Sales KPI",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/automotive_sales_trend_analysis"
      }
    ]
  },
  {
    title: "Dynamic Fare Pricing ML Engine",
    label: "Pricing ML workflow",
    tags: ["python", "dashboard", "ml"],
    description:
      "A demand-aware pricing workflow inspired by ride-hailing platforms, built around regression modeling and business interpretation.",
    bullets: [
      "Engineers time, trip, and demand features for model training.",
      "Evaluates pricing predictions using R2, MAE, RMSE, and residuals.",
      "Frames model output around revenue and operations decisions."
    ],
    image: "assets/project-pricing.jpg",
    imageAlt: "Urban transportation scene representing dynamic fare pricing",
    visual: "pricing",
    visualMetric: "0.91 R2",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/dynamic-fare-pricing-ml-engine"
      }
    ]
  },
  {
    title: "Emerging Technology Trends Analysis",
    label: "Survey trend analytics",
    tags: ["python", "dashboard", "bi"],
    description:
      "A large survey analytics project focused on current tool usage, future learning demand, and developer demographics.",
    bullets: [
      "Transforms multi-value responses into long-format analysis tables.",
      "Ranks languages, databases, platforms, and frameworks.",
      "Builds dashboard views for adoption, demand, and demographics."
    ],
    image: "assets/project-tech.jpg",
    imageAlt: "Code editor representing emerging technology trends analysis",
    visual: "tech",
    visualMetric: "50K+",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/Emerging-Technology-Trends-Analysis"
      }
    ]
  },
  {
    title: "Montgomery Fleet Equipment Inventory Analysis",
    label: "Inventory analysis workbook",
    tags: ["excel", "dashboard", "bi"],
    description:
      "An Excel analytics project for cleaning fleet inventory data and summarizing equipment distribution with pivot-based views.",
    bullets: [
      "Cleans duplicates, blanks, headers, and inconsistent text values.",
      "Builds department and equipment-class pivot summaries.",
      "Summarizes 1,582 equipment records across 12 departments."
    ],
    image: "assets/project-fleet.jpg",
    imageAlt: "Fleet vehicles representing equipment inventory analysis",
    visual: "inventory",
    visualMetric: "1,582",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/montgomery-fleet-inventory-excel-analysis"
      },
      {
        label: "Workbook",
        url: "projects/montgomery-fleet/Montgomery_Fleet_Equipment_Inventory_Part2_Analysis.xlsx"
      }
    ]
  },
  {
    title: "Netflix Content Analysis",
    label: "Streaming catalog analysis",
    tags: ["python", "dashboard", "bi"],
    description:
      "A streaming-content analysis project that reads Netflix catalog patterns across type, release year, rating, country, and genre.",
    bullets: [
      "Compares Movies and TV Shows in the catalog.",
      "Explores release patterns, countries, ratings, and genres.",
      "Documents insights through notebooks, visuals, and reporting assets."
    ],
    image: "assets/project-netflix.jpg",
    imageAlt: "Cinema seating representing Netflix content analytics",
    visual: "content",
    visualMetric: "Catalog",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/Netflix_content_analysis"
      }
    ]
  },
  {
    title: "Real Estate Price Analysis",
    label: "Housing price model",
    tags: ["python", "ml"],
    description:
      "A regression modeling project for understanding housing price drivers and predicting King County property values.",
    bullets: [
      "Studies property attributes, grade, condition, location, and view factors.",
      "Compares Linear, Ridge, and Polynomial Ridge approaches.",
      "Improves model performance to about 0.70 R2."
    ],
    image: "assets/project-real-estate.jpg",
    imageAlt: "Modern house representing real estate price analysis",
    visual: "housing",
    visualMetric: "0.70 R2",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/Real_Estate_price_Analysis"
      }
    ]
  },
  {
    title: "Spotify Music Trends Analysis",
    label: "Music trend report",
    tags: ["python", "dashboard", "bi"],
    description:
      "A music analytics project that explores genre mix, release growth, popularity behavior, artist contribution, and playlist patterns.",
    bullets: [
      "Analyzes cleaned Spotify catalog and playlist data.",
      "Reviews genre spread, track popularity, and artist contribution.",
      "Presents findings through notebook and dashboard-style reporting."
    ],
    image: "assets/project-music.jpg",
    imageAlt: "Musician with microphone representing Spotify music trends analysis",
    visual: "music",
    visualMetric: "Trends",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Sagnik0910/Spotify-analysis"
      }
    ]
  }
];

const filterButtons = document.querySelectorAll(".filter-button");
const projectGrid = document.querySelector("#projectGrid");
const scrollProgress = document.querySelector(".scroll-progress");
const revealItems = document.querySelectorAll(".reveal");

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = text;
  return element;
}

function createProjectMedia(project) {
  if (project.image) {
    const media = document.createElement("div");
    media.className = "project-photo-wrap";

    const image = document.createElement("img");
    image.className = "project-photo";
    image.src = project.image;
    image.alt = project.imageAlt || `${project.title} representative photo`;
    image.loading = "lazy";

    const badge = createTextElement("span", "project-photo-badge", project.visualMetric || project.label);
    media.append(image, badge);
    return media;
  }

  const visual = document.createElement("div");
  visual.className = `project-visual visual-${project.visual || "data"}`;
  visual.setAttribute("role", "img");
  visual.setAttribute("aria-label", `${project.title} data-themed illustration`);

  const topLine = document.createElement("div");
  topLine.className = "visual-topline";
  topLine.append(createTextElement("span", "", project.visualMetric || "Data"));
  topLine.append(createTextElement("span", "", project.label));

  const bars = document.createElement("div");
  bars.className = "visual-bars";
  [58, 76, 43, 88, 64].forEach((height) => {
    const bar = document.createElement("i");
    bar.style.setProperty("--bar-height", `${height}%`);
    bars.append(bar);
  });

  const line = document.createElement("div");
  line.className = "visual-line";

  const dots = document.createElement("div");
  dots.className = "visual-dots";
  ["Q1", "Q2", "Q3"].forEach((label) => dots.append(createTextElement("span", "", label)));

  visual.append(topLine, bars, line, dots);
  return visual;
}

function createProjectLinks(project) {
  const links = document.createElement("div");
  links.className = "project-links";

  project.links.forEach((projectLink) => {
    const link = document.createElement("a");
    link.href = projectLink.url;
    link.textContent = projectLink.label;

    if (projectLink.url.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    links.append(link);
  });

  return links;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.tags = project.tags.join(" ");

  const body = document.createElement("div");
  body.className = "project-body";
  body.append(createTextElement("p", "tag", project.label));
  body.append(createTextElement("h3", "", project.title));
  body.append(createTextElement("p", "", project.description));

  const list = document.createElement("ul");
  project.bullets.forEach((bullet) => {
    list.append(createTextElement("li", "", bullet));
  });

  body.append(list);
  body.append(createProjectLinks(project));
  card.append(createProjectMedia(project), body);

  return card;
}

function renderProjects(selectedFilter = "all") {
  const filteredProjects = projects.filter((project) => {
    return selectedFilter === "all" || project.tags.includes(selectedFilter);
  });

  projectGrid.replaceChildren(...filteredProjects.map(createProjectCard));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(selectedFilter);
  });
});

function updateScrollProgress() {
  if (!scrollProgress) {
    return;
  }

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  scrollProgress.style.width = `${Math.min(progress * 100, 100)}%`;
}

function setupRevealAnimations() {
  revealItems.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.9) {
      item.classList.add("is-visible");
    }
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

renderProjects();
setupRevealAnimations();
updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
