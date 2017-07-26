import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Dimensions from 'react-dimensions';
import P from 'components/P';
import LoadingIndicator from 'components/LoadingIndicator';
import RoundedBoxStyle from 'components/RoundedBox';
import { capitalizeFirstLetter } from 'utils/common';
import Img from './Img';
import DeviceSpecification from './DeviceSpecification';
import H1 from './H1';

const Div = styled.div`${RoundedBoxStyle}`;
const HeaderBox = styled(Div) `
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: auto 5px;
  background-color: #fbebeb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ee9797' fill-opacity='0.15' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;
const ContentBox = styled(Div) `
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 0;
  padding-left: 10px;
  padding-right: 10px;
`;

const ImgWrapper = styled.div`
  img {
    border-radius: 14px;
    margin: 0 auto;
  }
`;

const TitleNav = styled.div`
  svg {
    cursor: pointer;
    color: #dd5555;
    margin-bottom: 8px;
    margin-right: 7px;
  }
  
  @media (max-width: 400px) {
    font-size: 0.75em;
    svg {
      margin-bottom: 5px;
    }
  }
`;

const DisclaimerText = styled.span`
  p {
    text-align: center;
    margin-top: 10px;
    display: block;
    font-style: italic;
  }
`;

const AdditionalDescription = styled.span`
  p {
    text-align: left;
    margin-top: 10px;
    display: block;
  }
`;

class Element extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { detail } = this.props;
    return (
      <div>
        <HeaderBox>
          <TitleNav>
            <span><H1>{`${capitalizeFirstLetter(detail.productBrand)} ${detail.name}`}</H1></span>
          </TitleNav>
          <div className="row center-xs">
            <div className="col-xs-7 col-sm-5 col-md-5 col-lg-4">
              <ImgWrapper>
                <Img src={detail.imageurl} />
              </ImgWrapper>
            </div>
          </div>
        </HeaderBox>
        {!detail.technology && <LoadingIndicator />}
        {detail.technology && (<ContentBox>
          {detail.additional_description && detail.additional_description !== 'null' && <AdditionalDescription>
            <P>{detail.additional_description}</P>
          </AdditionalDescription>}
          <DeviceSpecification specTitle="Network" label="Technology" value={detail.technology} />
          <DeviceSpecification label="2G Bands" value={detail.a2g_bands} />
          <DeviceSpecification label="" value={detail.a2g_bands_2} />
          <DeviceSpecification label="3G Bands" value={detail.a3g_bands} />
          <DeviceSpecification label="" value={detail.a3g_bands_2} />
          <DeviceSpecification label="" value={detail.a3g_bands_3} />
          <DeviceSpecification label="4G Bands" value={detail.a4g_bands} />
          <DeviceSpecification label="" value={detail.a4g_bands_2} />
          <DeviceSpecification label="" value={detail.a4g_bands_3} />
          <DeviceSpecification label="" value={detail.a4g_bands_4} />
          <DeviceSpecification label="Speed" value={detail.speed} />
          <DeviceSpecification label="GPRS" value={detail.gprs} />
          <DeviceSpecification label="EDGE" value={detail.edge} />
          <DeviceSpecification specTitle="Launch" label="Announced" value={detail.announced} />
          <DeviceSpecification label="Status" value={detail.status} />
          <DeviceSpecification specTitle="Body" label="Dimensions" value={detail.dimensions} />
          <DeviceSpecification label="Weight" value={detail.weight} />
          <DeviceSpecification label="SIM" value={detail.sim} />
          <DeviceSpecification label="Build" value={detail.build} />
          <DeviceSpecification label="" value={detail.body_c} />
          <DeviceSpecification label="Keyboard" value={detail.keyboard} />
          <DeviceSpecification specTitle="Display" label="Type" value={detail.type} />
          <DeviceSpecification label="Size" value={detail.size} />
          <DeviceSpecification label="Resolution" value={detail.resolution} />
          <DeviceSpecification label="Multitouch" value={detail.multitouch} />
          <DeviceSpecification label="Protection" value={detail.protection} />
          <DeviceSpecification label="" value={detail.display_c} />
          <DeviceSpecification specTitle="Platform" label="OS" value={detail.phone_os} />
          <DeviceSpecification label="Chipset" value={detail.chipset} />
          <DeviceSpecification label="CPU" value={detail.cpu} />
          <DeviceSpecification label="GPU" value={detail.gpu} />
          <DeviceSpecification specTitle="Memory" label="Card Slot" value={detail.card_slot} />
          <DeviceSpecification label="Phonebook" value={detail.phonebook} />
          <DeviceSpecification label="Call Records" value={detail.call_records} />
          <DeviceSpecification label="Internal" value={detail.internal} />
          <DeviceSpecification label="" value={detail.memory_c} />
          <DeviceSpecification specTitle="Camera" label="Primary" value={detail.primary} />
          <DeviceSpecification label="Features" value={detail.features} />
          <DeviceSpecification label="Video" value={detail.video} />
          <DeviceSpecification label="Secondary" value={detail.secondary} />
          <DeviceSpecification specTitle="Sound" label="Alert Types" value={detail.alert_types} />
          <DeviceSpecification label="Loudspeaker" value={/* eslint no-underscore-dangle: 0 */detail.loudspeaker} />
          <DeviceSpecification label="3.5mm Jack" value={/* eslint no-underscore-dangle: 0 */detail.jack_3_5mm} />
          <DeviceSpecification label="" value={detail.sound_c} />
          <DeviceSpecification specTitle="Comms" label="WLAN" value={detail.wlan} />
          <DeviceSpecification label="Bluetooth" value={detail.bluetooth} />
          <DeviceSpecification label="GPS" value={detail.gps} />
          <DeviceSpecification label="NFC" value={detail.nfc} />
          <DeviceSpecification label="Infrared Port" value={detail.infrared_port} />
          <DeviceSpecification label="Radio" value={detail.radio} />
          <DeviceSpecification label="USB" value={detail.usb} />
          <DeviceSpecification specTitle="Features" label="Sensors" value={detail.sensors} />
          <DeviceSpecification label="Messaging" value={detail.messaging} />
          <DeviceSpecification label="Browser" value={detail.browser} />
          <DeviceSpecification label="Clock" value={detail.clock} />
          <DeviceSpecification label="Alarm" value={detail.alarm} />
          <DeviceSpecification label="Games" value={detail.games} />
          <DeviceSpecification label="Languages" value={detail.languages} />
          <DeviceSpecification label="Java" value={detail.java} />
          <DeviceSpecification label="" value={detail.features_c} />
          <DeviceSpecification specTitle="Battery" label="Type" value={detail.battery_c} />
          <DeviceSpecification label="Stand By" value={detail.stand_by} />
          <DeviceSpecification label="Talk Time" value={detail.talk_time} />
          <DeviceSpecification label="" value={detail.battery_ext} />
          <DeviceSpecification label="Music Play" value={detail.music_play} />
          <DeviceSpecification label="Battery Life" value={detail.battery_life} />
          <DeviceSpecification specTitle="Misc." label="Colors" value={detail.colors} />
          <DeviceSpecification label="SAR US" value={detail.sar_us} />
          <DeviceSpecification label="SAR EU" value={detail.sar_eu} />
          <DeviceSpecification label="Price Group" value={detail.price_group} />
          <DeviceSpecification specTitle="Tests" label="Performance" value={detail.performance} />
          <DeviceSpecification label="Display" value={detail.display} />
          <DeviceSpecification label="Camera" value={detail.camera} />
          <DeviceSpecification label="Loudspeaker" value={detail.loudspeaker} />
          <DeviceSpecification label="Audio Quality" value={detail.audio_quality} />
          <DisclaimerText>
            <P>Disclaimer. We can not guarantee that the information on this page is 100% correct.</P>
          </DisclaimerText>
        </ContentBox>)}
      </div>
    );
  }
}

Element.propTypes = {
  detail: PropTypes.object,
};

const EnhancedElement = Dimensions()(Element);

export default EnhancedElement;
