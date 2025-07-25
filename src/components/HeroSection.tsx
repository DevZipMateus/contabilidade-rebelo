
import { ChevronRight, Shield, Award, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-accent/50"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="text-white space-y-8">
            <span className="inline-block text-sm font-semibold py-2 px-4 bg-accent/20 text-accent rounded-full backdrop-blur-sm">
              Mais de 30 anos de experiência
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Contabilidade <br />
              <span className="text-accent">Rebelo</span>
            </h1>
            <p className="text-xl text-white/90 max-w-xl leading-relaxed">
              Ajudamos você empresário nas melhores escolhas tributárias e tomadas de decisões. 
              Em atividade desde 24/06/2010, com profissional com mais de 30 anos de experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contato" 
                className="btn-accent flex items-center gap-2 justify-center"
              >
                Solicitar Orçamento
                <ChevronRight className="h-5 w-5" />
              </a>
              <a 
                href="#servicos" 
                className="btn-secondary text-center"
              >
                Conheça Nossos Serviços
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">2010</div>
                <div className="text-sm text-white/80">Fundação</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-white/80">Dedicação</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-accent/20 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-2 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" 
                  alt="Contabilidade Profissional - Escritório moderno com profissionais experientes" 
                  className="rounded-3xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
