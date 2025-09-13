const BenefitsSection = () => {
  const benefits = [
    "APOSTILA COMPLETA EM 150 FOLHAS",
    "METODOLOGIA PROFISSIONAL EXCLUSIVA",
    "+ DE 50 RECEITAS DE HENNA",
    "GRUPO EXCLUSIVO VIP",
    "SUPORTE DE 1 ANO",
    "MENTORIA AO VIVO 1 X POR MÊS",
    "AULA À ATIVIDADE COM LAYSE DUARTE DE PRONTIDÃO"
  ];

  return (
    <section className="section-gradient py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-brown mb-6">
            O QUE VOCÊ VAI RECEBER:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose-gold to-accent rounded-full shadow-glow"></div>
                  <span className="text-luxury-brown font-bold text-lg">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-luxury-brown to-warm-brown rounded-3xl shadow-elegant p-4">
                <div className="w-full h-full bg-cream rounded-2xl p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-gold to-accent rounded-full"></div>
                    <span className="text-luxury-brown font-bold text-sm">Layse Duarte</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-b from-nude to-rose-gold/20 rounded-xl p-4">
                    <div className="space-y-2">
                      <div className="h-3 bg-warm-brown/20 rounded-full"></div>
                      <div className="h-3 bg-warm-brown/30 rounded-full w-4/5"></div>
                      <div className="h-3 bg-warm-brown/25 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-rose-gold to-accent text-luxury-brown px-8 py-4 rounded-full font-bold text-lg shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105">
            LIBERAR ACESSO POR APENAS R$29
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;