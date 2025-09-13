import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <section className="luxury-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Não perca esta oportunidade única!
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 leading-relaxed">
            Transforme sua paixão pela beleza em uma profissão lucrativa. 
            Comece hoje mesmo sua jornada rumo ao sucesso!
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-primary to-accent text-pink-luxury px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-glow hover:shadow-elegant transition-smooth transform hover:scale-105 mb-6 sm:mb-8 w-full sm:w-auto"
          >
            QUERO COMEÇAR AGORA - R$ 29
          </Button>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm opacity-80 mb-6 sm:mb-8">
            <div className="text-left sm:text-center">
              <h3 className="font-bold mb-3 sm:mb-4 text-pink-primary text-sm sm:text-base">Kit Maquiadora Profissional</h3>
              <p className="mb-1">Com Layse Duarte</p>
              <p className="mb-1">Especialista em Design de Sobrancelhas</p>
              <p>Mais de 8 anos de experiência</p>
            </div>
            
            <div className="text-left sm:text-center">
              <h3 className="font-bold mb-3 sm:mb-4 text-accent text-sm sm:text-base">Tem alguma dúvida?</h3>
              <p className="mb-1">Entre em contato conosco</p>
              <p className="mb-1">Suporte especializado</p>
              <p>Resposta em até 24h</p>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-xs opacity-60 space-y-2">
            <p>© 2024 Kit Maquiadora Profissional - Layse Duarte. Todos os direitos reservados.</p>
            <p>Este produto não garante resultados. Os resultados podem variar de pessoa para pessoa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;