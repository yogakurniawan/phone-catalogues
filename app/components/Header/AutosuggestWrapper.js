import styled from 'styled-components';

const AutosuggestWrapper = styled.div`
  width: 100%;
  padding: 3px;
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
    height: 30px;
    border-radius: 5px;
    padding: 5px 10px;
    line-height: 1.4;
    font-size: 14px;
    width: 100%;
    outline: 0;
    box-shadow: none;
  }
`;

export default AutosuggestWrapper;
