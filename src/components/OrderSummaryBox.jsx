// components/OrderSummaryBox.js
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const OrderSummaryBox = ({ cart }) => {

    const history = useHistory();

    const productsTotal = cart
      .filter(item => item.checked)
      .reduce((total, item) => total + item.product.price * item.count, 0);
    
    const shippingCost = 29.99;
    const discount = productsTotal >= 150 ? -29.99 : 0; // Shipping discount if total >= 150 TL
    const grandTotal = productsTotal + shippingCost + discount;

    const handleCheckout = () => {
      history.push('/address'); // React Router 5'te history.push kullanılır
  };
  
    return (
      <div className="bg-white rounded-lg shadow p-4 sticky top-4">
        <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>
        
        <div className="space-y-3">
          {/* Products Total */}
          <div className="flex justify-between">
            <span className="text-gray-600">Ürünün Toplamı</span>
            <span>{productsTotal.toFixed(2)} TL</span>
          </div>
          
          {/* Shipping Cost */}
          <div className="flex justify-between">
            <span className="text-gray-600">Kargo Toplamı</span>
            <span>{shippingCost.toFixed(2)} TL</span>
          </div>
  
          {/* Discount */}
          <div className="flex justify-between text-green-600">
            <span>150 TL ve Üzeri Kargo Bedava! (Satıcı Karşılar)</span>
            <span>{discount.toFixed(2)} TL</span>
          </div>
  
          {/* Grand Total */}
          <div className="border-t pt-3">
            <div className="flex justify-between font-semibold">
              <span>Toplam</span>
              <span>{grandTotal.toFixed(2)} TL</span>
            </div>
          </div>
        </div>
  
        <button 
          onClick={handleCheckout}
          className="w-full bg-[#F27A1A] text-white py-3 rounded-md mt-4 hover:bg-[#d86c15] transition-colors"
        >
          Sepeti Onayla
        </button>
  
        <div className="mt-3 text-center">
          <span className="text-sm text-gray-500 cursor-pointer hover:underline">
            İNDİRİM KODU GİR
          </span>
        </div>
      </div>
    );
  };
  
    
  OrderSummaryBox.propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        checked: PropTypes.bool.isRequired,
        count: PropTypes.number.isRequired,
        product: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }).isRequired,
      })
    ).isRequired,
  };

export default OrderSummaryBox;