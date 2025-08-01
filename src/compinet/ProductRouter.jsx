import React from 'react'
import{useUser} from '@clerk/clerk-react';
import { Navigate } from "react-router-dom";

function ProductRouter({ children}) {
 const { user } = useUser();

  return <div>{user ? children : <Navigate to="/" />}</div>;

}

export default ProductRouter;
