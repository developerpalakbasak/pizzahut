"use client"
import { Loader } from '@/components/Loader'
import { useCart } from '@/context/cartContext'
import { usePizza } from '@/context/pizzaContext'
import Image from 'next/image'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { toast } from 'react-toastify'


const PizzaDetails = ({ params }) => {

  const paramData = React.use(params)
  const { id } = paramData

  const { addToCart } = useCart()

  const { pizzaInfo } = usePizza()
  const { allPizza } = pizzaInfo

  // console.log(id)
  let pizza
  if (allPizza) {
    pizza = allPizza.find((item) => (item._id === id))
  }
  console.log(pizza)






  const handleAddToCart = () => {
    addToCart({ id, name: pizza.title, price: pizza.price }); // Add item to cart
    toast.success("Added", {
      position: "bottom-left"
    });
  };



  return (<div className='w-[90vw] md:w-[80vw] max-w-6xl pb-5 mx-auto flex flex-col gap-16 mt-20'>

    {
      pizza ?
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-semibold text-4xl'>{pizza.title}</h1>
          <Image src={`${process.env.NEXT_PUBLIC_HOST_URL}${pizza.image}`} width={800} height={800} alt={pizza.title} className='size-[300px] sm:size-[350px] md:size-[450] lg:size-[500px] ' />

          <p className='text-lg'>{pizza.description}</p>



          <div className="flex flex-col items-center gap-2 text-2xl button">
            
            <p className="px-3 py-1 text-black">Only TK - {pizza.price}</p>
            <p className="px-3 py-1 text-black">In n Stock - {pizza.stock}</p>

          </div>

          <button
            onClick={handleAddToCart}
            className=" text-xl flex gap-2 px-3 py-1 transition duration-300 bg-secondary items-center hover:bg-green-300 rounded-2xl text-primary"
          >
            <FaShoppingBag />
            Add to cart
          </button>
        </div>
        : <>
          <span className='flex justify-center mt-10'><Loader /></span>
        </>

    }

  </div>

  )
}

export default PizzaDetails