
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'
// import PrivateRoute from './pages/PrivateRoute'
import Error from './components/Error'
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Sidebar /> */}
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/products' element={<Products />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path ='/cart' element={<Cart />} />
          <Route path ='/checkOut' element={<Checkout />} />
          <Route path ='/error' element={<Error />} />
          <Route path ='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
