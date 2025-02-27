"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContentItem = ({ id, name, price, addToCart }) => {
    

    const handleAddToCart = () => {
        addToCart({ id, name, price }); // Add item to cart
        toast.success("Added",{
            position:"bottom-left"
        });
    };

  
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3 px-3 py-6 my-5 bg-white rounded mx-3">
                <Image
                    src="/pizza.png"
                    width={200}
                    height={200}
                    alt="pizza-image"
                />
                <h5 className="text-lg">{name}</h5>
                <div className="flex flex-col gap-2 text-xs button">
                    <p className="px-3 py-1 text-black">Only TK - {price}</p>
                    <button
                        onClick={handleAddToCart}
                        className="flex gap-2 px-3 py-1 transition duration-300 bg-secondry items-center hover:bg-green-300 rounded-2xl text-primary"
                    >
                        <FaShoppingBag />
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContentItem;
