import React from 'react'
import Rasm3 from './img/2 (1).png'
import Rasm4 from './img/shutterstock_303086189 1.png'
import Rasm13 from './img/shutterstock_767179420 1.png'
import Rasm14 from './img/image 65.png'

const Dostavka = () => {
  function regis1()
  {
    let regis1 = document.querySelector('.regis')
    regis1.style.display = 'block'
  }
  function none1()
  {
    let zakaz = document.querySelector('.regis')
    zakaz.style.display = 'none'
  }
  return (
    <div>
      <h1 className='dostavka_oplata'>Доставка и оплата</h1>
      <img className='dostavka_img' src={Rasm13} alt="Rasm" />
      <div className="dostavka_katalog">
        <h3>Варианты доставки</h3>
        <p>Доставка бесплатная по городу Алматы</p>
        <p>Самовызов по адресу: </p>
        <p>Доставка курьерскими службами (платно, <br /> условия оговариваются индивидуально)</p>
        <h3>Сроки доставки</h3>
        <p>Алматы - 1 день</p>
        <p>По Казахстану - от 3 до 7 дней</p>
      </div>
      <div className="cpoc">
        <h3>Способы оплаты</h3>
        <p>Наличными</p>
        <p>Перевод на карту Kaspi Gold</p>
      </div>
      <img className='dostavka_image' src={Rasm14} alt="Rasm" />
      <div className="body dddd fff">
        <img src={Rasm4} alt="Rasm" />
        <h1 className='body_text1'>Интересует изготовление мебели на заказ?</h1>
        <p className='body_text2'>Рассчитайте стоимость прямо сейчас!</p>
        <button onClick={regis1} className='body_btn1'>Рассчитать стоимость</button>
        <div className="regis">
          <a className='asas' href="#"><i onClick={none1} class="x fa-solid fa-x fa-3x"></i></a>
          <h1 className='regis_text1'>Рассчитайте стоимость изготовления мебели на заказ</h1>
          <div className="nav1">
            <ul>
              <li><a href="#">Вид мебели</a></li>
              <li><a href="#">Размеры</a></li>
              <li><a href="#">Количество</a></li>
            </ul>
          </div>
          <div className="clear"></div>
          <div className="nav2">
            <ul>
              <li><a href="#">Стол</a></li>
              <li><a href="#">Стул</a></li>
              <li><a href="#">Тумбочка</a></li>
              <li><a href="#">Шкаф</a></li>
            </ul>
          </div>
          <input className='regis_inp1' type="text" placeholder='Имя*' />
          <input className='regis_inp2' type="text" placeholder='Телефон*' />
          <button className='regis_btn1'>Рассчитать стоимость</button>
        </div>
      </div>
      
      <h1 className='model1'>Модели со скидкой</h1>
      <div className="content">
        <div className="content_stol">
          <div className="foiz1">-30%</div>
            <img src={Rasm3} alt="Rasm" />
            <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
            <del className='cards_text3'>24 000 ₸</del>
            <p className='cards_text5'>26 000 ₸</p>
        </div>
        <div className="content_stol">
          <div className="foiz1">-30%</div>
            <img src={Rasm3} alt="Rasm" />
            <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
            <del className='cards_text3'>24 000 ₸</del>
            <p className='cards_text5'>26 000 ₸</p>
        </div>
        <div className="content_stol">
          <div className="foiz1">-30%</div>
            <img src={Rasm3} alt="Rasm" />
            <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
            <del className='cards_text3'>24 000 ₸</del>
            <p className='cards_text5'>26 000 ₸</p>
        </div>
        <div className="content_stol">
          <div className="foiz1">-30%</div>
            <img src={Rasm3} alt="Rasm" />
            <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
            <del className='cards_text3'>24 000 ₸</del>
            <p className='cards_text5'>26 000 ₸</p>
        </div>
        <a className='tepagaa qq' href="#"><i class=" tepaga fa-solid fa-arrow-up fa-8x"></i></a>
      </div>
    </div>
  )
}

export default Dostavka