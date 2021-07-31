import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './containers/Header';
import Home from './containers/Home';
import SignUp from './containers/Auth/SignUp';
import Login from './containers/Auth/Login';

function App() {
  if (localStorage.token) {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>
      </>)
  } else {
    return (
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Redirect to='/login' />
      </Switch>
    );
  }
}

export default App;
