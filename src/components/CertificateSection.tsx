const CertificateSection = () => {
  return (
    <section className="section-gradient py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury-brown mb-16">
          Mais de 200 alunas atualizadas com aulas, técnicas e capacitação Impecável
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Certificate mockup */}
          <div className="bg-white rounded-2xl shadow-card p-6 transform hover:scale-105 transition-smooth">
            <div className="aspect-[3/4] bg-gradient-to-b from-cream to-nude rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-rose-gold to-accent rounded-full mx-auto mb-4 shadow-glow"></div>
                <h3 className="font-bold text-luxury-brown text-lg mb-2">CERTIFICADO</h3>
                <p className="text-warm-brown text-sm">Profissional Qualificada</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-warm-brown/20 rounded-full"></div>
                <div className="h-2 bg-warm-brown/30 rounded-full w-4/5 mx-auto"></div>
                <div className="h-2 bg-warm-brown/25 rounded-full w-3/5 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Sobrancelha result */}
          <div className="bg-white rounded-2xl shadow-card p-6 transform hover:scale-105 transition-smooth">
            <div className="aspect-[3/4] bg-gradient-to-b from-nude to-rose-gold/30 rounded-xl p-6 flex flex-col justify-center items-center">
              <div className="text-center mb-6">
                <h3 className="font-bold text-luxury-brown text-lg mb-2">RESULTADO</h3>
                <p className="text-warm-brown text-sm">Antes & Depois</p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="aspect-square bg-gradient-to-br from-warm-brown/20 to-luxury-brown/20 rounded-xl"></div>
                <div className="aspect-square bg-gradient-to-br from-rose-gold/30 to-accent/30 rounded-xl shadow-glow"></div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl shadow-card p-6 transform hover:scale-105 transition-smooth">
            <div className="aspect-[3/4] bg-gradient-to-b from-cream to-nude rounded-xl p-6 flex flex-col justify-between">
              <div className="text-center">
                <h3 className="font-bold text-luxury-brown text-lg mb-2">FERRAMENTAS</h3>
                <p className="text-warm-brown text-sm">Kit Completo</p>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-rose-gold/40 to-accent/40 rounded-full"></div>
                <div className="h-4 bg-gradient-to-r from-accent/40 to-rose-gold/40 rounded-full"></div>
                <div className="h-4 bg-gradient-to-r from-rose-gold/40 to-accent/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;