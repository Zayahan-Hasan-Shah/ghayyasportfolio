import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import brand1 from "../assets/hanson_brand.jpeg";
import brand2 from "../assets/scotmann_brand.jpeg";
import brand3 from "../assets/sunnyd_brand.jpeg";
import brand4 from "../assets/chill_apparel_brand.jpeg";
import brand5 from "../assets/corify_brand.jpeg";

// Brand logos from internet (placeholder images)
const brandImages = [
    {
        id: 1,
        name: "Hanson Food",
        url: brand1,
        alt: "Hanson Food"
    },
    {
        id: 2,
        name: "Scotmann",
        url: brand2,
        alt: "Scotmann"
    },
    {
        id: 3,
        name: "SunnyD",
        url: brand3,
        alt: "SunnyD"
    },
    {
        id: 4,
        name: "Chill Apparel",
        url: brand4,
        alt: "Chill Apparel"
    },
    {
        id: 5,
        name: "Corify",
        url: brand5,
        alt: "Corify"
    },
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