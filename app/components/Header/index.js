import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';

import Img from './Img';
import HeaderWrapper from './HeaderWrapper';
import Logo from './PhoneCataloguesLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';

const InputGroupButton = styled.span`
  color: #bdc3c7;
  position: absolute;
  padding: 10px;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  display: inline-block;
  right: 0;
  top: -1px;
`;

const AutosuggestWrapper = styled.div`
  width: 100%;
    .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__container--open .react-autosuggest__input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: relative;
    background-color: #f9f9f9;
    font-weight: 300;
    font-size: 0.875em;
    color: #2c3e50;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    color: #2c3e50
    border: 1px solid #bdc3c7;
    border-top: none;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: rgba(189, 195, 199, 0.31);
  }
  input {
    border: 1px solid #bdc3c7;
    border-bottom: none;
    color: #2c3e50;
    background-color: #f9f9f9;
    height: 35px;
    border-radius: 5px;
    padding: 5px 10px;
    line-height: 1.4;
    font-size: 1em;
    width: 100%;
    outline: 0;
    box-shadow: none;
  }
`;
const Thumbnail = styled(Img) `
  width: 10%;
  margin: 0;
  display: inline
`;

const escapeRegexCharacters = (str) => (str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

const getSuggestions = (value, allDevices) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue !== '') {
    const regex = new RegExp(`${escapedValue}`, 'i');
    const results = [];
    allDevices.map((device) => {
      if (results.length < 8) {
        if (regex.test(device.name)) {
          results.push(device);
        }
      }
      return null;
    });
    return results;
  }
  return [];
};

const getSuggestionValue = (suggestion) => (suggestion.name);

const renderSuggestion = (suggestion) => (
  <div>
    <span style={{ marginRight: '20px', display: 'inline' }}><Thumbnail src={suggestion.imageurl} /></span>
    <span style={{ display: 'inline' }}>{suggestion.name}</span>
  </div>
);

const renderInputComponent = (inputProps) => (
  <div className="inputContainer">
    <InputGroupButton className="fa fa-search"></InputGroupButton>
    <input {...inputProps} />
  </div>
);

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const { allDevices } = this.props;
    this.setState({
      suggestions: getSuggestions(value, allDevices),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const { onSuggestionSelected } = this.props;
    const inputProps = {
      placeholder: 'Search phone',
      value,
      onChange: this.onChange,
    };

    return (
      <FixedHeaderContainer>
        <HeaderWrapper>
          <header className="row">
            <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2">
              <Link to="/">
                <Img src={Logo} alt="Phone Catalogues - Logo" />
              </Link>
            </div>
            <div className="col-xs-8 col-sm-6 col-md-6 col-lg-6">
              <AutosuggestWrapper>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionSelected={onSuggestionSelected}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  renderInputComponent={renderInputComponent}
                />
              </AutosuggestWrapper>
            </div>
          </header>
        </HeaderWrapper>
      </FixedHeaderContainer>
    );
  }
}

Header.propTypes = {
  onSuggestionSelected: React.PropTypes.func,
  allDevices: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default Header;
