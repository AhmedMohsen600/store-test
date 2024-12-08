import { ROUTER_CONSTANTS } from '@/constant/routerConstants';
import { lazy } from 'react';
import { RouteObject } from 'react-router';

const ProductListPage = lazy(() => import('./ProductsList'));
const ProductDetailsPage = lazy(() => import('./ProductDetails'));
const CartPage = lazy(() => import('./Cart'));

const productRoutes: RouteObject[] = [
  {
    path: ROUTER_CONSTANTS.PRODUCT.PRODUCTS_LIST,
    element: <ProductListPage />,
  },
  {
    path: ROUTER_CONSTANTS.PRODUCT.PRODUCTS_DETAILS,
    element: <ProductDetailsPage />,
  },
  { path: ROUTER_CONSTANTS.PRODUCT.CART_PAGE, element: <CartPage /> },
];

const ProductsRoutes = () => null;

ProductsRoutes.routes = productRoutes;

export default ProductsRoutes;
