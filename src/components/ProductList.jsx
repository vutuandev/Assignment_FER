import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, addProduct } from '../redux/productSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: 'laptop1.png'
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if(newProduct.name && newProduct.price) {
      dispatch(addProduct({ ...newProduct, id: String(Date.now()) }));
      setNewProduct({
        name: '',
        description: '',
        price: '',
        currentPrice: '',
        image: 'laptop1.png'
      });
      setShowAddForm(false);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  if (status === 'loading') {
    return <div className="loading"><div className="spinner"></div>Loading products...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Featured Laptops</h1>
        <button 
          onClick={() => setShowAddForm(!showAddForm)} 
          className="btn btn-primary"
        >
          {showAddForm ? 'Cancel Adding' : '+ Add New Product'}
        </button>
      </div>
      
      <div className="product-list-container">
        <h1 className="product-list-title">Product List</h1>
        <div className="product-grid">
          {items.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={`/images/${product.image}`} alt={product.name} />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-price-section">
                  <div className="product-original-price">
                    {product.currentPrice && product.currentPrice !== product.price ? product.price + ' đ' : ''}
                  </div>
                  <div className="product-current-price">
                    {(product.currentPrice || product.price)} đ
                  </div>
                </div>

                <div className="product-actions">
                  <Link to={`/product/${product.id}`} className="btn-red-rounded">View Details</Link>
                  <button onClick={() => handleDelete(product.id)} className="btn-red-outline" style={{ marginTop: '10px' }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddForm && (
        <div className="modal-overlay" onClick={() => setShowAddForm(false)}>
          <div className="form-container modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ marginBottom: 0 }}>Add New Product</h2>
              <button type="button" className="close-btn" onClick={() => setShowAddForm(false)}>&times;</button>
            </div>
        <form onSubmit={handleAddSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={newProduct.description} onChange={handleInputChange} className="form-control" rows="3" required></textarea>
          </div>
          <div className="form-group">
            <label>Original Price</label>
            <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Current Price</label>
            <input type="text" name="currentPrice" value={newProduct.currentPrice} onChange={handleInputChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Image Filename</label>
            <select name="image" value={newProduct.image} onChange={handleInputChange} className="form-control">
              <option value="laptop1.png">laptop1.png</option>
              <option value="laptop2.jpg">laptop2.jpg</option>
              <option value="laptop3.png">laptop3.png</option>
              <option value="laptop4.png">laptop4.png</option>
              <option value="laptop5.jpg">laptop5.jpg</option>
              <option value="laptop6.png">laptop6.png</option>
              <option value="laptop7.jpg">laptop7.jpg</option>
              <option value="laptop8.jpg">laptop8.jpg</option>
              <option value="laptop9.png">laptop9.png</option>
              <option value="laptop10.png">laptop10.png</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="submit" className="btn btn-success" style={{ flex: 1 }}>Add Product</button>
            <button type="button" onClick={() => setShowAddForm(false)} className="btn btn-secondary" style={{ flex: 1 }}>Cancel</button>
          </div>
        </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
