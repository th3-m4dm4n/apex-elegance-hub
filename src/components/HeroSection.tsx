import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroCarImage from "@/assets/f1-hero-car.jpg";

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with F1 car image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
        <img
          src={heroCarImage}
          alt="F1 Racing Car"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Speed lines animation */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-racing-red to-transparent animate-slide-in-left" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pit-white/50 to-transparent animate-slide-in-left delay-300" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-racing-red/70 to-transparent animate-slide-in-left delay-500" />
      </div>

      {/* Hero content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-pit-white mb-6 tracking-tight">
            MAKARAND
            <span className="block bg-gradient-speed bg-clip-text text-transparent animate-speed-pulse">
              RELE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pit-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-300">
            F1 Technology Enthusiast & Data Analytics Expert. Exploring the intersection of 
            motorsport innovation, machine learning, and high-performance engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-500">
            <Link to="/publications">
              <Button
                size="lg"
                className="bg-racing-red hover:bg-racing-red-dark text-pit-white font-bold py-4 px-8 shadow-glow transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="/projects">
              <Button
                variant="ghost"
                size="lg"
                className="text-pit-white border-2 border-pit-white/30 hover:border-pit-white hover:bg-pit-white/10 font-bold py-4 px-8 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                See Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-pit-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pit-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}