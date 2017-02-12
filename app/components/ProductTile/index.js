import React, { PropTypes } from 'react';

import P from 'components/P';
import RoundedBox from 'components/RoundedBox';
import H4 from './H4';
import Img from './Img';

class Element extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { imgUrl, description, title } = this.props;
    return (
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" style={{ maxWidth: '30rem' }}>
          <RoundedBox className="row">
            <div className="col-xs-3">
              <Img src={imgUrl} />
            </div>
            <div className="col-xs-9">
              <H4>{title}</H4>
              <P>{description}</P>
            </div>
          </RoundedBox>
        </div>
      </div>
    );
  }
}

Element.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Element;
