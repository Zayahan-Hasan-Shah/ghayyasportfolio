import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Cake, Briefcase, Heart, Sparkles } from "lucide-react";

// Import all memory images
import birthday1 from "../assets/birthday_1.jpeg";
import birthday2 from "../assets/birthday_2.jpeg";
import birthday3 from "../assets/birthday_3.jpeg";
import birthday4 from "../assets/birthday_4.jpeg";
import birthday5 from "../assets/birthday_5.jpeg";
import farewell1 from "../assets/farewell_1.jpeg";
import farewell2 from "../assets/farewell_2.jpeg";
import farewell3 from "../assets/farewell_3.jpeg";
import farewell4 from "../assets/farewell_4.jpeg";
import corporate1 from "../assets/corporate_1.jpeg";
import corporate2 from "../assets/corporate_2.jpeg";
import corporate3 from "../assets/corporate_3.jpeg";

const memories = [
  {
    id: 1,
    category: "Birthday Celebrations",
    icon: Cake,
    images: [birthday1, birthday2, birthday3, birthday4, birthday5],
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    id: 2,
    category: "Corporate Events",
    icon: Briefcase,
    images: [corporate1, corporate2, corporate3],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    id: 3,
    category: "Farewell Moments",
    icon: Heart,
    images: [farewell1, farewell2, farewell3, farewell4],
    color: "from-purple-500/20 to-purple-600/20"
  }
];

const MemoriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="memories" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-coral animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-foreground via-coral to-coral-light bg-clip-text text-transparent">
              Memorable Moments
            </h2>
            <Sparkles className="w-8 h-8 text-coral animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Capturing life's beautiful celebrations - from birthdays and corporate events to heartfelt farewells. 
            Every moment tells a unique story worth remembering forever.
          </p>
        </motion.div>

        {/* Memory Categories */}
        <div className="space-y-24">
          {memories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-12"
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {category.category}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      {category.images.length} Special Moments
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Image Carousel with Modern Layout */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: categoryIndex % 2 === 0 ? -100 * category.images.length : 100 * category.images.length }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: categoryIndex % 2 === 0 ? 15 : 18, // Different speeds for variety
                      ease: "linear"
                    }
                  }}
                  className="flex gap-6"
                >
                  {/* Duplicate images for seamless loop */}
                  {[...category.images, ...category.images].map((image, imageIndex) => (
                    <motion.div
                      key={`${category.id}-${imageIndex}`}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                      animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                      transition={{ 
                        duration: 0.7, 
                        delay: categoryIndex * 0.2 + 0.3 + imageIndex * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.08, 
                        rotateY: 8,
                        transition: { duration: 0.3 }
                      }}
                      className="flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                      style={{ width: "350px", height: "50vh" }} // Increased sizes
                    >
                      {/* Image Container with Overlay */}
                      <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <img
                          src={image}
                          alt={`${category.category} memory ${imageIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Floating Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="absolute top-4 right-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                        >
                          {imageIndex + 1}
                        </motion.div>

                        {/* Category Icon on Hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2"
                        >
                          <category.icon className="w-4 h-4 text-foreground" />
                        </motion.div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-coral/20 animate-pulse" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-coral-light/30 animate-bounce" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* View More Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.8 }}
                className="text-center mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-coral to-coral-light text-white font-heading font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View All {category.category}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex justify-center items-center gap-8"
        >
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="w-2 h-2 rounded-full bg-coral/40"
              />
            ))}
          </div>
          <Sparkles className="w-6 h-6 text-coral animate-spin" />
        </motion.div>
      </div>
    </section>
  );
};

export default MemoriesSection;
