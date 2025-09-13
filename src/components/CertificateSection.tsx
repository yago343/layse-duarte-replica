const CertificateSection = () => {
  return (
    <section className="section-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-luxury mb-8 sm:mb-16 px-4 leading-tight">
          Mais de 200 alunas atualizadas com aulas, técnicas e capacitação Impecável
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Certificate mockup */}
          <div className="bg-white rounded-2xl shadow-card p-4 sm:p-6 transform hover:scale-105 transition-smooth">
            <div className="aspect-[3/4] bg-gradient-to-b from-pink-cream to-pink-light rounded-xl p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-primary to-accent rounded-full mx-auto mb-3 sm:mb-4 shadow-glow"></div>
                <h3 className="font-bold text-pink-luxury text-base sm:text-lg mb-1 sm:mb-2">CERTIFICADO</h3>
                <p className="text-pink-dark text-xs sm:text-sm">Profissional Qualificada</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="h-1.5 sm:h-2 bg-pink-dark/20 rounded-full"></div>
                <div className="h-1.5 sm:h-2 bg-pink-dark/30 rounded-full w-4/5 mx-auto"></div>
                <div className="h-1.5 sm:h-2 bg-pink-dark/25 rounded-full w-3/5 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Sobrancelha result */}
          <div className="bg-white rounded-2xl shadow-card p-4 sm:p-6 transform hover:scale-105 transition-smooth">
            <div className="aspect-[3/4] bg-gradient-to-b from-pink-light to-pink-primary/30 rounded-xl p-4 sm:p-6 flex flex-col justify-center items-center">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-bold text-pink-luxury text-base sm:text-lg mb-1 sm:mb-2">RESULTADO</h3>
                <p className="text-pink-dark text-xs sm:text-sm">Antes & Depois</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                <div className="aspect-square bg-gradient-to-br from-pink-dark/20 to-pink-luxury/20 rounded-xl"></div>
                <div className="aspect-square bg-gradient-to-br from-pink-primary/30 to-accent/30 rounded-xl shadow-glow"></div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl shadow-card p-4 sm:p-6 transform hover:scale-105 transition-smooth sm:col-span-2 lg:col-span-1">
            <div className="aspect-[3/4] bg-gradient-to-b from-pink-cream to-pink-light rounded-xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="text-center">
                <h3 className="font-bold text-pink-luxury text-base sm:text-lg mb-1 sm:mb-2">FERRAMENTAS</h3>
                <p className="text-pink-dark text-xs sm:text-sm">Kit Completo</p>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-primary/40 to-accent/40 rounded-full"></div>
                <div className="h-3 sm:h-4 bg-gradient-to-r from-accent/40 to-pink-primary/40 rounded-full"></div>
                <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-primary/40 to-accent/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;