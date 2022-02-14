import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { Ejercicios } from './data/Ejercicios';

export default function App() {
  return (
    <Router>
      <Menu />
      {Ejercicios.map((item) => {
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
