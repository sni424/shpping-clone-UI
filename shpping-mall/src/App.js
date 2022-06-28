import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Weather from './pages/Weather';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
}

export default App;
