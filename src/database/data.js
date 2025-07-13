const projectsData=[
  {
  title: "Pixel Cloud – Image Management & Sharing Platform",
  techStack: "MERN Stack",
  description: "Pixel Cloud is a full-stack image management platform where users can create albums, upload & organize images, like favorites, and share them via email with secure, role-based access. It features a polished UI with lightbox viewing, comments, and a recycle bin.",
  features: [
    "Integrated Google OAuth 2.0 for secure user login and identity-based access.",
    "Implemented album and image CRUD operations with soft-delete (Recycle Bin).",
    "Built public view with role-based UI — viewers get read-only & comment access.",
    "Designed comment system with name, avatar, and timestamps for transparency.",
    "Used Cloudinary for optimized image storage and Lightbox for fullscreen viewing."
  ],
  links: {
    live: "https://pixel-cloud-three.vercel.app/login",
    frontendRepo: "https://github.com/Karan-Bharti1/pixel-cloud",
    backendRepo: "https://github.com/Karan-Bharti1/pixel-cloud-backend"
  }
}
,
  {
    title: "Elite Loom – E-Commerce Clothing Platform",
    techStack: "MERN (MongoDB, Express.js, React.js, Node.js)",
    description: "Elite Loom is a full-featured e-commerce platform designed for seamless shopping experiences. It includes product listings, user authentication, cart management, and a secure checkout flow.",
    features: [
      "Developed a responsive and user-friendly UI using React and Bootstrap CSS.",
      "Implemented backend APIs for product management, user authentication, and order processing using Node.js and Express.",
      "Integrated MongoDB for scalable data storage of products, users, and orders.",
      "Deployed the application on Vercel for frontend and Render for backend services."
    ],
    links: {
      live: "https://elite-loom-frontend.vercel.app/",
      frontendRepo: "https://github.com/Karan-Bharti1/Elite-loom-Frontend",
      backendRepo: "https://github.com/Karan-Bharti1/Elite-loom-backend"
    }
  },
  {
    title: "Spearhead – Lead Management CRM",
    techStack: "MERN Stack",
    description: "Spearhead is a CRM platform focused on efficient lead tracking and sales lifecycle management. It allows assigning sales agents, managing lead statuses, and tracking updates with user-generated comments.",
    features: [
      "Designed a clean and intuitive interface with React to manage leads across different stages.",
      "Built RESTful APIs to handle leads, user roles, and activity logs.",
      "Enabled role-based access control and lead assignment workflows.",
      "Hosted on Vercel with backend on Render."
    ],
    links: {
      live: "https://spearhead-jade.vercel.app/",
      frontendRepo: "https://github.com/Karan-Bharti1/Spearhead",
      backendRepo: "https://github.com/Karan-Bharti1/spearhead-backend"
    }
  },
  {
    title: "Task-Finder – Task Management & Collaboration Tool",
    techStack: "MERN Stack",
    description: "Task-Finder is a project and task management platform designed for teams. It allows users to create projects, assign tasks, set deadlines, and organize work using tags and filters. Includes robust authentication and reporting.",
    features: [
      "Implemented authentication and role-based access for secure collaboration.",
      "Built dynamic filtering and URL-based query handling for enhanced UX.",
      "Designed reporting features to track team productivity and task status.",
      "Integrated MongoDB for flexible and scalable project/task storage."
    ],
    links: {
      live: "https://task-finder.vercel.app/",
      frontendRepo: "https://github.com/Karan-Bharti1/Task-Finder",
      backendRepo: "https://github.com/Karan-Bharti1/TFB"
    }
  },
  
];
export default projectsData;
