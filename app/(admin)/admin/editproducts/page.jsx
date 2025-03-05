"use client"
import AdminEditProductsItem from '@/admin_components/AdminEditProductsItem'
import { usePizza } from '@/context/pizzaContext'
import React from 'react'

const EditProducts = () => {


  const { pizzaInfo, loading } = usePizza()

const {allPizza}= pizzaInfo
console.log(allPizza)


  return (
    <>
      {loading? <>
      <p>loading</p>
      </> : <>
      {allPizza.map((item,index)=>(
        <div key={index}>

          <AdminEditProductsItem item={item} />
        </div>
      ))}
      </>}
    </>
  )
}

export default EditProducts