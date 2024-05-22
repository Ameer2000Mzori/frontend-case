'use client';

import React from 'react';

import { setCate, setSearchTerm } from 'app/lib/features/counter/searchTerm';
import { useDispatch, useSelector } from 'react-redux';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.searchTerm);
  const category = useSelector((state: any) => state.category);

  const handleSearchChange = (e: any) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCategoryChange = (e: any) => {
    dispatch(setCate(e.target.value));
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
      <input
        type="text"
        value={category}
        onChange={handleCategoryChange}
        placeholder="Category..."
      />
    </div>
  );
};

export default SearchComponent;
