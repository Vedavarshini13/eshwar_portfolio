import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap, Calendar, Building, GraduationCap, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-image.jpg";
import pythonLogo from "@/assets/skills/python.png";
import reactLogo from "@/assets/skills/react.png";
import javascriptLogo from "@/assets/skills/javascript.png";
import nodejsLogo from "@/assets/skills/nodejs.png";
import typescriptLogo from "@/assets/skills/typescript.png";
import mongodbLogo from "@/assets/skills/mongodb.png";

const Home = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading frontend development team, architecting scalable React applications.",
      type: "work"
    },
    {
      title: "Master's in Computer Science",
      company: "University of Technology",
      period: "2020 - 2022",
      description: "Specialized in web development and software engineering.",
      type: "education"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed full-stack web applications using modern technologies.",
      type: "work"
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Contributed to UI/UX improvements and responsive design.",
      type: "internship"
    },
    {
      title: "Bachelor's in Software Engineering",
      company: "Tech University",
      period: "2016 - 2020",
      description: "Foundation in computer science and software development principles.",
      type: "education"
    }
  ];

  const skills = [
    { name: "Python", logo: pythonLogo, level: "Advanced" },
    { name: "React", logo: reactLogo, level: "Expert" },
    { name: "JavaScript", logo: javascriptLogo, level: "Expert" },
    { name: "Node.js", logo: nodejsLogo, level: "Advanced" },
    { name: "TypeScript", logo: typescriptLogo, level: "Advanced" },
    { name: "MongoDB", logo: mongodbLogo, level: "Intermediate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-portfolio-black mb-6">
              Hello, I'm{" "}
              <span className="text-gradient">Eshwar</span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-gray mb-8 max-w-3xl mx-auto">
              Creating beautiful, functional, and user-centered digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button className="bg-primary hover:bg-primary/90 text-portfolio-black font-semibold px-8 py-3">
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-portfolio-black text-portfolio-black hover:bg-portfolio-black hover:text-white px-8 py-3">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-portfolio-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              What I Do
            </h2>
            <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
              I specialize in creating comprehensive digital solutions that drive results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-lift border-0 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-portfolio-black mb-4">
                Web Development
              </h3>
              <p className="text-portfolio-gray">
                Building responsive and performant web applications using modern technologies
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-lift border-0 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-portfolio-black mb-4">
                UI/UX Design
              </h3>
              <p className="text-portfolio-gray">
                Designing intuitive and engaging user interfaces that enhance user experience
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-lift border-0 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-portfolio-black mb-4">
                Performance
              </h3>
              <p className="text-portfolio-gray">
                Optimizing applications for speed, accessibility, and search engine visibility
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              Experience & Education
            </h2>
            <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item slide-up">
                <div className="timeline-content">
                  <div className="flex items-center gap-2 mb-3">
                    {exp.type === 'education' ? (
                      <GraduationCap size={20} className="text-primary" />
                    ) : (
                      <Building size={20} className="text-primary" />
                    )}
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      {exp.type === 'internship' ? 'Internship' : exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-black mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-portfolio-gray mb-3">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-portfolio-black font-semibold mb-2">{exp.company}</p>
                  <p className="text-portfolio-gray">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-portfolio-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <Card className="p-6 text-center border-0 shadow-lg bg-white">
                  <div className="w-16 h-16 mx-auto mb-4 skill-logo">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-portfolio-black mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-portfolio-gray">{skill.level}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-portfolio-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow me on social media for updates, insights, and behind-the-scenes content
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <Github size={28} className="text-primary group-hover:text-portfolio-black transition-colors" />
              </div>
              <p className="text-center mt-2 text-gray-300 group-hover:text-primary transition-colors">GitHub</p>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <Linkedin size={28} className="text-primary group-hover:text-portfolio-black transition-colors" />
              </div>
              <p className="text-center mt-2 text-gray-300 group-hover:text-primary transition-colors">LinkedIn</p>
            </a>
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <Twitter size={28} className="text-primary group-hover:text-portfolio-black transition-colors" />
              </div>
              <p className="text-center mt-2 text-gray-300 group-hover:text-primary transition-colors">Twitter</p>
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <Instagram size={28} className="text-primary group-hover:text-portfolio-black transition-colors" />
              </div>
              <p className="text-center mt-2 text-gray-300 group-hover:text-primary transition-colors">Instagram</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;