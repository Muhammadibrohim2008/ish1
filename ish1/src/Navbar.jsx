import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  function zakaz()
  {
    let zakaz = document.querySelector('.zakaz')
    zakaz.style.display = 'block'
  }
  function none()
  {
    let zakaz = document.querySelector('.zakaz')
    zakaz.style.display = 'none'
  }
  return (
    <div className='navbar'>
        <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/katalog">Каталог</Link></li>
            <li><Link to="/dostavka">Доставка и оплата</Link></li>
            <li><Link to="/kompani">О компании</Link></li>
            <li><Link to="/kontakt">Контакты</Link></li>
        </ul>
        <i class=" clock fa-regular fa-clock fa-2x"></i>
        <p className='nav_text1'>Пн - Пт: 10:00-20:00</p>
        <p className='tel'>+7 727 327 25 22</p>
        <button onClick={zakaz} className='btn1'>Заказать звонок</button>
        <div className="zakaz">
          <a className='asas' href="#"><i onClick={none} class="x fa-solid fa-x fa-3x"></i></a>
          <h1 className='zakaz_text1'>Оставьте заявку, мы вам <br /> перезвоним!</h1>
          <input className='zakaz_inp1' type="text" placeholder='Имя*' />
          <input className='zakaz_inp1 b' type="text" placeholder='Телефон*' />
          <button className='btn2'>Заказать звонок</button>
        </div>
    </div>
  )
}

export default Navbar