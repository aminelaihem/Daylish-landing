import React from 'react';
import Link from 'next/link';

export function TwoWays() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-pique text-[#053126] relative inline-block">
            Deux façons de vivre l'expérience Daylish
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#F4B73E] rounded-full" />
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-[#053126]/80 font-blatant max-w-3xl mx-auto leading-relaxed">
            Que vous souhaitiez savourer des plats faits maison ou partager votre passion de la cuisine, Daylish vous ouvre les portes d'une communauté gourmande, locale et solidaire.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloc Consommateurs */}
          <div className="bg-[#EAF7F1] rounded-xl p-10 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#00795F] mb-4 text-left">Découvrez des plats faits maison, près de chez vous</h3>
              <p className="text-lg text-[#053126]/80 font-blatant leading-relaxed mb-8 text-left">Laissez-vous surprendre par des recettes authentiques cuisinées par des passionnés près de chez vous. Commandez en quelques clics.</p>
            </div>
            <div className="flex justify-end md:justify-end justify-center md:justify-end">
              <Link
                href="/explore"
                style={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #A1B864, #00795F) border-box'
                }}
                className="inline-flex items-center px-6 py-3 rounded-[12px] text-[#00795F] font-blatant font-bold transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#A1B864]/20 hover:bg-[#A1B864]/10 active:scale-[0.98] relative overflow-hidden"
              >
                <span className="relative z-10">Découvrir la plateforme</span>
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.6) 50%,rgba(255,255,255,0.2) 100%)', mixBlendMode: 'lighten'}}></span>
              </Link>
            </div>
          </div>
          {/* Bloc Cuisiniers */}
          <div className="bg-[#FFF5E1] rounded-xl p-10 flex flex-col justify-between shadow-md">
            <div>
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#F4B73E] mb-4 text-left">Monétisez votre passion pour la cuisine à domicile</h3>
              <p className="text-lg text-[#053126]/80 font-blatant leading-relaxed mb-8 text-left">Rejoignez une communauté de chefs passionnés et commencez à vendre vos plats faits maison simplement et en toute sécurité.</p>
            </div>
            <div className="flex justify-end md:justify-end justify-center md:justify-end">
              <Link
                href="/chef-registration"
                style={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #F4B73E, #FFD580) border-box'
                }}
                className="inline-flex items-center px-6 py-3 rounded-[12px] text-[#F4B73E] font-blatant font-bold transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#F4B73E]/20 hover:bg-[#F4B73E]/10 active:scale-[0.98] relative overflow-hidden"
              >
                <span className="relative z-10">Devenir chef partenaire</span>
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(120deg,rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.6) 50%,rgba(255,255,255,0.2) 100%)', mixBlendMode: 'lighten'}}></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 