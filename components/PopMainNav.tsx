"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MainNavProps {
  data: any;
}

const PopMainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();
  const navRoutes = routes(data, pathname, params.Id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HamburgerMenuIcon className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>CATEGORY</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navRoutes.map((route) => (
          <DropdownMenuItem>
            <Link key={route.href} href={route.href} className={"my-2 mx-6"}>
              {route.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PopMainNav;
