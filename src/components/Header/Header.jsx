import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) =>{



  
    return (
        <header className={s.header}>
        <div className={s.header_wrapper}>
        <NavLink to={'/'} className={s.logo}>FILMS</NavLink>
        <nav className={s.nav}>
        <NavLink to={'/'} className={s.nav_item}>Фильмы</NavLink>
        <NavLink to={'/'} className={s.nav_item}>Сериалы</NavLink>
        <NavLink to={'/'} className={s.nav_item}>Cохраненное</NavLink>
        </nav>
        </div>
      </header>
    )
}

export default Header;