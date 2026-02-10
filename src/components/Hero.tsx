import { motion } from "framer-motion";
import heroPortrait from "../assets/hero-portrait.jpg";
import gq from "../assets/GQ - AI.png"
import zhs from "../assets/Zayahan - AI.png"
import test1 from "../assets/testimonial-1.jpg"
import test2 from "../assets/testimonial-2.jpg"

const avatars = [zhs, heroPortrait, test1, test2];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-8"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex flex-col items-center justify-center min-h-[75vh]">

          {/* "HELLO I'M ALBERT WILSON" pill — far left, vertically centered-upper */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-0 xl:-left-[20%] -top-[8%] lg:top-[15%] z-20"
          >
            <div className="relative cream-dark border border-border rounded-[40px] px-6 py-6 md:px-14 md:py-10 lg:px-16 lg:py-12 overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <svg width="100%" height="100%" className="text-sand">
                  <pattern id="topo-left" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#topo-left)" />
                </svg>
              </div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-tight text-foreground uppercase tracking-wide">
                  Hello I'm
                  <br />
                  Ghayyas Qureshi
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Center portrait with arch shape and thin border ring */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[400px] lg:h-[520px] rounded-[50%_50%_45%_45%/40%_40%_55%_55%] border border-border/60 flex items-end justify-center p-2">
              <div className="w-full h-full rounded-[50%_50%_45%_45%/38%_38%_55%_55%] overflow-hidden bg-muted">
                <img
                  src={gq}
                  alt="Albert Wilson - Creative UX/UI Designer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* "10 Years Of Experience" badge — top right near portrait */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute right-[28%] lg:right-[30%] xl:right-[32%] top-[20%] -right-[4%] lg:top-[8%] z-20"
          >
            <div className="bg-background border border-border rounded-full px-5 py-3 md:px-6 md:py-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground text-primary-foreground flex items-center justify-center">
                <span className="text-lg md:text-xl font-heading font-bold">10</span>
              </div>
              <div className="text-xs md:text-sm leading-tight">
                <span className="font-semibold text-foreground">Years Of</span>
                <br />
                <span className="text-muted-foreground">Experience</span>
              </div>
            </div>
          </motion.div>

          {/* "A CREATIVE UX/UI DESIGNER" pill — far right, lower */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute right-0 xl:-right-[20%] bottom-[10%] lg:bottom-[14%] z-20"
          >
            <div className="relative bg-cream-dark border border-border rounded-[40px] px-10 py-8 md:px-14 md:py-10 lg:px-16 lg:py-12 overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <svg width="100%" height="100%" className="text-sand">
                  <pattern id="topo-right" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#topo-right)" />
                </svg>
              </div>
              <h2 className="relative z-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-tight text-foreground uppercase tracking-wide">
                A Creative
                <br />
                UX/UI Designer
              </h2>
            </div>
          </motion.div>

          {/* "325+ Happy Clients" badge — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute left-[8%] lg:left-[12%] -bottom-[2%] -left-[2%] lg:bottom-[16%] z-20"
          >
            <div className="bg-background border border-border rounded-full px-5 py-3 flex items-center gap-3 shadow-sm">
              <div>
                <span className="text-xl font-heading font-bold text-foreground">325+</span>
                <p className="text-xs text-muted-foreground">Happy Clients</p>
              </div>
              <div className="flex -space-x-2">
                {avatars.map((item, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-cream-dark overflow-hidden"
                  >
                    <img src={item} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative sparkle elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-[2%] bottom-[35%] hidden lg:block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-coral">
              <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute right-[3%] top-[5%] hidden lg:block"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-coral-light">
              <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute left-[1%] bottom-[55%] hidden lg:block"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-coral/60">
              <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Small spiral decoration */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute right-[30%] top-[2%] hidden lg:block text-muted-foreground opacity-40"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6 2 3 5 3 9s3 7 7 7c3 0 5-2 5-5s-2-4-4-4c-1.5 0-3 1-3 3s1 2.5 2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Snowflake decoration */}
          <div className="absolute left-[38%] top-[52%] text-muted-foreground opacity-30 hidden lg:block">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="2" r="1.2" />
              <circle cx="8" cy="14" r="1.2" />
              <circle cx="2" cy="8" r="1.2" />
              <circle cx="14" cy="8" r="1.2" />
              <circle cx="4" cy="4" r="1.2" />
              <circle cx="12" cy="12" r="1.2" />
              <circle cx="12" cy="4" r="1.2" />
              <circle cx="4" cy="12" r="1.2" />
            </svg>
          </div>

          {/* Wavy line bottom center */}
          <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-muted-foreground opacity-40 hidden lg:block">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M2 2c4 0 4 8 8 8s4-8 8-8 4 8 8 8 4-8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
