import React from 'react';
import Link from 'next/link';
import { MdAddBox } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { LuNotepadText } from 'react-icons/lu';

import { usePathname } from 'next/navigation';

const AdminDesktopMenu = () => {
  const path = usePathname();

  // console.log(path)

  return (
    <>
      <div>
        <ul className="flex items-center gap-5">
          {/* Add Products Link */}
          <li >
            <Link href="/admin/addproducts" className="w-full h-full flex items-center justify-center">
              <span className={`flex items-center justify-center size-10 p-2 rounded-md ${path == "/admin/addproducts" ? "text-white bg-primary" : " bg-white "} `}>
                <MdAddBox size={28} className="" />
              </span>
            </Link>

          </li>

          {/* Edit Products Link */}
          <li>
            <Link href="/admin/editproducts" className="w-full h-full flex items-center justify-center">
            <span className={`flex items-center justify-center size-10 p-2 rounded-md ${path == "/admin/editproducts" ? "text-white bg-primary" : " bg-white "} `}>
              <FaRegEdit size={28} className="" />
              </span>
            </Link>
          </li>

          {/* Orders Link */}
          <li>
            <Link href="/admin/orders" className="w-full h-full flex items-center justify-center">
            <span className={`flex items-center justify-center size-10 p-2 rounded-md ${path == "/admin/orders" ? "text-white bg-primary" : " bg-white "} `}>
              <LuNotepadText size={28} className="" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminDesktopMenu;
