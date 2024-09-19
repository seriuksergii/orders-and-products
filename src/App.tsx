import { Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu/TopMenu';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import './index.css';

function App() {
  return (
    <>
      <TopMenu />
      <div className="wrap-app">
        <NavigationMenu />
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
