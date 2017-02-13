import styled from 'styled-components';

const Wrapper = styled.div`
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.5s;
  transition-property: color, background-color;
`;

export default Wrapper;
