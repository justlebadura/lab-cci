import { Card, CardContent } from "@/components/ui/card";
import { X, AlertTriangle } from "lucide-react";

export default function ProhibitedSection() {
  const prohibitedActions = [
    {
      title: "Comer, beber o fumar",
      description: "Nunca consumas alimentos o bebidas dentro del laboratorio",
      icon: "🚫",
      details: "Riesgo de contaminación cruzada y ingestión accidental de sustancias peligrosas"
    },
    {
      title: "Usar dispositivos electrónicos",
      description: "Solo con autorización previa del instructor",
      icon: "📱",
      details: "Pueden causar distracciones y interferir con equipos sensibles"
    },
    {
      title: "Experimentos no aprobados",
      description: "Solo realizar prácticas autorizadas y supervisadas",
      icon: "🧪",
      details: "Pueden generar reacciones peligrosas o inesperadas"
    },
    {
      title: "Dejar reactivos abiertos",
      description: "Siempre cerrar y etiquetar correctamente los recipientes",
      icon: "⚗️",
      details: "Evita derrames, contaminación y pérdida de propiedades químicas"
    }
  ];

  return (
    <section id="prohibited" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Procedimientos Prohibidos
            </h2>
            <div className="w-24 h-1 bg-gradient-caution mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground">
              Acciones que <strong className="text-destructive">NUNCA</strong> deben realizarse en el laboratorio
            </p>
          </div>

          {/* Warning banner */}
          <Card className="mb-8 border-l-4 border-l-destructive bg-destructive/5 animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <div>
                  <h3 className="text-lg font-semibold text-destructive">¡Atención!</h3>
                  <p className="text-foreground">
                    El incumplimiento de estas prohibiciones puede resultar en accidentes graves, 
                    daños al equipo o expulsión del laboratorio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {prohibitedActions.map((action, index) => (
              <Card 
                key={action.title}
                className="group hover:shadow-glow transition-all duration-300 border-l-4 border-l-destructive animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                        <span className="text-2xl">{action.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <X className="h-5 w-5 text-destructive" />
                        <h3 className="text-lg font-semibold text-foreground">
                          {action.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {action.description}
                      </p>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Motivo:</strong> {action.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional warning */}
          <Card className="mt-8 bg-warning/5 border-warning animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Recuerda: La Seguridad es Responsabilidad de Todos
              </h3>
              <p className="text-muted-foreground">
                Si observas a alguien realizando alguna de estas acciones prohibidas, 
                es tu deber informar inmediatamente al instructor o personal responsable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}