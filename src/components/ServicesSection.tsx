import { motion } from "framer-motion";
import {
  ChefHat,
  ShoppingCart,
  Sparkles,
  Car,
  PartyPopper,
  Baby,
} from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Chef Particular",
    description: "Refeições preparadas na sua casa por chefs selecionados. Culinária brasileira, italiana, americana e mais.",
    price: "A partir de $89",
  },
  {
    icon: ShoppingCart,
    title: "Grocery Delivery",
    description: "Geladeira e despensa abastecidas antes da sua chegada com tudo que sua família precisa.",
    price: "A partir de $49",
  },
  {
    icon: Sparkles,
    title: "Limpeza Premium",
    description: "Limpeza profissional pré check-in, mid-stay e checkout com padrão hoteleiro 5 estrelas.",
    price: "A partir de $79",
  },
  {
    icon: Car,
    title: "Transporte",
    description: "Transfer aeroporto, transporte para parques e passeios com veículos confortáveis e pontuais.",
    price: "A partir de $59",
  },
  {
    icon: PartyPopper,
    title: "Decoração & Festas",
    description: "Aniversários, surpresas românticas e decorações temáticas para tornar momentos inesquecíveis.",
    price: "A partir de $149",
  },
  {
    icon: Baby,
    title: "Serviços Familiares",
    description: "Aluguel de carrinho, berço, cadeirinha e equipamentos para bebês e crianças.",
    price: "A partir de $29",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-wide uppercase"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-4"
          >
            Tudo para sua casa em Orlando
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Fornecedores pré-aprovados com curadoria rigorosa para garantir a melhor experiência para sua família.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-primary font-semibold text-sm">
                {service.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
