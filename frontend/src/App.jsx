import Register from "./pages/register.jsx"
import Login from "./pages/login.jsx"
import Homepage from "./pages/homepage.jsx"
import InventoryPage from "./pages/inventory.jsx"
import LoomianDetails from "./pages/loomianDetails.jsx"
import {Routes, Route} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { InventoryProvider } from "./context/inventoryContext.jsx"

function App(){
  return(
    <InventoryProvider>
      <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route 
            path="/" 
            element = {
              <ProtectedRoute>
                <Homepage/>
              </ProtectedRoute>
            }/>
            <Route 
              path = "/inventory"
              element = {
                <ProtectedRoute>
                  <InventoryPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path = "/loomian/:id"  // colon tells react that this is a dynamic path
              element = {
                <ProtectedRoute>
                  <LoomianDetails/>
                </ProtectedRoute>
              }
            />
      </Routes>
    </InventoryProvider>
  );
}

export default App;