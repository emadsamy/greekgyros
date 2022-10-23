import React from 'react';
import {Routes, Route} from 'react-router-dom';
import classes from './App.module.css';
import { Home, Error404, Contact, Menu, ViewProduct } from './views/index';

function App() {
  return (
    <div className={classes.wrapperContainer}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/view-product/:id" element={<ViewProduct />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
