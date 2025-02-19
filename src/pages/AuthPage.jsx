import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoginPage from '../components/auth/LoginPage';
import SignupPage from '../components/auth/SignupPage';

const AuthPage = () => {
  const location = useLocation();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'signup' || tab === 'login') {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    history.push(`/auth?tab=${tab}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors
              ${activeTab === 'login' 
                ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            onClick={() => handleTabChange('login')}
          >
            Giriş Yap
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors
              ${activeTab === 'signup' 
                ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
            onClick={() => handleTabChange('signup')}
          >
            Üye Ol
          </button>
        </div>

        <div className="p-6">
        
          {activeTab === 'login' ? <LoginPage /> : <SignupPage />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;