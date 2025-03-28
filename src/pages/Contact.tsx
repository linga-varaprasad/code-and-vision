
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="Contact Me"
            subtitle="Get in touch for collaborations or inquiries"
          />
          
          <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-jacques text-2xl mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-4 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a 
                        href="mailto:lingavaraprasad8033@gmail.com" 
                        className="hover:text-accent transition-colors duration-300"
                      >
                        lingavaraprasad8033@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a 
                        href="tel:+91XXXXXXXXXX" 
                        className="hover:text-accent transition-colors duration-300"
                      >
                        +91 XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p>Kurnool, Andhra Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="mr-4 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">LinkedIn</h4>
                      <a 
                        href="https://linkedin.com/in/linga-vara-prasad-mangali-b8b117245" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors duration-300"
                      >
                        linkedin.com/in/linga-vara-prasad-mangali-b8b117245
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="mr-4 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/linga-varaprasad" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors duration-300"
                      >
                        github.com/linga-varaprasad
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-jacques text-2xl mb-8">Send a Message</h3>
                
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
