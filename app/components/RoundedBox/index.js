import { css } from 'styled-components';

const style = css`
  padding: 10px 0;
  background: #f9f9f9;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 5px 0 15px 0;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.1s;
  transition-property: color, background-color;
`;

export default style;
