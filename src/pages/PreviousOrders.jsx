// src/pages/PreviousOrders.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/actions/orderActions';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const OrderDetails = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex space-x-4">
          <span>Sipariş #{order.id}</span>
          <span>{new Date(order.date).toLocaleDateString()}</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      
      {isOpen && (
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Ürün</th>
                <th className="py-2">Adet</th>
                <th className="py-2">Fiyat</th>
                <th className="py-2">Toplam</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">${item.price.toFixed(2)}</td>
                  <td className="py-2">${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const PreviousOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order?.orders || []);
  const loading = useSelector(state => state.order?.loading || false);
  const error = useSelector(state => state.order?.error || null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Hata: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Önceki Siparişlerim</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">Henüz sipariş bulunmamaktadır.</p>
      ) : (
        orders.map((order) => (
          <OrderDetails key={order.id} order={order} />
        ))
      )}
    </div>
  );
};
OrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PreviousOrders;