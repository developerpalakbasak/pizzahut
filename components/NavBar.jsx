"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaShoppingCart } from "react-icons/fa";
import Menu from "./DesktopMenuItem";
import { useCart } from "@/context/cartContext";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    
    const { cart } = useCart();




    return (
        <nav className="relative w-[90vw] md:w-[80vw] max-w-5xl mx-auto select-none">
            <div className="rounded-xl absolute flex justify-between sm:justify-around bg-secondry w-full mt-2 px-4 py-2 min-h-[2.5rem] sm:min-h-[3rem]">
                <div className="text-xl font-bold logo flex items-center">
                    <Link href="/">
                        <span className="text-primary">Pizza</span>Hut
                    </Link>
                </div>

                {/* Desktop menu */}
              <DesktopMenu cart={cart}/>

                {/* Mobile menu */}
                <MobileMenu cart={cart}/>
            </div>
        </nav>
    );
};

export default Navbar;
