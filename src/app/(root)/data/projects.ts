export type Project = {
  id: number;
  title: string;
  category: ('Frontend' | 'Full-Stack' | 'Freelance')[];
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
    title: 'E-commerce Platform',
     category: ['Frontend', 'Full-Stack'],
    description: 'Full-stack e-commerce solution with React frontend and Node.js backend',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/assets/images/frontend.jfif',
    details: {
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT', 'Tailwind CSS'],
      features: [
        'User Authentication',
        'Payment Processing',
        'Admin Dashboard',
        'Shopping Cart',
        'Order Management',
        'Responsive Design',
      ],
      challenges: 'Implementing secure payment processing and optimizing DB queries.',
      outcome: 'Successfully deployed platform serving 1000+ daily users with 99.9% uptime.',
      liveDemoUrl: '#',
      githubUrl: '#',
      codeUrl: '#',
    },
  },
  {
    id: 2,
    title: 'Learning Management Platform',
     category: ['Frontend', 'Freelance'],
    description: 'Full-stack e-commerce solution with React frontend and Node.js backend',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/assets/images/frontend.jfif',
    details: {
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT', 'Tailwind CSS'],
      features: [
        'User Authentication',
        'Payment Processing',
        'Admin Dashboard',
        'Shopping Cart',
        'Order Management',
        'Responsive Design',
      ],
      challenges: 'Implementing secure payment processing and optimizing DB queries.',
      outcome: 'Successfully deployed platform serving 1000+ daily users with 99.9% uptime.',
      liveDemoUrl: '#',
      githubUrl: '#',
      codeUrl: '#',
    },
  },
  // Add more projects...
];
