import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="w-full flex justify-center items-center pb-16">
      <div className="w-full max-w-7xl bg-[#09D6A3] rounded-2xl flex flex-col md:flex-row items-center px-6 md:px-8 py-10 gap-6 md:gap-0">
        {/* Titre */}
        <div className="flex-1 flex flex-col items-start justify-center mb-4 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-blatant text-[#f9f6e7] relative inline-block font-bold uppercase leading-tight">
            S'INSCRIRE À LA<br />NEWSLETTER
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#F4B73E] rounded-full" />
          </h2>
        </div>
        {/* Texte accroche */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-lg md:text-xl text-[#053126] font-blatant mb-2 md:mb-0">
            Soyez les 1er informés des nouveautés et des offres exclusives.
          </p>
        </div>
        {/* Formulaire */}
        <div className="flex-1 flex flex-col items-end justify-center w-full md:w-auto relative">
          {/* Badge en haut à droite */}
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 px-4 py-2.5 rounded-l-lg border border-[#f9f6e7] bg-transparent text-[#053126] placeholder-[#053126]/60 font-blatant focus:outline-none focus:ring-2 focus:ring-[#A1B864] text-base"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-r-lg border-t border-b border-r border-[#f9f6e7] bg-transparent text-[#053126] hover:bg-[#f9f6e7]/20 transition-colors flex items-center justify-center"
              aria-label="S'inscrire"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-[#053126] mt-2 max-w-xs text-right font-blatant">
            *Nous nous engageons à ne pas utiliser votre adresse e-mail pour des spams ! Vous pouvez vous désinscrire à tout moment
          </p>
        </div>
      </div>
    </section>
  );
} 