import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${(props) => props.margin}em auto;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
`;

export default Wrapper;
