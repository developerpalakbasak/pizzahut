import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { ImBin } from "react-icons/im";

const AdminEditProductsItem = ({ item, deletePizza }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = () => {
    setShowPopup(true);
  };

  const confirmDelete = () => {
    deletePizza(item._id);
    setShowPopup(false);
  };

  return (
    <div className='relative flex gap-4 items-center justify-between'>
      <div className='flex gap-4 items-center'>
        <Image src={item.image} height={60} width={60} alt={item.title} />
        <p className='font-semibold'>{item.title}</p>
        <p className=''> BDT: {item.price}</p>
      </div>
      <div className='flex gap-12'>
        {/* <span>
          <FaRegEdit size={28} />
        </span> */}
        <span onClick={handleDelete} className="cursor-pointer">
          <ImBin color='red' size={28} />
        </span>
      </div>

      {/* Custom Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete {item.title}</p>
            <div className="flex justify-end gap-4">
              <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEditProductsItem;
