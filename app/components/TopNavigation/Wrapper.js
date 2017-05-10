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
      margin-bottom: 8px;
      height: 18px;
    }
    h1 {
      font-size: 1.6em;
    }
    p {
      font-size: 17px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.85em;
    }
  }
  
`;

export default Wrapper;
