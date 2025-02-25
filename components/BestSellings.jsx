import React from 'react'
import ContentItem from './ContentItem'


const BestSellings = () => {


    const allPizza = [
        { name: "delicious pizza-1", price: 100},
        { name: "delicious pizza-2", price: 200},
        { name: "delicious pizza-3", price: 300},
        { name: "delicious pizza-4", price: 400},
        { name: "delicious pizza-5", price: 500},
        { name: "delicious pizza-6", price: 600},
        { name: "delicious pizza-7", price: 700},
        { name: "delicious pizza-8", price: 800},
        { name: "delicious pizza-9", price: 900},
        { name: "delicious pizza-10", price: 1000},
        { name: "delicious pizza-11", price: 1100},
        { name: "delicious pizza-12", price: 1200},
    ]



    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'> 
          
          {allPizza.map((pizza, index) => {
                return <ContentItem key={index} name={pizza.name} price={pizza.price} />;
            })}
        </div>
    )
}

export default BestSellings