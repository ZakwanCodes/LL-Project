import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Still checking /me? Show nothing or a spinner
  if (loading) return <p>Loading...</p>;

  // Not logged in? Redirect to login page
  if (!user) return <Navigate to="/login" />;

  // Logged in? Render the page
  return children;
}

export default ProtectedRoute;
