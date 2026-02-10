import { motion } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
// import gallery1 from "..//assets/gallery-1.jpg";
// import gallery2 from "..//assets/gallery-2.jpg";
// import gallery3 from "..//assets/gallery-3.jpg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg.jpeg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const images = [
  { src: img1, alt: "Kachray se kharcha bachao", span: "col-span-2 row-span-2" },
  { src: img2, alt: "Kachray se kharcha bachao", span: "col-span-1 row-span-1" },
  { src: img3, alt: "Recycle Reuse Rethink", span: "col-span-1 row-span-1" },
  { src: img4, alt: "Recycle Reuse Rethink", span: "col-span-1 row-span-1" },
  { src: img5, alt: "Recycle Reuse Rethink", span: "col-span-1 row-span-1" },
  { src: img6, alt: "Kachray se kharcha bachao", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            My Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my creative journey through these carefully curated moments
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer relative bg-cream-dark shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full  group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
