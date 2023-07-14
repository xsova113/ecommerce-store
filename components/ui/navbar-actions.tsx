"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./button-actions";
import ThemeToggle from "./theme-toggle";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="flex gap-x-4 items-center">
      <Link
        href={"/cart"}
        // onClick={() => router.push("/cart")}
        className="flex items-center bg-black px-4 py-2 rounded-full"
      >
        <ShoppingBag size={20} className="text-white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default NavbarActions;
