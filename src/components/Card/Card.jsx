import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Card.module.css';


const Card = (props) =>{

    
    return (
    <div className={s.wrapper_cards}>
        {props.cards.map((i)=>
         <div key={i.id} className={s.card}>
            <NavLink to={'/film/' + i.id }>
            <div className={s.img_wrapper}>
            <img className={s.img} src={i.poster.previewUrl} alt="" />
            <div className={s.rating}>
                <span className={s.rating_num}>{i.rating.kp}</span>
                </div>
            <p className={s.name}>{i.name}</p>
            <div className={s.year}>{i.year}</div>
            </div>
            </NavLink>
         </div>
        )}
        
    </div>
    )
}

export default Card;