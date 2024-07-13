import "./App.css";
import NetworkHero from "./components/NetworkHero";
import DevelopmentServices from "./container/DevelopmentServices";
import TechnologiesSection from "./container/TechnologiesSection";
import Faq from "./container/Faq";
import Industries from "./components/industries/Industries";
import Testimaonial from "./components/testimonials/Testimonial";
import Blogs from "./container/BlogSection";
import DevelomentProcess from "./container/DevelopmentProcesSection";
import ContactSection from "./components/contact/Contact"
import Subdev from "./components/subdev/Subdev";
import WebdevSection from "./container/WebdevSection";
import DomainExpertise from "./components/domainexpertise/DomainExpertise";
import Solution from "./components/solutions/Solution";

function App() {
  return (
    <>
      <NetworkHero /> 
      {/* <DevelopmentServices />
      <ContactSection />
      <DevelomentProcess/>
      <TechnologiesSection/>
      <Industries/>
      <Blogs/>
      <Faq/>
      <Testimaonial/> */}


      <WebdevSection/>
     <Solution/>
    </>
  );
}

export default App;
