import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Giphy from '../Giphy/Giphy';
import Tenor from '../Tenor/Tenor';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Giphy" element={<Giphy/>}/>
          <Route path="/Tenor" element={<Tenor/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
