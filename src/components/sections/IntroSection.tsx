import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, BookOpen, Shield } from "lucide-react";

export default function IntroSection() {
  const highlights = [
    {
      icon: Target,
      title: "Propósito",
      description: "Orientar sobre normas de bioseguridad necesarias para prevenir accidentes"
    },
    {
      icon: Users,
      title: "Público Objetivo",
      description: "Estudiantes, docentes y personal de laboratorio"
    },
    {
      icon: BookOpen,
      title: "Contenido",
      description: "Normas esenciales, pictogramas y procedimientos de seguridad"
    },
    {
      icon: Shield,
      title: "Importancia",
      description: "La prevención y el conocimiento salvan vidas"
    }
  ];

  return (
    <section id="intro" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Introducción
            </h2>
            <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
          </div>

          <Card className="mb-12 shadow-card animate-scale-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                La presente cartilla tiene como <strong className="text-primary">propósito orientar a estudiantes, 
                docentes y personal del laboratorio</strong> sobre las normas de bioseguridad necesarias para 
                prevenir accidentes y garantizar un entorno seguro. Está dirigida principalmente a quienes 
                realicen prácticas en laboratorios escolares o profesionales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mt-6">
                En este documento se abordan las normas esenciales, el significado de los pictogramas de 
                seguridad y las acciones que deben evitarse. <strong className="text-success">Su importancia 
                radica en que la prevención y el conocimiento salvan vidas</strong> y permiten un trabajo 
                científico responsable.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-lab rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}