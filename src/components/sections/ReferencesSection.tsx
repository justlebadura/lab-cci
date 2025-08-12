import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, BookOpen } from "lucide-react";

export default function ReferencesSection() {
  const references = [
    {
      title: "Manual de Bioseguridad en Laboratorios",
      author: "Organización Mundial de la Salud (OMS)",
      edition: "4ª edición",
      year: "2020",
      description: "Guía internacional estándar para prácticas de bioseguridad en laboratorios de todos los niveles.",
      url: "#"
    },
    {
      title: "Criteria for a Recommended Standard: Occupational Exposure to Chemicals in Laboratories",
      author: "NIOSH - National Institute for Occupational Safety and Health",
      edition: "Publicación actualizada",
      year: "2023",
      description: "Estándares y recomendaciones para la exposición ocupacional a químicos en laboratorios.",
      url: "#"
    },
    {
      title: "Guía de Bioseguridad en Laboratorios",
      author: "Ministerio de Salud de Colombia",
      edition: "Versión 2.0",
      year: "2022",
      description: "Lineamientos nacionales para el manejo seguro en laboratorios clínicos y de investigación.",
      url: "#"
    },
    {
      title: "Laboratory Safety Guidelines",
      author: "CDC - Centers for Disease Control and Prevention",
      edition: "Guías actualizadas",
      year: "2024",
      description: "Directrices comprehensivas para la seguridad en laboratorios de salud pública.",
      url: "#"
    }
  ];

  return (
    <section id="references" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Referencias
            </h2>
            <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground">
              Fuentes consultadas para el desarrollo de esta guía de bioseguridad
            </p>
          </div>

          <div className="space-y-6">
            {references.map((reference, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-lab rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {reference.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{reference.year}</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-primary font-medium">{reference.author}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{reference.edition}</span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reference.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional resources */}
          <Card className="mt-12 bg-accent/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Recursos Adicionales Recomendados
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Organizaciones Internacionales:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• World Health Organization (WHO)</li>
                    <li>• International Labour Organization (ILO)</li>
                    <li>• European Centre for Disease Prevention</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Instituciones Nacionales:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Instituto Nacional de Salud</li>
                    <li>• INVIMA - Instituto de Vigilancia</li>
                    <li>• Ministerio de Educación Nacional</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}