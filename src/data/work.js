import {
  ABOUT_ACTION,
  PACKAGE_ACTION,
  COMPETITORS_ACTION,
  PREVIEW_ACTION,
} from "../constants";

// TODO: this needs firebase.json packages, hotbar items, other demos

export const work = [
  {
    startDate: "October 2019",
    endDate: "Current",
    employer: "Nobul",
    employerWebsite: "https://nobul.com",
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
      "Implement real-time bug reporting platform for various departments",
      "Building internal dashboard with real-time communication",
      "Optimizing and safeguarding company asset delivery",
      "Crafting email campaigns optimized for preserving high IP reputation",
      "Enforcing accessibility and SEO best practices",
      "Managing cloud infrastructure and networking assets and services",
      "Extending the design system for rapid prototyping and scaling",
      "Liaising with the upper management to implement the next generation of the app",
      "Integrating third-party tools and services at scale",
      "Mediating code reviews and team-building exercises",
      "Preserving a consistent release schedule in an agile environment",
      "Nurturing a healthy, efficient and resilient work environment",
      "Hiring talent for junior and senior technical positions",
      "Brainstorming feature releases and architectural initiatives",
      "Contributing creative material to the marketing and product teams",
    ],
    actions: [ABOUT_ACTION, PREVIEW_ACTION, PACKAGE_ACTION, COMPETITORS_ACTION],
  },
  {
    startDate: "July 2021",
    endDate: "August 2021",
    employer: "CFIB",
    employerWebsite: "https://www.cfib-fcei.ca/en/",
    title: "Front-end Contractor",
    techStack: ["React", "Nextjs", "Redis", "Azure"],
    responsibilities: [
      "Audited CFIB website to meet AA WCAG requirements",
      "Updated legacy pages with missing accessibility requirements",
      "Retrofitted components to meet AA standards",
      "Refactored live Next.js pages to improve stability and accessibility",
      "Created new and fully accessible React components",
      "Consulted on the roadmap to implement accessibility best practices",
    ],
    actions: [ABOUT_ACTION, PREVIEW_ACTION],
  },
  {
    startDate: "September 2018",
    endDate: "February 2019",
    employer: "Girafo",
    employerWebsite: "",
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
    actions: [PREVIEW_ACTION],
  },
  {
    startDate: "October 2017",
    endDate: "February 2019",
    employer: "Keypath Education",
    employerWebsite: "https://keypathedu.com/",
    title: "Web Developer",
    techStack: ["jQuery", "React", "Vue", "MySQL", "University Servers"],
    responsibilities: [
      "Built course pages and interactive content for universities",
      "Customized Learning Management Systems to handle new features and layouts",
      "Built testing tools to facilitate streamlined course development",
      "Contributed to project management and course development strategies",
      "Participated in product reviews for our partners' designs and prototypes",
      "Mentored colleagues on industry best-practices, technology trends, and web accessibility",
    ],
    actions: [ABOUT_ACTION, PREVIEW_ACTION, COMPETITORS_ACTION],
  },
  {
    startDate: "April 2016",
    endDate: "October 2017",
    employer: "Freelancer",
    employerWebsite: "",
    title: "Web Developer and UX/UI Designer",
    techStack: ["jQuery", "Angular", "Vue", "MySQL", "MongoDb", "Firebase"],
    responsibilities: [
      "Prototyped, developed, and maintained custom websites and content",
      "Consulted on industry trends, best-practices, and monetization prospects",
      "Wrote high quality, SEO-optimized content ",
      "Designed bespoke experiences based on the client's vision",
      "Translated industry lingo the client to clarify requirements and limitations",
    ],
  },
  {
    startDate: "November 2015",
    endDate: "October 2017",
    employer: "ARIDO",
    employerWebsite: "https://arido.ca/",
    title: "Communications Coordinator",
    techStack: ["JavaScript", "Wordpress"],
    responsibilities: [
      "Leveraged open-source web technologies to save company resources",
      "Collected and routed form data to form platforms",
      "Created microsites for various events",
      "Built a lightweight contract editing web app",
      "Set up an awards submission platform and payment processing unit",
      "Managed and curated website content",
      "Updated app and website interfaces for digital and print content",
      "Coordinated email and print communications",
      "Liaised with industry partners as well as our membership",
    ],
    actions: [ABOUT_ACTION, PREVIEW_ACTION],
  },
  {
    startDate: "August 2014",
    endDate: "August 2015",
    employer: "CARE Centre for IENs",
    employerWebsite: "https://care4nurses.org/",
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
  },
];
