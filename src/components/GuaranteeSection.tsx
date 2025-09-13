const GuaranteeSection = () => {
  return (
    <section className="section-gradient py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-rose-gold to-accent rounded-full shadow-elegant flex items-center justify-center transform hover:scale-105 transition-smooth">
                <div className="text-center text-luxury-brown">
                  <div className="text-6xl font-bold">7</div>
                  <div className="text-lg font-bold">DIAS DE</div>
                  <div className="text-xl font-bold">GARANTIA</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-rose-gold rounded-full shadow-glow animate-pulse"></div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-brown mb-6">
              7 dias de garantia incondicional
            </h2>
            <p className="text-lg text-warm-brown leading-relaxed mb-6">
              Se por algum motivo você não ficar satisfeita com o material, 
              você tem 7 dias corridos para pedir o reembolso total do seu investimento.
            </p>
            <p className="text-lg text-warm-brown leading-relaxed">
              Sem perguntas, sem burocracia. Sua satisfação é nossa prioridade!
            </p>
            
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card">
              <p className="text-luxury-brown font-bold text-center">
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