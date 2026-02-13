import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Contact Info
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="mt-10 space-y-6">
              {/* <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">
                    Contact Address
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    205 Skyline Tower, New York
                  </p>
                </div>
              </div> */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">
                    Instagram
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <a target="_blank" href="https://www.instagram.com/ghayyasqureshi?igsh=MXVtYjMwbXM3NGJkbw==">
                      ghayyas qureshi
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">
                    Email Address
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <a href="mailto:ghayyas1@gmail.com">
                      ghayyas1@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Phone</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <a href="tel:923131825065">
                      +92 313 1825065
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="My Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
                <input
                  type="text"
                  placeholder="Choose Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:bg-charcoal-light transition-all duration-300"
              >
                <Send size={16} />
                Lets Connect
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
