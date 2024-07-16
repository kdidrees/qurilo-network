
// import common images here 
import contactimg from "../assets/common-images/contactimg.png"
import strategyimg from "../assets/common-images/strategy.png"

// import hero images here 
import heroimg from "../assets/api-development/images/API_Development_Services.png"
import heromobile from "../assets/api-development/images/api_development_services_mobile.jpg"

// import services icons here
import firsticon from "../assets/api-development/icons/consulting.png"
import secondicon from "../assets/api-development/icons/api_management.png"
import thirdicon from "../assets/api-development/icons/api_implementation.png"
import fourthicon from "../assets/api-development/icons/microservice_development.png"
import fifthicon from "../assets/api-development/icons/Legacy_API_Modernization_Services.png"

// grid images here
import firstimg from "../assets/api-development/images/gridimages/GraphQL_API_Development.png"
import secondimg from "../assets/api-development/images/gridimages/Microservices_Architecture.png"
import thirdimg from "../assets/api-development/images/gridimages/Rate_Limiting_Throttling.png"
import fourthimg from "../assets/api-development/images/gridimages/Real-time_Data_Processing.png"



export const heroSectionData = {
  heroDesktop: heroimg,
  heroMobile: heromobile,
  heading: "FrontAPI Development Services",
  desc: `Looking to seamlessly exchange and integrate data across your apps or third-party applications? We offer custom API development services. We create personalized APIs that enhance user experiences and streamline processes. With a comprehensive range of services, including API design, documentation, testing, and management, we help clients achieve their business goals efficiently.`,
  btn: "Contact Us",
};

export const ApiServicesData = {
  heading: "API Development Services",
  desc: `We provide customizable API development services. Whether you require a straightforward application integration with data or a more intricate solution, our services meet your needs.`,
  img: strategyimg, 
  cardData: [
    {
      id: 1,
      icon: firsticon,
      heading: "API Consulting",
      desc: `We can help you successfully navigate the complex world of APIs to create an effective plan and maximize revenue.`,
    },
    {
      id: 2,
      icon: secondicon,
      heading: "API Management",
      desc: `Our experts cover the management of APIs, including designing, publishing, securing, monitoring, and analyzing them.`,
    },
    {
      id: 3,
      icon: thirdicon,
      heading: "API Implementation & Support",
      desc: `We ensure a smooth implementation and integration of API. Once integrated, we provide ongoing support to ensure your API continues functioning as expected.`,
    },
    {
      id: 4,
      icon: fourthicon,
      heading: "Microservice Development",
      desc: `Experts cover the development of microservices architecture to create scalable and flexible APIs that can handle complex processes with minimal downtime.`,
    },
    {
      id: 5,
      icon: fifthicon,
      heading: "Legacy API Modernization Services",
      desc: `We help improve process flexibility with cross-platform collaboration with small & isolated services around any specific domain. `,
    },
  ],
};

export const ApiContactSectionData = {
  heading: "APIs that Amplify!",
  desc: `Boost Your Business Capabilities with Custom APIs.`,
  button: "Contact Us",
  img: contactimg,
};



export const ApitechnologiesData = {
  heading: "Our Comprehensive API Technology Stack",
  desc: `Discover the full range of technologies we use for API projects.`,
  cardData: [
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
        "FastAPI",
        "Laravel",
      ],
    },
    {
      id: 3,
      heading: "API Design & Documentation",
      techstacks: [
        "Swagger",
        "Postman",
        "OpenAPI",
        "API Blueprint",
        "RAML",
        "GraphQL",
        "gRPC",
        "JSON:API",
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
        "API Key",
        "OpenID Connect",
        "SAML",
        "TLS/SSL",
        "HMAC",
        "CORS",
      ],
    },
    {
      id: 6,
      heading: "API Management",
      techstacks: [
        "Kong",
        "Apigee",
        "AWS API Gateway",
        "Azure API Management",
        "Postman",
        "Mulesoft",
        "Tyk",
        "WSO2",
      ],
    },
  ],
};

export const ApifaqData = {
  heading: "FAQs",
  desc: ``, // desc is empty here
  faqdata: [
    {
      id: 1,
      question:
        "Why should I choose Qurilo for my API development or API integration requirement?",
      answer:
        " Qurilo may be suitable for your API development or integration needs due to their expertise in the field, proven track record, experienced team, and ability to deliver reliable and scalable solutions.",
    },

    {
      id: 2,
      question: "How much do you charge to develop a custom API?",
      answer:
        " The cost of developing a custom API can vary depending on factors such as the complexity of the API, desired features, integration requirements, and development time. It is best to contact Qurilo directly to discuss your specific project requirements and obtain an accurate cost estimate.",
    },
    {
      id: 3,
      question:" What technologies do you use for API development?",
      answer: `
          Qurilo may use a variety of technologies for API development, including popular programming languages like Java, Python, Node.js, frameworks like Spring Boot or Express.js, and industry-standard tools and libraries that best suit your project requirements.
            `,
    },
    {
      id: 4,
      question:
        "How do you ensure data integrity and consistency in transactional APIs?",
      answer: `Qurilo may employ techniques such as data validation, proper authentication and authorization mechanisms, encryption, error handling, and employing transactional database operations to ensure data integrity and consistency in transactional APIs.`,
    },
    {
      id: 5,
      question:
        "How do you handle transactional errors and exceptions in API development?",
      answer: ` Qurilo may implement robust error handling mechanisms, including appropriate HTTP status codes, error messages, and error logging. They may also use techniques like retries, circuit breakers, or compensating transactions to effectively handle transactional errors and exceptions.`,
    },
    {
      id: 6,
      question:
        "How do you optimize performance and scalability in transactional API systems?",
      answer: ` Qurilo may optimize performance and scalability in transactional API systems by employing techniques such as caching, load balancing, horizontal scaling, asynchronous processing, database optimization, and performance testing to ensure the system can handle increasing loads efficiently and reliably.`,
    },
  ],
};

export const ApiDomainExpertiseData = {
    heading: "Our API Development Expertise",
    desc: `We specialize in building robust, scalable, and secure API systems tailored to meet the needs of diverse industries. Our expertise ensures seamless integration, efficient data handling, and reliable performance for your applications.`,
    data: [
      "RESTful API Design",
      "GraphQL API Development",
      "Microservices Architecture",
      "Real-time Data Processing",
      "API Security Best Practices",
      "Rate Limiting & Throttling",
      "API Versioning",
      "API Documentation",
    ],
    images: [firstimg,secondimg,thirdimg,fourthimg],
  };
  
