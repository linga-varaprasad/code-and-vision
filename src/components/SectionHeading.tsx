
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center',
  children 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="heading-secondary mb-2 animate-fade-in text-shadow-md">{title}</h2>
      {subtitle && (
        <p className="text-lg opacity-90 max-w-2xl mx-auto animate-fade-in-up text-shadow-sm" style={{animationDelay: '0.2s'}}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
