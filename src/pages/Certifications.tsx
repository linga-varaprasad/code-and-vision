import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

interface CertificationProps {
  title: string;
  organization: string;
  description: string[];
  link: string;
  delay?: number;
}

const CertificationCard = ({ 
  title, 
  organization, 
  description, 
  link,
  delay = 0 
}: CertificationProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <h3 className="font-jacques text-xl mb-2 hover:text-accent transition-colors duration-300">{title}</h3>
      <h4 className="text-accent font-medium mb-3">{organization}</h4>
      <ul className="space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="opacity-80">{item}</li>
        ))}
      </ul>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline transition-all duration-300 inline-flex items-center"
      >
        View Certificate
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "SuperhumanAI",
      organization: "SuperhumanAI",
      description: [
        "Focused on AI-driven innovations and machine learning applications.",
        "Explored advanced AI concepts for automation and optimization."
      ],
      link: "#", // Replace with actual certificate link
      delay: 1
    },
    {
      title: "Database Fundamentals: Database Concepts",
      organization: "Database Certification Provider", // Replace with actual provider
      description: [
        "Covered relational databases, SQL queries, and data management best practices.",
        "Strengthened knowledge of MySQL and database structuring."
      ],
      link: "#", // Replace with actual certificate link
      delay: 2
    },
    {
      title: "Unlock Your Own Creative Genius",
      organization: "Creative Learning Platform", // Replace with actual provider
      description: [
        "Developed creative thinking, problem-solving, and innovation skills.",
        "Applied design thinking methodologies to real-world scenarios."
      ],
      link: "#", // Replace with actual certificate link
      delay: 3
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="My Certifications"
            subtitle="Professional qualifications and learning achievements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard 
                key={index}
                title={cert.title}
                organization={cert.organization}
                description={cert.description}
                link={cert.link}
                delay={cert.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Certifications;