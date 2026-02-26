import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const bundles = [
  {
    name: "Welcome Pack Basic",
    price: "$149",
    discount: "10% off",
    items: ["Grocery essencial", "Limpeza pré check-in"],
    featured: false,
  },
  {
    name: "Welcome Pack Premium",
    price: "$349",
    discount: "15% off",
    items: [
      "Grocery completo",
      "Limpeza premium",
      "Decoração de boas-vindas",
      "Kit amenities",
    ],
    featured: true,
  },
  {
    name: "Family Fun Bundle",
    price: "$299",
    discount: "12% off",
    items: [
      "Transfer aeroporto",
      "2 transfers para parques",
      "Grocery completo",
    ],
    featured: false,
  },
  {
    name: "Birthday Magic",
    price: "$499",
    discount: "20% off",
    items: [
      "Decoração de festa completa",
      "Bolo personalizado",
      "Chef para jantar especial",
    ],
    featured: false,
  },
];

const BundlesSection = () => {
  return (
    <section id="pacotes" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-wide uppercase"
          >
            Pacotes Especiais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-4"
          >
            Monte sua experiência ideal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Economize combinando serviços em pacotes pensados para cada momento da sua viagem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                bundle.featured
                  ? "bg-foreground text-primary-foreground border-2 border-primary shadow-xl shadow-primary/10"
                  : "bg-card border border-border"
              }`}
            >
              {bundle.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Mais Popular
                </div>
              )}

              <h3
                className={`font-display font-semibold text-lg mb-2 ${
                  bundle.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {bundle.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className={`font-display font-bold text-3xl ${
                    bundle.featured ? "text-primary" : "text-foreground"
                  }`}
                >
                  {bundle.price}
                </span>
              </div>
              <span
                className={`text-xs font-medium mb-6 ${
                  bundle.featured
                    ? "text-primary/80"
                    : "text-primary"
                }`}
              >
                {bundle.discount} vs. avulso
              </span>

              <ul className="space-y-3 mb-8 flex-1">
                {bundle.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-sm ${
                      bundle.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        bundle.featured ? "text-primary" : "text-primary"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition ${
                  bundle.featured
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                Reservar Pacote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
