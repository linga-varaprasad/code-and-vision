
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 mt-20">
      <div className="container-custom">
        <div className="glass rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/lovable-uploads/60490dd5-b959-44ff-88f8-ddf57e9e2373.png"
                  alt="Logo"
                  className="h-10 w-auto"
                />
                <span className="font-jacques text-xl tracking-wider">Prasad</span>
              </div>
              <p className="font-kalam text-sm md:text-base opacity-80 text-center md:text-left">
                Full Stack Developer, AI Enthusiast, <br />and Blockchain Explorer
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3 className="font-jacques text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
                <Link to="/about" className="hover:text-accent transition-colors duration-300">About</Link>
                <Link to="/projects" className="hover:text-accent transition-colors duration-300">Projects</Link>
                <Link to="/skills" className="hover:text-accent transition-colors duration-300">Skills</Link>
                <Link to="/blog" className="hover:text-accent transition-colors duration-300">Blog</Link>
                <Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-jacques text-xl mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/linga-varaprasad" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/mangali-linga-vara-prasad" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:lingavaraprasad8033@gmail.com" className="hover:text-accent transition-colors duration-300" aria-label="Email">
                  <Mail size={20} />
                </a>
                {/* <a href="tel:+91XXXXXXXXXX" className="hover:text-accent transition-colors duration-300" aria-label="Phone">
                  <Phone size={20} />
                </a> */}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Mangali Linga Vara Prasad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
