import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { searchEmployee } from '../actions';
import Layout from '../components/Layout';

const propTypes = {
  searchName: PropTypes.string.isRequired,
  onSearchEmployee: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  employees: PropTypes.object.isRequired,
};

const defaultProps = {};

class Overview extends React.Component {
  componentDidMount() {
    const {
      searchName,
      onSearchEmployee,
      match: { params },
    } = this.props;
    const name = searchName || params.name;
    onSearchEmployee(name);
  }

  renderSubCo = scos => scos.map((sco, i) => <li key={i}>{sco}</li>);

  render() {
    const {
      searchName,
      employees: { loading, data, error },
      match: { params },
    } = this.props;
    const name = searchName || params.name;

    return (
      <React.Fragment>
        <Layout>
          <Container>
            <Row className="vertical-justify-center">
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h3>Employee Overview</h3>
                {loading && <p>Loading...</p>}
                {!loading && data.length < 0 ? (
                  <p>This employee is not listed in the directory.</p>
                ) : (
                  data.map((item, i) => (
                    <div key={i}>
                      {typeof item !== 'object' ? (
                        <div>
                          <h4>
                            {name} is <b>{item}</b>.
                          </h4>
                        </div>
                      ) : (
                        <div>
                          <h4>Subordinates of employee {name}:</h4>
                          <ul>
                            {this.renderSubCo(item['direct-subordinates'])}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                )}
                {error && <p>{error}</p>}
              </Col>
            </Row>
          </Container>
        </Layout>
      </React.Fragment>
    );
  }
}

Overview.propTypes = propTypes;
Overview.defaultProps = defaultProps;

const mapStateToProps = state => ({
  searchName: state.searchName.name,
  employees: state.employees,
});

const mapDispatchToProps = dispatch => ({
  onSearchEmployee: searchName => dispatch(searchEmployee(searchName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
