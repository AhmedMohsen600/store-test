import { QUERY_KEYS } from '@/constant/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../services/productsApi';
import { useParams } from 'react-router';
import { useContext, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DialogContext } from '@/GlobalDialog/DialogContext';
import { Card } from '@/components/ui/card';
import { useCartStore } from '@/stores/cartStore';
import { Heading3, Text } from '@/components/Typography';
import { Input } from '@/components/ui/input';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { show } = useContext(DialogContext);
  const { addItem } = useCartStore((state) => state);

  /** QUERIES */
  const { data: product, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCT_DETAILS, id],
    queryFn: () => getProductById(id ?? ''),
    enabled: !!id,
  });

  /** HANDLERS */
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      show({
        title: 'Success',
        desc: 'Product added to cart',
        type: 'success',
      });
    }
  };

  if (isLoading || !product) return <div>Loading...</div>;

  return (
    <div className='max-w-2xl p-4 mx-auto'>
      <Card className='p-6 bg-white rounded-lg shadow-lg'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div>
            <Heading3 className='mb-4 text-2xl font-bold'>
              {product.title}
            </Heading3>
            <Text className='mb-4'>{product.description}</Text>
            <Text className='mb-4 '>${product.price}</Text>

            {/* Quantity Controls */}
            <div className='flex items-center gap-4 mb-4'>
              <Label htmlFor='quantity' className='font-medium'>
                Quantity:
              </Label>
              <div className='flex items-center border rounded-lg'>
                <button
                  onClick={handleDecrement}
                  className='px-3 py-1 border-e hover:bg-gray-100'
                  type='button'
                >
                  -
                </button>
                <Input
                  id='quantity'
                  type='number'
                  min='1'
                  value={quantity}
                  onChange={handleQuantityChange}
                  className='w-16 p-1 text-center focus:outline-none'
                />
                <button
                  onClick={handleIncrement}
                  className='px-3 py-1 border-s hover:bg-gray-100'
                  type='button'
                >
                  +
                </button>
              </div>
            </div>

            <Button size='full' onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
