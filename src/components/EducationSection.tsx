import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = {
    degree: "Master of Science in Computer Science",
    university: "Lamar University",
    location: "Beaumont, Texas",
    graduationDate: "May 2024",
    gpa: "3.8/4.0",
    coursework: [
      "Advanced Algorithms & Data Structures",
      "Software Engineering Principles", 
      "Database Management Systems",
      "Computer Networks & Security",
      "Cloud Computing Architecture",
      "Machine Learning Fundamentals"
    ]
  };

  const certifications = [
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023",
      skills: ["Cloud Architecture", "Security", "Scalability", "Cost Optimization"]
    },
    {
      title: "AWS Developer Associate", 
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-DVA-2023",
      skills: ["Lambda", "API Gateway", "DynamoDB", "CloudFormation"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="animate-fade-in-up">
              <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Education</h3>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {education.degree}
                </h4>
                <div className="text-md text-muted-foreground mb-2">
                  {education.university} • {education.location}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Graduation: {education.graduationDate} | GPA: {education.gpa}
                </div>
                <div className="mt-4">
                  <div className="font-semibold text-sm mb-2">Relevant Coursework:</div>
                  <ul className="list-disc list-inside text-sm text-foreground/80">
                    {education.coursework.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-fade-in-up">
              <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Certifications</h3>
                </div>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert.title}
                      className="border-l-4 border-accent pl-4 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <h4 className="font-semibold text-foreground mb-2">
                        {cert.title}
                      </h4>
                      <div className="text-sm text-muted-foreground mb-3">
                        <div>{cert.issuer} • {cert.date}</div>
                        <div className="text-xs mt-1">
                          Credential ID: {cert.credentialId}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="text-xs bg-accent/10 text-accent"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;