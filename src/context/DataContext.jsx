// Can't create, edit, or upload … If your storage is full for 2+ years, your files may be deleted from Drive and Gmail. Get 30 GB of storage for ₹59.00 ₹0 for 1 month.
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const updateData = res.data.map((item) => ({
        ...item,
        id: `fs-${item.id}`,
        source: "fakestore",
      }));
      setData(updateData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const getUniqueCategories = (data, property) => {
    const newVal = ["All", ...new Set(data?.map((cur) => cur[property]))];
    return newVal;
  };

  const categoryList = getUniqueCategories(data, "category");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const getData = () => useContext(DataContext);