import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl font-bold text-portfolio-black mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-portfolio-gray max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-portfolio-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-portfolio-black mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-xl text-portfolio-gray">
              Find me on these platforms or reach out directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover-lift border-0 shadow-lg slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-portfolio-black mb-2">Email</h3>
              <p className="text-portfolio-gray mb-4">Direct contact</p>
              <a
                href="mailto:contact@example.com"
                className="text-primary hover:underline font-semibold"
              >
                contact@example.com
              </a>
            </Card>
            
            <Card className="p-8 text-center hover-lift border-0 shadow-lg slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-portfolio-black mb-2">LinkedIn</h3>
              <p className="text-portfolio-gray mb-4">Professional network</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Connect with me
              </a>
            </Card>
            
            <Card className="p-8 text-center hover-lift border-0 shadow-lg slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Github size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-portfolio-black mb-2">GitHub</h3>
              <p className="text-portfolio-gray mb-4">Code repositories</p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                View my work
              </a>
            </Card>
            
            <Card className="p-8 text-center hover-lift border-0 shadow-lg slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-portfolio-black mb-2">Location</h3>
              <p className="text-portfolio-gray mb-4">Based in</p>
              <p className="text-primary font-semibold">San Francisco, CA</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-portfolio-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm always excited 
              to take on new challenges and create something amazing.
            </p>
            <a href="mailto:contact@example.com">
              <button className="bg-primary hover:bg-primary/90 text-portfolio-black font-semibold px-8 py-4 rounded-lg transition-colors">
                Start a Conversation
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;