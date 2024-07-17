// import common images here 
import contactimg from "../assets/common-images/contactimg.png"
import strategyimg from "../assets/common-images/strategy.png"



// import hero images here
import heroimg from  "../assets/cross-platform/images/home_page_image.png"
import heromobile from  "../assets/cross-platform/images/mobile_page_image.png.jpg"

// import services icons here
import firsticon from "../assets/cross-platform/icons/Application_Consultation_and_Architecture.png"
import secondicon from "../assets/cross-platform/icons/Solution_Prototyping.png"
import thirdicon from "../assets/cross-platform/icons/Multi-Platform_Application.png"
import fourthicon from "../assets/cross-platform/icons/Support_Maintenance_Optimization.png"
import fifthicon from "../assets/cross-platform/icons/Native_Mobile_App_Improvement.png"
import sixthicon from "../assets/cross-platform/icons/Dedicated_Cross-Platform_Development_Team.png"

// grid images here
import firstimg from "../assets/cross-platform/images/gridimages/API_Integration_Strategies.png"
import secondimg from "../assets/cross-platform/images/gridimages/CrossPlatform_Security_Protocols.png"
import thirdimg from "../assets/cross-platform/images/gridimages/Performance_Optimization_Techniques.png"
import fourthimg from "../assets/cross-platform/images/gridimages/Real-time_Data_Syncing.png"

export const heroSectionData = {
  id: 1,
  heroDesktop: heroimg,
  heroMobile: heromobile,
  heading: "Cross-Platform App Development Services",
  desc: `Struggling to find a partner for your cross-platform app development needs? We offer a dedicated team of experts who create robust, scalable, and interactive web and mobile apps tailored to your business requirements. From AI/VR to wearable and utility apps, we deliver secure, high-quality solutions within your timeframe.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "Cross-Platform App Development Services",
  desc: `We have expertise in providing cross-platform app development services for all types of devices at the price of one codebase and using the same IDE language and APIs. We provide various services listed below:`,
  img: strategyimg, 
  list: [
    {
      id: 1,
      icon: firsticon,
      heading: "Application Consultation and Architecture",
      desc: `This service involves consulting clients to understand their business requirements, based on which the team develops a detailed project plan outlining the scope, timelines, and resources. The architecture designs the application's technical architecture.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "Solution Prototyping",
      desc: `We develop a functional prototype of the application to validate the final product meets the client's needs and requirements, is user-friendly, and is financially feasible. We build a prototype to help businesses understand how the app will perform in the market.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "Multi-Platform Application ",
      desc: `It involves creating software applications that can run on multiple operating systems, such as Android, iOS, and Windows Phone, with a single codebase. This process requires platform compatibility, user interface design, testing and debugging, and deployment and distribution across multiple app stores.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "Support, Maintenance, and Optimization ",
      desc: `This system involves ongoing efforts to ensure the application continues to function effectively and efficiently on multiple platforms. This includes regular updates to address bugs and security issues, optimizing performance, and providing customer support. `,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "Native Mobile App Improvement ",
      desc: `It involves enhancing the user experience and functionality of a mobile application by incorporating native features and functionalities of each platform. This process requires understanding the nuances of each platform's programming language to optimize the application's performance and user experience.  `,
    },
    {
      id: 6,
      icon: sixthicon,
      heading: "Dedicated Cross-Platform Development Team ",
      desc: `We offer dedicated cross-platform development team for hire by identifying the project requirements. The team provides development support and ongoing support and feedback to ensure meet project goals and deadlines. It also maintains effective communication and collaboration with the project stakeholders. `,
    },
  ],
};

export const contactOneData = {
  heading: "One App, All Platforms!",
  desc: `Maximize ROI with Cross-Platform App Development.`,
  button: "Contact Us",
  img: contactimg,
};
export const contactTwoData = {
  heading: "Be Platform-Perfect!",
  desc: `Get Apps that Perform Seamlessly Everywhere.`,
  button: "Contact Us",
};




export const technologiesData = {
  heading: "Our Comprehensive CrossPlatform Technology Stack",
  desc: `Discover the full range of technologies we use for CrossPlatform projects.`,
  list: [
    {
      id: 1,
      heading: "Programming Languages",
      techstacks: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C#",
        "Go",
        "Ruby",
        "PHP",
      ],
    },
    {
      id: 2,
      heading: "Frameworks & Libraries",
      techstacks: [
        "Express.js",
        "Django",
        "Flask",
        "Spring Boot",
        "ASP.NET Core",
        "Ruby on Rails",
        "FastCrossPlatform",
        "Laravel",
      ],
    },
    {
      id: 3,
      heading: "CrossPlatform Design & Documentation",
      techstacks: [
        "Swagger",
        "Postman",
        "OpenCrossPlatform",
        "CrossPlatform Blueprint",
        "RAML",
        "GraphQL",
        "gRPC",
        "JSON:CrossPlatform",
      ],
    },
    {
      id: 4,
      heading: "Databases",
      techstacks: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Redis",
        "Cassandra",
        "Elasticsearch",
        "Firebase",
      ],
    },
    {
      id: 5,
      heading: "Security & Authentication",
      techstacks: [
        "OAuth",
        "JWT",
        "CrossPlatform Key",
        "OpenID Connect",
        "SAML",
        "TLS/SSL",
        "HMAC",
        "CORS",
      ],
    },
    {
      id: 6,
      heading: "CrossPlatform Management",
      techstacks: [
        "Kong",
        "CrossPlatformgee",
        "AWS CrossPlatform Gateway",
        "Azure CrossPlatform Management",
        "Postman",
        "Mulesoft",
        "Tyk",
        "WSO2",
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
        "Why should I choose Qurilo as my cross-platform app development partner?",
      answer:
        " Choose Qurilo for the best cross-platform mobile app development; our expert team is proficient in React Native, Xamarin, and Flutter. We have experience delivering top-notch cross-platform apps that are feature-rich, scalable, and user-friendly.",
    },

    {
      id: 2,
      question:
        "Are there any hidden charges for cross-platform app development?",
      answer:
        "At Qurilo, we are transparent with our clients, and there are no hidden charges for our cross-platform app development services. We offer a flexible pricing model, and you only pay for the services you need.",
    },
    {
      id: 3,
      question:
        " Do you offer any after-sales service/app support after completing the development process?",
      answer: `
            Yes, we do. Our experts will ensure that your app runs smoothly and performs well, and we will provide maintenance and support as needed.
              `,
    },
    {
      id: 4,
      question: "Is it possible to look at my app during development?",
      answer: `Yes, we offer our clients cross-platform mobile app development services where they can access the app during development. We understand the importance of client involvement in the development process and encourage our clients to provide feedback as we work on their projects.`,
    },
    {
      id: 5,
      question: "Will I get the copyright of the source code?",
      answer: `  Yes, you will own the copyright to your app’s source code. At Qurilo, we believe in transparency and honesty and ensure that our clients have full ownership of their app and its source code.`,
    },
  ],
};

export const domainExpertiseData = {
  heading: "Our CrossPlatform Development Expertise",
  desc: `Explore our specialized capabilities in creating robust, scalable, and secure CrossPlatform solutions tailored for diverse industries.`,
  points: [
    "CrossPlatform Application Architecture",
    "API Integration Strategies",
    "Real-time Data Syncing",
    "CrossPlatform Security Protocols",
    "Performance Optimization Techniques",
    "CrossPlatform Compatibility Testing",
    "Version Control and Maintenance",
    "Comprehensive Documentation Practices",
  ],
  images: [firstimg,secondimg,thirdimg,fourthimg],
};
