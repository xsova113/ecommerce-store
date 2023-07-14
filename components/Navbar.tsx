import React from "react";
import Link from "next/link";
import MainNav from "./MainNav";
import PopMainNav from "./PopMainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./ui/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="navbar z-50 w-full backdrop-blur fixed border-b shadow bg-slate-300/30 dark:bg-slate-800/30">
      <div className="navbar-start">
        <PopMainNav data={categories} />
        <Link href="/" className="btn btn-ghost normal-case font-bold text-xl">
          <p>
            FUSION <span className="font-thin">|</span> PRIME
          </p>
        </Link>
      </div>
      <MainNav data={categories} />
      <div className="navbar-end">
      <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;
