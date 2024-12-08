import { useCartStore } from '@/stores/cartStore';
import { Heading3, Text } from '@/components/Typography';
import { Card } from '@/components/ui/card';
import { useContext } from 'react';
import { DialogContext } from '@/GlobalDialog/DialogContext';

const Cart = () => {
  const { items, updateQuantity } = useCartStore();
  const { show } = useContext(DialogContext);

  const handleQuantityDecrease = (
    productId: number,
    currentQuantity: number
  ) => {
    if (currentQuantity === 1) {
      show({
        title: 'Remove Item',
        desc: 'Are you sure you want to remove this item from your cart?',
        type: 'destructive',
        componentType: 'alert',
        confirmBtnText: 'Remove',
        onConfirm: () => updateQuantity(productId, 0),
      });
    } else {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Shopping Cart</h1>

      {!items.length ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='space-y-4'>
          {items.map((product) => (
            <li key={product.id} className='list-none'>
              <Card className='flex items-center p-4 border rounded-lg'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='object-contain w-20 h-20 mr-4'
                />
                <div className='flex-grow'>
                  <Heading3>{product.title}</Heading3>
                  <Text className='text-gray-600'>${product.price}</Text>
                  <div className='flex items-center gap-2'>
                    <button
                      onClick={() =>
                        handleQuantityDecrease(product.id, product.quantity)
                      }
                      className='px-2 py-1 border rounded'
                    >
                      -
                    </button>
                    <Text className='text-sm'>
                      Quantity: {product.quantity}
                    </Text>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                      className='px-2 py-1 border rounded'
                    >
                      +
                    </button>
                  </div>
                  <Text className='font-semibold'>
                    Subtotal: ${(product.price * product.quantity).toFixed(2)}
                  </Text>
                </div>
              </Card>
            </li>
          ))}

          <div className='pt-4 mt-4 border-t'>
            <div className='text-xl font-bold text-right'>
              Total: ${calculateTotal().toFixed(2)}
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
