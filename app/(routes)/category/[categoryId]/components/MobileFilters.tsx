"use client";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FIlter from "./Filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters = ({ sizes, colors }: MobileFiltersProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <div className="flex items-center gap-x-2">
          <span>Filters</span>
          <Plus size={17} />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-start">
          <SheetTitle>Filter products</SheetTitle>
          <SheetDescription>Pick a size and color</SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <FIlter valueKey={"sizeId"} name={"Sizes"} data={sizes} />
          <FIlter valueKey={"colorId"} name={"Colors"} data={colors} />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>confirm</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilters;
