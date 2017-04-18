import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';

import Img from './Img';
import HeaderWrapper from './HeaderWrapper';
import Logo from './PhoneCataloguesLogo.svg';
import FixedHeaderContainer from './FixedHeaderContainer';

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
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
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
    background-color: #ddd;
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

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
};

const getSuggestionValue = (suggestion) => {
  console.log(`get suggestion value ${suggestion}`);
  return suggestion.name;
};

const renderSuggestion = (suggestion) => {
  console.log(`render ${suggestion}`);
  return (
    <span>{suggestion.name}</span>
  );
};

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    console.log(value);
    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Search device',
      value,
      onChange: this.onChange
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
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps} />
              </AutosuggestWrapper>
            </div>
          </header>
        </HeaderWrapper>
      </FixedHeaderContainer>
    );
  }
}

export default Header;
