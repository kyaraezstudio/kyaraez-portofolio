/* ============================================================
   KYARAEZ — Personal Creative Portfolio
   Rezkya Putri Novianti
   ============================================================ */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     EDITABLE: PROJECTS
     Add / edit projects here. Filtering uses the "category" field.
     Categories: web | design | content | research | creative
     ------------------------------------------------------------ */
  const projects = [
    {
      id: 1,
      title: "Project Title One",
      category: "web",
      year: "2026",
      description: "Project description goes here. A short overview of what this work is about.",
      role: "Designer & Developer",
      tools: ["HTML", "CSS", "JavaScript"],
      image: "assets/images/project-01.jpg",
      link: "#",
      overview: "Detailed overview of the project. Replace this with the real story, goals, and context.",
      process: "Describe the process, methods, and key decisions made during the project.",
      outcome: "Summarize the results or learnings. Keep it honest and editable."
    },
    {
      id: 2,
      title: "Project Title Two",
      category: "design",
      year: "2025",
      description: "Project description goes here. Visual identity or design exploration.",
      role: "Graphic Designer",
      tools: ["Figma", "Illustrator"],
      image: "assets/images/project-02.jpg",
      link: "#",
      overview: "Detailed overview of the design project.",
      process: "Process and approach used.",
      outcome: "Outcome or reflection."
    },
    {
      id: 3,
      title: "Project Title Three",
      category: "content",
      year: "2025",
      description: "Content and social media related work description goes here.",
      role: "Content Creator",
      tools: ["Canva", "CapCut"],
      image: "assets/images/project-03.jpg",
      link: "#",
      overview: "Overview of the content project.",
      process: "How the content was developed.",
      outcome: "Results and notes."
    },
    {
      id: 4,
      title: "Project Title Four",
      category: "research",
      year: "2024",
      description: "Research or science communication project description.",
      role: "Researcher",
      tools: ["Notion", "Google Docs"],
      image: "assets/images/project-04.jpg",
      link: "#",
      overview: "Research context and goals.",
      process: "Methods and synthesis process.",
      outcome: "Findings or creative output."
    },
    {
      id: 5,
      title: "Project Title Five",
      category: "creative",
      year: "2025",
      description: "Experimental or multidisciplinary creative exploration.",
      role: "Creative Explorer",
      tools: ["AI tools", "Figma"],
      image: "assets/images/project-05.jpg",
      link: "#",
      overview: "What this creative experiment set out to explore.",
      process: "Ideation and iteration process.",
      outcome: "Insights gained."
    },
    {
      id: 6,
      title: "Project Title Six",
      category: "web",
      year: "2026",
      description: "Another web or interface project placeholder.",
      role: "UI Designer",
      tools: ["HTML", "CSS", "Figma"],
      image: "assets/images/project-06.jpg",
      link: "#",
      overview: "UI / web project overview.",
      process: "Design and build process.",
      outcome: "Outcome notes."
    }
  ];

  /* ------------------------------------------------------------
     EDITABLE: EXPERIENCE & ACHIEVEMENTS
     Do not invent awards. Replace with real entries later.
     Categories: Competition | Project | Education | Creative Experience | Achievement | Other
     ------------------------------------------------------------ */
  const experiences = [
    {
      year: "2026",
      title: "Experience Title",
      category: "Project",
      description: "Editable description of this experience or achievement. Replace with real information."
    },
    {
      year: "2025",
      title: "Experience Title",
      category: "Education",
      description: "Editable description. Add real educational or creative milestones here."
    },
    {
      year: "2024",
      title: "Experience Title",
      category: "Creative Experience",
      description: "Editable description of a creative experience or involvement."
    },
    {
      year: "2023",
      title: "Experience Title",
      category: "Other",
      description: "Placeholder entry. Update with accurate details when available."
    }
  ];

  /* ------------------------------------------------------------
     EDITABLE: CREATIVE PLAYGROUND ITEMS
     ------------------------------------------------------------ */
  const playgroundItems = [
    {
      tag: "Experiment",
      title: "Visual Exploration 01",
      text: "A small visual study or layout experiment. Replace with real notes."
    },
    {
      tag: "Writing",
      title: "Short Form Notes",
      text: "Fragment of writing, caption, or editorial sketch."
    },
    {
      tag: "Prototype",
      title: "Interaction Sketch",
      text: "Quick interaction or interface idea captured here."
    },
    {
      tag: "Research",
      title: "Snippet Archive",
      text: "Research notes or science-related creative snippet."
    },
    {
      tag: "AI Study",
      title: "Prompt & Iterate",
      text: "Exploration using AI as a creative collaborator."
    }
  ];

  /* ------------------------------------------------------------
     SKILLS DATA
     ------------------------------------------------------------ */
  const skills = [
    {
      number: "01",
      titleKey: "skills.web.title",
      descKey: "skills.web.desc",
      title: { id: "Web Development", en: "Web Development" },
      desc: {
        id: "Membangun pengalaman digital yang responsif, fungsional, dan thoughtful.",
        en: "Building responsive, functional, and thoughtful digital experiences."
      }
    },
    {
      number: "02",
      titleKey: "skills.ui.title",
      descKey: "skills.ui.desc",
      title: { id: "UI / Web Design", en: "UI / Web Design" },
      desc: {
        id: "Merancang antarmuka digital yang menyeimbangkan kejelasan, usability, dan karakter visual.",
        en: "Designing digital interfaces that balance clarity, usability, and visual character."
      }
    },
    {
      number: "03",
      titleKey: "skills.graphic.title",
      descKey: "skills.graphic.desc",
      title: { id: "Graphic Design", en: "Graphic Design" },
      desc: {
        id: "Menciptakan identitas visual, layout, poster, dan grafis dengan rasa komposisi yang kuat.",
        en: "Creating visual identities, layouts, posters, and graphics with a strong sense of composition."
      }
    },
    {
      number: "04",
      titleKey: "skills.content.title",
      descKey: "skills.content.desc",
      title: { id: "Content & Social Media", en: "Content & Social Media" },
      desc: {
        id: "Mengembangkan konten visual dan tulisan yang dirancang untuk menyampaikan ide dan terhubung dengan audiens.",
        en: "Developing visual and written content designed to communicate ideas and connect with audiences."
      }
    },
    {
      number: "05",
      titleKey: "skills.writing.title",
      descKey: "skills.writing.desc",
      title: { id: "Creative Writing", en: "Creative Writing" },
      desc: {
        id: "Mengeksplorasi ide melalui kata, storytelling, caption, dan tulisan editorial.",
        en: "Exploring ideas through words, storytelling, captions, and editorial writing."
      }
    },
    {
      number: "06",
      titleKey: "skills.research.title",
      descKey: "skills.research.desc",
      title: { id: "Research / Science", en: "Research / Science" },
      desc: {
        id: "Mengeksplorasi ide ilmiah dan mengubah riset menjadi output kreatif yang jelas dan engaging.",
        en: "Exploring scientific ideas and turning research into clear, engaging creative outputs."
      }
    },
    {
      number: "07",
      titleKey: "skills.presentation.title",
      descKey: "skills.presentation.desc",
      title: { id: "Presentation Design", en: "Presentation Design" },
      desc: {
        id: "Mengubah informasi menjadi presentasi yang terstruktur, engaging, dan visual.",
        en: "Transforming information into structured, engaging, and visually compelling presentations."
      }
    },
    {
      number: "08",
      titleKey: "skills.ai.title",
      descKey: "skills.ai.desc",
      title: { id: "AI-assisted Creative Work", en: "AI-assisted Creative Work" },
      desc: {
        id: "Menggunakan AI sebagai alat kreatif untuk ideasi, eksperimen, pengembangan visual, dan eksplorasi workflow.",
        en: "Using AI as a creative tool for ideation, experimentation, visual development, and workflow exploration."
      }
    }
  ];

  /* ------------------------------------------------------------
     SERVICES DATA
     ------------------------------------------------------------ */
  const services = [
    { number: "01", title: { id: "Website Development", en: "Website Development" } },
    { number: "02", title: { id: "UI / Web Design", en: "UI / Web Design" } },
    { number: "03", title: { id: "Graphic Design", en: "Graphic Design" } },
    { number: "04", title: { id: "Social Media & Content", en: "Social Media & Content" } },
    { number: "05", title: { id: "Presentation Design", en: "Presentation Design" } },
    { number: "06", title: { id: "Creative Writing", en: "Creative Writing" } },
    { number: "07", title: { id: "Research / Science Visualisation", en: "Research / Science Visualisation" } },
    { number: "08", title: { id: "AI-assisted Creative Work", en: "AI-assisted Creative Work" } }
  ];

  /* ------------------------------------------------------------
     TRANSLATIONS
     ------------------------------------------------------------ */
  const translations = {
    id: {
      "nav.home": "Beranda",
      "nav.about": "Tentang",
      "nav.skills": "Keahlian",
      "nav.work": "Karya",
      "nav.experience": "Pengalaman",
      "nav.services": "Layanan",
      "nav.contact": "Kontak",
      "hero.meta": "Personal Creative Portfolio",
      "hero.subtitle": "Seorang multidisciplinary creative yang mengeksplorasi desain, teknologi, riset, konten, dan ide.",
      "hero.support": "Membangun, mendesain, meneliti, dan menciptakan di berbagai medium.",
      "hero.ctaPrimary": "Jelajahi Karya",
      "hero.ctaSecondary": "Di Balik KYARAEZ",
      "hero.scroll": "Gulir",
      "about.title": "Di Balik KYARAEZ",
      "about.lead": "Hai, saya Rezkya Putri Novianti, sosok di balik KYARAEZ.",
      "about.p1": "KYARAEZ adalah identitas kreatif personal saya — ruang di mana saya mengumpulkan hal-hal yang saya ciptakan, eksplorasi, dan pelajari sepanjang perjalanan.",
      "about.p2": "Dari membangun website dan merancang pengalaman digital hingga desain grafis, konten, tulisan, riset, presentasi, dan bereksperimen dengan karya kreatif berbantuan AI, KYARAEZ merepresentasikan rasa ingin tahu saya di berbagai bidang kreatif.",
      "about.p3": "Portofolio ini adalah kumpulan proyek, pengalaman, ide, dan progres saya — bukan hanya sebagai pencipta, tetapi sebagai seseorang yang terus belajar, bereksperimen, dan berkembang.",
      "about.welcome": "Selamat datang di KYARAEZ.",
      "skills.title": "Yang Saya Lakukan",
      "skills.support": "Toolkit kreatif multidisiplin yang dibentuk oleh rasa ingin tahu, eksperimen, dan pembelajaran terus-menerus.",
      "work.title": "Karya Terpilih",
      "work.support": "Pilihan karya yang telah saya bangun, desain, eksplorasi, dan ciptakan.",
      "work.filterAll": "Semua",
      "work.filterWeb": "Web",
      "work.filterDesign": "Desain",
      "work.filterContent": "Konten",
      "work.filterResearch": "Riset",
      "work.filterCreative": "Kreatif",
      "work.view": "Lihat",
      "experience.title": "Pengalaman & Pencapaian",
      "playground.title": "Creative Playground",
      "playground.support": "Ruang untuk eksperimen, ide kecil, eksplorasi visual, tulisan, prototipe, cuplikan riset, dan hal-hal yang tidak selalu masuk ke portofolio utama.",
      "services.title": "Yang Bisa Saya Bantu",
      "services.support": "Layanan kreatif terpilih dan area yang saya kerjakan.",
      "contact.heading": "Punya ide di pikiran?",
      "contact.support": "Baik itu website, proyek visual, kolaborasi kreatif, atau sekadar ide yang layak dieksplorasi — mari bicara.",
      "contact.cta": "Mari Bekerja Sama",
      "contact.email": "Email",
      "footer.tag": "Personal Creative Portfolio",
      "footer.rights": "Hak cipta dilindungi.",
      "modal.overview": "Ikhtisar",
      "modal.role": "Peran",
      "modal.tools": "Tools",
      "modal.process": "Proses",
      "modal.outcome": "Hasil",
      "modal.link": "Lihat Proyek",
      "modal.close": "Tutup"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.work": "Work",
      "nav.experience": "Experience",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "hero.meta": "Personal Creative Portfolio",
      "hero.subtitle": "A multidisciplinary creative exploring design, technology, research, content, and ideas.",
      "hero.support": "Building, designing, researching, and creating across different mediums.",
      "hero.ctaPrimary": "Explore My Work",
      "hero.ctaSecondary": "Behind KYARAEZ",
      "hero.scroll": "Scroll",
      "about.title": "Behind KYARAEZ",
      "about.lead": "Hi, I'm Rezkya Putri Novianti, the person behind KYARAEZ.",
      "about.p1": "KYARAEZ is my personal creative identity — a space where I bring together the things I create, explore, and learn along the way.",
      "about.p2": "From building websites and designing digital experiences to graphic design, content, writing, research, presentations, and experimenting with AI-assisted creative work, KYARAEZ represents my curiosity across different creative fields.",
      "about.p3": "This portfolio is a collection of my projects, experiences, ideas, and progress — not just as a creator, but as someone who is continuously learning, experimenting, and growing.",
      "about.welcome": "Welcome to KYARAEZ.",
      "skills.title": "What I Do",
      "skills.support": "A multidisciplinary creative toolkit shaped by curiosity, experimentation, and constant learning.",
      "work.title": "Selected Work",
      "work.support": "A selection of things I've built, designed, explored, and created.",
      "work.filterAll": "All",
      "work.filterWeb": "Web",
      "work.filterDesign": "Design",
      "work.filterContent": "Content",
      "work.filterResearch": "Research",
      "work.filterCreative": "Creative",
      "work.view": "View",
      "experience.title": "Experience & Achievements",
      "playground.title": "Creative Playground",
      "playground.support": "A space for experiments, small ideas, visual explorations, writing, prototypes, research snippets, and things that don't necessarily belong in the main portfolio.",
      "services.title": "What I Can Help With",
      "services.support": "Selected creative services and areas I work across.",
      "contact.heading": "Have an idea in mind?",
      "contact.support": "Whether it's a website, visual project, creative collaboration, or simply an idea worth exploring — let's talk.",
      "contact.cta": "Let's Work Together",
      "contact.email": "Email",
      "footer.tag": "Personal Creative Portfolio",
      "footer.rights": "All rights reserved.",
      "modal.overview": "Overview",
      "modal.role": "Role",
      "modal.tools": "Tools",
      "modal.process": "Process",
      "modal.outcome": "Outcome",
      "modal.link": "View Project",
      "modal.close": "Close"
    }
  };

  /* ------------------------------------------------------------
     STATE
     ------------------------------------------------------------ */
  let currentLang = localStorage.getItem("kyaraez-lang") || "id";
  let currentTheme = localStorage.getItem("kyaraez-theme") || null;
  let currentFilter = "all";
  let activeModalProject = null;

  /* ------------------------------------------------------------
     DOM REFS
     ------------------------------------------------------------ */
  const body = document.body;
  const header = document.getElementById("siteHeader");
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");
  const themeToggle = document.getElementById("themeToggle");
  const workGrid = document.getElementById("workGrid");
  const skillsGrid = document.getElementById("skillsGrid");
  const servicesGrid = document.getElementById("servicesGrid");
  const timeline = document.getElementById("timeline");
  const playgroundTrack = document.getElementById("playgroundTrack");
  const projectModal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const backToTop = document.getElementById("backToTop");
  const cursor = document.getElementById("cursor");
  const cursorTrail = document.getElementById("cursorTrail");
  const cursorLabel = cursor ? cursor.querySelector(".cursor-label") : null;

  /* ------------------------------------------------------------
     THEME
     ------------------------------------------------------------ */
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    currentTheme = theme;
  }

  function initTheme() {
    if (currentTheme) {
      applyTheme(currentTheme);
    } else {
      applyTheme(getSystemTheme());
    }
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("kyaraez-theme", next);
  }

  /* ------------------------------------------------------------
     LANGUAGE
     ------------------------------------------------------------ */
  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "id" ? "id" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    renderSkills();
    renderServices();
    renderProjects();
    if (activeModalProject) {
      openProjectModal(activeModalProject, true);
    }
  }

  function initLanguage() {
    applyLanguage(currentLang);
  }

  /* ------------------------------------------------------------
     RENDER: SKILLS
     ------------------------------------------------------------ */
  function renderSkills() {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = skills
      .map(function (s) {
        return (
          '<article class="skill-card reveal">' +
          '<span class="skill-number">' + s.number + "</span>" +
          '<h3 class="skill-title">' + s.title[currentLang] + "</h3>" +
          '<p class="skill-desc">' + s.desc[currentLang] + "</p>" +
          "</article>"
        );
      })
      .join("");
    observeReveals();
  }

  /* ------------------------------------------------------------
     RENDER: SERVICES
     ------------------------------------------------------------ */
  function renderServices() {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = services
      .map(function (s) {
        return (
          '<article class="service-card reveal">' +
          '<span class="service-number">' + s.number + "</span>" +
          '<h3 class="service-title">' + s.title[currentLang] + "</h3>" +
          "</article>"
        );
      })
      .join("");
    observeReveals();
  }

  /* ------------------------------------------------------------
     RENDER: PROJECTS
     ------------------------------------------------------------ */
  function renderProjects() {
    if (!workGrid) return;
    const filtered =
      currentFilter === "all"
        ? projects
        : projects.filter(function (p) {
            return p.category === currentFilter;
          });

    workGrid.innerHTML = filtered
      .map(function (p, index) {
        const num = String(index + 1).padStart(2, "0");
        return (
          '<article class="project-card" data-category="' +
          p.category +
          '" data-id="' +
          p.id +
          '" data-hover="view" role="button" tabindex="0" aria-label="' +
          p.title +
          '">' +
          '<div class="project-image-wrap">' +
          '<img src="' +
          p.image +
          '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' +
          '<div class="project-image-overlay">' +
          '<span class="project-view-hint">' +
          t("work.view") +
          "</span>" +
          "</div>" +
          '<span class="placeholder-label" style="pointer-events:none">' +
          p.image +
          "</span>" +
          "</div>" +
          '<div class="project-meta">' +
          '<span class="project-number">' +
          num +
          "</span>" +
          "<span>" +
          p.category +
          "</span>" +
          "<span>" +
          p.year +
          "</span>" +
          "</div>" +
          '<h3 class="project-title">' +
          p.title +
          "</h3>" +
          '<p class="project-desc">' +
          p.description +
          "</p>" +
          "</article>"
        );
      })
      .join("");

    workGrid.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("click", function () {
        const id = parseInt(card.getAttribute("data-id"), 10);
        const project = projects.find(function (p) {
          return p.id === id;
        });
        if (project) openProjectModal(project);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  /* ------------------------------------------------------------
     RENDER: EXPERIENCE
     ------------------------------------------------------------ */
  function renderExperience() {
    if (!timeline) return;
    timeline.innerHTML = experiences
      .map(function (e) {
        return (
          '<div class="timeline-item reveal">' +
          '<span class="timeline-year">' +
          e.year +
          "</span>" +
          '<h3 class="timeline-title">' +
          e.title +
          "</h3>" +
          '<span class="timeline-category">' +
          e.category +
          "</span>" +
          '<p class="timeline-desc">' +
          e.description +
          "</p>" +
          "</div>"
        );
      })
      .join("");
    observeReveals();
  }

  /* ------------------------------------------------------------
     RENDER: PLAYGROUND
     ------------------------------------------------------------ */
  function renderPlayground() {
    if (!playgroundTrack) return;
    playgroundTrack.innerHTML = playgroundItems
      .map(function (item) {
        return (
          '<article class="playground-item">' +
          '<span class="playground-tag">' +
          item.tag +
          "</span>" +
          '<h3 class="playground-title">' +
          item.title +
          "</h3>" +
          '<p class="playground-text">' +
          item.text +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ------------------------------------------------------------
     PROJECT MODAL
     ------------------------------------------------------------ */
  function openProjectModal(project, silent) {
    if (!projectModal || !modalContent) return;
    activeModalProject = project;

    const toolsHtml = (project.tools || [])
      .map(function (tool) {
        return '<span class="modal-tool">' + tool + "</span>";
      })
      .join("");

    modalContent.innerHTML =
      '<span class="modal-category">' +
      project.category +
      " · " +
      project.year +
      "</span>" +
      '<h2 class="modal-title" id="modalTitle">' +
      project.title +
      "</h2>" +
      '<div class="modal-image">' +
      '<img src="' +
      project.image +
      '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' +
      "</div>" +
      '<div class="modal-grid">' +
      "<div>" +
      '<p class="modal-label">' +
      t("modal.role") +
      "</p>" +
      '<p class="modal-value">' +
      project.role +
      "</p>" +
      "</div>" +
      "<div>" +
      '<p class="modal-label">' +
      t("modal.tools") +
      "</p>" +
      '<div class="modal-tools">' +
      toolsHtml +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="modal-body">' +
      '<p class="modal-label">' +
      t("modal.overview") +
      "</p>" +
      "<p>" +
      (project.overview || project.description) +
      "</p>" +
      '<p class="modal-label">' +
      t("modal.process") +
      "</p>" +
      "<p>" +
      (project.process || "—") +
      "</p>" +
      '<p class="modal-label">' +
      t("modal.outcome") +
      "</p>" +
      "<p>" +
      (project.outcome || "—") +
      "</p>" +
      "</div>" +
      (project.link && project.link !== "#"
        ? '<a href="' +
          project.link +
          '" class="btn btn-primary modal-link" target="_blank" rel="noopener noreferrer">' +
          t("modal.link") +
          "</a>"
        : "");

    if (!silent) {
      projectModal.hidden = false;
      requestAnimationFrame(function () {
        projectModal.classList.add("is-open");
      });
      document.body.style.overflow = "hidden";
      const closeBtn = projectModal.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    }
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("is-open");
    document.body.style.overflow = "";
    activeModalProject = null;
    setTimeout(function () {
      projectModal.hidden = true;
    }, 350);
  }

  /* ------------------------------------------------------------
     FILTERS
     ------------------------------------------------------------ */
  function initFilters() {
    document.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".filter-btn").forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderProjects();
      });
    });
  }

  /* ------------------------------------------------------------
     NAVIGATION
     ------------------------------------------------------------ */
  function initNav() {
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
        const open = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
        menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.style.overflow = open ? "hidden" : "";
      });

      navLinks.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", "Open menu");
          document.body.style.overflow = "";
        });
      });
    }

    // Active section on scroll
    const sections = document.querySelectorAll("section[id]");
    function updateActiveNav() {
      const scrollY = window.scrollY + 120;
      sections.forEach(function (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const link = document.querySelector('.nav-link[href="#' + id + '"]');
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    }

    window.addEventListener("scroll", function () {
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 40);
      }
      if (backToTop) {
        backToTop.classList.toggle("visible", window.scrollY > 600);
      }
      updateActiveNav();
    }, { passive: true });
  }

  /* ------------------------------------------------------------
     CUSTOM CURSOR
     ------------------------------------------------------------ */
  function initCursor() {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) {
      body.classList.add("is-touch");
      return;
    }

    body.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let rafId = null;

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
        cursor.classList.add("visible");
      }
      if (cursorTrail) cursorTrail.classList.add("visible");
    }

    function animateTrail() {
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      if (cursorTrail) {
        cursorTrail.style.transform = "translate(" + trailX + "px, " + trailY + "px)";
      }
      rafId = requestAnimationFrame(animateTrail);
    }

    document.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animateTrail);

    document.addEventListener("mouseleave", function () {
      if (cursor) cursor.classList.remove("visible");
      if (cursorTrail) cursorTrail.classList.remove("visible");
    });

    // Hover states
    function setHover(label) {
      if (!cursor) return;
      cursor.classList.add("is-hover");
      if (label === "view") {
        cursor.classList.add("is-view");
        if (cursorLabel) cursorLabel.textContent = "VIEW";
      } else if (label === "explore") {
        cursor.classList.add("is-explore");
        if (cursorLabel) cursorLabel.textContent = "EXPLORE";
      } else {
        if (cursorLabel) cursorLabel.textContent = "";
      }
    }

    function clearHover() {
      if (!cursor) return;
      cursor.classList.remove("is-hover", "is-view", "is-explore");
      if (cursorLabel) cursorLabel.textContent = "";
    }

    document.addEventListener("mouseover", function (e) {
      const target = e.target.closest("[data-hover], a, button, .project-card, .skill-card, .service-card, .filter-btn");
      if (!target) {
        clearHover();
        return;
      }
      const hoverType = target.getAttribute("data-hover");
      if (hoverType === "view" || target.classList.contains("project-card")) {
        setHover("view");
      } else if (hoverType === "explore") {
        setHover("explore");
      } else {
        setHover("");
      }
    });
  }

  /* ------------------------------------------------------------
     SCROLL REVEAL
     ------------------------------------------------------------ */
  let revealObserver = null;

  function observeReveals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }

    document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------
     EVENT BINDINGS
     ------------------------------------------------------------ */
  function bindEvents() {
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        localStorage.setItem("kyaraez-lang", lang);
        applyLanguage(lang);
      });
    });

    if (projectModal) {
      projectModal.querySelectorAll("[data-close-modal]").forEach(function (el) {
        el.addEventListener("click", closeProjectModal);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && projectModal && projectModal.classList.contains("is-open")) {
        closeProjectModal();
      }
    });

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ------------------------------------------------------------
     INIT
     ------------------------------------------------------------ */
  function init() {
    initTheme();
    initLanguage();
    renderSkills();
    renderServices();
    renderProjects();
    renderExperience();
    renderPlayground();
    initFilters();
    initNav();
    initCursor();
    bindEvents();
    observeReveals();

    // Mark main content sections for reveal
    document.querySelectorAll(".section-header, .about-grid, .contact-inner").forEach(function (el) {
      el.classList.add("reveal");
    });
    observeReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
