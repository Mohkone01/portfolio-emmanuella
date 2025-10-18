import React, { useState } from 'react';
import { Users, BookOpen, Calendar, Mic, Lightbulb, ArrowRight } from 'lucide-react';
import Modal from './Modal';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      icon: Users,
      title: "Améliorer le relationnel entre les étudiants",
      description: "Créer des espaces d'échange et de collaboration pour renforcer les liens entre tous les étudiants de la filière MIAGE.",
      color: "blue",
      details: {
        objectif: "Créer une communauté MIAGE plus soudée et collaborative",
        actions: [
          "Mise en place d'espaces de coworking dédiés aux étudiants MIAGE",
          "Organisation de sessions de tutorat entre étudiants de différents niveaux",
          "Création de groupes d'étude thématiques (programmation, gestion de projet, etc.)",
          "Développement d'une plateforme d'échange en ligne pour faciliter la communication",
          "Organisation de déjeuners networking mensuels"
        ],
        benefices: [
          "Réduction de l'isolement des étudiants",
          "Amélioration des résultats académiques grâce à l'entraide",
          "Développement d'un réseau professionnel dès les études",
          "Renforcement de l'identité MIAGE"
        ],
        timeline: "Mise en place progressive sur les 6 premiers mois du mandat"
      }
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Promouvoir des opportunités de stages et formations",
      description: "Développer un réseau de partenaires entreprises et organiser des sessions de formation professionnelle.",
      color: "green",
      details: {
        objectif: "Faciliter l'insertion professionnelle des étudiants MIAGE",
        actions: [
          "Création d'un annuaire des entreprises partenaires avec offres de stages",
          "Organisation de forums emploi spécialisés MIAGE",
          "Mise en place de formations complémentaires (certifications, soft skills)",
          "Développement de partenariats avec des entreprises du secteur IT",
          "Organisation de conférences métiers avec des professionnels"
        ],
        benefices: [
          "Augmentation du taux de placement en stage",
          "Amélioration de la qualité des stages proposés",
          "Développement de compétences recherchées par les employeurs",
          "Création d'un réseau d'anciens étudiants actif"
        ],
        timeline: "Déploiement continu avec 2 forums emploi par an"
      }
    },
    {
      id: 3,
      icon: Calendar,
      title: "Mettre en place des événements culturels, sportifs et solidaires",
      description: "Organiser des activités variées pour dynamiser la vie étudiante et créer des moments de partage.",
      color: "blue",
      details: {
        objectif: "Enrichir la vie étudiante et créer des liens au-delà des cours",
        actions: [
          "Organisation de tournois sportifs inter-promotions",
          "Mise en place d'événements culturels (soirées, spectacles, expositions)",
          "Création d'actions solidaires (collectes, bénévolat, sensibilisation)",
          "Organisation de sorties découverte (musées, entreprises, conférences)",
          "Développement d'activités de team building"
        ],
        benefices: [
          "Amélioration du bien-être étudiant",
          "Développement de l'esprit d'équipe",
          "Sensibilisation aux enjeux sociétaux",
          "Création de souvenirs communs durables"
        ],
        timeline: "Au minimum un événement par mois avec des temps forts semestriels"
      }
    },
    {
      id: 4,
      icon: Mic,
      title: "Organiser des meetups pour échanger nos expériences",
      description: "Créer des rencontres régulières pour partager les expériences professionnelles et académiques.",
      color: "green",
      details: {
        objectif: "Favoriser le partage d'expériences et l'apprentissage collaboratif",
        actions: [
          "Organisation de meetups thématiques mensuels",
          "Invitation d'anciens étudiants pour témoigner de leur parcours",
          "Création de sessions de retour d'expérience de stage",
          "Mise en place de présentations de projets étudiants",
          "Organisation de débats sur l'actualité du secteur IT"
        ],
        benefices: [
          "Enrichissement des connaissances par le partage",
          "Développement de l'expression orale",
          "Création d'un réseau d'entraide",
          "Amélioration de la culture générale du secteur"
        ],
        timeline: "Un meetup par mois avec des thématiques variées"
      }
    },
    {
      id: 5,
      icon: Lightbulb,
      title: "Encourager les initiatives étudiantes",
      description: "Soutenir et accompagner les projets innovants des étudiants pour renforcer l'esprit d'équipe.",
      color: "blue",
      details: {
        objectif: "Stimuler la créativité et l'entrepreneuriat étudiant",
        actions: [
          "Création d'un fonds de soutien aux projets étudiants",
          "Mise en place d'un incubateur de projets au sein de la filière",
          "Organisation de concours d'innovation",
          "Accompagnement méthodologique des porteurs de projet",
          "Création d'espaces de travail collaboratif pour les projets"
        ],
        benefices: [
          "Développement de l'esprit d'initiative",
          "Acquisition d'expérience en gestion de projet",
          "Possibilité de créer de vraies opportunités professionnelles",
          "Renforcement de la réputation de la filière MIAGE"
        ],
        timeline: "Lancement dès le premier trimestre avec appels à projets semestriels"
      }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projet" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes idées pour un <span className="text-gradient">BDE plus dynamique</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les initiatives concrètes que je souhaite mettre en place pour 
            transformer notre expérience étudiante et faire évoluer notre filière MIAGE.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isBlue = project.color === 'blue';
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  isBlue ? 'bg-blue-100 group-hover:bg-blue-200' : 'bg-green-100 group-hover:bg-green-200'
                } transition-colors duration-300`}>
                  <IconComponent className={`w-8 h-8 ${
                    isBlue ? 'text-bde-blue' : 'text-bde-green'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <button 
                  onClick={() => openModal(project)}
                  className="flex items-center text-sm font-semibold text-bde-blue group-hover:text-bde-green transition-colors duration-300 hover:underline"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ensemble, transformons MIAGE
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Ces idées ne sont qu'un début. Je crois fermement que les meilleures initiatives 
            naissent de la collaboration et de l'écoute de chacun.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Rejoignez l'aventure
          </button>
        </div>
      </div>

      {/* Modal pour les détails du projet */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Objectif */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Objectif</h3>
              <p className="text-gray-700 leading-relaxed">{selectedProject.details.objectif}</p>
            </div>

            {/* Actions concrètes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Actions concrètes</h3>
              <ul className="space-y-2">
                {selectedProject.details.actions.map((action, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      selectedProject.color === 'blue' ? 'bg-bde-blue' : 'bg-bde-green'
                    }`}></div>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bénéfices */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bénéfices attendus</h3>
              <ul className="space-y-2">
                {selectedProject.details.benefices.map((benefice, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      selectedProject.color === 'blue' ? 'bg-bde-green' : 'bg-bde-blue'
                    }`}></div>
                    <span className="text-gray-700">{benefice}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className={`p-4 rounded-lg ${
              selectedProject.color === 'blue' ? 'bg-blue-50' : 'bg-green-50'
            }`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendrier de mise en œuvre</h3>
              <p className="text-gray-700">{selectedProject.details.timeline}</p>
            </div>

            {/* Call to action */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Cette initiative vous intéresse ? Partagez vos idées !
              </p>
              <button 
                onClick={() => {
                  closeModal();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`btn-${selectedProject.color === 'blue' ? 'primary' : 'secondary'}`}
              >
                Contactez-moi
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Project;
