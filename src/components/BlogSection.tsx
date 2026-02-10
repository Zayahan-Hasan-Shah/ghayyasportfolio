import { motion } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { ArrowRight, Calendar, User } from "lucide-react";
import blog1 from "..//assets/blog-1.jpg";
import blog2 from "..//assets/blog-2.jpg";

const articles = [
  {
    image: blog1,
    date: "Jan 15, 2026",
    author: "Albert Wilson",
    category: "AI & Design",
    title: "How Can You Generate Perfect AI Photos",
    excerpt: "Discover the latest techniques for creating stunning AI-generated imagery for your design projects.",
  },
  {
    image: blog2,
    date: "Feb 02, 2026",
    author: "Albert Wilson",
    category: "Startups",
    title: "How to Build Successful Business Startups",
    excerpt: "Key insights and strategies for launching and scaling a successful creative business in today's market.",
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Latest Articles
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Stay up to date with the latest design trends, insights, and creative industry updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} />
                  {article.author}
                </span>
                <span className="px-2 py-0.5 bg-secondary rounded-full text-[10px] font-medium">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-coral transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {article.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground mt-4 group-hover:text-coral transition-colors"
              >
                Read More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
