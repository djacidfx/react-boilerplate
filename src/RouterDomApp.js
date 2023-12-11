import logo from './logo.svg';
import './App.css';
import App from './ChangeAmount';

import person from './exports/person';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/blogs';
import Layout from './Layout';
import Display from './Display';
import ChangeAmount from './ChangeAmount';
import Home from './Home';
import DefaultStar from './DefaultStar';
import MemoComp from './pages/MemoComp';
import useContextComp from './pages/useContextComp';


function RouterDomApp() {
  const [color, setColor] = useState("green");

  return (
    <>
    <button className='btn btn-info' onClick={() => setColor("yellow")}>set Color yellow</button>
    <button className='btn btn-info' onClick={() => setColor("green")}>set Color Green</button>
   
    <BrowserRouter>
    <Routes>
        
        {/* <Route index element={<Layout comp={Blogs} />} /> */}
        <Route path="/" element={<Layout  color={color} comp={Home} />} />

        <Route path="/home" element={<Layout  color={color} comp={Home} />} />
        <Route path="/display" element={<Layout  color={color} comp={Display} />} />
        <Route path="/amount" element={<Layout  color={color} comp={ChangeAmount} />} />
        <Route path="/memo" element={<Layout  color={color} comp={MemoComp} />} />
        <Route path="/context" element={<Layout  color={color} comp={useContextComp} />} />


         {/* <Route path="*" element={<Layout comp={DefaultStar} />} /> */}
   
    </Routes>
  </BrowserRouter>
   
  </>
  );
}

export default RouterDomApp;
