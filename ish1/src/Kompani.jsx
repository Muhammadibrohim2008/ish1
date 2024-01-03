import React from 'react'
import Rasm11 from './img/31.png'
import Rasm12 from './img/5-2 3.png'
import Rasm13 from './img/5-1 4.png'
import Rasm8 from './img/Ellipse 3.png'
import Rasm9 from './img/Ellipse 3 (1).png'
import Rasm10 from './img/Ellipse 3 (2).png'
import Rasm4 from './img/shutterstock_303086189 1.png'
import Rasm3 from './img/2 (1).png'



const Kompani = () => {
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
    <div className='okompani'>
      <h1 className='okompani_text1'>О компании</h1>
      <div className="immages">
        <img className='rasm11' src={Rasm11} alt="Rasm" />
        <img className='rasm22' src={Rasm12} alt="Rasm" />
        <img className='rasm33' src={Rasm13} alt="Rasm" />
      </div>
      <div className="teexts">
        <p>Transformer Table - казахстанский производитель корпусной мебели. Мебель нашего производства отличается стилем и удобством, которые придают помещению неповторимую атмосферу. </p>
        <p>Основным направлением нашего производства является изготовление столов-трансформеров. Столы-трансформеры универсальны в быту, отлично подходят для небольших квартир и людей, которые ценят функциональность и практичность. В основе столов находится складной механизм из калёной стали немецкого производства "Hafele GmbH". Благодаря данному механизму столы обретают устойчивость к нагрузкам до 20 кг и мягкий ход при трансформации.</p>
        <p>Мебель нашего производства вы можете приобрести в этом интернет-магазине или заказать индивидуально.</p>
        <button className='body_btn1 bb'>Рассчитать стоимость</button>
        <a className='aaaa' href='/katalog'>
          <button className='content_btn1 ff'>Перейти в каталог</button>
        </a>
      </div>
      <h1 className='a1a1'>Отзывы покупателей</h1>
      <div className="peoples">
        <div className="people_cards">
          <img src={Rasm8} alt="Rasm" />
          <p className='people_text1'>Макпал</p>
          <p className='people_text2'>Спасибо вам) Стол отлично поместился в нашей однушке. Очень радует что место свободно обычно, но когда надо мы можем сделать стол больше для родственников.</p>
        </div>
        <div className="people_cards">
          <img src={Rasm9} alt="Rasm" />
          <p className='people_text1'>Сергей</p>
          <p className='people_text2'>Отличный стол. Приобрели пару дней назад. Довольны. Стол сделан аккуратно, достаточно легко и быстро получилось увеличить размер стола. Буду советовать друзьям. </p>
        </div>
        <div className="people_cards">
          <img src={Rasm10} alt="Rasm" />
          <p className='people_text1'>Эльмира</p>
          <p className='people_text2'>Купили стол для кухни. Удобный и крепкий. Всем довольны. Спасибо!</p>
        </div>
      </div>
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

export default Kompani