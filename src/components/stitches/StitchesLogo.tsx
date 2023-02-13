import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
    fill="none"
    {...props}
  >
    <circle
      cx={17.5}
      cy={17.5}
      r={14.5}
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m12.818 31.322 19.053-11M3.318 14.867l19.053-11"
      stroke="currentColor"
    />
    <path
      d="m8.653 29.108 17.32-10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m9.216 16.081 17.32-10"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="m13.233 14.23 9.277 6.878M16.697 12.23l9.277 6.878M9.216 16.081l9.83 7.027"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;
