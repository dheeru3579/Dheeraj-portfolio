import { Code, Cloud, Database, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in building end-to-end web applications with modern frameworks"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Proficient in designing and deploying scalable cloud solutions on AWS"
    },
    {
      icon: Database,
      title: "Data Management", 
      description: "Experience with relational and NoSQL databases, data modeling and optimization"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong experience working in agile environments and cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="animate-fade-in-up">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                I'm a passionate Full-Stack Developer and Cloud Engineer with over 3 years of experience 
                building robust, scalable applications. I specialize in Java ecosystem technologies, 
                modern web frameworks, and cloud-native solutions.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                My expertise spans across the entire development lifecycle, from designing system 
                architecture and developing APIs to creating responsive user interfaces and deploying 
                applications on cloud platforms.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I'm driven by the challenge of solving complex problems and delivering high-quality 
                software solutions that make a real impact.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;