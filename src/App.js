import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import {  auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.components';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import CheckoutPage from './pages/checkout/checkout.component'

import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
      const { setCurrentUser } = this.props
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        
        console.log("userAuth",userAuth)
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snoshot => {
            setCurrentUser ({
                  id: snoshot.id,
                  ...snoshot.data()
              })

          })
        }  else {
          setCurrentUser(userAuth)
        }
        
        console.log("componentDidMount..", userAuth)
      })
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
          <Header/>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route path='/signin' render={ ()  => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage/>)  } />
          
      </div>
    );
  
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
