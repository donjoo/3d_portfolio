import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    brototype,
    freelance,
    self_project,
    self_study,
    ecomerce,
    dataextraction,
    netflix,
    usermanagement,
    chaiwithcode,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Linkdln content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Python Django Developer",
      company_name: "Brototype",
      icon: brototype,
      iconBg: "#004080",
      date: "August 2023 - Present",
      points: [
        "Developing and maintaining web applications using Django and React.js, implementing secure JWT authentication and authorization.",
        "Collaborating with cross-functional teams, including designers, project managers, and backend developers, to ensure high-quality user experiences.",
        "Building RESTful APIs and integrating frontend components with Redux for efficient state management.",
        "Participating in weekly feedback sessions, providing insights into team projects, and addressing technical challenges.",
        "Conducting code reviews and mentoring junior developers on best practices for clean and efficient code.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#333333",
      date: "September 2024 - Present",
      points: [
        "Creating and enhancing interactive user interfaces for various applications, utilizing React, Redux, and Firebase for authentication and data management.",
        "Implemented responsive design, ensuring compatibility across different devices and browsers.",
        "Developed features like user authentication, wishlist functionality, and a user profile with data updates and image uploads.",
        "Actively experimenting with new features and sharing code in the 'Chai with Code' series on LinkedIn, fostering a community of learning.",
      ],
    },
    {
      title: "Data Analyst (Python Developer)",
      company_name: "Self-Project",
      icon: self_project,
      iconBg: "#006600",
      date: "June 2024 - Present",
      points: [
        "Designed and implemented Python scripts for data extraction and analysis, automating the transformation of raw data into structured formats like CSV and Excel.",
        "Utilized libraries such as Pandas and OpenPyXL to streamline data processing and cleaning.",
        "Posted and shared knowledge on LinkedIn as part of the 'Chai with Code' series, focusing on data analysis techniques and best practices.",
        "Worked with APIs to pull data from various sources and integrated output into structured, user-friendly reports.",
      ],
    },
    {
      title: "Full-Stack Develope",
      company_name: "Self-Study",
      icon: self_study,
      iconBg: "#660099",
      date: "May 2024 - Present",
      points: [
        "Engaged in comprehensive learning of web development, including HTML, CSS, JavaScript, SQL, and ORM.",
        "Developed a Ecommerce platform as part of hands-on projects, gaining practical experience Django.",
        "Strengthened understanding of relational databases using PostgreSQL and Django ORM for backend data handling.",
        "Enhanced proficiency in Python, Django, and React through structured self-study and weekly goals.",
        "Consistently worked on self-projects to reinforce coding skills and explored different frameworks and libraries.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform that allows users to browse t-shirts, add items to the cart, and make secure online purchases. Includes product management, user accounts, and order management.",
      tags: [
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        { 
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:  ecomerce,
      source_code_link: "https://github.com/donjoo/1stproject.git",
    },
  
    {
      name: "User Management System",
      description:
        "Web application for managing user profiles, including registration, login, and user data updates. It features secure JWT authentication and role-based authorization for admin and regular users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
      ],
      image: usermanagement,
      source_code_link: "https://github.com/donjoo/UserManagement_App.git",
    },
    {
      name: "Data Extraction & Analysis Tool",
      description:
        "Python-based tool to extract data from multiple sources, process it, and save it in structured formats like CSV and Excel. Built to automate data gathering and reporting tasks efficiently.",
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "beautifullsoup",
          color: "blue-text-gradient",
        },
        {
          name: "openpyxl",
          color: "orange-text-gradient",
        },
      ],
      image: dataextraction,
      source_code_link: "https://github.com/donjoo/Chai-with-Code.git",
    },
    {
      name: "Netflix Clone",
      description:
        "A Netflix-clone. Built to strengthen understanding of state management and API integration.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/donjoo/Netflix_clone.git",
    },
    {
      name: "Chai with Code Series",
      description:
        "A LinkedIn content series where various coding concepts like data extraction, text analysis, and web scraping are explored through fun and educational Python scripts.",
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "web scraping",
          color: "green-text-gradient",
        },
        {
          name: "data analysis",
          color: "blue-text-gradient",
        },
      ],
      image: chaiwithcode,
      source_code_link: "https://github.com/donjoo/Chai-with-Code.git",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };