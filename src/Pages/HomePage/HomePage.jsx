import React from 'react'
import Products from '../../features/Products/ui/Products'
import Accordion from '../../features/Accordion/ui/Accordion'
import Swipers from '../../features/Swipers/ui/Swipers'

const HomePage = () => {
  return (
    <div>
      <Products/>
      <Accordion/>
      <Swipers/>
    </div>
  )
}

export default HomePage