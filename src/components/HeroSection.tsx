import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-pink-luxury mb-4 sm:mb-6 text-balance leading-tight">
            Kit Maquiadora Profissional
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-dark mb-2 sm:mb-4 font-medium">
            Ferramentas para Minuciar
          </p>
          <p className="text-base sm:text-lg md:text-xl text-pink-dark font-medium">
            Curso de Sobrancelhas
          </p>
        </div>

        <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-pink-dark leading-relaxed mb-6 sm:mb-8">
            <strong>MÉTODO APLICADO</strong> que vai te <strong>ENSINAR TODO SEU CURSO</strong><br className="hidden sm:block" />
            de Estruturação através do mapa mental, Sobrancelhas, 
            Alongamento, Design de Sobrancelhas e muito mais!
          </p>
          
          <Button 
            size="lg" 
            className="cta-gradient text-white px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105 w-full sm:w-auto"
          >
            QUERO ESTE KIT PARA CONQUISTAR MEUS OBJETIVOS
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-pink-luxury to-pink-dark rounded-3xl shadow-elegant p-4 sm:p-6 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-smooth">
              <div className="w-full h-full bg-pink-cream rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center">
                <div className="w-full h-20 sm:h-32 bg-pink-light rounded-xl mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-pink-dark font-bold text-xs sm:text-sm">CONTEÚDO DO KIT</span>
                </div>
                <div className="space-y-2 sm:space-y-3 w-full">
                  <div className="h-3 sm:h-4 bg-pink-primary/30 rounded-full"></div>
                  <div className="h-3 sm:h-4 bg-pink-primary/50 rounded-full w-4/5"></div>
                  <div className="h-3 sm:h-4 bg-pink-primary/40 rounded-full w-3/5"></div>
                  <div className="h-3 sm:h-4 bg-pink-primary/60 rounded-full w-4/5"></div>
                </div>
                <div className="mt-4 sm:mt-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-primary to-accent rounded-full shadow-card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;