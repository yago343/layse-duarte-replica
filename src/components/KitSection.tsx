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
    <section className="luxury-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-luxury via-pink-dark to-pink-luxury rounded-3xl shadow-elegant p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-pink-primary/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block bg-gradient-to-r from-pink-primary to-accent text-pink-luxury px-4 py-2 sm:px-6 rounded-full font-bold text-xs sm:text-sm mb-4 sm:mb-6 shadow-glow">
                CERTIFICADO
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Kit Maquiadora Profissional
              </h2>
              <p className="text-lg sm:text-xl opacity-90">
                Tudo que você precisa para se tornar uma profissional
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/15 transition-smooth"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-pink-primary text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-sm sm:text-lg leading-relaxed">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 font-bold">
                VALOR ÚNICO DE LANÇAMENTO POR APENAS:
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-primary to-accent text-pink-luxury px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-glow hover:shadow-elegant transition-smooth transform hover:scale-105 w-full sm:w-auto"
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