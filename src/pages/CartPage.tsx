import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, ArrowLeft, CreditCard, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";

const CartPage = () => {
  const { items, removeItem, updateItem, total, clearCart } = useCart();
  const [checkoutDone, setCheckoutDone] = useState(false);

  if (checkoutDone) {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl text-foreground mb-3">
              Pedido Confirmado!
            </h2>
            <p className="text-muted-foreground mb-8">
              Seu pedido foi recebido com sucesso. Você receberá a confirmação por WhatsApp em breve.
            </p>
            <Link
              to="/minha-conta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition"
            >
              Ver Meus Pedidos
            </Link>
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
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao catálogo
          </Link>

          <h1 className="font-display font-bold text-3xl text-foreground mb-8">
            Seu Carrinho
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">Seu carrinho está vazio.</p>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition"
              >
                Explorar Serviços
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.service.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-card border border-border rounded-2xl p-5 flex gap-4"
                  >
                    <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {item.service.image}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {item.service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.service.provider.name}
                      </p>

                      {/* Date/time */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <input
                          type="date"
                          value={item.scheduledDate}
                          onChange={(e) =>
                            updateItem(item.service.id, { scheduledDate: e.target.value })
                          }
                          className="px-3 py-2 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        <input
                          type="time"
                          value={item.scheduledTime}
                          onChange={(e) =>
                            updateItem(item.service.id, { scheduledTime: e.target.value })
                          }
                          className="px-3 py-2 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>

                      <textarea
                        placeholder="Observações (alergia, preferências...)"
                        value={item.notes}
                        onChange={(e) =>
                          updateItem(item.service.id, { notes: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-16"
                      />
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.service.id)}
                        className="text-muted-foreground hover:text-destructive transition p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateItem(item.service.id, {
                              quantity: Math.max(1, item.quantity - 1),
                            })
                          }
                          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/80"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-semibold text-foreground w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateItem(item.service.id, {
                              quantity: item.quantity + 1,
                            })
                          }
                          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/80"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="font-display font-bold text-foreground">
                        ${item.service.price * item.quantity}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-28">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    Resumo do Pedido
                  </h3>

                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.service.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground truncate mr-2">
                          {item.service.title} x{item.quantity}
                        </span>
                        <span className="text-foreground font-medium">
                          ${item.service.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-display font-bold text-xl text-foreground">
                        ${total}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Taxa de conveniência inclusa
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      clearCart();
                      setCheckoutDone(true);
                    }}
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition glow-orange"
                  >
                    <CreditCard className="w-5 h-5" />
                    Finalizar Pedido
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Pagamento seguro via Stripe ou PIX
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
