
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import AchievementCard from "@/components/AchievementCard";
import { Code, BarChart, Database, Braces, Lightbulb, Server } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container-custom">
          <div 
            className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
            style={{
              backgroundImage: "url('/lovable-uploads/487716e6-dfe3-48a4-9019-a2bb4d569ae2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="text-center mb-8">
              <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h1 className="heading-primary mb-4 text-shadow-lg">
                  Mangali Linga Vara Prasad
                </h1>
                <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto animate-fade-in text-shadow-sm" style={{animationDelay: '0.6s'}}>
                  Full Stack Developer, AI Enthusiast, and Blockchain Explorer
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <Link to="#about" className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <span className="mb-2 text-shadow-sm">Scroll Down</span>
                <ArrowDown className="animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="About Me"
            subtitle="I build innovative solutions that solve real-world problems"
          />
          
          <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-in-up">
            <p className="mb-6 leading-relaxed">
              I am a skilled <strong>Full Stack Developer</strong> with expertise in <strong>React.js, Django, MongoDB, PostgreSQL, and AI-driven applications</strong>. I have worked on projects like <strong>ShareApp</strong> (a story-sharing platform), a voice-based AI payment system, and AI-powered chatbots.
            </p>
            <p className="mb-6 leading-relaxed">
              My goal is to build impactful tech solutions that solve real-world problems. I'm passionate about creating clean, efficient code and designing intuitive user experiences that make complex technologies accessible to everyone.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing my knowledge through blogs and tutorials.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary">Download Resume</a>
              <Link to="/contact" className="btn-outline">Contact Me</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Projects"
            subtitle="Here are some of the projects I've worked on"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="ShareApp"
              description="A platform for sharing real-life stories and reviews with a focus on community engagement and user experience."
              technologies={["React.js", "Django", "PostgreSQL"]}
              delay={1}
            />
            
            <ProjectCard 
              title="VoisePay"
              description="A secure voice-based AI payment system supporting Indian regional languages for improved accessibility."
              technologies={["Python", "TensorFlow", "Node.js", "Express"]}
              delay={2}
            />
            
            <ProjectCard 
              title="FitPlanoAI"
              description="AI-generated fitness and diet plans with chatbot support to help users maintain their health goals."
              technologies={["React.js", "OpenAI", "MongoDB", "Express"]}
              delay={3}
            />
            
            <ProjectCard 
              title="AI Prompt Generator"
              description="A tool to create optimized AI prompts for various applications and use cases."
              technologies={["TypeScript", "Next.js", "Tailwind CSS"]}
              delay={4}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="My Skills"
            subtitle="Technologies and tools I work with"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              title="Frontend"
              skills={["React.js", "Vite", "Bootstrap", "Tailwind CSS"]}
              icon={<Code size={24} />}
              delay={1}
            />
            
            <SkillCard 
              title="Backend"
              skills={["Django", "Node.js", "Express", "RESTful APIs"]}
              icon={<Server size={24} />}
              delay={2}
            />
            
            <SkillCard 
              title="Databases"
              skills={["PostgreSQL", "MongoDB", "MySQL", "SQLite"]}
              icon={<Database size={24} />}
              delay={3}
            />
            
            <SkillCard 
              title="AI & ML"
              skills={["Chatbots", "NLP", "Prompt Engineering", "TensorFlow"]}
              icon={<Lightbulb size={24} />}
              delay={4}
            />
            
            <SkillCard 
              title="Blockchain"
              skills={["Smart Contracts", "Web3.js", "Ethereum", "Solidity"]}
              icon={<Braces size={24} />}
              delay={5}
            />
            
            <SkillCard 
              title="DevOps"
              skills={["Docker", "Git", "CI/CD", "AWS"]}
              icon={<BarChart size={24} />}
              delay={6}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Testimonials"
            subtitle="What people say about my work"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="Prasad is an innovative developer with a deep understanding of AI and web technologies. His ability to troubleshoot and optimize performance is remarkable!"
              author="Colleague Name"
              position="Senior Developer"
              delay={1}
            />
            
            <TestimonialCard 
              quote="Working with Prasad on our AI project was a great experience. He brings both technical expertise and creative problem-solving to the table."
              author="Client Name"
              position="Project Manager"
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Blog"
            subtitle="My thoughts and insights on technology"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              title="How I Built a Secure AI-Powered Payment System"
              excerpt="Learn about the challenges and solutions in creating a voice-based payment system that works with multiple languages."
              date="May 15, 2023"
              slug="ai-payment-system"
              delay={1}
            />
            
            <BlogCard 
              title="The Future of AI in Fitness Planning"
              excerpt="Exploring how artificial intelligence is transforming personal fitness and nutrition planning."
              date="April 3, 2023"
              slug="ai-fitness-planning"
              delay={2}
            />
            
            <BlogCard 
              title="Full Stack Development: Choosing the Right Tech Stack"
              excerpt="A comprehensive guide to selecting the optimal technologies for your next web development project."
              date="March 22, 2023"
              slug="choosing-tech-stack"
              delay={3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-outline">Read All Posts</Link>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Achievements"
            subtitle="Milestones in my professional journey"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard 
              achievement="Built AI-powered chatbot for a fashion-related business"
              delay={1}
            />
            
            <AchievementCard 
              achievement="Led a team for ShareApp, mentoring two interns"
              delay={2}
            />
            
            <AchievementCard 
              achievement="Cracked multiple full-stack development interviews"
              delay={3}
            />
            
            <AchievementCard 
              achievement="Expertise in integrating AI with React and Django"
              delay={4}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Get In Touch"
            subtitle="Let's discuss your project or opportunity"
          />
          
          <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-jacques text-2xl mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="font-bold mr-2">Email:</span>
                    <a href="mailto:your-email@example.com" className="hover:text-accent transition-colors duration-300">
                      your-email@example.com
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold mr-2">Phone:</span>
                    <a href="tel:+91XXXXXXXXXX" className="hover:text-accent transition-colors duration-300">
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold mr-2">LinkedIn:</span>
                    <a href="https://linkedin.com/in/mangali-linga-vara-prasad" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                      linkedin.com/in/mangali-linga-vara-prasad
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-bold mr-2">GitHub:</span>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                      github.com/your-github
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-jacques text-2xl mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
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

export default Index;
