import React from 'react';
import Head from './head';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Head />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;
