import React from 'react';
import logo from '../../images/Logo.svg';
import { LogoThumb, LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <a href="https://m.goit.global/ua/new/" target={'_blank'} rel="noreferrer">
      <LogoThumb>
        <LogoWrapper src={logo} alt="logo" />
      </LogoThumb>
    </a>
  );
};

export { Logo };
