import { createContext, useContext, useState, ReactNode } from "react";
import { Service } from "@/data/mockData";

export interface CartItem {
  service: Service;
  quantity: number;
  scheduledDate: string;
  scheduledTime: string;
  notes: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (service: Service) => void;
  removeItem: (serviceId: string) => void;
  updateItem: (serviceId: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (service: Service) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.service.id === service.id);
      if (existing) {
        return prev.map((i) =>
          i.service.id === service.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { service, quantity: 1, scheduledDate: "", scheduledTime: "", notes: "" }];
    });
  };

  const removeItem = (serviceId: string) => {
    setItems((prev) => prev.filter((i) => i.service.id !== serviceId));
  };

  const updateItem = (serviceId: string, updates: Partial<CartItem>) => {
    setItems((prev) =>
      prev.map((i) =>
        i.service.id === serviceId ? { ...i, ...updates } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.service.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateItem, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
