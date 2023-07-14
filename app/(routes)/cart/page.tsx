"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useMemo, useState } from "react";
import CartItem from "./components/cart-items";
import Summary from "./components/Summary";
import { Product } from "@/types";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const [groupedItems, setGroupedItems] = useState<any>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMemo(() => {
    const groupedData = cart.items.reduce((results: any, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(groupedData);
  }, [cart.items]);

  if (!isMounted) return null;

  return (
    <Container className="pt-24">
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {!cart.items.length && <p>No items added to cart</p>}
            <ul>
              {Object.entries(groupedItems).map(([key, items]: any) => (
                <CartItem key={key} data={items} qty={items.length} />
              ))}
            </ul>
          </div>
          <Summary groupedItems={groupedItems} />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
