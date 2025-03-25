import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css';
import { QueryProviders } from './providers/QueryProviders.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          retry: false
      }
  }
  
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
  </StrictMode>
);