import "./App.css";
import NetworkHero from "./components/NetworkHero";
import DevelopmentServices from "./container/DevelopmentServices";
import ContactSection from "./components/ContactSection";
import CardHover from "./components/cards/CardHover";
import DevelomentProcess from "./components/process/DevelopmentProcess";
import TechnologiesSection from "./container/TechnologiesSection";
import Faq from "./container/Faq";

function App() {
  return (
    <>
      <NetworkHero /> 
      <DevelopmentServices />
      <ContactSection />
      <DevelomentProcess/>
      <TechnologiesSection/>
      <Faq/>
    </>
  );
}

export default App;
