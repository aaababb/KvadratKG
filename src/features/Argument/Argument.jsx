import React from 'react'
import photos from '../../shared/assets/img/argument.png'
import photos2 from '../../shared/assets/img/argument2.png'
import photos3 from '../../shared/assets/img/argument3.png'
import Container from '../../shared/helpers/Container'

const Argument = () => {
  return (
    <Container>
      <div className="text-white mt-[136px] flex items-center justify-center">
        <div className="">
          <div className="grid grid-cols-3 grid-rows-5 gap-5">

            <div style={{backgroundImage: `url(${photos2})`}} className="bg-cover bg-center rounded-lg shadow-lg col-span-1 row-span-3 w-[420px] h-[531px] pt-[340px] px-8">
              <div className='w-[319px] h-[139px] flex flex-col gap-[14px]'>
                <h2 className="text-[24px] font-semibold">15 лет опыта</h2>
                <p>Наша цель - решить любую вашу задачу по недвижимости , какой бы сложной она не была. В максиально сжатые сроки</p>
              </div>
            </div>

            <div className="rounded-md px-10 w-[860px] h-[100px] shadow-lg col-span-2 row-span-1 text-[28px] font-semibold uppercase">
                <span className=''>3 аргумента почему вам стоит доверить решение вашего квартирного вопроса </span>
                <span className='text-white bg-[#DC2215]'> именно нам </span>
            </div>

            <div style={{backgroundImage: `url(${photos})`}} className="bg-cover bg-center rounded-md shadow-lg col-span-1 row-span-3 w-[420px] h-[531px] pt-[340px] px-8">
              <div className='w-[374px] h-[168px] flex flex-col gap-[14px]'>
                <h2 className="text-[24px] font-semibold">По-человечески-внимательно относимся к клиентам</h2>
                <p>Команда специалистов по недвижимости , брокеров , юристов ТОП- уровня проведет вас за руку по сделке</p>
              </div>
            </div>

            <div className="w-[420px] h-[100px] row-span-1"></div>

            <div style={{backgroundImage: `url(${photos3})`}} className="bg-cover bg-center rounded-md shadow-lg col-span-1 row-span-3 w-[420px] h-[531px] pt-[390px] px-8">
              <div className='w-[374px] h-[115px] flex flex-col gap-[14px]'>
                <h2 className="text-[24px] font-semibold">Честны и открыты в работе</h2>
                <p>Гарантируем юридическую чистоту сделок , состоим в Гильдии риэлторов Бишкека</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default Argument