"use client"
import { Loader } from '@/components/Loader';
import { useUser } from '@/context/userContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AccountPage = () => {

  const { user, loading, handleClick } = useUser()

  const router = useRouter();


  // console.log(user)



  return (
    <div className='flex flex-col justify-center items-center gap-3 w-[90vw] md:w-[80vw] max-w-5xl mx-auto mt-20'>

      {loading ?

        <Loader /> :
        <div className='flex flex-col mt-20 gap-3'>
          <p className='text-4xl'>Account Info</p>
          <h1 className='text-2xl'><span>Name: </span> {user.fullName}</h1>
          <h1><span>Email: </span>{user.email}</h1>

          <button onClick={handleClick} className='bg-primary px-3 py-2 rounded text-xl font-semibold text-white' >Sign Out</button>
        </div>

      }
    </div>
  )
}

export default AccountPage