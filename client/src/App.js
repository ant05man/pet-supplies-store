import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          {/* Define other routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
