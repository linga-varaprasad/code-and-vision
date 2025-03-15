
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  delay?: number;
}

const SkillCard = ({ title, skills, icon, delay = 0 }: SkillCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-accent">{icon}</div>
        <h3 className="font-jacques text-xl">{title}</h3>
      </div>
      <ul className="space-y-2 opacity-80">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
