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
  border-bottom: 1px solid rgba(165, 171, 177, 0.52);
`;

function Element({ specTitle, label, value }) { // eslint-disable-line react/prefer-stateless-function
  if (value && value !== 'null') {
    const modifiedValue = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    const splittedValue = modifiedValue.split('<br />');
    return (
      <Wrapper needMargin={specTitle}>
        {specTitle && <DeviceSpecTitle>{specTitle}</DeviceSpecTitle>}
        <div className="row">
          <div className="col-xs-3">
            <LabelText>{label}</LabelText>
          </div>
          <div className="col-xs-9">
            {splittedValue.length > 1 && splittedValue.map((val) => <P>{val}</P>)}
            {splittedValue.length === 1 && <P>{value}</P>}
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
