export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-primary/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="font-bold text-2xl gradient-text mb-4">
              TechFlow
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-4">
              Transforming businesses with premium website development, design, 
              and digital solutions. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold">in</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">Web Development</div>
              <div className="text-muted-foreground">UI/UX Design</div>
              <div className="text-muted-foreground">E-commerce</div>
              <div className="text-muted-foreground">Digital Marketing</div>
              <div className="text-muted-foreground">Maintenance</div>
              <div className="text-muted-foreground">Consulting</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 TechFlow. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};