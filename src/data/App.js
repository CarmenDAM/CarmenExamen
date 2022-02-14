import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { MenuItems } from './data/MenuItems';

export default function App() {
  return (
    <Router>
      <Menu />
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}