// PageTemplate.js

import React from 'react';
import {Header} from '../organisms';

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      {/* Additional sections or components */}
    </div>
  );
};

export default PageTemplate;