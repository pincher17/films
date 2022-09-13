import React from 'react';
import s from './Layout.module.css';

type PropsType ={
    children: React.ReactNode
}

const Layout: React.FC<PropsType> = (props) =>{


  
    return (
    <div className={s.layout}>
        {props.children}
    </div>
    )
}

export default Layout;