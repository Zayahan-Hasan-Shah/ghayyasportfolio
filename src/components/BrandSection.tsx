import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Brand logos from internet (placeholder images)
const brandImages = [
  {
    id: 1,
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google Logo"
  },
  {
    id: 2,
    name: "Apple",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple Logo"
  },
  {
    id: 3,
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    alt: "Microsoft Logo"
  },
  {
    id: 4,
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon Logo"
  },
  {
    id: 5,
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    alt: "Meta Logo"
  },
  {
    id: 6,
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    alt: "Netflix Logo"
  },
  {
    id: 7,
    name: "Spotify",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    alt: "Spotify Logo"
  },
  {
    id: 8,
    name: "Adobe",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    alt: "Adobe Logo"
  }
];

const BrandSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Duplicate the array for seamless infinite scroll
  const duplicatedBrands = [...brandImages, ...brandImages];

  return (
    <section className="section-padding bg-cream-light border-y border-border" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted By Leading Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proud to have collaborated with industry leaders and innovative companies
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-cream-light to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-cream-light to-transparent z-10" />

          {/* Scrolling Carousel */}
          <motion.div
            className="flex gap-8 md:gap-16"
            animate={{
              x: [0, -50 * brandImages.length] // Adjust based on item width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Speed of animation
                ease: "linear"
              }
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="h-8 md:h-12 lg:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-border/40"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;