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
    tags: ["Dashboard", "E-commerce Backend", "Order Management"],
    role: "Backend Engineer",
    techStack: ["Laravel", "PHP", "MySQL", "AWS S3", "Sentry", "DigitalOcean"],
    gallery: "projects/shumidashboard",
  },
  {
    id: "stock-portfolio-optimizer",
    title: "S&P500 Portfolio Optimizer (SLSQP)",
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
];
