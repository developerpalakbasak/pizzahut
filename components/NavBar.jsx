"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Menu from "./DesktopMenuItem";
import { useCart } from "@/context/cartContext";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import DesktopMenuItem from "./DesktopMenuItem";

const Navbar = () => {

    const { cart } = useCart();




    return (
        <nav className="relative w-[90vw] md:w-[80vw] max-w-5xl mx-auto select-none">
            <div className="rounded-xl absolute flex items-center justify-between bg-secondary w-full mt-2 px-4 py-2 min-h-[2.5rem] sm:min-h-[3rem]">

                {/* Mobile menu */}
                <MobileMenu cart={cart} />

                {/* Logo Title */}
                <div className="text-xl font-bold logo flex items-center">
                    <Link href="/">
                        <span className="text-primary">Pizza</span>Hut
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className=" hidden sm:block">
                    <DesktopMenuItem />
                </div>

                <Link href="/cart">

                    <div className="relative rounded-[0.50rem] px-2 py-1 bg-primary flex items-center">
                        {/* Cart Icon Button */}
                        <button className="relative transition duration-300 px-1 py-1 ">
                            <FaShoppingCart color="white" size={20} />
                        </button>

                        {/* Amount Badge */}
                       
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                                {cart.length}
                            </span>
    
                    </div>

                </Link>


            </div>
        </nav>
    );
};

export default Navbar;
