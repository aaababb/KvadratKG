import React from 'react'
import footer from '../../shared/assets/svg/Footer.svg'
import Container from '../../shared/helpers/Container'
import tel from '../../shared/assets/svg/tel.svg'
import gmail from '../../shared/assets/svg/gmail.svg'
import vertor from '../../shared/assets/svg/vertor.svg'
import instagram from '../../shared/assets/svg/instagram.svg'
import wvertor from '../../shared/assets/svg/whatsapp.svg'
import telegram from '../../shared/assets/svg/telegram.svg'


const Footer = () => {
  return (
    <div className='bg-[#111111] h-[300px] pt-20 mt-20'>

 
    <Container>
      <div className='flex justify-between text-white mb-10'>
        <div>
      <img src={footer} alt="" />
      <p className='pt-5'>Наши социальные сети</p>
      <div className='flex gap-3 pt-5'>
        <img src={instagram} alt="" />
        <img src={wvertor} alt="" />
        <img src={telegram} alt="" />
      </div>
        </div>

        <div className='leading-10'>
          <p>Квартиры</p>
          <p>Офис продаж</p>
          <p>Ипотека</p>
          <p>Инвестиции</p>
        </div>

        <div className='leading-10'>
          <p>Застройщики</p>
          <p>Акции</p>
          <p>Контакты</p>
          <p>Жилые комплексы</p>
        </div>

        <div className='leading-10'>
          <p>Контакты</p>
          <div className='flex gap-3 text-center'>
            <img src={tel} alt="" />
          <p>+996 400 567 455</p>
          </div>

          <div className='flex gap-3'>
            <img src={gmail} alt="" />
            <p>apartm_@gmail.com</p>
          </div>

          
        <div className='flex gap-3'>
          <img src={vertor} alt="" />
          <p>г.Бишкек ул.45 Мира </p>
        </div>
        </div>





      </div>
      
    </Container>
    </div>
  )
}

export default Footer