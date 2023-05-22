// SearchForm.js

import React from 'react';
import {Button} from '../atoms';

const SearchForm = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic
    // ...
  };

  return (
    <form className="flex">
      <input className="border border-gray-400 py-2 px-4 rounded-l" type="text" placeholder="Search" />
      <Button text="Search" onClick={handleSearch} />
    </form>
  );
};

export default SearchForm;
