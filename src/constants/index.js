import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    laravel,
    tailwind,
    nodejs,
    mongodb,
    git,
    adminpanel,
    docker,
    meta,
    films,
    language,
    devops,
    php,
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
      title: "Nest.js Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Express Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HTML Developer",
      // company_name: "Tesla",
      icon: html,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Jun 2021",
      points: [
        "Developing and maintaining web applications using HTML and other related technologies as CSS and Bootstrap.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "PHP/Laravel Developer",
      // company_name: "Tesla",
      icon: php,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Jan 2022",
      points: [
        "Developing and maintaining web applications using PHP and HTML.",
        "Connecting web applications to database and creating some easy requests to the server.",
        "Working with Laravel framework and some other related technologies such as Voyager, Backpack.",
        "Assembling some complicated websites using MySQL database."
      ],
    },
    {
      title: "DevOps tools",
      // company_name: "Shopify",
      icon: devops,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Dec 2022",
      points: [
        "Developing and maintaining web applications using GitHub to make our team work easier.",
        "Adding some additional staff to our application for making the development processes faster such as Docker, CI/CD, GitLab and etc.",
        "Starting to deploy web applications to hosting especially to DigitalOcean.",
        "Using serverless deployment services such as Heroku and Vercel.",
      ],
    },
    {
      title: "Nest.js Developer",
      // company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "I am involved in the development and upkeep of web applications, leveraging Nest.js and other associated technologies.",
        "Engaging in collaborative efforts with cross-functional teams, such as designers, product managers, and fellow developers, to deliver top-notch, high-quality products.",
        "Skillfully incorporating responsive design principles and guaranteeing seamless cross-browser compatibility.",
        "Actively engaging in code reviews and offering valuable, constructive feedback to fellow developers.",
      ],
    },
    {
      title: "React.js Developer",
      // company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Film Search",
      description:
        "Web-based platform that allows users to search films of any kind and genre from given API, that was provided by open source website 'The Movie Database' (TMDB).",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: films,
      source_code_link: "https://github.com/Ako2003/react-film",
      demo_link: "https://film-react.vercel.app/"

    },
    {
      name: "Admin Panel",
      description:
        "Web application that was created to manage and manipulate with the information that is collected in the given application. This website has such functionality as creating, deleting, editing a patient and calculating the total money for given range of time.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "backpack",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: adminpanel,
      source_code_link: "https://github.com/Ako2003/laravel-booking-app",
      demo_link: "https://legacyadminpanel.herokuapp.com"
    },
    {
      name: "Language",
      description:
        "Web application for learning a language in which you can add words, their tenses and after have some quiz to test your knowledge. To login use 'admin@example.com' and 'example'",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "backpack",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: language,
      source_code_link: "https://github.com/Ako2003/french",
      demo_link: "http://french.herokuapp.com"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };