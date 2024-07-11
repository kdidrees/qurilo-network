import "./App.css";
import Features from "./components/Features";
import Implementation from "./components/Implementation";
import NetworkHero from "./components/NetworkHero";
import LogoSlider from "./components/LogoSlider";
import Whychoose from "./components/Whychoose";
import Appdevcard from "./components/Card";
import DevelopmentServices from "./container/DevelopmentServices";
import ContactSection from "./components/ContactSection";
import CardHover from "./components/cards/CardHover";

function App() {
  return (
    <>
      <NetworkHero />
      <DevelopmentServices/>
      <ContactSection/> 
     <div className="py-24">

     <CardHover/>
     </div>
      {/* <Implementation />
      <Features />
      <LogoSlider />
      <Whychoose/> */}
    </>
  );
}

export default App;
