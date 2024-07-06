import React from 'react'
import Container from '../../../shared/helpers/Container'
import CarouselPro from './CarouselPro'
import DropdownMenu from './DropdownMenu'
import { Link } from 'react-router-dom';



const Products = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container>
        <div className=' flex justify-between items-end mt-[103px]'>
          <DropdownMenu/>
          <div className=' w-[808px] h-[74px] font-inter text-[28px] font-semibold text-white '>
              <span>Выбирайте квартиру для жизни или инвестиций. Предложение доступны </span>
              <span className='bg-[#DC2215] w-[457px] h-[34px] px-7'>к покупке прямо сейчас</span>
          </div>
          <div className='flex justify-end'>
            <Link to={'/watch'}  onClick={scrollToTop}>
            <p className='font-inter text-[18px] font-normal text-white border-b border-white w-[112px] h-[25px]'>
              Смотреть все
            </p>
            </Link>
          
          </div>
        </div>
<div className='flex'>


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
          <Link to={'/watch'}  onClick={scrollToTop}>
          
            <button className="w-[249px] h-[50px] text-center rounded-[39px] text-[18px] text-white font-normal bg-[#DC2215]">
              Перейти на страницу
            </button>
          </Link>
          </div>
        </div>
      </div>

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
    
  <Link to={'/watch'}  onClick={scrollToTop}>
          
            <button className="w-[249px] h-[50px] text-center rounded-[39px] text-[18px] text-white font-normal bg-[#DC2215]">
              Перейти на страницу
            </button>
          </Link>
  </div>
</div>
</div>

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
    
  <Link to={'/watch'}  onClick={scrollToTop}>
          
            <button className="w-[249px] h-[50px] text-center rounded-[39px] text-[18px] text-white font-normal bg-[#DC2215]">
              Перейти на страницу
            </button>
          </Link>
  </div>
</div>
</div>
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
    
  <Link to={'/watch'}>
          
          <button className="w-[249px] h-[50px] text-center rounded-[39px] text-[18px] text-white font-normal bg-[#DC2215]">
            Перейти на страницу
          </button>
        </Link>
  </div>
</div>
</div>

</div>
    </Container>
  );
};

export default Products;
