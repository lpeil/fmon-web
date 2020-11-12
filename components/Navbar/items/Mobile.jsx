import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  PersonAdd as PersonAddIcon,
  Settings as SettingsIcon,
  ExitToApp,
  ChevronRight,
  VpnKey as KeyIcon,
} from '@material-ui/icons';

const generalLinks = [
  { name: 'Início', url: '/', icon: HomeIcon },
  { name: 'Notícias', url: '/news', icon: NewsIcon },
  { name: 'Campeonatos', url: '/leagues', icon: LeagueIcon },
];

const NavbarMobile = () => {
  const user = useSelector((state) => state.user);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userLinks, setUserLinks] = useState([]);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  useEffect(() => {
    if (user.id > 0) {
      setUserLinks([
        { name: 'Meu Perfil', url: '/auth/me', icon: PersonIcon },
        { name: 'Preferências', url: '/auth/settings', icon: SettingsIcon },
        { name: 'Sair', url: '/auth/logout', icon: ExitToApp },
      ]);
    } else {
      setUserLinks([
        {
          id: 0, name: 'Entrar', url: '/auth/login', icon: ChevronRight,
        },
        {
          id: 1, name: 'Cadastrar-se', url: '/auth/register', icon: PersonAddIcon,
        },
        {
          id: 2, name: 'Recuperar Senha', url: '/auth/recoverPassword', icon: KeyIcon,
        },
      ]);
    }
  }, [user]);

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
