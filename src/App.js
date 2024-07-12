import "./App.css";
import NetworkHero from "./components/NetworkHero";
import DevelopmentServices from "./container/DevelopmentServices";
import ContactSection from "./components/ContactSection";
import DevelomentProcess from "./components/process/DevelopmentProcess";
import TechnologiesSection from "./container/TechnologiesSection";
import Faq from "./container/Faq";
import Industries from "./components/industries/Industries";
import Blogs from "./components/blog/Blogs";
import Testimaonial from "./components/testimonials/Testimonial";
function App() {
  return (
    <>
      <NetworkHero /> 
      <DevelopmentServices />
      <ContactSection />
      <DevelomentProcess/>
      <TechnologiesSection/>
      <Industries/>
      <Blogs/>
      <Faq/>
      <Testimaonial/>
    </>
  );
}

export default App;
