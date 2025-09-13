const AboutSection = () => {
  return (
    <section className="luxury-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-white order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block bg-gradient-to-r from-pink-primary to-accent text-pink-luxury px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-3 sm:mb-4 shadow-glow">
                QUEM É A INSTRUTORA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Layse Duarte
              </h2>
            </div>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              <strong>Layse Duarte</strong> é uma renomada especialista em maquiagem e design de sobrancelhas, 
              com mais de 8 anos de experiência no mercado da beleza.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Formada pelas melhores escolas do país, ela já treinou centenas de profissionais 
              que hoje são referência em suas cidades. Sua metodologia exclusiva combina 
              técnicas tradicionais com as mais modernas tendências do mercado.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Através de sua paixão pelo ensino e dedicação aos alunos, Layse desenvolveu 
              este kit completo para democratizar o conhecimento e ajudar mais mulheres 
              a alcançarem sua independência financeira através da beleza.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-3 h-3 bg-pink-primary rounded-full shadow-glow flex-shrink-0"></div>
                <span className="text-base sm:text-lg">Mais de 8 anos de experiência</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-3 h-3 bg-accent rounded-full shadow-glow flex-shrink-0"></div>
                <span className="text-base sm:text-lg">Centenas de alunas formadas</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-3 h-3 bg-pink-primary rounded-full shadow-glow flex-shrink-0"></div>
                <span className="text-base sm:text-lg">Metodologia exclusiva comprovada</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-pink-cream to-pink-light rounded-3xl shadow-elegant overflow-hidden transform hover:scale-105 transition-smooth">
                <div className="w-full h-full bg-gradient-to-b from-pink-primary/20 to-accent/20 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-luxury to-pink-dark rounded-full mx-auto mb-4 sm:mb-6 shadow-elegant flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-primary to-accent rounded-full shadow-glow"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-pink-luxury mb-1 sm:mb-2">Layse Duarte</h3>
                    <p className="text-pink-dark font-medium text-sm sm:text-base">Especialista em Beleza</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-luxury/30 to-pink-dark/30 rounded-full"></div>
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-dark/30 to-pink-luxury/30 rounded-full w-4/5"></div>
                    <div className="h-3 sm:h-4 bg-gradient-to-r from-pink-luxury/30 to-pink-dark/30 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-primary to-accent rounded-full shadow-glow animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-accent to-pink-primary rounded-full shadow-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;