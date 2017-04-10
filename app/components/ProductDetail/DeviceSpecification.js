import React, { PropTypes } from 'react';
import styled from 'styled-components';
import H4 from 'components/H4';
import P from 'components/P';

const LabelText = styled(P) `
  font-weight: bold;
`;

const DeviceSpecTitle = styled(H4) `
  &:hover {
    color: #f53e3e;
  }
`;

const Wrapper = styled.div`
  margin-top: ${(props) => props.needMargin ? '10px' : 'auto'};
`;

function Element({ specTitle, label, value }) { // eslint-disable-line react/prefer-stateless-function
  if (value) {
    return (
      <Wrapper needMargin={specTitle}>
        { specTitle && <DeviceSpecTitle>{specTitle}</DeviceSpecTitle> }
        <div className="row">
          <div className="col-xs-3">
            <LabelText>{label}</LabelText>
          </div>
          <div className="col-xs-9">
            <P>{value}</P>
          </div>
        </div>
      </Wrapper>
    );
  }

  return <div></div>;
}

Element.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  specTitle: PropTypes.string,
};

export default Element;
