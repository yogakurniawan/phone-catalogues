import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Dimensions from 'react-dimensions';
import H2 from 'components/H2';
import { FaChevronLeft } from 'react-icons/lib/fa/';
// import { MdSdStorage, MdPhoneAndroid } from 'react-icons/lib/md/';
import RoundedBoxStyle from 'components/RoundedBox';
import Img from './Img';
import DeviceSpecification from './DeviceSpecification';

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
  }
  margin: 0 auto;
  padding: 10px;
  width: 180px;
  border-radius: 23px;
  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgb(253, 237, 237) 64%, rgba(247,207,207,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f7cfcf', GradientType=1 );
`;

const TitleNav = styled.div`
  text-align: left;
  svg {
    cursor: pointer;
    color: #dd5555;
    margin-bottom: 8px;
    margin-right: 7px;
  }
  span {
    display: table-cell;
  }
  @media (max-width: 400px) {
    font-size: 0.75em;
    svg {
      margin-bottom: 5px;
    }
  }
`;

// const RightDescription = styled.div`
//   svg {
//     color: #2c3e50;
//   }
// `;

// const LeftIcon = styled.div`
//   display: table-cell;
//   margin-right: 4px;
// `;

// const RightLabel = styled.div`
//   display: table-cell;
//   padding-top: 4px;
// `;

class Element extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { detail, onClick, containerWidth } = this.props;
    const size = containerWidth < 382 ? 18 : 20;
    return (
      <div>
        <HeaderBox>
          <TitleNav>
            <span><FaChevronLeft onClick={onClick} size={size} /></span>
            <span><H2>{detail.name}</H2></span>
          </TitleNav>
          <div className="row">
            <div className="col-xs-12">
              <ImgWrapper>
                <Img src={detail.imageurl} />
              </ImgWrapper>
            </div>
          </div>
        </HeaderBox>
        <ContentBox>
          <DeviceSpecification specTitle="Network" label="Technology" value={detail.technology} />
          <DeviceSpecification specTitle="Launch" label="Announced" value={detail.announced} />
          <DeviceSpecification label="Status" value={detail.status} />
          <DeviceSpecification specTitle="Body" label="Dimensions" value={detail.dimensions} />
          <DeviceSpecification label="Weight" value={detail.weight} />
          <DeviceSpecification label="Protection" value={detail.protection} />
          <DeviceSpecification label="SIM" value={detail.sim} />
          <DeviceSpecification label="" value={detail.body_c} />
          <DeviceSpecification specTitle="Display" label="Type" value={detail.type} />
          <DeviceSpecification label="Size" value={detail.size} />
          <DeviceSpecification label="Resolution" value={detail.resolution} />
          <DeviceSpecification label="Multitouch" value={detail.multitouch} />
          <DeviceSpecification label="" value={detail.display_c} />
        </ContentBox>
      </div>
    );
  }
}

Element.propTypes = {
  containerWidth: PropTypes.number,
  detail: PropTypes.object,
  onClick: PropTypes.func,
};

const EnhancedElement = Dimensions()(Element);

export default EnhancedElement;
