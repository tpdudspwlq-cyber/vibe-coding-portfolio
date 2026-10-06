const projectIcons = {
  identity: '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="36"/><path d="M60 24v72M24 60h72"/><circle class="icon-accent" cx="60" cy="60" r="11"/></svg>',
  motion: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M23 42h42c13 0 22 8 22 19S78 80 65 80H29"/><path class="icon-accent" d="m42 68-13 12 13 12"/><path d="M23 30h22M23 94h22"/></svg>',
  still: '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="36"/><circle class="icon-accent" cx="60" cy="60" r="22"/><circle cx="60" cy="60" r="7"/></svg>',
  spark: '<svg viewBox="0 0 120 120" aria-hidden="true"><path class="icon-accent" d="M60 18v84M18 60h84M30 30l60 60M90 30 30 90"/><circle cx="60" cy="60" r="15"/></svg>',
  object: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="m27 42 33-18 33 18v39L60 99 27 81zM27 42l33 19 33-19M60 61v38"/><path class="icon-accent" d="M48 48h24M48 72h24"/></svg>',
};

const projects = [
  {
    title: "A study<br />in presence.",
    category: "Brand identity · 2025",
    description: "좋은 브랜드는 소리 높이지 않아도 기억됩니다. 선명한 태도와 오래 남는 인상을 위한 새로운 아이덴티티.",
    icon: "identity",
    iconAlt: "브랜드 아이덴티티를 상징하는 십자와 원형 아이콘",
    caption: "01 / FORM & FIGURE",
    label: "Form & Figure",
  },
  {
    title: "Made of<br />momentum.",
    category: "Art direction · 2025",
    description: "움직임에서 시작한 스포츠웨어 캠페인. 일상의 리듬을 새로운 에너지로 바꿉니다.",
    icon: "motion",
    iconAlt: "움직임을 상징하는 방향 화살표 아이콘",
    caption: "02 / OFF THE GRID",
    label: "Off the Grid",
  },
  {
    title: "Less, but<br />closer.",
    category: "Digital experience · 2024",
    description: "복잡한 하루에 작은 여백을. 감각적인 웰니스 브랜드의 디지털 경험을 설계했습니다.",
    icon: "still",
    iconAlt: "차분함을 상징하는 동심원 아이콘",
    caption: "03 / STILL FORM",
    label: "Still Form",
  },
  {
    title: "A softer<br />kind of bold.",
    category: "Campaign · 2024",
    description: "익숙한 아름다움의 문법을 조금 비틀어, 자신만의 방식으로 표현하는 새로운 캠페인.",
    icon: "spark",
    iconAlt: "새로운 기준을 상징하는 별 모양 아이콘",
    caption: "04 / NEW STANDARD",
    label: "New Standard",
  },
  {
    title: "Objects<br />with a soul.",
    category: "Brand world · 2024",
    description: "매일 손이 가는 물건에 오래 간직할 이야기를 더합니다. 작은 디테일로 완성한 브랜드 세계.",
    icon: "object",
    iconAlt: "브랜드 오브젝트를 상징하는 패키지 아이콘",
    caption: "05 / EVERYDAY OBJECTS",
    label: "Everyday Objects",
  },
];

const panels = {
  about: {
    title: "From dental hygienist<br />to AI designer.",
    copy: "치과위생사에서 시작해 책을 쓰고, 새로운 일에 끊임없이 도전하는 AI 디자이너입니다.",
    action: "프로젝트 문의하기 ↗",
  },
  team: {
    title: "Good work is<br />a team sport.",
    copy: "전략가, 디자이너, 메이커가 한 팀으로 움직입니다. 필요한 순간마다 가장 잘 맞는 동료와 함께합니다.",
    action: "aileeny123@naver.com ↗",
  },
  contact: {
    title: "Have a good<br />one in mind?",
    copy: "새로운 브랜드를 준비 중이거나 지금의 브랜드에 변화가 필요하다면, 편하게 이야기를 시작해 주세요.",
    action: "aileeny123@naver.com ↗",
  },
};

let activeProject = 0;
const title = document.querySelector("#project-title");
const category = document.querySelector("#project-category");
const description = document.querySelector("#project-description");
const artwork = document.querySelector("#project-artwork");
const caption = document.querySelector("#image-caption");
const currentNumber = document.querySelector("#current-number");
const progress = document.querySelector("#progress-fill");
const railLinks = document.querySelector("#rail-links");
const panel = document.querySelector("#info-panel");

projects.forEach((project, index) => {
  const button = document.createElement("button");
  button.className = "rail-dot";
  button.type = "button";
  button.setAttribute("aria-label", `${index + 1}번 프로젝트: ${project.label}`);
  button.addEventListener("click", () => showProject(index));
  railLinks.append(button);
});

function showProject(index) {
  activeProject = (index + projects.length) % projects.length;
  const project = projects[activeProject];
  title.innerHTML = project.title;
  category.textContent = project.category;
  description.textContent = project.description;
  caption.textContent = project.caption;
  currentNumber.textContent = String(activeProject + 1).padStart(2, "0");
  progress.style.width = `${((activeProject + 1) / projects.length) * 100}%`;
  artwork.dataset.icon = project.icon;
  artwork.setAttribute("aria-label", project.iconAlt);
  artwork.innerHTML = projectIcons[project.icon];
  document.querySelectorAll(".rail-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeProject);
    dot.setAttribute("aria-current", dotIndex === activeProject ? "true" : "false");
  });
}

function openPanel(name) {
  const content = panels[name];
  if (!content) return;
  document.querySelector("#panel-title").innerHTML = content.title;
  document.querySelector("#panel-copy").textContent = content.copy;
  document.querySelector("#panel-action").textContent = content.action;
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  document.querySelector(".panel-close").focus();
}

function closePanel() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
}

document.querySelector(".previous").addEventListener("click", () => showProject(activeProject - 1));
document.querySelector(".next").addEventListener("click", () => showProject(activeProject + 1));
document.querySelector(".panel-close").addEventListener("click", closePanel);

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const name = link.dataset.panel;
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.toggle("is-active", item === link));
    if (name === "projects") closePanel();
    else openPanel(name);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePanel();
  if (panel.classList.contains("is-open")) return;
  if (event.key === "ArrowLeft") showProject(activeProject - 1);
  if (event.key === "ArrowRight") showProject(activeProject + 1);
});

showProject(0);