import Link from 'next/link';
import { Grid } from '@material-ui/core';

const NavbarLinks = () => (
  <Grid container direction="row" justify="center" className="links">
    <Link href="/">Início</Link>
    <Link href="/news">Notícias</Link>
    <Link href="/leagues">Campeonatos</Link>
  </Grid>
);

export default NavbarLinks;
