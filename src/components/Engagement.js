import React from 'react';
import { Quote, Target, Heart, Star } from 'lucide-react';

const Engagement = () => {
  return (
    <section id="engagement" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Mon <span className="text-gradient">engagement</span>
              </h2>
              
              {/* Main Quote */}
              <div className="relative bg-gradient-to-r from-bde-blue/5 to-bde-green/5 p-6 sm:p-8 rounded-2xl border-l-4 border-bde-blue mb-8">
                <Quote className="w-12 h-12 text-bde-blue/30 absolute top-4 left-4" />
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed pl-8">
                  "Je ne promets pas tout changer, mais je m'engage à faire de mon mieux 
                  pour participer à l'amélioration, au développement et à l'épanouissement 
                  de notre filière."
                </blockquote>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Je crois qu'il est possible de transformer notre quotidien en MIAGE, 
                une étape à la fois, en écoutant chacun et en travaillant ensemble 
                vers un objectif commun.
              </p>
            </div>

            {/* Engagement Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-bde-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Objectifs concrets</h3>
                  <p className="text-gray-600">Des actions mesurables et réalisables pour améliorer concrètement la vie étudiante.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-bde-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Écoute active</h3>
                  <p className="text-gray-600">Une présidence à l'écoute de tous les étudiants, de leurs besoins et de leurs idées.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-bde-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence partagée</h3>
                  <p className="text-gray-600">Promouvoir l'excellence tout en maintenant un esprit de solidarité et d'entraide.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circle with gradient */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-bde-blue/20 to-bde-green/20 flex items-center justify-center relative overflow-hidden">
                {/* Inner content */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <img 
                      src="/BDE.jpg" 
                      alt="Logo BDE MIAGE"
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-bde-blue mb-2">MIAGE 2025</h3>
                  <p className="text-bde-green font-semibold">Ensemble vers l'excellence</p>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Target className="w-8 h-8 text-bde-blue" />
                </div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-1000">
                  <Heart className="w-8 h-8 text-bde-green" />
                </div>
                <div className="absolute top-1/2 left-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-2000">
                  <Star className="w-6 h-6 text-bde-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
