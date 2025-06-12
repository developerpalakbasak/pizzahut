"use client";
import ItemHeader from "@/components/ItemsHeader";
import { Loader } from "@/components/Loader";
import { useCart } from "@/context/cartContext";
import { usePizza } from "@/context/pizzaContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";

const PizzaDetailsPage = ({ params }) => {
  const resolvedParams = React.use(params);
  const [pizza, setPizza] = useState();

  const { pizzaInfo, loading } = usePizza();
  const { addToCart } = useCart();

  const { allPizza } = pizzaInfo;
  const pizzaId = resolvedParams.slug;

  const handleAddToCart = () => {
    addToCart({ id: pizza._id , name: pizza.title, price: pizza.price }); // Add item to cart
    toast.success("Added", {
      position: "bottom-left",
    });
  };

  useEffect(() => {
    const currentPizza = allPizza?.find((pizza) => pizza._id === pizzaId);
    setPizza(currentPizza);
  }, [allPizza, pizzaId]); // Include dependencies!

  
  return !loading && pizza ? (
    <div className="w-[90vw] md:w-[80vw] max-w-6xl pb-5 mx-auto flex flex-col gap-16 mt-20 items-center">
      <h1 className="text-2xl font-semibold text-center">{pizza?.title}</h1>
      <div className="flex justify-center">
        <Image
          src={pizza?.image}
          alt="pizza-image"
          height={400}
          width={400}
          className="object-cover" // optional: controls how image fits in container
        />
      </div>
      <p>{pizza?.description}</p>
      <button
        onClick={handleAddToCart}
        className="flex gap-2 px-3 py-1 transition duration-300 bg-secondary items-center hover:bg-green-300 rounded-2xl text-primary"
      >
        <FaShoppingBag />
        Add to cart
      </button>
    </div>
  ) : (
    <div className="w-[90vw] md:w-[80vw] max-w-6xl pb-5 mx-auto flex flex-col gap-16 mt-20 ">
      <ItemHeader firstHeading="Find Your Happiness" lastHeading="PizzaHut" />
      <Loader center />
    </div>
  );
};

export default PizzaDetailsPage;
