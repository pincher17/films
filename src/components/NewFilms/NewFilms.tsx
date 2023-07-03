import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addLimit, getnewFilmsThunk } from '../../store/newFilmsSlice';
import s from './NewFilms.module.css';
import { Button } from '../allFilmsPage/AllFilmsPage.styles';
import SwiperMainPage from '../SwiperMainPage/SwiperMainPage';


const NewFilms: React.FC = () =>{

  /* const films = useAppSelector(state => state.newFilms.films); */
  const limit = useAppSelector(state => state.newFilms.limit);
  const dispatch = useAppDispatch()
 /*  const showMore = () => dispatch(addLimit()) */
  
  useEffect(() => {

    dispatch(getnewFilmsThunk(limit))

    }, [limit])

  
    return (
    
    <div className={s.wrapper}>
        <div className={s.wrapper_name_block}>
            {/* <div><p className={s.name_block}>Фильмы</p></div> */}
                <div>
                    <NavLink to={"/films"} className={s.btn}>
                        Все фильмы
                    </NavLink>
                </div>
        </div>

    <SwiperMainPage />
    {/* <Cards cards={films} />
    <div className={s.wrapper_btn_show_more}>
        <Button onClick={showMore}>Показать еще</Button>
    </div> */}
    </div>
    )
}

export default NewFilms;