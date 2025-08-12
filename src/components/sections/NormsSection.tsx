import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function NormsSection() {
  const norms = [
    "Usar bata, guantes y gafas de seguridad en todo momento.",
    "No ingerir alimentos ni bebidas dentro del laboratorio.",
    "Atar el cabello largo y evitar ropa suelta.",
    "Mantener limpios y organizados los puestos de trabajo.",
    "Manipular reactivos químicos con precaución y según indicaciones.",
    "No pipetear con la boca; usar siempre pipetas automáticas.",
    "Etiquetar correctamente todos los recipientes.",
    "Lavar las manos antes y después de las prácticas.",
    "No realizar bromas o juegos dentro del laboratorio.",
    "En caso de accidente, informar inmediatamente al docente o encargado."
  ];

  return (
    <section id="norms" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Normas Esenciales de Bioseguridad
            </h2>
            <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground">
              Reglas fundamentales que deben seguirse en todo momento dentro del laboratorio
            </p>
          </div>

          <Card className="shadow-card animate-scale-in">
            <CardContent className="p-8">
              <div className="space-y-4">
                {norms.map((norm, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors duration-200 group animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-safe rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-semibold text-primary">
                          {index + 1}.
                        </span>
                        <p className="text-foreground leading-relaxed">
                          {norm}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important notice */}
          <Card className="mt-8 border-l-4 border-l-primary shadow-card animate-fade-in" style={{ animationDelay: '1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Recordatorio Importante</h3>
              </div>
              <p className="text-muted-foreground">
                Estas normas no son sugerencias, son <strong className="text-primary">requisitos obligatorios</strong> 
                para garantizar tu seguridad y la de tus compañeros. Su cumplimiento es responsabilidad de todos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}