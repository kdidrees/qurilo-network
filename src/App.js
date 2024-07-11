import "./App.css";
import NetworkHero from "./components/NetworkHero";
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
    </>
  );
}

export default App;
