"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaShoppingCart } from "react-icons/fa";
import Menu from "./Menu";

const Navbar = () => {
    const cart = 3;
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const mobileMenuRef = useRef(null);


    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenuToggle(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [mobileMenuToggle]);

    return (
        <nav className="relative w-[90vw] md:w-[80vw] max-w-5xl mx-auto select-none">
            <div className="rounded-xl absolute flex justify-between sm:justify-around bg-secondry w-full mt-2 px-4 py-2 min-h-[2.5rem] sm:min-h-[3rem]">
                <div className="text-xl font-bold logo flex items-center">
                    <Link href="/">
                        <span className="text-primary">Pizza</span>Hut
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="flex items-center">
                    <Menu />
                </div>

                {/* Cart */}
                <div className="hidden sm:flex items-center">
                    <Link
                        href="/cart"
                        className="flex items-center gap-2 px-3 py-1 text-white hover:bg-green-300 hover:text-green-600 rounded-2xl bg-primary"
                    >
                        <FaShoppingCart /> Cart ({cart})
                    </Link>
                </div>

                {/* Mobile menu */}
                <div ref={mobileMenuRef} className="relative rounded-2xl px-2 py-1 bg-primary sm:hidden flex items-center">
                    <span className="w-[25px]" onClick={() => setMobileMenuToggle(!mobileMenuToggle)}>
                        {mobileMenuToggle ? <FaAngleUp color="white" className="w-full h-full" /> : <FaAngleDown color="white" className="w-full h-full" />}
                    </span>

                    {mobileMenuToggle && (
                        <div className="absolute bg-white left-0 top-10 rounded w-40 shadow-lg">
                            <ul className="flex flex-col font-semibold w-full gap-2 px-5 py-3 text-sm rounded-2xl">
                                <li>
                                    <Link onClick={() => setMobileMenuToggle(false)} href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMobileMenuToggle(false)} href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMobileMenuToggle(false)} href="/shop">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMobileMenuToggle(false)} href="/cart">
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
