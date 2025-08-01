
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  return (

    <div className=" bg-white blur-[2px] border border-gray-300  rounded-lg p-3 px-7 shadow-sm hover:scale-105 hover:blur-0 hover:shadow-lg duration-300 flex flex-col justify-between cursor-pointer">
      <div onClick={()=> navigate(`/product/${product.id}`)}  
      className="flex justify-center items-center  mb-2">
        <img className='h-40 w-40 object-contain  ' 
        src={product.image} 
        alt={product.title
        }/>
      </div>
      <h2 className='text-sm font-medium text-gray-800 line-clamp-2 h-10' >
        {product.title}
      </h2>
      <p className='text-lg font-bold text-black-700 mb-3'>{product.price}</p>
      <button
      onClick={()=> addToCart(product)} className='bg-gradient-to-r from-purple-500 to-indigo-400 ring-sky-300 hover:bg-sky-300 text-sm font-semibold py-2 text-white  rounded w-full flex items-center justify-center gap-2 ' ><FontAwesomeIcon icon={faCartShopping} className='w-4 h-4' />Add to Cart</button>
          

    </div>

  )
}

export default ProductCard
