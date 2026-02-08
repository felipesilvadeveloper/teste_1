import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useProjects } from "@/hooks/use-projects";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Link } from "react-scroll";
import {
  Code2,
  Rocket,
  Search,
  Layout,
  ArrowRight,
  Monitor,
  CheckCircle2,
  Quote
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: testimonials, isLoading: testimonialsLoading } = useTestimonials();
  const createInquiry = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    createInquiry.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  const services = [
    {
      icon: Layout,
      title: "Desenvolvimento Web",
      description: "Sites modernos, responsivos e otimizados, construídos com as tecnologias mais recentes do mercado.",
    },
    {
      icon: Monitor,
      title: "E-commerce",
      description: "Lojas virtuais completas com foco em conversão, segurança e facilidade de gestão.",
    },
    {
      icon: Search,
      title: "SEO e Performance",
      description: "Otimização para motores de busca para garantir que seu site seja encontrado pelo seu público.",
    },
    {
      icon: Code2,
      title: "Landing Pages",
      description: "Páginas de alta conversão projetadas especificamente para campanhas de marketing e vendas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-30" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide backdrop-blur-sm">
              INOVAÇÃO DIGITAL & PERFORMANCE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading tracking-tight leading-tight">
              Transformamos Ideias em <br />
              <span className="text-gradient">Realidade Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Desenvolvemos websites de alta performance, focados em design, experiência do usuário e resultados reais para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="contact" smooth={true} offset={-80} duration={500}>
                <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300">
                  Solicite um Orçamento <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="portfolio" smooth={true} offset={-80} duration={500}>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5 hover:text-white backdrop-blur-sm">
                  Ver Portfólio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-background relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Unsplash image: Modern office setup or abstract tech */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Quem é a <span className="text-primary">Loufex?</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Somos um estúdio de desenvolvimento web apaixonado por tecnologia e inovação. 
                Nossa missão é ajudar empresas a se destacarem no mundo digital através de 
                soluções personalizadas, design impactante e código limpo.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Não criamos apenas sites; criamos ferramentas de crescimento para o seu negócio. 
                Cada projeto é tratado com atenção única aos detalhes, desde a concepção até o lançamento.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Foco total em experiência do usuário (UX)",
                  "Tecnologias modernas e escaláveis",
                  "Suporte contínuo e parceria estratégica"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Nossas Soluções</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um leque completo de serviços digitais para levar sua empresa ao próximo nível.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Projetos Recentes</h2>
              <p className="text-muted-foreground">
                Conheça alguns dos nossos trabalhos de destaque.
              </p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 group">
              Ver todos os projetos <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {projectsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 rounded-2xl bg-muted/50 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.slice(0, 6).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">O que dizem nossos clientes</h2>
          </div>

          {testimonialsLoading ? (
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background border border-white/5 p-8 rounded-2xl relative"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-muted mr-3 overflow-hidden">
                      {testimonial.avatarUrl ? (
                        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {testimonial.name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-primary">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Vamos trabalhar juntos?</h2>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato para transformar sua ideia em realidade.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field} 
                            className="bg-muted/50 border-white/10 focus:border-primary/50 h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu@email.com" 
                            {...field} 
                            className="bg-muted/50 border-white/10 focus:border-primary/50 h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Conte-nos um pouco sobre seu projeto..." 
                          className="min-h-[150px] bg-muted/50 border-white/10 focus:border-primary/50 resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={createInquiry.isPending}
                  className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  {createInquiry.isPending ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
