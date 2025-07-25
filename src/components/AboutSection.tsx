
import { CheckCircle, Calendar, Award, Users, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    'Mais de 30 anos de experiência',
    'Profissional qualificado e atualizado',
    'Atendimento personalizado',
    'Assessoria completa',
    'Soluções tributárias eficientes',
    'Suporte na tomada de decisões'
  ];

  const stats = [
    {
      icon: Calendar,
      value: '2010',
      label: 'Fundação',
      description: 'Em atividade desde 24/06/2010'
    },
    {
      icon: Award,
      value: '30+',
      label: 'Anos de Experiência',
      description: 'Profissional com mais de 30 anos'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Dedicação',
      description: 'Compromisso com seu sucesso'
    },
    {
      icon: TrendingUp,
      value: '13+',
      label: 'Anos de Atividade',
      description: 'Empresa sólida e confiável'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre a Contabilidade Rebelo</h2>
          <p className="section-subtitle">
            Conheça nossa história e nosso compromisso com a excelência em serviços contábeis
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Equipe Contabilidade Rebelo - Profissionais experientes em contabilidade" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold py-2 px-4 bg-primary/10 text-primary rounded-full">
                Nossa História
              </span>
              <h3 className="text-3xl font-bold text-gray-900">
                Experiência que faz a diferença
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Contabilidade Rebelo está em atividade desde 24/06/2010, com o profissional 
                com mais de 30 anos de experiência, ajudando você empresário nas melhores 
                escolhas tributárias e tomadas de decisões.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa missão é oferecer soluções contábeis, fiscais e de assessoria financeira 
                que contribuam efetivamente para o crescimento e sucesso do seu negócio, 
                sempre com transparência e dedicação.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="btn-primary inline-block mt-8">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in-up" delay={200} className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
