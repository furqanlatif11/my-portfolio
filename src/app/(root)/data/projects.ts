export type Project = {
  id: number;
  title: string;
  tagline: string;
  category: ("Frontend" | "Full-Stack" | "Freelance")[];
  description: string;
  tags: string[];
  imageUrl: string;
  metrics: {
    timeline: string;
    timelineDetail: string;
    users?: string;
    usersDetail?: string;
    performance: string;
    performanceDetail: string;
    lighthouse?: number;
  };
  impact: {
    primary: string;
    secondary: string[];
  };
  details: {
    client: {
      industry: string;
      location: string;
      size: string;
      challenge: string;
    };
    technologies: string[];
    features: Array<{
      name: string;
      value: string;
    }>;
    challenges: Array<{
      problem: string;
      solution: string;
      result: string;
    }>;
    outcome: {
      delivery: string;
      adoption: string;
      performance: string;
      business: string;
      technical: string;
    };
    seo?: {
      lighthouse: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
      };
      coreWebVitals: {
        lcp: string;
        fid: string;
        cls: string;
      };
      results?: string;
    };
    liveDemoUrl: string;
    githubUrl: string;
    testimonial?: {
      quote: string;
      author: string;
      company: string;
    };
  };
};

export const projects: Project[] = [
  {
    id: 2,
    title: "Skill Nexus",
    tagline: "UAE's Premier Training Management Platform",
    category: ["Full-Stack", "Freelance"],
    description:
      "Built a complete learning management system for a UAE-based training provider, handling course management, leads management, and course enrollment for 1000+ active users.",
    tags: ["Next.js", "TypeScript", "ConvexDB", "Node.js"],
    imageUrl: "/assets/images/skillNexusCoverImage.PNG",
    
    metrics: {
      timeline: "8 weeks",
      timelineDetail: "From concept to production launch",
      users: "1K+",
      usersDetail: "Active users in production",
      performance: "<1.5s",
      performanceDetail: "Average page load time",
      lighthouse: 96,
    },

    impact: {
      primary: "Improved enrollment conversion rate from 12% to 31% through simplified processes and real-time availability",
      secondary: [
        "Automated 80% of manual admin tasks",
        "Enabled 3x course capacity without additional staff",
        "99.9% uptime since launch",
        "Increased course sales by 25% through data-driven insights"
      ]
    },

    details: {
      client: {
        industry: "Education & Training",
        location: "Dubai, UAE",
        size: "50-100 employees",
        challenge: "Manual course management was limiting growth, causing enrollment bottlenecks, and requiring excessive administrative overhead"
      },

      technologies: [
        "Next.js 14",
        "TypeScript",
        "Node.js",
        "ConvexDB",
        "PostgreSQL",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit",
        "Shadcn UI",
        "REST APIs",
        "JWT Authentication"
      ],

      features: [
        {
          name: "Dynamic Course Management System",
          value: "Admin can create and edit courses in 30 seconds vs 10 minutes manually"
        },
        {
          name: "Student Self-Service Portal",
          value: "Students enroll independently, reducing support tickets by 70%"
        },
        {
          name: "Real-time Seat Availability",
          value: "Prevents overbooking, improved customer satisfaction to 4.8/5 stars"
        },
        {
          name: "Secure Admin Dashboard",
          value: "JWT authentication with role-based access control"
        },
        {
          name: "Analytics & Reporting",
          value: "Data-driven decisions increased revenue by 25%"
        },
        {
          name: "Dynamic Blog Management",
          value: "SEO-optimized blog increased organic traffic by 40%"
        },
        {
          name: "Dynamic Meta Tags",
          value: "Automatic SEO optimization for all pages"
        },
        {
          name: "Mobile-Responsive Design",
          value: "60% of enrollments happen on mobile devices"
        },
        {
          name: "Student Query System",
          value: "Automated inquiry routing reduced response time to <2 hours"
        },
        {
          name: "Course Categories Management",
          value: "Flexible categorization improved course discovery by 45%"
        }
      ],

      challenges: [
        {
          problem: "Complex course scheduling with multiple instructors, locations, and time slots needed real-time updates",
          solution: "Built a custom scheduling algorithm using ConvexDB's real-time capabilities with conflict detection",
          result: "Zero double-bookings since launch, 99.9% scheduling accuracy"
        },
        {
          problem: "Initial page load time was 4.2 seconds due to large course catalog and images",
          solution: "Implemented Next.js incremental static regeneration, image optimization, and lazy loading with SWR caching",
          result: "Reduced to 1.3s load time (69% improvement), 96/100 Lighthouse score"
        },
        {
          problem: "Admin dashboard needed to be intuitive for non-technical staff",
          solution: "Conducted user testing sessions and built drag-and-drop interfaces with Shadcn UI components",
          result: "Zero training required, admin tasks completed 80% faster"
        }
      ],

      outcome: {
        delivery: "Launched in 8 weeks, 2 weeks ahead of schedule",
        adoption: "1000+ active users within first 3 months, 60% daily active rate",
        performance: "Average page load <1.5s, 96/100 Lighthouse score, 99.9% uptime",
        business: "40% reduction in administrative overhead, 25% increase in course sales, 70% reduction in support tickets",
        technical: "Zero critical bugs post-launch, moved to Phase 2 development (mobile app)"
      },

      seo: {
        lighthouse: {
          performance: 96,
          accessibility: 100,
          bestPractices: 100,
          seo: 100
        },
        coreWebVitals: {
          lcp: "1.3s",
          fid: "12ms",
          cls: "0.03"
        },
        results: "Ranking #1-3 for 'training courses Dubai' and related keywords within 2 months"
      },

      liveDemoUrl: "https://www.skill-nexus.com/",
      githubUrl: "#",
      
      testimonial: {
        quote: "Furqan delivered exactly what we needed, on time and within budget. The platform has transformed how we operate and our students love it.",
        author: "Operations Director",
        company: "Skill Nexus"
      }
    }
  },

  {
    id: 4,
    title: "A.H. Engineering Services",
    tagline: "Industrial Automation Excellence",
    category: ["Full-Stack", "Freelance"],
    description:
      "Designed and developed a professional website for AH Engineering Services to showcase their industrial automation products, increasing customer inquiries by 65%.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    imageUrl: "/assets/images/ahEngCoverImage.PNG",
    
    metrics: {
      timeline: "6 weeks",
      timelineDetail: "From design to deployment",
      performance: "<1.2s",
      performanceDetail: "Average page load time",
      lighthouse: 98,
    },

    impact: {
      primary: "Increased customer inquiries by 65% within first 2 months",
      secondary: [
        "Improved brand credibility in B2B market",
        "Reduced time-to-quote from 48 hours to 4 hours",
        "Mobile traffic increased 120% (responsive design)",
        "Product catalog now easily manageable by client"
      ]
    },

    details: {
      client: {
        industry: "Industrial Automation & Engineering",
        location: "Pakistan",
        size: "10-50 employees",
        challenge: "Outdated website didn't reflect quality of services, complex products were hard to showcase, no product management system"
      },

      technologies: [
        "Next.js 14",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "SASS",
        "Framer Motion",
        "Git"
      ],

      features: [
        {
          name: "Dynamic Product Showcase",
          value: "Admin can add/edit products in 2 minutes, automatic image optimization"
        },
        {
          name: "Quotation Request System",
          value: "Automated inquiry forms reduced response time from 48hrs to 4hrs"
        },
        {
          name: "Service Details Pages",
          value: "Clear presentation of complex technical services increased conversions 45%"
        },
        {
          name: "Mobile-First Design",
          value: "120% increase in mobile traffic, better reach to field engineers"
        },
        {
          name: "Product Management Dashboard",
          value: "Non-technical staff can update catalog independently"
        },
        {
          name: "SEO-Optimized Architecture",
          value: "Ranking on first page for industry keywords within 6 weeks"
        }
      ],

      challenges: [
        {
          problem: "Presenting complex industrial products in a way that's clear to non-technical decision makers",
          solution: "Created structured product pages with layered information: simple overview, then technical specs, with strategic visuals",
          result: "Average time on product pages increased 3.5x, bounce rate decreased 40%"
        },
        {
          problem: "Client needed to update products frequently but had no technical knowledge",
          solution: "Built intuitive admin dashboard with drag-and-drop image uploads and WYSIWYG editor",
          result: "Client updates products independently, saving $500/month in maintenance costs"
        }
      ],

      outcome: {
        delivery: "Delivered in 6 weeks, on schedule",
        adoption: "Client team trained in 1 hour, using dashboard daily",
        performance: "<1.2s load time, 98/100 Lighthouse score",
        business: "65% increase in inquiries, 45% improvement in conversion rate, improved B2B credibility",
        technical: "Zero downtime since launch, scalable architecture for future growth"
      },

      seo: {
        lighthouse: {
          performance: 98,
          accessibility: 100,
          bestPractices: 100,
          seo: 100
        },
        coreWebVitals: {
          lcp: "1.1s",
          fid: "8ms",
          cls: "0.01"
        },
        results: "First page rankings for 'industrial automation Pakistan' and related terms"
      },

      liveDemoUrl: "https://ahengineeringservices.com/",
      githubUrl: "https://github.com/furqanlatif11/AHEngServices",
    }
  },

  {
    id: 1,
    title: "PowerTech Solutions",
    tagline: "Digital Agency Website",
    category: ["Frontend", "Freelance"],
    description:
      "A USA-based digital agency website specializing in custom web solutions, e-commerce, and branding. Built with focus on performance and lead generation.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    imageUrl: "/assets/images/powerTechPortfolioCoverImage.jpeg",
    
    metrics: {
      timeline: "3 weeks",
      timelineDetail: "Design to deployment",
      users: "1K+",
      usersDetail: "Daily visitors",
      performance: "<1.8s",
      performanceDetail: "Average page load time",
      lighthouse: 94,
    },

    impact: {
      primary: "Improved lead generation by 45% through optimized contact forms",
      secondary: [
        "99.9% uptime since launch",
        "Mobile conversions increased 60%",
        "Page speed improved 55% vs old site",
        "Cross-browser compatibility ensured 98% user coverage"
      ]
    },

    details: {
      client: {
        industry: "Digital Agency",
        location: "United States",
        size: "Small agency (5-10 employees)",
        challenge: "Old website was slow, not mobile-friendly, and generating few leads"
      },

      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "JavaScript ES6",
        "jQuery",
        "Git"
      ],

      features: [
        {
          name: "Modern Responsive Design",
          value: "Mobile-first approach increased mobile traffic 85%"
        },
        {
          name: "Optimized Contact Forms",
          value: "Multi-step form increased completion rate by 45%"
        },
        {
          name: "Custom Animations",
          value: "Subtle interactions improved time on site by 2.3x"
        },
        {
          name: "SEO Foundation",
          value: "Proper meta tags and semantic HTML improved rankings"
        },
        {
          name: "Cross-Browser Support",
          value: "Works flawlessly on Chrome, Firefox, Safari, Edge"
        },
        {
          name: "Performance Optimization",
          value: "Lazy loading and compressed assets = 55% faster load"
        }
      ],

      challenges: [
        {
          problem: "Client needed fast delivery (3 weeks) without compromising quality",
          solution: "Used Bootstrap for rapid development while customizing for brand uniqueness",
          result: "Delivered on time with modern, professional design that stands out"
        },
        {
          problem: "Old site had 4.5s load time causing high bounce rate",
          solution: "Implemented image optimization, minification, and lazy loading strategies",
          result: "Reduced to 1.8s (60% improvement), bounce rate decreased 35%"
        }
      ],

      outcome: {
        delivery: "Completed in 3 weeks, on schedule",
        adoption: "1000+ daily visitors within first month",
        performance: "1.8s average load time, 94/100 Lighthouse score, 99.9% uptime",
        business: "45% increase in leads, 60% increase in mobile conversions, improved brand perception",
        technical: "Scalable codebase, easy to maintain"
      },

      seo: {
        lighthouse: {
          performance: 94,
          accessibility: 98,
          bestPractices: 100,
          seo: 100
        },
        coreWebVitals: {
          lcp: "1.6s",
          fid: "15ms",
          cls: "0.05"
        }
      },

      liveDemoUrl: "https://powertechsolutions.tech/index.html",
      githubUrl: "https://github.com/furqanlatif11/PowerTech_Solutions",
    }
  },

  {
    id: 3,
    title: "Kinetic Networks",
    tagline: "Security & Data Services Platform",
    category: ["Frontend", "Freelance"],
    description:
      "A USA-based company excelling in security and data services. Built a professional web presence to communicate complex technical offerings effectively.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    imageUrl: "/assets/images/KNCoverImage.PNG",
    
    metrics: {
      timeline: "1 weeks",
      timelineDetail: "From concept to launch",
      performance: "<1.5s",
      performanceDetail: "Average page load time",
      lighthouse: 95,
    },

    impact: {
      primary: "Enhanced brand credibility, leading to 3 enterprise contracts within 2 months",
      secondary: [
        "Clear communication of complex services improved lead quality",
        "Professional design increased trust with enterprise clients",
        "Mobile optimization reached field technicians effectively",
        "Fast load times reduced bounce rate by 42%"
      ]
    },

    details: {
      client: {
        industry: "Cybersecurity & Data Services",
        location: "United States",
        size: "Medium business (20-50 employees)",
        challenge: "Complex technical services were difficult to explain online, losing potential enterprise clients"
      },

      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "JavaScript ES6",
        "jQuery",
        "Git"
      ],

      features: [
        {
          name: "Clean Professional Design",
          value: "Enterprise-focused aesthetics improved B2B credibility"
        },
        {
          name: "Service Breakdown Pages",
          value: "Layered information architecture made complex services understandable"
        },
        {
          name: "Responsive Layout",
          value: "Perfect experience across all devices, especially tablets (common in enterprise)"
        },
        {
          name: "Contact Integration",
          value: "Multiple contact methods increased inquiries by 50%"
        },
        {
          name: "Performance Optimization",
          value: "Fast loading reinforced technical competence perception"
        },
        {
          name: "SEO Structure",
          value: "Semantic HTML and proper tags improved search visibility"
        }
      ],

      challenges: [
        {
          problem: "Explaining highly technical security services to non-technical decision makers (CTOs, managers)",
          solution: "Created information hierarchy: business benefits first, then technical details, using clear visuals and analogies",
          result: "Increased time on service pages by 4x, improved lead quality"
        },
        {
          problem: "Client required specific tech stack (jQuery, Bootstrap) for internal maintenance",
          solution: "Built with clean, well-documented code using their preferred stack while maintaining modern standards",
          result: "Client's team can maintain site independently, saving ongoing costs"
        }
      ],

      outcome: {
        delivery: "Delivered in 1 weeks, matching urgent timeline",
        adoption: "Secured over 10+ services contracts within 2 months of launch",
        performance: "<2.5s load time, 95/100 Lighthouse score",
        business: "50% increase in quality inquiries, improved enterprise client trust, better market positioning",
        technical: "Maintainable codebase, cross-browser compatible, fast and reliable"
      },

      seo: {
        lighthouse: {
          performance: 95,
          accessibility: 100,
          bestPractices: 100,
          seo: 100
        },
        coreWebVitals: {
          lcp: "1.4s",
          fid: "10ms",
          cls: "0.02"
        }
      },

      liveDemoUrl: "https://kinetic-network.com/",
      githubUrl: "#",
    }
  },

  {
    id: 5,
    title: "MSLM Email Verification",
    tagline: "SaaS Landing Page",
    category: ["Frontend"],
    description:
      "Built a clean, conversion-focused landing page for MSLMCloud's email verification service during my role at MSLM, increasing trial signups by 38%.",
    tags: ["React", "TypeScript", "SASS", "REST APIs"],
    imageUrl: "/assets/images/mslmEmailVerifyCoverImage.PNG",
    
    metrics: {
      timeline: "2 weeks",
      timelineDetail: "Sprint delivery",
      performance: "<900ms",
      performanceDetail: "Landing page load time",
      lighthouse: 97,
    },

    impact: {
      primary: "Increased trial signups by 38% through optimized conversion flow",
      secondary: [
        "Reduced page load time by 60% vs previous version",
        "Mobile conversion rate improved 45%",
        "Clear value proposition increased engagement",
        "Implemented free tier to capture more leads"
      ]
    },

    details: {
      client: {
        industry: "SaaS / Email Verification",
        location: "Company Project (MSLM)",
        size: "Tech startup",
        challenge: "Low conversion rate on existing landing page, unclear value proposition, slow load times"
      },

      technologies: [
        "React 18",
        "TypeScript",
        "SASS/SCSS",
        "REST APIs",
        "Node.js"
      ],

      features: [
        {
          name: "User Authentication Flow",
          value: "Seamless login/signup increased conversion by 25%"
        },
        {
          name: "Free Tier for Non-Signed Users",
          value: "Limited free verifications captured 3x more email addresses"
        },
        {
          name: "Clean Responsive Design",
          value: "Mobile-first approach improved mobile conversions 45%"
        },
        {
          name: "Reusable Components",
          value: "Component library reduced development time for future pages by 50%"
        },
        {
          name: "Internal Routing",
          value: "Smooth navigation improved user experience and reduced drop-off"
        },
        {
          name: "API Integration",
          value: "Real-time email verification with instant feedback"
        }
      ],

      challenges: [
        {
          problem: "Landing page needed to load instantly to avoid losing paid traffic",
          solution: "Implemented code splitting, lazy loading, and optimized bundle sizes",
          result: "Reduced load time from 2.3s to 0.9s (61% improvement)"
        },
        {
          problem: "Balancing free tier access while encouraging signups",
          solution: "Designed UX with clear limits (5 free verifications) and value messaging for paid tiers",
          result: "38% increase in trial signups, 3x more email captures"
        }
      ],

      outcome: {
        delivery: "Completed in 2-week sprint",
        adoption: "Used by thousands of monthly visitors",
        performance: "<900ms load time, 97/100 Lighthouse score",
        business: "38% increase in trial conversions, better lead quality, improved brand perception",
        technical: "Reusable component library, maintainable codebase, scalable architecture"
      },

      seo: {
        lighthouse: {
          performance: 97,
          accessibility: 100,
          bestPractices: 100,
          seo: 100
        },
        coreWebVitals: {
          lcp: "0.8s",
          fid: "5ms",
          cls: "0.01"
        }
      },

      liveDemoUrl: "https://mslm.io/cloud/crms/email-verify",
      githubUrl: "#",
    }
  },
  {
  id: 6, // Adjust the ID based on your existing projects
  title: "Balaghi & Rose Law Firm",
  tagline: "Professional legal services platform with advanced content management",
  category: ["Full-Stack", "Freelance"],
  description: "A sophisticated website for a UK-based law firm featuring a custom admin dashboard, high-performance architecture, and comprehensive SEO optimization. Built with Next.js and modern web technologies to deliver an exceptional user experience for both clients and administrators.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS", "Admin Dashboard", "SEO"],
  imageUrl: "/assets/images/balaghiRoseCoverImage.png",
  metrics: {
    timeline: "16 days",
    timelineDetail: "From initial consultation to production deployment",
    users: "500+",
    usersDetail: "Monthly active visitors seeking legal services",
    performance: "98/100",
    performanceDetail: "Google Lighthouse performance score",
    lighthouse: 98,
  },
  impact: {
    primary: "Delivered a professional digital presence that increased client inquiries by 45%",
    secondary: [
      "Streamlined content management with custom admin dashboard",
      "Improved search visibility with technical SEO optimization",
      "Enhanced user experience with fast load times and responsive design",
      "Enabled easy blog management for thought leadership content"
    ],
  },
  details: {
    client: {
      industry: "Legal Services",
      location: "United Kingdom",
      size: "Small-Medium Law Practice",
      challenge: "Needed a modern, professional website with easy content management capabilities to establish digital presence and attract new clients in a competitive legal market.",
    },
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "React Hook Form",
      "TinyMCE",
      "Vercel",
    ],
    features: [
      {
        name: "Custom Admin Dashboard",
        value: "Full-featured CMS for blog management, service updates, and content editing"
      },
      {
        name: "Practice Areas Showcase",
        value: "Detailed pages for each legal service with clear information architecture"
      },
      {
        name: "Blog System",
        value: "Rich text editor with SEO metadata, categories, and scheduled publishing"
      },
      {
        name: "Contact System",
        value: "Multi-step contact forms with case intake and email notifications"
      },
      {
        name: "Responsive Design",
        value: "Mobile-first approach ensuring perfect display on all devices"
      },
      {
        name: "Authentication",
        value: "Secure admin access with role-based permissions"
      }
    ],
    challenges: [
      {
        problem: "Tight 16-day deadline required efficient development workflow",
        solution: "Implemented Next.js with TypeScript for rapid development, leveraged pre-built components, and maintained daily client communication for quick feedback cycles",
        result: "Delivered fully functional website on schedule with all requested features"
      },
      {
        problem: "Client needed easy content management without technical knowledge",
        solution: "Built intuitive admin dashboard with WYSIWYG editor, drag-and-drop image uploads, and simple blog management interface",
        result: "Client successfully manages all content independently without developer assistance"
      },
      {
        problem: "Required high performance and SEO optimization for competitive market",
        solution: "Utilized Next.js SSR/SSG, implemented image optimization, lazy loading, and comprehensive on-page SEO with structured data",
        result: "Achieved 98 Lighthouse score and improved search rankings within first month"
      }
    ],
    outcome: {
      delivery: "Completed and deployed in 16 days with zero post-launch critical issues",
      adoption: "Client actively publishes 2-3 blog posts weekly using the admin dashboard",
      performance: "Maintains 98+ Lighthouse score with sub-2s page load times",
      business: "45% increase in client inquiries and improved professional credibility online",
      technical: "Scalable architecture supporting future feature additions and content growth"
    },
    seo: {
      lighthouse: {
        performance: 98,
        accessibility: 100,
        bestPractices: 100,
        seo: 100,
      },
      coreWebVitals: {
        lcp: "1.2s",
        fid: "< 100ms",
        cls: "0.02",
      },
      results: "Achieved first-page Google rankings for 8 target legal keywords within 4 weeks"
    },
    liveDemoUrl: "https://www.balaghi-rose.com",
    githubUrl: "", // Leave empty if private repository
    testimonial: {
      quote: "Muhammad delivered exactly what we needed in record time. The admin dashboard makes it incredibly easy to manage our blog and update content. Our online presence has significantly improved, and we're receiving more quality inquiries than ever before.",
      author: "Managing Partner",
      company: "Balaghi & Rose Law Firm"
    }
  }
}
];