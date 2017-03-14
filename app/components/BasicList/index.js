import React, { PropTypes } from 'react';

function Element(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} brand={props.brand} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className="row center-xs">
      {content}
    </div>
  );
}

Element.propTypes = {
  brand: PropTypes.string,
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default Element;
