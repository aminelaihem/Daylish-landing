import React from 'react';

export function Safety() {
  return (
    <section id="safety" className="relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-pique text-[#053126] relative inline-block">
            Votre sécurité, notre priorité
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#A1B864] rounded-full" />
          </h2>
          <p className="mt-10 text-xl md:text-2xl text-[#053126]/80 font-blatant max-w-4xl mx-auto leading-relaxed">
            Chez Daylish, nous mettons tout en œuvre pour garantir la qualité et la sécurité de chaque repas. Grâce à des bonnes pratiques d'hygiène, une sélection rigoureuse des cuisiniers et un accompagnement continu, vous pouvez savourer en toute confiance.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto hidden md:block">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-[#A1B864] via-[#F4B73E] to-[#00795F] rounded-full opacity-40 z-0" />
          {/* Bloc 1 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 pr-12 flex flex-col items-end">
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#00795F] mb-3 text-right">Des cuisiniers formés et accompagnés</h3>
              <p className="text-lg md:text-xl font-blatant text-[#053126]/80 max-w-lg text-right">Nous guidons chaque chef dans l'apprentissage des bonnes pratiques d'hygiène et de sécurité, en toute simplicité.</p>
            </div>
            <div className="w-1/2 flex items-center pl-12">
              <span className="ml-8 w-16 h-16 rounded-full bg-[#00795F] flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white ring-4 ring-[#A1B864]/30 z-10">1</span>
            </div>
          </div>
          {/* Bloc 2 */}
          <div className="flex items-center mb-24 relative">
            <div className="w-1/2 flex items-center justify-end pr-12">
              <span className="mr-8 w-16 h-16 rounded-full bg-[#F4B73E] flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white ring-4 ring-[#F4B73E]/30 z-10">2</span>
            </div>
            <div className="w-1/2 pl-12 flex flex-col items-start">
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#F4B73E] mb-3 text-left">Un badge de confiance</h3>
              <p className="text-lg md:text-xl font-blatant text-[#053126]/80 max-w-lg text-left">Les profils certifiés "Hygiène alimentaire" sont vérifiés et clairement identifiés sur la plateforme.</p>
            </div>
          </div>
          {/* Bloc 3 */}
          <div className="flex items-center relative">
            <div className="w-1/2 pr-12 flex flex-col items-end">
              <h3 className="text-2xl md:text-3xl font-blatant font-bold text-[#00795F] mb-3 text-right">Des retours transparents</h3>
              <p className="text-lg md:text-xl font-blatant text-[#053126]/80 max-w-lg text-right">Les avis des utilisateurs contribuent à garantir la qualité et la fiabilité de chaque expérience.</p>
            </div>
            <div className="w-1/2 flex items-center pl-12">
              <span className="ml-8 w-16 h-16 rounded-full bg-[#00795F] flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white ring-4 ring-[#A1B864]/30 z-10">3</span>
            </div>
          </div>
        </div>
        {/* Version mobile : stepper vertical simple */}
        <div className="flex flex-col gap-16 md:hidden mt-16">
          {/* Pilier 1 */}
          <div className="flex flex-col items-center">
            <span className="w-14 h-14 rounded-full bg-[#00795F] flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white ring-4 ring-[#A1B864]/30 mb-4">1</span>
            <h3 className="text-xl font-blatant font-bold text-[#00795F] mb-2 text-center">Des cuisiniers formés et accompagnés</h3>
            <p className="text-base font-blatant text-[#053126]/80 text-center max-w-xs">Nous guidons chaque chef dans l'apprentissage des bonnes pratiques d'hygiène et de sécurité, en toute simplicité.</p>
          </div>
          {/* Pilier 2 */}
          <div className="flex flex-col items-center">
            <span className="w-14 h-14 rounded-full bg-[#F4B73E] flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white ring-4 ring-[#F4B73E]/30 mb-4">2</span>
            <h3 className="text-xl font-blatant font-bold text-[#F4B73E] mb-2 text-center">Un badge de confiance</h3>
            <p className="text-base font-blatant text-[#053126]/80 text-center max-w-xs">Les profils certifiés "Hygiène alimentaire" sont vérifiés et clairement identifiés sur la plateforme.</p>
          </div>
          {/* Pilier 3 */}
          <div className="flex flex-col items-center">
            <span className="w-14 h-14 rounded-full bg-[#00795F] flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white ring-4 ring-[#A1B864]/30 mb-4">3</span>
            <h3 className="text-xl font-blatant font-bold text-[#00795F] mb-2 text-center">Des retours transparents</h3>
            <p className="text-base font-blatant text-[#053126]/80 text-center max-w-xs">Les avis des utilisateurs contribuent à garantir la qualité et la fiabilité de chaque expérience.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 