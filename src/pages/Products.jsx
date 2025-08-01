import React, { useEffect, useState } from 'react'
import FillterSection from '../compinet/FillterSection'
import ProductCard from '../compinet/ProductCard'
import Pagenation from '../compinet/Pagenation'
import { getData } from '../context/DataContext';
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json"
import Loading from "../assets/Loading4.webm";


function Products() {
 const { data, fetchAllProducts } = getData();
  console.log(data);

  // Filters & Pagination states (removed brand)
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  const fakestoreData = data?.filter((item) => item.source === "fakestore");

  useEffect(() => {
    fetchAllProducts();
    //  window.scrollTo(0, 0); 
  }, []); // run only once on mount

  // Handler for category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    // setOpenFilter(false);
  };

  // Pagination handler scrolls to top
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0); // scroll reset only here
  };

  // Filter data based on search, category, and price range (removed brand)
  const filteredData = fakestoreData?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );
  // Total pages needed for pagination (8 items per page)
  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
  <>
      <div className="max-w-6xl mx-auto px-4 mb-10 bg-black">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            {/* Sidebar filters for desktop */}
            <FillterSection
              search={search}
              setSearch={setSearch}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              handleCategoryChange={handleCategoryChange}
              setPage={setPage}
            />

            {/* Products grid & pagination */}
            {filteredData?.length > 0 ? (
              <div className="flex flex-col justify-center items-center flex-grow">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10 w-full">
                  {filteredData
                    .slice((page - 1) * 8, page * 8)
                    .map((product, index) => (
                      <ProductCard
                        key={product.id || index}
                        product={product}
                      />
                    ))}
                </div>

                <Pagenation
                  pageHandler={pageHandler}
                  page={page}
                  dynamicPage={dynamicPage}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                <Lottie animationData={notfound} className="w-[500px]" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </>
  )
}

export default Products
