
import BestSellings from '@/components/BestSellings'
import HeroSection from '@/components/HeroSection'
import ItemHeader from '@/components/ItemsHeader'
import React from 'react'

const page = () => {
  return (
    
    <div className='relative flex flex-col w-full gap-12 overflow-hidden'>
    <HeroSection />
    <div className='w-[90vw] md:w-[80vw] max-w-6xl pb-5 mx-auto flex flex-col gap-16'>
      <ItemHeader firstHeading="Best Selling" lastHeading="Pizza" />
      <BestSellings/>
    </div>
  </div>
  )
}

export default page