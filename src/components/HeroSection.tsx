import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-luxury-brown mb-6 text-balance">
            Kit Maquiadora Profissional
          </h1>
          <p className="text-xl md:text-2xl text-warm-brown mb-4 font-medium">
            Ferramentas para Minuciar
          </p>
          <p className="text-lg md:text-xl text-warm-brown font-medium">
            Curso de Sobrancelhas
          </p>
        </div>

        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-warm-brown leading-relaxed mb-8">
            <strong>MÉTODO APLICADO</strong> que vai te <strong>ENSINAR TODO SEU CURSO</strong><br />
            de Estruturação através do mapa mental, Sobrancelhas, 
            Alongamento, Design de Sobrancelhas e muito mais!
          </p>
          
          <Button 
            size="lg" 
            className="cta-gradient text-white px-12 py-4 text-lg font-bold rounded-full shadow-elegant hover:shadow-glow transition-smooth transform hover:scale-105"
          >
            QUERO ESTE KIT PARA CONQUISTAR MEUS OBJETIVOS
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-luxury-brown to-warm-brown rounded-3xl shadow-elegant p-6 transform rotate-2 hover:rotate-0 transition-smooth">
              <div className="w-full h-full bg-cream rounded-2xl p-6 flex flex-col justify-center items-center">
                <div className="w-full h-32 bg-nude rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-warm-brown font-bold text-sm">CONTEÚDO DO KIT</span>
                </div>
                <div className="space-y-3 w-full">
                  <div className="h-4 bg-rose-gold/30 rounded-full"></div>
                  <div className="h-4 bg-rose-gold/50 rounded-full w-4/5"></div>
                  <div className="h-4 bg-rose-gold/40 rounded-full w-3/5"></div>
                  <div className="h-4 bg-rose-gold/60 rounded-full w-4/5"></div>
                </div>
                <div className="mt-6 w-20 h-20 bg-gradient-to-br from-rose-gold to-accent rounded-full shadow-card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;