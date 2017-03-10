import styled from 'styled-components';

const Element = styled.div`
  box-sizing: border-box;
  background: #dd5555;
  color: #fff;
  height: 44px;
  padding-top: 4px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  header {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    text-align: left;
  }
`;

export default Element;
