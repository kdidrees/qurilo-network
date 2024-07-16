
// import hero images here
import heroimg from  "../assets/backend-development/images/Backend_Development_Services.jpg"
import heromobile from  "../assets/backend-development/images/Backend_Development_Services_MOBILE.jpg"

// import services icons here
import firsticon from "../assets/backend-development/icons/web_application_backend_development.png"
import secondicon from "../assets/backend-development/icons/mobile_app_backend_development.png"
import thirdicon from "../assets/backend-development/icons/ERP_CRM_Backend_Development.png";
import fourthicon from "../assets/backend-development/icons/api_integration.png";
import fifthicon from "../assets/backend-development/icons/custom_backend_solutions.png";
import sixthicon from "../assets/backend-development/icons/Backend_Refactoring.png";

// grid images here
import firstimg from "../assets/backend-development/images/gridimages/Authentication_and_AuthorizatioN.png"
import secondimg from "../assets/backend-development/images/gridimages/Real-timeData_Processing.png"
import thirdimg from "../assets/backend-development/images/gridimages/Serverless_Computing.png"
import fourthimg from "../assets/backend-development/images/gridimages/cloud-computing-data-management-concept.jpg"

// import common images here 
import contactimg from "../assets/common-images/contactimg.png"
import strategyimg from "../assets/common-images/strategy.png"

export const heroSectionData = {
  id: 1,
  heroimg: heroimg,
  heromobile: heromobile,
  heading: "Backend Development Services",
  desc: `Struggling with outdated backend development solutions? Upgrade to enterprise-grade backend development services from Qurilo. Our experienced team ensures secure and stable websites using the latest technologies. We offer web/backend backend, ERP/CRM backend, API integration, and backend refactoring.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "Our Backend Development Services",
  desc: `As a leading backend web development company in India, we specialize in building best-in-class backend solutions that bring value to your business. Our innovative and creative teams deliver projects with excellence.`,
  img: strategyimg, 
  cardData: [
    {
      id: 1,
      icon:firsticon,
      heading: "Web Application Backend Development",
      desc: `We help businesses build robust web-based applications backend that enables them to create seamless user experience through their applications, using the latest technology trends while keeping your costs low.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "Mobile App Backend Development",
      desc: `Get intuitive & intelligent information flow for your backend app users with our backend development services. We provide a seamless experience across multiple devices and platforms by creating native or cross-platform systems.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "ERP/CRM Backend Development",
      desc: `Our experts help you enhance your existing ERPs or CRMs to make them richer in terms of functionalities, reporting, and user experience. We use modern frameworks and technologies for our operations.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "API Integration Services",
      desc: `As a leading backend development company, we offer reliable API development & integration services for our clients. Using this feature, they can easily customize their application. Moreover, it helps them to analyze data as per their project requirements.`,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "Custom Backend Solutions",
      desc: `We are one of the best custom back-end development company India. We develop custom-built backend solutions for your business that take ideas from inception to implementation with speed, accuracy, and affordability.`,
    },
    {
      id: 6,
      icon: sixthicon,
      heading: "Backend Refactoring",
      desc: `Need an optimum app performance solution? Our dedicated teams help you redesign the entire solution infrastructure and leave frontend systems untouched so that it runs smoothly without any technical cost or code enhancement needed on our part.`,
    },
  ],
};

export const contactOneData = {
  heading: "Backend for the Future!",
  desc: `Enable Seamless Integrations and Expand Reach.`,
  button: "Contact Us",
  img: contactimg,
};
export const contactTwoData = {
  heading: "Backend for the Future!",
  desc: `Enable Seamless Integrations and Expand Reach.`,
  button: "Contact Us",
  img: contactimg,
};


export const technologiesData = {
  heading: "Our Comprehensive backend Technology Stack",
  desc: `Discover the full range of technologies we use for backend projects.`,
  cardData: [
    {
      id: 1,
      heading: "Artificial Intelligence (AI)",
      techstacks: [
        "Python",
        "R",
        "Java",
        "C++",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
      ],
    },
    {
      id: 2,
      heading: "Robotic Process Automation (RPA)",
      techstacks: [
        "UiPath",
        "Blue Prism",
        "Automation Anywhere",
        "WorkFusion",
        "Python",
        "JavaScript",
        ".NET",
        "VBScript",
      ],
    },
    {
      id: 3,
      heading: "Internet of Things (IoT)",
      techstacks: [
        "Raspberry Pi",
        "Arduino",
        "ESP8266/ESP32",
        "C",
        "C++",
        "Python",
        "JavaScript (Node.js)",
        "MQTT",
      ],
    },
    {
      id: 4,
      heading: "Augmented Reality & Virtual Reality (AR/VR)",
      techstacks: [
        "C#",
        "C++",
        "JavaScript",
        "Unity3D",
        "Unreal Engine",
        "ARKit (iOS)",
        "ARCore (Android)",
        "Vuforia",
      ],
    },
    {
      id: 5,
      heading: "Blockchain Development",
      techstacks: [
        "Solidity (Ethereum)",
        "Go (Hyperledger Fabric)",
        "Rust (Solana)",
        "JavaScript",
        "Python",
        "Ethereum",
        "Hyperledger Fabric",
        "Corda",
      ],
    },
    {
      id: 6,
      heading: "OTT Development",
      techstacks: [
        "JavaScript",
        "TypeScript",
        "Swift",
        "Kotlin",
        "Java",
        "Python",
        "React",
        "Angular",
      ],
    },
  ],
};

export const faqData = {
  heading: "FAQs",
  desc: ``, // desc is empty here
  faqdata: [
    {
      id: 1,
      question: "Why should I choose Qurilo as my backend development partner?",
      answer:
        " You should select Qurilo as your backend development partner because we have a team of experienced developers proficient in various backend programming languages and frameworks. They also possess expertise in developing APIs, managing databases, and creating scalable systems.",
      list: [
        "Sound technical capabilities",
        "Strong engineering culture",
        "Client-centric approach",
        "Strong understanding of the HTTP protocol and web servers",
        "Ability to debug complex problems",
        "Excellent customer service and support",
      ],
    },

    {
      id: 2,
      question:
        "How soon can I complete my back-end development project with Qurilo?",
      answer:
        " The time required for backend development can vary depending on the project. For a simple CRUD application, it might only take a few weeks. But a more complex application with many endpoints and integrations could take several months. Below is a rough timeline for backend development:",
      list: [
        "Week 1: Develop the initial feature set and define the database structure.",
        "Week 2: Write the code to connect to the database and perform basic CRUD operations.",
        "Week 3: Add authentication and authorization to your application.",
        "Week 4: Implement any remaining features, such as user profiles, file uploads, etc.",
        "Week 5: Perform final testing and then launch.",
      ],
    },
    {
      id: 3,
      question:
        " What are your main technologies you offer for backend development?",
      answer: `
        Technology is always evolving, and new languages and frameworks are constantly emerging. As such, we make it a point to stay up-to-date on the latest developments in backend technology to always offer our clients the best possible solution.
  <br/><br/>
At our backend development company, we offer a variety of technologies for backend development, including Node.js, PHP, Python, and Ruby on Rails. We may use one or multiple technologies to create a robust and scalable backend solution depending on the project.
        `,
    },
    {
      id: 4,
      question: "How much does it cost for backend development?",
      answer: `The cost of backend development can vary depending on several factors, such as the project’s complexity, the scope of work, the technologies used, and the developers’ hourly rates. It is best to discuss your specific requirements to get a personalized quote. However, we charge $25-$30 hourly to develop the backend.`,
    },
    {
      id: 5,
      question:
        "How does Qurilo ensure the quality and security of backend development projects?",
      answer: `Qurilo is committed to delivering high-quality and secure backend development solutions. Here’s how we ensure it:`,
      // put list items here
      ansList: [
        {
          id: 1,
          heading: `Experienced Developers`,
          desc: `We have a team of experienced backend developers with expertise in various technologies and frameworks. They follow coding best practices and industry standards to deliver reliable and robust solutions.`,
        },
        {
          id: 2,
          heading: `Quality Assurance`,
          desc: `We have a dedicated Quality Assurance (QA) team that conducts rigorous testing at every stage of the development process. This ensures that the backend code is thoroughly tested for functionality, performance, and security.`,
        },
        {
          id: 3,
          heading: `Security Measures`,
          desc: `We prioritize the security of your application. Our developers adhere to secure coding practices, implement encryption techniques, and follow industry-standard security guidelines to safeguard your data and protect against vulnerabilities.`,
        },
        {
          id: 4,
          heading: `Code Reviews `,
          desc: `We conduct regular code reviews to maintain quality and identify potential issues or improvements. This helps ensure the backend code is clean, efficient, and maintainable.`,
        },
        {
          id: 5,  
          heading: `Collaboration and Communication`,
          desc: `We maintain transparent and open communication throughout development. We actively involve clients in discussions, provide regular updates, and seek feedback to ensure alignment with their expectations.`,
        },
      ],
    },
  ],
};

export const domainExpertiseData = {
  heading: "Our Backend Development Expertise",
  desc: `We specialize in building robust, scalable, and secure backend systems tailored to meet the needs of diverse industries. Our expertise ensures seamless integration, efficient data handling, and reliable performance for your applications.`,
  data: [
    "API Development",
    "Database Design and Management",
    "Authentication and Authorization",
    "Real-time Data Processing",
    "Microservices Architecture",
    "Serverless Computing",
  ],
  images: [firstimg,secondimg,thirdimg,fourthimg],
};
