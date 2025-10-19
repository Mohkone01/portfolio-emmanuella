import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Hooks d'animation - doivent être appelés au niveau supérieur
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [formRef, formVisible] = useScrollAnimation(0.2);

  // Configuration EmailJS avec vos vraies clés
  const EMAILJS_SERVICE_ID = 'service_8nzxzbt';
  const EMAILJS_TEMPLATE_ID = 'template_egatrsl';
  const EMAILJS_PUBLIC_KEY = 'ShuAavZtGxdpoufMN';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Configuration du template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'emmanuellabde@gmail.com',
        reply_to: formData.email
      };

      // Envoi réel avec EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou contacter directement emmanuellabde@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-bde-blue/5 to-bde-green/5">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <CheckCircle className="w-20 h-20 text-bde-green mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Merci pour votre soutien !
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Envoyer un autre message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-bde-blue/5 to-bde-green/5">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Envie de <span className="text-gradient">soutenir mon projet</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rejoignez-moi dans l'aventure et faisons évoluer MIAGE ensemble. 
              Vos idées et votre soutien sont précieux pour construire l'avenir de notre filière.
            </p>
          </div>

          <div 
            ref={formRef}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 fade-in-up ${formVisible ? 'animate' : ''}`}
          >
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contactez-moi
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre nom
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bde-blue focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre email
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bde-blue focus:border-transparent transition-all duration-300"
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre message
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bde-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Partagez vos idées, questions ou votre soutien..."
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-bde-blue hover:bg-bde-blue text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Support Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Pourquoi me soutenir ?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bde-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Une vision claire et des objectifs concrets pour notre filière</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bde-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Une approche collaborative et inclusive de la présidence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bde-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Des initiatives innovantes pour dynamiser la vie étudiante</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bde-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Un engagement sincère pour l'amélioration continue</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-bde-blue to-bde-green rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ensemble, changeons MIAGE !
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Votre voix compte. Chaque idée, chaque suggestion contribue à construire 
                  un projet plus fort et plus représentatif de nos aspirations communes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
