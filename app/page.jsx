import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CosmixProjects from "../components/CosmixProjects";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Proof from "../components/Proof";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import BackboneStats from "../components/BackboneStats";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      
      <CosmixProjects />
      <BackboneStats />
      <Pricing />
      <Process />
      <Proof />

      

      <ContactCTA />
      <Footer />
    </>
  );
}