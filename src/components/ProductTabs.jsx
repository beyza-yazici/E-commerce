// components/ProductTabs.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductTabs = ({ description }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews (0)' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="flex gap-16">
            <div className="w-1/3">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-2/3">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">the quick fox jumps over</h3>
                  <div className="text-gray-600 space-y-6">
                    <p>{description}</p>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="flex gap-16">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6">the quick fox jumps over</h3>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span>→</span>
                          <p>the quick fox jumps over the lazy dog</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6">the quick fox jumps over</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span>→</span>
                          <p>the quick fox jumps over the lazy dog</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'additional':
        return (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span>→</span>
                <p>the quick fox jumps over the lazy dog</p>
              </div>
            ))}
          </div>
        );
      case 'reviews':
        return (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span>→</span>
                <p>the quick fox jumps over the lazy dog</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-16">
      {/* Tab Headers */}
      <div className="flex justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

ProductTabs.propTypes = {
  description: PropTypes.string.isRequired
};

export default ProductTabs;