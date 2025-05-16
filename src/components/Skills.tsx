
import React from 'react';
import { CheckCircle, Code, FileCode, Database, Smartphone, AppWindow } from 'lucide-react';

const skillCategories = [
  {
    title: 'Flutter & Dart',
    skills: [
      'Flutter SDK',
      'Dart Programming',
      'State Management (Provider, Riverpod, Bloc)',
      'UI/UX Implementation',
      'Custom Animations',
      'Performance Optimization',
    ],
    icon: <AppWindow className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" size={20} />,
  },
  {
    title: 'Angular',
    skills: [
      'Angular Framework',
      'TypeScript',
      'RxJS',
      'Component Architecture',
      'Angular Material',
      'State Management (NgRx)',
    ],
    icon: <Code className="text-red-500 dark:text-red-400 shrink-0" size={20} />,
  },
  {
    title: 'C#',
    skills: [
      '.NET Framework',
      'ASP.NET Core',
      'Entity Framework',
      'LINQ',
      'Dependency Injection',
      'Microservices',
    ],
    icon: <FileCode className="text-purple-600 dark:text-purple-400 shrink-0" size={20} />,
  },
  {
    title: 'Mobile Development',
    skills: [
      'Cross-Platform Development',
      'Responsive Design',
      'Native Feature Integration',
      'App Store Deployment',
      'Mobile UX Patterns',
      'Offline-First Architecture',
    ],
    icon: <Smartphone className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" size={20} />,
  },
  {
    title: 'Backend Integration',
    skills: [
      'RESTful APIs',
      'GraphQL',
      'Firebase',
      'Authentication',
      'Cloud Functions',
      'Database Design',
    ],
    icon: <Database className="text-green-500 dark:text-green-400 shrink-0" size={20} />,
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git & GitHub',
      'CI/CD Pipelines',
      'Figma & Design Tools',
      'App Testing',
      'Agile Methodologies',
      'Technical Documentation',
    ],
    icon: <CheckCircle className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" size={20} />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="section-container">
        <h2 className="heading">Skills & Technologies</h2>
        <p className="text-muted-foreground mb-10">
          I've developed expertise in a variety of technologies and tools throughout my journey as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass p-6 h-full">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-flutter-blue dark:text-flutter-lightBlue">
                {category.icon}
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2">
                    <CheckCircle className="text-flutter-blue dark:text-flutter-lightBlue mt-0.5 shrink-0" size={16} />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
