import styled from 'styled-components';

const Div = styled.div`
  padding: 10px 5px;
  border-bottom: ${(props) => props.withBorder ? '1px solid #e1e4e8' : 'none'};
`;

export default Div;
