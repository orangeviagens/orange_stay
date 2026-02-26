import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import ClientAreaPage from "./pages/ClientAreaPage";
import SupplierDashboard from "./pages/SupplierDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<CatalogPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/minha-conta" element={<ClientAreaPage />} />
            <Route path="/fornecedor" element={<SupplierDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
