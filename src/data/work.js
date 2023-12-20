import { PACKAGE_ACTION, PREVIEW_ACTION } from "../constants";

import jana from "../logos/jana.png";
import nobul from "../logos/nobul.png";
import cfib from "../logos/cfib.png";
import girafo from "../logos/girafo.gif";
import keypath from "../logos/keypath.png";
import freelance from "../logos/freelance.png";
import arido from "../logos/arido.png";
import care from "../logos/care.png";

// TODO: set up package.json and preview actions

export const work = [
  {
    startDate: "May 2023",
    endDate: "Current",
    employer: {
      name: "JANA",
      website: "https://www.janacorporation.com/",
      logo: jana,
      about:
        "Providing natural gas providers with one-of-a-kind tools to manage risk, storage, and visualize assets.",
      address: {
        street: "1-305 Industrial Parkway South",
        city: "Aurora",
        region: "Ontario",
        country: "Canada",
      },
    },
    title: "Senior Full-Stack Developer",
    techStack: ["React", "TypeScript", ".Net", "Azure"],
    responsibilities: [
      "Leverage proven development practices in agile environment",
      "Conduct code reviews to ensure platform stability an extensibility",
      "Provide mentorship and guidance to the software development team",
      "Write clean, testable, maintainable, and performant code",
      "Implement unit and end-to-end testing",
      "Help the product, UX, and dev teams to ship user-friendly software",
      "Implement quality standards, guidelines, and design patterns",
      "Eliminate potential issues or risks within the platform",
      "Secure the software with the latest industry trends and services",
      "Cut down on tech debt and implement defensive code practices",
      "Promote communication and knowledge sharing between teams",
      "Implement source control and CI/CD best-practices",
    ],
  },
  {
    startDate: "October 2019",
    endDate: "April 2023",
    employer: {
      name: "Nobul",
      website: "https://nobul.com",
      logo: nobul,
      about:
        "An agent marketplace focused on revolutionizing real estate to deliver value and transparency to the consumer",
      address: {
        street: "130 King St. West",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
      },
      competitors: [
        {
          name: "Ideal Agent",
          website: "https://idealagent.com/",
          title: "Top 1% Local Real Estate Agents - Ideal Agent",
          favicon: "https://idealagent.com/favicon.ico",
        },
        {
          name: "UpNest",
          website: "https://upnest.com/",
          title: "Compare Real Estate Agents | Agents Compete For You!",
          favicon: "https://www.lt6p.com/re/img/favicon.ico",
        },
        {
          name: "HomeLight",
          website: "https://homelight.com/",
          title: "HomeLight: Buy, Sell, or Buy Before You Sell Your Home",
          favicon:
            "https://d1xt9s86fx9r45.cloudfront.net/assets/hl-production/assets/favicon-32x32-eea77ac60b2a12d93bd872db8e83de9ee79eb84b4c84a6c554ff785423989ac7.png",
        },
      ],
    },
    title: "Senior Front-end Dev, Team\u00a0Lead",
    techStack: ["React", "Node", "Postgres", "Firebase", "GCP"],
    responsibilities: [
      "Transitioned a custom SPA fully to Next.js",
      "Supporting full SMS integration via Twilio",
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
    actions: [PACKAGE_ACTION],
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
    actions: [PACKAGE_ACTION],
  },
  {
    startDate: "September 2018",
    endDate: "February 2019",
    employer: {
      name: "Girafo",
      employerWebsite: "",
      logo: girafo,
      about:
        "Girafo was a small, Canadian mortgage lender who wanted to simplify mortgage applications",
    },
    title: "Front-end Contractor",
    techStack: ["Vue", "Laravel", "MySQL", "Digital Ocean"],
    responsibilities: [
      "Set up a Vue.js front-end to handle dynamic mortgage applications",
      "Consulted on migrating from a PDF-based application to the web",
      "Leveraged design systems for rapid prototyping and development",
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
        "Keypath Education facilitates online course application and distribution for premiere post-secondary institutions",
      address: {
        street: "370 King St. West",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
      },
      competitors: [
        {
          name: "Pearson",
          website: "https://www.pearson.com/en-ca.html",
          title: "Create new possibilities with Pearson. Start learning today.",
          favicon:
            "https://www.pearson.com/conf/pearson/settings/wcm/templates/global-store-en-ca-template/favicon-on-light.ico",
        },
        {
          name: "Wiley Education Services",
          website: "https://universityservices.wiley.com/",
          title:
            "Higher Ed Consulting, Services & Solutions | Wiley University Services",
          favicon:
            "https://universityservices.wiley.com/wp-content/themes/wiley-wes/images/icons/favicon.ico",
        },
        {
          name: "Anthology",
          website: "https://www.anthology.com/",
          title: "Educational Technology Services | Anthology | North America",
          favicon: "https://www.anthology.com/favicon.ico",
        },
      ],
    },
    title: "Web Developer",
    techStack: ["jQuery", "React", "Vue", "MySQL", "University Servers"],
    responsibilities: [
      "Built course pages and interactive content for universities",
      "Translated lectures into interactive learning experiences",
      "Liaised with professors to create bespoke courseware",
      "Reimagined static quizzes in fun and interactive ways",
      "Fully customized popular Learning Management Systems",
      "Built testing tools to streamline course development",
      "Contributed to course development strategies",
      "Participated in our partners' design reviews",
      "Mentored colleagues on industry best-practices",
    ],
    actions: [PREVIEW_ACTION],
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
        "Association for Registered Interior Designers of Ontario is tasked with regulating and promoting the profession in the province",
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
  },
  {
    startDate: "August 2014",
    endDate: "August 2015",
    employer: {
      name: "CARE Centre for IENs",
      website: "https://care4nurses.org/",
      logo: care,
      about:
        "CARE Center is a non-profit organization helping internationally trained nurses transition their practice in Ontario",
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
  },
];
