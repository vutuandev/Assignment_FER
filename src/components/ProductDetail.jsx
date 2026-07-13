import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const product = items.find(p => p.id === id);

  if (status === 'loading') {
    return <div className="loading"><div className="spinner"></div>Loading details...</div>;
  }

  if (!product) {
    return <div className="loading">Product not found.</div>;
  }

  return (
    <div>
      <Link to="/feature" className="btn btn-secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Products</Link>
      <div className="detail-container">
        <div className="detail-image">
          <img src={`/images/${product.image}`} alt={product.name} />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-desc">{product.description}</p>
          <div className="detail-price-wrapper">
            <div className="detail-current-price">{product.currentPrice || product.price}</div>
            {product.currentPrice && product.currentPrice !== product.price && (
              <div className="detail-original-price">{product.price}</div>
            )}
          </div>
          <div className="detail-actions">
            <Link to={`/product/edit/${product.id}`} className="btn btn-primary" style={{ flex: 1, padding: '1rem' }}>Edit Product</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
