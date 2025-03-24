
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { AlertCircle, ExternalLink, Globe } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Rejoignez l'Équipe Nationale
          </h1>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-mali-blue/10 text-mali-blue px-4 py-2 rounded-full mb-4">
              <Globe size={18} />
              <span className="font-medium">IOAI 2025 - Beijing, Chine</span>
            </div>
            <p className="text-muted-foreground text-lg text-center">
              Découvrez le monde de l'IA et tentez votre chance de briller sur la scène mondiale. Nous invitons les jeunes talents maliens à représenter notre pays à l'Olympiade Internationale d'Intelligence Artificielle.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={300}>
          <Alert className="max-w-2xl mx-auto bg-mali-blue/10 border-mali-blue/20 text-center">
            <AlertCircle className="h-5 w-5 text-mali-blue mx-auto mb-2" />
            <AlertDescription className="text-center font-medium text-mali-blue">
              La première étape du concours commence le 4 Avril 2024. Chaque élève recevra un code personnel qui ne peut être utilisé qu'une seule fois.
            </AlertDescription>
          </Alert>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={400} className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://script.google.com/macros/s/AKfycbyCa4vHiBjzOV-PUw5_QQpEHyMitbrTQ_1Ayif3r513J1YEXSM5Fp0hJD04LWvLLl5GNA/exec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Participation
              <ExternalLink size={18} />
            </a>
            
            <a 
              href="/timeline" 
              className="px-6 py-3 bg-transparent text-mali-blue font-medium rounded-lg border border-mali-blue/20 transition-all duration-300 hover:bg-mali-blue/5"
            >
              Voir le calendrier
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
