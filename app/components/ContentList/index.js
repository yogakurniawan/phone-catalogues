import React, { PropTypes } from 'react';

import List from 'components/BasicList';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function Element({ loading, error, component, brands }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (brands !== false) {
    return <List items={brands} component={component} />;
  }

  return null;
}

Element.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  brands: PropTypes.any,
  component: PropTypes.func,
};

export default Element;
