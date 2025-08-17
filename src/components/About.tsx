import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  { number: "5+", label: "Years Experience" },
  { number: "150+", label: "Successful Projects" },
  { number: "50+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" }
];

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
  },
  {
    title: "Quality Focused",
    description: "Every project undergoes rigorous testing and optimization to ensure exceptional performance and user experience."
  },
  {
    title: "Client Partnership", 
    description: "We work closely with you throughout the entire process, ensuring your vision is perfectly realized."
  },
  {
    title: "Results Driven",
    description: "Our success is measured by your success. We focus on delivering measurable business outcomes."
  }
];

export const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">TechFlow</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just developers – we're digital transformation partners. 
              Our team combines technical expertise with creative vision to build 
              solutions that drive real business results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Team</h4>
                  <p className="text-muted-foreground">Skilled developers, designers, and strategists with proven track records.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Modern Technology</h4>
                  <p className="text-muted-foreground">Latest frameworks, tools, and best practices for scalable solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Ongoing Support</h4>
                  <p className="text-muted-foreground">Comprehensive maintenance and support long after project completion.</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="hero-button text-lg px-8 py-6 rounded-xl font-semibold"
            >
              Start Your Project
            </Button>
          </div>
          
          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {achievements.map((item, index) => (
              <Card key={index} className="service-card text-center p-6 border-0">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {item.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and ensure exceptional results for every client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="service-card p-6 text-center border-0 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-48 translate-y-48" />
    </section>
  );
};