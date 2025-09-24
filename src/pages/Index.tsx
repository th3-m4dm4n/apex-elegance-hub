import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PublicationsSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
