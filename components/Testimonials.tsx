import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: 'chef' | 'consumer';
    avatar: string;
    location: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "Grâce à Daylish, j'ai transformé ma passion pour la cuisine en une activité qui me plaît et me rapporte. Les sourires de mes voisins gourmands sont ma meilleure motivation !",
    author: {
      name: "Sophie L.",
      role: "chef",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      location: "Paris 3ème"
    },
    rating: 5
  },
  {
    id: '2',
    content: "Enfin des plats faits maison, variés et délicieux, livrés juste à côté ! Daylish a simplifié mes dîners de semaine. Je recommande vivement.",
    author: {
      name: "Marc D.",
      role: "consumer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      location: "Paris 15ème"
    },
    rating: 5
  },
  {
    id: '3',
    content: "Une plateforme intuitive et une communauté bienveillante. C'est un plaisir de partager mes recettes et de rencontrer des gens sympas dans mon quartier.",
    author: {
      name: "Amina K.",
      role: "chef",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      location: "Paris 8ème"
    },
    rating: 5
  }
];

const borderColors = [
  'border-[#F4B73E]', // orange (1)
  'border-[#4AC6A8]', // turquoise (2)
  'border-[#F4B73E]'  // orange (3)
];

export function Testimonials() {
  return (
    <section id="testimonials" className="pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-pique text-[#053126] relative inline-block">
            Ils partagent leur expérience
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#F4B73E] rounded-full" />
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-[#053126]/80 font-blatant max-w-3xl mx-auto leading-relaxed">
            La communauté Daylish témoigne.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-8 md:p-10 flex flex-col border-t-4 rounded-2xl bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] ${borderColors[index % borderColors.length]}`}
            >
              <p className="text-lg text-[#053126] font-blatant italic mb-6 flex-grow relative">
                <span className="absolute -top-4 -left-4 text-6xl text-[#A1B864]/10 font-serif select-none">"</span>
                {testimonial.content}
              </p>
              <div className="mt-auto">
                <div className="flex items-center space-x-1 text-[#F4B73E] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-[#F4B73E]' : 'stroke-[#F4B73E] fill-none'}`}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#f9f6f1]"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-blatant font-bold text-[#053126]">{testimonial.author.name}</h4>
                    <p className="text-sm text-[#053126]/70 font-blatant">
                      {testimonial.author.role === 'chef' ? 'Chef Partenaire' : 'Client Gourmand'} · {testimonial.author.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 