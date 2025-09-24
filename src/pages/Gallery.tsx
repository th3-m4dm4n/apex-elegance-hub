import { useState } from "react";
import { X, ZoomIn, Play, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    title: "Monaco Grand Prix Analysis",
    description: "Data visualization project analyzing Monaco GP performance metrics",
    category: "Project Work"
  },
  {
    id: 2,
    type: "video",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "F1 Dashboard Demo",
    description: "Live demonstration of the telemetry analytics dashboard",
    category: "Demos"
  },
  {
    id: 3,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "F1 Car Technical Drawing",
    description: "Detailed technical analysis and component breakdown",
    category: "Technical"
  },
  {
    id: 4,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Silverstone Circuit Study",
    description: "Research project on circuit characteristics and racing lines",
    category: "Research"
  },
  {
    id: 5,
    type: "video",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "AI Model Training",
    description: "Time-lapse of machine learning model development process",
    category: "Development"
  },
  {
    id: 6,
    type: "image",
    src: "/placeholder.svg",
    thumbnail: "/placeholder.svg",
    title: "Conference Presentation",
    description: "Presenting F1 research findings at tech conference",
    category: "Speaking"
  }
];

const categories = ["All", "Project Work", "Demos", "Technical", "Research", "Development", "Speaking"];

const Gallery = () => {
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-speed bg-clip-text text-transparent">
                Project Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A visual showcase of my work in Formula 1 technology, data analytics, and motorsport research. 
                From technical drawings to live demos and conference presentations.
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
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;