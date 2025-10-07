import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-portfolio-black">
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-portfolio-gray"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-portfolio-gray"
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`transition-colors hover:text-primary ${
                isActive("/projects") ? "text-primary" : "text-portfolio-gray"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-portfolio-gray"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-portfolio-gray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-portfolio-gray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`transition-colors hover:text-primary ${
                  isActive("/projects") ? "text-primary" : "text-portfolio-gray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-portfolio-gray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;