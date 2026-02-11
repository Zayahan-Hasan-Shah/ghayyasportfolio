// import { motion } from "framer-motion";
// import { useScrollAnimation } from "..//hooks/useScrollAnimation";
// // import gallery1 from "..//assets/gallery-1.jpg";
// // import gallery2 from "..//assets/gallery-2.jpg";
// // import gallery3 from "..//assets/gallery-3.jpg";
// import img1 from "../assets/1.png";
// import img2 from "../assets/2.png";
// import img3 from "../assets/3.jpg.jpeg";
// import img4 from "../assets/4.png";
// import img5 from "../assets/5.png";
// import img6 from "../assets/6.png";

// const images = [
//   { src: img1, alt: "Kachray se kharcha bachao", span: "col-span-2 row-span-2" },
//   { src: img2, alt: "Kachray se kharcha bachao", span: "col-span-1 row-span-1" },
//   { src: img3, alt: "Recycle Reuse Rethink", span: "col-span-1 row-span-1" },
//   { src: img4, alt: "Recycle Reuse Rethink", span: "col-span-1 row-span-1" },
//   { src: img5, alt: "Recycle Reuse Rethink", span: "col-span-1 row-span-1" },
//   { src: img6, alt: "Kachray se kharcha bachao", span: "col-span-1 row-span-1" },
// ];

// const GallerySection = () => {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section className="section-padding bg-secondary/20" ref={ref}>
//       <div className="container-narrow">
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
//             My Gallery
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore my creative journey through these carefully curated moments
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.5, delay: i * 0.15 }}
//               className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer relative bg-cream-dark shadow-md hover:shadow-xl transition-all duration-300`}
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full  group-hover:scale-110 transition-transform duration-700"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <p className="text-sm font-medium">{img.alt}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;


import { motion, useMotionValue, useTransform, useAnimation, type PanInfo } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg.jpeg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import { useState } from "react";

const images = [
  { src: img1, alt: "Kachray se kharcha bachao" },
  { src: img2, alt: "Kachray se kharcha bachao" },
  { src: img3, alt: "Recycle Reuse Rethink" },
  { src: img4, alt: "Recycle Reuse Rethink" },
  { src: img5, alt: "Recycle Reuse Rethink" },
  { src: img6, alt: "Kachray se kharcha bachao" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Base width - we'll make it dynamic below
  const gap = 24; // Matches your gap-6 (1.5rem * 1.6 ≈ 24px, adjust if needed)
  const x = useMotionValue(0);

  // Better drag end handler with velocity + offset
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = slideWidth * 0.3; // 30% of slide to trigger change
    const velocityThreshold = 0.5; // Faster swipes always trigger

    const draggedDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (draggedDistance > threshold || swipeVelocity > velocityThreshold) {
      // Dragged right (positive offset) → previous
      setCurrentIndex((prev: any) => Math.max(prev - 1, 0));
    } else if (draggedDistance < -threshold || swipeVelocity < -velocityThreshold) {
      // Dragged left (negative offset) → next
      setCurrentIndex((prev: any) => Math.min(prev + 1, images.length - 1));
    }
    // No else: it will snap back via animate if no change
  };

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

        {/* Desktop/Tablet → Grid | Mobile → Carousel */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`
                rounded-2xl overflow-hidden group cursor-pointer relative 
                bg-cream-dark shadow-md hover:shadow-xl transition-all duration-300
                ${i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            className="flex gap-2 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: -((images.length - 1) * (slideWidth + gap)),
              right: 0,
            }}
            dragElastic={0.4}
            style={{ x }}
            animate={{ x: -currentIndex * (slideWidth + gap) }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onDragEnd={handleDragEnd}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[85vw] rounded-2xl overflow-hidden relative bg-cream-dark shadow-md flex-shrink-0"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-[90vw] h-[52vh] sm:h-[55vh] object-fit"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-5 text-white">
                    <p className="text-base font-medium">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots with active state + click navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-foreground" : "bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;