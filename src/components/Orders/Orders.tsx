import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { deleteOrder } from '../../slices/ordersSlice';
import './Orders.scss';
import { TfiMenuAlt } from 'react-icons/tfi';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import OrderDescription from '../OrderDescription/OrderDescription';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';
import { PriceItem, Product } from '../../types/OrderTypes';

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const searchQuery = useSelector(
    (state: RootState) => state.products.searchQuery
  );
  const [isOrderDescription, setIsOrderDescription] = useState<boolean>(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [orderToDelete, setOrderToDelete] = useState<number | null>(null);
  const [isShrink, setIsShrink] = useState<boolean>(false);

  const filteredOrders = orders.filter((order) =>
    order.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDescriptionWindow = (orderId: number) => {
    setSelectedOrderId(orderId);
    setIsOrderDescription(true);
    setIsShrink(true);
  };

  const closeDescriptionWindow = () => {
    setIsOrderDescription(false);
    setSelectedOrderId(null);
    setIsShrink(false);
  };

  const openDeleteModal = (orderId: number) => {
    setOrderToDelete(orderId);
    setShowDeleteModal(true);
  };

  const handleDeleteOrder = () => {
    if (orderToDelete !== null) {
      dispatch(deleteOrder(orderToDelete));
      if (selectedOrderId === orderToDelete) {
        closeDescriptionWindow();
      }
      setShowDeleteModal(false);
      setOrderToDelete(null);
    }
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setOrderToDelete(null);
  };

  const calculateTotalPrice = (products: Product[]): Record<string, number> => {
    return products.reduce(
      (totals: Record<string, number>, product: Product) => {
        product.price.forEach((price: PriceItem) => {
          if (!totals[price.symbol]) {
            totals[price.symbol] = 0;
          }
          totals[price.symbol] += price.value;
        });
        return totals;
      },
      {}
    );
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <div className="add-order">
          <BsFillPlusCircleFill size={20} color="green" cursor="pointer" />
          <span className="orders-length">Надходження / {orders.length}</span>
        </div>
      </div>
      <div className="orders-list-container">
        <div className={`orders-list ${isShrink ? 'shrink' : ''}`}>
          {filteredOrders.map((order) => {
            const totalPrice = calculateTotalPrice(order.products);
            return (
              <div
                key={order.id}
                className={`wrap-container-order ${isShrink ? 'shrink' : ''}`}
              >
                <div className="order-main">
                  {!isOrderDescription && (
                    <div className="order-title">{order.title}</div>
                  )}
                  <div className="order-icon-circle">
                    <TfiMenuAlt
                      cursor="pointer"
                      size={20}
                      onClick={() => openDescriptionWindow(order.id)}
                    />
                  </div>
                  <div className="order-products">
                    {order.products.length} Товарів
                  </div>
                  <div className="order-info">
                    <div className="order-date">
                      <p>{order.date}</p>
                    </div>
                    <div className="order-sum">
                      {Object.entries(totalPrice).map(([currency, amount]) => (
                        <p
                          key={currency}
                          className={`sum-${currency.toLowerCase()}`}
                        >
                          {`${amount} ${currency}`}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {!isOrderDescription && (
                  <div className="order-delete-icon">
                    <AiTwotoneDelete
                      cursor="pointer"
                      fontSize={13}
                      onClick={() => openDeleteModal(order.id)}
                    />
                  </div>
                )}
                {isOrderDescription && selectedOrderId === order.id && (
                  <div className="arrow-icon-container">
                    <div className="arrow-icon">
                      <MdOutlineKeyboardArrowRight size={25} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {isOrderDescription && selectedOrderId !== null && (
          <div className="order-description">
            <OrderDescription
              setToggle={closeDescriptionWindow}
              data={orders}
              orderId={selectedOrderId}
            />
          </div>
        )}
      </div>

      {showDeleteModal && orderToDelete !== null && (
        <DeleteModalWindow
          title={`Видалити замовлення ${orderToDelete}`}
          onClose={closeDeleteModal}
          onConfirm={handleDeleteOrder}
          type="приход"
        />
      )}
    </div>
  );
};

export default Orders;
