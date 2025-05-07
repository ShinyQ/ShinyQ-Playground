
export interface AboutInfo {
  intro: string;
  philosophy: string[];
  workingStyle: string[];
  favoriteTech: string[];
  quote?: string;
  profilePhoto?: string;
}

export const aboutInfo: AboutInfo = {
  intro: "I'm a software engineer with over 3 years of experience specializing in backend and full-stack development. My journey began with a fascination for building systems that solve real problems efficiently. I've since worked across various domains including e-commerce, data processing, and enterprise software, always focusing on creating reliable, maintainable, and scalable solutions.",
  
  philosophy: [
    "Code should be as simple as possible, but no simpler. Complexity should only exist where it truly adds value.",
    "Systems should be designed for failure recovery rather than perfect operation. Resilience is key.",
    "Technical debt is sometimes necessary, but should be tracked and addressed methodically.",
    "Documentation is as important as the code itself. Write code for humans, not just machines."
  ],
  
  workingStyle: [
    "I believe in deep work and focused concentration for complex problems.",
    "I prefer asynchronous communication for routine matters, with synchronous discussions for collaborative problem-solving.",
    "I enjoy collaborative code reviews focused on knowledge sharing rather than just finding bugs.",
    "I value continuous learning and regularly dedicate time to exploring new technologies and approaches."
  ],
  
  favoriteTech: [
    "Backend: Go and Spring Boot for their performance and scalability",
    "Databases: PostgreSQL for relational data, MongoDB for document storage",
    "Infrastructure: Docker, Kubernetes, and Terraform for consistent environments",
    "DevOps: GitHub Actions for CI/CD pipelines",
    "Monitoring: Prometheus and Grafana for observability"
  ],
  
  quote: "The best code is no code at all. Every line of code you write is a line you'll have to maintain forever.",
  
  profilePhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=800"
};
