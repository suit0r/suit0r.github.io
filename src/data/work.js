import {
  ABOUT_ACTION,
  PACKAGE_ACTION,
  COMPETITORS_ACTION,
  PREVIEW_ACTION,
} from "../constants";

import nobul from "../logos/nobul.png";
import cfib from "../logos/cfib.png";
import girafo from "../logos/girafo.gif";
import keypath from "../logos/keypath.png";
import freelance from "../logos/freelance.png";
import arido from "../logos/arido.png";
import care from "../logos/care.png";

// TODO: this needs firebase.json packages, hotbar items, other demos

export const work = [
  {
    startDate: "October 2019",
    endDate: "Current",
    employer: {
      name: "Nobul",
      website: "https://nobul.com",
      logo: nobul,
      about:
        "An agent marketplace focused on revolutionizing real estate to deliver value and transparency to the consumer",
      address: {
        street: "170 King St. West",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
      },
    },
    title: "Senior Front-end Dev, Team Lead",
    techStack: ["React", "Node", "Postgres", "Firebase", "GCP"],
    responsibilities: [
      "Transitioned a custom SPA fully to Next.js",
      "Updated authentication for the new server-side paradigm",
      "Implementing new server/static rendering for improved SEO",
      "Implementing performant and resilient architecture",
      "Maximizing user-friendly operation at scale",
      "Implementing resilient version control practices",
      "Deploying Websockets and push notifications systems",
      "Implemented real-time bug tracking for various departments",
      "Building internal dashboard with real-time communication",
      "Optimizing and safeguarding company asset delivery",
      "Crafting email campaigns which improve our IP reputation",
      "Enforcing accessibility and SEO best practices",
      "Managing cloud infrastructure services",
      "Extending the design system for rapid prototyping and scaling",
      "Integrating third-party tools and services at scale",
      "Mediating code reviews and team-building exercises",
      "Preserving a consistent release schedule in an agile environment",
      "Nurturing a healthy, efficient, and resilient work environment",
      "Hiring talent for junior and senior technical positions",
      "Brainstorming feature releases and architectural initiatives",
      "Contributing creatives to the marketing and product teams",
    ],
    actions: [
      // { name: ABOUT_ACTION, dataKey: "employer" },
      ABOUT_ACTION,
      PACKAGE_ACTION,
      COMPETITORS_ACTION,
    ],
  },
  {
    startDate: "July 2021",
    endDate: "August 2021",
    employer: {
      name: "CFIB",
      website: "https://www.cfib-fcei.ca/en/",
      logo: cfib,
      about:
        "Canadian Finance Insurance Bureau is an association dedicated to helping consumers find the best businesses",
      address: {
        street: "401-4141 Younge St.",
        city: "North York",
        region: "Ontario",
        country: "Canada",
      },
    },
    title: "Front-end Contractor",
    techStack: ["React", "Nextjs", "Redis", "Azure"],
    responsibilities: [
      "Audited CFIB website to meet AA WCAG requirements",
      "Retrofitted pages and components to meet AA standards",
      "Improved stability and accessibility of live Next.js pages",
      "Created new fully accessible React components",
      "Consulted on accessibility best-practices roadmap",
    ],
    actions: [ABOUT_ACTION, PACKAGE_ACTION],
  },
  {
    startDate: "September 2018",
    endDate: "February 2019",
    employer: {
      name: "Girafo",
      employerWebsite: "",
      logo: girafo,
      about:
        "Girafo was a small, Canadian mortgage lender who wanted to simplify mortgage applications with a fully dynamic web form",
    },
    title: "Front-end Contractor",
    techStack: ["Vue", "Laravel", "MySQL", "Digital Ocean"],
    responsibilities: [
      "Set up a Vue.js front-end to handle dynamic mortgage applications",
      "Consulted on migrating from a PDF-based application to the web",
      "Leveraged design systems for rapid prototyping and development",
      "Adapted the design system to meet client branding criteria",
      "Coordinated with a Laravel backend to submit mortgage form data",
      "Deployed a websockets service for live updates",
    ],
    // actions: [PREVIEW_ACTION],
  },
  {
    startDate: "October 2017",
    endDate: "February 2019",
    employer: {
      name: "Keypath Education",
      website: "https://keypathedu.com/",
      logo: keypath,
      about:
        "Keypath Education facilitates online course application and distribution for premiere post-secondary institutions around the world",
      address: {
        street: "370 King St. West",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
      },
    },
    title: "Web Developer",
    techStack: ["jQuery", "React", "Vue", "MySQL", "University Servers"],
    responsibilities: [
      "Built course pages and interactive content for universities",
      "Fully customized popular Learning Management Systems",
      "Built testing tools to streamline course development",
      "Contributed to course development strategies",
      "Participated in our partners' design reviews",
      "Mentored colleagues on industry best-practices",
    ],
    actions: [ABOUT_ACTION, PREVIEW_ACTION, COMPETITORS_ACTION],
  },
  {
    startDate: "April 2016",
    endDate: "October 2017",
    employer: {
      name: "Freelancer",
      website: "",
      logo: freelance,
    },
    title: "Web Developer and UX/UI Designer",
    techStack: ["jQuery", "Angular", "Vue", "MySQL", "MongoDb", "Firebase"],
    responsibilities: [
      "Prototyped, developed, and maintained custom websites",
      "Consulted on industry trends and best-practices",
      "Wrote high quality, SEO-optimized content",
      "Designed bespoke experiences based on the client's vision",
      "Translated industry lingo to clients to promote transparency",
    ],
  },
  {
    startDate: "November 2015",
    endDate: "October 2017",
    employer: {
      name: "ARIDO",
      website: "https://arido.ca/",
      logo: arido,
      about:
        "Association for Registered Interior Designers of Ontario is tasked with the regulatory enforcement and enrollment of Interior Designers in the province",
      address: {
        street: "C536-43 Hanna Ave.",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
      },
    },
    title: "Communications Coordinator",
    techStack: ["JavaScript", "Wordpress"],
    responsibilities: [
      "Leveraged open-source technologies to save company resources",
      "Collected and routed user data to various databases",
      "Created microsites for organization events",
      "Built a lightweight contract editing web app",
      "Set up an awards submission platform and payment processing",
      "Managed and curated website content",
      "Updated app and website interfaces for digital and print content",
      "Coordinated email and print communications",
      "Liaised with industry partners as well as our membership",
    ],
    actions: [ABOUT_ACTION],
  },
  {
    startDate: "August 2014",
    endDate: "August 2015",
    employer: {
      name: "CARE Centre for IENs",
      website: "https://care4nurses.org/",
      logo: care,
      about:
        "CARE Center is a non-profit organization helping newly immigrated nurses update their skills to transition their practice in Ontario",
      address: {
        street: "1901-365 Bloor St. East",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
      },
    },
    title: "Communications Associate",
    techStack: ["JavaScript", "Wordpress"],
    responsibilities: [
      "Coordinated syndication and Social Media strategies",
      "Designed and edited content for print and web",
      "Maintained the Wordpress website",
      "Managed Google AdWords campaigns",
      "Ran professional development and computer literacy seminars",
      "Set up tradeshows and conferences",
    ],
    actions: [ABOUT_ACTION],
  },
];
