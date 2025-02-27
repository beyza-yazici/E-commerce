// src/pages/OrderPage.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import { fetchAddresses } from '../store/actions/addressActions';
import PropTypes from 'prop-types';
import AddressForm from '../components/AddressForm';
import { AddressCard } from '../components/AddressCard';

const OrderPage = () => {
  const dispatch = useDispatch();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [address, setAddress] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const addresses = useSelector(state => state.address.addresses);
  const loading = useSelector(state => state.address.loading);
  const error = useSelector(state => state.address.error);

  const handleEditAddress = (address) => {
    setSelectedAddress(address);
    setShowAddressForm(true);
  };

  const handleDeleteAddress = (addressId) => {
    // Add your delete logic here
    console.log(`Deleting address with id: ${addressId}`);
  };

  const shippingAddresses = address.filter(addr => addr.type === 'shipping');
  const billingAddresses = address.filter(addr => addr.type === 'billing');

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

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
          
          {shippingAddresses.length === 0 ? (
            <button
              onClick={() => {
                setSelectedAddress(null);
                setShowAddressForm(true);
              }}
              className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 w-full"
            >
              <Plus className="w-5 h-5" />
              <span>Yeni Adres Ekle</span>
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shippingAddresses.map(address => (
                <AddressCard
                  key={address.id}
                  address={address}
                  onEdit={() => handleEditAddress(address)}
                  onDelete={() => handleDeleteAddress(address.id)}
                />
              ))}
              <button
                onClick={() => {
                  setSelectedAddress(null);
                  setShowAddressForm(true);
                }}
                className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500"
              >
                <Plus className="w-5 h-5" />
                <span>Yeni Adres Ekle</span>
              </button>
            </div>
          )}
        </section>

        {/* Fatura Adresi Bölümü */}
        <section>
          <h1 className="text-2xl font-semibold mb-4">Fatura Adresi</h1>
          
          {billingAddresses.length === 0 ? (
            // Fatura adresi yoksa "Yeni Adres Ekle" butonu
            <button
              onClick={() => {
                setSelectedAddress(null);
                setShowAddressForm(true);
              }}
              className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 w-full"
            >
              <Plus className="w-5 h-5" />
              <span>Yeni Adres Ekle</span>
            </button>
          ) : (
            // Fatura adresleri listesi
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {billingAddresses.map(address => (
                <AddressCard
                  key={address.id}
                  address={address}
                  onEdit={() => handleEditAddress(address)}
                  onDelete={() => handleDeleteAddress(address.id)}
                />
              ))}
              <button
                onClick={() => {
                  setSelectedAddress(null);
                  setShowAddressForm(true);
                }}
                className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500"
              >
                <Plus className="w-5 h-5" />
                <span>Yeni Adres Ekle</span>
              </button>
            </div>
          )}
        </section>

        {/* Address Form Modal */}
        {showAddressForm && (
          <AddressForm
            address={selectedAddress}
            onClose={() => {
              setShowAddressForm(false);
              setSelectedAddress(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

AddressForm.propTypes = {
  address: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default OrderPage;