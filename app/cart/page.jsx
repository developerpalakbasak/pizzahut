"use client"
import { PizzaContext, usePizza } from '@/context/pizzaContext';
import React, { useContext, useEffect } from 'react'

const cart = () => {


// Usecontext 
      // Get pizza data from context
      
      // const { pizza, loading } = useContext(PizzaContext);
      const { pizza }= usePizza()
  
      useEffect(() => {
          console.log("Pizza Data:", pizza); // Log fetched pizza data
      }, [pizza]); // Runs when pizza updates
  


  return (
    <div>cart</div>
  )
}

export default cart