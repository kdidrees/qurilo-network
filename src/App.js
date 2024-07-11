import "./App.css";
import NetworkHero from "./components/NetworkHero";
import DevelopmentServices from "./container/DevelopmentServices";
import ContactSection from "./components/ContactSection";
import CardHover from "./components/cards/CardHover";
import BusinessTypes from "./container/BusinessTypes";

function App() {
  return (
    <>
      <NetworkHero />
      <DevelopmentServices/>
      <ContactSection/> 
      <BusinessTypes/>
    </>
  );
}

export default App;
