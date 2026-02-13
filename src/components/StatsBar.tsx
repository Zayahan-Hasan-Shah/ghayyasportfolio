import { motion } from "framer-motion";
import { useScrollAnimation } from "..//hooks/useScrollAnimation";
import { Award, Smile, Clock, Trophy } from "lucide-react";

const stats = [
  { icon: Trophy, value: "100+", label: "Successful Projects" },
  { icon: Smile, value: "100+", label: "Satisfied Clients" },
  { icon: Clock, value: "8+", label: "Years of Experience" },
  { icon: Award, value: "12+", label: "Award Winning" },
];

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-12 md:py-16 border-y border-border">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="w-6 h-6 text-muted-foreground mb-1" strokeWidth={1.5} />
              <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;