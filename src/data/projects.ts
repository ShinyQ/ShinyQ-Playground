export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  role: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  gallery?: string;
  docUrl?: string;
  docPpt?: string;
}

export const projects: Project[] = [
  {
    id: "shinqy-portfolio",
    title: "ShinyQ Playground",
    description: "ShinyQ Playground is my personal site for showcasing projects, writing blogs, and testing ideas. It features a custom portfolio, a markdown-powered blog, and a simple dashboard to manage content. Built for performance and flexibility, it's deployed on Cloudflare Pages and designed to be clean, fast, and easy to extend. This site also acts as a sandbox where I experiment with frontend architecture, content workflows, and UI polish",
    coverImage: "projects/shinyqweb/cover.png",
    tags: ["Personal Website", "Blog", "Portfolio"],
    role: "Full Stack Developer",
    techStack: [
      "Astro",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Shadcn UI",
      "Cloudflare R2",
      "Cloudflare Pages",
      "Cloudflare KV Cache",
      "Google Analytics"
    ],
    githubUrl: "https://github.com/ShinyQ/shinyq-playground",
  },
  {
    id: "shumishop",
    title: "Shumi Shop",
    description:
      "An e-commerce platform for anime figures and collectibles, featuring pre-order, late pre-order, ready stock, and voucher support. Delivers a smooth shopping experience with secure checkout, real-time shipping, and email updates.",
    coverImage: "projects/shumi/cover.png",
    tags: ["Backend Development", "E-commerce"],
    role: "Backend Engineer",
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Google OAuth",
      "RajaOngkir API",
      "Payment Gateway",
      "AWS S3",
      "Sentry",
      "DigitalOcean",
    ],
    liveUrl: "https://shumi.shop/",
    gallery: "projects/shumi",
  },
  {
    id: "shumi-dashboard",
    title: "Shumi Admin Dashboard",
    description:
      "A backend system built for high-volume e-commerce operations, supporting order workflows, partial payments, voucher and banner management, and product categorization. Includes real-time ledger updates, secure role-based access, advanced filtering, manual receipt checks, and error tracking. Designed for scale and reliability.",
    coverImage: "projects/shumidashboard/cover.png",
    tags: ["Backend Development", "Dashboard", "E-commerce"],
    role: "Backend Engineer",
    techStack: ["Laravel", "PHP", "MySQL", "AWS S3", "Sentry", "DigitalOcean"],
    gallery: "projects/shumidashboard",
  },
  {
    id: "shumi-business-case",
    title: "Shumi Business Case",
    description: "This business document outlines Shumi's vision to become the leading digital ecosystem for hobby enthusiasts in Indonesia and globally. It presents a comprehensive strategy to address key challenges in the hobby market—such as high import costs, limited payment methods, and lack of trusted community platforms. Through an integrated suite of solutions including e-commerce, cardless installment plans, consignment, auctions, and community engagement tools, Shumi redefines how hobbyists buy, sell, and connect.",
    coverImage: "projects/shumibusinesscase/cover.png",
    tags: ["Business Case", "E-commerce"],
    role: "Business Analyst",
    techStack: [
      "Lean Canvas",
      "Market Segmentation",
      "SWOT",
      "User Persona",
    ],
    docUrl: "https://drive.google.com/file/d/1f4iuu8y_hygWFTkESG5zBd9lBJONbVHv/view?usp=sharing",
    docPpt: "https://drive.google.com/file/d/1_lTCW2N3FsOOJ2iJJgW8nkwMSMxuKsI2/view?usp=sharing"
  },
  {
    id: "eha",
    title: "Electronic Hacking Automation",
    description:
      "Ethical Hacking Analytics Tools is a Node.js app I built to support ethical hacking activities like vulnerability scanning and system monitoring. It runs on Express and uses the Nessus engine to handle scans. Data is stored in MySQL and caching is handled by Redis for better performance. The system includes a range of REST endpoints to manage assets, platforms, owners, and scan results. I also added email notifications via SMTP and audit logs to track everything properly. It’s built to be practical, modular, and easy to extend for real-world security workflows.",
    coverImage: "projects/eha/cover.png",
    tags: ["Backend Development", "Ethical Hacking"],
    role: "Backend Engineer",
    techStack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
      "Nessus",
      "Sequelize",
      "Nodemailer",
      "Axios",
      "AWS S3",
      "Sentry",
    ],
    gallery: "projects/eha",
  },
  {
    id: "helby",
    title: "Helby: Baby Development Monitoring Apps",
    description: "A mobile-first UI/UX design case study for a baby development tracking app, focused on guiding new parents through critical growth milestones. Features include intuitive input flows for daily tracking, personalized growth insights, reminder systems, and milestone visualization based on WHO standards. Designed with empathy-driven UX principles, prioritizing clarity, accessibility, and emotional support for first-time users.",
    coverImage: "projects/helby/cover.png",
    tags: ["UI/UX Design", "UX Research"],
    role: "UI/UX Designer",
    techStack: [
      "User Centered Design",
      "Heuristic Evaluation",
      "Figma",
    ],
    docUrl: "https://kurniadiahmadwijaya.medium.com/studi-kasus-rancangan-ui-ux-aplikasi-pemantau-perkembangan-bayi-369886df3652"
  },
  {
    id: "sentiboard",
    title: "Sentiboard",
    description: "A sentiment analysis dashboard for universities to monitor Twitter data. Features automated crawling, sentiment data management, and prediction using a fine-tuned IndoBERT model. Provides NLP-driven insights through an intuitive interface, helping decision-makers understand public perception. Built for extensibility, historical analysis, and data-driven strategies in academic decision-making.",
    coverImage: "projects/sentiboard/cover.png",
    tags: ["Web Development", "Dashboard", "NLP", "Sentiment Analysis", "Data Visualization"],
    role: "Full Stack Developer",
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
      "IndoBERT",
      "Twitter API",
      "Hugging Face"
    ],
    githubUrl: "https://github.com/ShinyQ/Django_Thesis-Sentiboard-University-Sentiment-App",
    docUrl: "https://drive.google.com/file/d/1uGpADhBxz4t5IbMPS2MBUxqXt3BmVRL0/view?usp=sharing",
    gallery: "projects/sentiboard",
  },
  {
    id: "stock-portfolio-optimizer",
    title: "S&P500 Portfolio Optimizer",
    description: "A web app for maximizing monthly stock returns under custom constraints. Supports portfolio diversification, sector limits, and historical data analysis. Includes interactive optimization, risk-based profiling, and real-time insights for smarter investment decisions.",
    coverImage: "projects/stockoptimization/cover.png",
    tags: ["Portfolio Optimization", "SLSQP", "Finance"],
    role: "Full Stack Developer",
    techStack: [
      "Python",
      "Pandas",
      "Numpy",
      "SciPy (SLSQP)",
      "Yahoo Finance API",
      "Streamlit",
      "Linear Programming"
    ],
    githubUrl: "https://github.com/ShinyQ/Streamlit_Stock-Allocation-Optimization-SLSQP",
    liveUrl: "https://stock-optimization-slsqp-group2.streamlit.app",
    gallery: "projects/stockoptimization",
  }
];
