import { useState } from "react";
import { Menu, X, Download, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const sections = [
  { id: "hero", label: "Portada" },
  { id: "legal", label: "Información Legal" },
  { id: "toc", label: "Contenido" },
  { id: "intro", label: "Introducción" },
  { id: "norms", label: "Normas Esenciales" },
  { id: "pictograms", label: "Pictogramas" },
  { id: "prohibited", label: "Procedimientos Prohibidos" },
  { id: "conclusion", label: "Conclusión" },
  { id: "references", label: "Referencias" }
];

export default function Sidebar({ activeSection, onSectionClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  const handleDownloadPDF = () => {
    // Placeholder for PDF download functionality
    console.log("Downloading PDF...");
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-card border-r border-border shadow-lab transform transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}>
        
        {/* Header */}
        <div className="p-6 border-b border-border bg-gradient-lab">
          <h2 className="text-xl font-bold text-white">Bioseguridad</h2>
          <p className="text-sm text-white/80 mt-1">Guía Interactiva</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:bg-accent ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
          <div className="space-y-2">
            <Button 
              onClick={handleDownloadPDF}
              className="w-full bg-gradient-lab hover:opacity-90"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar PDF
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <QrCode className="h-4 w-4 mr-2" />
              Mostrar QR
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}