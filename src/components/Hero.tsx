import React, { useEffect, useState } from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThreeDAvatar from './ThreeDAvatar';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          {/* 3D Avatar */}
          <div 
            className={cn(
              "mb-8 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto glass rounded-full overflow-hidden">
              <ThreeDAvatar />
            </div>
          </div>
          
          {/* Hero Text */}
          <div className="z-10">
            <div 
              className={cn(
                "p-2 px-4 rounded-full bg-accent/50 inline-flex items-center gap-2 mb-4 opacity-0",
                isLoaded && "animate-fade-in"
              )}
              style={{ animationDelay: '0.4s' }}
            >
              <Code size={14} />
              <span className="text-sm">Hello, I'm a Flutter developer</span>
            </div>
            
            <h1 
              className={cn(
                "text-3xl md:text-5xl lg:text-5xl font-bold mb-4 opacity-0",
                isLoaded && "animate-fade-in"
              )}
              style={{ animationDelay: '0.6s' }}
            >
              Building beautiful <span className="text-flutter-blue dark:text-flutter-lightBlue">mobile experiences</span>
            </h1>
            
            <p 
              className={cn(
                "text-muted-foreground mb-8 max-w-lg mx-auto opacity-0", 
                isLoaded && "animate-fade-in"
              )}
              style={{ animationDelay: '0.8s' }}
            >
              A passionate Flutter developer creating seamless cross-platform applications with elegant UI and smooth animations
            </p>
            
            <div 
              className={cn("opacity-0 flex justify-center gap-4", isLoaded && "animate-fade-in")}
              style={{ animationDelay: '1s' }}
            >
              <a 
                href="#works" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                View My Work <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-flutter-blue/5 dark:bg-flutter-lightBlue/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-flutter-blue/5 dark:bg-flutter-lightBlue/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
