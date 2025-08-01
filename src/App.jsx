import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './compinet/Footer'
import About from './pages/About'
import Contect from './pages/Contect'
import Nevbar from './compinet/Nevbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Products2 from './pages/Products2'
import Cart from './pages/Cart';
import ProductRouter from './compinet/ProductRouter';
import CategoryProduct from './pages/CategoryProduct';



function App() {
  const [location, setlocation] = useState(null);
  const [opeDropdwon, setopeDropdwon] = useState(false);


  const getlocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
          console.log(response.data);
          const data = response.data;


          setlocation({
            county: data?.address?.county || "Unkonwn Country",
            state_district: data?.address?.state_district || "Unkonwn State",


          })
        } catch (error) {
          alert('Faild to et location');
          console.log("Error fatinchin location", error)

        }
      },
      (error) => {
        alert("filde to get location unvaid location");
        console.log("Error fatinchin location", error)
      }

    )
  }


  return (
    <>
      <BrowserRouter>
        <Nevbar
          location={location}
          getlocation={getlocation}
          opeDropdwon={opeDropdwon}
          setopeDropdwon={setopeDropdwon} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contect />}></Route>
          <Route path='/product' element={<Products />}></Route>
          <Route path='/products2' element={<Products2 />}></Route>
          <Route path='/category/:category' element={<CategoryProduct/>}/>
          <Route path='/Cart' element={
            <ProductRouter>
              <Cart loaction={location} getLocation={getlocation} />
            </ProductRouter>
          }
       ></Route> </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
