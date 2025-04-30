import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import { fetchAddresses } from '../store/actions/addressActions';
import PropTypes from 'prop-types';
import AddressForm from '../components/AddressForm';
import { AddressCard } from '../components/AddressCard';
import PaymentSection from '../components/PaymentSection';

const OrderPage = () => {
  const dispatch = useDispatch();
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);

  const addressesFromRedux = useSelector(state => state.address.addresses);
  const loading = useSelector(state => state.address.loading);
  const error = useSelector(state => state.address.error);

  const handleEditAddress = (address) => {
    setSelectedAddress(address);
    if (address.type === 'shipping') {
      setShowShippingForm(true);
    } else {
      setShowBillingForm(true);
    }
  };

  const handleDeleteAddress = (addressId) => {
    // Add your delete logic here
    console.log(`Deleting address with id: ${addressId}`);
  };

  const shippingAddresses = addresses.filter(addr => addr.type === 'shipping');
  const billingAddresses = addresses.filter(addr => addr.type === 'billing');

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    setAddresses(addressesFromRedux);
  }, [addressesFromRedux]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-6">
        {/* Teslimat Adresi Bölümü */}
        <section>
          <h1 className="text-2xl font-semibold mb-4">Teslimat Adresi</h1>
          
          {showShippingForm ? (
            <AddressForm
              address={selectedAddress}
              type="shipping"
              onClose={() => {
                setShowShippingForm(false);
                setSelectedAddress(null);
              }}
            />
          ) : (
            <>
              {shippingAddresses.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {shippingAddresses.map(address => (
                    <AddressCard
                      key={address.id}
                      address={address}
                      onEdit={() => handleEditAddress(address)}
                      onDelete={() => handleDeleteAddress(address.id)}
                    />
                  ))}
                </div>
              )}
              <button
                onClick={() => {
                  setSelectedAddress(null);
                  setShowShippingForm(true);
                }}
                className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 w-full"
              >
                <Plus className="w-5 h-5" />
                <span>Yeni Teslimat Adresi Ekle</span>
              </button>
            </>
          )}
        </section>

        {/* Fatura Adresi Bölümü */}
        <section>
          <h1 className="text-2xl font-semibold mb-4">Fatura Adresi</h1>
          
          {showBillingForm ? (
            <AddressForm
              address={selectedAddress}
              type="billing"
              onClose={() => {
                setShowBillingForm(false);
                setSelectedAddress(null);
              }}
            />
          ) : (
            <>
              {billingAddresses.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {billingAddresses.map(address => (
                    <AddressCard
                      key={address.id}
                      address={address}
                      onEdit={() => handleEditAddress(address)}
                      onDelete={() => handleDeleteAddress(address.id)}
                    />
                  ))}
                </div>
              )}
              <button
                onClick={() => {
                  setSelectedAddress(null);
                  setShowBillingForm(true);
                }}
                className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 w-full"
              >
                <Plus className="w-5 h-5" />
                <span>Yeni Fatura Adresi Ekle</span>
              </button>
            </>
          )}
        </section>

        <PaymentSection />
      </div>
    </div>
  );
};

OrderPage.propTypes = {
  address: PropTypes.object,
  onClose: PropTypes.func,
};

export default OrderPage;