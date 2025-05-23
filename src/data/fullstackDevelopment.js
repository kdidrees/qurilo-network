// import common images here
import strategyimg from "../assets/common-images/strategy.png";
import contactimg from "../assets/common-images/contactimg.png";

// import hero images here
import heroimg from "../assets/fullstack-development/images/Hire_Full_Stack_Developers.png";
import heromoobileimg from "../assets/fullstack-development/images/hire_full_stack_developers_mobile.jpg";

// import icons here
import firsticon from "../assets/fullstack-development/icons/Full_Stack_Web_Development.png";
import secondicon from "../assets/fullstack-development/icons/front_end_development.png";
import thirdicon from "../assets/fullstack-development/icons/back_end_development.png";
import fourthicon from "../assets/fullstack-development/icons/MEAN_MERN_Stack_Development.png";
import fifthicon from "../assets/fullstack-development/icons/Full-stack_Support_and_Maintenance.png";

// import grid images here
import firstimg from "../assets/fullstack-development/images/gridimages/API_Integration_Strategies.png";
import secondimg from "../assets/fullstack-development/images/gridimages/Performance_Optimization_Techniques.png";
import thirdimg from "../assets/fullstack-development/images/gridimages/Real-time_Data_Syncing.png";
import fourthimg from "../assets/fullstack-development/images/gridimages/fullStack_Security_Protocols.png";

export const heroSectionData = {
  id: 1,
  heroimg: heroimg,
  heromobile: heromoobileimg,
  heading: "Hire Full Stack Developers ",
  desc: `Qurilo offers the solution to keep your website up-to-date and dynamic; hire our expert full-stack developers versed in MEAN stack, MERN framework, Laravel/PHP, and Java for seamless development.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "Expertise of Our Full-Stack Developers",
  desc: `Our full-stack software engineers are experts in all stages of software development. Here are some of their core proficiencies:`,
  img: strategyimg, // strategy image here
  cardData: [
    {
      id: 1,
      icon: firsticon,
      heading: "Full Stack Web Development",
      desc: `Our full-stack coders are having top-of-the-line proficiency in building custom web solutions for startups, SMEs, and enterprises.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "Front-end Development",
      desc: `Hire full-stack developers India with expertise in popular front-end frameworks such as Bootstrap, Foundation, and AngularJS.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "Back-end Development",
      desc: `Our developers have experience in popular back-end frameworks such as Ruby on Rails, Laravel, Express.js, and Node.js.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "MEAN & MERN Stack Development",
      desc: `Hire Full Stack developers having expertise in building web applications using MongoDB, ExpressJS, AngularJS, and Node.js. `,
    },

    {
      id: 5,
      icon: fourthicon,
      heading: "Full-stack Support and Maintenance",
      desc: `Our developers can fulfill your ongoing support and maintenance needs for your web and mobile application development.`,
    },
  ],
};

export const contactOneData = {
  heading: "Try Before, Commit Later",
  desc: `Start your 7-day trial today and discover the perfect fit for your project needs.`,
  button: "Contact Us",
  img: contactimg,
};
export const contactTwoData = {
  heading: "Build Smarter with Top Talent ",
  desc: `Ready to elevate your software projects? Hire our expert developers and experience unparalleled innovation and efficiency. `,
  button: "Book A Free Consultation",
};

export const technologiesData  = {
  heading: "Our Comprehensive fullStack Technology Stack",
  desc: `Discover the full range of technologies we use for fullStack projects.`,
  cardData: [
    {
      id: 1,
      heading: "Database & Programming Languages",
      techstacks: [
        "Oracle",
        "SQL",
        "Redis",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Java",
        "C#",
        "Ruby",
        "PHP",
      ],
    },
    {
      id: 2,
      heading: "Front-end & Back-end",
      techstacks: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "AngularJS",
        "ReactJS",
        "Vue.js",
        "React Native",
        "Bootstrap",
        "Node.js",
        "Express.js",
      ],
    },
    {
      id: 3,
      heading: "More Back-end & Frameworks",
      techstacks: [
        "Laravel",
        "Golang",
        "Python",
        "MeteorJS",
        "Spring Boot",
        "Java",
        "Hibernate",
        "Ruby on Rails",
      ],
    },
    {
      id: 4,
      heading: "Mobile App Technology",
      techstacks: [
        "Android",
        "iOS",
        "Kotlin",
        "Ionic",
        "Flutter",
        "React Native",
      ],
    },
    {
      id: 5,
      heading: "UI Toolkits",
      techstacks: [
        "UIKit",
        "Foundation",
        "Milligram",
        "One-Nexus",
        "Semantic UI",
        "Pure CSS",
        "Ink Interface Kit",
        "GroundworkCSS",
      ],
    },
    {
      id: 6,
      heading: "More UI Toolkits",
      techstacks: [
        "Materialize.css",
        "Topcoat",
        "Petal",
        "React Ant Design",
        "Blueprint",
        "Rebass",
        "Grommet",
      ],
    },
    {
      id: 7,
      heading: "Hosting Platforms",
      techstacks: [
        "AWS EC2",
        "Amazon Web Services (AWS)",
        "Docker",
        "Heroku",
        "Firebase",
        "RackSpace",
        "Kubernetes",
        "Dapr",
      ],
    },
    {
      id: 8,
      heading: "Tools & Utilities",
      techstacks: [
        "NPM",
        "ELK stack",
        "Mocha",
        "Chai",
        "REST",
        "JSON",
        "Gulp",
        "Swagger",
      ],
    },
    {
      id: 9,
      heading: "Object-Relational Mapping & Version Control",
      techstacks: [
        "Typeform",
        "Mongoose",
        "Sequelize",
        "Git",
        "Xdebug",
        "Subversion",
      ],
    },
  ],
};

export const faqData = {
  heading: "FAQs",
  desc: `Here are answers to some questions our clients frequently have in their minds:`,
  faqdata: [
    {
      id: 1,
      question:
        "What are the benefits of hiring Full-stack engineers from ValueCoders?",
      answer:
        " When you hire a Full stack developer in India, you get complete peace of mind, on-time project execution, strict non-disclosure agreement, easy team scale up & down, and no contract lock-in. Also, you will have the opportunity to work with the top 1% of full-stack developers in India have 5+ years of average experience.",
      ansList: [
        {
          id: 1,
          heading: `Expertise`,
          desc: `ValueCoders claims to have a team of experienced full-stack engineers with the knowledge and skills to handle various tasks and technologies.`,
        },
        {
          id: 2,
          heading: `Cost-effectiveness`,
          desc: `Hire full-stack programmers from ValueCoders may be more cost-effective than hiring in-house full-stack engineers or using multiple specialized contractors.`,
        },
        {
          id: 3,
          heading: `Flexibility`,
          desc: ` Full-stack engineers can work on various aspects of a project, which can be beneficial when you need to pivot or make changes to your project.`,
        },
        {
          id: 4,
          heading: `Communication `,
          desc: `ValueCoders claims to have a team of professionals who are proficient in English and can communicate effectively with clients. This can be helpful in ensuring that your project is delivered to your specifications.`,
        },
      ],
    },

    {
      id: 2,
      question: "Will I have direct contact with the assigned developers?",
      answer:
        "You will have direct contact with the assigned developers all the time. They are available on skype and other IM software for quick communication. We want you to be comfortable working with them and be able to get your questions answered quickly.",
    },
    {
      id: 3,
      question:
        " What if I am not satisfied with the hired Full stack app developer's work and would like to exit?",
      answer: `
      If you would like to exit the contract due to dissatisfaction with the developer’s work, we will work with you to ensure a smooth transition and minimize any potential impact on your project timeline. Our team will provide you with options to replace the developer with someone who better meets your project requirements.
                  `,
    },
    {
      id: 4,
      question: " How much does it cost to hire full-stack developer?",
      answer: `The cost to hire Full-stack developers in India can vary greatly depending on their experience, level of expertise, and the project’s complexity. Generally speaking, basic full-stack app development services can range from around $15-30 per hour. For more complex tasks and projects that require specialized skills or experience, the cost may be significantly higher – in some cases, up to several thousands of dollars.`,
    },
    {
      id: 5,
      question: "How can I choose the best full-stack developer?",
      answer: `  Picking up the best Full Stack developer can be confusing. But not when you consider these factors in hiring reputed application developers:`,
      list: [
        "Checking out the developer’s portfolio.",
        "Identifying current and past clients.",
        "Always look for the developer’s platform compatibility.",
        "Always look out for clear communication channels",
      ],
    },
  ],
};

export const domainExpertiseData = {
  heading: "Our fullStack Development Expertise",
  desc: `Explore our specialized capabilities in creating robust, scalable, and secure fullStack solutions tailored for diverse industries.`,
  data: [
    "fullStack Application Architecture",
    "API Integration Strategies",
    "Real-time Data Syncing",
    "fullStack Security Protocols",
    "Performance Optimization Techniques",
    "fullStack Compatibility Testing",
    "Version Control and Maintenance",
    "Comprehensive Documentation Practices",
  ],
  images: [firstimg, secondimg, thirdimg, fourthimg],
};
