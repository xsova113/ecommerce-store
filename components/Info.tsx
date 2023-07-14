"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  product: Product;
}

const Info = ({ product }: InfoProps) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(product);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={product.price} />
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          <div>{product?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: product?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 items-center gap-x-3">
        <Button onClick={onAddToCart} className="gap-x-2 rounded-full">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
