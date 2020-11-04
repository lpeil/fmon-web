import React from 'react';

import { Grid } from '@material-ui/core';

import Theme from './utils/Theme';
import { Navbar } from './components';

const App = () => (
  <Theme>
    <Grid container direction="column">
      <Navbar />
    </Grid>
  </Theme>
);

export default App;
