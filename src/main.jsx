import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import GlobalStyles from '@/components/GlobalStyles/Globalstyles';
import queryClient from '@/config/queryClient';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
