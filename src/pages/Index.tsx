import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import AboutSection from "../components/AboutSection";
import InfluencerSection from "../components/InfluencerSection";
import PortfolioSection from "../components/PortfolioSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSections";
import BrandSection from "../components/BrandSection";
import MemoriesSection from "../components/MemoriesSection";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <InfluencerSection />
        <MemoriesSection />
        <BrandSection />
        <PortfolioSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        {/* <BlogSection /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
