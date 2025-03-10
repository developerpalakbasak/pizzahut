"use client"
import React, { useEffect, useState } from 'react'
import ContentItem from './ContentItem'
import { usePizza } from '@/context/pizzaContext';
import { useCart } from '@/context/cartContext';



const BestSellings = () => {

    const { pizzaInfo, loading } = usePizza()
    const { addToCart } = useCart()

    const allPizza = pizzaInfo.allPizza;

    // console.log(allPizza)

    // const [category, setCategory] = useState("All")

    const [showTopRated, setShowTopRated] = useState(false);


    //        // Log the cart only when it updates
    // useEffect(() => {
    //     // console.log("Cart updated:", cart);
    // }, [cart]); // Logs only when `cart` changes



    //  console.log(allPizza[0]._id)
    //  console.log(loading)

    // const allPizza = [
    //     { id: 1, title: "delicious pizza-1", price: 100 },
    //     { id: 2,title: "delicious pizza-2", price: 200 },
    //     { id: 3,title: "delicious pizza-3", price: 300 },
    //     { id: 4,title: "delicious pizza-4", price: 400 },
    //     { id: 5,title: "delicious pizza-5", price: 500 },
    //     { id: 6,title: "delicious pizza-6", price: 600 },
    //     { id: 7,title: "delicious pizza-7", price: 700 },
    //     { id: 8,title: "delicious pizza-8", price: 800 },
    //     { id: 9,title: "delicious pizza-9", price: 900 },
    //     { id: 10, title: "delicious pizza-10", price: 1000 },
    //     { id: 11,title: "delicious pizza-11", price: 1100 },
    //     { id: 12,title: "delicious pizza-12", price: 1200 }
    //   ];   


    return (
        <>
            <div className=' flex justify-center'>
                <div className='bg-white rounded font-semibold w-36 flex gap-3 px-3 py-2 justify-center mx-0'>
                    <button className={!showTopRated ? "text-primary" : ""} onClick={() => setShowTopRated(false)} >All</button>
                    <button className={showTopRated ? "text-primary" : ""} onClick={() => setShowTopRated(true)} >Top Sellings</button>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

            {loading ? (
          <h1>Loading...</h1>
        ) : (
          allPizza
            .filter((pizza) => (showTopRated ? pizza.isTopSelling : true)) // Filter based on selection
            .map((pizza, index) => (
              <ContentItem
                key={index}
                id={pizza._id}
                name={pizza.title}
                description={pizza.description}
                price={pizza.price}
                stock={pizza.stock}
                category={pizza.category}
                image={pizza.image}
                addToCart={addToCart}
              />
            ))
        )}


            </div>
        </>

    )
}

export default BestSellings