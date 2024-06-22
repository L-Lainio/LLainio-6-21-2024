import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Header from './components/Header';
import './App.css';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { Box, Stack } from '@mui/system';
// import { unstable_capitalize as capitalize } from '@mui/utils';
// import { Typography } from '@mui/material';

// Theme definition
var theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733'
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F'
    }
  }
});

// ColorShowcase component
function ColorShowcase(_ref) {
  // Component implementation remains the same

  var color = _ref.color;
}

ColorShowcase.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired
};

export default function App() {
  return React.createElement(
    ThemeProvider,
    { theme: theme },
    React.createElement(CssBaseline, null),
    React.createElement(Header, null),
    React.createElement(
      'h2',
      null,
      Header
    ),
    React.createElement(Navigation, null),
    React.createElement(Projects, null),
    React.createElement(Footer, null),
    React.createElement(Profile, null),
    React.createElement(
      Stack,
      { direction: 'row', gap: 8 },
      React.createElement(ColorShowcase, { color: 'primary' }),
      React.createElement(ColorShowcase, { color: 'secondary' })
    )
  );
}