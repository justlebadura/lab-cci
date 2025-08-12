import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import LegalSection from "@/components/sections/LegalSection";
import TableOfContentsSection from "@/components/sections/TableOfContentsSection";
import IntroSection from "@/components/sections/IntroSection";
import NormsSection from "@/components/sections/NormsSection";
import PictogramsSection from "@/components/sections/PictogramsSection";
import ProhibitedSection from "@/components/sections/ProhibitedSection";
import ConclusionSection from "@/components/sections/ConclusionSection";
import ReferencesSection from "@/components/sections/ReferencesSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Handle section click from sidebar or table of contents
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "legal", "toc", "intro", "norms", "pictograms", "prohibited", "conclusion", "references"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      {/* Main content with left margin for sidebar */}
      <div className="lg:ml-80">
        <HeroSection />
        <LegalSection />
        <TableOfContentsSection onSectionClick={handleSectionClick} />
        <IntroSection />
        <NormsSection />
        <PictogramsSection />
        <ProhibitedSection />
        <ConclusionSection />
        <ReferencesSection />
      </div>
    </div>
  );
};

export default Index;
