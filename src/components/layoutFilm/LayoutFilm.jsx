import React from 'react';
import s from './LayoutFilm.module.css';


const LayoutFilm = (props) =>{


  
    return (
    <div className={s.layout}>
        {props.children}
    </div>
    )
}

export default LayoutFilm;