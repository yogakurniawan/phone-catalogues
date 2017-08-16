import styled from 'styled-components';
import RoundedBoxStyle from 'components/RoundedBox';

const Div = styled.div`${RoundedBoxStyle}`;

const ContentBox = styled(Div) `
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0;
  padding-left: 10px;
  padding-right: 10px;
`;

export default ContentBox;
