import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';

import Img from './Img';
import HeaderWrapper from './HeaderWrapper';
import Logo from './PhoneCataloguesLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';
import AutosuggestWrapper from './AutosuggestWrapper';
import NavigationWrapper from './NavigationWrapper';
import NavSearchWrapper from './NavSearchWrapper';
import UnorderedListWrapper from './UnorderedListWrapper';
import ListItemWrapper from './ListItemWrapper';

const InputGroupButton = styled.span`
  color: #bdc3c7;
  position: absolute;
  padding: 7px;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  display: inline-block;
  right: 0;
  top: -1px;
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
        if (regex.test(device.description)) {
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
          <header>
            <Link to="/">
              <Img src={Logo} alt="Phone Catalogues - Logo" />
            </Link>
            <NavigationWrapper>
              <nav>
                <UnorderedListWrapper>
                  <NavSearchWrapper>
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
                  </NavSearchWrapper>
                  <ListItemWrapper>
                    <Link to="/">
                      Home
                    </Link>
                  </ListItemWrapper>
                  <ListItemWrapper>
                    <Link to="/reviews">
                      Reviews
                    </Link>
                  </ListItemWrapper>
                </UnorderedListWrapper>
              </nav>
            </NavigationWrapper>
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
