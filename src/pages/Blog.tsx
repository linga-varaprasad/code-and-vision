
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-32">
        <div className="container-custom">
          <SectionHeading 
            title="My Blog"
            subtitle="Thoughts, tutorials, and insights about technology"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard 
              title="How I Built a Secure AI-Powered Payment System"
              excerpt="Learn about the challenges and solutions in creating a voice-based payment system that works with multiple languages."
              date="May 15, 2023"
              slug="ai-payment-system"
              delay={1}
            />
            
            <BlogCard 
              title="The Future of AI in Fitness Planning"
              excerpt="Exploring how artificial intelligence is transforming personal fitness and nutrition planning."
              date="April 3, 2023"
              slug="ai-fitness-planning"
              delay={2}
            />
            
            <BlogCard 
              title="Full Stack Development: Choosing the Right Tech Stack"
              excerpt="A comprehensive guide to selecting the optimal technologies for your next web development project."
              date="March 22, 2023"
              slug="choosing-tech-stack"
              delay={3}
            />
            
            <BlogCard 
              title="Optimizing React Performance"
              excerpt="Tips and tricks to make your React applications faster and more efficient."
              date="February 18, 2023"
              slug="react-performance"
              delay={4}
            />
            
            <BlogCard 
              title="Introduction to Blockchain Development"
              excerpt="A beginner-friendly guide to understanding and building on blockchain technology."
              date="January 30, 2023"
              slug="blockchain-intro"
              delay={5}
            />
            
            <BlogCard 
              title="Building Accessible Web Applications"
              excerpt="Best practices for creating web applications that everyone can use, regardless of ability."
              date="December 12, 2022"
              slug="web-accessibility"
              delay={6}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
