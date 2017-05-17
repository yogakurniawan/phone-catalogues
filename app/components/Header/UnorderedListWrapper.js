import styled from 'styled-components';

const UnorderedListWrapper = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin-top: 50px;
  width: 100%;
  padding: 0;
  background: #dd5555;
  color: #fff;
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 -10px;
    padding: 0;
    background: none;
    width: auto;
  }
`;

export default UnorderedListWrapper;
