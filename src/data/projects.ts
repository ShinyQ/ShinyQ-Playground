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
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "shumishop",
    title: "Shumi Shop",
    description:
      "A specialized e-commerce platform for anime action figures and collectibles, providing users with a seamless shopping experience. Built with React, Laravel and MySQL, the platform includes Google OAuth login, transactional email system, RajaOngkir API for real-time shipping rates, and integrated Ipaymu Payment Gateway for secure transactions. Deployed on DigitalOcean with AWS S3 for asset storage and Sentry for error monitoring.",
    coverImage: "/projects/cover/shumi.png",
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
    gallery: [
      "/projects/cover/shumi.png",
      "/projects/shumi/shumi1.png",
      "/projects/shumi/shumi2.png",
      "/projects/shumi/shumi3.png",
      "/projects/shumi/shumi4.png",
      "/projects/shumi/shumi5.png",
    ],
  },
  {
    id: "shumi-dashboard",
    title: "Shumi Admin Dashboard",
    description:
      "An admin dashboard system for Shumi Shop, architected for high-throughput e-commerce ops. Includes multi-state order workflows, partial payment reconciliation, voucher/banner CRUD, asset taxonomy (manufacturer, series, character), and real-time ledger sync. Features secure role-based access, dynamic query filtering, manual receipt parsing, and observability via Sentry. Engineered for scale and operational resilience.",
    coverImage: "/projects/cover/shumidashboard.png",
    tags: ["Admin Panel", "E-commerce Backend", "Order Management"],
    role: "Backend Engineer",
    techStack: ["Laravel", "PHP", "MySQL", "AWS S3", "Sentry", "DigitalOcean"],
    gallery: [
      "/projects/cover/shumidashboard.png",
      "/projects/shumidashboard/shumidashboard1.png",
      "/projects/shumidashboard/shumidashboard2.png",
      "/projects/shumidashboard/shumidashboard3.png",
      "/projects/shumidashboard/shumidashboard4.png",
      
    ],
  },
  {
    id: "stock-portfolio-optimizer",
    title: "S&P 500 Portfolio Optimizer (SLSQP)",
    description: "A financial optimization web app built with Streamlit, leveraging SLSQP to maximize monthly stock portfolio returns under custom constraints. Supports asset diversification, sector-based allocation caps, and historical Yahoo Finance data analysis. Features include dynamic optimization, interactive UI, and investor-specific risk profiling for data-driven allocation decisions.",
    coverImage: "/projects/cover/stockoptimization.png",
    tags: ["Portfolio Optimization", "Streamlit App", "SLSQP", "Finance"],
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
    gallery: [
      "/projects/cover/stockoptimization.png",
      "/projects/stockoptimization/stockopt1.png",
      "/projects/stockoptimization/stockopt2.png",
      "/projects/stockoptimization/stockopt3.png",
      
    ]
  },
];
