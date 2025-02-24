import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store';
import AuthProvider from './components/auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
        <AuthProvider>
    <App />
    </AuthProvider>
    </Provider>,
    </BrowserRouter>
  
)
