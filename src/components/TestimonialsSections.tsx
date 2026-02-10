import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonial1 from "..//assets/testimonial-1.jpg";
import testimonial2 from "..//assets/testimonial-2.jpg";

const testimonials = [
  {
    name: "Harry Abraham",
    role: "CEO, Tech Company",
    image: testimonial1,
    text: "Albert is an exceptional designer. His attention to detail and creative problem-solving transformed our brand identity completely. His work exceeded all our expectations and the results speak for themselves.",
  },
  {
    name: "Benjamin Clarke",
    role: "Marketing Director",
    image: testimonial2,
    text: "Working with Albert was a game-changer for our product. His intuitive approach to UX design helped us increase user engagement by 40%. Highly recommended for any creative project.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              What My Customers
              <br />
              Says About Me
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              I take pride in delivering exceptional design solutions that exceed client expectations. 
              Here's what some of my clients have to say about working with me.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center mt-6 px-6 py-2.5 rounded-full border border-coral text-coral text-sm font-medium hover:bg-coral hover:text-accent-foreground transition-all duration-300"
            >
              Become Our Customer
            </a>
          </motion.div>

          {/* Right - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border relative"
              >
                <Quote className="text-secondary w-10 h-10 mb-4" strokeWidth={1} />
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonials[current].text}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-3 mt-6">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
