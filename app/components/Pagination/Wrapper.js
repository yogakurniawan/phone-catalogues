import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    display: flex;
    padding-left: 0;
    list-style: none;
    font-size: 0.85em;
    justify-content: center!important;
  }
  
  li {
    &.active a {
      z-index: 2;
      background: #dd5555 !important;
      color: #ffffff !important;
      border-color: #dd5555;
    }

    &:first-child a {
      margin-left: 0;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    &:last-child a {
      margin-right: 0;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }

    a {
      position: relative;
      display: block;
      padding: 0.5rem 0.75rem;
      margin-left: -1px;
      line-height: 1.25;
      color: #dd5555;
      background-color: #ffffff;
      border: 1px solid #ddd;
      touch-action: manipulation;
      text-decoration: none;
      &:active, &:hover {
        background: #ece7e7;
      }
    }
  }
`;

export default Wrapper;
