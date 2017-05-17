import styled from 'styled-components';

const ListItemWrapper = styled.li`
  flex: 0.5;
  text-align: center;
  margin: 0;
  a {
    @media only screen and (min-width: 1024px) {
      border: 0;
      color: #e8e8e8;
      display: flex;
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: 300;
      padding: 6px 10px;
      height: auto;
      font-size: 1em;
      &:hover {
        color: inherit;
      }
    }
    text-decoration: none;
    color: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 50px;
    transition: background-color 0.3s;
    padding-top: 6px;
    box-sizing: border-box;
    font-size: 0.9em;
    &:hover {
      color: inherit;
    }
  }
`;

export default ListItemWrapper;
