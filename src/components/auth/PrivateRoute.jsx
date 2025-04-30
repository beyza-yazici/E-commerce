// src/components/auth/PrivateRoute.jsx
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props =>
        isLoading ? (
          <div>Loading...</div>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.object
};

export default PrivateRoute;