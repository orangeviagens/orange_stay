import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa de temporada luxuosa em Orlando com piscina e palmeiras ao pôr do sol"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-8"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">
              Experiência 5 estrelas em Orlando
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
          >
            Sua casa em Orlando,{" "}
            <span className="text-gradient-orange">com experiência de resort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-foreground/70 mb-10 max-w-lg"
          >
            Chef particular, compras na geladeira, limpeza impecável e transporte — tudo organizado para sua família aproveitar cada momento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:brightness-110 transition glow-orange"
            >
              Explorar Serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/5 transition"
            >
              Como Funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary/30 border-2 border-foreground flex items-center justify-center text-xs text-primary-foreground font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm text-primary-foreground/60">
                +500 famílias atendidas em Orlando
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
