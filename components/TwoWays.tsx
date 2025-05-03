import React from 'react';
import Link from 'next/link';

export function TwoWays() {
  return (
    <section className="py-24 relative overflow-hidden mt-12">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-pique text-[#053126] relative inline-block">
            Deux façons de vivre l’expérience Daylish
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#F4B73E] rounded-full" />
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-[#053126]/80 font-blatant max-w-3xl mx-auto leading-relaxed">
            Que vous souhaitiez savourer des plats faits maison ou partager votre passion de la cuisine, Daylish vous ouvre les portes d’une communauté gourmande, locale et solidaire.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloc Consommateurs */}
          <div className="bg-[#EAF7F1] rounded-xl p-10 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#00795F] mb-4">Découvrez des plats faits maison, livrés près de chez vous</h3>
              <p className="text-lg text-[#053126]/80 font-blatant leading-relaxed mb-8">Laissez-vous surprendre par des recettes authentiques cuisinées par des passionnés près de chez vous. Commandez en quelques clics.</p>
            </div>
            <Link href="/explore" className="inline-block px-6 py-3 rounded-[12px] text-[#00795F] font-blatant font-bold border-2 border-[#00795F] bg-white hover:bg-[#00795F] hover:text-white transition-all duration-300 text-center">
              Découvrir la plateforme
            </Link>
          </div>
          {/* Bloc Cuisiniers */}
          <div className="bg-[#FFF5E1] rounded-xl p-10 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#F4B73E] mb-4">Monétisez votre passion pour la cuisine à domicile</h3>
              <p className="text-lg text-[#053126]/80 font-blatant leading-relaxed mb-8">Rejoignez une communauté de chefs passionnés et commencez à vendre vos plats faits maison simplement et en toute sécurité.</p>
            </div>
            <Link href="/chef-registration" className="inline-block px-6 py-3 rounded-[12px] text-[#F4B73E] font-blatant font-bold border-2 border-[#F4B73E] bg-white hover:bg-[#F4B73E] hover:text-white transition-all duration-300 text-center">
              Devenir chef partenaire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 