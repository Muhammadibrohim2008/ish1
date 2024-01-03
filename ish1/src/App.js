import React from 'react'
import Navbar from  './Navbar'
import Glavnaya from './Glavnaya'
import Katalog  from './Katalog'
import Dostavka from  './Dostavka'
import Kompani  from  './Kompani'
import  Kontakt from  './Kontakt'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='sayt'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Glavnaya  />} />
        <Route path='/katalog' element={<Katalog  />} />
        <Route path='/dostavka' element={<Dostavka  />} />
        <Route path='/kompani' element={<Kompani  />} />
        <Route path='/kontakt' element={<Kontakt  />} />

      </Routes>
    </div>
  )
}

export default App