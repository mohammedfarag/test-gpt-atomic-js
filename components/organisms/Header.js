// Header.js

import React from 'react';
import {SearchForm} from '../molecules';

const Header = () => {
    const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic
    // ...
  };
  return (
    <header className="bg-gray-200 py-4 px-8">
      <h1 className="text-2xl font-bold">My App</h1>
      <SearchForm onSearch={handleSearch} />
    </header>
  );
};

export default Header;
