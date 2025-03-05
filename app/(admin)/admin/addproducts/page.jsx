"use client"
import React, { useState } from 'react'
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {



  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    category: "rounded",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
    // console.log(data)
  }




  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // create a form with input data
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('image', image);

    // console.log("FormData:", Object.fromEntries(formData.entries()));

    // to add data to database
    const response = await axios.post('/api/pizza', formData);
    console.log(response.data)

    if (response.data.success) {

      toast.success(response.data.msg);
      setImage(null);
      setData({
        title: "",
        price: "",
        description: "",
        category: "rounded",
      })
    } else {
      toast.error("Error")
    }


  }






  return (
    <div>

      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>

        <p className='text-xl'>Upload image</p>
        <label htmlFor="image" className='inline-block'>
          <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='inputImg' />
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
        </label>




        <p className='text-xl mt-4'>Pizza title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Title here' required />

        <p className='text-xl mt-4'>Pizza Price</p>
        <input name='price' onChange={onChangeHandler} value={data.price} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="number" placeholder='Price here' required />


        <p className='text-xl mt-4'>Pizza description</p>

        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='write content here' rows={6} required />

        <p className='text-xl my-4'>Pizza Category</p>

        <select name="category" onChange={onChangeHandler} value={data.category} type="text" className='w-40 px-4 py-3 border text-gray-500'>
          <option value="rounded">Rounded</option>
          <option value="squire">Squire</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-primary text-white'>Add Pizza</button>
      </form>
    </div>
  )
}

export default page