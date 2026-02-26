import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Pacotes", href: "#pacotes" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">O</span>
          </div>
          <span className="font-display font-bold text-xl text-primary-foreground">
            Orange <span className="text-primary">Viagens</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition"
          >
            Começar Agora
          </a>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-foreground/95 backdrop-blur-xl border-t border-primary/10"
          >
            <div className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Começar Agora
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
