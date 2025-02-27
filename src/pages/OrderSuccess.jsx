import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Order Completed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We&apos;ll send you a confirmation email shortly.
        </p>
        <Link 
          to="/" 
          className="flex items-center justify-center bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Home className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;