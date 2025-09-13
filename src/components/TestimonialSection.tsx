const TestimonialSection = () => {
  return (
    <section className="luxury-gradient py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Você pode aplicar o aprendizado e conseguências que 
              vai te gerar retorno financeiro de <span className="text-rose-gold">FORMA RÁPIDA!</span>
            </h2>
            
            <p className="text-xl mb-8 leading-relaxed">
              Veja os primeiros dias que você vai dar uma guinada 
              na sua vida, conquistando resultados que você nunca 
              imaginou alcançar.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 bg-gradient-to-br from-cream to-nude rounded-3xl shadow-elegant p-4 transform -rotate-2 hover:rotate-0 transition-smooth">
                <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-gold to-accent rounded-full shadow-card"></div>
                    <div>
                      <h3 className="font-bold text-luxury-brown">Cliente Satisfeita</h3>
                      <p className="text-warm-brown text-sm">Resultado incrível</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="bg-gradient-to-r from-nude to-rose-gold/20 rounded-xl p-4">
                      <div className="space-y-2">
                        <div className="h-3 bg-warm-brown/30 rounded-full"></div>
                        <div className="h-3 bg-warm-brown/20 rounded-full w-4/5"></div>
                        <div className="h-3 bg-warm-brown/25 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square bg-gradient-to-br from-rose-gold/30 to-accent/30 rounded-xl"></div>
                      <div className="aspect-square bg-gradient-to-br from-accent/30 to-rose-gold/30 rounded-xl"></div>
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