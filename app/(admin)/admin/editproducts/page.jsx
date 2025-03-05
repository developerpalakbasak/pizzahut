"use client"
import AdminEditProductsItem from '@/admin_components/AdminEditProductsItem'
import { usePizza } from '@/context/pizzaContext'
import axios from 'axios'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

const EditProducts = () => {


  const { pizzaInfo, loading, fetchPizzaData } = usePizza()

  const { allPizza } = pizzaInfo
  // console.log(allPizza)




  const deletePizza = async (mongoId) => {
    const response = await axios.delete('/api/pizza', {
      params: {
        id: mongoId
      }
    })
    toast.success(response.data.msg)
    // console.log(mongoId);
    fetchPizzaData();
  }
  useEffect(() => {

    fetchPizzaData()

  }, [])


  return (
    <>
      {loading ? <>
        <p>loading</p>
      </> : <>
        <div className='flex flex-col gap-5'>
          {allPizza.map((item, index) => (

            <AdminEditProductsItem key={index} item={item} deletePizza={deletePizza} />
          ))}
        </div>
      </>}
    </>
  )
}

export default EditProducts