import { motion } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 md:py-28 bg-foreground text-primary-foreground" ref={ref}>
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary-foreground/60 mb-4">
            Have an Idea?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Let's Make Something
            <br />
            Amazing Together.
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Type your Message here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all"
            />
            <button className="px-6 py-3 rounded-full bg-coral text-accent-foreground text-sm font-medium hover:bg-coral-light transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
              Get A Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
