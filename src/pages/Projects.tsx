
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="My Projects"
            subtitle="Explore the various projects I've worked on"
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
            
            <ProjectCard 
              title="E-Commerce Dashboard"
              description="An admin dashboard for managing products, orders, and customers for an e-commerce platform."
              technologies={["React.js", "Redux", "Material UI", "Firebase"]}
              delay={5}
            />
            
            <ProjectCard 
              title="Blockchain Voting System"
              description="A secure voting system built on blockchain technology to ensure transparency and immutability."
              technologies={["Solidity", "Ethereum", "Web3.js", "React"]}
              delay={6}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
