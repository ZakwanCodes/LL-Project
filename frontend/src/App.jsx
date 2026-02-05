import Register from "./pages/register.jsx"
import Login from "./pages/login.jsx"
import Homepage from "./pages/homepage.jsx"
import InventoryPage from "./pages/inventory.jsx"
import {Routes, Route} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App(){
  return(
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
    </Routes>
  );
}

export default App;