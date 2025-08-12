import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, BookOpen } from "lucide-react";

export default function ConclusionSection() {
  const keyPoints = [
    {
      icon: Shield,
      title: "Responsabilidad Personal",
      description: "Cada individuo es responsable de seguir las normas de seguridad"
    },
    {
      icon: Heart,
      title: "Responsabilidad Colectiva",
      description: "La seguridad de todos depende del compromiso de cada persona"
    },
    {
      icon: BookOpen,
      title: "Aprendizaje Continuo",
      description: "La formación en seguridad debe ser constante y actualizada"
    }
  ];

  return (
    <section id="conclusion" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Conclusión
            </h2>
            <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
          </div>

          <Card className="shadow-card animate-scale-in mb-8">
            <CardContent className="p-8 text-center">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Cumplir las normas de bioseguridad <strong className="text-primary">no solo es un requisito académico</strong>, 
                sino una <strong className="text-success">responsabilidad personal y colectiva</strong>. 
                La prevención, la disciplina y el respeto por las reglas garantizan un ambiente 
                seguro para el aprendizaje y la investigación científica.
              </p>
              
              <div className="bg-gradient-lab/10 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  🏆 Comprométete con la Excelencia en Seguridad
                </h3>
                <p className="text-lg text-muted-foreground">
                  Cada protocolo seguido, cada norma respetada, cada precaución tomada 
                  contribuye a crear un entorno donde la ciencia puede florecer de manera segura.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <Card 
                key={point.title}
                className="group hover:shadow-glow transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-lab rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <Card className="mt-8 bg-primary/5 border-primary animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Juntos por un Laboratorio Más Seguro
              </h3>
              <p className="text-muted-foreground">
                Comparte este conocimiento, aplica estas normas y ayuda a crear 
                una cultura de seguridad que proteja a toda la comunidad científica.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}