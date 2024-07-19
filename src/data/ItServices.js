// import images here
import cloudimg from "../assets/it-services/images/cloud_computing.png";
import retailimg from "../assets/industry-page/images/retail.png";
import nonprofitimg from "../assets/industry-page/images/non_profit_govt_education.png";
import pharmaimg from "../assets/industry-page/images/pharma_health.png";
import manufacturingimg from "../assets/industry-page/images/manufacturing_automation.png";
import travelimg from "../assets/industry-page/images/travel_logistics.png";

// import hero section images here
import industryhero from "../assets/industry-page/images/industryhero.png";
import industryheromobile from "../assets/industry-page/images/heromobile.png";

export const heroSectionData = {
  heroDesktop: industryhero,
  heroMobile: industryheromobile,
  heading: "Industries",
  desc: `Each industry has its quirks. Understanding their unique challenges is key to business success`,
};

export const industryPageData = [
  {
    id: 1,
    img: cloudimg,
    heading: "Cloud IT Services",
    desc: "We transform businesses with agile, scalable, and secure cloud solutions. Our expertise in cloud technologies ensures seamless integration and optimal performance.",
    data: [
      "Cloud infrastructure setup and management",
      "Cloud migration and deployment services",
      "Cloud security and compliance solutions",
      "Disaster recovery and backup solutions",
      "Cloud-native application development",
      "DevOps and continuous integration/continuous deployment (CI/CD) services",
    ],
  },
  {
    id: 2,
    img: cloudimg,
    heading: "Network Management Services",
    desc: "Optimizing network performance and security with cutting-edge solutions. Our network management services ensure robust, reliable, and scalable network infrastructure.",
    data: [
      "Network design and implementation",
      "Network monitoring and performance optimization",
      "Network security management",
      "Wireless network solutions",
      "VPN and remote access solutions",
      "Network troubleshooting and support",
    ],
  },

  {
    id: 3,
    img: cloudimg,
    heading: "Server Management Services",
    desc: "Enhancing server performance and reliability with comprehensive management solutions. Our server management services ensure secure, optimized, and scalable server infrastructure.",
    data: [
      "Server setup and configuration",
      "Server monitoring and performance tuning",
      "Security updates and patch management",
      "Backup and disaster recovery solutions",
      "Virtualization and cloud server management",
      "24/7 server support and troubleshooting",
    ],
  },
  {
    id: 4,
    img: cloudimg,
    heading: "Cyber Security Services",
    desc: "Kellton excels in cybersecurity, protecting businesses with comprehensive solutions. We ensure a secure, resilient digital ecosystem, safeguarding data and assets from evolving threats.",
    data: [
      "Network and endpoint security",
      "Threat intelligence and incident response",
      "Security risk assessment and compliance",
      "Data encryption and protection",
      "Identity and access management",
      "Security operations center (SOC) services",
    ],
  },
  {
    id: 5,
    img: cloudimg,
    heading: "VoIP and Connection Services",
    desc: "Delivering seamless communication solutions to enhance business connectivity. Our VoIP and connection services ensure reliable, high-quality voice and data transmission.",
    data: [
      "VoIP system setup and configuration",
      "SIP trunking and call routing",
      "Unified communication solutions",
      "Hosted PBX services",
      "VoIP security and encryption",
      "Network infrastructure for VoIP",
    ],
  },
  {
    id: 6,
    img: cloudimg,

    heading: "Data Backup and Disaster Recovery",
    desc: "Ensuring business continuity with robust data backup and disaster recovery solutions. Our services protect critical data and minimize downtime during unforeseen events.",
    data: [
      "Comprehensive data backup solutions",
      "Disaster recovery planning and implementation",
      "Cloud-based backup services",
      "Data replication and mirroring",
      "Recovery testing and validation",
      "Business continuity management",
    ],
  },
];
