import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Mock project data - in a real app, this would come from an API or context
  const projects = {
    "1": {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with modern web technologies, featuring a responsive design, secure payment processing, and real-time inventory management.",
      longDescription: "This project was developed to showcase a complete e-commerce experience with both customer-facing and administrative functionalities. The platform includes user authentication, product catalog management, shopping cart functionality, order processing, and payment integration with Stripe. The backend features RESTful APIs, database optimization, and robust security measures.",
      image: project1Image,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express", "JWT", "Cloudinary"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      duration: "3 months",
      role: "Full Stack Developer",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order tracking and management",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
        "Email notifications for orders"
      ],
      challenges: [
        "Implementing real-time inventory updates",
        "Optimizing database queries for large product catalogs",
        "Ensuring secure payment processing",
        "Creating a seamless user experience across devices"
      ]
    },
    "2": {
      title: "Task Management App",
      description: "A collaborative task management application designed for teams, featuring real-time updates, file sharing, and comprehensive project tracking capabilities.",
      longDescription: "This application was created to address the need for better team collaboration and project management. It features real-time synchronization, allowing team members to see updates instantly. The app includes project creation, task assignment, progress tracking, file sharing, and team communication features. Built with a focus on user experience and performance.",
      image: project2Image,
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL", "Redis", "AWS S3", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      duration: "4 months",
      role: "Frontend Lead",
      features: [
        "Real-time task updates with WebSocket",
        "Project and task organization",
        "Team collaboration tools",
        "File upload and sharing",
        "Progress tracking and reporting",
        "Calendar integration",
        "Mobile-responsive design",
        "Notification system"
      ],
      challenges: [
        "Implementing real-time synchronization",
        "Managing complex state across components",
        "Optimizing performance for large datasets",
        "Creating intuitive drag-and-drop interfaces"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-portfolio-black mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-portfolio-gray hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="fade-in">
              <h1 className="text-4xl font-bold text-portfolio-black mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-portfolio-gray mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="bg-primary hover:bg-primary/90 text-portfolio-black">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    View Code
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold text-portfolio-black">Duration</p>
                    <p className="text-portfolio-gray">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold text-portfolio-black">Role</p>
                    <p className="text-portfolio-gray">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-up">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="fade-in">
                <h2 className="text-3xl font-bold text-portfolio-black mb-6">Overview</h2>
                <p className="text-portfolio-gray leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              
              {/* Features */}
              <div className="slide-up">
                <h2 className="text-3xl font-bold text-portfolio-black mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-portfolio-gray">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Challenges */}
              <div className="fade-in">
                <h2 className="text-3xl font-bold text-portfolio-black mb-6">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index} className="p-6 border-l-4 border-l-primary">
                      <p className="text-portfolio-gray">{challenge}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="p-6 slide-up">
                <h3 className="text-xl font-bold text-portfolio-black mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-portfolio-black">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 fade-in">
                <h3 className="text-xl font-bold text-portfolio-black mb-4">Project Links</h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      Source Code
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;