import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { setSearchName } from '../actions';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';

const propTypes = {
  searchName: PropTypes.string.isRequired,
  onSearchNameChange: PropTypes.func.isRequired,
};

function Home({ searchName, onSearchNameChange }) {
  return (
    <React.Fragment>
      <Layout>
        <Container>
          <Row className="vertical-justify-center">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3 className="page-heading">Employee Explorer</h3>
              <SearchBar
                searchName={searchName}
                setSearchName={onSearchNameChange}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

Home.propTypes = propTypes;

const mapStateToProps = state => ({
  searchName: state.searchName.name,
});

const mapDispatchToProps = dispatch => ({
  onSearchNameChange: name => dispatch(setSearchName(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
