import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import DesktopMenuItem from './DesktopMenuItem'

const DesktopMenu = ({ cart }) => {
    return (<>

        <div className="flex items-center">
            <DesktopMenuItem />
        </div>

        {/* Cart */}
        <div className="hidden sm:flex items-center">
            <Link
                href="/cart"
                className="flex items-center gap-2 px-3 py-1 text-white hover:bg-green-300 hover:text-green-600 rounded-2xl bg-primary"
            >
                <FaShoppingCart /> Cart  <span>(</span> <span>{cart.length}</span> <span>)</span>
            </Link>
        </div>

    </>
    )
}

export default DesktopMenu