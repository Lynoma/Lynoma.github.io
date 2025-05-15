
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="heading">Get In Touch</h2>
        <p className="text-muted-foreground mb-10">
          I'm currently available for freelance work and open to discussing new projects or opportunities.
          Feel free to reach out if you'd like to work together!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:hello@flutterdev.com" 
                className="flex items-center gap-3 text-foreground hover:text-flutter-blue dark:hover:text-flutter-lightBlue transition-colors"
              >
                <Mail className="text-flutter-blue dark:text-flutter-lightBlue" size={20} />
                <span>hello@flutterdev.com</span>
              </a>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3">Social Profiles</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-lightBlue dark:hover:text-black transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-lightBlue dark:hover:text-black transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-lightBlue dark:hover:text-black transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-1 focus:ring-flutter-blue dark:focus:ring-flutter-lightBlue focus:border-flutter-blue dark:focus:border-flutter-lightBlue"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-1 focus:ring-flutter-blue dark:focus:ring-flutter-lightBlue focus:border-flutter-blue dark:focus:border-flutter-lightBlue"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-1 focus:ring-flutter-blue dark:focus:ring-flutter-lightBlue focus:border-flutter-blue dark:focus:border-flutter-lightBlue"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-flutter-blue dark:bg-flutter-lightBlue text-white dark:text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
