import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Star,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockOrders } from "@/data/mockData";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";

const statusConfig = {
  confirmado: { icon: Clock, label: "Confirmado", color: "text-blue-500 bg-blue-500/10" },
  em_andamento: { icon: AlertCircle, label: "Em Andamento", color: "text-primary bg-primary/10" },
  concluido: { icon: CheckCircle, label: "Concluído", color: "text-green-500 bg-green-500/10" },
  cancelado: { icon: XCircle, label: "Cancelado", color: "text-destructive bg-destructive/10" },
};

const ClientAreaPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm mx-auto px-4"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl text-foreground">
                Minha Conta
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Acesse seus pedidos e acompanhe seus serviços
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:brightness-110 transition"
              >
                Entrar
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Demo: qualquer email/senha funciona
              </p>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Profile header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="font-display font-bold text-2xl text-foreground">
                  Olá, Maria!
                </h1>
                <p className="text-muted-foreground text-sm">
                  maria@email.com · Villa Sunset, Kissimmee
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-muted-foreground hover:text-foreground transition flex items-center gap-2 text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Pedidos", value: "3", icon: Package },
              { label: "Avaliações", value: "4.9", icon: Star },
              { label: "Economia", value: "$47", icon: CheckCircle },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Orders */}
          <h2 className="font-display font-semibold text-xl text-foreground mb-5">
            Meus Pedidos
          </h2>

          <div className="space-y-4">
            {mockOrders.map((order, i) => {
              const status = statusConfig[order.status];
              const StatusIcon = status.icon;

              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display font-semibold text-foreground">
                          {order.id}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.house} · Agendado: {order.scheduledDate}
                      </p>
                    </div>
                    <span className="font-display font-bold text-lg text-foreground">
                      ${order.total}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {order.services.map((svc) => (
                      <div
                        key={svc.title}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{svc.title}</span>
                        <span className="text-foreground">${svc.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition"
            >
              Contratar Mais Serviços
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClientAreaPage;
