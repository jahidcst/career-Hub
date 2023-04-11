
import React from 'react';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;