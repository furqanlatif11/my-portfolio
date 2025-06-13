export type Project = {
  id: number;
  title: string;
  category: ("Frontend" | "Full-Stack" | "Freelance")[];
  description: string;
  tags: string[];
  imageUrl: string;
  details: {
    technologies: string[];
    features: string[];
    challenges: string;
    outcome: string;
    liveDemoUrl: string;
    githubUrl: string;
    codeUrl?: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "PowerTech Solutions",
    category: ["Freelance", "Frontend"],
    description:
      "A USA based digital agency specializing in custom web solutions, e-commerce, and branding.",
    tags: ["HMTL", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    imageUrl: "/assets/images/powerTechPortfolioCoverImage.jpeg",
    details: {
      technologies: ["HMTL", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      features: [
        "Clean and Modern Design",
        "Responsive Layout",
        "Contact Form",
        "Custom Animations",
        "SEO Optimized",
        "Cross-Browser Compatibility",
      ],
      challenges:
        "Optimizing both static and dynamic package sizes to maintain website performance, and implementing image optimization strategies to reduce load times.",
      outcome:
        "Successfully deployed platform serving 1000+ daily users with 99.9% uptime.",
      liveDemoUrl: "https://powertechsolutions.tech/index.html",
      githubUrl: "https://github.com/furqanlatif11/PowerTech_Solutions",
      codeUrl: "#",
    },
  },
  {
    id: 2,
    title: "Skill Nexus",
    category: ["Full-Stack", "Freelance"],
    description:
      "A UAE based learning management system that connects students with tutors for personalized learning experiences.",
    tags: ["NextJs", "Node.js", "ConvexDB", "TypeScript"],
    imageUrl: "/assets/images/skillNexusCoverImage.png",
    details: {
      technologies: [
        "NextJs",
        "Typescript",
        "Node.js",
        "ConvexDB",
        "REST APIs",
        "JWT",
        "Tailwind CSS",
        "Git",
        "PostgreSQL",
        "Framer-motion",
        "Redux",
        "Chadcn UI",
      ],
      features: [
        "Admin Dashboard",
        "Admin Authentication",
        "Student Query Forms",
        "Dynamic Course Listings",
        "Dynamic Course Management",
        "Responsive Design",
        "Dynamic Blogs Management",
        "Dynamic Meta Tags Management",
        "Dynamic Testimonials Management",
        "Dynamic Course Categories Management",
      ],
      challenges:
        "Built Skill Nexus to manage complex course structures with dynamic content. Developed a secure, easy-to-use admin dashboard, optimized performance with SWR and lazy loading, and ensured SEO and mobile responsiveness using Next.js and Tailwind CSS.",
      outcome:
        " Delivered a scalable, user-friendly platform that streamlined course management and improved overall user engagement.",
      liveDemoUrl: "https://www.skill-nexus.com/",
      githubUrl: "#",
      codeUrl: "#",
    },
  },
  {
    id: 3,
    title: "Kinetic Networks",
    category: ["Frontend", "Freelance"],
    description:
      "A USA based online multiple services providing compant that excels in various security and data services.",
    tags: ["HMTL", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    imageUrl: "/assets/images/KNCoverImage.png",
    details: {
      technologies: ["HMTL", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      features: [
        "Clean and Modern Design",
        "Responsive Layout",
        "Contact Form",
        "Custom Animations",
        "SEO Optimized",
        "Cross-Browser Compatibility",
      ],
      challenges:
        "Built Kinetic Network with a focus on clean design and performance. Overcame challenges in structuring complex layouts and technical content by using reusable components, optimized assets, and responsive design with client's required technologies.",
      outcome:
        "Delivered a fast, professional website that effectively communicates complex offerings and enhances brand credibility.",
      liveDemoUrl: "https://kinetic-network.com/",
      githubUrl: "#",
      codeUrl: "#",
    },
  },
  {
    id: 4,
    title: "AH Engineerng Services",
    category: ["Full-Stack", "Freelance"],
    description:
      "Designed and developed a professional website for AH Engineering Services to showcase their industrial automation products and services.",
    tags: ["NextJs", "Tailwind CSS", "Typescript", "Node.js"],
    imageUrl: "/assets/images/ahEngCoverImage.png",
    details: {
      technologies: [
        "NextJs",
        "Node.js",
        "Tailwind CSS",
        "Typescript",
        "Git",
        "SASS",
        "PostgreSQL",
        "Framer-motion",
      ],
      features: [
        "Clean and Modern Design",
        "Responsive Layout",
        "Products Showcase",
        "Quotation Request Form",
        "Services Details",
        "Products Management",
      ],
      challenges:
        "While building the AH Engineering Services website, the main challenge was presenting technical industrial products in a clear, engaging way for a non-technical audience. I addressed this by crafting a clean, responsive UI with well-structured content and strategic visuals.",
      outcome:
        "Delivered a professional web presence that improved client trust, showcased services effectively, and increased customer inquiries.",
      liveDemoUrl: "https://ahengineeringservices.com/",
      githubUrl: "https://github.com/furqanlatif11/AHEngServices",
      codeUrl: "#",
    },
  },
  {
    id: 5,
    title: "MslmCloud Email Verification Landing Page",
    category: ["Frontend"],
    description:
      "During my role at MSLM, I built a clean, responsive email verification landing page for MslmCloud, focusing on clarity, performance, and user experience.",
    tags: ["HMTL", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    imageUrl: "/assets/images/mslmEmailVerifyCoverImage.png",
    details: {
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "JWT",
        "Tailwind CSS",
      ],
      features: [
        "User Authentication",
        "Payment Processing",
        "Admin Dashboard",
        "Shopping Cart",
        "Order Management",
        "Responsive Design",
      ],
      challenges:
        "Implementing secure payment processing and optimizing DB queries.",
      outcome:
        "Successfully deployed platform serving 1000+ daily users with 99.9% uptime.",
      liveDemoUrl: "https://kinetic-network.com/",
      githubUrl: "#",
      codeUrl: "#",
    },
  },
  // Add more projects...
];
