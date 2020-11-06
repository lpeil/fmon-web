import React from 'react';

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const NavbarLinks = () => (
  <Grid container direction="row" justify="center" className="links">
    <Link to="/">Início</Link>
    <Link to="/news">Notícias</Link>
    <Link to="/leagues">Campeonatos</Link>
  </Grid>
);

export default NavbarLinks;
