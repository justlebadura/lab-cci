import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull, Flame, AlertTriangle, Droplets, Biohazard, Zap, TestTube } from "lucide-react";

export default function PictogramsSection() {
  const pictograms = [
    {
      icon: Skull,
      title: "Tóxico",
      description: "Sustancias que pueden causar daños graves a la salud",
      color: "destructive",
      details: "Evitar contacto directo. Usar EPP completo. Manejar en campana extractora."
    },
    {
      icon: Flame,
      title: "Inflamable",
      description: "Material que puede encenderse fácilmente",
      color: "warning",
      details: "Mantener alejado de fuentes de calor. No fumar cerca. Tener extintores disponibles."
    },
    {
      icon: AlertTriangle,
      title: "Peligro General",
      description: "Advertencia de riesgo potencial",
      color: "warning",
      details: "Prestar atención especial. Seguir protocolos específicos."
    },
    {
      icon: Droplets,
      title: "Corrosivo",
      description: "Sustancias que dañan piel y materiales",
      color: "destructive",
      details: "Usar guantes resistentes. Proteger ojos. Tener neutralizantes a mano."
    },
    {
      icon: Biohazard,
      title: "Biohazard",
      description: "Riesgo biológico presente",
      color: "destructive",
      details: "Seguir protocolos de biocontención. Desinfectar después del uso."
    },
    {
      icon: Zap,
      title: "Peligro Eléctrico",
      description: "Riesgo de descarga eléctrica",
      color: "warning",
      details: "Verificar instalaciones. No tocar con manos húmedas. Usar calzado aislante."
    },
    {
      icon: TestTube,
      title: "Sustancias Químicas",
      description: "Indica manipulación química",
      color: "primary",
      details: "Leer etiquetas. Conocer MSDS. Usar EPP apropiado."
    }
  ];

  return (
    <section id="pictograms" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pictogramas de Seguridad
          </h2>
          <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce el significado de cada símbolo de seguridad. Pasa el cursor sobre cada pictograma 
            para ver información detallada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pictograms.map((pictogram, index) => (
            <Card 
              key={pictogram.title}
              className="group hover:shadow-glow transition-all duration-500 cursor-pointer transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-lab opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Pictogram SVG icon */}
                <div className="mb-4 group-hover:animate-pulse relative z-10 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-lab rounded-full flex items-center justify-center">
                    <pictogram.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Title and basic description */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pictogram.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pictogram.description}
                  </p>
                  
                  <Badge 
                    variant={pictogram.color === 'primary' ? 'default' : 'destructive'}
                    className="mb-4"
                  >
                    {pictogram.color === 'destructive' ? 'Alto Riesgo' : 
                     pictogram.color === 'warning' ? 'Precaución' : 'Información'}
                  </Badge>
                </div>

                {/* Detailed information - shows on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-card border-t border-border p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <p className="text-xs text-muted-foreground font-medium">
                    <strong className="text-foreground">Precauciones:</strong> {pictogram.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive hint */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground">
            💡 <strong>Consejo:</strong> Pasa el cursor sobre cada pictograma para ver las precauciones específicas
          </p>
        </div>
      </div>
    </section>
  );
}