export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime?: string;
  author?: string;
  category?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-astro",
    title: "Getting Started with Astro",
    date: "2024-03-15",
    coverImage: "placeholder.svg",
    excerpt:
      "Learn how to build lightning-fast websites with Astro's modern static site generation.",
    content: `
      Astro is a modern static site builder that delivers lightning-fast performance with a modern developer experience.

      ## Why Astro?

      Astro is designed for content-focused websites. It's perfect for blogs, documentation, marketing sites, and more.

      ## Key Features

      - **Zero JavaScript by default**: Astro ships zero JavaScript to the client by default.
      - **Island Architecture**: Use any UI framework (React, Vue, Svelte) for interactive components.
      - **Content Collections**: Type-safe content management with built-in validation.
      - **Fast Development**: Hot Module Replacement (HMR) with instant feedback.

      ## Getting Started

      To create a new Astro project, run:

      \`\`\`bash
      npm create astro@latest
      \`\`\`

      Follow the prompts to set up your project. You can choose from various templates and configurations.
    `,
    tags: ["Astro", "Web Development", "JavaScript"],
    readingTime: "5 min",
    author: "John Doe",
    category: "Web Development",
    featured: true,
  },
  {
    slug: "building-modern-ui-with-tailwind",
    title: "Building Modern UI with Tailwind CSS",
    date: "2024-03-10",
    coverImage: "placeholder.svg",
    excerpt:
      "Discover how to create beautiful, responsive interfaces using Tailwind CSS's utility-first approach.",
    content: `
      Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.

      ## Why Tailwind?

      - **No custom CSS needed**: Build your entire design system using utility classes.
      - **Responsive by default**: Easily create responsive designs with built-in breakpoints.
      - **Dark mode support**: Built-in dark mode utilities make it easy to implement dark themes.

      ## Getting Started

      Install Tailwind CSS in your project:

      \`\`\`bash
      npm install -D tailwindcss
      npx tailwindcss init
      \`\`\`

      Configure your template paths in \`tailwind.config.js\`:

      \`\`\`js
      module.exports = {
        content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      \`\`\`
    `,
    tags: ["Tailwind CSS", "CSS", "Web Design"],
    readingTime: "4 min",
    author: "Jane Smith",
    category: "CSS",
    featured: false,
  },
  {
    slug: "react-vs-vue",
    title: "React vs Vue: A Comprehensive Comparison",
    date: "2024-03-05",
    coverImage: "placeholder.svg",
    excerpt:
      "A detailed comparison of two popular JavaScript frameworks for building modern web applications.",
    content: `
      Both React and Vue are popular JavaScript frameworks for building user interfaces. Let's compare them in detail.

      ## React

      React is a library for building user interfaces, developed by Facebook. It uses a component-based architecture and virtual DOM for efficient updates.

      ### Pros
      - Large ecosystem and community
      - Extensive third-party libraries
      - Strong corporate backing
      - Flexible and unopinionated

      ## Vue

      Vue is a progressive framework for building user interfaces, created by Evan You. It's designed to be incrementally adoptable.

      ### Pros
      - Gentle learning curve
      - Detailed documentation
      - Built-in state management
      - Single-file components

      ## Which One to Choose?

      The choice between React and Vue often depends on your specific needs and preferences. Both are excellent choices for modern web development.
    `,
    tags: ["React", "Vue", "JavaScript", "Frontend"],
    readingTime: "6 min",
    author: "Mike Johnson",
    category: "JavaScript",
    featured: true,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    date: "2024-03-01",
    coverImage: "placeholder.svg",
    excerpt:
      "Learn the latest TypeScript best practices and patterns for writing maintainable and type-safe code.",
    content: `
      TypeScript has become an essential tool in modern web development. Let's explore the best practices for writing clean, maintainable TypeScript code.

      ## Type Safety

      TypeScript's main benefit is its type system. Here's how to use it effectively:

      \`\`\`typescript
      // Use interfaces for object shapes
      interface User {
        id: number;
        name: string;
        email: string;
        role: 'admin' | 'user';  // Union types for specific values
      }

      // Use type aliases for complex types
      type UserResponse = {
        data: User;
        status: number;
        message: string;
      }
      \`\`\`

      ## Modern Features

      TypeScript 5.0 introduced several new features:

      - Decorators
      - Const assertions
      - Template literal types
      - Improved type inference

      ## Best Practices

      1. **Use strict mode**
      2. **Prefer interfaces over type aliases**
      3. **Use readonly when possible**
      4. **Leverage utility types**
      5. **Write self-documenting code**
    `,
    tags: ["TypeScript", "JavaScript", "Programming"],
    readingTime: "7 min",
    author: "Sarah Wilson",
    category: "Programming",
    featured: true,
  },
  {
    slug: "nextjs-13-features",
    title: "Exploring Next.js 13 Features",
    date: "2024-02-28",
    coverImage: "placeholder.svg",
    excerpt:
      "Discover the powerful new features in Next.js 13 and how to use them in your projects.",
    content: `
      Next.js 13 introduced several groundbreaking features that revolutionize React development. Let's explore them in detail.

      ## App Router

      The new App Router provides a more intuitive way to organize your application:

      \`\`\`typescript
      // app/page.tsx
      export default function Page() {
        return <h1>Hello, Next.js 13!</h1>
      }

      // app/layout.tsx
      export default function RootLayout({
        children,
      }: {
        children: React.ReactNode
      }) {
        return (
          <html lang="en">
            <body>{children}</body>
          </html>
        )
      }
      \`\`\`

      ## Server Components

      React Server Components are now the default in Next.js 13:

      - Reduced client-side JavaScript
      - Improved performance
      - Better SEO
      - Direct database access

      ## New Features

      - Turbopack for faster development
      - Improved Image component
      - Enhanced Font optimization
      - Streaming and Suspense
    `,
    tags: ["Next.js", "React", "JavaScript"],
    readingTime: "8 min",
    author: "Alex Brown",
    category: "Web Development",
    featured: false,
  },
  {
    slug: "docker-for-developers",
    title: "Docker for Web Developers",
    date: "2024-02-25",
    coverImage: "placeholder.svg",
    excerpt: "A practical guide to using Docker in web development workflows.",
    content: `
      Docker has revolutionized how we develop and deploy applications. Let's learn how to use Docker effectively in web development.

      ## Why Docker?

      - Consistent development environments
      - Easy deployment
      - Isolated dependencies
      - Scalable applications

      COPY . .
      `,
    tags: ["Docker", "Web Development", "DevOps"],
    readingTime: "9 min",
    author: "Emily White",
    category: "DevOps",
    featured: false,
  },
]