import React from 'react';
import s from './Layout.module.css';


const Layout = (props) =>{


  
    return (
    <div className={s.layout}>
        {props.children}
    </div>
    )
}

export default Layout;