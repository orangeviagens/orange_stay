import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  User,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockSupplierOrders } from "@/data/mockData";
import type { SupplierOrder } from "@/data/mockData";
import Footer from "@/components/Footer";

const statusColors: Record<SupplierOrder["status"], string> = {
  pendente: "text-yellow-600 bg-yellow-500/10",
  aceito: "text-blue-500 bg-blue-500/10",
  em_andamento: "text-primary bg-primary/10",
  concluido: "text-green-500 bg-green-500/10",
};

const statusLabels: Record<SupplierOrder["status"], string> = {
  pendente: "Pendente",
  aceito: "Aceito",
  em_andamento: "Em Andamento",
  concluido: "Concluído",
};

const SupplierDashboard = () => {
  const [orders, setOrders] = useState(mockSupplierOrders);
  const [activeTab, setActiveTab] = useState<"pendentes" | "agenda" | "historico">("pendentes");

  const pendentes = orders.filter((o) => o.status === "pendente");
  const agenda = orders.filter((o) => o.status === "aceito" || o.status === "em_andamento");
  const historico = orders.filter((o) => o.status === "concluido");

  const updateOrderStatus = (id: string, status: SupplierOrder["status"]) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const displayed =
    activeTab === "pendentes" ? pendentes : activeTab === "agenda" ? agenda : historico;

  const totalRevenue = orders
    .filter((o) => o.status === "concluido")
    .reduce((sum, o) => sum + o.price, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header for supplier */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-primary-foreground/60 hover:text-primary transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">O</span>
              </div>
              <div>
                <span className="font-display font-bold text-primary-foreground text-sm block leading-tight">
                  Painel do Fornecedor
                </span>
                <span className="text-xs text-primary-foreground/50">Chef Ricardo</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Star className="w-3 h-3 fill-primary" />
              Orange Select
            </span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Receita do Mês", value: `$${totalRevenue}`, icon: DollarSign, trend: "+23%" },
              { label: "Pedidos Ativos", value: String(agenda.length), icon: CalendarDays },
              { label: "Pendentes", value: String(pendentes.length), icon: Clock },
              { label: "Orange Score", value: "95", icon: TrendingUp, trend: "+2" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  {stat.trend && (
                    <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                      {stat.trend}
                    </span>
                  )}
                </div>
                <p className="font-display font-bold text-2xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {[
              { id: "pendentes" as const, label: `Pendentes (${pendentes.length})` },
              { id: "agenda" as const, label: `Agenda (${agenda.length})` },
              { id: "historico" as const, label: `Histórico (${historico.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Orders */}
          <div className="space-y-4">
            {displayed.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{order.clientName}</h3>
                      <p className="text-sm text-muted-foreground">{order.service}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[order.status]}`}
                  >
                    {statusLabels[order.status]}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Data</p>
                    <p className="text-foreground font-medium">{order.scheduledDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Horário</p>
                    <p className="text-foreground font-medium">{order.scheduledTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Valor</p>
                    <p className="text-foreground font-medium">${order.price}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-0.5">Endereço</p>
                    <p className="text-foreground font-medium truncate">{order.address}</p>
                  </div>
                </div>

                {order.notes && (
                  <div className="bg-muted rounded-xl p-3 text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Observações:</strong> {order.notes}
                  </div>
                )}

                {/* Actions */}
                {order.status === "pendente" && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => updateOrderStatus(order.id, "aceito")}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 transition"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Aceitar
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order.id, "concluido")}
                      className="flex items-center gap-2 bg-card border border-border text-muted-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:border-destructive/30 hover:text-destructive transition"
                    >
                      <XCircle className="w-4 h-4" />
                      Recusar
                    </button>
                  </div>
                )}
                {order.status === "aceito" && (
                  <button
                    onClick={() => updateOrderStatus(order.id, "em_andamento")}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 transition"
                  >
                    Iniciar Serviço
                  </button>
                )}
                {order.status === "em_andamento" && (
                  <button
                    onClick={() => updateOrderStatus(order.id, "concluido")}
                    className="flex items-center gap-2 bg-green-500 text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 transition"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Marcar como Concluído
                  </button>
                )}
              </motion.div>
            ))}

            {displayed.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Nenhum pedido nesta categoria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupplierDashboard;
