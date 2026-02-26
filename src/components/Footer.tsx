import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold">O</span>
            </div>
            <span className="font-display font-bold text-lg text-primary-foreground">
              Orange <span className="text-primary">Viagens</span>
            </span>
          </Link>

          <p className="text-primary-foreground/40 text-sm">
            © 2026 Orange Viagens. Orlando, FL — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/fornecedor" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Painel Fornecedor
            </Link>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Termos
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
