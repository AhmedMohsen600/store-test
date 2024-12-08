import { SVGProps } from 'react';

export const DangerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='80'
      height='80'
      viewBox='0 0 80 80'
      fill='none'
      {...props}
    >
      <g clipPath='url(#clip0_7218_8326)'>
        <circle opacity='0.5' cx='40' cy='40' r='40' fill='#FFCDCD' />
        <g filter='url(#filter0_ddd_7218_8326)'>
          <rect x='12' y='12' width='56' height='56' rx='28' fill='#F94D4D' />
          <rect
            x='12.5'
            y='12.5'
            width='55'
            height='55'
            rx='27.5'
            stroke='url(#paint0_linear_7218_8326)'
            strokeOpacity='0.1'
          />
        </g>
        <path
          d='M48 32L32 48'
          stroke='white'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M32 32L48 48'
          stroke='white'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_ddd_7218_8326'
          x='-7'
          y='-7'
          width='94'
          height='94'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='3'
            operator='dilate'
            in='SourceAlpha'
            result='effect1_dropShadow_7218_8326'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='8' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.996078 0 0 0 0 0.366118 0 0 0 0 0.0117647 0 0 0 0.5 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_7218_8326'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='4' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_7218_8326'
            result='effect2_dropShadow_7218_8326'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='0.5'
            operator='dilate'
            in='SourceAlpha'
            result='effect3_dropShadow_7218_8326'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='0.25' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_dropShadow_7218_8326'
            result='effect3_dropShadow_7218_8326'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect3_dropShadow_7218_8326'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_7218_8326'
          x1='40'
          y1='12'
          x2='40'
          y2='68'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopColor='#111111' stopOpacity='0' />
        </linearGradient>
        <clipPath id='clip0_7218_8326'>
          <rect width='80' height='80' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
