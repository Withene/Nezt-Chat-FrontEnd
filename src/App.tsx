import React from 'react';
import ReactDOM from 'react-dom';

import Home from './templates/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './styles/global';
import { defaultTheme } from './styles/theme';
import { AuthProv } from './hooks/auth';

export default function App() {
  return (
    <AuthProv>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <Home />
      </ThemeProvider>
    </AuthProv>
  );
}
