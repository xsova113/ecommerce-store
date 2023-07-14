"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CurrencyProps {
  value?: string | number;
  className?: string;
}

const formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

const Currency = ({ value, className }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={cn("font-semibold", className)}>
      {formatter.format(Number(value))}
    </div>
  );
};

export default Currency;
