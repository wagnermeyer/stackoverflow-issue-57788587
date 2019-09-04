import React from 'react';
import './App.css';

import { ProductProvider } from './ProductProvider'
import OtherComponent from './OtherComponent'

function App() {
  return (
    <ProductProvider>
      <OtherComponent/>
    </ProductProvider>
  );
}

export default App;
