"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

interface CartItemsProps {
  data: Product[];
  qty: number;
}

const CartItem = ({ data, qty }: CartItemsProps) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data[0].id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data[0].images[0].url}
          alt={"image"}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => cart.removeAllGroup(data[0].id)}
            icon={<X size={15} color="black" />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">{data[0].name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="dark:text-gray-300 text-gray-500">
              {data[0].color.name}
            </p>
            <p className="dark:text-gray-300 text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data[0].size.value}
            </p>
          </div>
          <div className="flex flex-col gap-y-4 mt-20">
            <div className="flex items-center gap-x-4">
              <Button className="p-2" onClick={onRemove}>
                <Minus size={15} />
              </Button>
              {qty}
              <Button className="p-2" onClick={() => cart.addItem(data[0])}>
                <Plus size={15} />
              </Button>
            </div>
            <Currency value={data[0].price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
