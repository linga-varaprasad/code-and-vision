
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
              title="Fitplano AI Website"
              description="Developed an AI-based fitness plan generator using React.js and AWS for hosting and scaling. Integrated real-time personalized recommendations for enhanced user experience."
              technologies={["React.js"]}
              delay={1}
            />
            
            <ProjectCard 
              title="Data Poisoning Detection Tool"
              description="Designed and built a Python-based AI security tool to prevent data poisoning attacks in machine learning models. Used Streamlit for continuous dataset monitoring, anomaly detection, and visualization."
              technologies={["Python", "Streamlit"]}
              delay={2}
            />
            
            <ProjectCard 
              title="AI-powered Healthcare Chatbot"
              description="Developed a chatbot using Groq AI to provide real-time, empathetic healthcare assistance. Built an interactive UI with Streamlit and implemented features like health tips and emergency contacts."
              technologies={["Groq AI", "Streamlit", "Healthcare"]}
              delay={3}
            />
            
            {/* <ProjectCard 
              title="FitPlanoAI"
              description="AI-generated fitness and diet plans with chatbot support to help users maintain their health goals."
              technologies={["React.js", "OpenAI", "MongoDB", "Express"]}
              delay={4}
            /> */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
