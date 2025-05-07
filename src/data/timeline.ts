
export interface TimelineItem {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  description: string[];
  tools?: string[];
  logo?: string;
  type: 'job' | 'freelance' | 'education' | 'certification' | 'event';
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    startDate: "2023-06",
    endDate: "Present",
    title: "Tech Solutions Inc.",
    subtitle: "Senior Backend Developer",
    description: [
      "Led the development of a microservices-based e-commerce platform",
      "Optimized API performance by 40% through Redis caching and query optimization",
      "Mentored junior developers and conducted code reviews"
    ],
    tools: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    type: "job"
  },
  {
    id: 2,
    startDate: "2021-08",
    endDate: "2023-05",
    title: "DataFlow Systems",
    subtitle: "Backend Engineer",
    description: [
      "Developed real-time data processing pipelines handling 10TB+ daily",
      "Built RESTful APIs for internal and external consumption",
      "Implemented robust error handling and monitoring systems"
    ],
    tools: ["Go", "Kafka", "MongoDB", "Docker", "AWS"],
    type: "job"
  },
  {
    id: 3,
    startDate: "2020-03",
    endDate: "2021-07",
    title: "StartupX",
    subtitle: "Full Stack Developer",
    description: [
      "Built user-facing features for a SaaS platform with 50K+ users",
      "Implemented authentication and authorization systems",
      "Collaborated with designers to translate mockups into working interfaces"
    ],
    tools: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    type: "job"
  },
  {
    id: 4,
    startDate: "2022-05",
    endDate: "2022-12",
    title: "Healthcare Analytics Project",
    subtitle: "Freelance Backend Developer",
    description: [
      "Developed data analysis pipeline for processing patient records",
      "Built secure API endpoints compliant with healthcare regulations",
      "Created automated reporting system for medical staff"
    ],
    tools: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    type: "freelance"
  },
  {
    id: 5,
    startDate: "2019-09",
    endDate: "2020-02",
    title: "E-learning Platform Redesign",
    subtitle: "Freelance Full Stack Developer",
    description: [
      "Rebuilt legacy e-learning platform with modern architecture",
      "Improved page load times by 60%",
      "Implemented responsive design and accessibility features"
    ],
    tools: ["Vue.js", "Laravel", "MySQL"],
    type: "freelance"
  },
  {
    id: 6,
    startDate: "2016-09",
    endDate: "2020-06",
    title: "University of Technology",
    subtitle: "Bachelor of Science in Computer Science",
    description: [
      "Graduated with honors (GPA: 3.8/4.0)",
      "Specialized in distributed systems and algorithms",
      "Completed capstone project: Distributed task scheduler"
    ],
    type: "education"
  },
  {
    id: 7,
    startDate: "2023-03",
    endDate: "2023-03",
    title: "AWS Certified Solutions Architect",
    subtitle: "Professional Level",
    description: [
      "Demonstrated expertise in designing distributed applications and systems on AWS",
      "Specialized in high-availability architecture and cost optimization"
    ],
    type: "certification"
  },
  {
    id: 8,
    startDate: "2022-02",
    endDate: "2022-02",
    title: "TechConf 2022",
    subtitle: "Speaker",
    description: [
      "Presented 'Scaling Microservices in Production' to audience of 300+ developers",
      "Shared practical lessons from implementing microservices at scale"
    ],
    type: "event"
  }
];
