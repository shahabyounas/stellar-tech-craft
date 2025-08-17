import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import webDevIcon from "@/assets/web-dev-icon.jpg";
import designIcon from "@/assets/design-icon.jpg";
import ecommerceIcon from "@/assets/ecommerce-icon.jpg";

const services = [
  {
    title: "Custom Website Development",
    description: "Full-stack web applications built with modern technologies like React, Node.js, and cutting-edge frameworks for optimal performance.",
    image: webDevIcon,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
  },
  {
    title: "UI/UX Design & Branding",
    description: "Beautiful, intuitive designs that convert visitors into customers. Complete branding solutions from concept to implementation.",
    image: designIcon,
    features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"]
  },
  {
    title: "E-commerce Solutions",
    description: "Scalable online stores with secure payment processing, inventory management, and conversion-optimized checkout flows.",
    image: ecommerceIcon,
    features: ["Payment Integration", "Inventory System", "Analytics", "Multi-Platform"]
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital strategies including SEO, social media marketing, and conversion optimization to grow your online presence.",
    image: webDevIcon,
    features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics"]
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support, security updates, performance optimization, and content management to keep your site running smoothly.",
    image: designIcon,
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Content Updates"]
  },
  {
    title: "Consulting & Strategy",
    description: "Expert guidance on technology choices, digital transformation, and growth strategies tailored to your business goals.",
    image: ecommerceIcon,
    features: ["Tech Consulting", "Growth Strategy", "Digital Transformation", "Expert Guidance"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end solutions that transform 
            your vision into powerful digital experiences.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card rounded-xl overflow-hidden border-0 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="hero-button text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-40 -translate-x-40" />
    </section>
  );
};