import React, { useState } from 'react';
import { AllFilmsIcon, HomeIcon, NavigationContainer, NavigationItem, SearchIcon } from './MobileNavigation.styles';

const MobileNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <NavigationContainer>
      <NavigationItem
        active={activeTab === 'home'}
        onClick={() => handleTabClick('home')}
      >
        <HomeIcon />
        <span>Главная</span>
      </NavigationItem>
      <NavigationItem
        active={activeTab === 'movies'}
        onClick={() => handleTabClick('movies')}
      >
        <AllFilmsIcon />
        <span>Все фильмы</span>
      </NavigationItem>
      <NavigationItem
        active={activeTab === 'search'}
        onClick={() => handleTabClick('search')}
      >
        <SearchIcon />
        <span>Поиск</span>
      </NavigationItem>
    </NavigationContainer>
  );
};

export default MobileNavigation;
