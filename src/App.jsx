import './App.css'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Application from './pages/Application/Application'
import Cooperation from './pages/Cooperation/Cooperation'
import Portfolio from './pages/Portfolio/Portfolio'
import  SingleProductPage  from './pages/SingleProductPage/SingleProductPage'


export default function App() {

 return (
    <>
     <Header />
     <main>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/application' element={<Application />} />
          <Route path='/cooperation' element={<Cooperation />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:id' element={<SingleProductPage />} />
        </Routes>
   
     </main>
     <Footer />
    </>
  )
}
