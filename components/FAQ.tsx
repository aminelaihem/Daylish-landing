'use client';
import React, { useState } from 'react';
import { ShieldCheck, User, Star, Truck, CreditCard, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Les plats proposés sur Daylish sont-ils faits maison ?",
    answer: "Oui, tous les plats disponibles sur Daylish sont cuisinés de manière artisanale par des particuliers passionnés. Chaque cuisinier prépare ses recettes depuis son domicile, avec des ingrédients frais et une attention particulière à la qualité.",
    icon: <Star className="w-6 h-6 text-[#00795F]" />,
    color: 'bg-[#EAF7F1]'
  },
  {
    question: "Comment récupérer une commande passée sur Daylish ?",
    answer: "Une fois votre commande validée, vous recevrez par email l'adresse exacte du cuisinier ainsi qu'un créneau horaire pour venir récupérer votre plat. Vous vous rendez directement sur place à l'heure convenue.",
    icon: <Truck className="w-6 h-6 text-[#F4B73E]" />,
    color: 'bg-[#FFF5E1]'
  },
  {
    question: "Est-il possible de payer en toute sécurité sur Daylish ?",
    answer: "Oui, le paiement se fait en ligne via un système 100 % sécurisé. Vos informations bancaires sont cryptées et ne sont jamais partagées avec les cuisiniers.",
    icon: <CreditCard className="w-6 h-6 text-[#4AC6A8]" />,
    color: 'bg-[#EAF7F1]'
  },
  {
    question: "Qui peut vendre des plats sur Daylish ?",
    answer: "Toute personne passionnée de cuisine peut proposer ses plats sur Daylish, qu'elle soit amateur ou professionnelle. Il suffit de créer un compte, compléter son profil et soumettre ses premières recettes à la modération.",
    icon: <User className="w-6 h-6 text-[#F4B73E]" />,
    color: 'bg-[#FFF5E1]'
  },
  {
    question: "Des règles d'hygiène sont-elles imposées aux cuisiniers ?",
    answer: "Oui, chaque cuisinier est sensibilisé aux bonnes pratiques d'hygiène et doit s'engager à respecter les standards de qualité fixés par Daylish. Nous fournissons des ressources pour les accompagner dans leur démarche.",
    icon: <ShieldCheck className="w-6 h-6 text-[#00795F]" />,
    color: 'bg-[#EAF7F1]'
  },
  {
    question: "Daylish prend-il une commission sur les ventes ?",
    answer: "Oui, une commission est prélevée uniquement lorsqu'une vente est effectuée. Cela permet de couvrir les frais liés à la plateforme, au support utilisateur et aux services proposés aux cuisiniers.",
    icon: <MessageCircle className="w-6 h-6 text-[#F4B73E]" />,
    color: 'bg-[#FFF5E1]'
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-pique text-[#053126] relative inline-block">
            Questions fréquentes
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#A1B864] rounded-full" />
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-[#053126]/80 font-blatant max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous avez toujours voulu savoir sur Daylish, la sécurité, la communauté et la gourmandise.
          </p>
        </div>
        <dl className="flex flex-col gap-10 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
              <div className={`relative max-w-xl w-full ${faq.color} rounded-2xl shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] px-6 py-6 transition-all duration-300 group`}>
                <button
                  className="flex items-center gap-3 w-full text-left focus:outline-none"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="flex-shrink-0">{faq.icon}</span>
                  <span className="text-lg md:text-xl font-blatant font-bold text-[#053126]">{faq.question}</span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-500 ${open === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                  aria-hidden={open !== i}
                >
                  <p className="text-[#053126]/80 text-base md:text-lg font-blatant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
                <span className={`absolute top-6 ${i % 2 === 0 ? '-left-4' : '-right-4'} w-4 h-4 bg-[#A1B864] rounded-full opacity-30`} />
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
} 