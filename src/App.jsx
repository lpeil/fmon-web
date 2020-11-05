import React from 'react';

import { Grid } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Theme } from './components';

const App = () => (
  <BrowserRouter>
    <Theme>
      <Grid container direction="column">
        <Navbar />
      </Grid>
    </Theme>
  </BrowserRouter>
);

export default App;
