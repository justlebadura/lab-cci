import { } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import labHeroImage from "@/assets/lab-hero.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-success rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-20 h-20 border-2 border-warning rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-lab bg-clip-text text-transparent">
                  Seguridad en Acción
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Guía Interactiva de Bioseguridad en Laboratorio
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Una guía completa e interactiva diseñada para garantizar la seguridad 
              en el laboratorio a través de normas, procedimientos y buenas prácticas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-lab hover:opacity-90 transition-all duration-300 shadow-lab hover:shadow-glow"
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Guía
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="overflow-hidden shadow-lab hover:shadow-glow transition-all duration-500">
              <img 
                src={labHeroImage} 
                alt="Laboratorio moderno con científicos trabajando de forma segura"
                className="w-full h-auto rounded-lg"
              />
            </Card>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              📚 Educativo
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Desliza hacia abajo</p>
        </div>
      </div>
    </section>
  );
}