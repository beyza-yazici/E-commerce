// components/CartDropdown.js
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

const CartDropdown = () => {
  const cart = useSelector(state => state.cart.cart);
  
  // eslint-disable-next-line no-unused-vars
  const totalAmount = cart.reduce((total, item) => {
    return total + (item.product.price * item.count);
  }, 0);

  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer">
        <ShoppingCart size={24} />
        <span className="ml-2">Sepetim ({cart.length} Ürün)</span>
      </div>
      
      <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg">
        {cart.map(item => (
          <div key={item.product.id} className="p-4 border-b">
            <div className="flex items-center">
              <img 
                src={item.product.image} 
                alt={item.product.name} 
                className="w-16 h-16 object-cover"
              />
              <div className="ml-4">
                <p className="text-sm font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-600">
                  Beden: {item.product.size} Adet: {item.count}
                </p>
                <p className="text-sm font-bold">{item.product.price} TL</p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="p-4">
          <button className="w-full bg-orange-500 text-white py-2 rounded">
            Siparişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;