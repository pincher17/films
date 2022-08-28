import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmById } from '../../store/filmInfoSlice';
import FilmTrailer from './FilmTrailer';
import { useNavigate, useParams } from 'react-router-dom';
import FilmTrailer2 from './FilmTrailer2';
import s from './FilmInfo.module.css';
import LayoutFilm from '../layoutFilm/LayoutFilm';

const FilmInfo = (props) =>{
/*     const dispatch = useDispatch()
    
    const film = useSelector(state => state.filmInfo.info)
    let { id } = useParams();
    
    const navigate = useNavigate()

    useEffect(() => {
		dispatch(getFilmById(id))
    }, [id]);
    
    useEffect(() => {
      navigate(`../film/${id}`, { replace: true })
      },[id]) */

    
    /* if(!film.name) return <div>loading...</div> */

    return (
        <div className={s.film_info}>
        {/* <FilmTrailer name={film.name} />  */} 
        <FilmTrailer2 />   
        </div>
    
    )
}

export default FilmInfo;