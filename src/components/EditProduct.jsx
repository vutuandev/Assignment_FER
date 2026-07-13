import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProduct } from '../redux/productSlice';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  
  const [productData, setProductData] = useState({
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

  useEffect(() => {
    const product = items.find(p => p.id === id);
    if (product) {
      setProductData(product);
    }
  }, [items, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct(productData));
    navigate(`/product/${id}`);
  };

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  if (status === 'loading') {
    return <div className="loading"><div className="spinner"></div>Loading...</div>;
  }

  return (
    <div>
      <div className="edit-container">
        <h1 className="edit-title">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="edit-form-group">
            <label>Name:</label>
            <input type="text" name="name" value={productData.name} onChange={handleInputChange} required />
          </div>
          <div className="edit-form-group">
            <label>Description:</label>
            <textarea name="description" value={productData.description} onChange={handleInputChange} rows="3" required></textarea>
          </div>
          <div className="edit-form-group">
            <label>Price:</label>
            <input type="text" name="price" value={productData.price} onChange={handleInputChange} required />
          </div>
          <div className="edit-form-group">
            <label>Current Price:</label>
            <input type="text" name="currentPrice" value={productData.currentPrice} onChange={handleInputChange} />
          </div>
          <div className="edit-actions">
            <button type="button" onClick={() => navigate('/feature')} className="btn-blue">Back to Products</button>
            <button type="submit" className="btn-red">Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
