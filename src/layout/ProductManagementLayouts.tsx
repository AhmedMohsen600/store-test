import { MainHeader } from '@/components/MainHeader';

import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const ProductManagementLayouts = () => {
  return (
    <>
      <MainHeader />
      <main className='p-6'>
        <Suspense fallback={<LoadingSpinner fullPage forceShow />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default ProductManagementLayouts;
