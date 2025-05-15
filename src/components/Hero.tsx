
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-flutter-lightBlue opacity-50 blur-3xl"></div>
      <div className="absolute bottom-12 -left-24 w-64 h-64 rounded-full bg-flutter-lightBlue opacity-50 blur-3xl"></div>

      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            Hello, I'm a <span className="text-flutter-blue">Flutter</span> Developer
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl mb-8 max-w-md opacity-0", 
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            Building beautiful cross-platform mobile applications with Flutter and Dart
          </p>
          
          <div 
            className={cn("opacity-0", isLoaded && "animate-fade-in")}
            style={{ animationDelay: '0.6s' }}
          >
            <a 
              href="#works" 
              className="inline-flex items-center gap-2 bg-flutter-blue text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              View My Work <ArrowRight size={16} />
            </a>
          </div>
        </div>
        
        <div 
          className={cn(
            "md:w-1/2 mt-12 md:mt-0 relative opacity-0",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-flutter-lightBlue"></div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
              alt="Flutter Developer"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
