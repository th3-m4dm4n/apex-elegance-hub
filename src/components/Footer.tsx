import { Flag, Github, Twitter, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    "Research": [
      { name: "Publications", href: "#publications" },
      { name: "Technical Reports", href: "#" },
      { name: "Data Analysis", href: "#" },
      { name: "White Papers", href: "#" }
    ],
    "Projects": [
      { name: "Analytics Dashboard", href: "#projects" },
      { name: "AI Models", href: "#" },
      { name: "Simulations", href: "#" },
      { name: "Open Source", href: "#" }
    ],
    "Resources": [
      { name: "Gallery", href: "#gallery" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Downloads", href: "#" }
    ]
  };

  const scrollToSection = (id: string) => {
    if (id.startsWith("#")) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-speed-black text-pit-white border-t border-carbon-gray">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Flag className="h-8 w-8 text-racing-red" />
              <span className="text-xl font-bold bg-gradient-speed bg-clip-text text-transparent">
                F1 MOTORSPORT
              </span>
            </div>
            <p className="text-pit-white/70 leading-relaxed mb-6 max-w-sm">
              Exploring the cutting edge of Formula 1 technology through research, 
              innovation, and data-driven insights from the world's premier motorsport.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="p-2 text-pit-white/70 hover:text-racing-red hover:bg-racing-red/10 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-pit-white mb-4 text-lg">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-pit-white/70 hover:text-racing-red transition-colors duration-300 text-left flex items-center group"
                    >
                      {link.name}
                      {!link.href.startsWith("#") && (
                        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-carbon-gray/50 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-pit-white text-lg mb-2">
                Stay Updated with F1 Tech Insights
              </h3>
              <p className="text-pit-white/70">
                Get the latest research, analysis, and project updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                className="text-pit-white border border-pit-white/30 hover:border-racing-red hover:bg-racing-red/10 hover:text-racing-red transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-carbon-gray pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-pit-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} F1 Motorsport Research. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-pit-white/60 hover:text-racing-red transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-pit-white/60 hover:text-racing-red transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-pit-white/60 hover:text-racing-red transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Racing stripe decoration */}
      <div className="h-1 bg-gradient-speed" />
    </footer>
  );
}