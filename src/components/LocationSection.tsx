
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const LocationSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Travessa Mauricio Furtado, 30',
      subContent: 'Balneário Camboriú - SC'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(47) 99999-112',
      subContent: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contabilidaderebelo@hotmail.com',
      subContent: 'Resposta em até 24h'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 8h às 18h',
      subContent: 'Sábado: 8h às 12h'
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossa Localização</h2>
          <p className="section-subtitle">
            Venha nos visitar ou entre em contato para agendar uma reunião
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-700">{info.content}</p>
                      {info.subContent && (
                        <p className="text-sm text-gray-500 mt-1">{info.subContent}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">Atendimento Personalizado</h4>
                <p className="text-sm text-gray-700">
                  Oferecemos atendimento presencial e online. Agende uma reunião para 
                  discutir as necessidades específicas da sua empresa.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="glass-card p-2 rounded-2xl h-full">
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8!2d-48.6352!3d-26.9906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU5JzI2LjIiUyA0OMKwMzgnMDYuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localização da Contabilidade Rebelo - Travessa Mauricio Furtado, 30, Balneário Camboriú - SC"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center text-primary">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">Travessa Mauricio Furtado, 30</p>
                    <p className="text-sm">Balneário Camboriú - SC</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
