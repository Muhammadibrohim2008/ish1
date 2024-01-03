import React from 'react'
import Rasm2 from './img/27.png'
import Rasm3 from './img/2 (1).png'
import Rasm4 from './img/shutterstock_303086189 1.png'

const Katalog = () => {
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
    <div className='katalog'>
      <h1 className='katalog_stoli'>Столы</h1>
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


      <div className="body dddd">
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
      <a className='tepagaa' href="#"><i class=" tepaga fa-solid fa-arrow-up fa-8x"></i></a>
    </div>
  )
}

export default Katalog