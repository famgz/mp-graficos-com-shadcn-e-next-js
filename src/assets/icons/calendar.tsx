import * as React from 'react';
import { SVGProps } from 'react';
const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M21.5 4h-2.167v1.333h2V20H2.667V5.333h2V4H2.5a1.186 1.186 0 0 0-1.167 1.207v14.92A1.187 1.187 0 0 0 2.5 21.333h19a1.188 1.188 0 0 0 1.167-1.206V5.207A1.188 1.188 0 0 0 21.5 4Z" />
      <path d="M5.333 9.333h1.334v1.334H5.333V9.333ZM9.333 9.333h1.334v1.334H9.333V9.333ZM13.333 9.333h1.334v1.334h-1.334V9.333ZM17.333 9.333h1.334v1.334h-1.334V9.333ZM5.333 12.667h1.334V14H5.333v-1.333ZM9.333 12.667h1.334V14H9.333v-1.333ZM13.333 12.667h1.334V14h-1.334v-1.333ZM17.333 12.667h1.334V14h-1.334v-1.333ZM5.333 16h1.334v1.333H5.333V16ZM9.333 16h1.334v1.333H9.333V16ZM13.333 16h1.334v1.333h-1.334V16ZM17.333 16h1.334v1.333h-1.334V16ZM6.667 6.667A.667.667 0 0 0 7.333 6V2A.667.667 0 1 0 6 2v4a.667.667 0 0 0 .667.667ZM17.333 6.667A.667.667 0 0 0 18 6V2a.666.666 0 1 0-1.333 0v4a.667.667 0 0 0 .666.667ZM8.667 4h6.666v1.333H8.667V4Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CalendarIcon;
