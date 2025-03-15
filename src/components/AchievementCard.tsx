
import { Trophy } from "lucide-react";

interface AchievementCardProps {
  achievement: string;
  delay?: number;
}

const AchievementCard = ({ achievement, delay = 0 }: AchievementCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-5 flex items-start animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <Trophy size={20} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
      <p className="text-shadow-sm">{achievement}</p>
    </div>
  );
};

export default AchievementCard;
