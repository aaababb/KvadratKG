import React, { useState } from 'react';
import upload from '../../shared/assets/svg/upload.svg';

const Side1 = ({ mobileOpen }) => {
  const [image, setImage] = useState(null);

  return (
    <div className={`h-[725px] p-9 bg-[#222224] text-white ml-[5%] transition-all duration-300 ${mobileOpen ? 'w-[90%]' : 'w-[90%]'}`}>
      <div className={`h-[244px] border-b border-gray-500 w-[99%] flex justify-between`}>
        <div className='w-[354px] h-[109px]'>
          <h2 className='text-[28px] font-semibold'>Заголовок</h2>
          <p className='text-[15px] font-semibold'>
            Lorem ipsum dolor sit amet consectetur. Pellentesque commodo faucibus sed augue cras ornare in nibh. Tristique quam non at vel pharetra. Donec sed eget amet purus. Gravida nec congue vel a egestas et enim integer etiam.
          </p>
        </div>
        <div className='w-[356px] h-[207px] bg-[#131313] flex justify-center items-center'>
          <img src={upload} />
        </div>
      </div>
      <div className='mt-[63px]'>
        <h2 className='text-[28px] font-semibold mb-[25px]'>Дабавить обзор активности</h2>
        <div className={`flex justify-between`}>
          <div className='flex flex-col gap-[37px]'>
            <div className='flex flex-col gap-[11px]'>
              <input className='w-[363px] h-[66px] bg-[#131313] text-[#B3B3B3] rounded-[5px] p-3' placeholder='Дабавить заголовок ... ' />
              <input className='w-[363px] h-[101px] bg-[#131313] text-[#B3B3B3] rounded-[5px] p-3' placeholder='Дабавить описание ...' />
            </div>
            <div className='w-[326px] h-[56px] bg-[#C8180C] rounded-[47px] flex justify-center items-center'>
              <button className='text-[18px] font-semibold '>Сохранить и опубликовать </button>
            </div>
          </div>
          <div className='w-[374px] h-[176px] bg-[#131313] pt-[34px] pl-[25px] flex flex-col gap-[17px]'>
            <div className='w-[284px] h-[46px] bg-[#C8180C] rounded-[28px] flex justify-center items-center'>
              <button className='text-[18px] font-semibold '>Загрузите изображение</button>
            </div>
            <p className='text-[15px] font-semibold'>Допустимые форматы : PNG , GIF , WEBP , MP3 , and MP4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side1;
