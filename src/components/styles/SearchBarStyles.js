import styled from 'styled-components';

const SearchBarStyles = styled.section`
  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    width: 100%;
    height: 46px;
    padding: 10px 20px;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border: 1px solid ${props => props.theme.lightGrey};
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 45px;
    width: 100%;
    border: 1px solid ${props => props.theme.lightGrey};
    background-color: #eef0f3;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    max-height: 91px;
    overflow-y: auto;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    color: ${props => props.theme.black};
    margin-bottom: 0px;
  }
  .react-autosuggest__suggestion:last-child {
    border-bottom: 0px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: ${props => props.theme.darkGrey};
  }
  .submit-btn {
    color: ${props => props.theme.white};
    border-radius: 0rem 0.3rem 0.3rem 0rem;
    font-size: 16px;
    padding: 10px 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: ${props => props.theme.pink};
    border-color: ${props => props.theme.pink};
  }
  .submit-btn:hover {
    color: #fff;
    background-color: ${props => props.theme.darkPink};
    border-color: ${props => props.theme.darkPink};
  }
  .submit-btn.disabled,
  .submit-btn:disabled {
    color: ${props => props.theme.white};
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .submit-btn.focus,
  .submit-btn:focus {
    box-shadow: none;
  }
  .submit-btn:not(:disabled):not(.disabled).active:focus,
  .submit-btn:not(:disabled):not(.disabled):active:focus,
  .show > .submit-btn.dropdown-toggle:focus {
    outline: none;
    box-shadow: none;
  }
  .submit-btn:not(:disabled):not(.disabled).active,
  .submit-btn:not(:disabled):not(.disabled):active,
  .show > .submit-btn.dropdown-toggle {
    color: ${props => props.theme.white};
    background-color: #545b62;
    border-color: #4e555b;
  }
`;

export default SearchBarStyles;
