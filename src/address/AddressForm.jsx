// src/features/address/AddressForm.js
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addAddress, fetchAddresses, updateAddress } from '../store/actions/addressActions';

const AddressForm = ({ address, addressType, onClose }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
    district: '',
    neighborhood: ''
  });

  const cities = [
    'İstanbul',
    'Ankara',
    'İzmir',
    'Bursa',
    'Antalya',
    'Adana',
    'Konya',
    'Gaziantep',
    'Mersin',
    'Diyarbakır'
    // Diğer şehirler eklenebilir
  ];

  // Eğer düzenleme modundaysa, mevcut adres bilgilerini form'a doldur
  useEffect(() => {
    if (address) {
      setFormData(address);
    }
  }, [address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = {
      ...formData,
      type: addressType // Adres tipini ekle
    };
  
    try {
      if (address) {
        // Güncelleme işleminde mevcut id ve type'ı koru
        await dispatch(updateAddress({ 
          ...addressData, 
          id: address.id,
          type: address.type || addressType
        }));
      } else {
        // Yeni adres ekleme
        await dispatch(addAddress(addressData));
      }
      // Başarılı işlem sonrası adresleri yenile ve formu kapat
      dispatch(fetchAddresses());
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
      // Hata durumunda kullanıcıya bildirim gösterebilirsiniz
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Adres Başlığı */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Adres Başlığı
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border rounded-md p-2"
          placeholder="Örn: Ev, İş"
          required
        />
      </div>

      {/* Ad Soyad */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ad
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Soyad
          </label>
          <input
            type="text"
            value={formData.surname}
            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
      </div>

      {/* Telefon */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefon
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border rounded-md p-2"
          placeholder="05XX XXX XX XX"
          required
        />
      </div>

      {/* İl ve İlçe */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            İl
          </label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          >
            <option value="">Şehir Seçiniz</option>
            {cities.map(city => (
              <option key={city} value={city.toLowerCase()}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            İlçe
          </label>
          <input
            type="text"
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
      </div>

      {/* Mahalle ve Detaylı Adres */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mahalle ve Adres Detayı
        </label>
        <textarea
          value={formData.neighborhood}
          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
          className="w-full border rounded-md p-2"
          rows="3"
          placeholder="Mahalle, Sokak, Bina No, Daire No"
          required
        />
      </div>

      {/* Butonlar */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          İptal
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Kaydediliyor...' : (address ? 'Güncelle' : 'Kaydet')}
        </button>
      </div>
    </form>
  );
};

AddressForm.propTypes = {
  address: PropTypes.object,
  addressType: PropTypes.oneOf(['shipping', 'receipt']),
  onClose: PropTypes.func.isRequired,
};

export default AddressForm;