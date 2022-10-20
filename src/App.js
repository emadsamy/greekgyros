import React from 'react';
import {Routes, Route} from 'react-router-dom';
import classes from './App.module.css';
import { Home, Error404 } from './views/index';

function App() {
  return (
    <div className={classes.wrapperContainer}>
      <Routes>
        <Route exact path="/" element={<Home title={'Title Props'} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
