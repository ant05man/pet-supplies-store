import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/orders">Orders</Link>
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
