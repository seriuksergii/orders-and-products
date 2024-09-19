import React, { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteProduct } from '../../slices/productsSlice';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';
import './Products.scss';
import ProductItem from '../ProductItem/ProductItem';
import { Product } from '../../types/productTypes';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const searchQuery = useSelector(
    (state: RootState) => state.products.searchQuery
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filterTitle, setFilterTitle] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearchQuery = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilterTitle =
        filterTitle === '' || product.title === filterTitle;

      return matchesSearchQuery && matchesFilterTitle;
    });
  }, [products, searchQuery, filterTitle]);

  const productTitles = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.title)));
  }, [products]);

  const handleDelete = useCallback(() => {
    if (selectedProduct) {
      dispatch(deleteProduct(selectedProduct.id));
      setSelectedProduct(null);
      if (filteredProducts.length === 1) {
        setFilterTitle('');
      }
    }
  }, [dispatch, selectedProduct, filteredProducts.length]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTitle(e.target.value);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Товари / {filteredProducts.length}</h2>
        <div className="products-filter">
          <select
            id="filter-select"
            className="filter-select"
            value={filterTitle}
            onChange={handleFilterChange}
          >
            <option value="">Всі товари</option>
            {productTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={() => setSelectedProduct(product)}
        />
      ))}

      {selectedProduct && (
        <DeleteModalWindow
          title={`Видалити товари ${selectedProduct.title}`}
          description=""
          photo={selectedProduct.photo}
          onClose={() => setSelectedProduct(null)}
          onConfirm={handleDelete}
          type="товари"
        />
      )}
    </div>
  );
};

export default Products;
