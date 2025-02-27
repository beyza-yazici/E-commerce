// src/components/PaymentSection.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Shield } from 'lucide-react';
import PropTypes from 'prop-types';
import { fetchCards } from '../store/actions/cardActions';
import { addCard } from '../store/actions/cardActions';

const PaymentSection = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.card?.cards || []);
  const loading = useSelector(state => state.card?.loading);
  const error = useSelector(state => state.card?.error);
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (loading) {
    return <div>Kartlar yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Kart Bilgileri</h2>
      <div className="flex justify-between items-center mb-4">
        <h3>Kart ile Öde</h3>
        <button
          onClick={() => setShowNewCardForm(true)}
          className="text-gray-600 hover:text-gray-800 underline"
        >
          Başka bir Kart ile Ödeme Yap
        </button>
      </div>

      {/* Kayıtlı Kartlar */}
      <div className="space-y-4">
        {cards.map(card => (
          <label
            key={card.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${
              selectedCard?.id === card.id ? 'border-orange-500' : 'border-gray-200'
            }`}
          >
            <input
              type="radio"
              name="card"
              checked={selectedCard?.id === card.id}
              onChange={() => setSelectedCard(card)}
              className="mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  **** **** **** {card.card_no.slice(-4)}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {card.expire_month}/{card.expire_year}
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Yeni Kart Ekle Butonu */}
      {cards.length === 0 && (
        <button
          onClick={() => setShowNewCardForm(true)}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg mt-4 hover:border-orange-500"
        >
          Yeni Kart Ekle
        </button>
      )}

      {/* Yeni Kart Formu */}
      {showNewCardForm && <NewCardForm onClose={() => setShowNewCardForm(false)} />}

      {/* 3D Secure Checkbox */}
      <label className="flex items-center gap-2 mt-4">
        <input type="checkbox" className="text-orange-500" />
        <Shield className="w-5 h-5" />
        <span>3D Secure ile ödemek istiyorum</span>
      </label>

      {/* Taksit Seçenekleri */}
      {selectedCard && (
        <div className="mt-6">
          <h3 className="font-medium mb-4">Taksit Seçenekleri</h3>
          <div className="border rounded-lg">
            <div className="grid grid-cols-2 p-4 border-b">
              <span>Taksit Sayısı</span>
              <span>Aylık Ödeme</span>
            </div>
            <label className="flex items-center p-4">
              <input
                type="radio"
                name="installment"
                className="mr-4"
                defaultChecked
              />
              <div className="flex-1 grid grid-cols-2">
                <span>Tek Çekim</span>
                <span>6.604,22 TL</span>
              </div>
            </label>
          </div>
        </div>
      )}
    </section>
  );
};

// Yeni Kart Formu Komponenti
const NewCardForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    card_no: '',
    expire_month: '',
    expire_year: '',
    name_on_card: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kart kaydetme işlemi
    dispatch(addCard(formData));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-medium mb-4">Yeni Kart Ekle</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Kart Numarası
            </label>
            <input
              type="text"
              value={formData.card_no}
              onChange={e => setFormData({...formData, card_no: e.target.value})}
              className="w-full p-2 border rounded"
              maxLength="16"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Son Kullanma Tarihi
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={formData.expire_month}
                  onChange={e => setFormData({...formData, expire_month: e.target.value})}
                  className="p-2 border rounded"
                  required
                >
                  <option value="">Ay</option>
                  {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                    <option key={month} value={month}>
                      {month.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  value={formData.expire_year}
                  onChange={e => setFormData({...formData, expire_year: e.target.value})}
                  className="p-2 border rounded"
                  required
                >
                  <option value="">Yıl</option>
                  {Array.from({length: 10}, (_, i) => new Date().getFullYear() + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                CVV
              </label>
              <input
                type="text"
                value={formData.cvv}
                onChange={e => setFormData({...formData, cvv: e.target.value})}
                className="w-full p-2 border rounded"
                maxLength="3"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              value={formData.name_on_card}
              onChange={e => setFormData({...formData, name_on_card: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              İptal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NewCardForm.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default PaymentSection;