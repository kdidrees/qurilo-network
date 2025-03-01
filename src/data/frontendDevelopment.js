// import common images here
import strategyimg from "../assets/common-images/strategy.png";
import contactimg from "../assets/common-images/contactimg.png";

// import service icons here
import firsticon from "../assets/frontend-development/icons/Custom_Front-end_Development.png";
import secondicon from "../assets/frontend-development/icons/Front-end_Architecture_Design.png";
import thirdicon from "../assets/frontend-development/icons/cms_development.png";
import fourthicon from "../assets/frontend-development/icons/Single_Page_Apps_Development.png";
import fifthicon from "../assets/frontend-development/icons/UI_UX_Development.png";
import sixthicon from "../assets/frontend-development/icons/Progressive_Web_Apps_Development.png";

// import grid images here 
import firstimg from "../assets/frontend-development/images/gridimages/Component-Based_Architecture.png"
import secondimg from "../assets/frontend-development/images/gridimages/Progressive_Web_Apps.png"
import thirdimg from "../assets/frontend-development/images/gridimages/Single_Page_Applications.png"
import fourthimg from "../assets/frontend-development/images/gridimages/State_Management.png"

// import hero images here 
import heroimg from "../assets/frontend-development/images/Front-end_Development_Services.png"
import heromobile from "../assets/frontend-development/images/front-end_development_services_mobile.jpg"


export const heroSectionData = {
  id: 1,
  heroimg: heroimg,
  heromobile: heromobile,
  heading: "Front-end Development Services",
  desc: `Struggling to enhance the look and usability of your website or app? Qurilo offers dedicated front-end developers with Angular, React, and JavaScript expertise. We deliver top-notch front-end development services, ensuring seamless user experiences and innovative interfaces. Partner with us for visually appealing and user-friendly solutions.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "Front-end Development Services",
  desc: `

Recognized as one of the best front-end development companies in India, we specialize in providing the best front-end web development services that bring value to your business. Our team strives to provide innovative solutions to suit even the most unique business needs.
`,
  img: strategyimg,
  cardData: [
    {
      id: 1,
      icon: firsticon,
      heading: "Custom Front-end Development",
      desc: `We provide front-end development solutions that are intuitive to use, load quickly, and are rich in features. Our cutting-edge technologies ensure your app stands out in the crowd!`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "Front-end Architecture & Design",
      desc: `With our front-end development expertise, we ensure your apps have a sleek and modern look that will deliver an engaging and immersive experience to users.`,
    },

    {
      id: 3,
      icon: fourthicon,
      heading: "Single Page Apps Development",
      desc: `With our single-page application development services, we can help you boost performance and enhance UX flexibility.`,
    },
    {
      id: 4,
      icon: fifthicon,
      heading: "UI/UX Development",
      desc: `With our proven experience in UI/UX design and app development, we create cross-device customer-facing interfaces that are tailored for your business needs.`,
    },
    {
      id: 5,
      icon: sixthicon,
      heading: "Progressive Web Apps Development",
      desc: `We use Progressive Web Apps (PWAs) to deliver mobile versions of websites that mimic their native app counterparts.`,
    },
    {
      id: 6,
      icon: thirdicon,
      heading: "CMS Development",
      desc: `We offer a comprehensive solution to establish a top-of-the-line content management system that is responsive and reliable.`,
    },
  ],
};

export const contactOneData = {
  heading: "Frontend Finesse!",
  desc: `Create stunning user interfaces with our expert frontend development.`,
  button: "Contact Us",
  img: contactimg,
};
export const contactTwoData = {
  heading: "User-Friendly UI!",
  desc: `Enhance user experience and engagement with our frontend services.`,
  button: "Contact Us",
};

export const technologiesData = {
  heading: "Our Comprehensive Frontend Technology Stack",
  desc: `Discover the full range of technologies we use for frontend projects.`,
  cardData: [
    {
      id: 1,
      heading: "Web Development",
      techstacks: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Vue.js",
        "Next.js",
      ],
    },
    {
      id: 2,
      heading: "Styling & UI Frameworks",
      techstacks: [
        "CSS",
        "Sass",
        "LESS",
        "Bootstrap",
        "Tailwind CSS",
        "Material-UI",
        "Chakra UI",
        "Ant Design",
      ],
    },
    {
      id: 3,
      heading: "State Management",
      techstacks: [
        "Redux",
        "Context API",
        "MobX",
        "Recoil",
        "Zustand",
        "XState",
        "Vuex",
        "NgRx",
      ],
    },
    {
      id: 4,
      heading: "Build Tools & Bundlers",
      techstacks: [
        "Webpack",
        "Parcel",
        "Rollup",
        "Vite",
        "Gulp",
        "Grunt",
        "Babel",
        "ESBuild",
      ],
    },
    {
      id: 5,
      heading: "Testing",
      techstacks: [
        "Jest",
        "Mocha",
        "Chai",
        "Enzyme",
        "React Testing Library",
        "Cypress",
        "Storybook",
        "Puppeteer",
      ],
    },
    {
      id: 6,
      heading: "Version Control",
      techstacks: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "SVN",
        "Mercurial",
        "Perforce",
        "Azure Repos",
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
      question:
        "Why should I choose Qurilo as my Front-end development partner?",
      answer:
        " Qurilo is a trusted front-end development partner with a team of experienced developers. We prioritize client satisfaction, ensure timely delivery, and offer cost-effective solutions. With our expertise in front-end technologies and dedication to quality, we can provide you with high-performance, visually appealing, and user-friendly front-end solutions.",
    },

    {
      id: 2,
      question: "How much does Front-end development cost?",
      answer:
        " The cost of front-end development depends on various factors such as project complexity, scope, and specific requirements. To provide an accurate cost estimate, we analyze your project details and provide a tailored pricing quote that aligns with your budget and expectations.",
    },
    {
      id: 3,
      question: " How much time does Front-end development usually take?",
      answer: `
         The duration of front-end development varies based on project complexity, size, and specific requirements. After assessing your project details, we provide a project timeline with milestones that align with your project goals. We strive to deliver front-end development projects within agreed timelines and ensure efficient and timely completion.
          `,
    },
    {
      id: 4,
      question:
        "How do you ensure that my website is mobile-friendly and responsive?",
      answer: `At Qurilo, we follow best practices for responsive web design. Our front-end developers utilize CSS media queries, flexible grid systems, and responsive design frameworks to ensure your website adapts seamlessly to different screen sizes and devices. We conduct thorough testing to ensure optimal mobile-friendliness and responsiveness.`,
    },
    {
      id: 5,
      question:
        "Can you integrate third-party APIs and services into my website's Front-end?",
      answer: ` Yes, we have expertise in integrating third-party APIs and services into front-end development projects. Whether it’s payment gateways, social media APIs, mapping services, or any other external services, we can seamlessly integrate them into your website’s front-end, enhancing its functionality and providing a seamless user experience.`,
    },
  ],
};

export const domainExpertiseData = {
  heading: "Our Frontend Development Expertise",
  desc: `We specialize in building robust, scalable, and secure frontend systems tailored to meet the needs of diverse industries. Our expertise ensures seamless user experiences, efficient state management, and reliable performance for your applications.`,
  data: [
    "Responsive Web Design",
    "Single Page Applications (SPAs)",
    "Progressive Web Apps (PWAs)",
    "Component-Based Architecture",
    "State Management",
    "Cross-Browser Compatibility",
    "Frontend Performance Optimization",
    "Accessibility",
  ],
  images: [firstimg,secondimg,thirdimg,fourthimg],
};
