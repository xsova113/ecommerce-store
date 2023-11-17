"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/types";
import { Button } from "./button";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { EventHandler, MouseEventHandler } from "react";

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${item.id}`);
  };

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    previewModal.onOpen(item);
  };

  const onAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    cart.addItem(item);
  };

  return (
    <Card className="border group dark:bg-slate-900">
      <CardContent
        className="p-0 cursor-pointer"
        onClick={() => router.push(`/product/${item.id}`)}
      >
        <div className="relative w-full h-60">
          <Image
            src={item?.images[0]?.url}
            alt={"image"}
            fill
            className="object-contain object-center rounded-t-lg"
          />
          <div className="opacity-0 group-hover:opacity-100 absolute right-2 top-2 transition">
            <div className="flex gap-x-2 justify-center">
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={15} className="text-gray-600" />}
              />
              <div className="hidden sm:block">
                <IconButton
                  onClick={onPreview}
                  icon={<Expand size={15} className="text-gray-600" />}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardHeader className="py-4">
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.category?.name}</CardDescription>
        <div className="flex items-center justify-between pt-1">
          <Currency value={item?.price} />
        </div>
      </CardHeader>
      <CardFooter className="pb-4">
        <Button onClick={handleClick}>BUY NOW</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
