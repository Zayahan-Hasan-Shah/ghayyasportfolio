import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Handshake, Sparkles } from "lucide-react";

import influ1 from "../assets/influ_1.jpg";
import influ2 from "../assets/influ_2.jpg";
import influ3 from "../assets/influ_3.jpg";
import influ4 from "../assets/influ_4.jpg";

const influencerImages = [
  { src: influ1, alt: "Influencer collaboration 1" },
  { src: influ2, alt: "Influencer collaboration 2" },
  { src: influ3, alt: "Influencer collaboration 3" },
  { src: influ4, alt: "Influencer collaboration 4" },
];

const InfluencerSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="influencer" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2">
              <Handshake size={16} />
              <span className="text-xs font-heading tracking-[0.22em] uppercase text-muted-foreground">
                Collaborations
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Influencer
              <br />
              Partnerships
            </h2>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              I collaborate with influencers and brands to craft content that feels real, looks premium, and performs.
              From concept to shoot direction and final edits, I focus on storytelling that makes audiences stop and
              engage.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-background/70 px-4 py-4">
                <p className="text-xs text-muted-foreground">Deliverables</p>
                <p className="mt-1 font-heading font-semibold text-foreground">Reels • Shorts • Posts</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/70 px-4 py-4">
                <p className="text-xs text-muted-foreground">Focus</p>
                <p className="mt-1 font-heading font-semibold text-foreground">Authentic + High Impact</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/70 px-4 py-4">
                <p className="text-xs text-muted-foreground">Workflow</p>
                <p className="mt-1 font-heading font-semibold text-foreground">Strategy → Shoot → Edit</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/70 px-4 py-4">
                <p className="text-xs text-muted-foreground">Turnaround</p>
                <p className="mt-1 font-heading font-semibold text-foreground">Fast + Consistent</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -top-6 -left-6 w-28 h-28 rounded-full bg-coral/15 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-secondary/25 blur-2xl" />

              <div className="grid grid-cols-12 gap-4">
                {influencerImages.map((img, i) => {
                  const span =
                    i === 0
                      ? "col-span-7 row-span-2"
                      : i === 1
                        ? "col-span-5 row-span-1"
                        : i === 2
                          ? "col-span-5 row-span-1"
                          : "col-span-7 row-span-2";

                  return (
                    <motion.div
                      key={img.alt}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      className={`${span} group relative overflow-hidden rounded-3xl border border-border bg-background shadow-soft ${
                        i === 0 || i === 3
                          ? "min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]"
                          : "min-h-[150px] sm:min-h-[156px]"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-background/90 backdrop-blur px-4 py-3 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-coral" />
                  <p className="text-xs text-muted-foreground">Collaboration-ready for</p>
                </div>
                <p className="mt-1 font-heading font-semibold text-foreground">Events • Brands • Creators</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
