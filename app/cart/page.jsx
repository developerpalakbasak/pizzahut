"use client"
import { PizzaContext, usePizza } from '@/context/pizzaContext';
import { useCart } from '@/context/cartContext';
import React, { useContext, useEffect } from 'react'
import { MdDelete } from "react-icons/md";

const cart = () => {


  // Usecontext 
  // Get pizza data from context

  // const { pizza, loading } = useContext(PizzaContext);
  const { pizzaInfo } = usePizza()
  const { cart, addToCart, removeFromCart, removeItemFromCart } = useCart()

  // console.log(cart)







  useEffect(() => {
    // console.log("Pizza Data:", pizzaInfo, "cart : ", cart); // Log fetched pizza data
  }, [pizzaInfo]); // Runs when pizza updates

  const handleCart = (id, name, price, action) => {

    if (action === "decrement") {
      // console.log("decrement")
      removeFromCart(id);
    };

    if (action === "increment") {
      addToCart({ id, name, price });
      // console.log("increment");

    };

    if (action === "itemRemove") {
      removeItemFromCart(id);
      // console.log("increment");

    };
  }


  // Calculate total amount dynamically
  const totalAmount = cart.reduce((total, item) => total + item.amount * item.price, 0);

  return (
    <>
      {/* <div className='bg-white px-3 py-2 w-[90vw] md:w-[80vw] max-w-5xl mx-auto rounded'>


      </div> */}

      <div className='flex flex-col gap-3 w-[90vw] md:w-[80vw] max-w-5xl mx-auto'>

        <div className=' rounded flex flex-col gap-3'>
          {cart.map((item) => {
            return <div key={item.id} className='bg-white px-3 py-2 rounded border-2 border-emerald-400'>


              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center'><p className='text-xl font-semibold'>{item.name}</p>

                  <span className='hidden sm:flex gap-3'>

                    <span className='flex gap-3'> <p>{item.amount}</p> <p>x</p> <p>{item.price}</p> </span>

                    <span>=</span>

                    <span>{item.amount * item.price}</span>

                  </span>

                  <span className='flex gap-5 items-center select-none'>








                    {item.amount > 1 ?
                      <span onClick={() => handleCart(item.id, item.name, item.price, "decrement")} className='bg-secondry  cursor-pointer px-4 py-1 rounded'>-</span> :

                      <span onClick={() => handleCart(item.id, item.name, item.price, "itemRemove")} className='bg-red-600 text-white cursor-pointer px-2 py-1 rounded'><MdDelete size={22} /></span>


                    }









                    {item.amount}

                    <span onClick={() => handleCart(item.id, item.name, item.price, "increment")} className='bg-secondry cursor-pointer px-4 py-1 rounded'>+</span>

                  </span>
                </div>

                <span className='sm:hidden flex gap-3'>

                  <span className='flex gap-3'> <p>{item.amount}</p> <p>x</p> <p>{item.price}</p> </span>

                  <span>=</span>

                  <span>{item.amount * item.price}</span>

                </span>
              </div>

            </div>


          })}

        </div>

        <div className='bg-white h-1 rounded '></div>

        <div>
          <div className='flex justify-between items-center px-3 py-2 bg-white '>
            <p className='text-xl font-bold'>Total :</p>

            <p className='text-xl'>BDT {totalAmount}</p>

            <button className='bg-primary rounded text-white text-xl px-3 py-2'>Checkout</button>
          </div>
        </div>



      </div>


    </>
  )
}

export default cart