import React from "react";
import { Award, Calendar, MapPin } from "lucide-react";

const Bio = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="heading">À Propos de Moi</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="paragraph">
              Je suis un développeur Flutter passionné, spécialisé dans la
              création d'applications mobiles élégantes et performantes. Mon
              expertise s'étend à la conception d'interfaces utilisateur
              intuitives et à l'optimisation des performances des applications.
            </p>
            <p className="paragraph">
              Mon aventure Flutter a commencé en 2022, et j'ai tout de suite
              adhéré au framework. J'aime créer des interfaces utilisateur
              fluides et réactives ainsi qu'optimiser les performances de mes
              applications. J'ai également des compétences en développement web
              et software, ce qui me pernet d'être polyvalent dans mes projets.
            </p>
            <p className="paragraph">
              Quand je ne code pas, je joue du piano, fait du sport ou joue à
              des jeux vidéo.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Bio</h3>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2016</span>
                  <span>
                    Je commence le développement tout seul en apprenant le java
                    sur OpenClassrooms
                  </span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2022</span>
                  <span>Diplomé d'un BTS SIO à Chalon-sur-Saône</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2022</span>
                  <span>
                    Développeur Flutter en alternance chez Apparence.io
                  </span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2023</span>
                  <span>
                    Diplomé d'une licence SMIN à l'Institut Universitaire de
                    Technologie de Grenoble
                  </span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">2024</span>
                  <span>
                    Développeur C#/Angular chez Vertech
                  </span>
                </div>
                {/* <div className="grid grid-cols-[80px_1fr] gap-2">
                  <span className="font-medium">Present</span>
                  <span>Working as a freelance Flutter developer</span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 glass">
              <Calendar className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" />
              <div>
                <h3 className="font-semibold">Expérience</h3>
                <p className="text-sm text-muted-foreground">
                  3+ Years with Flutter
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 glass">
              <MapPin className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" />
              <div>
                <h3 className="font-semibold">Localisation</h3>
                <p className="text-sm text-muted-foreground">
                  Chalon-sur-Saône, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 glass">
              <Award className="text-flutter-blue dark:text-flutter-lightBlue shrink-0" />
              <div>
                <h3 className="font-semibold">Spécialisation</h3>
                <p className="text-sm text-muted-foreground">
                  Applications Mobiles Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
