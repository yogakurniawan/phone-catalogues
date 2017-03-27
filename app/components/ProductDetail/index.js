import React, { PropTypes } from 'react';
import styled from 'styled-components';
import H2 from 'components/H2';
import { FaChevronLeft } from 'react-icons/lib/fa/';
import { MdSdStorage, MdPhoneAndroid } from 'react-icons/lib/md/';
import RoundedBoxStyle from 'components/RoundedBox';
import P from 'components/P';
import Img from './Img';

const Div = styled.div`${RoundedBoxStyle}`;
const HeaderBox = styled(Div) `
  span {
    display: inline-block;
  }
  
  padding-left: 10px;
  background-color: #fbebeb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ee9797' fill-opacity='0.23' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const ImgWrapper = styled.div`
  img {
    border-radius: 14px;
  }
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
`;

const RightDescription = styled.div`
  svg {
    color: #2c3e50;
  }
`;

function Element({ detail, onClick }) { // eslint-disable-line react/prefer-stateless-function
  return (
    <HeaderBox>
      <TitleNav>
        <FaChevronLeft onClick={onClick} size={20} />
        <span><H2>{detail.name}</H2></span>
      </TitleNav>
      <div className="row">
        <div className="col-xs-4">
          <ImgWrapper>
            <Img src={detail.imageurl} />
          </ImgWrapper>
        </div>
        <div className="col-xs-8 start-xs">
          <RightDescription>
            <div className="row">
              <div style={{ display: 'table-cell', marginRight: '4px' }}>
                <MdSdStorage size={16} />
              </div>
              <div style={{ display: 'table-cell', paddingTop: '4px' }}>
                <P>{detail.internal}</P>
              </div>
            </div>
            <div className="row">
              <div style={{ display: 'table-cell', marginRight: '4px' }}>
                <MdPhoneAndroid size={16} />
              </div>
              <div style={{ display: 'table-cell', paddingTop: '4px' }}>
                <P>{`${detail.dimensions}, ${detail.weight}`}</P>
              </div>
            </div>
          </RightDescription>
        </div>
      </div>

    </HeaderBox>
  );
}

Element.propTypes = {
  detail: PropTypes.object,
  onClick: PropTypes.func,
};

export default Element;
