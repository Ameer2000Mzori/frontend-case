'use client';

import React, { useEffect, useState } from 'react';

export const Pagination = ({ pagBlogs, itemsPerPage = 9 }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const newTotalPages = Math.ceil(pagBlogs / itemsPerPage);
    setTotalPages(newTotalPages);
  }, [pagBlogs, itemsPerPage]);

  const setButtons = () => {
    let Buttons = [];
    if (totalPages > 5) {
      for (let i = 0; i < totalPages; i++) {
        if (i < 3 || i === totalPages - 1 || (i >= currentPage - 1 && i <= currentPage + 1)) {
          Buttons.push(
            <button
              key={i}
              style={{
                backgroundColor: currentPage === i ? '#371162' : '',
                color: currentPage === i ? 'white' : '',
              }}
              className="mr-[15px] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]"
              onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>,
          );
        } else if (
          (i === 3 && currentPage > 2) ||
          (i === totalPages - 2 && currentPage < totalPages - 4)
        ) {
          Buttons.push(
            <span
              key={`dots${i}`}
              className="mr-[15px] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]">
              ...
            </span>,
          );
        }
      }
    } else {
      for (let i = 0; i < totalPages; i++) {
        Buttons.push(
          <button
            key={i}
            style={{
              backgroundColor: currentPage === i ? '#371162' : '',
              color: currentPage === i ? 'white' : '',
            }}
            className="mr-[15px] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]"
            onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>,
        );
      }
    }
    return Buttons;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1);
  };

  // forward page:
  const forWardPage = () => {
    if (currentPage === totalPages - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  // back ward page:
  const backWardPage = () => {
    if (currentPage === 0) {
      setCurrentPage(totalPages - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="">
      {totalPages > 1 && (
        <div className="flex w-[100%] flex-row items-center justify-center bg-white pb-[80px] pt-[80px] text-center">
          <button className="mr-[40px] leading-[26px]" onClick={backWardPage}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/back.png"
              alt="backward"
            />
          </button>
          {setButtons()}
          <button className="ml-[25px] leading-[26px]" onClick={forWardPage}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/forward.png"
              alt="forward"
            />
          </button>
        </div>
      )}
    </div>
  );
};
