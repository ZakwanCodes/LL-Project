import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from './context/authContext.jsx'
import { InventoryProvider } from './context/inventoryContext.jsx'
import App from './App.jsx'
import { SearchProvider } from './context/searchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <InventoryProvider>
          <SearchProvider>
            <App/>
          </SearchProvider>
        </InventoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
) 
