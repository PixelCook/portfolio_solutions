/* All editable page content lives here. To add a project, workshop, or post,
   push a new object into the matching array below — index.html and render.js
   don't need to change. */

const LINKS = {
  email: "zacharyigould@gmail.com",
  // TODO: replace with your real LinkedIn profile URL before deploying.
  linkedin: "https://www.linkedin.com/in/zacharygo/",
  resume: "assets/resume.pdf",
};

const HERO = {
  eyebrow: "Solutions Engineer / Solutions Architect",
  name: "Zachary Gould",
  thesis:
    "Senior Developer Support Engineer at Cloudinary. I run POCs, own the technical sections of RFP/RFI responses, join sales calls as the technical voice in the room, and ship tools customers actually use. The title says support. The work is Solutions.",
  chips: [
    "Enterprise portfolio incl. Fortune 500 brands",
    "Multi-year SLA & CSAT track record",
    "14+ workshops, 3+ countries",
    "Countless shipped tools",
  ],
};

const CREDIBILITY = [
  {
    label: "Track record",
    detail:
      "Consistently exceeded SLA targets and sustained top-tier customer satisfaction across a multi-year enterprise account portfolio.",
  },
  {
    label: "Enablement",
    detail:
      "14+ technical workshops delivered across India, Israel, U.S., and more",
  },
  {
    label: "Pre-sales",
    detail:
      "Run POCs, own RFP/RFI technical sections, and join exploratory sales calls as the technical voice in the room.",
  },
  {
    label: "Post-sales",
    detail:
      "Help customers implement Cloudinary successfully, troubleshoot complex technical issues, and turn their requirements into practical, scalable solutions.",
  },
  {
    label: "Built & shipped",
    detail:
      "Many tools built from recurring technical asks across support and pre-sales, in active use today.",
  },
];

const CAPABILITIES = [
  "Own technical relationships across a portfolio of enterprise accounts, including Fortune 500 brands.",
  "Run proof-of-concepts and own the technical sections of RFP/RFI responses.",
  "Join exploratory sales calls as the technical voice in the room.",
  "Design and deliver technical enablement: workshops on CDN/DNS/TLS architecture, SQL/Snowflake analytics, media-transformation scripting, and more.",
  "Build internal and customer-facing tools that turn recurring technical asks into reusable products.",
];

const PROJECTS = [
  {
    name: "Cloudinary API Toolkit",
    tag: "Built for Cloudinary CS",
    problem:
      "Bulk Cloudinary account operations customers needed weren't available in the Console, and one-off scripts didn't scale or stay safe.",
    solution:
      "A hosted, no-code workflow builder for bulk Admin/Upload API operations, with reusable operation blocks, dry-run validation, retries, and per-account rate limiting.",
    outcome:
      "Lets operations, customer success teams, and customers run high-volume account changes independently, safely, and repeatably.",
    stack: ["Python", "FastAPI", "Cloudinary Admin/Upload APIs"],
    image: "assets/CloudinaryAPIToolkit.png",
    liveUrl: "https://cldtoolkit-730346332312.europe-west1.run.app/",
    repoUrl: "https://github.com/PixelCook/Cloudinary-API-toolkit",
  },
  {
    name: "Cloudinary Evaluator",
    tag: "Growth & CS tool for Cloudinary",
    problem:
      "Cloudinary usage is hard to size up quickly, for new prospects and even experienced customers.",
    solution:
      "A tool that inspects a HAR file or pasted HTML and scores how much of Cloudinary's optimization toolkit a site is actually using, with personalized, exportable recommendations.",
    outcome:
      "Gives customer-facing teams a fast, credible way to demonstrate optimization impact in a single sales or support conversation.",
    stack: ["React", "Vite"],
    liveUrl: "https://evaluator-a9d.pages.dev/",
    repoUrl: "https://github.com/PixelCook/evaluator",
    image: "assets/evaluator.jpg",
    imageAlt: "Cloudinary Evaluator scoring cloudinary.com at 94% of potential optimization value across 147 assets",
  },
  {
    name: "Video Tutorial Platform",
    tag: "Built for Cloudinary CS",
    problem:
      "Turning raw customer and demo videos into polished, publishable tutorials was a manual, one-off effort every time.",
    solution:
      "A pipeline that takes signed Cloudinary video uploads through transcription, AI-generated articles with timestamped stills, admin review, and a searchable public gallery.",
    outcome:
      "Used for customer-facing demo environments and internal enablement content.",
    stack: ["Next.js", "Prisma", "Cloud SQL (MySQL)", "Cloudinary", "Google Cloud Run"],
    image: "assets/cld_video.png",
    liveUrl: "https://cld-video-tutorial-git-730346332312.europe-west1.run.app/",
    accessNote: "Password-protected, password: tutorials",
  },
];

const WORKSHOPS = {
  intro:
    "14+ hands-on technical workshops delivered in person and remotely across India, Israel, and the U.S., designed to move technical teams from theory to implementation.",
  topics: [
    "CDN, DNS, and TLS architecture",
    "SQL and Snowflake analytics",
    "Image and video transformation workflows with Cloudinary APIs and SDKs",
    "Google Cloud infrastructure, deployment patterns, and operational design",
    "AWS tooling, integrations, and cloud-native workflows",
  ],
};

const WRITING = [
  {
    title: "Automate a Content Writing Workflow with Cloudinary + ChatGPT",
    url: "https://cloudinary.com/blog/automate-content-writing-workflow-cloudinary-chatgpt",
  },
  {
    title: "Automatically and Programmatically Update Assets Metadata",
    url: "https://cloudinary.com/blog/automatically-and-programmatically-update-assets-metadata",
  },
];

const BACKGROUND = {
  bio:
    "Before Cloudinary, I worked as a full-stack developer in PHP, JavaScript, React, React Native, and SQL. That's where I built the product instincts I now use to scope solutions and evaluate tradeoffs with customers.",
  founderNote:
    "Before software, I founded and ran a brewery for six years, scaling from 2 to 20 employees and 20x revenue growth through to a successful exit. Same ownership mentality, now applied to enterprise technical relationships.",
};