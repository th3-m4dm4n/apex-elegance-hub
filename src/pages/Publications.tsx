import { Calendar, ExternalLink, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Publication {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  views: number;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Aerodynamic Innovations in Modern F1 Car Design",
    excerpt: "Exploring the latest advancements in Formula 1 aerodynamics and their impact on performance, including ground effect principles and active suspension systems.",
    date: "2024-03-15",
    category: "Technical Analysis",
    readTime: "8 min read",
    views: 2847
  },
  {
    id: 2,
    title: "Data Analytics Revolution in Formula 1 Racing",
    excerpt: "How machine learning and real-time data analysis are transforming race strategy, tire management, and driver performance optimization.",
    date: "2024-02-28",
    category: "Data Science",
    readTime: "12 min read",
    views: 3521
  },
  {
    id: 3,
    title: "Sustainable Technologies in Formula 1",
    excerpt: "The push towards carbon neutrality in motorsport: hybrid power units, sustainable fuels, and the future of green racing technology.",
    date: "2024-02-10",
    category: "Sustainability",
    readTime: "6 min read",
    views: 1923
  },
  {
    id: 4,
    title: "Virtual Reality Training Systems for F1 Drivers",
    excerpt: "Investigating the role of VR and simulation technology in driver training, setup optimization, and track learning methodologies.",
    date: "2024-01-22",
    category: "Technology",
    readTime: "10 min read",
    views: 2156
  }
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-speed bg-clip-text text-transparent">
                Research & Publications
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                My research and insights into Formula 1 technology, data analytics, and motorsport innovation. 
                Exploring the technical aspects that make F1 the pinnacle of automotive engineering.
              </p>
            </div>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((publication, index) => (
                <Card 
                  key={publication.id}
                  className="group hover:shadow-racing transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 hover:border-racing-red/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-racing-red bg-racing-red/10 px-3 py-1 rounded-full">
                        {publication.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(publication.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{publication.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold group-hover:text-racing-red transition-colors duration-300">
                      {publication.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {publication.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">
                        {publication.readTime}
                      </span>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-racing-red hover:text-racing-red hover:bg-racing-red/10 transition-colors duration-300"
                      >
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12 animate-fade-up">
              <Button 
                size="lg"
                variant="outline"
                className="border-racing-red text-racing-red hover:bg-racing-red hover:text-pit-white font-bold px-8 py-3 transition-all duration-300"
              >
                Load More Publications
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;