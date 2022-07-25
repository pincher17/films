import React from 'react';
import s from './Card.module.css';


const Card = (props) =>{

    
    return (
    <div className={s.wrapper_cards}>
        {props.cards.map((i)=>
         <div className={s.card}>
            <img className={s.img} src={i.poster.previewUrl} alt="" />
            <p className={s.name}>{i.name}</p>
            <div className={s.year}>{i.year}</div>
         </div>
        )}
    </div>
    )
}

export default Card;