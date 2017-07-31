import React, { PropTypes } from 'react';
import IsolatedScroll from 'react-isolated-scroll';

import Paragraph from './P';
import Div from './Div';
import Link from './Link';

function RenderSuggestionsContainer({ containerProps, children, query }) {
  const { ref, ...restContainerProps } = containerProps;
  const callRef = (isolatedScroll) => {
    if (isolatedScroll !== null) {
      ref(isolatedScroll.component);
    }
  };

  return (
    <IsolatedScroll ref={callRef} {...restContainerProps}>
      {children}
      <Div>
        <Link to="/">
          <Paragraph primary>{`More result about "${query}"`}</Paragraph>
        </Link>
      </Div>
    </IsolatedScroll>
  );
}

RenderSuggestionsContainer.propTypes = {
  containerProps: PropTypes.object,
  query: PropTypes.string,
  children: PropTypes.node,
};

export default RenderSuggestionsContainer;
