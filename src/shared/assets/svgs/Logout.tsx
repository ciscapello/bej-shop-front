import * as React from "react";
import { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="var(--ci-primary-color, currentColor)"
      className="logout_svg__ci-primary"
      d="M77.155 272.034H351.75v-32.001H77.155l75.053-75.053v-.001l-22.628-22.626-113.681 113.68.001.001h-.001L129.58 369.715l22.628-22.627v-.001l-75.053-75.053z"
    />
    <path
      fill="var(--ci-primary-color, currentColor)"
      className="logout_svg__ci-primary"
      d="M160 16v32h304v416H160v32h336V16H160z"
    />
  </svg>
);
export default SvgLogout;
