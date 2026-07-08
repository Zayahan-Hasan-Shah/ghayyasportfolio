import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Play, X, Clapperboard, HelpCircle } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  driveId: string;
  category: "Ads" | "Media Gala" | "Reel";
  description: string;
  thumbnail: string;
}

const videosData: VideoItem[] = [
  {
    id: 1,
    title: "Media Gala Highlights",
    driveId: "1KqTXq8_k9UKp9X5-VC5H9OGdBK9te61Y",
    category: "Media Gala",
    description: "Professional advertising and promotional campaign reels showcasing creative concept execution and audience targeting.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Reel - 1",
    driveId: "11wyAHiPRoC_nEMiaj94LYLjmieHSM2PB",
    category: "Reel",
    description: "Coverage showcasing the arrival of distinguished guests, red carpet interactions, and grand opening ceremonies.",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Reel - 2",
    driveId: "1zBUZfXmNrb09WYiOstsJi0PRFl7VlZ6M",
    category: "Reel",
    description: "Event highlights, keynote speeches, awards ceremonies, and executive presentations live on the main stage.",
    thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Reel - 3",
    driveId: "1u-2EctGzPYyJUkphYRNT7vcDskA2GC68",
    category: "Reel",
    description: "Highlights of the artistic and musical performances, cultural segments, and live entertainment at the gala.",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Reel - 4",
    driveId: "1iol3U8Nla7xcu-aQfx4d8NoAM4bo71ag",
    category: "Reel",
    description: "Candid footage, production crew setups, interviews, and attendees' feedback behind the scenes.",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Ad - 1",
    driveId: "1LrLkEm6JSnN2cW68U2ZK_bt7h59DugQ_",
    category: "Ads",
    description: "Commercial brand advertisement campaign capturing product features and visual storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Ad - 2",
    driveId: "1wm9RHivSjBB9rKAsMIHOGxFmxHRgoEOY",
    category: "Ads",
    description: "Creative promotional video highlighting brand values, modern transitions, and high-impact design.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Ad - 3",
    driveId: "1qoRaoFh0D_IkigpEa9Pri9bTv4eTjiHt",
    category: "Ads",
    description: "Marketing campaign ad emphasizing user engagement, cinematic sound design, and sharp edits.",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Ad - 4",
    driveId: "11E1NeYHfqOHHUuY2WbhFWxA-Vnx3CClM",
    category: "Ads",
    description: "Short promotional spot focusing on high-definition close-up captures and product aesthetics.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Ad - 5",
    driveId: "1WKHFLrN0ClEPNvaNuAztPlFPjE4U7lTt",
    category: "Ads",
    description: "Campaign teaser highlighting creative media elements, typography layouts, and promotional messaging.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
  }
];

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<"All" | "Ads" | "Media Gala" | "Reel">("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") return videosData;
    return videosData.filter(video => video.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="videos" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2 mb-4">
            <Clapperboard size={16} className="text-coral" />
            <span className="text-xs font-heading tracking-[0.22em] uppercase text-muted-foreground">
              Production Reels
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Featured Video Showcase
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Watch my commercial advertisements and media gala coverages directly. Tap any video to open the cinema player.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {["All", "Ads", "Media Gala", "Reel"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-foreground text-primary-foreground shadow-sm"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                layout
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-background rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                {/* Thumbnail / Cover Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 rounded-full bg-background/90 text-coral flex items-center justify-center shadow-lg group-hover:bg-coral group-hover:text-background transition-colors duration-300"
                    >
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[10px] font-heading font-medium tracking-wider uppercase text-white">
                    {video.category}
                  </span>
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-coral transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>Google Drive Video</span>
                    <span className="underline group-hover:text-coral transition-colors">Click to Play</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Info Box about drive sharing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-4 rounded-2xl border border-border bg-secondary/20 flex gap-3 max-w-xl mx-auto"
        >
          <HelpCircle size={20} className="text-coral flex-shrink-0 mt-0.5" />
          <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
            Note: Videos are streamed from Google Drive. Ensure the drive links are shared with public permissions ("Anyone with the link can view") so all portfolio visitors can view them without signing in.
          </p>
        </motion.div>

        {/* Cinema Lightbox Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            >
              {/* Close backdrop hit area */}
              <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl z-10"
              >
                {/* Modal Header */}
                <div className="p-4 sm:p-6 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-heading font-medium tracking-wider uppercase text-coral">
                      {activeVideo.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white mt-1">
                      {activeVideo.title}
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    aria-label="Close player"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Video Player Frame Container */}
                <div className="relative aspect-video bg-black w-full">
                  <iframe
                    src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-zinc-900 text-xs text-zinc-500 flex flex-wrap gap-4 justify-between items-center">
                  <span>Streamed from Google Drive</span>
                  <a
                    href={`https://drive.google.com/file/d/${activeVideo.driveId}/view?usp=drive_link`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral hover:underline font-semibold"
                  >
                    Open in Google Drive
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoSection;
