import styled from 'styled-components';

const Wrapper = styled.div`
  svg {
    cursor: pointer;
    color: #dd5555;
  }
  .icon {
    padding-top: 6px;
  }
  margin: 10px auto;
  @media (max-width: 414px) {
    .icon {
      padding-top: 0;
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
