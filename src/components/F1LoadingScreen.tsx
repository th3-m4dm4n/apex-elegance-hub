import { useEffect, useState } from "react";
import loadingCarImage from "@/assets/loader-car.png";

interface F1LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function F1LoadingScreen({ onLoadingComplete }: F1LoadingScreenProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onLoadingComplete();
    }, 2500); // Animation duration + buffer

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 bg-speed-black">
      {/* Racing stripes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-racing-red to-transparent transform -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pit-white to-transparent transform -translate-y-1/2 mt-8" />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pit-white to-transparent transform -translate-y-1/2 -mt-8" />
      </div>

      {/* F1 Car Animation */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-64 h-32 animate-f1-loading">
        <img 
          src={loadingCarImage} 
          alt="F1 Car Loading"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Loading text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="text-pit-white text-lg font-bold tracking-wider animate-pulse">
          PREPARING FOR RACE...
        </div>
      </div>
    </div>
  );
}