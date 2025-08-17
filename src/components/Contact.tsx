import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Get in touch for a free consultation and custom quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="service-card border-0 p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
            </CardHeader>
            
            <CardContent className="p-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input className="glass-card border-primary/20" placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input className="glass-card border-primary/20" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email" 
                  className="glass-card border-primary/20" 
                  placeholder="john@example.com" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input 
                  type="tel" 
                  className="glass-card border-primary/20" 
                  placeholder="+1 (555) 123-4567" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Service Needed</label>
                <select className="w-full p-3 rounded-lg glass-card border border-primary/20 bg-transparent text-foreground">
                  <option value="">Select a service</option>
                  <option value="web-dev">Website Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Details</label>
                <Textarea 
                  className="glass-card border-primary/20 min-h-[120px]" 
                  placeholder="Tell us about your project, goals, timeline, and budget..."
                />
              </div>
              
              <Button 
                className="w-full hero-button text-lg py-6 rounded-xl font-semibold"
                size="lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="service-card border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">📧</span>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">hello@nskeliteservices.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">📞</span>
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">⏰</span>
                    </div>
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-muted-foreground">Mon - Fri: 9AM - 6PM EST</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Process */}
            <Card className="service-card border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Our Process</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-primary-foreground font-bold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Consultation</div>
                      <div className="text-sm text-muted-foreground">Free 30-minute discovery call</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-primary-foreground font-bold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Proposal</div>
                      <div className="text-sm text-muted-foreground">Custom quote within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-primary-foreground font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Development</div>
                      <div className="text-sm text-muted-foreground">Agile development with regular updates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-primary-foreground font-bold text-sm">
                      4
                    </div>
                    <div>
                      <div className="font-medium">Launch</div>
                      <div className="text-sm text-muted-foreground">Testing, deployment & ongoing support</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-48" />
    </section>
  );
};