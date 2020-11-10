import { Grid, Hidden } from '@material-ui/core';
import NavbarLogo from './items/Logo';
import NavbarLinks from './items/Links';
import NavbarUserOptions from './items/UserOptions';
import NavbarMobile from './items/Mobile';

const Navbar = () => (
  <Grid
    container
    alignItems="center"
    direction="row"
    justify="space-between"
    className="navbar"
  >
    <Grid container item md={2} sm={6} xs={6} justify="center">
      <NavbarLogo />
    </Grid>
    <Hidden smDown>
      <Grid container item md={5}>
        <NavbarLinks />
      </Grid>
      <Grid container item md={2}>
        <NavbarUserOptions />
      </Grid>
    </Hidden>
    <Hidden mdUp>
      <Grid container item xs={4}>
        <NavbarMobile />
      </Grid>
    </Hidden>
  </Grid>
);

export default Navbar;
