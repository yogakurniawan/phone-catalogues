import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: #2c3e50;
  border-color: transparent;
  background-color: #f9f9f9;
  height: 35px;
  border-radius: 5px;
  padding: 5px 10px 5px 30px;
  line-height: 1.4;
  border: 2px solid #bdc3c7;
  font-size: 1em;
  width: 100%;
  &:focus {
    border-color: #dd5555;
    color: #dd5555;
    outline: 0;
    box-shadow: none;
  }
`;

const InputGroupButton = styled.span`
  color: #bdc3c7;
  position: absolute;
  padding: 10px;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  display: inline-block;
  left: 9px;
  top: -1px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

function Component({ onChange }) {
  return (
    <Wrapper className="row start-xs">
      <InputGroup className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <Input onChange={onChange} type="search" placeholder="Filter Brand" />
        <InputGroupButton className="fa fa-search"></InputGroupButton>
      </InputGroup>
    </Wrapper>
  );
}

Component.propTypes = {
  onChange: PropTypes.func,
};

export default Component;
