import { Edit2, Trash2 } from "lucide-react";
import PropTypes from 'prop-types';

// AddressCard component'ini güncelleyelim
export const AddressCard = ({ address, onEdit, onDelete }) => {
    return (
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {/* Eğer bir icon veya image kullanıyorsanız, src kontrolü yapın */}
            {address.type === 'shipping' ? (
              <span className="text-sm text-gray-600">Teslimat Adresi</span>
            ) : (
              <span className="text-sm text-gray-600">Fatura Adresi</span>
            )}
            <h3 className="font-semibold">{address.title}</h3>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={onEdit}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button 
              onClick={onDelete}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-gray-700">{address.name} {address.surname}</p>
          <p className="text-gray-600">{address.phone}</p>
          <p className="text-gray-600">{address.neighborhood}</p>
          <p className="text-gray-600">{address.district}, {address.city}</p>
        </div>
        {address.isDefault && (
          <div className="mt-2">
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
              Varsayılan Adres
            </span>
          </div>
        )}
      </div>
    );
  };
  
  AddressCard.propTypes = {
    address: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      surname: PropTypes.string,
      phone: PropTypes.string,
      city: PropTypes.string,
      district: PropTypes.string,
      neighborhood: PropTypes.string,
      type: PropTypes.oneOf(['shipping', 'billing']),
      isDefault: PropTypes.bool
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };