import React from 'react';
import LogoutButton from '../login/LogoutButton';

const MainHeader = () => {
  return (
    <div id='mainHeader'>
      <img src='svg/flamingoLogo.svg' height='80px'></img>
      <span id='menuIcon'>
        <LogoutButton />
      </span>
    </div>
  );
};

export default MainHeader;
