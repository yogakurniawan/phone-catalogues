import styled from 'styled-components';

const NavSearchWrapper = styled.li`
  @media only screen and (min-width: 1024px) {
    position: relative;
    top: auto;
    right: auto;
    padding-left: 10px;
  }
  align-self: center;
  position: absolute;
  top: 15px;
  right: 10px;
  flex: 3 !important;
  width: 50%;
`;

export default NavSearchWrapper;
