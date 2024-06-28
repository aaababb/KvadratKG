import React from 'react'
import Products from '../../features/Products/ui/Products'
import Carousel from '../../features/Banner.jsx/ui/Carousel/Carousel'
import Uslugi from '../../features/Uslugi/Uslugi'

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <Uslugi/>
      <Products/>
    </div>
  )
}
export default HomePage