import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="fade-in">
        <h3 className="text-2xl font-bold text-portfolio-black mb-6">
          Get In Touch
        </h3>
        <p className="text-portfolio-gray mb-8">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-portfolio-black">Email</h4>
              <p className="text-portfolio-gray">contact@example.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-portfolio-black">Phone</h4>
              <p className="text-portfolio-gray">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-portfolio-black">Location</h4>
              <p className="text-portfolio-gray">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-up">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-portfolio-gray/30 focus:border-primary"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-portfolio-gray/30 focus:border-primary"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border-portfolio-gray/30 focus:border-primary resize-none"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-portfolio-black font-semibold"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;