// src/features/address/AddressPage.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { deleteAddress, fetchAddresses } from '../store/actions/addressActions';
import AddressForm from './AddressForm';

const AddressPage = () => {
  const dispatch = useDispatch();
  const { addresses, loading, error } = useSelector(state => state.address);
  const [showForm, setShowForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressType, setAddressType] = useState(null); // 'shipping' veya 'receipt'

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Adres Bilgileri</h1>
      </div>

      {/* Teslimat ve Fatura Adresi Seçimi */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Teslimat Adresi Bölümü */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Teslimat Adresi</h2>
          <button
            onClick={() => {
              setAddressType('shipping');
              setShowForm(true);
              setSelectedAddress(null);
            }}
            className="flex items-center gap-2 text-blue-600 mb-4"
          >
            <Plus size={20} />
            <span>Yeni Teslimat Adresi Ekle</span>
          </button>
          
          {/* Kayıtlı Teslimat Adresleri */}
          <div className="space-y-4">
            {addresses.map(address => (
              <div key={address.id} className="border rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{address.title}</h3>
                    <p>{address.name} {address.surname}</p>
                    <p>{address.phone}</p>
                    <p>{address.city}, {address.district}</p>
                    <p>{address.neighborhood}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="radio"
                      name="shippingAddress"
                      className="mt-1"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedAddress(address);
                          setAddressType('shipping');
                          setShowForm(true);
                        }}
                        className="p-2 text-blue-600"
                      >
                        <Edit2 size={20} />
                      </button>
                      <button
                        onClick={() => dispatch(deleteAddress(address.id))}
                        className="p-2 text-red-600"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fatura Adresi Bölümü */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Fatura Adresi</h2>
          <button
            onClick={() => {
              setAddressType('receipt');
              setShowForm(true);
              setSelectedAddress(null);
            }}
            className="flex items-center gap-2 text-blue-600 mb-4"
          >
            <Plus size={20} />
            <span>Yeni Fatura Adresi Ekle</span>
          </button>

          {/* Kayıtlı Fatura Adresleri */}
          <div className="space-y-4">
            {addresses.map(address => (
              <div key={address.id} className="border rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{address.title}</h3>
                    <p>{address.name} {address.surname}</p>
                    <p>{address.phone}</p>
                    <p>{address.city}, {address.district}</p>
                    <p>{address.neighborhood}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="radio"
                      name="billingAddress"
                      className="mt-1"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedAddress(address);
                          setAddressType('receipt');
                          setShowForm(true);
                        }}
                        className="p-2 text-blue-600"
                      >
                        <Edit2 size={20} />
                      </button>
                      <button
                        onClick={() => dispatch(deleteAddress(address.id))}
                        className="p-2 text-red-600"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
            <h2 className="text-xl font-semibold mb-4">
              {addressType === 'shipping' ? 'Teslimat' : 'Fatura'} Adresi {selectedAddress ? 'Düzenle' : 'Ekle'}
            </h2>
            
            <AddressForm
              address={selectedAddress}
              addressType={addressType}
              onClose={() => {
                setShowForm(false);
                setSelectedAddress(null);
                setAddressType(null);
              }}
            />

            <button
              onClick={() => {
                setShowForm(false);
                setSelectedAddress(null);
                setAddressType(null);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressPage;