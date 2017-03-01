import { css } from 'styled-components';

const buttonStyles = css`
  border: none;
  text-align: center;
  line-height: 1.125;
  border-radius: 3px;
  padding: 10px 15px;
  transition: border 0.25s linear, color 0.25s linear, background-color 0.25s linear;
  color: #ffffff;
  background-color: #dd5555;
  text-decoration: none;
  cursor: pointer;

  &:active, &:hover {
    background: #d94040;
  }
`;

export default buttonStyles;
