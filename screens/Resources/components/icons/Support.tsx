// Libs
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Support = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      {...props}
    >
      <Path d="M5.699 18.239H3.507C1.753 18.239 0 17.341 0 15.544s0-6.289 2.192-6.289c.438 0 2.192 1.348 4.384 1.348.877 0 1.315 0 2.192-.449v1.348c0 1.348.438 3.144 1.315 4.492-1.753 0-3.507.898-4.384 2.246m.876-8.985c-2.192 0-4.384-1.797-4.384-4.492C2.191 2.517 4.383.72 6.575.72s4.384 1.797 4.384 4.043c0 2.695-2.192 4.492-4.384 4.492m16.658 22.011H8.767c-2.63 0-4.384-1.797-4.384-4.492 0-4.043.877-9.882 5.699-9.882.877 0 2.63 2.246 6.137 2.246 3.069 0 5.26-2.246 5.699-2.246 5.261 0 6.137 5.84 6.137 9.882 0 2.695-1.754 4.492-4.822 4.492m-7.014-13.027c-3.507 0-6.575-3.144-6.575-6.738s3.069-6.738 6.575-6.738c3.507 0 6.137 3.144 6.137 6.738s-2.63 6.738-6.137 6.738m9.644-8.984c-2.63 0-4.384-1.797-4.384-4.492 0-2.246 1.754-4.043 4.384-4.043 2.192 0 3.945 1.797 3.945 4.043 0 2.695-1.753 4.492-3.945 4.492m3.068 8.984h-2.192c-1.315-1.348-2.63-2.246-4.384-2.246.877-1.348 1.315-3.144 1.315-4.492v-1.348c.438.449 1.315.449 2.192.449 2.192 0 3.945-1.348 4.384-1.348C32 9.254 32 13.746 32 15.543s-1.315 2.695-3.069 2.695" />
    </Svg>
  )
}

export default Support;

