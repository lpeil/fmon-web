import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import {
  Grid,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import {
  Person as PersonIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';

const NavbarUserOptions = () => {
  const user = useSelector((state) => state.user);
  const [menuUser, setMenuUser] = useState(false);
  const [menuNotification, setMenuNotification] = useState(false);
  const userButton = useRef();
  const notificationsButton = useRef();

  const [userLinks, setUserLinks] = useState([]);
  const [notificationsLinks, setNotificationsLinks] = useState([]);

  useEffect(() => {
    if (user.id > 0) {
      setUserLinks([
        { id: 0, name: 'Meu Perfil', url: '/auth/me' },
        { id: 1, name: 'Preferências', url: '/auth/settings' },
        { id: 2, name: 'Sair', url: '/auth/logout' },
      ]);
    } else {
      setUserLinks([
        { id: 0, name: 'Entrar', url: '/auth/login' },
        { id: 1, name: 'Cadastrar-se', url: '/auth/register' },
        { id: 2, name: 'Recuperar Senha', url: '/auth/recoverPassword' },
      ]);
    }

    setNotificationsLinks([
      { id: 0, name: 'Teste 1', url: '/notification/1' },
      { id: 1, name: 'Teste 2', url: '/notification/2' },
      { id: 2, name: 'Teste 3', url: '/notification/3' },
    ]);
  }, [user]);

  const handleOpenMenuUser = () => {
    setMenuUser(!menuUser);
  };

  const handleOpenMenuNotifications = () => {
    setMenuNotification(!menuNotification);
  };

  const popperMenu = (open, setOpen, myRef, links) => {
    const handleClose = (el) => {
      if (!el.path || !el.path.includes(myRef.current)) {
        setOpen(false);
      }
    };

    return (
      <Popper
        open={open}
        anchorEl={myRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            in={TransitionProps.in}
            onEnter={TransitionProps.onEnter}
            onExited={TransitionProps.onExited}
            style={{ transformOrigin: 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {links.map((link) => (
                    <Link href={link.url} key={link.id}>
                      <MenuItem onClick={handleClose}>
                        {link.name}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  };

  return (
    <Grid container direction="row" justify="center" className="user-options">
      <Grid item xs={3}>
        <IconButton onClick={handleOpenMenuNotifications} ref={notificationsButton}>
          <NotificationsIcon className="icon" />
        </IconButton>
        {popperMenu(
          menuNotification,
          setMenuNotification,
          notificationsButton,
          notificationsLinks,
        )}
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={handleOpenMenuUser} ref={userButton}>
          <PersonIcon className="icon" />
        </IconButton>
        {popperMenu(
          menuUser,
          setMenuUser,
          userButton,
          userLinks,
        )}
      </Grid>
    </Grid>
  );
};

export default NavbarUserOptions;
