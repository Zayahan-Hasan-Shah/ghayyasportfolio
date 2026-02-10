import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSections";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
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
