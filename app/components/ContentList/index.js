import React, { PropTypes } from 'react';

import List from 'components/BasicList';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function Element({ loading, error, onClick = () => {}, component, payload }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

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
  loading: PropTypes.bool,
  error: PropTypes.any,
  payload: PropTypes.any,
  component: PropTypes.func,
  onClick: PropTypes.func,
};

export default Element;
