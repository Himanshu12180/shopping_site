// Can't create, edit, or upload … If your storage is full for 2+ years, your files may be deleted from Drive and Gmail. Get 30 GB of storage for ₹59.00 ₹0 for 1 month.
import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data = [], fetchAllProducts } = getData() || {};

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchAllProducts();
    }
  }, [data, fetchAllProducts]);

  const getUniqueCategories = (items, key) => {
    if (!items)return [];
    return [...new Set(items.map((item) => item[key]))];
  };

  const categories = getUniqueCategories(data, "category");

  if (!data || data.length === 0) {
    return <div className="flex justify-center items-center h-48">
        <p className="text-white text-lg"> Loading Category...</p>
      </div>
    
  }

  return (
   <div className="bg-black">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={()=>navigate(`/category/${category}`)}
            className="uppercase bg-gradient-to-r from-stone-900 to-gray-400 text-white px-3 py-1 rounded-md cursor-pointer"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
    
  );
};

export default Category;