import { apiRequest } from '@/axios';
import { Cart, Product } from '../type';

export const getProductsList = async (
  selectedCategory: string
): Promise<Product[]> => {
  const path = `/products/category/${selectedCategory}`;

  return apiRequest({
    path,
    method: 'GET',
    params: {
      category: selectedCategory,
    },
  });
};

export const getProductById = async (id: string): Promise<Product> => {
  return apiRequest({
    path: `/products/${id}`,
    method: 'GET',
  });
};

// Generate a timestamp-based unique ID
const generateUniqueUserId = () => {
  return Math.floor(Math.random() * 1000) + 10;
};

export const addProductToCart = async (
  productId: number,
  quantity: number = 1
) => {
  const uniqueUserId = generateUniqueUserId();

  return apiRequest({
    path: '/carts',
    method: 'POST',
    body: {
      userId: uniqueUserId,
      products: [
        {
          productId: productId,
          quantity: quantity,
        },
      ],
    },
  });
};

export const getCarts = async (): Promise<Cart[]> => {
  return apiRequest({
    path: '/carts',
    method: 'GET',
  });
};

// Add a new function to get categories
export const getCategories = async (): Promise<string[]> => {
  return apiRequest({
    path: '/products/categories',
    method: 'GET',
  });
};
