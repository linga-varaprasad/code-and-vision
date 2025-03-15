
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="About Me"
            subtitle="Learn more about my background, skills, and experiences"
          />
          
          <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto animate-fade-in-up">
            <div className="space-y-6">
              <p className="leading-relaxed">
                I am a skilled <strong>Full Stack Developer</strong> with expertise in <strong>React.js, Django, MongoDB, PostgreSQL, and AI-driven applications</strong>. I have worked on projects like <strong>ShareApp</strong> (a story-sharing platform), a voice-based AI payment system, and AI-powered chatbots.
              </p>
              
              <p className="leading-relaxed">
                My journey in software development began at [Your University/College], where I earned my degree in [Your Degree]. Since then, I've worked with various companies and clients to deliver high-quality software solutions that make a difference.
              </p>
              
              <p className="leading-relaxed">
                I'm particularly interested in artificial intelligence and its applications in everyday technology. My work often involves integrating AI services with web applications to create smarter, more intuitive user experiences.
              </p>
              
              <p className="leading-relaxed">
                Beyond coding, I enjoy [Your Hobbies/Interests] and am always open to connecting with fellow developers and technology enthusiasts.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="font-jacques text-2xl mb-4">My Journey</h3>
              
              <div className="space-y-6">
                <div className="glass bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-2">2021 - Present</h4>
                  <p className="font-medium">Full Stack Developer</p>
                  <p className="opacity-80">Company Name</p>
                  <p className="mt-2">Leading development of AI-powered web applications and mentoring junior developers.</p>
                </div>
                
                <div className="glass bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-2">2019 - 2021</h4>
                  <p className="font-medium">Frontend Developer</p>
                  <p className="opacity-80">Previous Company</p>
                  <p className="mt-2">Built responsive user interfaces using React.js and integrated with backend APIs.</p>
                </div>
                
                <div className="glass bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-2">2017 - 2019</h4>
                  <p className="font-medium">Junior Developer</p>
                  <p className="opacity-80">First Company</p>
                  <p className="mt-2">Started my career working on full-stack applications with Django and JavaScript.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a href="#" className="btn-primary">Download My Resume</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
