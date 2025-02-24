// src/components/auth/SignupPage.jsx
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader } from 'lucide-react';
import axiosInstance from '../../axiosInstance';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    ),
  
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  
  role_id: yup
    .string()
    .required('Role is required'),

  store_name: yup.string().when('role_id', {
    is: '2',
    then: yup.string().required('Store name is required').min(3, 'Store name must be at least 3 characters'),
  }),
  
  store_phone: yup.string().when('role_id', {
    is: '2',
    then: yup.string().required('Phone is required').matches(/^(\+90|0)?[0-9]{10}$/, 'Invalid Turkish phone number'),
  }),
  
  store_tax_no: yup.string().when('role_id', {
    is: '2',
    then: yup.string().required('Tax ID is required').matches(/^T[0-9]{4}V[0-9]{6}$/, 'Invalid Tax ID format'),
  }),
  
  store_bank_account: yup.string().when('role_id', {
    is: '2',
    then: yup.string().required('IBAN is required').matches(/^TR[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{2}$/, 'Invalid IBAN format'),
  }),
});

const SignupPage = () => {
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axiosInstance.get('/roles');
        setRoles(response.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to load roles');
      }
    };
    fetchRoles();
  }, []);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role_id: '3' // Customer role by default
    }
  });

  const selectedRole = watch('role_id');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      };

      if (data.role_id === '2') {
        formData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account
        };
      }

      await axiosInstance.post('/signup', formData);
      alert('You need to click link in email to activate your account!');
      history.goBack();
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during signup');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            {...register('name')}
            className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            {...register('password')}
            className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            {...register('confirmPassword')}
            className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Role
          </label>
          <select
            {...register('role_id')}
            className={`w-full px-3 py-2 border rounded-md ${errors.role_id ? 'border-red-500' : 'border-gray-300'}`}
          >
            {roles.map(role => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && (
            <p className="text-red-500 text-xs mt-1">{errors.role_id.message}</p>
          )}
        </div>

        {/* Store Fields */}
        {selectedRole === '2' && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Store Name
              </label>
              <input
                {...register('store_name')}
                className={`w-full px-3 py-2 border rounded-md ${errors.store_name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.store_name && (
                <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Store Phone
              </label>
              <input
                {...register('store_phone')}
                placeholder="+90XXXXXXXXXX"
                className={`w-full px-3 py-2 border rounded-md ${errors.store_phone ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.store_phone && (
                <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tax ID
              </label>
              <input
                {...register('store_tax_no')}
                placeholder="TXXXXVXXXXXX"
                className={`w-full px-3 py-2 border rounded-md ${errors.store_tax_no ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.store_tax_no && (
                <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bank Account (IBAN)
              </label>
              <input
                {...register('store_bank_account')}
                placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX"
                className={`w-full px-3 py-2 border rounded-md ${errors.store_bank_account ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.store_bank_account && (
                <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 
            focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
              Signing up...
            </span>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;