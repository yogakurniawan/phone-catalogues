import styled from 'styled-components';

const Element = styled.div`
  padding: 10px 0 0 0;
  background: #f9f9f9;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 5px 10px 15px 10px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.8s;
  transition-property: color, background-color;
  &:hover {
    cursor: pointer;
    background-color: #dd5555;
    h2 {
      color: white;
    }
  }
`;

export default Element;
