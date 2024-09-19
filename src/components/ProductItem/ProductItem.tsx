import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Product } from '../../types/productTypes';
import './ProductItem.scss';

const ProductItem: React.FC<{ product: Product; onDelete: () => void }> = ({
  product,
  onDelete,
}) => {
  return (
    <div className="product-item">
      <div className="product-item-header">
        <div className="green-circle"></div>
        <img
          src={product.photo}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <p className="name-product">
            {product.title} ({product.type})
          </p>
        </div>
      </div>

      <div className="product-order">
        <p className="order-number">Надходження: {product.order}</p>
      </div>

      <div className="product-guarantee">
        <p>
          <span className="product-text">Гарантія з</span>{' '}
          {product.guarantee.start} <span className="product-text">по</span>{' '}
          {product.guarantee.end}
        </p>
      </div>

      <div className="product-price">
        {product.price.map((item) => (
          <div
            key={item.symbol}
            className={item.symbol === 'USD' ? 'product-text' : ''}
          >
            <span>{item.value} </span>
            <span className="product-text">
              {item.symbol === 'USD' ? '$' : 'UAH'}
            </span>
          </div>
        ))}
      </div>

      <AiTwotoneDelete cursor="pointer" onClick={onDelete} />
    </div>
  );
};

export default ProductItem;
