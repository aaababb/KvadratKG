import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-[1300px] sm:w-[90%] md:w-[90%] lg:w-[100%] xl:w-[100%] mx-auto border border-red-500'>
        {children}
    </div>
  )
}

export default Container