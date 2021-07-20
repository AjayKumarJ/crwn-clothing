import React from 'react';
import { Route } from 'react-router-dom'
import {  auth } from './firebase/firebase.utils'

import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.components';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  unsubscribeFromAuth = null
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user})
        console.log("componentDidMount", user)
      })
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
          <Header currentUser={this.state.currentUser}/>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
      </div>
    );
  
  }
}

export default App;
