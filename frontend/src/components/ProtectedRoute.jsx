import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import { useEffect, useState } from "react";
import styles from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  

  // Still loading OR delay not finished
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}>
          <div className={styles.spinnerCircle}></div>
          <p className={styles.loadingText}>Loading...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Logged in
  return children;
}

export default ProtectedRoute;
