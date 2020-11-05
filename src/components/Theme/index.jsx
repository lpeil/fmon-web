import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#321450',
    },
  },
});

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

Theme.defaultProps = {
  children: {},
};

export default Theme;
