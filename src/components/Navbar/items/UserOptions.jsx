import React from 'react';

import { Grid, IconButton } from '@material-ui/core';
import {
  Person as PersonIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';

const NavbarLogo = () => (
  <Grid container direction="row" justify="center" className="user-options">
    <Grid item xs={3}>
      <IconButton>
        <NotificationsIcon className="icon" />
      </IconButton>
    </Grid>
    <Grid item xs={3}>
      <IconButton>
        <PersonIcon className="icon" />
      </IconButton>
    </Grid>
  </Grid>
);

export default NavbarLogo;
