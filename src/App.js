import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.components';

function App() {
  console.log("In App pagee")
  return (

    <div>
        <Header/>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
