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
}

export const projects: Project[] = [
  {
    id: "shumishop",
    title: "Shumi Shop",
    description:
      "An e-commerce platform for anime figures and collectibles, featuring pre-order, late pre-order, ready stock, and voucher support. Delivers a smooth shopping experience with secure checkout, real-time shipping, and email updates.",
    coverImage: "projects/shumi/cover.png",
    tags: ["E-commerce", "Web Development", "Anime Collectibles"],
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
    tags: ["Dashboard", "E-commerce", "Order Management"],
    role: "Backend Engineer",
    techStack: ["Laravel", "PHP", "MySQL", "AWS S3", "Sentry", "DigitalOcean"],
    gallery: "projects/shumidashboard",
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
  },
  {
    id: "shinqy-portfolio",
    title: "Personal Website",
    description: "A personal website for showcasing projects and sharing insights. Includes a blog, project portfolio, and a dashboard for managing content.",
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
      "Redis"
    ],
    githubUrl: "https://github.com/ShinyQ/shinyq-playground",
  },
  {
    id: "sentiboard",
    title: "Sentiboard",
    description: "A sentiment analysis dashboard designed for universities, built to manage and analyze social media data from Twitter. Features include automated data crawling, sentiment data management, real-time sentiment statistics, and sentiment prediction using a fine-tuned IndoBERT model. Enables decision-makers to monitor public perception efficiently with NLP-driven insights and an intuitive interface. Designed for extensibility and data-driven strategy.",
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
    id: "helby",
    title: "Helby: Baby Development Monitoring Apps",
    description: "A mobile-first UI/UX design case study for a baby development tracking app, focused on guiding new parents through critical growth milestones. Features include intuitive input flows for daily tracking, personalized growth insights, reminder systems, and milestone visualization based on WHO standards. Designed with empathy-driven UX principles, prioritizing clarity, accessibility, and emotional support for first-time users.",
    coverImage: "projects/helby/cover.png",
    tags: ["UI/UX Design"],
    role: "UI/UX Designer",
    techStack: [
      "User Centered Design",
      "Figma"
    ],
    docUrl: "https://kurniadiahmadwijaya.medium.com/studi-kasus-rancangan-ui-ux-aplikasi-pemantau-perkembangan-bayi-369886df3652"
  }
];
