"use client"
import { usePizza } from '@/context/pizzaContext'
import React from 'react'


const OrdersPage = () => {

 const { fetchOrders, pizzaOrders } = usePizza()
 const {allOrders}= pizzaOrders

 console.log(allOrders)

  return (
  <>

    {allOrders ? <>
    
    {/* Order page top  */}
    <div className='flex justify-between items-center'>
      <p className='font-semibold text-xl' >Running Orders {allOrders.length}</p>
      <select name="category" className='w-40 px-4 py-2 border text-gray-500'>
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
        </select>
    </div>
    
    {allOrders.map()}
    
    </> :
    <>
    Loading...
    </>
    }
    
    </>
  )
}

export default OrdersPage