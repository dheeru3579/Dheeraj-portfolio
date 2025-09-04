import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, Bell, FileText } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Timesheet & Billing Automation",
      description: "Comprehensive web application for managing employee timesheets and automated billing processes. Features real-time tracking, approval workflows, and detailed reporting with role-based access control.",
      icon: Clock,
      techStack: ["Java", "Spring Boot", "React", "MySQL", "AWS Lambda", "Docker"],
      features: [
        "Real-time timesheet tracking and validation",
        "Automated billing calculation and invoicing", 
        "Role-based access control and approval workflows",
        "Comprehensive reporting and analytics dashboard"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Serverless Notifications System", 
      description: "Scalable notification service built on AWS serverless architecture. Handles multi-channel notifications (email, SMS, push) with intelligent routing and delivery tracking.",
      icon: Bell,
      techStack: ["Node.js", "AWS Lambda", "DynamoDB", "SQS", "SNS", "API Gateway"],
      features: [
        "Multi-channel notification delivery (Email, SMS, Push)",
        "Intelligent message routing and prioritization",
        "Real-time delivery tracking and analytics",
        "Auto-scaling based on message volume"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "PDF Export Service",
      description: "High-performance microservice for generating complex PDF reports from structured data. Supports templates, charts, and bulk processing with caching for optimal performance.",
      icon: FileText,
      techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
      features: [
        "Template-based PDF generation with custom styling",
        "Bulk processing with asynchronous job handling",
        "Intelligent caching for improved performance",
        "RESTful API with comprehensive documentation"
      ],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of applications I've built, demonstrating my expertise in full-stack development and cloud architecture
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
                    {/* Project Icon & Title */}
                    <div className="flex items-center mb-4">
                      <div className="bg-accent/10 p-3 rounded-lg mr-4">
                        <project.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="group">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="group">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Visual/Mockup */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
                  <div className="bg-primary/5 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <project.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-primary mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">Project Screenshot/Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;