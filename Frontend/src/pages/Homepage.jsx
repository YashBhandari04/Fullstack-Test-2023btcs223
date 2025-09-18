import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


const HomePage = () => {
  return (
    <div className="font-sans">
      <Header/>
      <Hero/>
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default HomePage;
