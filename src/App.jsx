import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Admin from './pages/Admin';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

const App = () => {

  return (
    <> 
      {/* <h3>Hello React!</h3> */}
      {/* <Admin />
      <Cart />
      <Details />
      <Home /> */}
      <Navbar color="#265073" textColor="white" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App
