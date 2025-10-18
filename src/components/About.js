import React from 'react';
import { GraduationCap, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/Emma.jpg" 
                  alt="Kouadio Amenan Marie Renee Emmanuella"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* BDE Logo overlay */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="/BDE.jpg" 
                  alt="Logo BDE MIAGE"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                À propos de <span className="text-gradient">moi</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Je suis <strong className="text-bde-blue">Kouadio Amenan Marie Renee Emmanuella</strong>, 
                  étudiante en Master 2 MIAGE, et je me porte candidate à la présidence du Bureau des Étudiants.
                </p>
                
                <p>
                  Mon engagement est porté par la volonté de faire évoluer notre filière et d'apporter 
                  des solutions concrètes aux défis que rencontrent les étudiants au quotidien.
                </p>
                
                <p>
                  Au fil de mon parcours à MIAGE, j'ai observé que notre communauté fait preuve de 
                  créativité, de courage et d'ambition, mais aussi les difficultés auxquelles beaucoup 
                  d'étudiants font face.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <GraduationCap className="w-8 h-8 text-bde-blue mx-auto mb-3" />
                <h3 className="font-semibold text-bde-blue mb-2">Excellence</h3>
                <p className="text-sm text-gray-600">Promouvoir l'excellence académique et professionnelle</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Users className="w-8 h-8 text-bde-green mx-auto mb-3" />
                <h3 className="font-semibold text-bde-green mb-2">Solidarité</h3>
                <p className="text-sm text-gray-600">Renforcer les liens entre tous les étudiants</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Heart className="w-8 h-8 text-bde-blue mx-auto mb-3" />
                <h3 className="font-semibold text-bde-blue mb-2">Engagement</h3>
                <p className="text-sm text-gray-600">Un engagement sincère pour notre filière</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-bde-blue/10 to-bde-green/10 p-6 rounded-xl border-l-4 border-bde-blue">
              <p className="text-lg font-medium text-gray-800 italic">
                "Pour une MIAGE plus solidaire et dynamique"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
