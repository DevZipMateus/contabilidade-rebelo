
import { Phone, Mail, MapPin, Clock, Calculator, FileText, TrendingUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/9f000106-b36f-4846-989d-e3b6bc80f35e.png" 
                alt="Contabilidade Rebelo"
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">Contabilidade Rebelo</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Mais de 30 anos de experiência ajudando empresários nas melhores 
              escolhas tributárias e tomadas de decisões.
            </p>
            <div className="text-sm text-gray-400">
              <p>Desde 24/06/2010</p>
              <p>Balneário Camboriú - SC</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Serviços Fiscais
              </a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors flex items-center">
                <Calculator className="h-4 w-4 mr-2" />
                Serviços Contábeis
              </a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Assessoria Financeira
              </a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Abertura de Empresas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Departamento Pessoal</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Planejamento Tributário</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(47) 99999-112</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p className="break-words">contabilidaderebelo@hotmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Travessa Mauricio Furtado, 30</p>
                  <p>Balneário Camboriú - SC</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-3 w-3" />
                </div>
                <div>
                  <p>Seg-Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Contabilidade Rebelo. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com tecnologia moderna e responsiva</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
