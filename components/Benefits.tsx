import React from 'react';
import { Utensils, Heart, Users } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Benefits() {
  const benefitsData: Benefit[] = [
    {
      icon: <Utensils className="h-10 w-10 text-[#053126]" />,
      title: "Cuisinez avec Passion",
      description: "Transformez votre passion pour la cuisine en une activité rémunératrice. Partagez vos talents culinaires avec votre quartier."
    },
    {
      icon: <Heart className="h-10 w-10 text-[#053126]" />,
      title: "Découvrez des Saveurs",
      description: "Profitez de plats faits maison, authentiques et variés, préparés avec amour par vos voisins passionnés."
    },
    {
      icon: <Users className="h-10 w-10 text-[#053126]" />,
      title: "Créez du Lien",
      description: "Rejoignez une communauté bienveillante qui valorise le partage et les rencontres autour de la bonne cuisine."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden mt-12">
      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pique text-[#053126] relative inline-block">
            Pourquoi Daylish ?
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#F4B73E] rounded-full" />
          </h2>
          <p className="mt-6 text-xl text-[#053126]/80 font-blatant max-w-3xl mx-auto leading-relaxed">
            Rejoignez une communauté gourmande et solidaire qui transforme chaque repas en une expérience unique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-white rounded-xl"
            >
              {/* Effet de survol élégant */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#053126]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icone avec animation */}
              <div className="inline-flex p-6 bg-[#053126]/10 rounded-full mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-blatant font-bold text-[#053126] mb-4 group-hover:text-[#053126]/90 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-base text-[#053126]/70 font-blatant leading-relaxed group-hover:text-[#053126]/80 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 