import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App'
import { DataProvider } from './context/DataContext'
import { NewDataProvider } from './context/NewDataContext';
import {CartProvider} from './context/CartContext';
import { ToastContainer } from 'react-toastify'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
      <NewDataProvider>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        </ClerkProvider>
        <ToastContainer/>
      </NewDataProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)