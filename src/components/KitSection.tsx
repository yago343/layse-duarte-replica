import { Button } from "@/components/ui/button";

const KitSection = () => {
  const features = [
    "✓ Certificados digital com seu nome garantindo sua qualificação",
    "✓ Material de práticas de modo para lhe facilitar sua aplicação",
    "✓ Fique mais de aprender um caso para empreender ainda mais",
    "✓ Área que tem uma FORMA PREMIUM",
    "✓ Sobre estudar ou aplicar já como adquirí um treinamento com esse material até você chegar com esse 7 dias de seu investimento",
    "✓ Mais aprenda com mais de 150 páginas dos material para estudo",
    "✓ Acesse quando e onde você preferir"
  ];

  return (
    <section className="luxury-gradient py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-luxury-brown via-warm-brown to-luxury-brown rounded-3xl shadow-elegant p-8 md:p-12 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-rose-gold to-accent text-luxury-brown px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-glow">
                CERTIFICADO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kit Maquiadora Profissional
              </h2>
              <p className="text-xl opacity-90">
                Tudo que você precisa para se tornar uma profissional
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-smooth"
                >
                  <div className="text-rose-gold text-xl mt-1">✓</div>
                  <span className="text-lg leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl mb-6 font-bold">
                VALOR ÚNICO DE LANÇAMENTO POR APENAS:
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-rose-gold to-accent text-luxury-brown px-12 py-6 text-xl font-bold rounded-full shadow-glow hover:shadow-elegant transition-smooth transform hover:scale-105"
              >
                QUERO ESTE KIT POR APENAS R$ 29
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitSection;