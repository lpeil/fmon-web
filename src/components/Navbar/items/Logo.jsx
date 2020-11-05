import React from 'react';

import { Link } from 'react-router-dom';
import LogoSVG from '../../../assets/logo.svg';

const NavbarLogo = () => (
  <Link to="/" className="logo">
    <img src={LogoSVG} alt="Logo" />
  </Link>
);

export default NavbarLogo;
