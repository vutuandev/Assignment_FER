import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// LO7: Lazy-load the Main Feature page with React.lazy and Suspense
const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const EditProduct = React.lazy(() => import('./components/EditProduct'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid px-4">
        <Suspense fallback={
          <div className="text-center mt-5 p-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="mt-3 text-secondary">Loading module...</h4>
          </div>
        }>
          <Routes>
            {/* LO5: Implement React Router with 3 routes */}
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            
            {/* Additional feature routes */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
