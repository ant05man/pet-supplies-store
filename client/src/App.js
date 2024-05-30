import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Orders from './components/Orders';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Pet Supplies Store</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/signup">Sign Up</a>
            <a href="/login">Login</a>
            <a href="/profile">Profile</a>
            <a href="/orders">Orders</a>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/orders" component={Orders} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
