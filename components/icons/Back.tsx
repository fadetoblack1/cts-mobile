// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Back: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 31.494 31.494"
    {...props}
  >
    <Path
      d="M10.273 5.009a1.112 1.112 0 011.587 0 1.12 1.12 0 010 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 01-1.587 0L.321 16.532a1.12 1.12 0 010-1.571l9.952-9.952z"
    />
  </Svg>
);

export default Back;

