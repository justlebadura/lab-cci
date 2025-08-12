import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface TableOfContentsProps {
  onSectionClick: (section: string) => void;
}

export default function TableOfContentsSection({ onSectionClick }: TableOfContentsProps) {
  const contents = [
    {
      id: "intro",
      title: "Introducción",
      subtitle: "Propósito, público objetivo e importancia"
    },
    {
      id: "norms",
      title: "Normas Esenciales de Bioseguridad",
      subtitle: "Reglas fundamentales del laboratorio",
      subsections: [
        "2.1. Uso de equipo de protección personal (EPP)",
        "2.2. Manipulación de sustancias químicas", 
        "2.3. Higiene y limpieza",
        "2.4. Procedimientos ante accidentes"
      ]
    },
    {
      id: "pictograms",
      title: "Pictogramas de Seguridad",
      subtitle: "Símbolos y su significado interactivo"
    },
    {
      id: "prohibited",
      title: "Procedimientos Prohibidos",
      subtitle: "Acciones que nunca deben realizarse"
    },
    {
      id: "conclusion",
      title: "Conclusión",
      subtitle: "Importancia de la responsabilidad compartida"
    },
    {
      id: "references",
      title: "Referencias",
      subtitle: "Fuentes y recursos adicionales"
    }
  ];

  return (
    <section id="toc" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tabla de Contenido
            </h2>
            <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground">
              Navegación rápida a todas las secciones de la guía
            </p>
          </div>

          <Card className="shadow-card animate-scale-in">
            <CardContent className="p-8">
              <div className="space-y-4">
                {contents.map((section, index) => (
                  <div 
                    key={section.id}
                    className="animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => onSectionClick(section.id)}
                      className="w-full text-left p-4 rounded-lg hover:bg-accent/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-lg font-semibold text-primary">
                              {index + 1}.
                            </span>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {section.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground ml-8">
                            {section.subtitle}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </button>

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="ml-12 mt-2 space-y-1">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="text-sm text-muted-foreground py-1">
                            {subsection}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation hint */}
          <Card className="mt-8 bg-primary/5 border-primary animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                💡 Navegación Interactiva
              </h3>
              <p className="text-muted-foreground">
                Haz clic en cualquier sección para saltar directamente a ese contenido. 
                También puedes usar el menú lateral para una navegación más rápida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}