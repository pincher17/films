import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addLimit, getnewFilmsThunk } from '../../store/newFilmsSlice';
import Cards from '../Cards/Cards';
import s from './NewFilms.module.css';


const NewFilms: React.FC = () =>{

  const films = useAppSelector(state => state.newFilms.films);
  const limit = useAppSelector(state => state.newFilms.limit);
  const dispatch = useAppDispatch()

  const showMore = () => dispatch(addLimit())
  
  useEffect(() => {

    dispatch(getnewFilmsThunk(limit))

    }, [limit])

  
    return (
    
    <div className={s.wrapper}>
        <div className={s.wrapper_name_block}>
            <div><p className={s.name_block}>Новые фильмы</p></div>
                <div>
                    <NavLink to={"/films"} className={s.btn}>
                        Все фильмы
                    </NavLink>
                </div>
        </div>
    <Cards cards={films} />
    <div className={s.wrapper_btn_show_more}><button onClick={showMore} className={s.btn}>Показать еще</button></div>
    </div>
    )
}

export default NewFilms;