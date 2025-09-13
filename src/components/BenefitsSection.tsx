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
    <section className="section-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-pink-luxury mb-4 sm:mb-6 px-4">
            O QUE VOCÊ VAI RECEBER:
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-primary to-accent rounded-full shadow-glow flex-shrink-0"></div>
                  <span className="text-pink-luxury font-bold text-sm sm:text-lg">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-56 h-72 sm:w-64 sm:h-80 bg-gradient-to-br from-pink-luxury to-pink-dark rounded-3xl shadow-elegant p-3 sm:p-4">
                <div className="w-full h-full bg-pink-cream rounded-2xl p-3 sm:p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-primary to-accent rounded-full"></div>
                    <span className="text-pink-luxury font-bold text-xs sm:text-sm">Layse Duarte</span>
                  </div>
                  <div className="flex-1 bg-gradient-to-b from-pink-light to-pink-primary/20 rounded-xl p-3 sm:p-4">
                    <div className="space-y-2">
                      <div className="h-2 sm:h-3 bg-pink-dark/20 rounded-full"></div>
                      <div className="h-2 sm:h-3 bg-pink-dark/30 rounded-full w-4/5"></div>
                      <div className="h-2 sm:h-3 bg-pink-dark/25 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-pink-primary to-accent text-pink-luxury px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105 w-full sm:w-auto">
            LIBERAR ACESSO POR APENAS R$29
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;