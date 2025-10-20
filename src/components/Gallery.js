import React, { useState } from 'react';
import { Camera, Star, Heart, Award, X } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationWithDelay } from '../hooks/useScrollAnimation';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [galleryRef, galleryVisible] = useScrollAnimationWithDelay(200, 0.1);
  const [statsRef, statsVisible] = useScrollAnimationWithDelay(400, 0.2);

  const images = [
    {
      id: 1,
      src: "/Emma3.jpg",
      alt: "Emmanuella - Portrait professionnel",
      title: "Leadership & Vision",
      description: "Une candidate déterminée avec une vision claire pour MIAGE"
    },
    {
      id: 2,
      src: "/Emma4.jpg",
      alt: "Emmanuella - Moment de réflexion",
      title: "Réflexion & Stratégie",
      description: "Pensée stratégique pour l'avenir de notre filière"
    },
    {
      id: 3,
      src: "/Emma5.jpg",
      alt: "Emmanuella - Engagement étudiant",
      title: "Proximité & Engagement",
      description: "À l'écoute des étudiants et de leurs besoins"
    },
    {
      id: 4,
      src: "/Emma2.jpg",
      alt: "Emmanuella - Sourire et confiance",
      title: "Confiance & Optimisme",
      description: "Un avenir radieux pour la communauté MIAGE"
    }
  ];

  const stats = [
    { icon: Award, label: "Master 2 MIAGE", value: "Excellence académique" },
    { icon: Heart, label: "Engagement", value: "Pour tous les étudiants" },
    { icon: Star, label: "Vision", value: "MIAGE plus solidaire" }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="galerie" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container-max">
          {/* Header */}
          <div 
            ref={titleRef}
            className={`text-center mb-16 fade-in-up ${titleVisible ? 'animate' : ''}`}
          >
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-bde-blue mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Découvrez <span className="text-gradient">Emmanuella</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une candidate authentique, déterminée et à l'écoute. 
              Découvrez la personne derrière le projet pour MIAGE.
            </p>
          </div>

          {/* Gallery Grid */}
          <div 
            ref={galleryRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-up ${galleryVisible ? 'animate' : ''}`}
          >
            {images.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer gallery-item"
                onClick={() => openModal(image)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-bde-blue rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-bde-green rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up ${statsVisible ? 'animate' : ''}`}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-bde-blue to-bde-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
