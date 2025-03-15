
interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position,
  delay = 0 
}: TestimonialCardProps) => {
  return (
    <div 
      className="glass rounded-xl p-6 animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="mb-4">
        <svg 
          className="h-8 w-8 text-accent opacity-50" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="italic mb-4">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        {position && <p className="text-sm opacity-70">{position}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
