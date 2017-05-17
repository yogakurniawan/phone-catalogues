import styled from 'styled-components';

const NavigationWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    margin-left: auto;
    position: relative;
    width: 75%;
  }

  nav {
    box-sizing: border-box;
    position: absolute;
    left: -10px;
    right: -10px;
    top: -10px;
    bottom: auto;
    @media only screen and (min-width: 1024px) {
      background: none;
      height: auto;
      position: relative;
      right: auto;
      top: auto;
      width: auto;
    }
  }
`;

export default NavigationWrapper;
