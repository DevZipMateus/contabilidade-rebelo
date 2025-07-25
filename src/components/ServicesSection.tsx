
import { FileText, Calculator, TrendingUp, Building, Users, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: 'Serviços Fiscais',
      description: 'Gestão completa de obrigações fiscais, apuração de impostos e planejamento tributário para otimizar sua carga fiscal e garantir conformidade.'
    },
    {
      icon: Calculator,
      title: 'Serviços Contábeis',
      description: 'Contabilidade completa para empresas de todos os portes, com demonstrativos claros, balancetes e relatórios gerenciais precisos.'
    },
    {
      icon: TrendingUp,
      title: 'Assessoria Financeira',
      description: 'Consultoria financeira especializada para auxiliar na gestão empresarial, análise de investimentos e tomada de decisões estratégicas.'
    },
    {
      icon: Building,
      title: 'Abertura de Empresas',
      description: 'Auxílio completo na abertura, alteração e encerramento de empresas, com agilidade e total conformidade legal.'
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Gestão completa da folha de pagamento, admissões, rescisões e todas as rotinas trabalhistas e previdenciárias.'
    },
    {
      icon: Shield,
      title: 'Planejamento Tributário',
      description: 'Estratégias tributárias personalizadas para reduzir legalmente a carga fiscal e maximizar a eficiência tributária da empresa.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em contabilidade, fiscal e assessoria financeira 
            para atender todas as necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de ajuda com suas obrigações contábeis?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer 
              com segurança e eficiência tributária.
            </p>
            <a 
              href="#contato" 
              className="btn-accent inline-block"
            >
              Solicite um orçamento gratuito
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
