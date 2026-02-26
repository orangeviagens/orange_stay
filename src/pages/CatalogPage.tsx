import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Plus, Check, Search } from "lucide-react";
import { services, categories } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const { addItem, items } = useCart();

  const filtered = services.filter((s) => {
    const matchCategory = activeCategory === "all" || s.category === activeCategory;
    const matchSearch =
      search === "" ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const isInCart = (id: string) => items.some((i) => i.service.id === id);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="mb-10">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Catálogo de Serviços
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Escolha os serviços ideais para sua estadia em Orlando. Fornecedores pré-aprovados com curadoria rigorosa.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-6 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar serviços..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-muted flex items-center justify-center text-5xl">
                  {service.image}
                </div>

                <div className="p-6">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Provider */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {service.provider.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-foreground truncate">
                          {service.provider.name}
                        </span>
                        {service.provider.isSelect && (
                          <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">
                            Select
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-primary fill-primary" />
                        {service.provider.rating} ({service.provider.reviewCount})
                      </div>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display font-bold text-xl text-foreground">
                        ${service.price}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        {service.priceUnit}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.estimatedTime}
                      </span>
                      <button
                        onClick={() => addItem(service)}
                        disabled={isInCart(service.id)}
                        className={`p-2.5 rounded-xl transition font-medium text-sm ${
                          isInCart(service.id)
                            ? "bg-primary/10 text-primary cursor-default"
                            : "bg-primary text-primary-foreground hover:brightness-110"
                        }`}
                      >
                        {isInCart(service.id) ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nenhum serviço encontrado.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;
