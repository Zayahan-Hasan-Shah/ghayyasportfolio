import { motion } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { Camera, Video, Mic, Users, Lightbulb, Settings } from "lucide-react";

// Professional media professional image URL
const professionalPhoto = "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const leftservices = [
  {
    icon: Video,
    title: "Production & Creative",
    desc: "Photography, Videography & Cinematography\nLighting setups (studio & natural)\nColor grading & correction\nSound design & audio syncing\nScriptwriting & storytelling\nGraphic Designing\nCreative direction",
  },
  {
    icon: Users,
    title: "Marketing & Campaigns",
    desc: "Campaign Designing & Execution\nEvent Management\nInfluencer Marketing\nDigital Marketing Strategy\Social Media Content Creation (Instagram, YouTube, TikTok)",
  },
  {
    icon: Settings,
    title: "Technical Tools",
    desc: "Adobe Premiere Pro\nAdobe Photoshop & Illustrator\nLightroom CC\nCapCut\nSnapseed\nCanva",
  },
];

const rightServices = [
  {
    icon: Camera,
    title: "Equipment Handling",
    desc: "Sony A7III, A6400, A6300\nCanon M50, Canon 6D",
  },
  {
    icon: Lightbulb,
    title: "Professional Strengths",
    desc: "Client communication\nTeam collaboration\nDeadline management\nProblem-solving in fast-paced environments\nAdaptability & self-learning",
  },
  {
    icon: Mic,
    title: "Content & Media Presence",
    desc: "Content Creation\nComfortable and confident in front of camera\nOn-camera presentation & performance\nAdaptability & self-learning",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Why You Hire Me?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Creative problem-solver & Media Professional focused on crafting clean, user-friendly experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 space-y-6 mb-6"
        >
          <p className="text-sm text-center leading-relaxed text-muted-foreground first-letter:text-4xl first-letter:font-heading first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-foreground">
            I’m Ghayyas Qureshi, a Creative Media, Marketing & Content Specialist with over 5 years of experience in content production, digital marketing, campaign execution, and influencer driven storytelling. I specialize in transforming creative ideas into high-impact visuals, engaging campaigns, and digital experiences that strengthen brand identity and connect with modern audiences.
          </p>
          {/* <p className="text-sm text-center leading-relaxed text-muted-foreground first-letter:text-4xl first-letter:font-heading first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:text-foreground">
            I’m Ghayyas Qureshi, a BS Media Studies graduate and CEO of GCH, a 360° marketing company built on creativity, precision, and execution. My core strength lies in production and photography, where I bring concepts to life through compelling visuals and seamless storytelling. From managing full-scale productions to capturing powerful moments behind the lens, I focus on delivering high-quality, detail-driven work that elevates every project.
          </p> */}
          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            My expertise goes beyond photography and videography .I work across the complete creative process, including campaign strategy, brand storytelling, production, editing, content marketing, and influencer collaborations. From fashion shoots and product campaigns to awareness projects and social media activations, I combine creativity with strategic thinking to create content that is visually powerful, audience-focused, and results-driven.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            As a content creator and influencer, I have built a strong digital presence across Instagram and YouTube, generating millions of views through storytelling-based content, creative campaigns, and engaging visual experiences. My understanding of audience behavior, platform trends, and digital engagement allows me to create content that not only captures attention but leaves a lasting impact.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            I’m equally comfortable behind and in front of the camera, with experience in acting, hosting, modeling, on-camera appearances, and influencer style content creation. Whether leading a production, presenting on screen, or collaborating with brands, I bring confidence, creativity, adaptability, and authenticity to every project.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            Over the years, I have contributed to TVCs, DVCs, talk shows, short films, corporate productions, branded campaigns, and influencer collaborations while working with creative teams, businesses, and clients across multiple industries. With a strong foundation in both production and marketing, I approach every project with a balance of artistic vision, technical precision, and brand-focused execution.
          </p>

          <p className="text-sm text-center leading-relaxed text-muted-foreground ">
            My goal is simple to create meaningful content, campaigns, and visual experiences that inspire audiences, elevate brands, and stand out in today’s fast moving digital world.
          </p>

          <div className="pt-4 border-t  text-center border-border">
            <p className="font-heading font-semibold text-lg text-foreground">
              Ghayyas Qureshi
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Media Professional
            </p>
            <p className="font-heading italic text-lg text-foreground/50 mt-3">
              Ghayyas Qureshi
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {leftservices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed whitespace-pre-line">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="w-60 h-80 md:w-72 md:h-96 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src={professionalPhoto}
                  alt="Ghayyas Qureshi - Media Professional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-cream-dark flex items-center justify-center blob-shape-2">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-coral">
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right - Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {rightServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed whitespace-pre-line">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
