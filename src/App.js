import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Switch, Route } from 'react-router-dom'

import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from './components/firebase/firebase.utils'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        console.log('userRef', userRef)
        userRef.onSnapshot(snapShot => {
          console.log('snapShot.data()', snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },
            () => { console.log('this.state', this.state) }
          );
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
      //this.setState({ currentUser: user }); //1st
      // createUserProfileDocument(user) //2nd
      // console.log('user', user)  //1
      // console.log('displayName', user.displayName) //1
      // console.log('email', user.email) //1 
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
