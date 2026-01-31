import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
