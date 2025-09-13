import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O kit é indicado para iniciantes ou apenas para quem já tem experiência?",
      answer: "O kit foi desenvolvido especialmente para iniciantes! Todo o material é explicado de forma didática e progressiva, permitindo que qualquer pessoa possa aprender do zero."
    },
    {
      question: "Por quanto tempo terei acesso ao material?",
      answer: "Você terá acesso vitalício a todo o material digital. Além disso, oferecemos suporte de 1 ano e mentorias mensais ao vivo."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá por email todos os links de acesso ao material digital e instruções para acessar o grupo VIP."
    },
    {
      question: "A garantia é real mesmo?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu investimento sem perguntas."
    }
  ];

  return (
    <section className="section-gradient py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-luxury mb-4 sm:mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-pink-dark">
            Tire suas dúvidas antes de adquirir seu kit
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card overflow-hidden hover:shadow-elegant transition-smooth"
            >
              <button
                className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-white/40 transition-smooth"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-bold text-pink-luxury pr-4 leading-tight">
                  {faq.question}
                </span>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-primary to-accent rounded-full flex items-center justify-center shadow-card transition-smooth flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <span className="text-pink-luxury font-bold text-base sm:text-lg">+</span>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="bg-gradient-to-r from-pink-cream to-pink-light rounded-xl p-3 sm:p-4">
                    <p className="text-pink-dark leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;