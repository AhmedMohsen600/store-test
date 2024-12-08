import { ROUTER_CONSTANTS } from '@/constant/routerConstants';
import { Link } from 'react-router';
import { useCartStore } from '@/stores/cartStore';

export const MainHeader = () => {
  const { items } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav className='flex items-center gap-4 p-6 shadow-md'>
        <Link to={ROUTER_CONSTANTS.PRODUCT.PRODUCTS_LIST}>Products</Link>
        <div className='relative'>
          <Link to={ROUTER_CONSTANTS.PRODUCT.CART_PAGE}>Cart</Link>
          {totalItems > 0 && (
            <div className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-4'>
              {totalItems}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
