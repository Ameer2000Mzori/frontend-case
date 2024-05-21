// 'use client';

// import React, { useEffect, useState } from 'react';

// export const Pagination = ({ pagBlogs, itemsPerPage = 9, onPageChange }: any) => {
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const newTotalPages = Math.ceil(pagBlogs.length / itemsPerPage);
//     setTotalPages(newTotalPages);
//   }, [pagBlogs, itemsPerPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//       // Call the provided onPageChange function if available
//       onPageChange?.(newPage);
//     }
//   };

//   const renderPaginationButtons = () => {
//     const buttons = [];
//     for (let i = 1; i <= totalPages; i++) {
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => handlePageChange(i)}
//           className={`pagination-button ${currentPage === i ? 'active' : ''}`}>
//           {i}
//         </button>,
//       );
//     }
//     return buttons;
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, pagBlogs.length);
//   const currentBlogSlice = pagBlogs.slice(startIndex, endIndex);

//   return <div className="pagination">{renderPaginationButtons()}</div>;
// };
