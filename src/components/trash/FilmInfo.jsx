import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmById } from '../../store/filmInfoSlice.ts';
import FilmTrailer from '../FilmPage/FilmTrailer';
import { useNavigate, useParams } from 'react-router-dom';
import FilmTrailer2 from '../FilmPage/FilmPage';
import s from './FilmInfo.module.css';
import LayoutFilm from '../layoutFilm/LayoutFilm';

const FilmInfo = (props) =>{


    return (
        <div className={s.film_info}>
        {/* <FilmTrailer name={film.name} />  */} 
        <FilmTrailer2 />   
        </div>
    
    )
}

export default FilmInfo;