"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Menu = () => {

    const path = usePathname();

    
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Shop", path: "/shop" },
    ];

    return (
        <div className="hidden sm:block bg-white rounded-xl">
            <ul className="flex font-semibold justify-center gap-4 px-5 py-2 text-sm rounded-2xl">
                {links.map(link => (
                    <li
                        key={link.path}
                        className={path === link.path ? "color-primary" : ""}
                    >
                        <Link href={link.path}>{link.name} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu