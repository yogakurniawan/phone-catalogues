import styled from 'styled-components';

const Wrapper = styled.div`
  svg {
    cursor: pointer;
    color: #dd5555;
    margin-bottom: 11px;
    margin-right: 7px;
  }
  span {
    display: inline-block;
  }
  margin: 10px auto;
  @media (max-width: 414px) {
    svg {
      margin-bottom: 10px;
      height: 20px;
    }
    h2 {
      font-size: 1.1em;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 1em;
    }
  }
  
`;

export default Wrapper;
