// import hero images here
import heroimg from "../assets/backend-development/images/Backend_Development_Services.jpg";
import heromobile from "../assets/backend-development/images/Backend_Development_Services_MOBILE.jpg";

// import services icons here
import firsticon from "../assets/backend-development/icons/web_application_backend_development.png";
import secondicon from "../assets/backend-development/icons/mobile_app_backend_development.png";
import thirdicon from "../assets/backend-development/icons/ERP_CRM_Backend_Development.png";
import fourthicon from "../assets/backend-development/icons/api_integration.png";
import fifthicon from "../assets/backend-development/icons/custom_backend_solutions.png";
import sixthicon from "../assets/backend-development/icons/Backend_Refactoring.png";

// grid images here
import firstimg from "../assets/backend-development/images/gridimages/Authentication_and_AuthorizatioN.png";
import secondimg from "../assets/backend-development/images/gridimages/Real-timeData_Processing.png";
import thirdimg from "../assets/backend-development/images/gridimages/Serverless_Computing.png";
import fourthimg from "../assets/backend-development/images/gridimages/cloud-computing-data-management-concept.jpg";

// import common images here
import contactimg from "../assets/common-images/contactimg.png";
import strategyimg from "../assets/common-images/strategy.png";

export const heroSectionData = {
  id: 1,
  heroDesktop: heroimg,
  heroMobile: heromobile,
  heading: "eCommerce Implementation Services",
  desc: `Expert assistance in deploying and optimizing online retail platforms for streamlined operations and enhanced sales potential.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "eCommerce Implementation Services",
  desc: `
Our comprehensive eCommerce implementation services suite is designed to propel your online business to new heights.
`,
  img: strategyimg,
  list: [
    {
      id: 1,
      icon: firsticon,
      heading: "Configuration and Customization",
      desc: `Utilizing your chosen eCommerce platform’s inherent capabilities, we meticulously configure it to suit your designated tasks. Going beyond, we harness our technical prowess to forge a truly bespoke solution tailored to your distinct requirements.`},
    {
      id: 2,
      icon: secondicon,
      heading: "Implementation Consulting",
      desc: `Our implementation consulting ensures collaborative and impactful partnerships. We ensure alignment by delving into your unique business specifics, challenges, ambitions, and uncertainties.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "UX and UI Design",
      desc: `We create a website for your e-commerce business that looks great and is easy to use. We base our design on your products, audience, and message, ensuring your online space feels welcoming.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "Integrations",
      desc: `Our efforts extend beyond the confines of eCommerce software. We embrace a holistic view of an eCommerce solution, encompassing intricate integrations with payment gateways, brick-and-mortar POS systems (especially vital for omnichannel retail), and harmonizing corporate systems.`,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "Solution Migration",
      desc: `For businesses grappling with antiquated eCommerce software, we offer a strategic remedy. Our eCommerce platform, finely attuned to your current needs and future growth, serves as the optimal solution. We orchestrate data migration with minimal disruption.`,
    },
    {
      id: 6,
      icon: sixthicon,
      heading: "Security Testing",
      desc: `Conscious of data confidentiality and integrity in eCommerce, we include thorough security testing in our implementation process. Penetration testing, a critical component of eCommerce solution implementation, protects against potential security vulnerabilities and threats.`,
    },
  ],
};

export const contactOneData = {
  heading: "Let's Discuss Your Project",
  desc: `Get a free consultation and let us know your project idea to turn it into an amazing digital product.`,
  button: "Contact Us",
  img: contactimg,
};
export const contactTwoData = {
  heading: "Got a Project in Mind? Tell Us More",
  desc: `Drop us a line, and we'll get back to you immediately to schedule a call and discuss your needs personally.`,
  button: "Contact Us",
};

export const faqData = {
  heading: "FAQs",
  desc: ``, // desc is empty here
  faqdata: [
    {
      id: 1,
      question: "Why choose ValueCoders for eCommerce implementation?",
      answer:
        " Here are the key reasons to choose ValueCoders for eCommerce implementation:",
     list:["Expertise","Customization","Quality & Timely Delivery","Security","Scalability","Clear Communication","Client-Centric Approach"]
    },

    {
      id: 2,
      question:
        " How much time does it take for successful eCommerce implementation?",
      answer:
        "   The time required for a successful eCommerce implementation varies widely based on factors like complexity, features, customization, and team efficiency. It can take anywhere from a few months to a year or more. Accurate estimates are based on project scope and requirements.",
    },
    {
      id: 3,
      question: "What is the cost of doing a successful eCommerce implementation?",
      answer: `
      . The cost of a successful eCommerce implementation varies widely based on factors like platform, customization, design, integrations, and features. It can range from a few thousand to several hundred thousand dollars. Consult with professionals for accurate estimates.
        `,
    },
    {
      id: 4,
      question:
        "What are the four phases of eCommerce ?",
      answer: ` The four phases of eCommerce are:`,
      list:["Discovery Phase: Market research and business planning","Implementation Phase: Building and launching the eCommerce platform","Operation Phase: Running the online store, managing inventory, and processing orders","Optimization Phase: Continuously improving the eCommerce experiences"]
    },
    {
      id: 5,
      question:
        " Can ValueCoders assist with migrating an existing B2B eCommerce store to a new platform?",
      answer: `Yes, our team specializes in smooth B2B eCommerce store migrations, ensuring data integrity, SEO preservation, and minimal downtime during the transition. We make the process hassle-free and seamless for you.`,
    },
  ],
};

export const domainExpertiseData = {
    heading: "Comprehensive eCommerce Solutions",
    desc: `Utilizing your chosen eCommerce platform’s inherent capabilities, we meticulously configure it to suit your designated tasks. Going beyond, we harness our technical prowess to forge a truly bespoke solution tailored to your distinct requirements.`,
    points: [
      "Implementation consulting ensures collaborative and impactful partnerships. We ensure alignment by delving into your unique business specifics, challenges, ambitions, and uncertainties.",
      "We create a website for your e-commerce business that looks great and is easy to use. We base our design on your products, audience, and message, ensuring your online space feels welcoming.",
      "Our efforts extend beyond the confines of eCommerce software. We embrace a holistic view of an eCommerce solution, encompassing intricate integrations with payment gateways, brick-and-mortar POS systems (especially vital for omnichannel retail), and harmonizing corporate systems.",
      "For businesses grappling with antiquated eCommerce software, we offer a strategic remedy. Our eCommerce platform, finely attuned to your current needs and future growth, serves as the optimal solution. We orchestrate data migration with minimal disruption.",
      "Conscious of data confidentiality and integrity in eCommerce, we include thorough security testing in our implementation process. Penetration testing, a critical component of eCommerce solution implementation, protects against potential security vulnerabilities and threats.",
    ],
    images: [firstimg, secondimg, thirdimg, fourthimg],
  };
  
  
