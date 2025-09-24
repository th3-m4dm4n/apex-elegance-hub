import { Github, ExternalLink, Zap, Trophy, BarChart3, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Planning";
  icon: React.ElementType;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "F1 Telemetry Analytics Dashboard",
    description: "Real-time dashboard for analyzing Formula 1 telemetry data including speed, tire temperature, and lap performance metrics with predictive analytics.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "WebSocket"],
    status: "Completed",
    icon: BarChart3,
    category: "Data Analytics"
  },
  {
    id: 2,
    title: "Race Strategy Optimization AI",
    description: "Machine learning model that predicts optimal pit stop strategies based on weather conditions, tire degradation, and competitor analysis.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "MongoDB"],
    status: "In Progress",
    icon: Zap,
    category: "Artificial Intelligence"
  },
  {
    id: 3,
    title: "Virtual F1 Circuit Simulator",
    description: "Interactive 3D simulator allowing users to experience famous F1 circuits with realistic physics and weather conditions.",
    technologies: ["Three.js", "WebGL", "Physics Engine", "WebVR"],
    status: "Completed",
    icon: Settings,
    category: "Simulation"
  },
  {
    id: 4,
    title: "Championship Predictor",
    description: "Statistical model that forecasts championship standings based on historical performance data and current season trends.",
    technologies: ["R", "Shiny", "PostgreSQL", "Machine Learning"],
    status: "Planning",
    icon: Trophy,
    category: "Statistics"
  }
];

const statusColors = {
  "Completed": "bg-green-500/10 text-green-600 border-green-500/20",
  "In Progress": "bg-racing-red/10 text-racing-red border-racing-red/20",
  "Planning": "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-speed bg-clip-text text-transparent">
                Featured Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Innovative solutions and tools that push the boundaries of Formula 1 technology, 
                from real-time analytics to AI-powered race strategies. Here are some of my key projects.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card 
                    key={project.id}
                    className="group hover:shadow-racing transition-all duration-500 hover:scale-105 bg-gradient-card border-border/50 hover:border-racing-red/30 relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-racing-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-racing-red/10 text-racing-red group-hover:bg-racing-red group-hover:text-pit-white transition-colors duration-300">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            {project.category}
                          </span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${statusColors[project.status]} font-medium`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl font-bold group-hover:text-racing-red transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0 relative z-10">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className="bg-secondary/50 text-foreground border-border/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Button 
                          size="sm"
                          className="bg-racing-red hover:bg-racing-red-dark text-pit-white font-medium transition-all duration-300"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-racing-red/30 text-racing-red hover:bg-racing-red hover:text-pit-white transition-all duration-300"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 animate-fade-up">
              <div className="bg-gradient-card p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Interested in Collaboration?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Have an exciting F1-related project in mind? Let's build something amazing together 
                  that pushes the boundaries of motorsport technology.
                </p>
                <Button 
                  size="lg"
                  className="bg-racing-red hover:bg-racing-red-dark text-pit-white font-bold px-8 py-3 shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;