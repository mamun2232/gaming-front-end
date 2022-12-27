import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequreAuth = ({children}) => {
      // const [user , lodaing] = useAuthState(auth)
      const user = useSelector((state) => state.user.user);
      const location = useLocation()
     
      // if(lodaing){
      //       return <Loading></Loading>
      // }

      if(user == null){
            return <Navigate to="/login" state={{ from: location }} replace />;
      }
 

      return children
};

export default RequreAuth;