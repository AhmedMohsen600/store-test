import ProductsRoutes from '@/features/productManagement/routes';
import ProductManagementLayouts from '@/layout/ProductManagementLayouts';
import { createBrowserRouter } from 'react-router-dom';

// You can create a modular routing system by:
// 1. Creating separate route files for each feature (like ProductsRoutes)
// 2. Importing and spreading them here
// 3. Each feature can have its own layout wrapper

export const router = createBrowserRouter([
  {
    element: <ProductManagementLayouts />,
    children: [
      ...ProductsRoutes.routes,

      // You can add more feature routes here by spreading them:
      // ...AuthRoutes.routes,
      // ...DashboardRoutes.routes,
      // ...SettingsRoutes.routes,
      // Each feature can maintain its own routes in a separate file
    ],
  },
  // You can also add more root-level routes with different layouts:
  // {
  //   element: <AuthLayout />,
  //   children: [...AuthRoutes.routes],
  // },
]);
