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
    <section className="section-gradient py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-brown mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-warm-brown">
            Tire suas dúvidas antes de adquirir seu kit
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card overflow-hidden hover:shadow-elegant transition-smooth"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/40 transition-smooth"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-luxury-brown pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 bg-gradient-to-br from-rose-gold to-accent rounded-full flex items-center justify-center shadow-card transition-smooth ${openIndex === index ? 'rotate-45' : ''}`}>
                  <span className="text-luxury-brown font-bold text-lg">+</span>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-r from-cream to-nude rounded-xl p-4">
                    <p className="text-warm-brown leading-relaxed">
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