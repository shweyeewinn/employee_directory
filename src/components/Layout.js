import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';

const propTypes = {
  children: PropTypes.object.isRequired,
};

const theme = {
  black: '#292929',
  darkGrey: '#dddddd',
  lightGrey: '#aaaaaa',
  white: '#ffffff',
  pink: '#f83958',
  darkPink: '#e72746',
  maxWidth: '1740px',
  fontFamily: 'Roboto',
  fontWeight: 700,
};

const StyledPage = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.fontFamily}, sans-serif;

  h3 {
    color: ${props => props.theme.white};
    text-align: center;
    margin: 0 0 2rem 0;
    font-weight: ${props => props.theme.fontWeight};
    font-size: 2rem;
    line-height: 2.2;
  }
  h4 {
    color: ${props => props.theme.white};
    margin: 0 0 2rem 0;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1;
  }
  p {
    color: ${props => props.theme.white};
    font-size: 1rem;
    line-height: 1.2;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: ${props => props.theme.white};
    text-decoration: none;
  }
  li > a:hover {
    color: ${props => props.theme.lightGrey};
  }
  .vertical-justify-center {
    min-height: 100vh;
    align-items: center;
  }
  .logo {
    color: #f83958;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Header />
      {children}
    </StyledPage>
  </ThemeProvider>
);

Layout.propTypes = propTypes;

export default Layout;
