import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-[1300px] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[100%] mx-auto'>
        {children}
    </div>
  )
}

export default Container