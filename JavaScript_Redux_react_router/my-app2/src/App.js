import logo from './logo.svg';
import './App.css';
import {Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav>
        <Link to="/catalog">Каталог</Link> | {' '}
        <Link to="/basket">Корзина</Link> | {' '}
        <Link to="/about">О нас</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
