import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
