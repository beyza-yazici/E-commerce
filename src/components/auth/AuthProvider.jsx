// src/components/auth/AuthProvider.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'lucide-react';
import { verifyToken } from '../../store/actions/authActions';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth?.isLoading);

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin h-8 w-8 text-blue-500" />
      </div>
    );
  }

  return children;
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;