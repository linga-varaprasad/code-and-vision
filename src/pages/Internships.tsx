import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface InternshipProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  delay?: number;
}

const InternshipCard = ({ 
  title, 
  company, 
  period, 
  location, 
  description,
  delay = 0 
}: InternshipProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
        <div>
          <h3 className="font-jacques text-xl mb-1 hover:text-accent transition-colors duration-300">{title}</h3>
          <h4 className="text-accent font-medium">{company}</h4>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <div className="flex items-center text-sm opacity-80 mb-1">
            <Calendar size={14} className="mr-1" />
            <span>{period}</span>
          </div>
          <div className="flex items-center text-sm opacity-80">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 mt-4">
        {description.map((item, index) => (
          <li key={index} className="opacity-80 flex items-start">
            <span className="text-accent mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Internships = () => {
  const internships = [
    {
      title: "Software Engineer Intern",
      company: "Hirademy Technologies",
      period: "Dec 2023 - Nov 2024",
      location: "Bengaluru, India",
      description: [
        "Contributed to web development projects, improving UI/UX and backend integration.",
        "Worked with React.js, Bootstrap, and AWS to build scalable applications.",
        "Enhanced knowledge of Agile methodologies and version control (Git & GitHub)."
      ],
      delay: 1
    },
    {
      title: "Data Science Intern",
      company: "Postulate Info Tech Private Limited",
      period: "May 2024 - June 2024",
      location: "Chennai, India",
      description: [
        "Developed an AI-powered chatbot for document scraping using NLP & Machine Learning.",
        "Integrated Sentence Transformers, LangChain, and ChromaDB for efficient large-scale data handling.",
        "Gained expertise in semantic search and AI-powered document retrieval."
      ],
      delay: 2
    },
    {
      title: "Cloud Engineer",
      company: "APSSDC (Andhra Pradesh State Skill Development Corporation)",
      period: "July 2023 - Oct 2023",
      location: "Andhra Pradesh, India",
      description: [
        "Led the 'Autoscaling on a Website' project, implementing AWS (EC2, RDS, Lambda) services.",
        "Worked on cloud infrastructure deployment and scalability optimization.",
        "Strengthened knowledge in cloud computing and DevOps principles."
      ],
      delay: 3
    },
    {
      title: "Data Science Intern",
      company: "LetsGrowMore",
      period: "May 2023",
      location: "Uttar Pradesh, India",
      description: [
        "Gained hands-on experience in Python-based data science projects.",
        "Focused on data analysis, machine learning algorithms, and visualization techniques.",
        "Worked with Pandas, NumPy, Matplotlib, and Scikit-Learn."
      ],
      delay: 4
    },
    {
      title: "Data Science Intern",
      company: "Tamil Nadu Skill Development Corporation",
      period: "April 2023 - May 2023",
      location: "Tamil Nadu, India",
      description: [
        "Completed a Data Science internship under the Naan Mudhalvan Scheme.",
        "Worked on real-world data science problems, implementing predictive modeling techniques.",
        "Utilized Python, Pandas, NumPy, and Matplotlib for data visualization and analytics."
      ],
      delay: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="Internships & Experience"
            subtitle="My professional journey and work experience"
          />
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {internships.map((internship, index) => (
              <InternshipCard 
                key={index}
                title={internship.title}
                company={internship.company}
                period={internship.period}
                location={internship.location}
                description={internship.description}
                delay={internship.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Internships;