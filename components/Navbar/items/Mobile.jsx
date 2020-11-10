import { useState } from 'react';
import Link from 'next/link';
import {
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Receipt as NewsIcon,
  Apple as LeagueIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  ExitToApp,
} from '@material-ui/icons';

const generalLinks = [
  { name: 'Início', url: '/', icon: HomeIcon },
  { name: 'Notícias', url: '/news', icon: NewsIcon },
  { name: 'Campeonatos', url: '/leagues', icon: LeagueIcon },
];

const userLinks = [
  { name: 'Meu Perfil', url: '/auth/me', icon: PersonIcon },
  { name: 'Preferências', url: '/auth/settings', icon: SettingsIcon },
  { name: 'Sair', url: '/auth/logout', icon: ExitToApp },
];

const NavbarMobile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const listLink = (link, key) => (
    <Link href={link.url} key={key} className="mobile-link" onClick={toggleDrawer(false)}>
      <ListItem button>
        <ListItemIcon><link.icon /></ListItemIcon>
        <ListItemText primary={link.name} />
      </ListItem>
    </Link>
  );

  return (
    <Grid container justify="flex-end" className="mobile">
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <div className="mobile-menu">
          <List className="mobile-list">
            {generalLinks.map((link, key) => listLink(link, key))}
          </List>
          <Divider />
          <List className="mobile-list">
            {userLinks.map((link, key) => listLink(link, key))}
          </List>
        </div>
      </Drawer>
    </Grid>
  );
};

export default NavbarMobile;
