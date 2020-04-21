/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Content, Footer } from '../styles/components';
import './layout.css';

import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <div>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, elaborado con ❤ en
          <a href='https://www.Platzi.com'>Platzi</a>
        </Footer>
      </div>
    </Content>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
