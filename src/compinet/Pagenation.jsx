// Can't create, edit, or upload … If your storage is full for 2+ years, your files may be deleted from Drive and Photos. Get 30 GB of storage for ₹59.00 ₹0 for 1 month.
import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  return (
    <div className="mt-10 space-x-4">
      <button
        disabled={page === 1}
        className={`${
          page === 1 ? "bg-gradient-to-r from-purple-500 to-indigo-400" : "bg-gradient-to-r from-purple-400 to-indigo-300"
        } text-white rounded-md cursor-pointer px-3 py-1`}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>
      {getPages(page, dynamicPage)?.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => typeof item === "number" && pageHandler(item)}
            className={`cursor-pointer ${
              item === page ? "font-bold text-indigo-400" : "text-indigo-400"
            } `}
          >
            {item}
          </span>
        );
      })}
      <button
        disabled={page === dynamicPage}
        className={`${
          page === dynamicPage ? "bg-gradient-to-r from-purple-500 to-indigo-400" : "bg-gradient-to-r from-purple-400 to-indigo-300"
        } text-white rounded-md cursor-pointer px-3 py-1`}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;