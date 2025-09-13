const TestimonialSection = () => {
  return (
    <section className="luxury-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
              Você pode aplicar o aprendizado e conseguências que 
              vai te gerar retorno financeiro de <span className="text-pink-primary">FORMA RÁPIDA!</span>
            </h2>
            
            <p className="text-base sm:text-xl mb-6 sm:mb-8 leading-relaxed">
              Veja os primeiros dias que você vai dar uma guinada 
              na sua vida, conquistando resultados que você nunca 
              imaginou alcançar.
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-pink-cream to-pink-light rounded-3xl shadow-elegant p-3 sm:p-4 transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-smooth">
                <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-primary to-accent rounded-full shadow-card"></div>
                    <div>
                      <h3 className="font-bold text-pink-luxury text-sm sm:text-base">Cliente Satisfeita</h3>
                      <p className="text-pink-dark text-xs sm:text-sm">Resultado incrível</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-r from-pink-light to-pink-primary/20 rounded-xl p-3 sm:p-4">
                      <div className="space-y-2">
                        <div className="h-2 sm:h-3 bg-pink-dark/30 rounded-full"></div>
                        <div className="h-2 sm:h-3 bg-pink-dark/20 rounded-full w-4/5"></div>
                        <div className="h-2 sm:h-3 bg-pink-dark/25 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="aspect-square bg-gradient-to-br from-pink-primary/30 to-accent/30 rounded-xl"></div>
                      <div className="aspect-square bg-gradient-to-br from-accent/30 to-pink-primary/30 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;