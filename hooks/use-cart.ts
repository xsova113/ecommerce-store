import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { useCurrentUser } from "sanity";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;

        set({ items: [...currentItems, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        if (get().items.length === 0) return;

        const index = get().items.findIndex((item) => item.id === id);
        let newItems = [...get().items];

        if (index >= 0) {
          newItems.splice(index, 1);
          toast.success("Item removed from the cart.");
        } else {
          toast.error("Can't remove product as it's not in the cart");
        }

        set({ items: newItems });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;