import { MapPin, Calendar, Building2, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "OVS Technologies",
      position: "Full-Stack Developer",
      location: "Remote",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      achievements: [
        "Developed and maintained 15+ RESTful APIs using Spring Boot, serving 10,000+ daily requests with 99.9% uptime",
        "Built responsive React applications with TypeScript, improving user engagement by 40%",
        "Implemented microservices architecture reducing system response time by 35%",
        "Integrated Apache Kafka for real-time data streaming, processing 50,000+ messages daily",
        "Optimized database queries resulting in 50% faster data retrieval from PostgreSQL databases",
        "Collaborated with cross-functional teams in Agile environment, delivering features 20% ahead of schedule"
      ]
    },
    {
      company: "Virtusa Consulting",
      position: "Software Engineer",
      location: "Hyderabad, India",
      duration: "Jun 2021 - Dec 2022", 
      type: "Full-time",
      achievements: [
        "Designed and implemented scalable web applications using Java and Spring Framework",
        "Developed automated testing suites using JUnit and Mockito, achieving 90%+ code coverage",
        "Built CI/CD pipelines using Jenkins, reducing deployment time from hours to minutes",
        "Worked on cloud migration projects, moving legacy applications to AWS infrastructure",
        "Mentored 3 junior developers on best coding practices and technical standards",
        "Participated in code reviews and technical design discussions, improving overall code quality"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Building scalable solutions and driving technical excellence across diverse projects
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-accent/30"></div>

            {experiences.map((experience, index) => (
              <div 
                key={experience.company}
                className={`relative mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:ml-8 md:pl-8' : 'md:mr-8 md:pr-8 md:text-right'
                } ml-12 pl-8`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-1.75rem] md:left-auto md:right-[-1.75rem] top-6 w-3 h-3 bg-accent rounded-full border-4 border-background shadow-sm"></div>
                <div className="absolute left-[-1.25rem] md:left-auto md:right-[-1.25rem] top-7 w-2 h-2 bg-background rounded-full"></div>

                {/* Experience Card */}
                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Building2 className="h-5 w-5 text-accent mr-2" />
                      <h3 className="text-xl font-bold text-primary">{experience.company}</h3>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {experience.position}
                    </h4>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {experience.type}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex} 
                          className="flex items-start animate-slide-in-right"
                          style={{ animationDelay: `${(index * 300) + (achievementIndex * 100)}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection;