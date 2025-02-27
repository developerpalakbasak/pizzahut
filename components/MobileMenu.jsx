"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const MobileMenu = ({ cart }) => {

    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const mobileMenuRef = useRef(null);
    const path = usePathname();




    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenuToggle(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [mobileMenuToggle]);




    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Shop", path: "/shop" },
    ];

    console.log(path)


    return (

        <div ref={mobileMenuRef} className="relative rounded-2xl px-2 py-1 bg-primary sm:hidden flex items-center">
            <span className="w-[25px]" onClick={() => setMobileMenuToggle(!mobileMenuToggle)}>
                {mobileMenuToggle ? <FaAngleUp color="white" className="w-full h-full" /> : <FaAngleDown color="white" className="w-full h-full" />}
            </span>

            {mobileMenuToggle && (
                <div className="absolute bg-white -left-6 top-10 rounded w-24 shadow-lg">
                    <ul className="flex flex-col font-semibold w-full gap-6 px-3 py-3 text-sm rounded-2xl">
                        {links.map((link) => (<li key={link.name} className={path === link.path ? "text-primary" : ""} >
                            <Link onClick={() => setMobileMenuToggle(false)} href={link.path}>
                                {link.name}
                            </Link>
                        </li>))}
                    </ul>
                    <span className='bg-primary font-semibold text-white px-2 py-2 block rounded mt-2'>
                        <Link onClick={() => setMobileMenuToggle(false)} href="/cart">
                            Cart  <span>(</span> <span>{cart.length}</span> <span>)</span>
                        </Link>
                    </span>

                </div>
            )}
        </div>

    )
}

export default MobileMenu