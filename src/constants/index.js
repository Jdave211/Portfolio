import {
    mobile,
    data,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sql,
    python,
    powerbi,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    tear,
    naij,
    hbo,
    ileonje,
    summarize,
    yourtube,
    port,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: data,
    },
    {
      title: "Content Writer",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "SQL",
      icon: sql,
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
      name: "power-bi",
      icon: powerbi,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Tears of a black man",
      icon: tear,
      iconBg: "#383E56",
      href: 'https://medium.com/@jagadave21/tears-of-a-black-man-ba39799a68',
      points: [
        "A poem in which I try to unmask the seemingly never ending plight of the black man in Northern America.",
        "Providing a potential solution through joint effort and responsibility."
      ],
    },
    {
      title: "Brain Drain in Nigeria",
      icon: naij,
      iconBg: "#E6DEDD",
      points: [
        "An article devoted to the study of human capital outflow in Africa's 'Giant' : Nigeria",
        "In which I introduce a seemingly infinite loop where it's citizens exit the country due to woeful standards of living and the country's standard of living gets relatively worse becuase highly educated and specialized citizens emigrate from it. "
      ],
    },
    {
      title: "HBO's Succession, Sopranos and Wire: a case study. Elegance in realism",
      icon: hbo,
      iconBg: "#383E56",
      href:'https://medium.com/@jagadave21/hbos-succession-sopranos-and-the-wire-a-case-study-elegance-in-realism-fd35bea28c0e',
      points: [
        "Where I deviate from the ongoing theme of this blog and discuss something I feel worth discussing",
        "Discusses the role that realistic depictions of events play in the success of above listed Tv shows.",

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
      name: "Yourtube",
      description:
        "Web-based platform that allows users to search, and watch uploaded videos from various channels.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "youtubeapi",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: 'materialui',
          color: 'blue-text-gradient'
        }
      ],
      image: yourtube,
      href: 'https://64599fe34a9fa4005edba420--dashing-heliotrope-4693d1.netlify.app/',
      source_code_link: "https://github.com/Jdave211/yourtube",
    },
    {
      name: "Summarize AI",
      description:
        "Web application that summarizes an article, book, text based website within seconds just by the provision of a link.",
      tags: [
        {
          name: "vite+react",
          color: "blue-text-gradient",
        },
        {
          name: "openaiapi",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: summarize,
      href: 'https://delicate-pie-06d209.netlify.app/',
      source_code_link: "https://github.com/Jdave211/ai_summarizer",
    },
    
    {
      name: "Ile-Onje",
      description:
        "An aesthetically pleasing recipe website design that features sections such as chef, photos and contact.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ileonje,
      href: 'https://jdave211.github.io/Ile-Onje/',
      source_code_link: "https://github.com/Jdave211/Ile-Onje",
    },

    {
      name: "My Portfolio",
      description:
        "A visually enthralling encapsulation of my interests, projects and my skills.",
      tags: [
        {
          name: "vite+react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "framer",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      href: 'https://jdave211.github.io/Ile-Onje/',
      source_code_link: "https://github.com/Jdave211/Ile-Onje",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };