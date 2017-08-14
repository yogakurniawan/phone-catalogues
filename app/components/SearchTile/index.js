import React, { PropTypes } from 'react';
import P from 'components/P';
import Col from './Col';
import Div from './Div';
import Image from './Image';
import ImgPlaceHolder from './ImgPlaceHolder';

export default function SearchTile({ device }) {
  return (
    <Col key={device.id} className="col-xs-11 col-sm-9 col-md-9 col-lg-8">
      <Div withBorder className="row">
        <div className="col-xs-3 col-sm-2 col-md-2 col-lg-1">
          <ImgPlaceHolder>
            <Image alt={device.description} src={device.imageurl} />
          </ImgPlaceHolder>
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <P>{device.description}</P>
        </div>
      </Div>
    </Col>
  );
}

SearchTile.propTypes = {
  device: PropTypes.object,
};

