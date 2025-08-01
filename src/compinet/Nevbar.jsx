import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useCart } from '../context/CartContext';

function Nevbar({ location, getlocation, opeDropdwon, setopeDropdwon }) {
  const [openNev, setopenNev] = useState(false);
 const {cartItem} =useCart();
 
 
  const toggleDropdown = () => {
    setopeDropdwon(!opeDropdwon);
  }


  return (
    <div>
      <div className='bg-black py-3 shadow-2xl px-4 md:px-0'>
        <div className="max-w-6xl ma-auto flex justify-between items-center">
          <div className='flex gap-7 items-center'>
            <Link to={"/"}>
              <h1 className='font-bold text-3xl text-cyan-700'>
                <span className='text-yellow-500 font-serif'>D</span>Poster
              </h1></Link>

            <div className="md:flex gap-2 cursor-pointer text-purple-500  items-center hidden">
              <span className='font-semibold border-2 rounded-2xl ring-indigo-600 p-2'>
                {
                  location ? (<div className="-space-y-2">
                    <p>{location.county}</p>
                    <p>{location.state_district}</p>
                  </div>) : (
                    "Add adderss"
                  )
                }

              </span>

              <span onClick={toggleDropdown} className='ml-1 select-none cursor-pointer'>
                ▼
              </span>
            </div>
            {opeDropdwon && (
              <div className="w-[250px] h-max shadow-2xl z-50 bg-black fixed top-16  left-60 border-2 p-5 border-indigo-400 rounded-md">
                <div className="flex justify-between items-center mb-4">

                  <h1 className='font-semibold text-xl text-indigo-400 '>change location</h1>
                  <span onClick={toggleDropdown} className='cursor-pointer text-xl font-bold text-indigo-400'> x</span>
                </div>

                <button onClick={getlocation} className='bg-purple-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my Location</button>
              </div>
            )}
          </div>

          <nav className='flex gap-7 items-center'>
            {/* manu section */}
            <ul className='text-indigo-400   md:flex gap-7 items-center text-xl font-semibold hidden'>
              <NavLink to={"/"} className={({ isActive }) =>
                ` ${isActive ? "border-b-4 border-purple-500"
                  : "text-indigo-400"
                } cursor-pointer`
              } >
                <li>Home</li>
              </NavLink>

              <NavLink to={"/product"} className={({ isActive }) =>
                ` ${isActive ? "border-b-4 border-purple-500"
                  : "text-indigo-400"
                } cursor-pointer`
              } >
                <li>Product</li>
              </NavLink>


              <NavLink to={"/products2"} className={({ isActive }) =>
                ` ${isActive ? "border-b-4 border-purple-500"
                  : "text-indigo-400"
                } cursor-pointer`
              } >
                <li>product2</li>
              </NavLink>




              <NavLink to={"/about"} className={({ isActive }) =>
                ` ${isActive ? "border-b-4 border-purple-500"
                  : "text-indigo-400"
                } cursor-pointer`
              } >
                <li>About</li>
              </NavLink>

              <NavLink to={"/contact"} className={({ isActive }) =>
                ` ${isActive ? "border-b-4 border-purple-500"
                  : "text-indigo-400"
                } cursor-pointer`
              } >
                <li>contact</li>
              </NavLink>



            </ul>


            {/* cart section */}
            <Link to={"/cart"} className='relative'>
              <span className='text-2xl '>
                🛒
              </span>
              <span className='bg-indigo-400 px-2 rounded-full abosolute -top-3 -right-3 text-white text-sm'>
                {cartItem.length}
              </span>
            </Link>



                <div className="hidden md:block">
              <SignedOut>
                <SignInButton className="bg-indigo-800 border-2 ring-cyan-300 text-whte px-3 py-1 rounded-md cursor-pointer"></SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>



            </div> 


            {/* Hamubargur manu */}

            <div className="md:hidden text-3xl ml-2 cursor-pointer select-none text-indigo-400 " onClick={() => setopenNev(!openNev)}>
              {openNev ? "✕" : "☰"}
            </div>
          </nav>
        </div>

        {/* mobile phone ui */}
        {openNev && (
          <div className="md:hidden mt-2 bg-black text-indigo-400  border-t py-4 px-6 shadow-md text-lg font-semibold ">
            <ul className='space-y-4'>
              <li>
                <NavLink to={"/"} onClick={() => setopenNev(false)}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/product"} onClick={() => setOpenNav(false)}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} onClick={() => setOpenNav(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} onClick={() => setOpenNav(false)}>
                  Contact
                </NavLink>
              </li>
              <li>🛒</li>
              <li><SignedOut>
                  <SignInButton className="bg-indigo-800 border-2 ring-cyan-300 px-3 py-1 rounded-md cursor-pointer" />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nevbar
