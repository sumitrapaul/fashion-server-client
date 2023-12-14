/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const {user, loading} =useContext(AuthContext)

    if(loading) return <span className="loading loading-infinity loading-lg text-center text-red-500"></span>

    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;