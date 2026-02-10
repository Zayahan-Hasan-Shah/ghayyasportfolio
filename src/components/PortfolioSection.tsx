import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import portfolio1 from "..//assets/portfolio-1.jpg";
// import portfolio2 from "..//assets/portfolio-2.jpg";
// import portfolio3 from "..//assets/portfolio-3.jpg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg.jpeg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const projects = [
  {
    image: img1,
    category: "Architecture",
    title: "Architecture & Interior Website Design",
    desc: "Complete website redesign for a leading architecture firm. Focus on visual storytelling and immersive user experience.",
  },
  {
    image: img2,
    category: "Mobile App",
    title: "Food Delivery Mobile Application",
    desc: "End-to-end mobile app design for a food delivery startup, featuring intuitive ordering flow and real-time tracking.",
  },
  {
    image: img3,
    category: "Mobile App",
    title: "Food Delivery Mobile Application",
    desc: "End-to-end mobile app design for a food delivery startup, featuring intuitive ordering flow and real-time tracking.",
  },
  {
    image: img4,
    category: "Mobile App",
    title: "Food Delivery Mobile Application",
    desc: "End-to-end mobile app design for a food delivery startup, featuring intuitive ordering flow and real-time tracking.",
  },
  {
    image: img5,
    category: "E-Commerce",
    title: "Fashion E-Commerce Platform",
    desc: "Modern e-commerce platform design with focus on product discovery, personalization, and seamless checkout.",
  },
  {
    image: img6,
    category: "E-Commerce",
    title: "Fashion E-Commerce Platform",
    desc: "Modern e-commerce platform design with focus on product discovery, personalization, and seamless checkout.",
  },
];

const PortfolioSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent((p) => (p + 1) % projects.length);
  const prev = () => setCurrent((p) => (p - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            My Latest Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Explore my recent projects showcasing creativity, innovation and results-driven design solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-background rounded-3xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                <div className="aspect-[9/8] overflow-hidden">
                  <img
                    src={projects[current].image}
                    alt={projects[current].title}
                    className="w-full h-full object-fir"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-xs font-medium text-foreground mb-4 w-fit">
                    {projects[current].category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
                    {projects[current].title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {projects[current].desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-coral transition-colors group"
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-foreground w-6" : "bg-border"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
