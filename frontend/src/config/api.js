const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const API_ROUTES = {
  auth: `${API_BASE_URL}/api/auth`,
  loomian: `${API_BASE_URL}/api/loomian`,
  inventory: `${API_BASE_URL}/api/inventory`,
};
