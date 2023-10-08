import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';
import s from './Header.module.css';
import logo from '../../assets/img/logo1.svg'

const Header: React.FC = () =>{

    return (
        <header className={s.header}>
        <div className={s.header_wrapper}>
        {/* <NavLink to={'/'} className={s.logo}>FILMS</NavLink> */}
        <NavLink to={'/'} className={s.logo}>
          <img className={s.logo} src={logo} alt='filmhub'/>
        </NavLink>
        <Search />
        <nav className={s.nav}>
        <NavLink to={'/films'} className={s.nav_item}>Все фильмы</NavLink>
        </nav>
        </div>
      </header>
    )
}

export default Header;