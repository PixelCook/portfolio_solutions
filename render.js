/* Reads the data from content.js and injects it into the section shells
   defined in index.html. Add content by editing content.js only. */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderHero() {
  document.getElementById("hero-eyebrow").textContent = HERO.eyebrow;
  document.getElementById("hero-name").textContent = HERO.name;
  document.getElementById("hero-thesis").textContent = HERO.thesis;

  const chips = document.getElementById("hero-chips");
  HERO.chips.forEach((chip) => chips.appendChild(el("li", "chip", chip)));

  const emailLink = document.getElementById("hero-email");
  emailLink.href = `mailto:${LINKS.email}`;
  const linkedinLink = document.getElementById("hero-linkedin");
  linkedinLink.href = LINKS.linkedin;
}

function renderCredibility() {
  const grid = document.getElementById("credibility-grid");
  CREDIBILITY.forEach((item) => {
    const card = el("div", "card");
    card.appendChild(el("p", "card-label", item.label));
    card.appendChild(el("p", "card-detail", item.detail));
    grid.appendChild(card);
  });
}

function renderCapabilities() {
  const list = document.getElementById("capabilities-list");
  CAPABILITIES.forEach((item) => list.appendChild(el("li", null, item)));
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  PROJECTS.forEach((project) => {
    const card = el("article", "project-card");

    if (project.image) {
      const img = el("img", "project-image");
      img.src = project.image;
      img.alt = project.imageAlt || "";
      img.loading = "lazy";
      card.appendChild(img);
    }

    const body = el("div", "project-body");
    body.appendChild(el("p", "project-tag", project.tag));
    body.appendChild(el("h3", null, project.name));
    body.appendChild(el("p", "project-problem", project.problem));
    body.appendChild(el("p", "project-solution", project.solution));
    body.appendChild(el("p", "project-outcome", project.outcome));

    const stack = el("ul", "stack-list");
    project.stack.forEach((s) => stack.appendChild(el("li", null, s)));
    body.appendChild(stack);

    if (project.accessNote) {
      body.appendChild(el("p", "project-access-note", project.accessNote));
    }

    const links = el("div", "project-links");
    if (project.liveUrl) {
      const live = el("a", "btn btn-ghost", "Live site");
      live.href = project.liveUrl;
      live.target = "_blank";
      live.rel = "noopener";
      links.appendChild(live);
    }
    if (project.repoUrl) {
      const repo = el("a", "btn btn-ghost", "Repo");
      repo.href = project.repoUrl;
      repo.target = "_blank";
      repo.rel = "noopener";
      links.appendChild(repo);
    }
    body.appendChild(links);

    card.appendChild(body);
    grid.appendChild(card);
  });
}

function renderWorkshops() {
  document.getElementById("workshops-intro").textContent = WORKSHOPS.intro;
  const topics = document.getElementById("workshops-topics");
  WORKSHOPS.topics.forEach((topic) => topics.appendChild(el("li", null, topic)));
}

function renderWriting() {
  const list = document.getElementById("writing-list");
  WRITING.forEach((post) => {
    const li = el("li");
    const a = el("a", null, post.title);
    a.href = post.url;
    a.target = "_blank";
    a.rel = "noopener";
    li.appendChild(a);
    list.appendChild(li);
  });
}

function renderBackground() {
  document.getElementById("background-bio").textContent = BACKGROUND.bio;
  document.getElementById("background-founder").textContent = BACKGROUND.founderNote;
}

function renderFooter() {
  const email = document.getElementById("footer-email");
  email.href = `mailto:${LINKS.email}`;
  email.textContent = LINKS.email;
  document.getElementById("footer-linkedin").href = LINKS.linkedin;
}

renderHero();
renderCredibility();
renderCapabilities();
renderProjects();
renderWorkshops();
renderWriting();
renderBackground();
renderFooter();
