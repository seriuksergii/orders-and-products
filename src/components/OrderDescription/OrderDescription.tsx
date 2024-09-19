import React, { useState, useEffect } from 'react';
import './OrderDescription.scss';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { AiTwotoneDelete } from 'react-icons/ai';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';
import { OrderDescriptionTypes } from '../../types/OrderTypes';

const OrderDescription: React.FC<{
  setToggle: () => void;
  data: OrderDescriptionTypes[];
  orderId: number | null;
}> = ({ setToggle, data, orderId }) => {
  const [orderProducts, setOrderProducts] = useState<
    OrderDescriptionTypes['products']
  >([]);

  const [productToDelete, setProductToDelete] = useState<
    OrderDescriptionTypes['products'][0] | null
  >(null);

  useEffect(() => {
    const order = data.find((item) => item.id === orderId);
    if (order) {
      setOrderProducts(order.products);
    }
  }, [orderId, data]);

  const closePopup = () => {
    setToggle();
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedProducts = orderProducts.filter(
      (product) => product.id !== productId
    );
    setOrderProducts(updatedProducts);
    setProductToDelete(null);

    if (updatedProducts.length === 0) {
      closePopup();
    }
  };

  const openDeleteModal = (product: OrderDescriptionTypes['products'][0]) => {
    setProductToDelete(product);
  };

  if (!orderId) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="close-popup" onClick={closePopup}>
          <IoIosClose size={20} />
        </div>

        <div className="header-container">
          <p className="header-popup">Надходження #{orderId}</p>
        </div>

        <div className="add-product">
          <BsFillPlusCircleFill
            size={15}
            cursor="pointer"
            style={{ color: 'green' }}
          />
          <span className="small-add">Додати товар</span>
        </div>

        {orderProducts.map((product) => (
          <div key={product.id} className="wrap-container">
            <div className="product-header">
              <div className="green-circle"></div>
              <img
                src={product.photo}
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <p className="name-product">
                  {product.title} ({product.code})
                </p>
              </div>
            </div>

            <div className="product-order">
              <p className="order-number">{product.status}</p>
            </div>

            <span className="remove">
              <AiTwotoneDelete
                cursor="pointer"
                onClick={() => openDeleteModal(product)}
              />
            </span>
          </div>
        ))}
      </div>

      {productToDelete && (
        <DeleteModalWindow
          title={`Ви впевнені, що хочете видалити товар "${productToDelete.title}"?`}
          description={`Код: ${productToDelete.code}`}
          photo={productToDelete.photo}
          onClose={() => setProductToDelete(null)}
          onConfirm={() => handleDeleteProduct(productToDelete.id)}
          type="товар"
        />
      )}
    </div>
  );
};

export default OrderDescription;
