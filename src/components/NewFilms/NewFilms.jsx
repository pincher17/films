import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addLimit, getnewFilmsThunk } from '../../store/newFilmsSlice';
import Card from '../Card/Card';
import s from './NewFilms.module.css';


const NewFilms = (props) =>{

  const films = useSelector(state => state.newFilms.films);
  const limit = useSelector(state => state.newFilms.limit);
  const dispatch = useDispatch()

  const showMore = () => dispatch(addLimit())
  
  useEffect(() => {

    dispatch(getnewFilmsThunk(limit))

    }, [limit])

  
    return (
    
    <div className={s.wrapper}>
        <div className={s.wrapper_name_block}>
            <div><p className={s.name_block}>Новые фильмы</p></div>
                <div>
                    <NavLink to={"/"} className={s.btn}>
                        Все фильмы
                    </NavLink>
                </div>
        </div>
    <Card cards={films} />
    <div className={s.wrapper_btn_show_more}><button onClick={showMore} className={s.btn}>Показать еще</button></div>
    </div>
    )
}

export default NewFilms;