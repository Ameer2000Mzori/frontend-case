'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../lib/features/counter/searchTerm';

export const Pagination = ({ pagBlogs, itemsPerPage = 9 }) => {
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.search.searchTerm);
  let category = useSelector((state: any) => state.search.category);
  let currentPage = useSelector((state: any) => state.search.currentPage);
  if (category === '' || category === undefined || category === null) category = 'id';

  const router = useRouter();

  useEffect(() => {
    const newTotalPages = Math.ceil(pagBlogs / itemsPerPage);
    setTotalPages(newTotalPages);
  }, [pagBlogs, itemsPerPage]);

  const setButtons = () => {
    let Buttons = [];
    if (totalPages > 5) {
      for (let i = 0; i < totalPages; i++) {
        if (i < 2 || i === totalPages - 1 || (i >= currentPage - 1 && i <= currentPage + 1)) {
          Buttons.push(
            <button
              key={i}
              style={{
                backgroundColor: currentPage === i ? '#371162' : '',
                color: currentPage === i ? 'white' : '',
              }}
              className="pagi-Main-Buttons mr-[15px] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]"
              onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>,
          );
        } else if (i === 2 && currentPage > 3) {
          Buttons.push(
            <span
              key={`dots${i}`}
              className="pagi-Main-Buttons mr-[15px] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]">
              ...
            </span>,
          );
        } else if (i === totalPages - 2 && currentPage < totalPages - 3) {
          Buttons.push(
            <span
              key={`dots${i}`}
              className="pagi-Main-Buttons mr-[15px] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]">
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
            className="pagi-Main-Buttons mr-[15px] w-[500] rounded-[4px] pb-[8px] pl-[17px] pr-[17px] pt-[10px] text-[14px] text-[#141414]"
            onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>,
        );
      }
    }
    return Buttons;
  };

  const handlePageChange = (page: number) => {
    router.push(`/blogs/${category}?search=${searchTerm}?page=${page - 1}?`);
    dispatch(setCurrentPage(page - 1));
  };

  const forWardPage = () => {
    if (currentPage === totalPages - 1) {
      dispatch(setCurrentPage(0));
      router.push(`/blogs/${category}?search=${searchTerm}?page=${0}?`);
    } else {
      dispatch(setCurrentPage(currentPage + 1));

      router.push(`/blogs/${category}?search=${searchTerm}?page=${currentPage + 1}?`);
    }
  };

  const backWardPage = () => {
    if (currentPage === 0) {
      dispatch(setCurrentPage(totalPages - 1));
      router.push(`/blogs/${category}?search=${searchTerm}?page=${totalPages - 1}?`);
    } else {
      dispatch(setCurrentPage(currentPage - 1));
      router.push(`/blogs/${category}?search=${searchTerm}?page=${currentPage - 1}?`);
    }
  };

  return (
    <div className="">
      {totalPages > 1 && (
        <div className="flex w-[100%] flex-row items-center justify-center bg-white pb-[80px] pt-[80px] text-center">
          <button className="pagi-Buttons mr-[40px] leading-[26px]" onClick={backWardPage}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/000000/back.png"
              alt="backward"
            />
          </button>
          {setButtons()}
          <button className="pagi-Buttons ml-[25px] leading-[26px]" onClick={forWardPage}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/000000/forward.png"
              alt="forward"
            />
          </button>
        </div>
      )}
    </div>
  );
};
