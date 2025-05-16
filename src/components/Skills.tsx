
import React from 'react';
import { CheckCircle, Code, FileCode, Database, Smartphone, AppWindow } from 'lucide-react';

const skillCategories = [
  {
    title: 'Flutter & Dart',
    skills: [
      'Flutter SDK',
      'Dart Programming',
      'State Management (Provider, Riverpod, Bloc)',
      'UI/UX',
      'Optimisation des Performances',
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
      'WPF Framework',
      'LINQ',
      'MVVM Pattern',
      'Xamarin',
    ],
    icon: <FileCode className="text-purple-600 dark:text-purple-400 shrink-0" size={20} />,
  },
  {
    title: 'Développement Mobile',
    skills: [
      'Dévelopement Cross-Platform',
      'Design Responsive',
      'Intégration des features Native',
      'Déploiement sur App Store & Play Store',
      'UX mobile',
    ],
    icon: <Smartphone className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" size={20} />,
  },
  {
    title: 'Intégration Backend',
    skills: [
      'RESTful APIs',
      'Firebase',
      'Authentification',
      'Cloud Functions',
      'NoSQL Databases (Firestore)',
    ],
    icon: <Database className="text-green-500 dark:text-green-400 shrink-0" size={20} />,
  },
  {
    title: 'Autre Outils',
    skills: [
      'Git & GitHub',
      'CI/CD Pipelines',
      'Postman',
      'Figma',
      'Methodologies Agiles',
    ],
    icon: <CheckCircle className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" size={20} />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="section-container">
        <h2 className="heading">Compétences & Technologies</h2>
        <p className="text-muted-foreground mb-10">
          Voici un aperçu de mes compétences et des technologies avec lesquelles je
          travaille régulièrement.
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
