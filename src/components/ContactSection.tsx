import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import DotGrid from "@/components/backgrounds/DotGrid";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dheeraj.rangareddy@example.com",
      href: "mailto:dheeraj.rangareddy@example.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Houston, Texas",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dheeraj-rangareddy",
      href: "https://linkedin.com/in/dheeraj-rangareddy"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dheeraj-rangareddy", 
      href: "https://github.com/dheeraj-rangareddy"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <DotGrid size="lg" opacity={0.08} animated={true} />
      <div className="absolute inset-0 bg-gradient-subtle opacity-60" />
      <div className="absolute inset-0 bg-background opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
              Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-primary mb-8">Get in Touch</h3>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center p-4 rounded-lg hover:bg-card-hover transition-all duration-300 group animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {item.label}
                        </div>
                        <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Resume Download */}
                <div className="border-t border-border pt-8">
                  <Button 
                    className="w-full group"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-primary mb-8">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;