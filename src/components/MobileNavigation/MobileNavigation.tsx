import React, { useState } from 'react';
import { AllBlur, AllFilmsIcon, HomeIcon, NavigationContainer, NavigationItem, SearchIcon, StyledLink } from './MobileNavigation.styles';
import { Link, useLocation } from 'react-router-dom';
import Search from '../search/Search';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setMobileSearch } from '../../store/searchSlice';

const MobileNavigation = () => {
  const location = useLocation();
  const mobileSearch = useAppSelector(state => state.search.mobileSearch);
  const dispatch = useAppDispatch()

  const switchMobileSearch = (value: boolean) => dispatch(setMobileSearch(value))

  return (
    <NavigationContainer>
      <NavigationItem active={location.pathname === '/'}>
        <StyledLink to="/">
        <HomeIcon active={location.pathname === '/'} />
        <span>Главная</span>
        </StyledLink>
      </NavigationItem>
      <NavigationItem active={location.pathname === '/films'}>
        <StyledLink to="/films">
        <AllFilmsIcon active={location.pathname === '/films'} />
        <span>Все фильмы</span>
        </StyledLink>
      </NavigationItem>
      <NavigationItem
        active={mobileSearch}
        onClick={() => switchMobileSearch(true)}
      >
        <SearchIcon />
        <span>Поиск</span>
      </NavigationItem>
    </NavigationContainer>
  );
};

export default MobileNavigation;
