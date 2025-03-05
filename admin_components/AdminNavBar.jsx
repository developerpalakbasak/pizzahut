"use client";
import Link from 'next/link';
import React from 'react';
import AdminDesktopMenu from './AdminDesktopMenu';

const AdminNavBar = () => {
  return (

      <nav className="fixed w-full top-0 left-0 right-0 flex justify-center z-10">
        <div className="w-[90vw] md:w-[80vw] max-w-5xl rounded-xl flex items-center justify-between bg-secondary mt-2 px-4 py-2 min-h-[2.5rem] sm:min-h-[3rem]">
          {/* Logo Title */}
          <div className="text-xl font-bold logo flex items-center">
            <Link href="/">
              <span className="text-primary">Pizza</span>Hut
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="">
            <AdminDesktopMenu/>
          </div>
        </div>
      </nav>

  );
};

export default AdminNavBar;
