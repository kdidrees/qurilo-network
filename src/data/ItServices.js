// import images here
import cloudimg from "../assets/it-services/images/cloud_it_services.png";
import networkimg from "../assets/it-services/images/network_management.png";
import serverimg from "../assets/it-services/images/server_management.png";
import cyberimg from "../assets/it-services/images/cyber_security.png";
import voipimg from "../assets/it-services/images/voip_communication.png";
import databackupimg from "../assets/it-services/images/data_backup_disaster_recovery.png";
import helpdeskimg from "../assets/it-services/images/helpdesk_technical_support.png";
import infrastructure_storageimg from "../assets/it-services/images/infrastructure_storage_services.png";
import identityimg from "../assets/it-services/images/identity_access_management.png";
import itconsultingimg from "../assets/it-services/images/it_consulting_strategy.png";

// import hero section images here
import heroimg from "../assets/it-services/images/heroimg.png";
import heromobile from "../assets/it-services/images/heromobile.png";

export const heroSectionData = {
  heroDesktop: heroimg,
  heroMobile: heromobile,
  heading: "IT Services",
  desc: `Providing comprehensive IT solutions to drive business success. Our expertise spans across cloud services, network management, cybersecurity, and more.`,
};

export const ItServicesPageData = {
  heading: "IT Solutions we provide",
  desc: `
Explore our diverse IT solutions tailored to optimize operations, enhance efficiency, and drive innovation. From ERP and SCM to CRM and analytics, our services are designed to meet your unique business needs and keep you ahead of the curve.`,
  list: [
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
        "DevOps and continuous (CI/CD) services",
      ],
    },
    {
      id: 2,
      img: networkimg,
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
      img: serverimg,
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
      img: cyberimg,
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
      img: voipimg,
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
      img: databackupimg,

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
    {
      id: 7,
      img: helpdeskimg,

      heading: "Helpdesk and Technical Support",
      desc: "Providing expert assistance to resolve technical issues efficiently. Our helpdesk and support services ensure minimal downtime and optimal performance.",
      data: [
        "24/7 technical support",
        "Remote troubleshooting and diagnostics",
        "Helpdesk software solutions",
        "Incident management and resolution",
        "User training and support",
        "Service level agreement (SLA) management",
      ],
    },
    {
      id: 8,
      img: infrastructure_storageimg,
      heading: "Infrastructure and Storage Services",
      desc: "Designing and managing robust infrastructure solutions for efficient data storage and access. Our services ensure high availability, security, and scalability.",
      data: [
        "Cloud infrastructure setup and management",
        "On-premises server installation and maintenance",
        "Data storage solutions and management",
        "Backup and disaster recovery services",
        "Virtualization and server consolidation",
        "Network infrastructure design and support",
      ],
    },
    {
      id: 9,
      img: identityimg,

      heading: "Identity & Access Management",
      desc: "Implementing comprehensive identity and access management solutions to safeguard sensitive information and streamline user access controls.",
      data: [
        "User identity and access provisioning",
        "Single sign-on (SSO) solutions",
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Identity governance and administration",
        "Compliance and audit reporting",
      ],
    },
    {
      id: 7,
      img: itconsultingimg,

      heading: "IT Consulting & Strategy",
      desc: "Offering expert advice to optimize IT investments and align technology with business goals. Our consulting services drive strategic IT initiatives and transformation.",
      data: [
        "IT strategy development and planning",
        "Technology assessments and audits",
        "Digital transformation consulting",
        "IT project management",
        "Cybersecurity assessments",
        "Cloud strategy and migration",
      ],
    },
  ],
};
