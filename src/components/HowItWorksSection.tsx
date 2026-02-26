import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Receba sua sugestão",
    description: "Ao confirmar sua reserva, enviamos um plano personalizado via WhatsApp com os serviços ideais para sua família.",
  },
  {
    icon: ShoppingBag,
    number: "02",
    title: "Escolha seus serviços",
    description: "Monte seu pacote ou escolha serviços avulsos. Ajuste quantidades, horários e preferências com facilidade.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Pagamento simples",
    description: "Pague com cartão em dólar ou PIX em reais — em 1 clique, com confirmação instantânea.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Tudo pronto para você",
    description: "Acompanhe cada serviço em tempo real. Chegue e encontre tudo preparado para sua família.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-wide uppercase"
          >
            Como Funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-4"
          >
            Simples como pedir um delivery
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-9 h-9 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary mb-2 block">
                PASSO {step.number}
              </span>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
