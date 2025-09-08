import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { compress, decompress } from 'lz-string';
import './styles/index.css';

// 1. Create a QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// 2. Create an async storage persister for localStorage
const asyncStoragePersister = createAsyncStoragePersister({
  storage: {
    getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(window.localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(window.localStorage.removeItem(key)),
  },
  serialize: (data) => compress(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decompress(data!)),
  key: 'reactQuery', // optional
});

// 3. Wrap your app with PersistQueryClientProvider
const Root = () => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister: asyncStoragePersister, maxAge: Infinity }}
  >
    <App />
  </PersistQueryClientProvider>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
