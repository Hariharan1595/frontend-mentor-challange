import React from 'react'

const Card = ({imgURL, review, name, about}) => {
  return (
    <div className=' text-Dark flex flex-col justify-center items-center p-20 max-sm:p-1 max-sm:gap-2'>
      <img src={imgURL} alt="img"
       className='rounded-full object-contain'width={120} />
      <p className='text-center my-5 font-Barlow font-semibold max-sm:w-[80%] max-sm:my-0'>{review}</p>
      {/* <div> */}
        <h3 className='my-3 text-black font-Fraunces font-bold text-xl max-sm:my-0'>{name}</h3>
        <p className='font-Barlow font-medium opacity-50'>{about}</p>
      {/* </div> */}
    </div>
  )
}

export default Card
