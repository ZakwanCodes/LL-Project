import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import { useEffect, useState } from "react";
import styles from "./ProtectedRoute.module.css";
import LoadSpinner from "./PageLoader.jsx"

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  

  // Still loading OR delay not finished
  if (loading) {
    return(
      <LoadSpinner/>
    )
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Logged in
  return children;
}

export default ProtectedRoute;
