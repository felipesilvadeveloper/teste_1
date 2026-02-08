import { Rocket, Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-heading font-bold text-white">Loufex</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando ideias em experiências digitais memoráveis. 
              Tecnologia, design e performance para o seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Serviços", "Portfólio", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Serviços</h4>
            <ul className="space-y-3">
              {["Desenvolvimento Web", "E-commerce", "SEO & Performance", "UI/UX Design"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">contato@loufex.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">São Paulo, SP - Brasil</span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              {[Instagram, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Loufex Web Studio. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
