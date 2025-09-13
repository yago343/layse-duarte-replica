const GuaranteeSection = () => {
  return (
    <section className="section-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-primary to-accent rounded-full shadow-elegant flex items-center justify-center transform hover:scale-105 transition-smooth">
                <div className="text-center text-pink-luxury">
                  <div className="text-4xl sm:text-6xl font-bold">7</div>
                  <div className="text-sm sm:text-lg font-bold">DIAS DE</div>
                  <div className="text-base sm:text-xl font-bold">GARANTIA</div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-pink-primary rounded-full shadow-glow animate-pulse"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-luxury mb-4 sm:mb-6">
              7 dias de garantia incondicional
            </h2>
            <p className="text-base sm:text-lg text-pink-dark leading-relaxed mb-4 sm:mb-6">
              Se por algum motivo você não ficar satisfeita com o material, 
              você tem 7 dias corridos para pedir o reembolso total do seu investimento.
            </p>
            <p className="text-base sm:text-lg text-pink-dark leading-relaxed mb-6 sm:mb-8">
              Sem perguntas, sem burocracia. Sua satisfação é nossa prioridade!
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-card">
              <p className="text-pink-luxury font-bold text-center text-sm sm:text-base leading-relaxed">
                "Estamos tão confiantes na qualidade do nosso material que oferecemos 
                esta garantia sem riscos para você!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;