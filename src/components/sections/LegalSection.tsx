import { Card, CardContent } from "@/components/ui/card";
import { Building } from "lucide-react";

export default function LegalSection() {
  return (
    <section id="legal" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Información Institucional
            </h2>
            <div className="w-24 h-1 bg-gradient-lab mx-auto rounded-full mb-8" />
          </div>

          <Card className="shadow-card animate-scale-in">
            <CardContent className="p-8">
              <div className="flex justify-center">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-lab rounded-full flex items-center justify-center">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Institución</h3>
                    <p className="text-muted-foreground">
                      Colegio Colombo Inglés<br />
                      Departamento de Laboratorios
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}