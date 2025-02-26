// pages/CartPage.js
import { useSelector, useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch({ type: 'INCREMENT_PRODUCT', payload: productId });
  };

  const handleDecrement = (productId) => {
    dispatch({ type: 'DECREMENT_PRODUCT', payload: productId });
  };

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleToggleCheck = (productId) => {
    dispatch({ type: 'TOGGLE_PRODUCT_CHECK', payload: productId });
  };

  const calculateTotal = () => {
    return cart
      .filter((item) => item.checked)
      .reduce((total, item) => total + item.product.price * item.count, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart ({cart.length} Items)</h1>
      
      <div className="bg-white rounded-lg shadow">
        {cart.map((item) => (
          <div key={item.product.id} className="border-b last:border-b-0 p-4">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggleCheck(item.product.id)}
                className="w-5 h-5"
              />
              
              <div className="flex-shrink-0 w-24">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-auto"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-gray-600 text-sm">
                  Seller: {item.product.seller}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(item.product.id)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus size={20} />
                </button>
                <span className="w-10 text-center">{item.count}</span>
                <button
                  onClick={() => handleIncrement(item.product.id)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="w-32 text-right">
                <div className="font-semibold">
                  {(item.product.price * item.count).toFixed(2)} TL
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.product.id)}
                className="p-2 text-gray-500 hover:text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="p-4 bg-gray-50 rounded-b-lg">
            <div className="flex justify-end items-center">
              <div className="text-right">
                <div className="text-gray-600">Total Amount:</div>
                <div className="text-2xl font-semibold">
                  {calculateTotal().toFixed(2)} TL
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;