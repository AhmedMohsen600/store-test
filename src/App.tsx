import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from '@/router';
import { DialogProvider } from './GlobalDialog/DialogProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
      gcTime: 1000 * 60 * 30, // Unused data is garbage collected after 30 minutes (previously cacheTime)
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: 3, // Number of retries on failed queries
    },
    mutations: {
      retry: 2, // Number of retries on failed mutations
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='relative'>
        <LoadingSpinner />
        <DialogProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <RouterProvider router={router} />
          </Suspense>
        </DialogProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
