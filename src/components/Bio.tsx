
import React from 'react';
import { Award, Calendar, MapPin } from 'lucide-react';

const Bio = () => {
  return (
    <section id="about" className="py-20 bg-flutter-lightBlue/30">
      <div className="section-container">
        <h2 className="heading">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
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
          </div>
          
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Calendar className="text-flutter-blue shrink-0" />
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-gray-600">5+ Years with Flutter</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="text-flutter-blue shrink-0" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-gray-600">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <Award className="text-flutter-blue shrink-0" />
              <div>
                <h3 className="font-semibold">Specialization</h3>
                <p className="text-sm text-gray-600">Mobile App Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
