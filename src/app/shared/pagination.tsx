'use client';

import React, { useEffect, useState } from 'react';

export const Pagination = ({ pagBlogs, itemsPerPage = 9 }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newTotalPages = Math.ceil(pagBlogs / itemsPerPage);
    setTotalPages(newTotalPages);
    console.log(totalPages);
  }, [pagBlogs, itemsPerPage]);

  const setButtons = () => {
    let Buttons = [];
    for (let i = 0; i < totalPages; i++) {
      Buttons.push(
        <button className="bg-black" onClick={() => handlePageChange(i + 1)}>
          {i + 1}
        </button>,
      );
    }
    return Buttons;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    console.log('current page is : ', currentPage);
  }, [currentPage]);

  return <div>{totalPages <= 1 ? '' : setButtons()}</div>;
};
