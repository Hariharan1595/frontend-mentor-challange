import React from 'react'
import { photo } from '../constants'

const Gallrey = () => {
  return (
    <section className='w-[100%] mt-7'>
        <div className='flex flex-wrap max-sm:flex-wrap justify-center'>
        {photo.map((item,i)=>(
           <img src={item.src} alt="img"
           className='w-[320px] object-contain max-sm:w-[168.3px]' />
        ))}
    </div>
    </section>
  )
}

export default Gallrey
