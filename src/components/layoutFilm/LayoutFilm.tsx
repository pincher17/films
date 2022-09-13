import React from 'react';
import s from './LayoutFilm.module.css';

type PropsType ={
    children: React.ReactNode
}

const LayoutFilm: React.FC<PropsType> = (props) =>{


  
    return (
    <div className={s.layout}>
        {props.children}
    </div>
    )
}

export default LayoutFilm;