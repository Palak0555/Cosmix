import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CompareSlider from "../components/CompareSlider";
import ProblemSolution from "../components/ProblemSolution";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Proof from "../components/Proof";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CompareSlider />
      <ProblemSolution />
      <Pricing />
      <Process />
      <Proof />
      <ContactCTA />
      <Footer />
    </>
  );
}
