import React from 'react';

type Props = {
  sx?: {};
};

const FacebookSocial = (props: Props) => {
  return (
    <>
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.sx}
      >
        <circle
          cx="23"
          cy="23"
          r="21.5"
          fill="white"
          stroke="#49B295"
          strokeWidth="3"
        />
        <path
          d="M24.6667 19.6667V17.6667C24.6667 16.8 24.8667 16.3333 26.2667 16.3333H28V13H25.3333C22 13 20.6667 15.2 20.6667 17.6667V19.6667H18V23H20.6667V33H24.6667V23H27.6L28 19.6667H24.6667Z"
          fill="#49B295"
        />
      </svg>
    </>
  );
};

export default FacebookSocial;
