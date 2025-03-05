"use client"
import { PizzaContext, usePizza } from '@/context/pizzaContext';
import { useCart } from '@/context/cartContext';
import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import Link from 'next/link';

const cart = () => {


  // Usecontext 
  // Get pizza data from context

  // const { pizza, loading } = useContext(PizzaContext);
  // const { pizzaInfo } = usePizza()
  const { cart, addToCart, removeFromCart, removeItemFromCart, selected, setSelected,selectedFromCart, selectedPizzaTotalPrice, setSelectedPizzaTotalPrice } = useCart()

  // console.log(selectedPizzaTotalPrice)
  // console.log(selected)
  // const [selected, setSelected] = useState([])

  // const [selectedPizzaTotalPrice, setselectedPizzaTotalPrice] = useState()


  useEffect(() => {
    // Find matching IDs between cart and selected
    // const selectedIds = selected.map(item => item.id);

    // const matched = cart.filter((item) => selected.includes(item.id));
   
    const matched = selectedFromCart
    
    // console.log(cart)
    // console.log(selected)
    // console.log(matched);

    // Calculate total amount for the matched items
    const totalSelectedAmount = matched.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    // console.log(totalSelectedAmount);

    // Update the state with the recalculated total
    setSelectedPizzaTotalPrice(totalSelectedAmount);
  }, [cart, selected]);


  // console.log(selectedPizzaTotalPrice)


  // const totalAmountInCart = cart.reduce((total, item) => total + item.amount * item.price, 0);



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
  // console.log(selectedPizzaTotalPrice)


  return (
    <>
      {/* <div className='bg-white px-3 py-2 w-[90vw] md:w-[80vw] max-w-5xl mx-auto rounded'>


      </div> */}

      <div className='flex flex-col gap-3 w-[90vw] md:w-[80vw] max-w-5xl mx-auto mt-20'>


        {cart.length > 0 ?
          <div className=' rounded flex flex-col gap-3'>
            {cart.map((item) => {
              return <div key={item.id} className='bg-white px-3 py-2 rounded border-2 border-emerald-400'>


                <div>
                  <div className='flex flex-col gap-3'>


                    <div className='flex justify-between items-center'>

                      <span className='flex gap-3 items-center'>
                        <div className='flex'>
                          <input
                            type="checkbox"
                            id={`checkbox-${item.id}`}
                            className="peer hidden"
                            value={item.id}
                            checked={selected.includes(item.id) ? "checked" : ""}
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              setSelected((prevSelected) =>
                                isChecked
                                  ? [...prevSelected, item.id] // Add to the array
                                  : prevSelected.filter((id) => id !== item.id) // Remove from the array
                              );
                            }}
                          />
                          <label
                            htmlFor={`checkbox-${item.id}`}
                            className="h-[18px] w-[18px] inline-block border-2 border-primary rounded cursor-pointer 
               peer-checked:bg-primary peer-checked:border-primary"
                          ></label>
                        </div>


                        <p className='text-xl font-semibold'>{item.name}</p>
                      </span>

                      <span className='hidden sm:flex gap-3'>

                        <span className='flex gap-3'> <p>{item.quantity}</p> <p>x</p> <p>{item.price}</p> </span>

                        <span>=</span>

                        <span>{item.quantity * item.price}</span>

                      </span>

                      <span className='flex gap-5 items-center select-none'>



                        {item.quantity > 1 ?
                          <span onClick={() => handleCart(item.id, item.name, item.price, "decrement")} className='bg-secondary  cursor-pointer px-4 py-1 rounded'>-</span> :

                          <span onClick={() => handleCart(item.id, item.name, item.price, "itemRemove")} className='bg-red-600 text-white cursor-pointer px-2 py-1 rounded'><MdDelete size={22} /></span>


                        }


                        {item.quantity}

                        <span onClick={() => handleCart(item.id, item.name, item.price, "increment")} className='bg-secondary cursor-pointer px-4 py-1 rounded'>+</span>

                      </span>
                    </div>
                  </div>

                  <span className='sm:hidden flex gap-3'>

                    <span className='flex gap-3'> <p>{item.quantity}</p> <p>x</p> <p>{item.price}</p> </span>

                    <span>=</span>

                    <span>{item.quantity * item.price}</span>

                  </span>
                </div>

              </div>


            })}

          </div>
          :
          <>
            <div>
              <p className='font-semibold'>No items in cart ...... <Link href="/shop" className=' text-white bg-primary hover:bg-secondary hover:text-primary rounded px-3 py-1'>Shop Now</Link> </p>
            </div>
          </>



        }

        <div className='bg-white h-1 rounded '></div>

        <div>
          <div className='flex justify-between items-center px-3 py-2 bg-white '>
            <p className='text-xl font-bold'>Total :</p>

            <p className='text-xl'>BDT {selectedPizzaTotalPrice}</p>

            {selected.length > 0 ? (
              <Link href="/cart/checkout">
                <button className='bg-primary hover:bg-secondary hover:text-primary rounded text-white text-xl px-3 py-2'>
                  Checkout
                </button>
              </Link>
            ) : (
              <button
                className='bg-gray-400 rounded text-white text-xl px-3 py-2 cursor-not-allowed'
                disabled
              >
                Checkout
              </button>
            )}


          </div>
        </div>



      </div>


    </>
  )
}

export default cart