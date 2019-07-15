import React from 'react';
import { Container, Row, Col, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

const fixedHeader = {
  position: 'absolute',
  left: '0',
  right: '0',
};
const Header = () => (
  <div style={fixedHeader}>
    <Container>
      <Row>
        <Col>
          <Navbar expand="sm">
            <h3>
              <Link to="/" className="logo">
                Home
              </Link>
            </h3>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Header;
