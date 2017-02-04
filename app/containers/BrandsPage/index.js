/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';

import Tile from 'components/Tile';

export default class BrandsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="Brands Page"
          meta={[
            { name: 'description', content: 'Brands page contains list of smartphone brands' },
          ]}
        />
        <Tile
          title="Samsung Galaxy J1 mini prime"
          imgUrl="http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-nxt.jpg"
          description="Samsung Galaxy J1 mini prime Android smartphone. Announced 2016, December. Features 3G, 4.0″ TFT capacitive touchscreen, 5 MP camera, Wi-Fi, GPS, Bluetooth."
        />
        <Tile
          title="Samsung Galaxy J3 Emerge"
          imgUrl="http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j3-emerge-.jpg"
          description="Samsung Galaxy J3 Emerge Android smartphone. Announced 2017, January. Features 5.0″ Capacitive touchscreen, 5 MP camera, Wi-Fi, GPS, Bluetooth."
        />
      </div>
    );
  }
}
