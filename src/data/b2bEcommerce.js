// import hero images here
import heroimg from "../assets/b2b-ecommerce/images/HOME_PAGE_IMAGE.png";
import heromobile from "../assets/b2b-ecommerce/images/MOBILE_IMAGE.jpg";

// import services icons here
import firsticon from "../assets/b2b-ecommerce/icons/B2B_eCommerce_Consulting.png";
import secondicon from "../assets/b2b-ecommerce/icons/Web_eCommerce.png";
import thirdicon from "../assets/b2b-ecommerce/icons/Mobile_Commerce.png";
import fourthicon from "../assets/b2b-ecommerce/icons/B2B_eCommerce_Supply_Chain_Automation.png";
import fifthicon from "../assets/b2b-ecommerce/icons/Multistore_eCommerce.png";
import sixthicon from "../assets/b2b-ecommerce/icons/B2B_eCommerce_Maintenance_Support.png";

// grid images here
import firstimg from "../assets/b2b-ecommerce/images/gridimages/Conscious_data_confidentiality_integrity.png";
import secondimg from "../assets/b2b-ecommerce/images/gridimages/Implementation_consulting.png";
import thirdimg from "../assets/b2b-ecommerce/images/gridimages/e-commerce_business.png";
import fourthimg from "../assets/b2b-ecommerce/images/gridimages/e-commerce_business.png";

// import common images here
import contactimg from "../assets/common-images/contactimg.png";
import strategyimg from "../assets/common-images/strategy.png";

export const heroSectionData = {
  id: 1,
  heroDesktop: heroimg,
  heroMobile: heromobile,
  heading: "B2B eCommerce Solutions",
  desc: `Struggling with B2B eCommerce challenges? Qurilo has you covered. Our tailored solutions address the evolving digital landscape and meet the needs of your B2B customers. With our range of B2B eCommerce solutions, we help businesses of all sizes establish a strong online presence that aligns with their unique requirements.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "B2B eCommerce Solutions",
  desc: `

Our B2B eCommerce solutions address all aspects of B2B eCommerce software development, empowering your business with a competitive edge. We ensure your online platform is robust, user-friendly, and capable of driving growth and success in the digital marketplace.
`,
  img: strategyimg,
  list: [
    {
      id: 1,
      icon: firsticon,
      heading: "B2B eCommerce Consulting",
      desc: `Our experts review your existing eCommerce business strategy, resources, technologies, and other vital aspects to discover hidden issues for growth by assessing current business processes, generating process analysis reports, and pinpointing high-level business requirements.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "Web eCommerce",
      desc: `We offer a comprehensive range of services to help businesses create a seamless online shopping experience for their customers, including custom eCommerce storefronts, web-based POS systems, and product information management systems.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "Mobile Commerce",
      desc: `We specialize in creating mCommerce applications that make shopping easy and convenient by providing feature-rich B2B eCommerce mobile apps to sell online, streamlining the shopping experience for your prospects, and enabling easy browsing and checkout.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "B2B eCommerce Supply Chain Automation",
      desc: `We help you build a solid B2B supply chain at the lowest cost to make you stand up high in this competitive edge by procuring the required materials, facilitating full control over order executions, and enabling quick resolution of order claims.`,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "Multistore eCommerce",
      desc: `With our years of experience in eCommerce solutions, we help you set up multi stores for your business or operate under multiple brands by employing personalized merchandising techniques, interactive product imaging, and upsell and cross-sell capabilities.`,
    },
    {
      id: 6,
      icon: sixthicon,
      heading: "B2B eCommerce Maintenance & Support",
      desc: `With B2B eCommerce maintenance and support, we ensure the continued success of a company's eCommerce platform by providing regular updates and upgrades, maximizing customer satisfaction, and minimizing downtime.`,
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
  heading: "FAQs Related To B2B eCommerce Services",
  desc: `Here are answers to some questions related to B2B eCommerce Services that our clients frequently have in their minds.`,
  faqdata: [
    {
      id: 1,
      question: "Why should I choose Qurilo for B2B eCommerce solutions?",
      answer:
        " At Qurilo, we have extensive experience in delivering tailored B2B eCommerce solutions. Our team of experts ensures seamless integrations, user-friendly interfaces, and personalized features to enhance your B2B operations and drive business growth.",
    },

    {
      id: 2,
      question:
        "Do Qurilo provide ongoing support and maintenance for B2B eCommerce platforms?",
      answer:
        "  Yes, we offer comprehensive support and maintenance services to keep your B2B eCommerce platform up-to-date, secure, and performing optimally, ensuring uninterrupted business operations.",
    },
    {
      id: 3,
      question: "  How much does it cost to develop a B2B eCommerce app?",
      answer: `
     The cost of developing a B2B eCommerce app depends on various factors, including features, complexity, and customization. We provide transparent pricing tailored to your specific project requirements and budget.
        `,
    },
    {
      id: 4,
      question:
        "Can I test Qurilo' B2B eCommerce services before committing to a long-term engagement?",
      answer: `Absolutely! We offer a risk-free trial period and proof of concept to let you experience the value we bring to your B2B eCommerce project before making a long-term commitment.`,
    },
    {
      id: 5,
      question:
        " Can Qurilo assist with migrating an existing B2B eCommerce store to a new platform?",
      answer: `Yes, our team specializes in smooth B2B eCommerce store migrations, ensuring data integrity, SEO preservation, and minimal downtime during the transition. We make the process hassle-free and seamless for you.`,
    },
  ],
};

export const domainExpertiseData = {
  heading: "B2B eCommerce Consulting",
  desc: `Our experts review your existing eCommerce business strategy, resources, technologies, and other vital aspects to discover hidden issues for growth by assessing current business processes, generating process analysis reports, and pinpointing high-level business requirements.`,
  points: [
    "Assess current business process",
    "Generate process analysis reports",
    "Pinpoint high-level business requirements",
  ],
  images: [firstimg, secondimg, thirdimg, fourthimg],
};
