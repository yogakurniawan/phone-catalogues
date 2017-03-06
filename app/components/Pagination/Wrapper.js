import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    padding-left: 0;
  }
  li {
    @media (max-width: 375px) {
      margin: auto 2px;
    }
    margin: auto 5px;
    padding-bottom: 20px;
    display: inline-block;
    &.active a {
      background: #dd5555;
      color: #ffffff;
    }
    a {
      border: none;
      text-align: center;
      border-radius: 3px;
      padding: 8px 12px;
      @media (max-width: 414px) {
        padding: 6px 9px;
        font-size: 0.85em;
      }
      @media (max-width: 375px) {
        padding: 6px 8px;
        font-size: 0.75em;
      }
      transition: border 0.25s linear, color 0.25s linear, background-color 0.25s linear;
      color: #dd5555;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.1);
      background-color: #f9f9f9;
      text-decoration: none;
      cursor: pointer;
      font-size: 0.85em;

      &:active, &:hover {
        color: #ffffff;
        background: #d94040;
      }
    }
  }
`;

export default Wrapper;
