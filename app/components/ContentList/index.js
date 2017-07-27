import React, { PropTypes } from 'react';

import List from 'components/BasicList';
import ListItem from 'components/ListItem';

function Element({ error, onClick = () => {}, component, payload }) {
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (payload !== false) {
    return <List items={payload} component={component} onClick={onClick} />;
  }

  return null;
}

Element.propTypes = {
  error: PropTypes.any,
  payload: PropTypes.any,
  component: PropTypes.func,
  onClick: PropTypes.func,
};

export default Element;
