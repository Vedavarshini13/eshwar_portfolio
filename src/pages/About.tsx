import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead frontend development team, architecting scalable React applications and mentoring junior developers.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed full-stack web applications using modern technologies and agile methodologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Contributed to UI/UX improvements and implemented responsive design patterns.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js"]
    }
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Vue.js", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "Tailwind CSS", "SASS", "Git", "Docker",
    "AWS", "Figma", "Adobe Creative Suite"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-5xl font-bold text-portfolio-black mb-6">
                About Me
              </h1>
              <p className="text-xl text-portfolio-gray mb-6">
                I'm a passionate developer with over 4 years of experience creating 
                digital solutions that combine beautiful design with powerful functionality.
              </p>
              <p className="text-portfolio-gray mb-8">
                My journey began with a curiosity about how websites work, which evolved 
                into a deep love for creating seamless user experiences. I specialize in 
                frontend development but also have strong backend skills, allowing me to 
                build complete, end-to-end solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 8).map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-portfolio-black">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="slide-up">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="About me"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-portfolio-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              Experience & Internships
            </h2>
            <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover-lift border-0 shadow-lg slide-up">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-portfolio-black mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-portfolio-gray mb-4">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-portfolio-gray mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 slide-up">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-primary/10 text-portfolio-black text-lg py-2 px-4 hover-lift"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;