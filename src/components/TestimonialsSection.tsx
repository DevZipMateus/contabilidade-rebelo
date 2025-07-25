
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      company: "Empresa de Construção",
      content: "Excelente atendimento! A experiência de mais de 30 anos da Contabilidade Rebelo faz toda a diferença. Sempre me orientam nas melhores decisões tributárias.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Loja de Roupas",
      content: "Profissional muito competente e atencioso. Desde que comecei a trabalhar com a Contabilidade Rebelo, minha empresa só cresceu. Recomendo!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      company: "Restaurante",
      content: "Serviço de qualidade excepcional. A assessoria financeira me ajudou a organizar melhor meu negócio e a tomar decisões mais acertadas.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Quer fazer parte dos nossos clientes satisfeitos?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Junte-se a centenas de empresários que já confiam na nossa experiência 
              para cuidar da contabilidade do seu negócio.
            </p>
            <a 
              href="#contato" 
              className="btn-primary inline-block"
            >
              Solicite uma consultoria gratuita
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
