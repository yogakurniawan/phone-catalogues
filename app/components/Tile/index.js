import React, { PropTypes } from 'react';

import P from 'components/P';
import H4 from './H4';
import Img from './Img';
import TileBox from './Box';

class Element extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { imgUrl, description, title } = this.props;
    return (
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <TileBox className="row">
            <div className="col-xs-3">
              <Img src={imgUrl} />
            </div>
            <div className="col-xs-9">
              <H4>{title}</H4>
              <P>{description}</P>
            </div>
          </TileBox>
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
