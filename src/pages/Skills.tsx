
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { Code, BarChart, Database, Braces, Lightbulb, Server } from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="My Skills"
            subtitle="Technologies and tools I work with"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              title="Programming Languages"
              skills={["Python", "SQL"]}
              icon={<Code size={24} />}
              delay={1}
            />
            
            <SkillCard 
              title="Web Technologies"
              skills={["HTML", "CSS", "JavaScript", "React.js"]}
              icon={<Server size={24} />}
              delay={2}
            />
            
            <SkillCard 
              title="Frameworks"
              skills={["Django", "React.js"]}
              icon={<Database size={24} />}
              delay={3}
            />
            
            <SkillCard 
              title="Cloud Technologies"
              skills={["AWS (EC2, RDS, Lambda)"]}
              icon={<Lightbulb size={24} />}
              delay={4}
            />
            
            <SkillCard 
              title="Databases"
              skills={["MySQL","PostgreSQL","SupaBase"]}
              icon={<Braces size={24} />}
              delay={5}
            />
            
            <SkillCard 
              title="AI & Machine Learning"
              skills={["Generative AI", "Data Analysis", "AI Security", "Version Control: Git, GitHub"]}
              icon={<BarChart size={24} />}
              delay={6}
            />
          </div>
          
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-jacques text-2xl mb-6 text-center">Professional Development</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Continuous Learning</h4>
                  <p>I'm committed to staying updated with the latest technologies and best practices through online courses, workshops, and communities.</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Problem-Solving Approach</h4>
                  <p>I approach challenges systematically, breaking down complex problems into manageable parts and developing efficient solutions.</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Collaboration</h4>
                  <p>I thrive in collaborative environments, working effectively with designers, product managers, and fellow developers to create cohesive products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Skills;
