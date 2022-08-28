import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { chooseMovie, getFilmById } from '../../store/filmInfoSlice';
import FilmInfo from '../FilmPage/FilmInfo';
import s from './Card.module.css';


const Card = (props) =>{
    const dispatch = useDispatch()
    const filmId = useSelector(state => state.filmInfo.selectedFilm)

    
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
            {/* {filmId === i.id && <FilmInfo filmId={filmId} />} */}
         </div>
        )}
        
    </div>
    )
}

export default Card;