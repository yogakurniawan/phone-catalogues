import styled from 'styled-components';
import P from 'components/P';

const Paragraph = styled(P)`
  text-align: center;
  color: ${(props) => props.primary ? '#dd5555' : 'inherit'}
`;

export default Paragraph;
