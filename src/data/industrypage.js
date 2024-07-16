// import images here
import fintechimg from "../assets/industry-page/images/fintech_banking.png";
import retailimg from "../assets/industry-page/images/retail.png";
import nonprofitimg from "../assets/industry-page/images/non_profit_govt_education.png";
import pharmaimg from "../assets/industry-page/images/pharma_health.png";
import manufacturingimg from "../assets/industry-page/images/manufacturing_automation.png";
import travelimg from "../assets/industry-page/images/travel_logistics.png";

export const industryPageData = [
  {
    id: 1,
    img: fintechimg,
    heading: `Fintech, Banking & Financial Services`,
    desc: `We drive intelligent banking through secure, instant transactions and seamless omnichannel experiences. Our innovations modernize the banking industry with disruptive tech.`,
    data: [
      "Custom banking software",
      "Peer-to-Peer (P2P) lending and crowdfunding software",
      "Compliance, risk management, and fraud detection systems",
      "Investment portfolio management software",
      "Loan management & trading platform development",
      "Branch transformation and phygital banking",
    ],
  },
  {
    id: 2,
    img: retailimg,
    heading: `Retail & E-commerce`,
    desc: `Elevating customer satisfaction with digital intelligence in e-commerce. As a dynamic e-commerce developer, we aid retail and e-commerce in diverse growth strategies. `,
    data: [
      "E-Commerce app development Solutions",
      "E-Commerce Recommendation System",
      "Multi-Vendor Marketplace Software",
      "Custom Marketplace App Development",
      "Store Management Solutions",
      "Custom E-Commerce Storefront Design",
    ],
  },

  {
    id: 3,
    img: nonprofitimg,

    heading: ` Non Profit & Education`,
    desc: `At Kellton, we specialize in tailor-made eLearning and educational software solutions. Our expertise assists Non-profits and Government institutions in serving global communities with essential software solutions.  `,
    data: [
      "Learning Management Systems (LMS)",
      "Student information management onboarding software",
      "Online proctoring solutions",
      "Virtual classroom, interactive learning and gamification services",
      "Training software development",
      "Analytics and dashboarding",
    ],
  },
  {
    id: 4,
    img: pharmaimg,

    heading: `Pharma & Healthcare`,
    desc: `Kellton excels in healthcare, driving patient acquisition-retention through comprehensive solutions. We transition organizations into a connected, remote service ecosystem, delivering personalized care at the speed of change.  `,
    data: [
      "Hospital information system and management",
      "Telemedicine software development and Pharmacy management",
      "Patient portal development and mHealth solutions",
      "Healthcare IoT solutions and integration services",
      "Healthcare information exchange",
      "SAP services for healthcare",
    ],
  },
  {
    id: 5,
    img: manufacturingimg,

    heading: `Manufacturing, Automotive & Chemicals`,
    desc: `Meeting customer demands while maintaining streamlined processes is no small feat. From organizational silos to regulatory compliance, the list is extensive, but the solutions begin here. `,
    data: [
      "Materials management, Production planning and control",
      "Sales, distribution, logistics, and quality management ",
      "Accounting, controlling, forms and reporting",
      "Bulk chemical planning and processing",
      "Bulk storage and warehouse management",
      "Customer make-to-order fulfilment",
    ],
  },
  {
    id: 6,
    img: travelimg,

    heading: `Travel, Logistics & Hospitality`,
    desc: `Our solutions empower travel companies to scale limitlessly, revamp services, and realize their customer experience vision, from touchpoints to journeys.`,
    data: [
      "Online booking engine and Reservation management",
      "Travel app development services ",
      "B2B & B2C Travel portal development",
      "Travel agency management system",
      "Flight and hotel booking software",
      "Travel CRM Software",
    ],
  },
];
