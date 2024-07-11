import "./App.css";
import NetworkHero from "./components/NetworkHero";
import DevelopmentServices from "./container/DevelopmentServices";
import ContactSection from "./components/ContactSection";
import CardHover from "./components/cards/CardHover";
import DevelomentProcess from "./components/process/DevelopmentProcess";
import TechnologiesSection from "./container/TechnologiesSection";

function App() {
  return (
    <>
      <NetworkHero />
      <DevelopmentServices />
      <ContactSection />
      <DevelomentProcess/>
      <TechnologiesSection/>
    </>
  );
}

export default App;
