import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { Button, Form, FormGroup, Row, Col } from 'reactstrap';
import { history } from '../helper';
import SearchBarStyles from './styles/SearchBarStyles';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const histories = JSON.parse(localStorage.getItem('searchHistory')) || [];

  return inputLength === 0
    ? []
    : histories.filter(
        searchHistory =>
          searchHistory.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;
const propTypes = {
  setSearchName: PropTypes.func.isRequired,
};

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      disabledButton: true,
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
      disabledButton: false,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    this.props.setSearchName(value); // eslint-disable-line
    const searchHistory =
      JSON.parse(localStorage.getItem('searchHistory')) || [];

    const filtered = searchHistory.filter(item => item.name === value);
    if (filtered.length === 0) {
      const search = { name: value };
      searchHistory.push(search);

      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }

    history.push(`/overview/${value}`);
  };

  render() {
    const { value, suggestions, disabledButton } = this.state;
    const inputProps = {
      placeholder: 'Type name',
      value,
      onChange: this.onChange,
    };

    return (
      <React.Fragment>
        <SearchBarStyles>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Row noGutters>
                <Col xs="8" sm="8">
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={
                      this.onSuggestionsFetchRequested
                    }
                    onSuggestionsClearRequested={
                      this.onSuggestionsClearRequested
                    }
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                  />
                </Col>
                <Col xs="4" sm="4">
                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={disabledButton}
                  >
                    SEARCH
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </SearchBarStyles>
      </React.Fragment>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = propTypes;
