import { Badge } from "@/components/ui/badge";
import GeometricMesh from "@/components/backgrounds/GeometricMesh";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["Spring Boot", "React", "Node.js", "Express", "JUnit", "Mockito"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Lambda"]
    },
    {
      title: "Message Queues & Streaming",
      skills: ["Apache Kafka", "RabbitMQ", "Amazon SQS", "Amazon SNS"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Maven", "Gradle", "Postman", "IntelliJ IDEA", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <GeometricMesh variant="section" animated={true} />
      <div className="absolute inset-0 bg-background opacity-95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I use to build modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Technologies */}
          <div className="mt-16 text-center animate-fade-in-up">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Most Proficient In
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Java", "Spring Boot", "React", "AWS", "PostgreSQL", "Docker"].map((tech) => (
                <Badge 
                  key={tech}
                  className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary-hover transform hover:scale-110 transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;