// import common images here
import contactimg from "../assets/common-images/contactimg.png";
import strategyimg from "../assets/common-images/strategy.png";

// import hero images here
import heroimg from "../assets/website-portal-development/images/Website Development Company.png";
import heromobile from "../assets/website-portal-development/images/website_development_company_mobile.png";

// import services icons here
import firsticon from "../assets/website-portal-development/icons/custom_website_development.png";
import secondicon from "../assets/website-portal-development/icons/website_migration_services.png";
import thirdicon from "../assets/website-portal-development/icons/qa_testing.png";
import fourthicon from "../assets/website-portal-development/icons/support_and_maintenance.png";
import fifthicon from "../assets/website-portal-development/icons/consulting_and_business_analysis.png";
import sixthicon from "../assets/website-portal-development/icons/web_design_uiux_services.png";

// grid images here
import firstimg from "../assets/website-portal-development/images/gridimages/API_Integration_Strategies.png";
import secondimg from "../assets/website-portal-development/images/gridimages/Performance_Optimization_Techniques.png";
import thirdimg from "../assets/website-portal-development/images/gridimages/Real-time_Data_Syncing.png";
import fourthimg from "../assets/website-portal-development/images/gridimages/Website_Security_Protocols.png";

export const heroSectionData = {
  id: 1,
  heroimg: heroimg,
  heromobile: "",
  heading: "Website Development Company",
  desc: `Experience a comprehensive solution that brings your product vision to life. With 18+ years of experience, our website development firm delivers customized web solutions, including consulting, development, migration, and testing. Connect with us today to take your business to new heights.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "Our Website Development Services",
  desc: `Our website development services are the perfect solution for businesses seeking growth-centric digital transformation. Whether you need eCommerce portals, CMS, ERP solutions, chatbots, custom apps, or more, our team of experts can deliver robust web solutions.`,
  img: "", // strategy image here
  cardData: [
    {
      id: 1,
      icon: firsticon,
      heading: "Custom Website Development",
      desc: `Our experienced website developers develop interactive custom web apps that run smoothly on all major platforms and devices. We keep a user-centric approach while building web applications to deliver an end product that engages customers.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "Website Migration Services",
      desc: `Our web development company has experienced developers offering website migration services, which involve moving a website from one platform to another. They also optimize websites focusing on improving website performance and speed.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "QA & Testing",
      desc: `Once a complete website is developed, it needs to be tested before delivery. Our team of experienced QA testers follows the standard testing procedures to ensure that your website delivers optimum performance and functions exactly as intended!`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "Support & Maintenance",
      desc: `Our experienced support and maintenance team ensures that your website runs seamlessly and functions smoothly. Our maintenance services include reviewing all your website pages, running error checks, and making optimizations to keep the site running effortlessly. `,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "Consulting & Business Analysis ",
      desc: `Our experienced technology consulting and business analysis experts analyze your current processes, identify challenges you are facing, recommend improvements based on industry standards, and provide guidance for future growth!`,
    },

    {
      id: 6,
      icon: sixthicon,
      heading: "Web Design & UI/UX Services",
      desc: `Our website designers specialize in designing interactive websites with intuitive UIs, stunning graphics, clean layouts, and more! Our expert UI/UX designers work closely with website developers to deliver high-quality websites optimized for conversions.`,
    },
  ],
};

export const WebsiteContactSectionData = {
  heading: "Websites that Win!",
  desc: `Elevate Your Business with Top-Notch Websites.`,
  button: "Contact Us",
  img: ``,
};

export const WebsitetechnologiesData = {
  heading: "Our Comprehensive Website Technology Stack",
  desc: `Discover the full range of technologies we use for Website projects.`,
  cardData: [
    {
      id: 1,
      heading: "Web & Full Stack",
      techstacks: [
        "PHP",
        "ASP.Net",
        "Angular",
        "React",
        "Java",
        "Vue",
        "Python",
        "ROR",
      ],
    },
    {
      id: 2,
      heading: "Ecommerce & CMS",
      techstacks: [
        "Sharepoint",
        "Sitecore",
        "Drupal",
        "Sitefinity",
        "Umbraco",
        "Kentico",
        "AWS",
      ],
    },
    {
      id: 3,
      heading: "Blockchain & Others",
      techstacks: [
        "ChatBot",
        "Ethereum",
        "Solidity",
        "Smart Contract",
        "ML & AI",
        "Blockchain",
      ],
    },
  ],
};

export const WebsitefaqData = {
  heading: "FAQs",
  desc: ``, // desc is empty here
  faqdata: [
    {
      id: 1,
      question:
        "Why should I hire ValueCoders for website development over freelancers?",
      answer: `Hiring ValueCoders as a web development company provides many benefits over freelancers, including access to a team of experienced web developers, a structured development process, project management support, and quality assurance testing. We ensure timely delivery, cost-effectiveness, and full-time support for website development projects.`,
    },
    {
      id: 2,
      question:
        "What technologies do you use for website development in India?",
      answer: `At ValueCoders (top website development company in India), we use various technologies for website development, including PHP, .NET, Ruby on Rails, React, Angular, Node.js, and WordPress, among others. Our team of experts selects the most appropriate technology stack based on the client’s specific needs and requirements.`,
    },
    {
      id: 3,
      question:
        "Can you help in changing my existing website to look more professional?",
      answer: `Yes, our website developer in India can help in changing your existing website to look more professional. Our team of web developers can redesign and develop a website that meets your specific requirements and aligns with your business goals.`,
    },
    {
      id: 4,
      question: "What is the cost & time it takes to create a custom website?",
      answer: `The cost and time required to create a custom website depend on various factors, such as the complexity of the website, the number of features required, and the technology stack used. At ValueCoders, we provide customized website development services at affordable prices and within a specified time frame.`,
    },
    {
      id: 5,
      question:
        "What kind of support can I expect after the website or web application is developed?",
      answer: `After your website or web application is developed, you can expect ongoing support from the development team of web development agency. This support may include bug fixes, software updates, security patches, and general maintenance. `,
    },
  ],
};

export const WebsiteDomainExpertiseData = {
  heading: "Our Website Development Expertise",
  desc: `Explore our specialized capabilities in creating robust, scalable, and secure Website solutions tailored for diverse industries.`,
  data: [
    "Website Application Architecture",
    "API Integration Strategies",
    "Real-time Data Syncing",
    "Website Security Protocols",
    "Performance Optimization Techniques",
    "Website Compatibility Testing",
    "Version Control and Maintenance",
    "Comprehensive Documentation Practices",
  ],
  images: [firstimg, secondimg, thirdimg, fourthimg],
};
