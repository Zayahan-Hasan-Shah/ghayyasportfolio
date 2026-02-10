import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Copyright © 2026 AWWA. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-primary-foreground hover:border-foreground transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
