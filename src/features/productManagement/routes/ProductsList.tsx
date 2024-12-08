import { useQuery } from '@tanstack/react-query';
import { getProductsList } from '../services/productsList';
import { QUERY_KEYS } from '@/constant/queryKeys';
import { ProductCard } from '../components/ProductCard';
import { RadioTabs } from '@/components/RadioTabs';
import { categoriesFilterData } from '../data';
import { useState } from 'react';
import { Categories } from '../enums/categories';
import { useNavigate } from 'react-router';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Categories.ELECTRONICS
  );

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_LIST, selectedCategory],
    queryFn: () => getProductsList(selectedCategory),
  });

  const navigate = useNavigate();

  return (
    <div>
      <RadioTabs
        value={selectedCategory}
        onChange={(val) => setSelectedCategory(val as Categories)}
        data={categoriesFilterData}
      />
      <ul className='grid grid-cols-1 gap-4 mt-6 pb-28 md:pb-12 lg:grid-cols-2 xl:grid-cols-3'>
        {data?.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
