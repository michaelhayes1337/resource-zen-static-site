import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const MobileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="34"
      height="53"
      viewBox="0 0 34 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.2222 0H3.77778C2.77585 0 1.81496 0.398851 1.10649 1.10881C0.398015 1.81877 0 2.78168 0 3.78571V49.2143C0 50.2183 0.398015 51.1812 1.10649 51.8912C1.81496 52.6012 2.77585 53 3.77778 53H30.2222C31.2241 53 32.185 52.6012 32.8935 51.8912C33.602 51.1812 34 50.2183 34 49.2143V3.78571C34 2.78168 33.602 1.81877 32.8935 1.10881C32.185 0.398851 31.2241 0 30.2222 0ZM18.8889 49.2143H15.1111V45.4286H18.8889V49.2143ZM3.77778 41.6429V3.78571H30.2222V41.6429H3.77778Z"
        fill="#5F9BE4"
      />
    </SvgIcon>
  );
};

export default MobileIcon;
