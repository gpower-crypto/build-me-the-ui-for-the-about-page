
import React from 'react';
import HeaderTopBar from './HeaderTopBar';
import HeaderMainNavigation from './HeaderMainNavigation';
import HeaderBottomNavigation from './HeaderBottomNavigation';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center w-full bg-white">
      <HeaderTopBar />
      <HeaderMainNavigation />
      <HeaderBottomNavigation />
    </header>
  );
};

export default Header;
