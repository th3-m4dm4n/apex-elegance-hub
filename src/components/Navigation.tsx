import { useState, useEffect } from "react";
import { Menu, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Publications", path: "/publications" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border shadow-speed`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Flag className="h-8 w-8 text-racing-red" />
            <span className="text-xl font-bold text-racing-red">
              MAKARAND RELE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-300 font-medium tracking-wide ${
                  location.pathname === item.path
                    ? "text-racing-red"
                    : "text-foreground hover:text-racing-red"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6 text-racing-red" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/90 backdrop-blur-md">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-8">
                    <Flag className="h-8 w-8 text-racing-red" />
                    <span className="text-xl font-bold text-racing-red">
                      MAKARAND RELE
                    </span>
                  </div>
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-left px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                          location.pathname === item.path
                            ? "text-white bg-racing-red shadow-racing"
                            : "text-foreground hover:text-racing-red hover:bg-racing-red/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}