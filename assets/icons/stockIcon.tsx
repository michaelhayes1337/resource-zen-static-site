import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const StockIcon = (props: SvgIconProps) => {
  return (
    <>
      <SvgIcon
        width="248"
        height="249"
        viewBox="0 0 248 249"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#filter0_d_364_2354)">
          <path
            d="M180.5 88.75V4H67.5V88.75H11V187.625H237V88.75H180.5ZM109.875 173.5H25.125V102.875H53.375V117H81.625V102.875H109.875V173.5ZM81.625 88.75V18.125H109.875V32.25H138.125V18.125H166.375V88.75H81.625ZM222.875 173.5H138.125V102.875H166.375V117H194.625V102.875H222.875V173.5Z"
            fill="#14458B"
          />
          <path
            d="M11 230H53.375V215.875H194.625V230H237V201.75H11V230Z"
            fill="#5F9BE4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_364_2354"
            x="0.453333"
            y="0.986666"
            width="247.093"
            height="247.093"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="7.53333" />
            <feGaussianBlur stdDeviation="5.27333" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_364_2354"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_364_2354"
              result="shape"
            />
          </filter>
        </defs>
      </SvgIcon>
    </>
  );
};

export default StockIcon;
