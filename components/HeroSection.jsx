import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <div className=' w-[90vw] md:w-[80vw] max-w-6xl mx-auto mt-10'>

        <span className='flex items-center gap-2 px-3 py-1 text-sm text-white rounded-2xl bg-primary color-primary w-fit'>Serving since 1989
        </span>

        <div className='relative flex flex-col sm:grid sm:grid-cols-2 mt-8'>


          <div className='relative flex flex-col gap-3'>
            <div className='flex flex-col gap-3 m-auto'>
            <Image
              className=' hidden sm:block absolute leaf top-6'
              src="/leaf.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <h4 className='text-2xl'>Get your <span className='text-primary'>crispy</span> goodness </h4>
            <h4 className='text-4xl'>with <span className='text-primary'>Pizza</span>Hat.</h4>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Harum laboriosam mollitia illo maxime corrupti sint.
            </p>
            </div>
            <div className="flex justify-center sm:justify-normal gap-3 text-sm button">
              <button className='px-3 py-1 text-white transition duration-300 hover:bg-green-300 hover:text-primary rounded-2xl bg-primary'>Order Now</button>
              <button className='px-3 py-1 transition duration-300 bg-white hover:bg-green-300 rounded-2xl hover:text-primary color-primary'>All Menu</button>
            </div>
            <div className='flex justify-center sm:justify-normal'>
              <Image
                src="/pizza-slice.png"
                width={200}
                height={200}
                alt="pizza-image"
              />
            </div>
          </div>


          <div className='hidden sm:block'>
            <img width={150} height={150} className='absolute xl:left-[38rem] left-[16rem] -top-[5rem]' src="/leafs.png" alt="" />
            <div className='absolute w-full h-[90%] bg-green-600 pizza-bar'>
              <Image
                className='absolute left-5 top-5'
                src="/pizza.png"
                width={300}
                height={300}
                alt="pizza img"

              />
            </div>

          </div>


        </div>



      </div>
    </>
  )
}

export default HeroSection