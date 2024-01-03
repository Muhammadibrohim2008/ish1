import React from 'react'
import Rasm111 from './img/image 103.png'

const Kontakt = () => {
  return (
    <div className='kontakt'>
      <h1 className='kontakt_text1'>Контакты Transformer Table</h1>
      <div className="iconss">
        <div className="iconss_box">
          <i class=" phone1 fa-solid fa-phone fa-4x"></i>
          <p className='box_text1'>+7 727 327 25 22 </p>
        </div>

        <div className="iconss_box">
        <i class=" phone1 fa-solid fa-map-location-dot fa-4x"></i>
          <p className='box_text1'>ул. Толе-би 23А (угол ул. Зенкова) офис 32, Алматы, Казахстан</p>
        </div>

        <div className="iconss_box">
        <i class=" phone1 fa-regular fa-comment-dots fa-4x"></i>
          <p className='box_text1'>info@tt.kz</p>
        </div>
      </div>

      <a className='aimg' href="https://https://lokationre.com/" target='_blank'>
        <img src={Rasm111} alt="Rasm" />
      </a>

      <div className="footer">
        <h1 className='footer_text1'>Оставьте заявку, мы вам перезвоним!</h1>
        <input className='footer_inp1' type="text" placeholder='Имя*' />
        <input className='footer_inp2' type="text" placeholder='Телефон*' />
        <button className='footer_btn1'>Заказать звонок</button>
      </div>
      <a className='tepagaa qq kk' href="#"><i class=" tepaga fa-solid fa-arrow-up fa-8x"></i></a>

    </div>
  )
}

export default Kontakt