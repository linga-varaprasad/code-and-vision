
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  delay?: number;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  slug,
  delay = 0 
}: BlogCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <Link to={`/blog/${slug}`}>
        <h3 className="font-jacques text-xl mb-3 hover:text-accent transition-colors duration-300">{title}</h3>
      </Link>
      <div className="flex items-center text-sm opacity-70 mb-3">
        <CalendarDays size={14} className="mr-1" />
        <span>{date}</span>
      </div>
      <p className="opacity-80 mb-4">{excerpt}</p>
      <Link 
        to={`/blog/${slug}`}
        className="text-accent hover:underline transition-all duration-300"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
