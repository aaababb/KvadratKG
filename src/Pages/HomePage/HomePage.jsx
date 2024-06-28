import React from 'react'
import Products from '../../features/Products/ui/Products'
import Carousel from '../../features/Banner.jsx/ui/Carousel/Carousel'
import Uslugi from '../../features/Uslugi/Uslugi'
import Accordion from '../../features/Accordion/ui/Accordion'
import Swipers from '../../features/Swipers/ui/Swipers'

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <Uslugi/>
      <Products/>
      <Accordion/>
      <Swipers/>
    </div>
  )
}
export default HomePage