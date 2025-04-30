import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addAddress, updateAddress } from '../store/actions/addressActions';

const AddressForm = ({ address, type, onClose }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: address?.title || '',
    name: address?.name || '',
    surname: address?.surname || '',
    phone: address?.phone || '',
    city: address?.city || '',
    district: address?.district || '',
    neighborhood: address?.neighborhood || '',
    type: type || address?.type || 'shipping'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const addressPayload = {
        ...formData,
        type: type || 'shipping', // type'ı ekleyin
        isDefault: false // veya gerekli default değeri
      };
  
      if (address?.id) {
        await dispatch(updateAddress({ ...addressPayload, id: address.id }));
      } else {
        await dispatch(addAddress(addressPayload));
      }
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Adres kaydedilirken bir hata oluştu.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            Adres Başlığı
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Ad
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="surname" className="text-sm font-medium">
              Soyad
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              value={formData.surname}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="city" className="text-sm font-medium">
              İl
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Seçiniz</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="district" className="text-sm font-medium">
              İlçe
            </label>
            <input
              id="district"
              name="district"
              type="text"
              value={formData.district}
              onChange={handleChange}
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="neighborhood" className="text-sm font-medium">
            Mahalle ve Adres Detayı
          </label>
          <textarea
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            rows="3"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
            disabled={loading}
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:bg-orange-300"
            disabled={loading}
          >
            {loading ? 'Kaydediliyor...' : address?.id ? 'Güncelle' : 'Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
};

AddressForm.propTypes = {
  address: PropTypes.object,
  type: PropTypes.oneOf(['shipping', 'billing']),
  onClose: PropTypes.func.isRequired,
};

export default AddressForm;