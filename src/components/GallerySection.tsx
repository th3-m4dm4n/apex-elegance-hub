import { useState } from "react";
import { X, ZoomIn, Play, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
}

// Placeholder gallery items - you can replace with real content later
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Monaco Grand Prix 2024",
    description: "Spectacular overhead view of the Monaco circuit during the race",
    category: "Race Highlights"
  },
  {
    id: 2,
    type: "video",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Pit Stop Analysis",
    description: "Slow-motion breakdown of a perfect 2.3-second pit stop",
    category: "Technical"
  },
  {
    id: 3,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "F1 Car Close-up",
    description: "Detailed view of aerodynamic components and design",
    category: "Car Details"
  },
  {
    id: 4,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Silverstone Circuit",
    description: "Aerial photography of the iconic British Grand Prix venue",
    category: "Circuits"
  },
  {
    id: 5,
    type: "video",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Qualifying Highlights",
    description: "Best moments from qualifying sessions around the world",
    category: "Race Highlights"
  },
  {
    id: 6,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Driver Portrait",
    description: "Professional portrait session with championship drivers",
    category: "Behind the Scenes"
  }
];

const categories = ["All", "Race Highlights", "Technical", "Car Details", "Circuits", "Behind the Scenes"];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    item => selectedCategory === "All" || item.category === selectedCategory
  );

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-speed bg-clip-text text-transparent">
            F1 Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the world of Formula 1 through our curated collection 
            of high-quality images and videos capturing the essence of motorsport.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-racing-red hover:bg-racing-red-dark text-pit-white shadow-glow"
                  : "border-racing-red/30 text-racing-red hover:bg-racing-red hover:text-pit-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gradient-card rounded-xl overflow-hidden border border-border/50 hover:border-racing-red/30 transition-all duration-500 hover:shadow-racing cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(item)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-speed-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play button for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-racing-red/90 text-pit-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>
                )}

                {/* Zoom icon for images */}
                {item.type === "image" && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-racing-red/90 text-pit-white p-2 rounded-full">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Type indicator */}
                <div className="absolute top-4 left-4">
                  <div className="bg-speed-black/80 text-pit-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                    {item.type === "video" ? <Play className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-xs text-racing-red font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-racing-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-up">
          <Button 
            size="lg"
            variant="outline"
            className="border-racing-red text-racing-red hover:bg-racing-red hover:text-pit-white font-bold px-8 py-3 transition-all duration-300"
          >
            Load More Media
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-speed-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-pit-white hover:text-racing-red z-10"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Media content */}
            <div className="bg-background rounded-xl overflow-hidden border border-border/50">
              <img
                src={lightboxItem.src}
                alt={lightboxItem.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="text-sm text-racing-red font-medium mb-2">
                  {lightboxItem.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {lightboxItem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {lightboxItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}