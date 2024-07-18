// import hero images here
import heroimg from "../assets/ecommerce-consulting/images/home_page_image.png";
import heromobile from "../assets/ecommerce-consulting/images/mobile_image.jpg";


// import services icons here
import firsticon from "../assets/ecommerce-consulting/icons/eCommerce_Strategy_Consulting_Service.png";
import secondicon from "../assets/ecommerce-consulting/icons/eCommerce_MobileWeb_App_Design.png";
import thirdicon from "../assets/ecommerce-consulting/icons/eCommerce_App_Development_Consulting.png";
import fourthicon from "../assets/ecommerce-consulting/icons/QA_Testing_Consulting.png";
import fifthicon from "../assets/ecommerce-consulting/icons/eCommerce_Digitalization_Consulting.png";


// grid images here
import firstimg from "../assets/ecommerce-consulting/images/gridimages/Generate_process_analysis_reports.jpg";
import secondimg from "../assets/ecommerce-consulting/images/gridimages/business-people-working-with-ipad-side-view.jpg";
import thirdimg from "../assets/ecommerce-consulting/images/gridimages/contract-fair-agreement-webpage-interface.jpg";
import fourthimg from "../assets/ecommerce-consulting/images/gridimages/social-media-marketing-concept-marketing-with-applications.jpg";

// import common images here
import contactimg from "../assets/common-images/contactimg.png";
import strategyimg from "../assets/common-images/strategy.png";

export const heroSectionData = {
  heroDesktop: heroimg,
  heroMobile: heromobile,
  heading: "eCommerce Consulting Services",
  desc: `Navigating eCommerce complexities? ValueCoders’ eCommerce consulting services help you make informed decisions and maximize ROI. Our experienced team offers customized solutions using Magento, WooCommerce, and Shopify. Streamline your eCommerce operations and achieve your goals.`,
  btn: "Contact Us",
};

export const servicesData = {
  heading: "Our eCommerce Consulting Services",
  desc: `
We believe everyone who uses an online shopping website deserves high-quality customer service and a seamless shopping experience. Our dedicated eCommerce outsourcing consulting team works with you to create an exclusive eCommerce solution.
`,
  img: strategyimg,
  list: [
    {
      id: 1,
      icon: firsticon,
      heading: "eCommerce Strategy Consulting Service",
      desc: `We review your business IT strategy, existing resources, technologies, and other key aspects for the digital transformation of your business. Our service areas include assessing current business processes, assigning maturity ratings of apps, and generating process analysis reports.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "eCommerce Mobile/Web App Design",
      desc: `We help you build the best application for your business needs, whether it's a startup or an established company. Our service areas include custom eCommerce storefronts, POS systems, and product information management systems.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "eCommerce App Development Consulting",
      desc: `We provide SMEs, startups, agencies, and enterprises with tailored eCommerce applications that are flexible and scalable for their unique needs. Our service areas include automating and facilitating daily business workflows, improving employees’ productivity, and increasing customers’ loyalty.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "QA & Testing Consulting",
      desc: `We perform a variety of QA testing techniques for identifying potential security threat areas and recommend effective remedial measures accordingly. Our service areas include wireless network analysis & assessment, upgrading existing security applications, and project security analysis and consulting.`,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "eCommerce Digitalization Consulting",
      desc: `Our digital transformation strategies help businesses improve efficiency by prioritizing, planning, implementing, and guiding digital initiatives. Our service areas include customer experience digitalization, remote working & team collaboration, and e-procurement & multi-channel order management.`,
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
  desc: `Here are a few common questions our clients ask:`,
  faqdata: [
    {
      id: 1,
      question:
        "What sets ValueCoders' eCommerce consulting services apart from others in the market?",
      answer:
        " ValueCoders’ eCommerce consulting services set themselves apart by combining their experience and expertise, offering a customized approach tailored to each client’s needs, providing comprehensive services covering various areas of eCommerce, employing data-driven decision making, focusing on long-term success, adopting a client-centric approach, and showcasing a proven track record of delivering successful outcomes.",
    },

    {
      id: 2,
      question:
        "How can ValueCoders help me choose the right eCommerce platform for my business?",
      answer:
        "  ValueCoders has a team of experienced consultants who can assess your business requirements, budget, scalability needs, and other factors to recommend the most suitable eCommerce platform. They consider factors like ease of use, customization options, integrations, security, and scalability to ensure you make an informed decision that aligns with your business goals.",
    },
    {
      id: 3,
      question:
        " How can I get started with ValueCoders' eCommerce consulting service?",
      answer: `
      To get started with ValueCoders’ eCommerce consulting service, you can contact their team through their website or contact them directly. They will schedule an initial consultation to understand your business goals, challenges, and requirements. Based on this assessment, they will propose a tailored consulting plan to address your specific needs and help you achieve eCommerce success.
        `,
    },
    {
      id: 4,
      question:
        "What industries does ValueCoders specialize in for eCommerce consulting?",
      answer: `ValueCoders has experience working across various industries, including but not limited to retail, fashion, electronics, consumer goods, healthcare, and B2B eCommerce. Their consultants can adapt their expertise to cater to your industry’s specific requirements and dynamics, ensuring tailored solutions that drive results.`,
    },
    {
      id: 5,
      question:
        " Can ValueCoders assist with integrating third-party tools and services with my eCommerce platform?",
      answer: `Absolutely! ValueCoders’ consultants have experience in integrating various third-party tools and services with eCommerce platforms. Whether it’s payment gateways, CRM systems, inventory management solutions, or marketing automation tools, they can guide you through the integration process and help you select the most suitable options for your business needs.`,
    },
  ],
};

export const domainExpertiseData = {
  heading: "eCommerce Consulting",
  desc: `We review your business IT strategy, existing resources, technologies, and other key aspects for the digital transformation of your business. Our service areas include assessing current business processes, assigning maturity ratings of apps, and generating process analysis reports.`,
  points: [
    "Assess current business processes",
    "Assign maturity ratings of apps",
    "Generate process analysis reports",
  ],
  images: [firstimg, secondimg, thirdimg, fourthimg],
};
