import React from 'react'
import { profile } from '../constants'
import Card from './Card'

const Review = () => {
  return (
   <section className='w-full bg-white '>
     <h2 className='text-center my-10 text-2xl font-Fraunces font-bold text-cyan tracking-wider'>CLIENT TESTIMONIALS</h2>
    <div className='flex justify-center items-center max-sm:flex-col'>
       
        {profile.map((item)=>(
            <Card
            key={item.name}
            imgURL={item.image}
            review={item.reviwe}
            name={item.name}
            about={item.about}
            />
        ))}
    </div>

   </section>
  )
}

export default Review
