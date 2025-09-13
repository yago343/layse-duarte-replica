const AboutSection = () => {
  return (
    <section className="luxury-gradient py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-rose-gold to-accent text-luxury-brown px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-glow">
                QUEM É A INSTRUTORA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Layse Duarte
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Layse Duarte</strong> é uma renomada especialista em maquiagem e design de sobrancelhas, 
              com mais de 8 anos de experiência no mercado da beleza.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Formada pelas melhores escolas do país, ela já treinou centenas de profissionais 
              que hoje são referência em suas cidades. Sua metodologia exclusiva combina 
              técnicas tradicionais com as mais modernas tendências do mercado.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Através de sua paixão pelo ensino e dedicação aos alunos, Layse desenvolveu 
              este kit completo para democratizar o conhecimento e ajudar mais mulheres 
              a alcançarem sua independência financeira através da beleza.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-rose-gold rounded-full shadow-glow"></div>
                <span className="text-lg">Mais de 8 anos de experiência</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full shadow-glow"></div>
                <span className="text-lg">Centenas de alunas formadas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-rose-gold rounded-full shadow-glow"></div>
                <span className="text-lg">Metodologia exclusiva comprovada</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-cream to-nude rounded-3xl shadow-elegant overflow-hidden transform hover:scale-105 transition-smooth">
                <div className="w-full h-full bg-gradient-to-b from-rose-gold/20 to-accent/20 p-8 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-luxury-brown to-warm-brown rounded-full mx-auto mb-6 shadow-elegant flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-gold to-accent rounded-full shadow-glow"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-luxury-brown mb-2">Layse Duarte</h3>
                    <p className="text-warm-brown font-medium">Especialista em Beleza</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-luxury-brown/30 to-warm-brown/30 rounded-full"></div>
                    <div className="h-4 bg-gradient-to-r from-warm-brown/30 to-luxury-brown/30 rounded-full w-4/5"></div>
                    <div className="h-4 bg-gradient-to-r from-luxury-brown/30 to-warm-brown/30 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-rose-gold to-accent rounded-full shadow-glow animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-accent to-rose-gold rounded-full shadow-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;