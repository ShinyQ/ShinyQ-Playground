interface AboutInfo {
  intro: string;
  philosophy: string[];
  workingStyle: string[];
  favoriteTech: string[];
  quote?: string;
  profilePhoto?: string;
}

export const aboutInfo: AboutInfo = {
  intro:
    "I'm a software engineer with 3+ years of building backend and full-stack systems that don’t just work. They scale, they survive, and they matter. I started out obsessed with solving real-world problems using code, and that obsession turned into a career across fintech, e-commerce, SaaS, and AI platforms. What I build isn’t just functional. It’s designed to last, recover, and adapt.",

  philosophy: [
    "Keep things simple, but intentional. Simplicity should never come at the cost of power or flexibility.",
    "Design for failure, not perfection. Systems should recover gracefully, not collapse.",
    "Technical debt is a trade-off, not an excuse. I document, prioritize, and refactor strategically.",
    "Code is for humans first. Good documentation and clean architecture go hand in hand.",
  ],

  workingStyle: [
    "I believe in deep work and focused concentration for complex problems.",
    "I prefer asynchronous communication for routine matters, with synchronous discussions for collaborative problem-solving.",
    "I enjoy collaborative code reviews focused on knowledge sharing rather than just finding bugs.",
    "I value continuous learning and regularly dedicate time to exploring new technologies and approaches.",
  ],

  favoriteTech: [
    "Backend: Go and Spring Boot for their performance and scalability",
    "Databases: PostgreSQL for relational data, MongoDB for document storage",
    "Infrastructure: Docker, Kubernetes, and Terraform for consistent environments",
    "DevOps: GitHub Actions for CI/CD pipelines to automate and ship confidently",
    "Monitoring: Prometheus and Grafana for observability",
  ],

  quote:
    "Every line of code you write is a long-term contract. The best solution is the one you’ll proudly maintain.",

  profilePhoto: "/photo/profile.png",
};
