import { Heading3, Text } from '@/components/Typography';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FC } from 'react';
import { Product } from '../type';

export const ProductCard: FC<Product & { onClick: () => void }> = ({
  description,
  image,
  price,
  title,
  rating,
  onClick,
}) => {
  return (
    <li className='list-none'>
      <Card onClick={onClick} className='cursor-pointer'>
        <CardContent className='flex flex-col gap-2 p-4'>
          <div className='flex items-center justify-center h-40'>
            <img
              src={image}
              alt={title}
              className='object-contain w-auto h-full'
            />
          </div>
          <Heading3 className='mt-4'>{title}</Heading3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Text className='line-clamp-2 text-start hover:cursor-help'>
                  {description}
                </Text>
              </TooltipTrigger>
              <TooltipContent>
                <Text className='max-w-[300px] text-sm text-white'>
                  {description}
                </Text>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Text className='font-semibold'>Price: ${price}</Text>
          <div className='flex items-center justify-between text-sm'>
            <Text>Reviews: {rating.count}</Text>
            <Text>Rating: {rating.rate}/5</Text>
          </div>
        </CardContent>
      </Card>
    </li>
  );
};
