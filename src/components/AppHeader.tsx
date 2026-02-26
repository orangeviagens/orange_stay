import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart as CartIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const AppHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const links = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Minha Conta", href: "/minha-conta" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">O</span>
          </div>
          <span className="font-display font-bold text-xl text-primary-foreground">
            Orange <span className="text-primary">Viagens</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-primary-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/carrinho"
            className="relative bg-primary/10 hover:bg-primary/20 text-primary p-2.5 rounded-lg transition"
          >
            <CartIcon size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/carrinho"
            className="relative bg-primary/10 text-primary p-2 rounded-lg"
          >
            <CartIcon size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            className="text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-primary-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AppHeader;
