import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-2xl gradient-text">
            TechFlow
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hero-button px-6 py-2 rounded-lg font-semibold"
            >
              Get Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground mt-1 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground mt-1 transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full glass-card border-b border-primary/20">
            <div className="container mx-auto px-6 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full hero-button py-3 rounded-lg font-semibold"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};