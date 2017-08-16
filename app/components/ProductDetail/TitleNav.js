import styled from 'styled-components';

const TitleNav = styled.div`
svg {
  cursor: pointer;
  color: #dd5555;
  margin-bottom: 8px;
  margin-right: 7px;
}

@media (max-width: 400px) {
  font-size: 0.75em;
  svg {
    margin-bottom: 5px;
  }
}
`;


export default TitleNav;
