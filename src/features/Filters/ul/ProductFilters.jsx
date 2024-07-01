import React from 'react'
import Container from '../../../shared/helpers/Container'
import CarouselPro from '../../Products/ui/CarouselPro'

const ProductFilters = () => {
  return (
    <Container>
           <div className="w-full flex gap-[20px]">

<div className="w-[310px] h-[483px] rounded bg-white mt-[25px]">
  <div className="w-full h-[207px] rounded-tl rounded-tr">
    <CarouselPro />
  </div>
  <div className="flex justify-center mt-[15px]">
    <p className="w-[247px] text-center text-[18px] font-medium">
      3 - комнатная квартира на улице Киевская 30
    </p>
  </div>
  <div className="flex justify-center mt-[15px]">
    <p className="w-[208px] text-[16px] font-normal ">
      Площадь: м2.77.3 Планировка: ИФ-1(А)-036
    </p>
  </div>
  <div className="flex justify-center mt-[30px]">
    <div className="w-[273px] flex justify-between">
      <p className="font-semibold text-[20px]">12млн.$</p>
      <p className="font-normal text-[18px] line-through">16млн.$</p>
    </div>
  </div>
  <div className="flex justify-center mt-[15px]">
    <button className="w-[249px] h-[50px] text-center rounded-[39px] text-[18px] text-white font-normal bg-[#DC2215]">
    Подробнее
    </button>
  </div>
</div>
</div>
    </Container>
)
}

export default ProductFilters