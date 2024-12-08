import { useGlobalLoading } from '@/hooks/useGlobalLoading';
import { SVGProps } from 'react';

interface SpinnerProps extends SVGProps<SVGSVGElement> {
  fullPage?: boolean; // Add prop to determine if it's full page
  forceShow?: boolean; // Add prop to force showing (useful for Suspense)
}

export const LoadingSpinner = ({
  fullPage = false,
  forceShow = false,
  ...props
}: SpinnerProps) => {
  const isLoading = useGlobalLoading();

  // Show if forced (Suspense) or if loading (API calls)
  if (!forceShow && !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
      ${fullPage ? 'bg-white/80 dark:bg-gray-950/80' : 'bg-black/50'}`}
    >
      <div className='animate-spin'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          {...props}
        >
          <g clipPath='url(#clip0_345_9552)'>
            <path
              d='M23 12C23 10.343 22.6078 8.70951 21.8556 7.2331C21.1033 5.7567 20.0123 4.47929 18.6717 3.50532'
              stroke='currentColor'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_345_9552'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(0.5)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
