import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <section className="luxury-gradient py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não perca esta oportunidade única!
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Transforme sua paixão pela beleza em uma profissão lucrativa. 
            Comece hoje mesmo sua jornada rumo ao sucesso!
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-rose-gold to-accent text-luxury-brown px-12 py-6 text-xl font-bold rounded-full shadow-glow hover:shadow-elegant transition-smooth transform hover:scale-105 mb-8"
          >
            QUERO COMEÇAR AGORA - R$ 29
          </Button>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 text-sm opacity-80">
            <div>
              <h3 className="font-bold mb-4 text-rose-gold">Kit Maquiadora Profissional</h3>
              <p>Com Layse Duarte</p>
              <p>Especialista em Design de Sobrancelhas</p>
              <p>Mais de 8 anos de experiência</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-accent">Tem alguma dúvida?</h3>
              <p>Entre em contato conosco</p>
              <p>Suporte especializado</p>
              <p>Resposta em até 24h</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs opacity-60">
            <p>© 2024 Kit Maquiadora Profissional - Layse Duarte. Todos os direitos reservados.</p>
            <p className="mt-2">Este produto não garante resultados. Os resultados podem variar de pessoa para pessoa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;