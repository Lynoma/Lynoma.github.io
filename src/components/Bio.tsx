
import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const Bio = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="paragraph">
              Hello! I'm a passionate Flutter developer with a strong focus on creating 
              beautiful, performant mobile applications. I love the challenge of building 
              responsive UIs and delivering seamless experiences across both iOS and Android platforms.
            </p>
            <p className="paragraph">
              My journey with Flutter began in 2018, and I've been in love with the framework ever since. 
              I enjoy exploring its capabilities and pushing the boundaries of what's possible in mobile development.
            </p>
            <p className="paragraph">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source 
              projects, or experimenting with new technologies to improve my craft.
            </p>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-2">Bio</h3>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2018</span>
                  <span>Started Flutter development</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2020</span>
                  <span>Lead mobile developer at TechCorp Inc.</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2022</span>
                  <span>Launched independent Flutter consultancy</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">Present</span>
                  <span>Working as a freelance Flutter developer</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 glass">
              <Calendar className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" />
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-muted-foreground">5+ Years with Flutter</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 glass">
              <MapPin className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 glass">
              <Award className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" />
              <div>
                <h3 className="font-semibold">Specialization</h3>
                <p className="text-sm text-muted-foreground">Mobile App Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
