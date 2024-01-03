import React from 'react'
import Rasm1 from './img/image 6 6.png'
import Rasm2 from './img/27.png'
import Rasm3 from './img/2 (1).png'
import Rasm4 from './img/shutterstock_303086189 1.png'
import Rasm5 from './img/image 41.png'
import Rasm6 from './img/image 60.png'
import Rasm7 from './img/image 58.png'
import Rasm8 from './img/Ellipse 3.png'
import Rasm9 from './img/Ellipse 3 (1).png'
import Rasm10 from './img/Ellipse 3 (2).png'
import Rasm11 from './img/31.png'
import Rasm12 from './img/5-2 3.png'
import Rasm13 from './img/5-1 4.png'
const Glavnaya = () => {
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
      <div className="stol">
        <h1 className='stol_text1'>Столы-трансформеры 3 в 1</h1>
        <p className='stol_text2'>Отличное решение для маленьких квартир и людей, которые ценят <br /> функциональность!</p>
        <div className="icons">
          <div className="icon">
            <a href="#"><i class="fa-solid fa-truck fa-3x"></i></a>
            <p className='icon_text1'>Бесплатная доставка по г.Алматы</p>
          </div>
          <div className="icon">
            <a href="#"><i class="fa-solid fa-check-to-slot fa-3x"></i></a>
            <p className='icon_text1'>Гарантия 1 год</p>
          </div>
          <div className="icon">
            <a href="#"><i class="fa-solid fa-couch fa-3x"></i></a>
            <p className='icon_text1'>В наличии и на заказ</p>
          </div>
          <div className="icon">
            <a href="#"><i class="fa-solid fa-user-tie fa-3x"></i></a>
            <p className='icon_text1'>Бесплатный выезд мастера на замеры </p> 
          </div>
        </div>
        <button className='stol_btn1'>Оставить заявку</button>
        <div className="clear"></div>
        <img className='rasm1' src={Rasm1} alt="Rasm" />
      </div>
      <p className='text111'>Популярные модели</p>
      <div className="boxes">
        <div className="cards">
          <img src={Rasm2} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <p className='cards_text2'>26 000 ₸</p>
        </div>
        <div className="cards">
          <div className="foiz">-30%</div>
          <img src={Rasm3} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <del className='cards_text3'>24 000 ₸</del>
          <p className='cards_text5'>26 000 ₸</p>
          <button className='cards_btn'>Заказать</button>
        </div>
        <div className="cards">
          <img src={Rasm2} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <p className='cards_text2'>26 000 ₸</p>
        </div>
        <div className="cards">
        <div className="foiz">-30%</div>
          <img src={Rasm3} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <del className='cards_text3'>24 000 ₸</del>
          <p className='cards_text5'>26 000 ₸</p>
        </div>
        <div className="cards">
          <img src={Rasm2} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <p className='cards_text2'>26 000 ₸</p>
        </div>
        <div className="cards">
        <div className="foiz">-30%</div>
          <img src={Rasm3} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <del className='cards_text3'>24 000 ₸</del>
          <p className='cards_text5'>26 000 ₸</p>
        </div>
        <div className="cards">
        <div className="foiz">-30%</div>
          <img src={Rasm3} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <del className='cards_text3'>24 000 ₸</del>
          <p className='cards_text5'>26 000 ₸</p>
        </div>
        <div className="cards">
          <img src={Rasm2} alt="Rasm" />
          <p className='cards_text1'>Стол «Standart» 1770*900*750 мм</p>
          <p className='cards_text2'>26 000 ₸</p>
        </div>
      </div>  
      <button className='btn555'>смотреть всё</button>
      
      <div className="body">
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


      <div className="texts">
        <div className="text_card">
          <h1 className='texts_text1'>Преимущества столов от <br /> Transformer Table</h1>
          <h5 className='texts_text2'>Вместимость</h5>
          <p className='texts_text3'>В развернутом виде вы можете уместить за столом компанию до 15 человек.</p>
          <h5 className='texts_text4'>Выгода</h5>
          <p className='texts_text5'>Работаем без посредников, поэтому готовы предложить вам столы без наценок.</p>
          <h5 className='texts_text6'>Надежность</h5>
          <p className='texts_text7'>Столы спроектированы с учетом нагрузки до 80 кг.</p>
          <h5 className='texts_text8'>Универсальность</h5>
          <p className='texts_text9'>Столы нашего производство можно использовать в качестве обеденных и рабочих. Трансформация стола занимает всего 1 минуту.</p>
        </div>
      </div>
      <h1 className='model'>Модели со скидкой</h1>
      
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
      </div>
      <a className='aaaa' href='/katalog'>
        <button className='content_btn1'>перейти в каталог</button>
      </a>
      <div className="colors">
        <h1 className='colors_text1'>Столы Transformer Table идеально впишутся в любой интерьер</h1>
        <p className='colors_text2'>Широкий выбор цвета дерева на Ваш вкус</p>
        <div className="ranglar">
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
          <div className="rang"></div>
        </div>
        <img className='rasm5' src={Rasm5} alt="Rasm" />
        <img className='rasm6' src={Rasm6} alt="Rasm" />
        <img className='rasm7' src={Rasm7} alt="Rasm" />
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
      <div className="kompani">
        <h1 className='kompani_text1'>О компании</h1>
        <p className='kompani_text2'>TRANSFORMER TABLE</p>
        <p className='kompani_text3'>Transformer Table - казахстанский производитель корпусной мебели. Мебель нашего производства отличается стилем и удобством, которые придают помещению неповторимую атмосферу. У нас вы можете преобрести как готовую мебель, так и заказать индивидуально. Добро пожаловать!</p>
        <button className='body_btn1 bb'>Рассчитать стоимость</button>
        <a className='aaaa' href='/katalog'>
          <button className='content_btn1 ff'>Перейти в каталог</button>
        </a>
          <div className="images">
            <img className='images1' src={Rasm11} alt="Rasm" />
            <img className='images2' src={Rasm12} alt="Rasm" />
            <img className='images3' src={Rasm13} alt="Rasm" />
          </div>
          <a className='tepagaa' href="#"><i class=" tepaga fa-solid fa-arrow-up fa-8x"></i></a>
      </div>
    </div>
  )
}

export default Glavnaya