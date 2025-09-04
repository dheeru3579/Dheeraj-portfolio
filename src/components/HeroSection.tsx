import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-foreground rounded-full animate-pulse-soft delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 border border-primary-foreground rounded-full animate-pulse-soft delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
              Dheeraj Rangareddy
            </span>
          </h1>
          
          {/* Job Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/90 mb-8">
            Full-Stack Developer & Cloud Engineer
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            I design and build scalable applications using Java, Spring Boot, React, and AWS
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <Button 
              variant="hero"
              size="lg"
              onClick={() => window.open('#', '_blank')}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Resume
            </Button>
            
            <Button 
              variant="heroSecondary"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              <ExternalLink className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Explore Projects
            </Button>
            
            <Button 
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-primary-foreground/20 rounded-full relative">
            <div className="w-1 h-8 bg-accent rounded-full animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;