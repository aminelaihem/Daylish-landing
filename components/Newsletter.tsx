'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }

      setStatus('success');
      setMessage('Merci pour votre inscription !');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    }
  };

  return (
    <section id="newsletter" className="w-full flex justify-center items-center pb-16">
      <div className="w-[95%] max-w-[1400px] bg-[#09D6A3] rounded-2xl flex flex-col md:flex-row items-center px-8 md:px-12 py-12 gap-8 md:gap-0">
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
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="flex-1 px-4 py-2.5 rounded-l-lg border border-[#f9f6e7] bg-transparent text-[#053126] placeholder-[#053126]/60 font-blatant focus:outline-none focus:ring-2 focus:ring-[#A1B864] text-base"
              disabled={status === 'loading'}
              required
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-r-lg border-t border-b border-r border-[#f9f6e7] bg-transparent text-[#053126] hover:bg-[#f9f6e7]/20 transition-colors flex items-center justify-center disabled:opacity-50"
              disabled={status === 'loading'}
              aria-label="S'inscrire"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          {message && (
            <p className={`text-sm mt-2 max-w-xs text-right font-blatant ${status === 'error' ? 'text-red-600' : 'text-[#053126]'}`}>
              {message}
            </p>
          )}
          <p className="text-xs text-[#053126] mt-2 max-w-xs text-right font-blatant">
            *Nous nous engageons à ne pas utiliser votre adresse e-mail pour des spams ! Vous pouvez vous désinscrire à tout moment
          </p>
        </div>
      </div>
    </section>
  );
} 